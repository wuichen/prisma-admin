import { PrismaClient } from '@prisma/client'
import { getField, generateInput, buildQuery, ownerWhereFilter } from 'Api/middleware/adapter'

const prisma = new PrismaClient()

const findOne = (id, user) => {
  const query: any = {}
  query.where = { id: parseInt(id) }
  return prisma.platform.findOne(query)
}

const updateOne = ({ id, body }, user) => {
  return prisma.platform.update({
    where: {
      id: parseInt(id),
    },
    data: generateInput(body),
  })
}

const deleteOne = (id, user) => {
  return prisma.platform.delete({
    where: {
      id: parseInt(id),
    },
  })
}

const findMany = async ({ resource, pagination, sort, filter, from, to }, user) => {
  // build pagination, sort, and regular filters
  const buildResult: any = buildQuery({ pagination, sort, from, to, filter })
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
                description: {
                  contains: value,
                },
              },
              {
                name: {
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
  extraWhere = ownerWhereFilter(extraWhere, user.permissions.companyId)

  buildResult.query.where = {
    ...buildResult.query.where,
    ...extraWhere,
  }

  console.log(resource, buildResult.query)
  const total = await prisma.platform.count({ where: buildResult.query.where })
  const data = await prisma.platform.findMany(buildResult.query)
  return { data, total }
}

const createOne = (body, user) => {
  return prisma.platform.create({
    data: generateInput(body),
  })
}

export const platform = {
  findOne,
  deleteOne,
  updateOne,
  createOne,
  findMany,
}
