import React from 'react';
import {
  AutocompleteInput,
  BooleanInput,
  DateInput,
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  useTranslate,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import OrderItem from './OrderItem';

const OrderTitle = ({ record }) => {
  const translate = useTranslate();
  return (
    <span>
      {translate('resources.orders.title', {
        reference: record.reference,
      })}
    </span>
  );
};

const useEditStyles = makeStyles({
  root: { alignItems: 'flex-start' },
});

const OrderEdit = (props) => {
  const classes = useEditStyles();
  return (
    <Edit
      title={<OrderTitle />}
      aside={<OrderItem />}
      classes={classes}
      {...props}
    >
      <SimpleForm>
        <DateInput source="createdAt" />
        <ReferenceInput source="customerId" reference="customers">
          <AutocompleteInput
            optionText={(choice) => `${choice.firstName} ${choice.lastName}`}
          />
        </ReferenceInput>
        <SelectInput
          source="status"
          choices={[
            { id: 'delivered', name: 'delivered' },
            { id: 'ordered', name: 'ordered' },
            { id: 'cancelled', name: 'cancelled' },
            {
              id: 'unknown',
              name: 'unknown',
              disabled: true,
            },
          ]}
        />
        <BooleanInput source="returned" />
      </SimpleForm>
    </Edit>
  );
};

export default OrderEdit;
