import React from 'react';
import {
  BooleanField,
  Datagrid,
  DateField,
  DateInput,
  Filter,
  List,
  NullableBooleanInput,
  NumberField,
  SearchInput,
} from 'react-admin';
import { useMediaQuery, makeStyles, Theme } from '@material-ui/core';

import SegmentsField from './SegmentsField';
import SegmentInput from './SegmentInput';
import CustomerLinkField from './CustomerLinkField';
import ColoredNumberField from './ColoredNumberField';
import MobileGrid from './MobileGrid';
import VisitorListAside from './VisitorListAside';

const VisitorFilter = (props: any) => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
    <DateInput source="lastSeen_gte" />
    <NullableBooleanInput source="hasOrdered" />
    <NullableBooleanInput source="hasNewsLetter" defaultValue />
    <SegmentInput />
  </Filter>
);

const useStyles = makeStyles({
  nbOrders: { color: 'purple' },
});

const VisitorList = (props: any) => {
  const classes = useStyles();
  const isXsmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('xs'));
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));
  return (
    <List
      {...props}
      filters={isSmall ? <VisitorFilter /> : null}
      sort={{ field: 'lastSeen', order: 'DESC' }}
      perPage={25}
      aside={<VisitorListAside />}
    >
      {isXsmall ? (
        <MobileGrid />
      ) : (
        <Datagrid optimized rowClick="edit">
          <CustomerLinkField />
          <DateField source="lastSeen" type="date" />
          <NumberField source="nbOrders" label="resources.customers.fields.orders" className={classes.nbOrders} />
          <ColoredNumberField source="totalSpent" options={{ style: 'currency', currency: 'USD' }} />
          <DateField source="latestPurchase" showTime />
          <BooleanField source="hasNewsLetter" label="News." />
          <SegmentsField />
        </Datagrid>
      )}
    </List>
  );
};

export default VisitorList;
