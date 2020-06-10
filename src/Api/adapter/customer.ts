import { PrismaClient } from '@prisma/client'
import { getField, generateInput, buildQuery, companyWhereFilter } from 'Api/middleware/adapter'

const prisma = new PrismaClient()

const findOne = (id, user) => {
  const query: any = {}
  query.where = { id: parseInt(id) }
  return prisma.customer.findOne(query)
}

const updateOne = ({ id, body }, user) => {
  return prisma.customer.update({
    where: {
      id: parseInt(id),
    },
    data: generateInput(body),
  })
}

const deleteOne = (id, user) => {
  return prisma.customer.delete({
    where: {
      id: parseInt(id),
    },
  })
}

const findMany = async ({ resource, pagination, sort, filter, from, to }, user) => {
  // Check if auth user is passed
  if (!user || !user.user_id) {
    throw new Error('User is not provided')
  }
  // build pagination, sort, and regular filters
  const buildResult: any = buildQuery({ pagination, sort, from, to, filter })
  console.log(buildResult)
  let extraWhere = {}
  // process leftover filters
  if (buildResult.remainFilters) {
    for (const key in buildResult.remainFilters) {
      if (buildResult.remainFilters.hasOwnProperty(key)) {
        const value = buildResult.remainFilters[key]
        if (key === 'q') {
          extraWhere = {
            ...extraWhere,
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
          }
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
  extraWhere = companyWhereFilter(extraWhere, user.permissions.companyId)

  buildResult.query.where = {
    ...buildResult.query.where,
    ...extraWhere,
  }

  console.log(resource, buildResult.query)
  const total = await prisma.customer.count({ where: buildResult.query.where })
  const data = await prisma.customer.findMany(buildResult.query)
  return { data, total }
}

const createOne = (body, user) => {
  return prisma.customer.create({
    data: generateInput(body),
  })
}

export const customer = {
  findOne,
  deleteOne,
  updateOne,
  findMany,
  createOne,
}
