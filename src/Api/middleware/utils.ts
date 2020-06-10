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

// TODO: move to a better place, this is for rest api
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
