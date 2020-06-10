import pluralize from 'pluralize';
import { PrismaClient } from '@prisma/client';
import meMiddleware from 'Api/middleware/me';
import { order, customer, invoice, product, category, review } from 'Api/adapter';
const prisma = new PrismaClient();

async function handler(req, res) {
  const { query, method, body, headers, user } = req;
  const resource = pluralize.singular(query[':resource']);
  const id = query[':id'];

  switch (method) {
    case 'GET':
      let findOneResult;
      if (resource === 'order') {
        findOneResult = await order.findOne(id, user);
      } else if (resource === 'customer') {
        findOneResult = await customer.findOne(id, user);
      } else if (resource === 'invoice') {
        findOneResult = await invoice.findOne(id, user);
      } else if (resource === 'product') {
        findOneResult = await product.findOne(id, user);
      } else if (resource === 'category') {
        findOneResult = await category.findOne(id, user);
      } else if (resource === 'review') {
        findOneResult = await review.findOne(id, user);
      } else {
        res.status(405).end(`Resource ${resource} Not Allowed`);
      }
      res.json(findOneResult);
      break;
    case 'PUT':
      let updateOne;
      if (resource === 'order') {
        updateOne = await order.updateOne({ id, body }, user);
      } else if (resource === 'customer') {
        updateOne = await customer.updateOne({ id, body }, user);
      } else if (resource === 'invoice') {
        updateOne = await invoice.updateOne({ id, body }, user);
      } else if (resource === 'product') {
        updateOne = await product.updateOne({ id, body }, user);
      } else if (resource === 'category') {
        updateOne = await category.updateOne({ id, body }, user);
      } else if (resource === 'review') {
        updateOne = await review.updateOne({ id, body }, user);
      } else {
        res.status(405).end(`Resource ${resource} Not Allowed`);
      }

      res.json(updateOne);
      break;
    case 'DELETE':
      let deleteOne;
      if (resource === 'order') {
        deleteOne = await order.deleteOne(id, user);
      } else if (resource === 'customer') {
        deleteOne = await customer.deleteOne(id, user);
      } else if (resource === 'invoice') {
        deleteOne = await invoice.deleteOne(id, user);
      } else if (resource === 'product') {
        deleteOne = await product.deleteOne(id, user);
      } else if (resource === 'category') {
        deleteOne = await category.deleteOne(id, user);
      } else if (resource === 'review') {
        deleteOne = await review.deleteOne(id, user);
      } else {
        res.status(405).end(`Resource ${resource} Not Allowed`);
      }

      res.json(deleteOne);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default meMiddleware(handler);
