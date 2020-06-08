import { PrismaClient, PrismaClientOptions } from '@prisma/client'
import PrismaDelete, { onDeleteArgs } from '@prisma-tools/delete'
import { NextApiRequest, NextApiResponse } from 'next'
// import { getUserId } from './utils'

class Prisma extends PrismaClient {
  constructor(options?: PrismaClientOptions) {
    super(options)
  }

  async onDelete(args: onDeleteArgs) {
    const prismaDelete = new PrismaDelete(this)
    await prismaDelete.onDelete(args)
  }
}

const prisma = new Prisma()

export interface Context extends NextApi {
  prisma: Prisma
  user?: any
  select: any
}

interface NextApi {
  req: NextApiRequest
  res: NextApiResponse
}

export function createContext({ req, res }: NextApi): Context {
  return {
    req,
    res,
    prisma,
    user: req.user,
    select: {},
  }
}
