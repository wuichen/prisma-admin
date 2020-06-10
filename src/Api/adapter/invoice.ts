import { PrismaClient } from '@prisma/client'
import { getField, generateInput, buildQuery, companyWhereFilter } from 'Api/middleware/adapter'

const prisma = new PrismaClient()

const findOne = (id, user) => {
  const query: any = {}
  query.where = { id: parseInt(id) }
  return prisma.invoice.findOne(query)
}

const updateOne = ({ id, body }, user) => {
  return prisma.invoice.update({
    where: {
      id: parseInt(id),
    },
    data: generateInput(body),
  })
}
const deleteOne = (id, user) => {
  return prisma.invoice.delete({
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
  extraWhere = companyWhereFilter(extraWhere, user.permissions.companyId)

  buildResult.query.where = {
    ...buildResult.query.where,
    ...extraWhere,
  }

  console.log(resource, buildResult.query)
  const total = await prisma.invoice.count({ where: buildResult.query.where })
  const data = await prisma.invoice.findMany(buildResult.query)
  return { data, total }
}

const createOne = (body, user) => {
  return prisma.invoice.create({
    data: generateInput(body),
  })
}

export const invoice = {
  findOne,
  deleteOne,
  updateOne,
  findMany,
  createOne,
}
