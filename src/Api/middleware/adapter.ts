import { verify } from 'jsonwebtoken'
import { NextApiRequest } from 'next'
import cookie from 'cookie'
import getConfig from 'next/config'

export const JWT_SECRET = getConfig()?.serverRuntimeConfig.JWT_SECRET ?? null

interface Token {
  userId: number
}

export function getUserId(request: NextApiRequest) {
  const { token } = cookie.parse(request.headers.cookie ?? '')
  if (token && token !== 'null') {
    try {
      const verifiedToken = verify(token, JWT_SECRET) as Token
      return verifiedToken && verifiedToken.userId
    } catch (e) {
      console.log(e)
    }
  }
}

export const ownerWhereFilter = (where, userId) => {
  if (userId) {
    const newWhere = {
      ...where,
      owner: {
        id: userId,
      },
    }
    return newWhere
  } else {
    throw new Error('Owner not provided')
  }
}

export const companyWhereFilter = (where, companyId) => {
  if (companyId) {
    const newWhere = {
      ...where,
      company: {
        id: companyId,
      },
    }
    return newWhere
  } else {
    throw new Error('Company not provided')
  }
}

export const buildQuery = ({ pagination, sort, from, to, filter }) => {
  let page, perPage, field, order

  if (pagination) {
    if (pagination.page) {
      page = pagination.page
    }
    if (pagination.perPage) {
      perPage = pagination.perPage
    }
  }

  if (sort) {
    let sortArray = JSON.parse(sort)
    field = sortArray[0]
    order = sortArray[1].toLowerCase()
  }

  let query = {}
  if (perPage && page) {
    query.take = perPage
    query.skip = page * perPage
  } else if (typeof from === 'number' && typeof to === 'number') {
    query.take = to - from
    query.skip = from
  }
  if (field && order) {
    query.orderBy = {
      [field]: order,
    }
  }

  let where = {}
  let remainFilters = {}
  if (filter) {
    for (const key in filter) {
      if (filter.hasOwnProperty(key)) {
        const value = filter[key]
        const thisField = getField(key)
        // TODO: find better way to organize this
        // first_seen, last_seen is a datetime field in customers
        // date is a datetime field in most other resources
        const isDateField = thisField === 'createdAt' || thisField === 'firstSeen' || thisField === 'lastSeen'
        if (key.endsWith('_gte')) {
          console.log(key)

          where = {
            ...where,
            [thisField]: {
              gte: isDateField ? new Date(value) : parseFloat(value),
            },
          }
        } else if (key.endsWith('_lte')) {
          console.log(key)
          where = {
            ...where,
            [thisField]: {
              lte: isDateField ? new Date(value) : parseFloat(value),
            },
          }
          // getManyReference
        } else if (key.endsWith('Id')) {
          where = {
            ...where,
            [thisField]: {
              id: {
                equals: parseInt(value),
              },
            },
          }
        } else if (key === 'id' && Array.isArray(value)) {
          where = {
            ...where,
            id: {
              in: value,
            },
          }
        } else {
          remainFilters[key] = value
        }
      }
    }
  }
  query.where = where
  return { query, remainFilters }
}

export const generateInput = (body) => {
  let query = {}
  for (const key in body) {
    if (body.hasOwnProperty(key)) {
      const value = body[key]
      const thisField = getField(key)

      // TODO: only dealing with array strings currently.
      // not handling model object saves
      if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'string') {
        query = {
          ...query,
          [key]: {
            set: value,
          },
        }
      } else if (key.endsWith('Id')) {
        query = {
          ...query,
          [thisField]: {
            connect: {
              id: parseInt(value),
            },
          },
        }
      }
      // Skipping model fields
      else if (Array.isArray(value) && value.length > 0 && typeof value[0] === 'object') {
        query = {
          ...query,
        }
      } else {
        query = {
          ...query,
          [key]: value,
        }
      }
    }
  }
  return query
}

// TODO: move to a better place, this is for rest api
export const getField = (field) => {
  // return field.split("_")[0];
  return field.replace('Id', '').replace('_gte', '').replace('_lte', '')
}
