// import { decodeToken } from 'api/middlewares';
import { GraphQLClient } from 'graphql-request';
import { getField, generateInput } from 'Api/middleware/adapter';
import gql from 'graphql-tag';
import { PrismaClient } from '@prisma/client';
import pluralize from 'pluralize';
import meMiddleware from 'Api/middleware/me';
import { order, customer, invoice, product, category, review } from 'Api/adapter';

const prisma = new PrismaClient();

const handler = async (req, res) => {
  console.log(req.user);
  const { query, method, headers, body, user } = req;
  const resource = pluralize.singular(query[':resource']);
  const { pagination, sort, range } = query;
  const filter = JSON.parse(query.filter);
  // process from and to
  let from, to;
  if (range) {
    const rangeArray = JSON.parse(range);
    from = rangeArray[0];
    to = rangeArray[1];
  }
  switch (method) {
    case 'GET':
      let findMany;
      if (resource === 'order') {
        findMany = await order.findMany(
          {
            resource,
            pagination,
            sort,
            filter,
            from,
            to,
          },
          user
        );
      } else if (resource === 'customer') {
        findMany = await customer.findMany(
          {
            resource,
            pagination,
            sort,
            filter,
            from,
            to,
          },
          user
        );
      } else if (resource === 'invoice') {
        findMany = await invoice.findMany(
          {
            resource,
            pagination,
            sort,
            filter,
            from,
            to,
          },
          user
        );
      } else if (resource === 'product') {
        findMany = await product.findMany(
          {
            resource,
            pagination,
            sort,
            filter,
            from,
            to,
          },
          user
        );
      } else if (resource === 'category') {
        findMany = await category.findMany(
          {
            resource,
            pagination,
            sort,
            filter,
            from,
            to,
          },
          user
        );
      } else if (resource === 'review') {
        findMany = await review.findMany(
          {
            resource,
            pagination,
            sort,
            filter,
            from,
            to,
          },
          user
        );
      } else {
        res.status(405).end(`Resource ${resource} Not Allowed`);
      }

      if (typeof from === 'number' && typeof to === 'number') {
        res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader('Content-Range', `${resource} ${from}-${to}/${findMany.total}`);
      }
      res.json(findMany.data);
      break;
    case 'POST':
      let createOne;
      if (resource === 'order') {
        createOne = await order.createOne(body, user);
      } else if (resource === 'customer') {
        createOne = await customer.createOne(body, user);
      } else if (resource === 'invoice') {
        createOne = await invoice.createOne(body, user);
      } else if (resource === 'product') {
        createOne = await product.createOne(body, user);
      } else if (resource === 'category') {
        createOne = await category.createOne(body, user);
      } else if (resource === 'review') {
        createOne = await review.createOne(body, user);
      } else {
        res.status(405).end(`Resource ${resource} Not Allowed`);
      }
      res.json(createOne);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default meMiddleware(handler);
