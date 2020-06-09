// import { decodeToken } from 'api/middlewares';
import { GraphQLClient } from 'graphql-request';
import { getField, generateInput } from 'api/utils';
import gql from 'graphql-tag';
import { PrismaClient } from '@prisma/client';
import pluralize from 'pluralize';

const prisma = new PrismaClient();

export default async function userHandler(req, res) {
  const { query, method, headers, body } = req;
  const resource = pluralize.singular(query[':resource']);
  const { pagination, sort, filter, range } = query;

  switch (method) {
    case 'GET':
      let page, perPage, field, order, from, to;

      if (range) {
        let rangeArray = JSON.parse(range);

        from = rangeArray[0];
        to = rangeArray[1];
      }

      if (pagination) {
        if (pagination.page) {
          page = pagination.page;
        }
        if (pagination.perPage) {
          perPage = pagination.perPage;
        }
      }

      if (sort) {
        let sortArray = JSON.parse(sort);
        field = sortArray[0];
        order = sortArray[1].toLowerCase();
      }

      let query = {};
      if (perPage && page) {
        query.take = perPage;
        query.skip = page * perPage;
      } else if (typeof from === 'number' && typeof to === 'number') {
        query.take = to - from;
        query.skip = from;
      }
      if (field && order) {
        query.orderBy = {
          [field]: order,
        };
      }
      let filterObject;
      let where = {};

      // TIPS: Middlewares
      if (resource === 'platform' || resource === 'company') {
        where = {
          ...where,
          owner: {
            id: req.user.id,
          },
        };
      } else if (
        resource === 'product'
        // ||
        // resource === "commands" ||
        // resource === "invoices" ||
        // resource === "customers"
      ) {
        where = {
          ...where,
          company: {
            id: req.user.permissions.companyId,
          },
        };
      }

      if (filter) {
        const filterObject = JSON.parse(filter);

        for (const key in filterObject) {
          if (filterObject.hasOwnProperty(key)) {
            const value = filterObject[key];
            const thisField = getField(key);

            if (key.endsWith('_gte')) {
              console.log(key);
              // TODO: find better way to organize this
              // first_seen, last_seen is a datetime field in customers
              // date is a datetime field in most other resources
              const isDateField = thisField === 'createdAt' || thisField === 'firstSeen' || thisField === 'lastSeen';
              where = {
                ...where,
                [thisField]: {
                  gte: isDateField ? new Date(value) : parseFloat(value),
                },
              };
            } else if (key === 'q') {
              if (resource === 'review') {
                where = {
                  ...where,
                  comment: {
                    contains: value,
                  },
                };
              } else if (resource === 'customer') {
                where = {
                  ...where,
                  OR: [
                    {
                      firstName: {
                        contains: value,
                      },
                    },
                    {
                      lastName: {
                        contains: value,
                      },
                    },
                  ],
                };
              } else if (resource === 'order') {
                where = {
                  ...where,
                  OR: [
                    {
                      customer: {
                        firstName: {
                          contains: value,
                        },
                      },
                    },
                    {
                      customer: {
                        lastName: {
                          contains: value,
                        },
                      },
                    },
                  ],
                };
              } else if (resource === 'product') {
                where = {
                  ...where,

                  // Todo: find a universal field name for search
                  description: {
                    contains: value,
                  },
                };
              }
              // getManyReference
            } else if (key.endsWith('_lte')) {
              console.log(key);

              where = {
                ...where,
                [thisField]: {
                  lte: thisField === 'createdAt' ? new Date(value) : parseFloat(value),
                },
              };
              // getManyReference
            } else if (key.endsWith('Id')) {
              where = {
                ...where,
                [thisField]: {
                  id: {
                    equals: parseInt(value),
                  },
                },
              };
            } else if (key === 'id' && Array.isArray(value)) {
              where = {
                ...where,
                id: {
                  in: value,
                },
              };
            } else if (resource === 'customer' && key === 'groups') {
              // TODO: find a way to query from string array
              console.log(value);
              where = {
                ...where,
                // groups: {
                //   in: [value],
                // },
              };
            } else {
              where = {
                ...where,
                [key]: value,
              };
            }
          }
        }
        if (where) {
          query.where = where;
        }
      }

      // HACK: include basket in retuning data for those entities
      if (resource === 'order' || resource === 'product') {
        query.include = {
          orderItems: true,
        };
      }
      console.log(resource, where, query);
      const total = await prisma[resource].count({ where });
      const data = await prisma[resource].findMany(query);
      // res.header("Access-Control-Allow-Origin", "*");
      // res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
      // res.header("Access-Control-Allow-Headers", "Content-Type,x-access-token");
      // res.header("Access-Control-Expose-Headers", "X-Total-Count");
      // res.header("X-Total-Count", "30");
      if (typeof from === 'number' && typeof to === 'number') {
        res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader('Content-Range', `${resource} ${from}-${to}/${total}`);
      }

      res.json(data);
      break;
    case 'POST':
      const newItem = await prisma[resource].create({
        data: generateInput(body),
      });
      res.json(newItem);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
