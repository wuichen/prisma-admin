import React, { FC } from 'react';
import classnames from 'classnames';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link, useTranslate, useQueryWithStore } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import { FieldProps, AppState, Order, Product } from '../types';

const useStyles = makeStyles({
  container: { minWidth: '35em', marginLeft: '1em' },
  rightAlignedCell: { textAlign: 'right' },
  boldCell: { fontWeight: 'bold' },
});

const OrderItem: FC<FieldProps<Order>> = ({ record }) => {
  const classes = useStyles();
  const translate = useTranslate();
  const { loaded, data: products } = useQueryWithStore(
    {
      type: 'getMany',
      resource: 'products',
      payload: {
        ids: record && record.orderItems ? record.orderItems.map((item) => item.productId) : [],
      },
    },
    {},
    (state: AppState) => {
      const productIds = record && record.orderItems ? record.orderItems.map((item) => item.productId) : [];

      return productIds
        .map<Product>((productId: string) => state.admin.resources.products.data[productId] as Product)
        .filter((r) => typeof r !== 'undefined')
        .reduce((prev, next) => {
          prev[next.id] = next;
          return prev;
        }, {} as { [key: string]: Product });
    }
  );
  console.log(record);
  console.log(products);

  if (!loaded || !record) return null;

  return (
    <Paper className={classes.container} elevation={2}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{translate('resources.orders.fields.orderItem.reference')}</TableCell>
            <TableCell className={classes.rightAlignedCell}>
              {translate('resources.orders.fields.orderItem.unit_price')}
            </TableCell>
            <TableCell className={classes.rightAlignedCell}>
              {translate('resources.orders.fields.orderItem.quantity')}
            </TableCell>
            <TableCell className={classes.rightAlignedCell}>
              {translate('resources.orders.fields.orderItem.total')}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {record && record.orderItems
            ? record.orderItems.map(
                (item: any) =>
                  products[item.productId] && (
                    <TableRow key={item.productId}>
                      <TableCell>
                        <Link to={`/products/${item.productId}`}>{products[item.productId].reference}</Link>
                      </TableCell>
                      <TableCell className={classes.rightAlignedCell}>
                        {products[item.productId].price.toLocaleString(undefined, {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </TableCell>
                      <TableCell className={classes.rightAlignedCell}>{item.quantity}</TableCell>
                      <TableCell className={classes.rightAlignedCell}>
                        {(products[item.productId].price * item.quantity).toLocaleString(undefined, {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </TableCell>
                    </TableRow>
                  )
              )
            : []}
          <TableRow>
            <TableCell colSpan={2} />
            <TableCell>{translate('resources.orders.fields.orderItem.sum')}</TableCell>
            <TableCell className={classes.rightAlignedCell}>
              {record.subtotal.toLocaleString(undefined, {
                style: 'currency',
                currency: 'USD',
              })}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} />
            <TableCell>{translate('resources.orders.fields.orderItem.delivery')}</TableCell>
            <TableCell className={classes.rightAlignedCell}>
              {record.deliveryFees.toLocaleString(undefined, {
                style: 'currency',
                currency: 'USD',
              })}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} />
            <TableCell>{translate('resources.orders.fields.orderItem.taxRate')}</TableCell>
            <TableCell className={classes.rightAlignedCell}>
              {record.taxRate.toLocaleString(undefined, {
                style: 'percent',
              })}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} />
            <TableCell className={classes.boldCell}>{translate('resources.orders.fields.orderItem.total')}</TableCell>
            <TableCell className={classnames(classes.boldCell, classes.rightAlignedCell)}>
              {record.total.toLocaleString(undefined, {
                style: 'currency',
                currency: 'USD',
              })}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

export default OrderItem;
