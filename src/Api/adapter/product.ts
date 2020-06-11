import { PrismaClient } from '@prisma/client'
import { getField, generateInput, buildQuery, companyWhereFilter } from 'Api/middleware/adapter'
import slugify from 'slugify'
const prisma = new PrismaClient()

const findOne = (id, user) => {
  const query: any = {}
  query.where = { id: parseInt(id) }
  return prisma.product.findOne(query)
}

const updateOne = ({ id, body }, user) => {
  return prisma.product.update({
    where: {
      id: parseInt(id),
    },
    data: generateInput(body),
  })
}
const deleteOne = (id, user) => {
  return prisma.product.delete({
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
  extraWhere = companyWhereFilter(extraWhere, user.permissions.companyId)

  buildResult.query.where = {
    ...buildResult.query.where,
    ...extraWhere,
  }

  console.log(resource, buildResult.query)
  const total = await prisma.product.count({ where: buildResult.query.where })
  const data = await prisma.product.findMany(buildResult.query)
  return { data, total }
}

const createOne = async (body, user) => {
  if (!user || !user.permissions || !user.permissions.companyId) {
    throw new Error('CompanyId not provided')
  }
  const company = await prisma.company.findOne({
    where: {
      id: user.permissions.companyId,
    },
  })
  if (company) {
    let data = generateInput(body)
    data.type = company.platformSlug
    data.company = {
      connect: { id: company.id },
    }
    data.slug = slugify(data.name) + Math.floor(Math.random() * 1000).toString()
    return prisma.product.create({
      data,
    })
  } else {
    throw new Error('CompanyId doesnt exist')
  }
}

export const product = {
  findOne,
  deleteOne,
  updateOne,
  findMany,
  createOne,
}
