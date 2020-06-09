import React from 'react';
import { List, Datagrid, TextField, DateField, ReferenceField, NumberField, Filter, DateInput } from 'react-admin';

import FullNameField from '../visitors/FullNameField';
import AddressField from '../visitors/AddressField';
import InvoiceShow from './InvoiceShow';

const ListFilters = (props: any) => (
  <Filter {...props}>
    <DateInput source="createdAt_gte" alwaysOn />
    <DateInput source="createdAt_lte" alwaysOn />
  </Filter>
);

const InvoiceList = (props: any) => (
  <List {...props} filters={<ListFilters />} perPage={25}>
    <Datagrid rowClick="expand" expand={<InvoiceShow />}>
      <TextField source="id" />
      <DateField source="createdAt" />
      <ReferenceField source="customerId" reference="customers">
        <FullNameField />
      </ReferenceField>
      <ReferenceField source="customerId" reference="customers" link={false} label="resources.invoices.fields.address">
        <AddressField />
      </ReferenceField>
      <ReferenceField source="orderId" reference="orders">
        <TextField source="reference" />
      </ReferenceField>
      <NumberField source="subtotal" />
      <NumberField source="deliveryFees" />
      <NumberField source="taxes" />
      <NumberField source="total" />
    </Datagrid>
  </List>
);

export default InvoiceList;
