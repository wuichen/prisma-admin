// in src/comments.js
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';

import { DateField, EditButton, useTranslate, NumberField } from 'react-admin';

import AvatarField from './AvatarField';
import ColoredNumberField from './ColoredNumberField';
import SegmentsField from './SegmentsField';
import { Identifier } from 'ra-core';
import { Customer } from '../types';
import { FC } from 'react';

const useStyles = makeStyles((theme) => ({
  root: { margin: '1em' },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '0.5rem 0',
  },
  cardTitleContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardContent: {
    ...theme.typography.body1,
    display: 'flex',
    flexDirection: 'column',
  },
}));

interface Props {
  ids?: Identifier[];
  data?: { [key: string]: Customer };
  basePath?: string;
}

const MobileGrid: FC<Props> = ({ ids, data, basePath }) => {
  const translate = useTranslate();
  const classes = useStyles();

  if (!ids || !data) {
    return null;
  }

  return (
    <div className={classes.root}>
      {ids.map((id) => (
        <Card key={id} className={classes.card}>
          <CardHeader
            title={
              <div className={classes.cardTitleContent}>
                <h2>{`${data[id].firstName} ${data[id].lastName}`}</h2>
                <EditButton resource="visitors" basePath={basePath} record={data[id]} />
              </div>
            }
            avatar={<AvatarField record={data[id]} size="45" />}
          />
          <CardContent className={classes.cardContent}>
            <div>
              {translate('resources.customers.fields.lastSeen_gte')}
              &nbsp;
              <DateField record={data[id]} source="lastSeen" type="date" />
            </div>
            <div>
              {translate('resources.orders.name', data[id].nbOrders || 1)}
              &nbsp;:&nbsp;
              <NumberField record={data[id]} source="nbOrders" label="resources.customers.fields.orders" />
            </div>
            <div>
              {translate('resources.customers.fields.totalSpent')}
              &nbsp; :{' '}
              <ColoredNumberField
                record={data[id]}
                source="totalSpent"
                options={{ style: 'currency', currency: 'USD' }}
              />
            </div>
          </CardContent>
          {data[id].groups && data[id].groups.length > 0 && (
            <CardContent className={classes.cardContent}>
              <SegmentsField record={data[id]} />
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
};

MobileGrid.defaultProps = {
  data: {},
  ids: [],
};

export default MobileGrid;