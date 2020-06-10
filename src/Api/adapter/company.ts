import { PrismaClient } from '@prisma/client'
import {
  getField,
  generateInput,
  buildQuery,
  ownerWhereFilter,
  companyWhereFilter,
  ownerWhereFilter,
} from 'Api/middleware/adapter'

const prisma = new PrismaClient()

const findOne = (id, user) => {
  const query: any = {}
  query.where = { id: parseInt(id) }
  return prisma.company.findOne(query)
}

const updateOne = ({ id, body }, user) => {
  return prisma.company.update({
    where: {
      id: parseInt(id),
    },
    data: generateInput(body),
  })
}

const deleteOne = (id, user) => {
  return prisma.company.delete({
    where: {
      id: parseInt(id),
    },
  })
}

// const findMany = (resource,
//   pagination,
//   sort,
//   filter,
//   range) => {
//   let page, perPage, field, order, from, to;

//   if (range) {
//     let rangeArray = JSON.parse(range);

//     from = rangeArray[0];
//     to = rangeArray[1];
//   }

//   if (pagination) {
//     if (pagination.page) {
//       page = pagination.page;
//     }
//     if (pagination.perPage) {
//       perPage = pagination.perPage;
//     }
//   }

//   if (sort) {
//     let sortArray = JSON.parse(sort);
//     field = sortArray[0];
//     order = sortArray[1].toLowerCase();
//   }

//   let query = {};
//   if (perPage && page) {
//     query.take = perPage;
//     query.skip = page * perPage;
//   } else if (typeof from === 'number' && typeof to === 'number') {
//     query.take = to - from;
//     query.skip = from;
//   }
//   if (field && order) {
//     query.orderBy = {
//       [field]: order,
//     };
//   }
//   let filterObject;
//   let where = {};

//   // TIPS: Middlewares
//   if (resource === 'platform' || resource === 'company') {
//     where = {
//       ...where,
//       owner: {
//         id: req.user.user_id,
//       },
//     };
//   } else if (resource === 'product' || resource === 'order' || resource === 'invoice' || resource === 'customer') {
//     where = {
//       ...where,
//       company: {
//         id: req.user.permissions.companyId,
//       },
//     };
//   }

//   if (filter) {
//     const filterObject = JSON.parse(filter);

//     for (const key in filterObject) {
//       if (filterObject.hasOwnProperty(key)) {
//         const value = filterObject[key];
//         const thisField = getField(key);

//         if (key.endsWith('_gte')) {
//           console.log(key);
//           // TODO: find better way to organize this
//           // first_seen, last_seen is a datetime field in customers
//           // date is a datetime field in most other resources
//           const isDateField = thisField === 'createdAt' || thisField === 'firstSeen' || thisField === 'lastSeen';
//           where = {
//             ...where,
//             [thisField]: {
//               gte: isDateField ? new Date(value) : parseFloat(value),
//             },
//           };
//         } else if (key === 'q') {
//           if (resource === 'review') {
//             where = {
//               ...where,
//               comment: {
//                 contains: value,
//               },
//             };
//           } else if (resource === 'customer') {
//             where = {
//               ...where,
//               OR: [
//                 {
//                   firstName: {
//                     contains: value,
//                   },
//                 },
//                 {
//                   lastName: {
//                     contains: value,
//                   },
//                 },
//               ],
//             };
//           } else if (resource === 'order') {
//             where = {
//               ...where,
//               OR: [
//                 {
//                   customer: {
//                     firstName: {
//                       contains: value,
//                     },
//                   },
//                 },
//                 {
//                   customer: {
//                     lastName: {
//                       contains: value,
//                     },
//                   },
//                 },
//               ],
//             };
//           } else if (resource === 'product') {
//             where = {
//               ...where,

//               // Todo: find a universal field name for search
//               description: {
//                 contains: value,
//               },
//             };
//           }
//           // getManyReference
//         } else if (key.endsWith('_lte')) {
//           console.log(key);

//           where = {
//             ...where,
//             [thisField]: {
//               lte: thisField === 'createdAt' ? new Date(value) : parseFloat(value),
//             },
//           };
//           // getManyReference
//         } else if (key.endsWith('Id')) {
//           where = {
//             ...where,
//             [thisField]: {
//               id: {
//                 equals: parseInt(value),
//               },
//             },
//           };
//         } else if (key === 'id' && Array.isArray(value)) {
//           where = {
//             ...where,
//             id: {
//               in: value,
//             },
//           };
//         } else if (resource === 'customer' && key === 'groups') {
//           // TODO: find a way to query from string array
//           console.log(value);
//           where = {
//             ...where,
//             // groups: {
//             //   in: [value],
//             // },
//           };
//         } else {
//           where = {
//             ...where,
//             [key]: value,
//           };
//         }
//       }
//     }
//     if (where) {
//       query.where = where;
//     }
//   }

//   // HACK: include basket in retuning data for those entities
//   if (resource === 'order' || resource === 'product') {
//     query.include = {
//       orderItems: true,
//     };
//   }
//   console.log(resource, where, query);
//   const total = await prisma.category.count({ where });
//   const data = await prisma.category.findMany(query);
//   return data
// }

const findMany = async ({ resource, pagination, sort, filter, from, to }, user) => {
  // Check if auth user is passed
  if (!user || !user.user_id) {
    throw new Error('User is not provided')
  }
  // build pagination, sort, and regular filters
  const buildResult: any = buildQuery({ pagination, sort, from, to, filter })
  let extraWhere = {}
  // process leftover filters
  if (buildResult.remainFilters) {
    for (const key in buildResult.remainFilters) {
      if (buildResult.remainFilters.hasOwnProperty(key)) {
        const value = buildResult.remainFilters[key]
        if (key === 'q') {
        } else {
          extraWhere = {
            ...extraWhere,
            [key]: value,
          }
        }
      }
    }
  }
  // Add owner where clause
  extraWhere = ownerWhereFilter(extraWhere, user.user_id)

  buildResult.query.where = {
    ...buildResult.query.where,
    ...extraWhere,
  }

  console.log(resource, buildResult.query)
  const total = await prisma.company.count({ where: buildResult.query.where })
  const data = await prisma.company.findMany(buildResult.query)
  return { data, total }
}

const createOne = (body, user) => {
  return prisma.company.create({
    data: generateInput(body),
  })
}

export const company = {
  findOne,
  deleteOne,
  updateOne,
  findMany,
  createOne,
}
