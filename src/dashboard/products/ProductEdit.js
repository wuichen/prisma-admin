import React from 'react';
import {
  Datagrid,
  DateField,
  Edit,
  EditButton,
  FormTab,
  NumberInput,
  Pagination,
  ReferenceInput,
  ReferenceManyField,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  TabbedForm,
  TextField,
  TextInput,
  required,
} from 'react-admin';
import { InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RichTextInput from 'ra-input-rich-text';

import CustomerReferenceField from '../visitors/CustomerReferenceField';
import StarRatingField from '../reviews/StarRatingField';
import Poster from './Poster';
import { styles as createStyles } from './ProductCreate';

const ProductTitle = ({ record }) => <span>Poster #{record.reference}</span>;

const styles = {
  ...createStyles,
  comment: {
    maxWidth: '20em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  tab: {
    maxWidth: '40em',
    display: 'block',
  },
};

const useStyles = makeStyles(styles);

const ProductEdit = (props) => {
  const classes = useStyles();
  return (
    <Edit {...props} title={<ProductTitle />}>
      <TabbedForm>
        <FormTab label="resources.products.tabs.image" contentClassName={classes.tab}>
          <Poster />
          <TextInput source="image" fullWidth validate={requiredValidate} />
          <TextInput source="thumbnail" fullWidth validate={requiredValidate} />
        </FormTab>
        <FormTab label="resources.products.tabs.details" path="details" contentClassName={classes.tab}>
          <TextInput source="name" validate={requiredValidate} />
          <NumberInput
            source="price"
            className={classes.price}
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>,
            }}
            validate={requiredValidate}
          />
          <NumberInput
            source="width"
            className={classes.width}
            formClassName={classes.widthFormGroup}
            InputProps={{
              endAdornment: <InputAdornment position="start">cm</InputAdornment>,
            }}
            validate={requiredValidate}
          />
          <NumberInput
            source="height"
            className={classes.height}
            formClassName={classes.heightFormGroup}
            InputProps={{
              endAdornment: <InputAdornment position="start">cm</InputAdornment>,
            }}
            validate={requiredValidate}
          />
          <ReferenceArrayInput source="categoryId" reference="categories" validate={requiredValidate}>
            <SelectArrayInput source="name" />
          </ReferenceArrayInput>
          <NumberInput source="stock" className={classes.stock} validate={requiredValidate} />
        </FormTab>
        <FormTab label="resources.products.tabs.description" path="description" contentClassName={classes.tab}>
          <RichTextInput source="description" label="" validate={requiredValidate} />
        </FormTab>
        <FormTab label="resources.products.tabs.reviews" path="reviews">
          <ReferenceManyField
            reference="reviews"
            target="productId"
            addLabel={false}
            pagination={<Pagination />}
            fullWidth
          >
            <Datagrid>
              <DateField source="createdAt" />
              <CustomerReferenceField />
              <StarRatingField />
              <TextField source="comment" cellClassName={classes.comment} />
              <TextField source="status" />
              <EditButton />
            </Datagrid>
          </ReferenceManyField>
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};

const requiredValidate = [required()];

export default ProductEdit;