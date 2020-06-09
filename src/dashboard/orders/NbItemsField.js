import React from 'react';
import { FunctionField } from 'react-admin';

const render = (record) => (record.orderItem ? record.orderItem.length : 0);

const NbItemsField = (props) => <FunctionField {...props} render={render} />;

NbItemsField.defaultProps = {
  label: 'Nb Items',
  textAlign: 'right',
};

export default NbItemsField;
