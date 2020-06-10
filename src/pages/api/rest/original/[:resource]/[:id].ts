import { getField, generateInput } from 'api/middleware/utils';
import pluralize from 'pluralize';
import { PrismaClient } from '@prisma/client';
import meMiddleware from 'Api/middleware/me';

const prisma = new PrismaClient();

async function handler(req, res) {
  const { query, method, body, headers } = req;
  const resource = pluralize.singular(query[':resource']);
  const id = query[':id'];

  switch (method) {
    case 'GET':
      let findOneResult;
      let query: any = {};
      query.where = { id: parseInt(id) };

      if (resource === 'order') {
        query.include = {
          orderItems: true,
        };
      }

      findOneResult = await prisma[resource].findOne(query);
      res.json(findOneResult);
      break;
    case 'PUT':
      const updateOne = await prisma[resource].update({
        where: {
          id: parseInt(id),
        },
        data: generateInput(body),
      });
      res.json(updateOne);
      break;
    case 'DELETE':
      const deleteOne = await prisma[resource].delete({
        where: {
          id: parseInt(id),
        },
      });
      res.json(deleteOne);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default meMiddleware(handler);
