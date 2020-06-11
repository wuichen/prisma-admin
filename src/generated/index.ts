import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | undefined;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  DateTime: any;
};

export type Address = {
  __typename?: 'Address';
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  info: Scalars['String'];
  json?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  orders: Array<Order>;
  type: Scalars['String'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};


export type AddressOrdersArgs = {
  cursor?: Maybe<OrderWhereUniqueInput>;
  orderBy?: Maybe<OrderOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<OrderWhereInput>;
};

export type AddressCreateInput = {
  company?: Maybe<CompanyCreateOneWithoutAddressInput>;
  companyId?: Maybe<Scalars['Int']>;
  info: Scalars['String'];
  json?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  orders?: Maybe<OrderCreateManyWithoutDeliveryAdressInput>;
  type: Scalars['String'];
  user?: Maybe<UserCreateOneWithoutAddressesInput>;
};

export type AddressCreateManyWithoutUserInput = {
  connect?: Maybe<Array<AddressWhereUniqueInput>>;
  create?: Maybe<Array<AddressCreateWithoutUserInput>>;
};

export type AddressCreateOneWithoutCompanyInput = {
  connect?: Maybe<AddressWhereUniqueInput>;
  create?: Maybe<AddressCreateWithoutCompanyInput>;
};

export type AddressCreateOneWithoutOrdersInput = {
  connect?: Maybe<AddressWhereUniqueInput>;
  create?: Maybe<AddressCreateWithoutOrdersInput>;
};

export type AddressCreateWithoutCompanyInput = {
  companyId?: Maybe<Scalars['Int']>;
  info: Scalars['String'];
  json?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  orders?: Maybe<OrderCreateManyWithoutDeliveryAdressInput>;
  type: Scalars['String'];
  user?: Maybe<UserCreateOneWithoutAddressesInput>;
};

export type AddressCreateWithoutOrdersInput = {
  company?: Maybe<CompanyCreateOneWithoutAddressInput>;
  companyId?: Maybe<Scalars['Int']>;
  info: Scalars['String'];
  json?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type: Scalars['String'];
  user?: Maybe<UserCreateOneWithoutAddressesInput>;
};

export type AddressCreateWithoutUserInput = {
  company?: Maybe<CompanyCreateOneWithoutAddressInput>;
  companyId?: Maybe<Scalars['Int']>;
  info: Scalars['String'];
  json?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  orders?: Maybe<OrderCreateManyWithoutDeliveryAdressInput>;
  type: Scalars['String'];
};

export type AddressFilter = {
  every?: Maybe<AddressWhereInput>;
  none?: Maybe<AddressWhereInput>;
  some?: Maybe<AddressWhereInput>;
};

export type AddressOrderByInput = {
  companyId?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  info?: Maybe<OrderByArg>;
  json?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  type?: Maybe<OrderByArg>;
  userId?: Maybe<OrderByArg>;
};

export type AddressScalarWhereInput = {
  AND?: Maybe<Array<AddressScalarWhereInput>>;
  companyId?: Maybe<NullableIntFilter>;
  id?: Maybe<IntFilter>;
  info?: Maybe<StringFilter>;
  json?: Maybe<NullableStringFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<AddressScalarWhereInput>>;
  OR?: Maybe<Array<AddressScalarWhereInput>>;
  orders?: Maybe<OrderFilter>;
  type?: Maybe<StringFilter>;
  userId?: Maybe<NullableStringFilter>;
};

export type AddressUpdateInput = {
  company?: Maybe<CompanyUpdateOneWithoutAddressInput>;
  companyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  info?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderUpdateManyWithoutDeliveryAdressInput>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<UserUpdateOneWithoutAddressesInput>;
};

export type AddressUpdateManyDataInput = {
  companyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  info?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AddressUpdateManyMutationInput = {
  companyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  info?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type AddressUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<AddressWhereUniqueInput>>;
  create?: Maybe<Array<AddressCreateWithoutUserInput>>;
  delete?: Maybe<Array<AddressWhereUniqueInput>>;
  deleteMany?: Maybe<Array<AddressScalarWhereInput>>;
  disconnect?: Maybe<Array<AddressWhereUniqueInput>>;
  set?: Maybe<Array<AddressWhereUniqueInput>>;
  update?: Maybe<Array<AddressUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<AddressUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<AddressUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AddressUpdateManyWithWhereNestedInput = {
  data: AddressUpdateManyDataInput;
  where: AddressScalarWhereInput;
};

export type AddressUpdateOneRequiredWithoutOrdersInput = {
  connect?: Maybe<AddressWhereUniqueInput>;
  create?: Maybe<AddressCreateWithoutOrdersInput>;
  update?: Maybe<AddressUpdateWithoutOrdersDataInput>;
  upsert?: Maybe<AddressUpsertWithoutOrdersInput>;
};

export type AddressUpdateOneWithoutCompanyInput = {
  connect?: Maybe<AddressWhereUniqueInput>;
  create?: Maybe<AddressCreateWithoutCompanyInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<AddressUpdateWithoutCompanyDataInput>;
  upsert?: Maybe<AddressUpsertWithoutCompanyInput>;
};

export type AddressUpdateWithoutCompanyDataInput = {
  companyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  info?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderUpdateManyWithoutDeliveryAdressInput>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<UserUpdateOneWithoutAddressesInput>;
};

export type AddressUpdateWithoutOrdersDataInput = {
  company?: Maybe<CompanyUpdateOneWithoutAddressInput>;
  companyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  info?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<UserUpdateOneWithoutAddressesInput>;
};

export type AddressUpdateWithoutUserDataInput = {
  company?: Maybe<CompanyUpdateOneWithoutAddressInput>;
  companyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  info?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderUpdateManyWithoutDeliveryAdressInput>;
  type?: Maybe<Scalars['String']>;
};

export type AddressUpdateWithWhereUniqueWithoutUserInput = {
  data: AddressUpdateWithoutUserDataInput;
  where: AddressWhereUniqueInput;
};

export type AddressUpsertWithoutCompanyInput = {
  create: AddressCreateWithoutCompanyInput;
  update: AddressUpdateWithoutCompanyDataInput;
};

export type AddressUpsertWithoutOrdersInput = {
  create: AddressCreateWithoutOrdersInput;
  update: AddressUpdateWithoutOrdersDataInput;
};

export type AddressUpsertWithWhereUniqueWithoutUserInput = {
  create: AddressCreateWithoutUserInput;
  update: AddressUpdateWithoutUserDataInput;
  where: AddressWhereUniqueInput;
};

export type AddressWhereInput = {
  AND?: Maybe<Array<AddressWhereInput>>;
  company?: Maybe<CompanyWhereInput>;
  companyId?: Maybe<NullableIntFilter>;
  id?: Maybe<IntFilter>;
  info?: Maybe<StringFilter>;
  json?: Maybe<NullableStringFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<AddressWhereInput>>;
  OR?: Maybe<Array<AddressWhereInput>>;
  orders?: Maybe<OrderFilter>;
  type?: Maybe<StringFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<NullableStringFilter>;
};

export type AddressWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user?: Maybe<User>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type BooleanFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<Scalars['Boolean']>;
};

export type Card = {
  __typename?: 'Card';
  cardType: Scalars['String'];
  id: Scalars['Int'];
  lastFourDigit: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};

export type CardCreateInput = {
  cardType: Scalars['String'];
  lastFourDigit: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
  user?: Maybe<UserCreateOneWithoutCardsInput>;
};

export type CardCreateManyWithoutUserInput = {
  connect?: Maybe<Array<CardWhereUniqueInput>>;
  create?: Maybe<Array<CardCreateWithoutUserInput>>;
};

export type CardCreateWithoutUserInput = {
  cardType: Scalars['String'];
  lastFourDigit: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
};

export type CardFilter = {
  every?: Maybe<CardWhereInput>;
  none?: Maybe<CardWhereInput>;
  some?: Maybe<CardWhereInput>;
};

export type CardOrderByInput = {
  cardType?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  lastFourDigit?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  type?: Maybe<OrderByArg>;
  userId?: Maybe<OrderByArg>;
};

export type CardScalarWhereInput = {
  AND?: Maybe<Array<CardScalarWhereInput>>;
  cardType?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  lastFourDigit?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<CardScalarWhereInput>>;
  OR?: Maybe<Array<CardScalarWhereInput>>;
  type?: Maybe<StringFilter>;
  userId?: Maybe<NullableStringFilter>;
};

export type CardUpdateInput = {
  cardType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastFourDigit?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<UserUpdateOneWithoutCardsInput>;
};

export type CardUpdateManyDataInput = {
  cardType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastFourDigit?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CardUpdateManyMutationInput = {
  cardType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastFourDigit?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CardUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<CardWhereUniqueInput>>;
  create?: Maybe<Array<CardCreateWithoutUserInput>>;
  delete?: Maybe<Array<CardWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CardScalarWhereInput>>;
  disconnect?: Maybe<Array<CardWhereUniqueInput>>;
  set?: Maybe<Array<CardWhereUniqueInput>>;
  update?: Maybe<Array<CardUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<CardUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<CardUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CardUpdateManyWithWhereNestedInput = {
  data: CardUpdateManyDataInput;
  where: CardScalarWhereInput;
};

export type CardUpdateWithoutUserDataInput = {
  cardType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastFourDigit?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CardUpdateWithWhereUniqueWithoutUserInput = {
  data: CardUpdateWithoutUserDataInput;
  where: CardWhereUniqueInput;
};

export type CardUpsertWithWhereUniqueWithoutUserInput = {
  create: CardCreateWithoutUserInput;
  update: CardUpdateWithoutUserDataInput;
  where: CardWhereUniqueInput;
};

export type CardWhereInput = {
  AND?: Maybe<Array<CardWhereInput>>;
  cardType?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  lastFourDigit?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<CardWhereInput>>;
  OR?: Maybe<Array<CardWhereInput>>;
  type?: Maybe<StringFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<NullableStringFilter>;
};

export type CardWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Category = {
  __typename?: 'Category';
  children: Array<Category>;
  companies: Array<Company>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  parent?: Maybe<Category>;
  parentId?: Maybe<Scalars['Int']>;
  platform: Platform;
  platformId: Scalars['Int'];
  products: Array<Product>;
  slug: Scalars['String'];
  type: Scalars['String'];
};


export type CategoryChildrenArgs = {
  cursor?: Maybe<CategoryWhereUniqueInput>;
  orderBy?: Maybe<CategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};


export type CategoryCompaniesArgs = {
  cursor?: Maybe<CompanyWhereUniqueInput>;
  orderBy?: Maybe<CompanyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompanyWhereInput>;
};


export type CategoryProductsArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  orderBy?: Maybe<ProductOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};

export type CategoryCreateInput = {
  children?: Maybe<CategoryCreateManyWithoutParentInput>;
  companies?: Maybe<CompanyCreateManyWithoutCategoriesInput>;
  icon?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parent?: Maybe<CategoryCreateOneWithoutChildrenInput>;
  platform: PlatformCreateOneWithoutCategoriesInput;
  products?: Maybe<ProductCreateManyWithoutCategoriesInput>;
  slug: Scalars['String'];
  type: Scalars['String'];
};

export type CategoryCreateManyWithoutCompaniesInput = {
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  create?: Maybe<Array<CategoryCreateWithoutCompaniesInput>>;
};

export type CategoryCreateManyWithoutParentInput = {
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  create?: Maybe<Array<CategoryCreateWithoutParentInput>>;
};

export type CategoryCreateManyWithoutPlatformInput = {
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  create?: Maybe<Array<CategoryCreateWithoutPlatformInput>>;
};

export type CategoryCreateManyWithoutProductsInput = {
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  create?: Maybe<Array<CategoryCreateWithoutProductsInput>>;
};

export type CategoryCreateOneWithoutChildrenInput = {
  connect?: Maybe<CategoryWhereUniqueInput>;
  create?: Maybe<CategoryCreateWithoutChildrenInput>;
};

export type CategoryCreateWithoutChildrenInput = {
  companies?: Maybe<CompanyCreateManyWithoutCategoriesInput>;
  icon?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parent?: Maybe<CategoryCreateOneWithoutChildrenInput>;
  platform: PlatformCreateOneWithoutCategoriesInput;
  products?: Maybe<ProductCreateManyWithoutCategoriesInput>;
  slug: Scalars['String'];
  type: Scalars['String'];
};

export type CategoryCreateWithoutCompaniesInput = {
  children?: Maybe<CategoryCreateManyWithoutParentInput>;
  icon?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parent?: Maybe<CategoryCreateOneWithoutChildrenInput>;
  platform: PlatformCreateOneWithoutCategoriesInput;
  products?: Maybe<ProductCreateManyWithoutCategoriesInput>;
  slug: Scalars['String'];
  type: Scalars['String'];
};

export type CategoryCreateWithoutParentInput = {
  children?: Maybe<CategoryCreateManyWithoutParentInput>;
  companies?: Maybe<CompanyCreateManyWithoutCategoriesInput>;
  icon?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  platform: PlatformCreateOneWithoutCategoriesInput;
  products?: Maybe<ProductCreateManyWithoutCategoriesInput>;
  slug: Scalars['String'];
  type: Scalars['String'];
};

export type CategoryCreateWithoutPlatformInput = {
  children?: Maybe<CategoryCreateManyWithoutParentInput>;
  companies?: Maybe<CompanyCreateManyWithoutCategoriesInput>;
  icon?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parent?: Maybe<CategoryCreateOneWithoutChildrenInput>;
  products?: Maybe<ProductCreateManyWithoutCategoriesInput>;
  slug: Scalars['String'];
  type: Scalars['String'];
};

export type CategoryCreateWithoutProductsInput = {
  children?: Maybe<CategoryCreateManyWithoutParentInput>;
  companies?: Maybe<CompanyCreateManyWithoutCategoriesInput>;
  icon?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parent?: Maybe<CategoryCreateOneWithoutChildrenInput>;
  platform: PlatformCreateOneWithoutCategoriesInput;
  slug: Scalars['String'];
  type: Scalars['String'];
};

export type CategoryFilter = {
  every?: Maybe<CategoryWhereInput>;
  none?: Maybe<CategoryWhereInput>;
  some?: Maybe<CategoryWhereInput>;
};

export type CategoryOrderByInput = {
  icon?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  parentId?: Maybe<OrderByArg>;
  platformId?: Maybe<OrderByArg>;
  slug?: Maybe<OrderByArg>;
  type?: Maybe<OrderByArg>;
};

export type CategoryScalarWhereInput = {
  AND?: Maybe<Array<CategoryScalarWhereInput>>;
  children?: Maybe<CategoryFilter>;
  companies?: Maybe<CompanyFilter>;
  icon?: Maybe<NullableStringFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<CategoryScalarWhereInput>>;
  OR?: Maybe<Array<CategoryScalarWhereInput>>;
  parentId?: Maybe<NullableIntFilter>;
  platformId?: Maybe<IntFilter>;
  products?: Maybe<ProductFilter>;
  slug?: Maybe<StringFilter>;
  type?: Maybe<StringFilter>;
};

export type CategoryUpdateInput = {
  children?: Maybe<CategoryUpdateManyWithoutParentInput>;
  companies?: Maybe<CompanyUpdateManyWithoutCategoriesInput>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<CategoryUpdateOneWithoutChildrenInput>;
  platform?: Maybe<PlatformUpdateOneRequiredWithoutCategoriesInput>;
  products?: Maybe<ProductUpdateManyWithoutCategoriesInput>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CategoryUpdateManyDataInput = {
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CategoryUpdateManyMutationInput = {
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CategoryUpdateManyWithoutCompaniesInput = {
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  create?: Maybe<Array<CategoryCreateWithoutCompaniesInput>>;
  delete?: Maybe<Array<CategoryWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CategoryScalarWhereInput>>;
  disconnect?: Maybe<Array<CategoryWhereUniqueInput>>;
  set?: Maybe<Array<CategoryWhereUniqueInput>>;
  update?: Maybe<Array<CategoryUpdateWithWhereUniqueWithoutCompaniesInput>>;
  updateMany?: Maybe<Array<CategoryUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<CategoryUpsertWithWhereUniqueWithoutCompaniesInput>>;
};

export type CategoryUpdateManyWithoutParentInput = {
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  create?: Maybe<Array<CategoryCreateWithoutParentInput>>;
  delete?: Maybe<Array<CategoryWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CategoryScalarWhereInput>>;
  disconnect?: Maybe<Array<CategoryWhereUniqueInput>>;
  set?: Maybe<Array<CategoryWhereUniqueInput>>;
  update?: Maybe<Array<CategoryUpdateWithWhereUniqueWithoutParentInput>>;
  updateMany?: Maybe<Array<CategoryUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<CategoryUpsertWithWhereUniqueWithoutParentInput>>;
};

export type CategoryUpdateManyWithoutPlatformInput = {
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  create?: Maybe<Array<CategoryCreateWithoutPlatformInput>>;
  delete?: Maybe<Array<CategoryWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CategoryScalarWhereInput>>;
  disconnect?: Maybe<Array<CategoryWhereUniqueInput>>;
  set?: Maybe<Array<CategoryWhereUniqueInput>>;
  update?: Maybe<Array<CategoryUpdateWithWhereUniqueWithoutPlatformInput>>;
  updateMany?: Maybe<Array<CategoryUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<CategoryUpsertWithWhereUniqueWithoutPlatformInput>>;
};

export type CategoryUpdateManyWithoutProductsInput = {
  connect?: Maybe<Array<CategoryWhereUniqueInput>>;
  create?: Maybe<Array<CategoryCreateWithoutProductsInput>>;
  delete?: Maybe<Array<CategoryWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CategoryScalarWhereInput>>;
  disconnect?: Maybe<Array<CategoryWhereUniqueInput>>;
  set?: Maybe<Array<CategoryWhereUniqueInput>>;
  update?: Maybe<Array<CategoryUpdateWithWhereUniqueWithoutProductsInput>>;
  updateMany?: Maybe<Array<CategoryUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<CategoryUpsertWithWhereUniqueWithoutProductsInput>>;
};

export type CategoryUpdateManyWithWhereNestedInput = {
  data: CategoryUpdateManyDataInput;
  where: CategoryScalarWhereInput;
};

export type CategoryUpdateOneWithoutChildrenInput = {
  connect?: Maybe<CategoryWhereUniqueInput>;
  create?: Maybe<CategoryCreateWithoutChildrenInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CategoryUpdateWithoutChildrenDataInput>;
  upsert?: Maybe<CategoryUpsertWithoutChildrenInput>;
};

export type CategoryUpdateWithoutChildrenDataInput = {
  companies?: Maybe<CompanyUpdateManyWithoutCategoriesInput>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<CategoryUpdateOneWithoutChildrenInput>;
  platform?: Maybe<PlatformUpdateOneRequiredWithoutCategoriesInput>;
  products?: Maybe<ProductUpdateManyWithoutCategoriesInput>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CategoryUpdateWithoutCompaniesDataInput = {
  children?: Maybe<CategoryUpdateManyWithoutParentInput>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<CategoryUpdateOneWithoutChildrenInput>;
  platform?: Maybe<PlatformUpdateOneRequiredWithoutCategoriesInput>;
  products?: Maybe<ProductUpdateManyWithoutCategoriesInput>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CategoryUpdateWithoutParentDataInput = {
  children?: Maybe<CategoryUpdateManyWithoutParentInput>;
  companies?: Maybe<CompanyUpdateManyWithoutCategoriesInput>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  platform?: Maybe<PlatformUpdateOneRequiredWithoutCategoriesInput>;
  products?: Maybe<ProductUpdateManyWithoutCategoriesInput>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CategoryUpdateWithoutPlatformDataInput = {
  children?: Maybe<CategoryUpdateManyWithoutParentInput>;
  companies?: Maybe<CompanyUpdateManyWithoutCategoriesInput>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<CategoryUpdateOneWithoutChildrenInput>;
  products?: Maybe<ProductUpdateManyWithoutCategoriesInput>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CategoryUpdateWithoutProductsDataInput = {
  children?: Maybe<CategoryUpdateManyWithoutParentInput>;
  companies?: Maybe<CompanyUpdateManyWithoutCategoriesInput>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<CategoryUpdateOneWithoutChildrenInput>;
  platform?: Maybe<PlatformUpdateOneRequiredWithoutCategoriesInput>;
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CategoryUpdateWithWhereUniqueWithoutCompaniesInput = {
  data: CategoryUpdateWithoutCompaniesDataInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
  data: CategoryUpdateWithoutParentDataInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithWhereUniqueWithoutPlatformInput = {
  data: CategoryUpdateWithoutPlatformDataInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateWithWhereUniqueWithoutProductsInput = {
  data: CategoryUpdateWithoutProductsDataInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertWithoutChildrenInput = {
  create: CategoryCreateWithoutChildrenInput;
  update: CategoryUpdateWithoutChildrenDataInput;
};

export type CategoryUpsertWithWhereUniqueWithoutCompaniesInput = {
  create: CategoryCreateWithoutCompaniesInput;
  update: CategoryUpdateWithoutCompaniesDataInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
  create: CategoryCreateWithoutParentInput;
  update: CategoryUpdateWithoutParentDataInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertWithWhereUniqueWithoutPlatformInput = {
  create: CategoryCreateWithoutPlatformInput;
  update: CategoryUpdateWithoutPlatformDataInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertWithWhereUniqueWithoutProductsInput = {
  create: CategoryCreateWithoutProductsInput;
  update: CategoryUpdateWithoutProductsDataInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryWhereInput = {
  AND?: Maybe<Array<CategoryWhereInput>>;
  children?: Maybe<CategoryFilter>;
  companies?: Maybe<CompanyFilter>;
  icon?: Maybe<NullableStringFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<CategoryWhereInput>>;
  OR?: Maybe<Array<CategoryWhereInput>>;
  parent?: Maybe<CategoryWhereInput>;
  parentId?: Maybe<NullableIntFilter>;
  platform?: Maybe<PlatformWhereInput>;
  platformId?: Maybe<IntFilter>;
  products?: Maybe<ProductFilter>;
  slug?: Maybe<StringFilter>;
  type?: Maybe<StringFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

export type Company = {
  __typename?: 'Company';
  address?: Maybe<Address>;
  addressId?: Maybe<Scalars['Int']>;
  categories: Array<Category>;
  contact?: Maybe<Contact>;
  contactId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  customers: Array<Customer>;
  deliveryDetail: DeliveryDetail;
  deliveryDetailId: Scalars['Int'];
  description: Scalars['String'];
  id: Scalars['Int'];
  invoices: Array<Invoice>;
  name: Scalars['String'];
  orders: Array<Order>;
  owner?: Maybe<User>;
  ownerId?: Maybe<Scalars['String']>;
  platform: Platform;
  platformId: Scalars['Int'];
  platformSlug: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  products: Array<Product>;
  promotion?: Maybe<Scalars['String']>;
  reviews: Array<Review>;
  slug: Scalars['String'];
  staffs: Array<Staff>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


export type CompanyCategoriesArgs = {
  cursor?: Maybe<CategoryWhereUniqueInput>;
  orderBy?: Maybe<CategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};


export type CompanyCustomersArgs = {
  cursor?: Maybe<CustomerWhereUniqueInput>;
  orderBy?: Maybe<CustomerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CustomerWhereInput>;
};


export type CompanyInvoicesArgs = {
  cursor?: Maybe<InvoiceWhereUniqueInput>;
  orderBy?: Maybe<InvoiceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<InvoiceWhereInput>;
};


export type CompanyOrdersArgs = {
  cursor?: Maybe<OrderWhereUniqueInput>;
  orderBy?: Maybe<OrderOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<OrderWhereInput>;
};


export type CompanyProductsArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  orderBy?: Maybe<ProductOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};


export type CompanyReviewsArgs = {
  cursor?: Maybe<ReviewWhereUniqueInput>;
  orderBy?: Maybe<ReviewOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ReviewWhereInput>;
};


export type CompanyStaffsArgs = {
  cursor?: Maybe<StaffWhereUniqueInput>;
  orderBy?: Maybe<StaffOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StaffWhereInput>;
};

export type CompanyCreateInput = {
  address?: Maybe<AddressCreateOneWithoutCompanyInput>;
  categories?: Maybe<CategoryCreateManyWithoutCompaniesInput>;
  contact?: Maybe<ContactCreateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerCreateManyWithoutCompanyInput>;
  deliveryDetail: DeliveryDetailCreateOneWithoutCompanyInput;
  description: Scalars['String'];
  invoices?: Maybe<InvoiceCreateManyWithoutCompanyInput>;
  name: Scalars['String'];
  orders?: Maybe<OrderCreateManyWithoutCompanyInput>;
  owner?: Maybe<UserCreateOneWithoutCompaniesInput>;
  platform: PlatformCreateOneWithoutCompaniesInput;
  platformSlug: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewCreateManyWithoutCompanyInput>;
  slug: Scalars['String'];
  staffs?: Maybe<StaffCreateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyCreateManyWithoutCategoriesInput = {
  connect?: Maybe<Array<CompanyWhereUniqueInput>>;
  create?: Maybe<Array<CompanyCreateWithoutCategoriesInput>>;
};

export type CompanyCreateManyWithoutOwnerInput = {
  connect?: Maybe<Array<CompanyWhereUniqueInput>>;
  create?: Maybe<Array<CompanyCreateWithoutOwnerInput>>;
};

export type CompanyCreateManyWithoutPlatformInput = {
  connect?: Maybe<Array<CompanyWhereUniqueInput>>;
  create?: Maybe<Array<CompanyCreateWithoutPlatformInput>>;
};

export type CompanyCreateOneWithoutAddressInput = {
  connect?: Maybe<CompanyWhereUniqueInput>;
  create?: Maybe<CompanyCreateWithoutAddressInput>;
};

export type CompanyCreateOneWithoutContactInput = {
  connect?: Maybe<CompanyWhereUniqueInput>;
  create?: Maybe<CompanyCreateWithoutContactInput>;
};

export type CompanyCreateOneWithoutCustomersInput = {
  connect?: Maybe<CompanyWhereUniqueInput>;
  create?: Maybe<CompanyCreateWithoutCustomersInput>;
};

export type CompanyCreateOneWithoutDeliveryDetailInput = {
  connect?: Maybe<CompanyWhereUniqueInput>;
  create?: Maybe<CompanyCreateWithoutDeliveryDetailInput>;
};

export type CompanyCreateOneWithoutInvoicesInput = {
  connect?: Maybe<CompanyWhereUniqueInput>;
  create?: Maybe<CompanyCreateWithoutInvoicesInput>;
};

export type CompanyCreateOneWithoutOrdersInput = {
  connect?: Maybe<CompanyWhereUniqueInput>;
  create?: Maybe<CompanyCreateWithoutOrdersInput>;
};

export type CompanyCreateOneWithoutProductsInput = {
  connect?: Maybe<CompanyWhereUniqueInput>;
  create?: Maybe<CompanyCreateWithoutProductsInput>;
};

export type CompanyCreateOneWithoutReviewsInput = {
  connect?: Maybe<CompanyWhereUniqueInput>;
  create?: Maybe<CompanyCreateWithoutReviewsInput>;
};

export type CompanyCreateOneWithoutStaffsInput = {
  connect?: Maybe<CompanyWhereUniqueInput>;
  create?: Maybe<CompanyCreateWithoutStaffsInput>;
};

export type CompanyCreateWithoutAddressInput = {
  categories?: Maybe<CategoryCreateManyWithoutCompaniesInput>;
  contact?: Maybe<ContactCreateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerCreateManyWithoutCompanyInput>;
  deliveryDetail: DeliveryDetailCreateOneWithoutCompanyInput;
  description: Scalars['String'];
  invoices?: Maybe<InvoiceCreateManyWithoutCompanyInput>;
  name: Scalars['String'];
  orders?: Maybe<OrderCreateManyWithoutCompanyInput>;
  owner?: Maybe<UserCreateOneWithoutCompaniesInput>;
  platform: PlatformCreateOneWithoutCompaniesInput;
  platformSlug: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewCreateManyWithoutCompanyInput>;
  slug: Scalars['String'];
  staffs?: Maybe<StaffCreateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyCreateWithoutCategoriesInput = {
  address?: Maybe<AddressCreateOneWithoutCompanyInput>;
  contact?: Maybe<ContactCreateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerCreateManyWithoutCompanyInput>;
  deliveryDetail: DeliveryDetailCreateOneWithoutCompanyInput;
  description: Scalars['String'];
  invoices?: Maybe<InvoiceCreateManyWithoutCompanyInput>;
  name: Scalars['String'];
  orders?: Maybe<OrderCreateManyWithoutCompanyInput>;
  owner?: Maybe<UserCreateOneWithoutCompaniesInput>;
  platform: PlatformCreateOneWithoutCompaniesInput;
  platformSlug: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewCreateManyWithoutCompanyInput>;
  slug: Scalars['String'];
  staffs?: Maybe<StaffCreateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyCreateWithoutContactInput = {
  address?: Maybe<AddressCreateOneWithoutCompanyInput>;
  categories?: Maybe<CategoryCreateManyWithoutCompaniesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerCreateManyWithoutCompanyInput>;
  deliveryDetail: DeliveryDetailCreateOneWithoutCompanyInput;
  description: Scalars['String'];
  invoices?: Maybe<InvoiceCreateManyWithoutCompanyInput>;
  name: Scalars['String'];
  orders?: Maybe<OrderCreateManyWithoutCompanyInput>;
  owner?: Maybe<UserCreateOneWithoutCompaniesInput>;
  platform: PlatformCreateOneWithoutCompaniesInput;
  platformSlug: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewCreateManyWithoutCompanyInput>;
  slug: Scalars['String'];
  staffs?: Maybe<StaffCreateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyCreateWithoutCustomersInput = {
  address?: Maybe<AddressCreateOneWithoutCompanyInput>;
  categories?: Maybe<CategoryCreateManyWithoutCompaniesInput>;
  contact?: Maybe<ContactCreateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deliveryDetail: DeliveryDetailCreateOneWithoutCompanyInput;
  description: Scalars['String'];
  invoices?: Maybe<InvoiceCreateManyWithoutCompanyInput>;
  name: Scalars['String'];
  orders?: Maybe<OrderCreateManyWithoutCompanyInput>;
  owner?: Maybe<UserCreateOneWithoutCompaniesInput>;
  platform: PlatformCreateOneWithoutCompaniesInput;
  platformSlug: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewCreateManyWithoutCompanyInput>;
  slug: Scalars['String'];
  staffs?: Maybe<StaffCreateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyCreateWithoutDeliveryDetailInput = {
  address?: Maybe<AddressCreateOneWithoutCompanyInput>;
  categories?: Maybe<CategoryCreateManyWithoutCompaniesInput>;
  contact?: Maybe<ContactCreateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerCreateManyWithoutCompanyInput>;
  description: Scalars['String'];
  invoices?: Maybe<InvoiceCreateManyWithoutCompanyInput>;
  name: Scalars['String'];
  orders?: Maybe<OrderCreateManyWithoutCompanyInput>;
  owner?: Maybe<UserCreateOneWithoutCompaniesInput>;
  platform: PlatformCreateOneWithoutCompaniesInput;
  platformSlug: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewCreateManyWithoutCompanyInput>;
  slug: Scalars['String'];
  staffs?: Maybe<StaffCreateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyCreateWithoutInvoicesInput = {
  address?: Maybe<AddressCreateOneWithoutCompanyInput>;
  categories?: Maybe<CategoryCreateManyWithoutCompaniesInput>;
  contact?: Maybe<ContactCreateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerCreateManyWithoutCompanyInput>;
  deliveryDetail: DeliveryDetailCreateOneWithoutCompanyInput;
  description: Scalars['String'];
  name: Scalars['String'];
  orders?: Maybe<OrderCreateManyWithoutCompanyInput>;
  owner?: Maybe<UserCreateOneWithoutCompaniesInput>;
  platform: PlatformCreateOneWithoutCompaniesInput;
  platformSlug: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewCreateManyWithoutCompanyInput>;
  slug: Scalars['String'];
  staffs?: Maybe<StaffCreateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyCreateWithoutOrdersInput = {
  address?: Maybe<AddressCreateOneWithoutCompanyInput>;
  categories?: Maybe<CategoryCreateManyWithoutCompaniesInput>;
  contact?: Maybe<ContactCreateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerCreateManyWithoutCompanyInput>;
  deliveryDetail: DeliveryDetailCreateOneWithoutCompanyInput;
  description: Scalars['String'];
  invoices?: Maybe<InvoiceCreateManyWithoutCompanyInput>;
  name: Scalars['String'];
  owner?: Maybe<UserCreateOneWithoutCompaniesInput>;
  platform: PlatformCreateOneWithoutCompaniesInput;
  platformSlug: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewCreateManyWithoutCompanyInput>;
  slug: Scalars['String'];
  staffs?: Maybe<StaffCreateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyCreateWithoutOwnerInput = {
  address?: Maybe<AddressCreateOneWithoutCompanyInput>;
  categories?: Maybe<CategoryCreateManyWithoutCompaniesInput>;
  contact?: Maybe<ContactCreateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerCreateManyWithoutCompanyInput>;
  deliveryDetail: DeliveryDetailCreateOneWithoutCompanyInput;
  description: Scalars['String'];
  invoices?: Maybe<InvoiceCreateManyWithoutCompanyInput>;
  name: Scalars['String'];
  orders?: Maybe<OrderCreateManyWithoutCompanyInput>;
  platform: PlatformCreateOneWithoutCompaniesInput;
  platformSlug: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewCreateManyWithoutCompanyInput>;
  slug: Scalars['String'];
  staffs?: Maybe<StaffCreateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyCreateWithoutPlatformInput = {
  address?: Maybe<AddressCreateOneWithoutCompanyInput>;
  categories?: Maybe<CategoryCreateManyWithoutCompaniesInput>;
  contact?: Maybe<ContactCreateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerCreateManyWithoutCompanyInput>;
  deliveryDetail: DeliveryDetailCreateOneWithoutCompanyInput;
  description: Scalars['String'];
  invoices?: Maybe<InvoiceCreateManyWithoutCompanyInput>;
  name: Scalars['String'];
  orders?: Maybe<OrderCreateManyWithoutCompanyInput>;
  owner?: Maybe<UserCreateOneWithoutCompaniesInput>;
  platformSlug: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewCreateManyWithoutCompanyInput>;
  slug: Scalars['String'];
  staffs?: Maybe<StaffCreateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyCreateWithoutProductsInput = {
  address?: Maybe<AddressCreateOneWithoutCompanyInput>;
  categories?: Maybe<CategoryCreateManyWithoutCompaniesInput>;
  contact?: Maybe<ContactCreateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerCreateManyWithoutCompanyInput>;
  deliveryDetail: DeliveryDetailCreateOneWithoutCompanyInput;
  description: Scalars['String'];
  invoices?: Maybe<InvoiceCreateManyWithoutCompanyInput>;
  name: Scalars['String'];
  orders?: Maybe<OrderCreateManyWithoutCompanyInput>;
  owner?: Maybe<UserCreateOneWithoutCompaniesInput>;
  platform: PlatformCreateOneWithoutCompaniesInput;
  platformSlug: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewCreateManyWithoutCompanyInput>;
  slug: Scalars['String'];
  staffs?: Maybe<StaffCreateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyCreateWithoutReviewsInput = {
  address?: Maybe<AddressCreateOneWithoutCompanyInput>;
  categories?: Maybe<CategoryCreateManyWithoutCompaniesInput>;
  contact?: Maybe<ContactCreateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerCreateManyWithoutCompanyInput>;
  deliveryDetail: DeliveryDetailCreateOneWithoutCompanyInput;
  description: Scalars['String'];
  invoices?: Maybe<InvoiceCreateManyWithoutCompanyInput>;
  name: Scalars['String'];
  orders?: Maybe<OrderCreateManyWithoutCompanyInput>;
  owner?: Maybe<UserCreateOneWithoutCompaniesInput>;
  platform: PlatformCreateOneWithoutCompaniesInput;
  platformSlug: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  staffs?: Maybe<StaffCreateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyCreateWithoutStaffsInput = {
  address?: Maybe<AddressCreateOneWithoutCompanyInput>;
  categories?: Maybe<CategoryCreateManyWithoutCompaniesInput>;
  contact?: Maybe<ContactCreateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerCreateManyWithoutCompanyInput>;
  deliveryDetail: DeliveryDetailCreateOneWithoutCompanyInput;
  description: Scalars['String'];
  invoices?: Maybe<InvoiceCreateManyWithoutCompanyInput>;
  name: Scalars['String'];
  orders?: Maybe<OrderCreateManyWithoutCompanyInput>;
  owner?: Maybe<UserCreateOneWithoutCompaniesInput>;
  platform: PlatformCreateOneWithoutCompaniesInput;
  platformSlug: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductCreateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewCreateManyWithoutCompanyInput>;
  slug: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyFilter = {
  every?: Maybe<CompanyWhereInput>;
  none?: Maybe<CompanyWhereInput>;
  some?: Maybe<CompanyWhereInput>;
};

export type CompanyOrderByInput = {
  addressId?: Maybe<OrderByArg>;
  contactId?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  deliveryDetailId?: Maybe<OrderByArg>;
  description?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  ownerId?: Maybe<OrderByArg>;
  platformId?: Maybe<OrderByArg>;
  platformSlug?: Maybe<OrderByArg>;
  previewUrl?: Maybe<OrderByArg>;
  promotion?: Maybe<OrderByArg>;
  slug?: Maybe<OrderByArg>;
  thumbnailUrl?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type CompanyScalarWhereInput = {
  addressId?: Maybe<NullableIntFilter>;
  AND?: Maybe<Array<CompanyScalarWhereInput>>;
  categories?: Maybe<CategoryFilter>;
  contactId?: Maybe<NullableIntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  customers?: Maybe<CustomerFilter>;
  deliveryDetailId?: Maybe<IntFilter>;
  description?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  invoices?: Maybe<InvoiceFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<CompanyScalarWhereInput>>;
  OR?: Maybe<Array<CompanyScalarWhereInput>>;
  orders?: Maybe<OrderFilter>;
  ownerId?: Maybe<NullableStringFilter>;
  platformId?: Maybe<IntFilter>;
  platformSlug?: Maybe<StringFilter>;
  previewUrl?: Maybe<NullableStringFilter>;
  products?: Maybe<ProductFilter>;
  promotion?: Maybe<NullableStringFilter>;
  reviews?: Maybe<ReviewFilter>;
  slug?: Maybe<StringFilter>;
  staffs?: Maybe<StaffFilter>;
  thumbnailUrl?: Maybe<NullableStringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CompanyUpdateInput = {
  address?: Maybe<AddressUpdateOneWithoutCompanyInput>;
  categories?: Maybe<CategoryUpdateManyWithoutCompaniesInput>;
  contact?: Maybe<ContactUpdateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerUpdateManyWithoutCompanyInput>;
  deliveryDetail?: Maybe<DeliveryDetailUpdateOneRequiredWithoutCompanyInput>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  invoices?: Maybe<InvoiceUpdateManyWithoutCompanyInput>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderUpdateManyWithoutCompanyInput>;
  owner?: Maybe<UserUpdateOneWithoutCompaniesInput>;
  platform?: Maybe<PlatformUpdateOneRequiredWithoutCompaniesInput>;
  platformSlug?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUpdateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewUpdateManyWithoutCompanyInput>;
  slug?: Maybe<Scalars['String']>;
  staffs?: Maybe<StaffUpdateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  platformSlug?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  promotion?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  platformSlug?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  promotion?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyUpdateManyWithoutCategoriesInput = {
  connect?: Maybe<Array<CompanyWhereUniqueInput>>;
  create?: Maybe<Array<CompanyCreateWithoutCategoriesInput>>;
  delete?: Maybe<Array<CompanyWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CompanyScalarWhereInput>>;
  disconnect?: Maybe<Array<CompanyWhereUniqueInput>>;
  set?: Maybe<Array<CompanyWhereUniqueInput>>;
  update?: Maybe<Array<CompanyUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany?: Maybe<Array<CompanyUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<CompanyUpsertWithWhereUniqueWithoutCategoriesInput>>;
};

export type CompanyUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<CompanyWhereUniqueInput>>;
  create?: Maybe<Array<CompanyCreateWithoutOwnerInput>>;
  delete?: Maybe<Array<CompanyWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CompanyScalarWhereInput>>;
  disconnect?: Maybe<Array<CompanyWhereUniqueInput>>;
  set?: Maybe<Array<CompanyWhereUniqueInput>>;
  update?: Maybe<Array<CompanyUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<CompanyUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<CompanyUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type CompanyUpdateManyWithoutPlatformInput = {
  connect?: Maybe<Array<CompanyWhereUniqueInput>>;
  create?: Maybe<Array<CompanyCreateWithoutPlatformInput>>;
  delete?: Maybe<Array<CompanyWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CompanyScalarWhereInput>>;
  disconnect?: Maybe<Array<CompanyWhereUniqueInput>>;
  set?: Maybe<Array<CompanyWhereUniqueInput>>;
  update?: Maybe<Array<CompanyUpdateWithWhereUniqueWithoutPlatformInput>>;
  updateMany?: Maybe<Array<CompanyUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<CompanyUpsertWithWhereUniqueWithoutPlatformInput>>;
};

export type CompanyUpdateManyWithWhereNestedInput = {
  data: CompanyUpdateManyDataInput;
  where: CompanyScalarWhereInput;
};

export type CompanyUpdateOneRequiredWithoutStaffsInput = {
  connect?: Maybe<CompanyWhereUniqueInput>;
  create?: Maybe<CompanyCreateWithoutStaffsInput>;
  update?: Maybe<CompanyUpdateWithoutStaffsDataInput>;
  upsert?: Maybe<CompanyUpsertWithoutStaffsInput>;
};

export type CompanyUpdateOneWithoutAddressInput = {
  connect?: Maybe<CompanyWhereUniqueInput>;
  create?: Maybe<CompanyCreateWithoutAddressInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CompanyUpdateWithoutAddressDataInput>;
  upsert?: Maybe<CompanyUpsertWithoutAddressInput>;
};

export type CompanyUpdateOneWithoutContactInput = {
  connect?: Maybe<CompanyWhereUniqueInput>;
  create?: Maybe<CompanyCreateWithoutContactInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CompanyUpdateWithoutContactDataInput>;
  upsert?: Maybe<CompanyUpsertWithoutContactInput>;
};

export type CompanyUpdateOneWithoutCustomersInput = {
  connect?: Maybe<CompanyWhereUniqueInput>;
  create?: Maybe<CompanyCreateWithoutCustomersInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CompanyUpdateWithoutCustomersDataInput>;
  upsert?: Maybe<CompanyUpsertWithoutCustomersInput>;
};

export type CompanyUpdateOneWithoutDeliveryDetailInput = {
  connect?: Maybe<CompanyWhereUniqueInput>;
  create?: Maybe<CompanyCreateWithoutDeliveryDetailInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CompanyUpdateWithoutDeliveryDetailDataInput>;
  upsert?: Maybe<CompanyUpsertWithoutDeliveryDetailInput>;
};

export type CompanyUpdateOneWithoutInvoicesInput = {
  connect?: Maybe<CompanyWhereUniqueInput>;
  create?: Maybe<CompanyCreateWithoutInvoicesInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CompanyUpdateWithoutInvoicesDataInput>;
  upsert?: Maybe<CompanyUpsertWithoutInvoicesInput>;
};

export type CompanyUpdateOneWithoutOrdersInput = {
  connect?: Maybe<CompanyWhereUniqueInput>;
  create?: Maybe<CompanyCreateWithoutOrdersInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CompanyUpdateWithoutOrdersDataInput>;
  upsert?: Maybe<CompanyUpsertWithoutOrdersInput>;
};

export type CompanyUpdateOneWithoutProductsInput = {
  connect?: Maybe<CompanyWhereUniqueInput>;
  create?: Maybe<CompanyCreateWithoutProductsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CompanyUpdateWithoutProductsDataInput>;
  upsert?: Maybe<CompanyUpsertWithoutProductsInput>;
};

export type CompanyUpdateOneWithoutReviewsInput = {
  connect?: Maybe<CompanyWhereUniqueInput>;
  create?: Maybe<CompanyCreateWithoutReviewsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CompanyUpdateWithoutReviewsDataInput>;
  upsert?: Maybe<CompanyUpsertWithoutReviewsInput>;
};

export type CompanyUpdateWithoutAddressDataInput = {
  categories?: Maybe<CategoryUpdateManyWithoutCompaniesInput>;
  contact?: Maybe<ContactUpdateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerUpdateManyWithoutCompanyInput>;
  deliveryDetail?: Maybe<DeliveryDetailUpdateOneRequiredWithoutCompanyInput>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  invoices?: Maybe<InvoiceUpdateManyWithoutCompanyInput>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderUpdateManyWithoutCompanyInput>;
  owner?: Maybe<UserUpdateOneWithoutCompaniesInput>;
  platform?: Maybe<PlatformUpdateOneRequiredWithoutCompaniesInput>;
  platformSlug?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUpdateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewUpdateManyWithoutCompanyInput>;
  slug?: Maybe<Scalars['String']>;
  staffs?: Maybe<StaffUpdateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyUpdateWithoutCategoriesDataInput = {
  address?: Maybe<AddressUpdateOneWithoutCompanyInput>;
  contact?: Maybe<ContactUpdateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerUpdateManyWithoutCompanyInput>;
  deliveryDetail?: Maybe<DeliveryDetailUpdateOneRequiredWithoutCompanyInput>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  invoices?: Maybe<InvoiceUpdateManyWithoutCompanyInput>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderUpdateManyWithoutCompanyInput>;
  owner?: Maybe<UserUpdateOneWithoutCompaniesInput>;
  platform?: Maybe<PlatformUpdateOneRequiredWithoutCompaniesInput>;
  platformSlug?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUpdateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewUpdateManyWithoutCompanyInput>;
  slug?: Maybe<Scalars['String']>;
  staffs?: Maybe<StaffUpdateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyUpdateWithoutContactDataInput = {
  address?: Maybe<AddressUpdateOneWithoutCompanyInput>;
  categories?: Maybe<CategoryUpdateManyWithoutCompaniesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerUpdateManyWithoutCompanyInput>;
  deliveryDetail?: Maybe<DeliveryDetailUpdateOneRequiredWithoutCompanyInput>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  invoices?: Maybe<InvoiceUpdateManyWithoutCompanyInput>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderUpdateManyWithoutCompanyInput>;
  owner?: Maybe<UserUpdateOneWithoutCompaniesInput>;
  platform?: Maybe<PlatformUpdateOneRequiredWithoutCompaniesInput>;
  platformSlug?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUpdateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewUpdateManyWithoutCompanyInput>;
  slug?: Maybe<Scalars['String']>;
  staffs?: Maybe<StaffUpdateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyUpdateWithoutCustomersDataInput = {
  address?: Maybe<AddressUpdateOneWithoutCompanyInput>;
  categories?: Maybe<CategoryUpdateManyWithoutCompaniesInput>;
  contact?: Maybe<ContactUpdateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deliveryDetail?: Maybe<DeliveryDetailUpdateOneRequiredWithoutCompanyInput>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  invoices?: Maybe<InvoiceUpdateManyWithoutCompanyInput>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderUpdateManyWithoutCompanyInput>;
  owner?: Maybe<UserUpdateOneWithoutCompaniesInput>;
  platform?: Maybe<PlatformUpdateOneRequiredWithoutCompaniesInput>;
  platformSlug?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUpdateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewUpdateManyWithoutCompanyInput>;
  slug?: Maybe<Scalars['String']>;
  staffs?: Maybe<StaffUpdateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyUpdateWithoutDeliveryDetailDataInput = {
  address?: Maybe<AddressUpdateOneWithoutCompanyInput>;
  categories?: Maybe<CategoryUpdateManyWithoutCompaniesInput>;
  contact?: Maybe<ContactUpdateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerUpdateManyWithoutCompanyInput>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  invoices?: Maybe<InvoiceUpdateManyWithoutCompanyInput>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderUpdateManyWithoutCompanyInput>;
  owner?: Maybe<UserUpdateOneWithoutCompaniesInput>;
  platform?: Maybe<PlatformUpdateOneRequiredWithoutCompaniesInput>;
  platformSlug?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUpdateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewUpdateManyWithoutCompanyInput>;
  slug?: Maybe<Scalars['String']>;
  staffs?: Maybe<StaffUpdateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyUpdateWithoutInvoicesDataInput = {
  address?: Maybe<AddressUpdateOneWithoutCompanyInput>;
  categories?: Maybe<CategoryUpdateManyWithoutCompaniesInput>;
  contact?: Maybe<ContactUpdateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerUpdateManyWithoutCompanyInput>;
  deliveryDetail?: Maybe<DeliveryDetailUpdateOneRequiredWithoutCompanyInput>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderUpdateManyWithoutCompanyInput>;
  owner?: Maybe<UserUpdateOneWithoutCompaniesInput>;
  platform?: Maybe<PlatformUpdateOneRequiredWithoutCompaniesInput>;
  platformSlug?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUpdateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewUpdateManyWithoutCompanyInput>;
  slug?: Maybe<Scalars['String']>;
  staffs?: Maybe<StaffUpdateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyUpdateWithoutOrdersDataInput = {
  address?: Maybe<AddressUpdateOneWithoutCompanyInput>;
  categories?: Maybe<CategoryUpdateManyWithoutCompaniesInput>;
  contact?: Maybe<ContactUpdateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerUpdateManyWithoutCompanyInput>;
  deliveryDetail?: Maybe<DeliveryDetailUpdateOneRequiredWithoutCompanyInput>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  invoices?: Maybe<InvoiceUpdateManyWithoutCompanyInput>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<UserUpdateOneWithoutCompaniesInput>;
  platform?: Maybe<PlatformUpdateOneRequiredWithoutCompaniesInput>;
  platformSlug?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUpdateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewUpdateManyWithoutCompanyInput>;
  slug?: Maybe<Scalars['String']>;
  staffs?: Maybe<StaffUpdateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyUpdateWithoutOwnerDataInput = {
  address?: Maybe<AddressUpdateOneWithoutCompanyInput>;
  categories?: Maybe<CategoryUpdateManyWithoutCompaniesInput>;
  contact?: Maybe<ContactUpdateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerUpdateManyWithoutCompanyInput>;
  deliveryDetail?: Maybe<DeliveryDetailUpdateOneRequiredWithoutCompanyInput>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  invoices?: Maybe<InvoiceUpdateManyWithoutCompanyInput>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderUpdateManyWithoutCompanyInput>;
  platform?: Maybe<PlatformUpdateOneRequiredWithoutCompaniesInput>;
  platformSlug?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUpdateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewUpdateManyWithoutCompanyInput>;
  slug?: Maybe<Scalars['String']>;
  staffs?: Maybe<StaffUpdateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyUpdateWithoutPlatformDataInput = {
  address?: Maybe<AddressUpdateOneWithoutCompanyInput>;
  categories?: Maybe<CategoryUpdateManyWithoutCompaniesInput>;
  contact?: Maybe<ContactUpdateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerUpdateManyWithoutCompanyInput>;
  deliveryDetail?: Maybe<DeliveryDetailUpdateOneRequiredWithoutCompanyInput>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  invoices?: Maybe<InvoiceUpdateManyWithoutCompanyInput>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderUpdateManyWithoutCompanyInput>;
  owner?: Maybe<UserUpdateOneWithoutCompaniesInput>;
  platformSlug?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUpdateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewUpdateManyWithoutCompanyInput>;
  slug?: Maybe<Scalars['String']>;
  staffs?: Maybe<StaffUpdateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyUpdateWithoutProductsDataInput = {
  address?: Maybe<AddressUpdateOneWithoutCompanyInput>;
  categories?: Maybe<CategoryUpdateManyWithoutCompaniesInput>;
  contact?: Maybe<ContactUpdateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerUpdateManyWithoutCompanyInput>;
  deliveryDetail?: Maybe<DeliveryDetailUpdateOneRequiredWithoutCompanyInput>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  invoices?: Maybe<InvoiceUpdateManyWithoutCompanyInput>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderUpdateManyWithoutCompanyInput>;
  owner?: Maybe<UserUpdateOneWithoutCompaniesInput>;
  platform?: Maybe<PlatformUpdateOneRequiredWithoutCompaniesInput>;
  platformSlug?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewUpdateManyWithoutCompanyInput>;
  slug?: Maybe<Scalars['String']>;
  staffs?: Maybe<StaffUpdateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyUpdateWithoutReviewsDataInput = {
  address?: Maybe<AddressUpdateOneWithoutCompanyInput>;
  categories?: Maybe<CategoryUpdateManyWithoutCompaniesInput>;
  contact?: Maybe<ContactUpdateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerUpdateManyWithoutCompanyInput>;
  deliveryDetail?: Maybe<DeliveryDetailUpdateOneRequiredWithoutCompanyInput>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  invoices?: Maybe<InvoiceUpdateManyWithoutCompanyInput>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderUpdateManyWithoutCompanyInput>;
  owner?: Maybe<UserUpdateOneWithoutCompaniesInput>;
  platform?: Maybe<PlatformUpdateOneRequiredWithoutCompaniesInput>;
  platformSlug?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUpdateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  staffs?: Maybe<StaffUpdateManyWithoutCompanyInput>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyUpdateWithoutStaffsDataInput = {
  address?: Maybe<AddressUpdateOneWithoutCompanyInput>;
  categories?: Maybe<CategoryUpdateManyWithoutCompaniesInput>;
  contact?: Maybe<ContactUpdateOneWithoutCompanyInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerUpdateManyWithoutCompanyInput>;
  deliveryDetail?: Maybe<DeliveryDetailUpdateOneRequiredWithoutCompanyInput>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  invoices?: Maybe<InvoiceUpdateManyWithoutCompanyInput>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderUpdateManyWithoutCompanyInput>;
  owner?: Maybe<UserUpdateOneWithoutCompaniesInput>;
  platform?: Maybe<PlatformUpdateOneRequiredWithoutCompaniesInput>;
  platformSlug?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  products?: Maybe<ProductUpdateManyWithoutCompanyInput>;
  promotion?: Maybe<Scalars['String']>;
  reviews?: Maybe<ReviewUpdateManyWithoutCompanyInput>;
  slug?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CompanyUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: CompanyUpdateWithoutCategoriesDataInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyUpdateWithWhereUniqueWithoutOwnerInput = {
  data: CompanyUpdateWithoutOwnerDataInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyUpdateWithWhereUniqueWithoutPlatformInput = {
  data: CompanyUpdateWithoutPlatformDataInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyUpsertWithoutAddressInput = {
  create: CompanyCreateWithoutAddressInput;
  update: CompanyUpdateWithoutAddressDataInput;
};

export type CompanyUpsertWithoutContactInput = {
  create: CompanyCreateWithoutContactInput;
  update: CompanyUpdateWithoutContactDataInput;
};

export type CompanyUpsertWithoutCustomersInput = {
  create: CompanyCreateWithoutCustomersInput;
  update: CompanyUpdateWithoutCustomersDataInput;
};

export type CompanyUpsertWithoutDeliveryDetailInput = {
  create: CompanyCreateWithoutDeliveryDetailInput;
  update: CompanyUpdateWithoutDeliveryDetailDataInput;
};

export type CompanyUpsertWithoutInvoicesInput = {
  create: CompanyCreateWithoutInvoicesInput;
  update: CompanyUpdateWithoutInvoicesDataInput;
};

export type CompanyUpsertWithoutOrdersInput = {
  create: CompanyCreateWithoutOrdersInput;
  update: CompanyUpdateWithoutOrdersDataInput;
};

export type CompanyUpsertWithoutProductsInput = {
  create: CompanyCreateWithoutProductsInput;
  update: CompanyUpdateWithoutProductsDataInput;
};

export type CompanyUpsertWithoutReviewsInput = {
  create: CompanyCreateWithoutReviewsInput;
  update: CompanyUpdateWithoutReviewsDataInput;
};

export type CompanyUpsertWithoutStaffsInput = {
  create: CompanyCreateWithoutStaffsInput;
  update: CompanyUpdateWithoutStaffsDataInput;
};

export type CompanyUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: CompanyCreateWithoutCategoriesInput;
  update: CompanyUpdateWithoutCategoriesDataInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyUpsertWithWhereUniqueWithoutOwnerInput = {
  create: CompanyCreateWithoutOwnerInput;
  update: CompanyUpdateWithoutOwnerDataInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyUpsertWithWhereUniqueWithoutPlatformInput = {
  create: CompanyCreateWithoutPlatformInput;
  update: CompanyUpdateWithoutPlatformDataInput;
  where: CompanyWhereUniqueInput;
};

export type CompanyWhereInput = {
  address?: Maybe<AddressWhereInput>;
  addressId?: Maybe<NullableIntFilter>;
  AND?: Maybe<Array<CompanyWhereInput>>;
  categories?: Maybe<CategoryFilter>;
  contact?: Maybe<ContactWhereInput>;
  contactId?: Maybe<NullableIntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  customers?: Maybe<CustomerFilter>;
  deliveryDetail?: Maybe<DeliveryDetailWhereInput>;
  deliveryDetailId?: Maybe<IntFilter>;
  description?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  invoices?: Maybe<InvoiceFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<CompanyWhereInput>>;
  OR?: Maybe<Array<CompanyWhereInput>>;
  orders?: Maybe<OrderFilter>;
  owner?: Maybe<UserWhereInput>;
  ownerId?: Maybe<NullableStringFilter>;
  platform?: Maybe<PlatformWhereInput>;
  platformId?: Maybe<IntFilter>;
  platformSlug?: Maybe<StringFilter>;
  previewUrl?: Maybe<NullableStringFilter>;
  products?: Maybe<ProductFilter>;
  promotion?: Maybe<NullableStringFilter>;
  reviews?: Maybe<ReviewFilter>;
  slug?: Maybe<StringFilter>;
  staffs?: Maybe<StaffFilter>;
  thumbnailUrl?: Maybe<NullableStringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CompanyWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

export type Contact = {
  __typename?: 'Contact';
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  number: Scalars['String'];
  orders: Array<Order>;
  staffs: Array<Staff>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};


export type ContactOrdersArgs = {
  cursor?: Maybe<OrderWhereUniqueInput>;
  orderBy?: Maybe<OrderOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<OrderWhereInput>;
};


export type ContactStaffsArgs = {
  cursor?: Maybe<StaffWhereUniqueInput>;
  orderBy?: Maybe<StaffOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StaffWhereInput>;
};

export type ContactCreateInput = {
  company?: Maybe<CompanyCreateOneWithoutContactInput>;
  companyId?: Maybe<Scalars['Int']>;
  number: Scalars['String'];
  orders?: Maybe<OrderCreateManyWithoutContactInput>;
  staffs?: Maybe<StaffCreateManyWithoutContactInput>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<UserCreateOneWithoutContactsInput>;
};

export type ContactCreateManyWithoutUserInput = {
  connect?: Maybe<Array<ContactWhereUniqueInput>>;
  create?: Maybe<Array<ContactCreateWithoutUserInput>>;
};

export type ContactCreateOneWithoutCompanyInput = {
  connect?: Maybe<ContactWhereUniqueInput>;
  create?: Maybe<ContactCreateWithoutCompanyInput>;
};

export type ContactCreateOneWithoutOrdersInput = {
  connect?: Maybe<ContactWhereUniqueInput>;
  create?: Maybe<ContactCreateWithoutOrdersInput>;
};

export type ContactCreateOneWithoutStaffsInput = {
  connect?: Maybe<ContactWhereUniqueInput>;
  create?: Maybe<ContactCreateWithoutStaffsInput>;
};

export type ContactCreateWithoutCompanyInput = {
  companyId?: Maybe<Scalars['Int']>;
  number: Scalars['String'];
  orders?: Maybe<OrderCreateManyWithoutContactInput>;
  staffs?: Maybe<StaffCreateManyWithoutContactInput>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<UserCreateOneWithoutContactsInput>;
};

export type ContactCreateWithoutOrdersInput = {
  company?: Maybe<CompanyCreateOneWithoutContactInput>;
  companyId?: Maybe<Scalars['Int']>;
  number: Scalars['String'];
  staffs?: Maybe<StaffCreateManyWithoutContactInput>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<UserCreateOneWithoutContactsInput>;
};

export type ContactCreateWithoutStaffsInput = {
  company?: Maybe<CompanyCreateOneWithoutContactInput>;
  companyId?: Maybe<Scalars['Int']>;
  number: Scalars['String'];
  orders?: Maybe<OrderCreateManyWithoutContactInput>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<UserCreateOneWithoutContactsInput>;
};

export type ContactCreateWithoutUserInput = {
  company?: Maybe<CompanyCreateOneWithoutContactInput>;
  companyId?: Maybe<Scalars['Int']>;
  number: Scalars['String'];
  orders?: Maybe<OrderCreateManyWithoutContactInput>;
  staffs?: Maybe<StaffCreateManyWithoutContactInput>;
  type?: Maybe<Scalars['String']>;
};

export type ContactFilter = {
  every?: Maybe<ContactWhereInput>;
  none?: Maybe<ContactWhereInput>;
  some?: Maybe<ContactWhereInput>;
};

export type ContactOrderByInput = {
  companyId?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  number?: Maybe<OrderByArg>;
  type?: Maybe<OrderByArg>;
  userId?: Maybe<OrderByArg>;
};

export type ContactScalarWhereInput = {
  AND?: Maybe<Array<ContactScalarWhereInput>>;
  companyId?: Maybe<NullableIntFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<ContactScalarWhereInput>>;
  number?: Maybe<StringFilter>;
  OR?: Maybe<Array<ContactScalarWhereInput>>;
  orders?: Maybe<OrderFilter>;
  staffs?: Maybe<StaffFilter>;
  type?: Maybe<NullableStringFilter>;
  userId?: Maybe<NullableStringFilter>;
};

export type ContactUpdateInput = {
  company?: Maybe<CompanyUpdateOneWithoutContactInput>;
  companyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderUpdateManyWithoutContactInput>;
  staffs?: Maybe<StaffUpdateManyWithoutContactInput>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<UserUpdateOneWithoutContactsInput>;
};

export type ContactUpdateManyDataInput = {
  companyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ContactUpdateManyMutationInput = {
  companyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ContactUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<ContactWhereUniqueInput>>;
  create?: Maybe<Array<ContactCreateWithoutUserInput>>;
  delete?: Maybe<Array<ContactWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ContactScalarWhereInput>>;
  disconnect?: Maybe<Array<ContactWhereUniqueInput>>;
  set?: Maybe<Array<ContactWhereUniqueInput>>;
  update?: Maybe<Array<ContactUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<ContactUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ContactUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ContactUpdateManyWithWhereNestedInput = {
  data: ContactUpdateManyDataInput;
  where: ContactScalarWhereInput;
};

export type ContactUpdateOneWithoutCompanyInput = {
  connect?: Maybe<ContactWhereUniqueInput>;
  create?: Maybe<ContactCreateWithoutCompanyInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ContactUpdateWithoutCompanyDataInput>;
  upsert?: Maybe<ContactUpsertWithoutCompanyInput>;
};

export type ContactUpdateOneWithoutOrdersInput = {
  connect?: Maybe<ContactWhereUniqueInput>;
  create?: Maybe<ContactCreateWithoutOrdersInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ContactUpdateWithoutOrdersDataInput>;
  upsert?: Maybe<ContactUpsertWithoutOrdersInput>;
};

export type ContactUpdateOneWithoutStaffsInput = {
  connect?: Maybe<ContactWhereUniqueInput>;
  create?: Maybe<ContactCreateWithoutStaffsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ContactUpdateWithoutStaffsDataInput>;
  upsert?: Maybe<ContactUpsertWithoutStaffsInput>;
};

export type ContactUpdateWithoutCompanyDataInput = {
  companyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderUpdateManyWithoutContactInput>;
  staffs?: Maybe<StaffUpdateManyWithoutContactInput>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<UserUpdateOneWithoutContactsInput>;
};

export type ContactUpdateWithoutOrdersDataInput = {
  company?: Maybe<CompanyUpdateOneWithoutContactInput>;
  companyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['String']>;
  staffs?: Maybe<StaffUpdateManyWithoutContactInput>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<UserUpdateOneWithoutContactsInput>;
};

export type ContactUpdateWithoutStaffsDataInput = {
  company?: Maybe<CompanyUpdateOneWithoutContactInput>;
  companyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderUpdateManyWithoutContactInput>;
  type?: Maybe<Scalars['String']>;
  user?: Maybe<UserUpdateOneWithoutContactsInput>;
};

export type ContactUpdateWithoutUserDataInput = {
  company?: Maybe<CompanyUpdateOneWithoutContactInput>;
  companyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['String']>;
  orders?: Maybe<OrderUpdateManyWithoutContactInput>;
  staffs?: Maybe<StaffUpdateManyWithoutContactInput>;
  type?: Maybe<Scalars['String']>;
};

export type ContactUpdateWithWhereUniqueWithoutUserInput = {
  data: ContactUpdateWithoutUserDataInput;
  where: ContactWhereUniqueInput;
};

export type ContactUpsertWithoutCompanyInput = {
  create: ContactCreateWithoutCompanyInput;
  update: ContactUpdateWithoutCompanyDataInput;
};

export type ContactUpsertWithoutOrdersInput = {
  create: ContactCreateWithoutOrdersInput;
  update: ContactUpdateWithoutOrdersDataInput;
};

export type ContactUpsertWithoutStaffsInput = {
  create: ContactCreateWithoutStaffsInput;
  update: ContactUpdateWithoutStaffsDataInput;
};

export type ContactUpsertWithWhereUniqueWithoutUserInput = {
  create: ContactCreateWithoutUserInput;
  update: ContactUpdateWithoutUserDataInput;
  where: ContactWhereUniqueInput;
};

export type ContactWhereInput = {
  AND?: Maybe<Array<ContactWhereInput>>;
  company?: Maybe<CompanyWhereInput>;
  companyId?: Maybe<NullableIntFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<ContactWhereInput>>;
  number?: Maybe<StringFilter>;
  OR?: Maybe<Array<ContactWhereInput>>;
  orders?: Maybe<OrderFilter>;
  staffs?: Maybe<StaffFilter>;
  type?: Maybe<NullableStringFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<NullableStringFilter>;
};

export type ContactWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['Int'];
  currency: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  platforms: Array<Platform>;
};


export type CountryPlatformsArgs = {
  cursor?: Maybe<PlatformWhereUniqueInput>;
  orderBy?: Maybe<PlatformOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PlatformWhereInput>;
};

export type CountryCreateInput = {
  code: Scalars['Int'];
  currency: Scalars['String'];
  name: Scalars['String'];
  platforms?: Maybe<PlatformCreateManyWithoutCountryInput>;
};

export type CountryCreateOneWithoutPlatformsInput = {
  connect?: Maybe<CountryWhereUniqueInput>;
  create?: Maybe<CountryCreateWithoutPlatformsInput>;
};

export type CountryCreateWithoutPlatformsInput = {
  code: Scalars['Int'];
  currency: Scalars['String'];
  name: Scalars['String'];
};

export type CountryOrderByInput = {
  code?: Maybe<OrderByArg>;
  currency?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
};

export type CountryUpdateInput = {
  code?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  platforms?: Maybe<PlatformUpdateManyWithoutCountryInput>;
};

export type CountryUpdateManyMutationInput = {
  code?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CountryUpdateOneWithoutPlatformsInput = {
  connect?: Maybe<CountryWhereUniqueInput>;
  create?: Maybe<CountryCreateWithoutPlatformsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CountryUpdateWithoutPlatformsDataInput>;
  upsert?: Maybe<CountryUpsertWithoutPlatformsInput>;
};

export type CountryUpdateWithoutPlatformsDataInput = {
  code?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CountryUpsertWithoutPlatformsInput = {
  create: CountryCreateWithoutPlatformsInput;
  update: CountryUpdateWithoutPlatformsDataInput;
};

export type CountryWhereInput = {
  AND?: Maybe<Array<CountryWhereInput>>;
  code?: Maybe<IntFilter>;
  currency?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<CountryWhereInput>>;
  OR?: Maybe<Array<CountryWhereInput>>;
  platforms?: Maybe<PlatformFilter>;
};

export type CountryWhereUniqueInput = {
  code?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Coupon = {
  __typename?: 'Coupon';
  code: Scalars['String'];
  discountInPercent: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['String'];
  name: Scalars['String'];
  numberOfCoupon: Scalars['Int'];
  numberOfUsedCoupon: Scalars['Int'];
};

export type CouponCreateInput = {
  code: Scalars['String'];
  discountInPercent?: Maybe<Scalars['Int']>;
  image: Scalars['String'];
  name: Scalars['String'];
  numberOfCoupon?: Maybe<Scalars['Int']>;
  numberOfUsedCoupon?: Maybe<Scalars['Int']>;
};

export type CouponOrderByInput = {
  code?: Maybe<OrderByArg>;
  discountInPercent?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  image?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  numberOfCoupon?: Maybe<OrderByArg>;
  numberOfUsedCoupon?: Maybe<OrderByArg>;
};

export type CouponUpdateInput = {
  code?: Maybe<Scalars['String']>;
  discountInPercent?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  numberOfCoupon?: Maybe<Scalars['Int']>;
  numberOfUsedCoupon?: Maybe<Scalars['Int']>;
};

export type CouponUpdateManyMutationInput = {
  code?: Maybe<Scalars['String']>;
  discountInPercent?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  numberOfCoupon?: Maybe<Scalars['Int']>;
  numberOfUsedCoupon?: Maybe<Scalars['Int']>;
};

export type CouponWhereInput = {
  AND?: Maybe<Array<CouponWhereInput>>;
  code?: Maybe<StringFilter>;
  discountInPercent?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  image?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<CouponWhereInput>>;
  numberOfCoupon?: Maybe<IntFilter>;
  numberOfUsedCoupon?: Maybe<IntFilter>;
  OR?: Maybe<Array<CouponWhereInput>>;
};

export type CouponWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Customer = {
  __typename?: 'Customer';
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  firstSeen?: Maybe<Scalars['DateTime']>;
  groups: Array<Scalars['String']>;
  hasNewsLetter?: Maybe<Scalars['Boolean']>;
  hasOrdered?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  invoices: Array<Invoice>;
  lastName: Scalars['String'];
  lastSeen?: Maybe<Scalars['DateTime']>;
  latestPurchase?: Maybe<Scalars['DateTime']>;
  nbOrders?: Maybe<Scalars['Int']>;
  orders: Array<Order>;
  reviews: Array<Review>;
  totalOrder: Scalars['Int'];
  totalSpent?: Maybe<Scalars['Float']>;
  user: User;
  userId: Scalars['String'];
  zipcode?: Maybe<Scalars['String']>;
};


export type CustomerInvoicesArgs = {
  cursor?: Maybe<InvoiceWhereUniqueInput>;
  orderBy?: Maybe<InvoiceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<InvoiceWhereInput>;
};


export type CustomerOrdersArgs = {
  cursor?: Maybe<OrderWhereUniqueInput>;
  orderBy?: Maybe<OrderOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<OrderWhereInput>;
};


export type CustomerReviewsArgs = {
  cursor?: Maybe<ReviewWhereUniqueInput>;
  orderBy?: Maybe<ReviewOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ReviewWhereInput>;
};

export type CustomerCreategroupsInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type CustomerCreateInput = {
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyCreateOneWithoutCustomersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  firstSeen?: Maybe<Scalars['DateTime']>;
  groups?: Maybe<CustomerCreategroupsInput>;
  hasNewsLetter?: Maybe<Scalars['Boolean']>;
  hasOrdered?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Scalars['String']>;
  invoices?: Maybe<InvoiceCreateManyWithoutCustomerInput>;
  lastName: Scalars['String'];
  lastSeen?: Maybe<Scalars['DateTime']>;
  latestPurchase?: Maybe<Scalars['DateTime']>;
  nbOrders?: Maybe<Scalars['Int']>;
  orders?: Maybe<OrderCreateManyWithoutCustomerInput>;
  reviews?: Maybe<ReviewCreateManyWithoutCustomerInput>;
  totalOrder?: Maybe<Scalars['Int']>;
  totalSpent?: Maybe<Scalars['Float']>;
  user: UserCreateOneWithoutCustomersInput;
  zipcode?: Maybe<Scalars['String']>;
};

export type CustomerCreateManyWithoutCompanyInput = {
  connect?: Maybe<Array<CustomerWhereUniqueInput>>;
  create?: Maybe<Array<CustomerCreateWithoutCompanyInput>>;
};

export type CustomerCreateManyWithoutUserInput = {
  connect?: Maybe<Array<CustomerWhereUniqueInput>>;
  create?: Maybe<Array<CustomerCreateWithoutUserInput>>;
};

export type CustomerCreateOneWithoutInvoicesInput = {
  connect?: Maybe<CustomerWhereUniqueInput>;
  create?: Maybe<CustomerCreateWithoutInvoicesInput>;
};

export type CustomerCreateOneWithoutOrdersInput = {
  connect?: Maybe<CustomerWhereUniqueInput>;
  create?: Maybe<CustomerCreateWithoutOrdersInput>;
};

export type CustomerCreateOneWithoutReviewsInput = {
  connect?: Maybe<CustomerWhereUniqueInput>;
  create?: Maybe<CustomerCreateWithoutReviewsInput>;
};

export type CustomerCreateWithoutCompanyInput = {
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  firstSeen?: Maybe<Scalars['DateTime']>;
  groups?: Maybe<CustomerCreategroupsInput>;
  hasNewsLetter?: Maybe<Scalars['Boolean']>;
  hasOrdered?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Scalars['String']>;
  invoices?: Maybe<InvoiceCreateManyWithoutCustomerInput>;
  lastName: Scalars['String'];
  lastSeen?: Maybe<Scalars['DateTime']>;
  latestPurchase?: Maybe<Scalars['DateTime']>;
  nbOrders?: Maybe<Scalars['Int']>;
  orders?: Maybe<OrderCreateManyWithoutCustomerInput>;
  reviews?: Maybe<ReviewCreateManyWithoutCustomerInput>;
  totalOrder?: Maybe<Scalars['Int']>;
  totalSpent?: Maybe<Scalars['Float']>;
  user: UserCreateOneWithoutCustomersInput;
  zipcode?: Maybe<Scalars['String']>;
};

export type CustomerCreateWithoutInvoicesInput = {
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyCreateOneWithoutCustomersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  firstSeen?: Maybe<Scalars['DateTime']>;
  groups?: Maybe<CustomerCreategroupsInput>;
  hasNewsLetter?: Maybe<Scalars['Boolean']>;
  hasOrdered?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  lastSeen?: Maybe<Scalars['DateTime']>;
  latestPurchase?: Maybe<Scalars['DateTime']>;
  nbOrders?: Maybe<Scalars['Int']>;
  orders?: Maybe<OrderCreateManyWithoutCustomerInput>;
  reviews?: Maybe<ReviewCreateManyWithoutCustomerInput>;
  totalOrder?: Maybe<Scalars['Int']>;
  totalSpent?: Maybe<Scalars['Float']>;
  user: UserCreateOneWithoutCustomersInput;
  zipcode?: Maybe<Scalars['String']>;
};

export type CustomerCreateWithoutOrdersInput = {
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyCreateOneWithoutCustomersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  firstSeen?: Maybe<Scalars['DateTime']>;
  groups?: Maybe<CustomerCreategroupsInput>;
  hasNewsLetter?: Maybe<Scalars['Boolean']>;
  hasOrdered?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Scalars['String']>;
  invoices?: Maybe<InvoiceCreateManyWithoutCustomerInput>;
  lastName: Scalars['String'];
  lastSeen?: Maybe<Scalars['DateTime']>;
  latestPurchase?: Maybe<Scalars['DateTime']>;
  nbOrders?: Maybe<Scalars['Int']>;
  reviews?: Maybe<ReviewCreateManyWithoutCustomerInput>;
  totalOrder?: Maybe<Scalars['Int']>;
  totalSpent?: Maybe<Scalars['Float']>;
  user: UserCreateOneWithoutCustomersInput;
  zipcode?: Maybe<Scalars['String']>;
};

export type CustomerCreateWithoutReviewsInput = {
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyCreateOneWithoutCustomersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  firstSeen?: Maybe<Scalars['DateTime']>;
  groups?: Maybe<CustomerCreategroupsInput>;
  hasNewsLetter?: Maybe<Scalars['Boolean']>;
  hasOrdered?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Scalars['String']>;
  invoices?: Maybe<InvoiceCreateManyWithoutCustomerInput>;
  lastName: Scalars['String'];
  lastSeen?: Maybe<Scalars['DateTime']>;
  latestPurchase?: Maybe<Scalars['DateTime']>;
  nbOrders?: Maybe<Scalars['Int']>;
  orders?: Maybe<OrderCreateManyWithoutCustomerInput>;
  totalOrder?: Maybe<Scalars['Int']>;
  totalSpent?: Maybe<Scalars['Float']>;
  user: UserCreateOneWithoutCustomersInput;
  zipcode?: Maybe<Scalars['String']>;
};

export type CustomerCreateWithoutUserInput = {
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyCreateOneWithoutCustomersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  firstSeen?: Maybe<Scalars['DateTime']>;
  groups?: Maybe<CustomerCreategroupsInput>;
  hasNewsLetter?: Maybe<Scalars['Boolean']>;
  hasOrdered?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Scalars['String']>;
  invoices?: Maybe<InvoiceCreateManyWithoutCustomerInput>;
  lastName: Scalars['String'];
  lastSeen?: Maybe<Scalars['DateTime']>;
  latestPurchase?: Maybe<Scalars['DateTime']>;
  nbOrders?: Maybe<Scalars['Int']>;
  orders?: Maybe<OrderCreateManyWithoutCustomerInput>;
  reviews?: Maybe<ReviewCreateManyWithoutCustomerInput>;
  totalOrder?: Maybe<Scalars['Int']>;
  totalSpent?: Maybe<Scalars['Float']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type CustomerFilter = {
  every?: Maybe<CustomerWhereInput>;
  none?: Maybe<CustomerWhereInput>;
  some?: Maybe<CustomerWhereInput>;
};

export type CustomerOrderByInput = {
  address?: Maybe<OrderByArg>;
  avatar?: Maybe<OrderByArg>;
  birthday?: Maybe<OrderByArg>;
  city?: Maybe<OrderByArg>;
  companyId?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  email?: Maybe<OrderByArg>;
  firstName?: Maybe<OrderByArg>;
  firstSeen?: Maybe<OrderByArg>;
  hasNewsLetter?: Maybe<OrderByArg>;
  hasOrdered?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  image?: Maybe<OrderByArg>;
  lastName?: Maybe<OrderByArg>;
  lastSeen?: Maybe<OrderByArg>;
  latestPurchase?: Maybe<OrderByArg>;
  nbOrders?: Maybe<OrderByArg>;
  totalOrder?: Maybe<OrderByArg>;
  totalSpent?: Maybe<OrderByArg>;
  userId?: Maybe<OrderByArg>;
  zipcode?: Maybe<OrderByArg>;
};

export type CustomerScalarWhereInput = {
  address?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<CustomerScalarWhereInput>>;
  avatar?: Maybe<NullableStringFilter>;
  birthday?: Maybe<NullableDateTimeFilter>;
  city?: Maybe<NullableStringFilter>;
  companyId?: Maybe<NullableIntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  firstName?: Maybe<StringFilter>;
  firstSeen?: Maybe<NullableDateTimeFilter>;
  hasNewsLetter?: Maybe<NullableBooleanFilter>;
  hasOrdered?: Maybe<NullableBooleanFilter>;
  id?: Maybe<IntFilter>;
  image?: Maybe<NullableStringFilter>;
  invoices?: Maybe<InvoiceFilter>;
  lastName?: Maybe<StringFilter>;
  lastSeen?: Maybe<NullableDateTimeFilter>;
  latestPurchase?: Maybe<NullableDateTimeFilter>;
  nbOrders?: Maybe<NullableIntFilter>;
  NOT?: Maybe<Array<CustomerScalarWhereInput>>;
  OR?: Maybe<Array<CustomerScalarWhereInput>>;
  orders?: Maybe<OrderFilter>;
  reviews?: Maybe<ReviewFilter>;
  totalOrder?: Maybe<IntFilter>;
  totalSpent?: Maybe<NullableFloatFilter>;
  userId?: Maybe<StringFilter>;
  zipcode?: Maybe<NullableStringFilter>;
};

export type CustomerUpdategroupsInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type CustomerUpdateInput = {
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyUpdateOneWithoutCustomersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstSeen?: Maybe<Scalars['DateTime']>;
  groups?: Maybe<CustomerUpdategroupsInput>;
  hasNewsLetter?: Maybe<Scalars['Boolean']>;
  hasOrdered?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  invoices?: Maybe<InvoiceUpdateManyWithoutCustomerInput>;
  lastName?: Maybe<Scalars['String']>;
  lastSeen?: Maybe<Scalars['DateTime']>;
  latestPurchase?: Maybe<Scalars['DateTime']>;
  nbOrders?: Maybe<Scalars['Int']>;
  orders?: Maybe<OrderUpdateManyWithoutCustomerInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutCustomerInput>;
  totalOrder?: Maybe<Scalars['Int']>;
  totalSpent?: Maybe<Scalars['Float']>;
  user?: Maybe<UserUpdateOneRequiredWithoutCustomersInput>;
  zipcode?: Maybe<Scalars['String']>;
};

export type CustomerUpdateManyDataInput = {
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstSeen?: Maybe<Scalars['DateTime']>;
  groups?: Maybe<CustomerUpdategroupsInput>;
  hasNewsLetter?: Maybe<Scalars['Boolean']>;
  hasOrdered?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastSeen?: Maybe<Scalars['DateTime']>;
  latestPurchase?: Maybe<Scalars['DateTime']>;
  nbOrders?: Maybe<Scalars['Int']>;
  totalOrder?: Maybe<Scalars['Int']>;
  totalSpent?: Maybe<Scalars['Float']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type CustomerUpdateManyMutationInput = {
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstSeen?: Maybe<Scalars['DateTime']>;
  groups?: Maybe<CustomerUpdategroupsInput>;
  hasNewsLetter?: Maybe<Scalars['Boolean']>;
  hasOrdered?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastSeen?: Maybe<Scalars['DateTime']>;
  latestPurchase?: Maybe<Scalars['DateTime']>;
  nbOrders?: Maybe<Scalars['Int']>;
  totalOrder?: Maybe<Scalars['Int']>;
  totalSpent?: Maybe<Scalars['Float']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type CustomerUpdateManyWithoutCompanyInput = {
  connect?: Maybe<Array<CustomerWhereUniqueInput>>;
  create?: Maybe<Array<CustomerCreateWithoutCompanyInput>>;
  delete?: Maybe<Array<CustomerWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CustomerScalarWhereInput>>;
  disconnect?: Maybe<Array<CustomerWhereUniqueInput>>;
  set?: Maybe<Array<CustomerWhereUniqueInput>>;
  update?: Maybe<Array<CustomerUpdateWithWhereUniqueWithoutCompanyInput>>;
  updateMany?: Maybe<Array<CustomerUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<CustomerUpsertWithWhereUniqueWithoutCompanyInput>>;
};

export type CustomerUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<CustomerWhereUniqueInput>>;
  create?: Maybe<Array<CustomerCreateWithoutUserInput>>;
  delete?: Maybe<Array<CustomerWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CustomerScalarWhereInput>>;
  disconnect?: Maybe<Array<CustomerWhereUniqueInput>>;
  set?: Maybe<Array<CustomerWhereUniqueInput>>;
  update?: Maybe<Array<CustomerUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<CustomerUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<CustomerUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CustomerUpdateManyWithWhereNestedInput = {
  data: CustomerUpdateManyDataInput;
  where: CustomerScalarWhereInput;
};

export type CustomerUpdateOneRequiredWithoutInvoicesInput = {
  connect?: Maybe<CustomerWhereUniqueInput>;
  create?: Maybe<CustomerCreateWithoutInvoicesInput>;
  update?: Maybe<CustomerUpdateWithoutInvoicesDataInput>;
  upsert?: Maybe<CustomerUpsertWithoutInvoicesInput>;
};

export type CustomerUpdateOneWithoutOrdersInput = {
  connect?: Maybe<CustomerWhereUniqueInput>;
  create?: Maybe<CustomerCreateWithoutOrdersInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CustomerUpdateWithoutOrdersDataInput>;
  upsert?: Maybe<CustomerUpsertWithoutOrdersInput>;
};

export type CustomerUpdateOneWithoutReviewsInput = {
  connect?: Maybe<CustomerWhereUniqueInput>;
  create?: Maybe<CustomerCreateWithoutReviewsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<CustomerUpdateWithoutReviewsDataInput>;
  upsert?: Maybe<CustomerUpsertWithoutReviewsInput>;
};

export type CustomerUpdateWithoutCompanyDataInput = {
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstSeen?: Maybe<Scalars['DateTime']>;
  groups?: Maybe<CustomerUpdategroupsInput>;
  hasNewsLetter?: Maybe<Scalars['Boolean']>;
  hasOrdered?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  invoices?: Maybe<InvoiceUpdateManyWithoutCustomerInput>;
  lastName?: Maybe<Scalars['String']>;
  lastSeen?: Maybe<Scalars['DateTime']>;
  latestPurchase?: Maybe<Scalars['DateTime']>;
  nbOrders?: Maybe<Scalars['Int']>;
  orders?: Maybe<OrderUpdateManyWithoutCustomerInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutCustomerInput>;
  totalOrder?: Maybe<Scalars['Int']>;
  totalSpent?: Maybe<Scalars['Float']>;
  user?: Maybe<UserUpdateOneRequiredWithoutCustomersInput>;
  zipcode?: Maybe<Scalars['String']>;
};

export type CustomerUpdateWithoutInvoicesDataInput = {
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyUpdateOneWithoutCustomersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstSeen?: Maybe<Scalars['DateTime']>;
  groups?: Maybe<CustomerUpdategroupsInput>;
  hasNewsLetter?: Maybe<Scalars['Boolean']>;
  hasOrdered?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastSeen?: Maybe<Scalars['DateTime']>;
  latestPurchase?: Maybe<Scalars['DateTime']>;
  nbOrders?: Maybe<Scalars['Int']>;
  orders?: Maybe<OrderUpdateManyWithoutCustomerInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutCustomerInput>;
  totalOrder?: Maybe<Scalars['Int']>;
  totalSpent?: Maybe<Scalars['Float']>;
  user?: Maybe<UserUpdateOneRequiredWithoutCustomersInput>;
  zipcode?: Maybe<Scalars['String']>;
};

export type CustomerUpdateWithoutOrdersDataInput = {
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyUpdateOneWithoutCustomersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstSeen?: Maybe<Scalars['DateTime']>;
  groups?: Maybe<CustomerUpdategroupsInput>;
  hasNewsLetter?: Maybe<Scalars['Boolean']>;
  hasOrdered?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  invoices?: Maybe<InvoiceUpdateManyWithoutCustomerInput>;
  lastName?: Maybe<Scalars['String']>;
  lastSeen?: Maybe<Scalars['DateTime']>;
  latestPurchase?: Maybe<Scalars['DateTime']>;
  nbOrders?: Maybe<Scalars['Int']>;
  reviews?: Maybe<ReviewUpdateManyWithoutCustomerInput>;
  totalOrder?: Maybe<Scalars['Int']>;
  totalSpent?: Maybe<Scalars['Float']>;
  user?: Maybe<UserUpdateOneRequiredWithoutCustomersInput>;
  zipcode?: Maybe<Scalars['String']>;
};

export type CustomerUpdateWithoutReviewsDataInput = {
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyUpdateOneWithoutCustomersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstSeen?: Maybe<Scalars['DateTime']>;
  groups?: Maybe<CustomerUpdategroupsInput>;
  hasNewsLetter?: Maybe<Scalars['Boolean']>;
  hasOrdered?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  invoices?: Maybe<InvoiceUpdateManyWithoutCustomerInput>;
  lastName?: Maybe<Scalars['String']>;
  lastSeen?: Maybe<Scalars['DateTime']>;
  latestPurchase?: Maybe<Scalars['DateTime']>;
  nbOrders?: Maybe<Scalars['Int']>;
  orders?: Maybe<OrderUpdateManyWithoutCustomerInput>;
  totalOrder?: Maybe<Scalars['Int']>;
  totalSpent?: Maybe<Scalars['Float']>;
  user?: Maybe<UserUpdateOneRequiredWithoutCustomersInput>;
  zipcode?: Maybe<Scalars['String']>;
};

export type CustomerUpdateWithoutUserDataInput = {
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyUpdateOneWithoutCustomersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstSeen?: Maybe<Scalars['DateTime']>;
  groups?: Maybe<CustomerUpdategroupsInput>;
  hasNewsLetter?: Maybe<Scalars['Boolean']>;
  hasOrdered?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  invoices?: Maybe<InvoiceUpdateManyWithoutCustomerInput>;
  lastName?: Maybe<Scalars['String']>;
  lastSeen?: Maybe<Scalars['DateTime']>;
  latestPurchase?: Maybe<Scalars['DateTime']>;
  nbOrders?: Maybe<Scalars['Int']>;
  orders?: Maybe<OrderUpdateManyWithoutCustomerInput>;
  reviews?: Maybe<ReviewUpdateManyWithoutCustomerInput>;
  totalOrder?: Maybe<Scalars['Int']>;
  totalSpent?: Maybe<Scalars['Float']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type CustomerUpdateWithWhereUniqueWithoutCompanyInput = {
  data: CustomerUpdateWithoutCompanyDataInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerUpdateWithWhereUniqueWithoutUserInput = {
  data: CustomerUpdateWithoutUserDataInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerUpsertWithoutInvoicesInput = {
  create: CustomerCreateWithoutInvoicesInput;
  update: CustomerUpdateWithoutInvoicesDataInput;
};

export type CustomerUpsertWithoutOrdersInput = {
  create: CustomerCreateWithoutOrdersInput;
  update: CustomerUpdateWithoutOrdersDataInput;
};

export type CustomerUpsertWithoutReviewsInput = {
  create: CustomerCreateWithoutReviewsInput;
  update: CustomerUpdateWithoutReviewsDataInput;
};

export type CustomerUpsertWithWhereUniqueWithoutCompanyInput = {
  create: CustomerCreateWithoutCompanyInput;
  update: CustomerUpdateWithoutCompanyDataInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerUpsertWithWhereUniqueWithoutUserInput = {
  create: CustomerCreateWithoutUserInput;
  update: CustomerUpdateWithoutUserDataInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerWhereInput = {
  address?: Maybe<NullableStringFilter>;
  AND?: Maybe<Array<CustomerWhereInput>>;
  avatar?: Maybe<NullableStringFilter>;
  birthday?: Maybe<NullableDateTimeFilter>;
  city?: Maybe<NullableStringFilter>;
  company?: Maybe<CompanyWhereInput>;
  companyId?: Maybe<NullableIntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  firstName?: Maybe<StringFilter>;
  firstSeen?: Maybe<NullableDateTimeFilter>;
  hasNewsLetter?: Maybe<NullableBooleanFilter>;
  hasOrdered?: Maybe<NullableBooleanFilter>;
  id?: Maybe<IntFilter>;
  image?: Maybe<NullableStringFilter>;
  invoices?: Maybe<InvoiceFilter>;
  lastName?: Maybe<StringFilter>;
  lastSeen?: Maybe<NullableDateTimeFilter>;
  latestPurchase?: Maybe<NullableDateTimeFilter>;
  nbOrders?: Maybe<NullableIntFilter>;
  NOT?: Maybe<Array<CustomerWhereInput>>;
  OR?: Maybe<Array<CustomerWhereInput>>;
  orders?: Maybe<OrderFilter>;
  reviews?: Maybe<ReviewFilter>;
  totalOrder?: Maybe<IntFilter>;
  totalSpent?: Maybe<NullableFloatFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
  zipcode?: Maybe<NullableStringFilter>;
};

export type CustomerWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DeliveryDetail = {
  __typename?: 'DeliveryDetail';
  charge: Scalars['String'];
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  isFree: Scalars['Boolean'];
  minimumOrder: Scalars['Float'];
};

export type DeliveryDetailCreateInput = {
  charge: Scalars['String'];
  company?: Maybe<CompanyCreateOneWithoutDeliveryDetailInput>;
  companyId?: Maybe<Scalars['Int']>;
  isFree: Scalars['Boolean'];
  minimumOrder: Scalars['Float'];
};

export type DeliveryDetailCreateOneWithoutCompanyInput = {
  connect?: Maybe<DeliveryDetailWhereUniqueInput>;
  create?: Maybe<DeliveryDetailCreateWithoutCompanyInput>;
};

export type DeliveryDetailCreateWithoutCompanyInput = {
  charge: Scalars['String'];
  companyId?: Maybe<Scalars['Int']>;
  isFree: Scalars['Boolean'];
  minimumOrder: Scalars['Float'];
};

export type DeliveryDetailOrderByInput = {
  charge?: Maybe<OrderByArg>;
  companyId?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  isFree?: Maybe<OrderByArg>;
  minimumOrder?: Maybe<OrderByArg>;
};

export type DeliveryDetailUpdateInput = {
  charge?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyUpdateOneWithoutDeliveryDetailInput>;
  companyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isFree?: Maybe<Scalars['Boolean']>;
  minimumOrder?: Maybe<Scalars['Float']>;
};

export type DeliveryDetailUpdateManyMutationInput = {
  charge?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isFree?: Maybe<Scalars['Boolean']>;
  minimumOrder?: Maybe<Scalars['Float']>;
};

export type DeliveryDetailUpdateOneRequiredWithoutCompanyInput = {
  connect?: Maybe<DeliveryDetailWhereUniqueInput>;
  create?: Maybe<DeliveryDetailCreateWithoutCompanyInput>;
  update?: Maybe<DeliveryDetailUpdateWithoutCompanyDataInput>;
  upsert?: Maybe<DeliveryDetailUpsertWithoutCompanyInput>;
};

export type DeliveryDetailUpdateWithoutCompanyDataInput = {
  charge?: Maybe<Scalars['String']>;
  companyId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isFree?: Maybe<Scalars['Boolean']>;
  minimumOrder?: Maybe<Scalars['Float']>;
};

export type DeliveryDetailUpsertWithoutCompanyInput = {
  create: DeliveryDetailCreateWithoutCompanyInput;
  update: DeliveryDetailUpdateWithoutCompanyDataInput;
};

export type DeliveryDetailWhereInput = {
  AND?: Maybe<Array<DeliveryDetailWhereInput>>;
  charge?: Maybe<StringFilter>;
  company?: Maybe<CompanyWhereInput>;
  companyId?: Maybe<NullableIntFilter>;
  id?: Maybe<IntFilter>;
  isFree?: Maybe<BooleanFilter>;
  minimumOrder?: Maybe<FloatFilter>;
  NOT?: Maybe<Array<DeliveryDetailWhereInput>>;
  OR?: Maybe<Array<DeliveryDetailWhereInput>>;
};

export type DeliveryDetailWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Enum = {
  __typename?: 'Enum';
  fields: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type Field = {
  __typename?: 'Field';
  create: Scalars['Boolean'];
  editor: Scalars['Boolean'];
  filter: Scalars['Boolean'];
  id: Scalars['String'];
  isId: Scalars['Boolean'];
  kind: KindEnum;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  read: Scalars['Boolean'];
  relationField?: Maybe<Scalars['Boolean']>;
  required: Scalars['Boolean'];
  sort: Scalars['Boolean'];
  title: Scalars['String'];
  type: Scalars['String'];
  unique: Scalars['Boolean'];
  update: Scalars['Boolean'];
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<Scalars['Float']>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type Invoice = {
  __typename?: 'Invoice';
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  customer: Customer;
  customerId: Scalars['Int'];
  deliveryFees?: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  order: Order;
  orderId: Scalars['Int'];
  subtotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type InvoiceCreateInput = {
  company?: Maybe<CompanyCreateOneWithoutInvoicesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer: CustomerCreateOneWithoutInvoicesInput;
  deliveryFees?: Maybe<Scalars['Float']>;
  order: OrderCreateOneWithoutInvoiceInput;
  subtotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type InvoiceCreateManyWithoutCompanyInput = {
  connect?: Maybe<Array<InvoiceWhereUniqueInput>>;
  create?: Maybe<Array<InvoiceCreateWithoutCompanyInput>>;
};

export type InvoiceCreateManyWithoutCustomerInput = {
  connect?: Maybe<Array<InvoiceWhereUniqueInput>>;
  create?: Maybe<Array<InvoiceCreateWithoutCustomerInput>>;
};

export type InvoiceCreateManyWithoutOrderInput = {
  connect?: Maybe<Array<InvoiceWhereUniqueInput>>;
  create?: Maybe<Array<InvoiceCreateWithoutOrderInput>>;
};

export type InvoiceCreateWithoutCompanyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  customer: CustomerCreateOneWithoutInvoicesInput;
  deliveryFees?: Maybe<Scalars['Float']>;
  order: OrderCreateOneWithoutInvoiceInput;
  subtotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type InvoiceCreateWithoutCustomerInput = {
  company?: Maybe<CompanyCreateOneWithoutInvoicesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deliveryFees?: Maybe<Scalars['Float']>;
  order: OrderCreateOneWithoutInvoiceInput;
  subtotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type InvoiceCreateWithoutOrderInput = {
  company?: Maybe<CompanyCreateOneWithoutInvoicesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer: CustomerCreateOneWithoutInvoicesInput;
  deliveryFees?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type InvoiceFilter = {
  every?: Maybe<InvoiceWhereInput>;
  none?: Maybe<InvoiceWhereInput>;
  some?: Maybe<InvoiceWhereInput>;
};

export type InvoiceOrderByInput = {
  companyId?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  customerId?: Maybe<OrderByArg>;
  deliveryFees?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  orderId?: Maybe<OrderByArg>;
  subtotal?: Maybe<OrderByArg>;
  taxes?: Maybe<OrderByArg>;
  taxRate?: Maybe<OrderByArg>;
  total?: Maybe<OrderByArg>;
};

export type InvoiceScalarWhereInput = {
  AND?: Maybe<Array<InvoiceScalarWhereInput>>;
  companyId?: Maybe<NullableIntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  customerId?: Maybe<IntFilter>;
  deliveryFees?: Maybe<NullableFloatFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<InvoiceScalarWhereInput>>;
  OR?: Maybe<Array<InvoiceScalarWhereInput>>;
  orderId?: Maybe<IntFilter>;
  subtotal?: Maybe<NullableFloatFilter>;
  taxes?: Maybe<NullableFloatFilter>;
  taxRate?: Maybe<NullableFloatFilter>;
  total?: Maybe<NullableFloatFilter>;
};

export type InvoiceUpdateInput = {
  company?: Maybe<CompanyUpdateOneWithoutInvoicesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerUpdateOneRequiredWithoutInvoicesInput>;
  deliveryFees?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderUpdateOneRequiredWithoutInvoiceInput>;
  subtotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type InvoiceUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  deliveryFees?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  subtotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type InvoiceUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  deliveryFees?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  subtotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type InvoiceUpdateManyWithoutCompanyInput = {
  connect?: Maybe<Array<InvoiceWhereUniqueInput>>;
  create?: Maybe<Array<InvoiceCreateWithoutCompanyInput>>;
  delete?: Maybe<Array<InvoiceWhereUniqueInput>>;
  deleteMany?: Maybe<Array<InvoiceScalarWhereInput>>;
  disconnect?: Maybe<Array<InvoiceWhereUniqueInput>>;
  set?: Maybe<Array<InvoiceWhereUniqueInput>>;
  update?: Maybe<Array<InvoiceUpdateWithWhereUniqueWithoutCompanyInput>>;
  updateMany?: Maybe<Array<InvoiceUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<InvoiceUpsertWithWhereUniqueWithoutCompanyInput>>;
};

export type InvoiceUpdateManyWithoutCustomerInput = {
  connect?: Maybe<Array<InvoiceWhereUniqueInput>>;
  create?: Maybe<Array<InvoiceCreateWithoutCustomerInput>>;
  delete?: Maybe<Array<InvoiceWhereUniqueInput>>;
  deleteMany?: Maybe<Array<InvoiceScalarWhereInput>>;
  disconnect?: Maybe<Array<InvoiceWhereUniqueInput>>;
  set?: Maybe<Array<InvoiceWhereUniqueInput>>;
  update?: Maybe<Array<InvoiceUpdateWithWhereUniqueWithoutCustomerInput>>;
  updateMany?: Maybe<Array<InvoiceUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<InvoiceUpsertWithWhereUniqueWithoutCustomerInput>>;
};

export type InvoiceUpdateManyWithoutOrderInput = {
  connect?: Maybe<Array<InvoiceWhereUniqueInput>>;
  create?: Maybe<Array<InvoiceCreateWithoutOrderInput>>;
  delete?: Maybe<Array<InvoiceWhereUniqueInput>>;
  deleteMany?: Maybe<Array<InvoiceScalarWhereInput>>;
  disconnect?: Maybe<Array<InvoiceWhereUniqueInput>>;
  set?: Maybe<Array<InvoiceWhereUniqueInput>>;
  update?: Maybe<Array<InvoiceUpdateWithWhereUniqueWithoutOrderInput>>;
  updateMany?: Maybe<Array<InvoiceUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<InvoiceUpsertWithWhereUniqueWithoutOrderInput>>;
};

export type InvoiceUpdateManyWithWhereNestedInput = {
  data: InvoiceUpdateManyDataInput;
  where: InvoiceScalarWhereInput;
};

export type InvoiceUpdateWithoutCompanyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerUpdateOneRequiredWithoutInvoicesInput>;
  deliveryFees?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderUpdateOneRequiredWithoutInvoiceInput>;
  subtotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type InvoiceUpdateWithoutCustomerDataInput = {
  company?: Maybe<CompanyUpdateOneWithoutInvoicesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deliveryFees?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderUpdateOneRequiredWithoutInvoiceInput>;
  subtotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type InvoiceUpdateWithoutOrderDataInput = {
  company?: Maybe<CompanyUpdateOneWithoutInvoicesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerUpdateOneRequiredWithoutInvoicesInput>;
  deliveryFees?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  subtotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type InvoiceUpdateWithWhereUniqueWithoutCompanyInput = {
  data: InvoiceUpdateWithoutCompanyDataInput;
  where: InvoiceWhereUniqueInput;
};

export type InvoiceUpdateWithWhereUniqueWithoutCustomerInput = {
  data: InvoiceUpdateWithoutCustomerDataInput;
  where: InvoiceWhereUniqueInput;
};

export type InvoiceUpdateWithWhereUniqueWithoutOrderInput = {
  data: InvoiceUpdateWithoutOrderDataInput;
  where: InvoiceWhereUniqueInput;
};

export type InvoiceUpsertWithWhereUniqueWithoutCompanyInput = {
  create: InvoiceCreateWithoutCompanyInput;
  update: InvoiceUpdateWithoutCompanyDataInput;
  where: InvoiceWhereUniqueInput;
};

export type InvoiceUpsertWithWhereUniqueWithoutCustomerInput = {
  create: InvoiceCreateWithoutCustomerInput;
  update: InvoiceUpdateWithoutCustomerDataInput;
  where: InvoiceWhereUniqueInput;
};

export type InvoiceUpsertWithWhereUniqueWithoutOrderInput = {
  create: InvoiceCreateWithoutOrderInput;
  update: InvoiceUpdateWithoutOrderDataInput;
  where: InvoiceWhereUniqueInput;
};

export type InvoiceWhereInput = {
  AND?: Maybe<Array<InvoiceWhereInput>>;
  company?: Maybe<CompanyWhereInput>;
  companyId?: Maybe<NullableIntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  customer?: Maybe<CustomerWhereInput>;
  customerId?: Maybe<IntFilter>;
  deliveryFees?: Maybe<NullableFloatFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<InvoiceWhereInput>>;
  OR?: Maybe<Array<InvoiceWhereInput>>;
  order?: Maybe<OrderWhereInput>;
  orderId?: Maybe<IntFilter>;
  subtotal?: Maybe<NullableFloatFilter>;
  taxes?: Maybe<NullableFloatFilter>;
  taxRate?: Maybe<NullableFloatFilter>;
  total?: Maybe<NullableFloatFilter>;
};

export type InvoiceWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum KindEnum {
  Enum = 'enum',
  Object = 'object',
  Scalar = 'scalar'
}

export type Model = {
  __typename?: 'Model';
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  displayFields: Array<Scalars['String']>;
  fields: Array<Field>;
  id: Scalars['String'];
  idField: Scalars['String'];
  name: Scalars['String'];
  update: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addOrder: Order;
  addPaymentCard: User;
  applyCoupon: Coupon;
  charge: Payment;
  createOneAddress: Address;
  createOneCard: Card;
  createOneCategory: Category;
  createOneCompany: Company;
  createOneContact: Contact;
  createOneCountry: Country;
  createOneCoupon: Coupon;
  createOneCustomer: Customer;
  createOneDeliveryDetail: DeliveryDetail;
  createOneInvoice: Invoice;
  createOneOrder: Order;
  createOneOrderItem: OrderItem;
  createOnePlatform: Platform;
  createOneProduct: Product;
  createOneReview: Review;
  createOneStaff: Staff;
  createOneUser: User;
  deleteAddress: User;
  deleteContact: User;
  deleteManyAddress: BatchPayload;
  deleteManyCard: BatchPayload;
  deleteManyCategory: BatchPayload;
  deleteManyCompany: BatchPayload;
  deleteManyContact: BatchPayload;
  deleteManyCountry: BatchPayload;
  deleteManyCoupon: BatchPayload;
  deleteManyCustomer: BatchPayload;
  deleteManyDeliveryDetail: BatchPayload;
  deleteManyInvoice: BatchPayload;
  deleteManyOrder: BatchPayload;
  deleteManyOrderItem: BatchPayload;
  deleteManyPlatform: BatchPayload;
  deleteManyProduct: BatchPayload;
  deleteManyReview: BatchPayload;
  deleteManyStaff: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteOneAddress?: Maybe<Address>;
  deleteOneCard?: Maybe<Card>;
  deleteOneCategory?: Maybe<Category>;
  deleteOneCompany?: Maybe<Company>;
  deleteOneContact?: Maybe<Contact>;
  deleteOneCountry?: Maybe<Country>;
  deleteOneCoupon?: Maybe<Coupon>;
  deleteOneCustomer?: Maybe<Customer>;
  deleteOneDeliveryDetail?: Maybe<DeliveryDetail>;
  deleteOneInvoice?: Maybe<Invoice>;
  deleteOneOrder?: Maybe<Order>;
  deleteOneOrderItem?: Maybe<OrderItem>;
  deleteOnePlatform?: Maybe<Platform>;
  deleteOneProduct?: Maybe<Product>;
  deleteOneReview?: Maybe<Review>;
  deleteOneStaff?: Maybe<Staff>;
  deleteOneUser?: Maybe<User>;
  deletePaymentCard: User;
  login?: Maybe<AuthPayload>;
  logout: Scalars['Boolean'];
  selectCompany?: Maybe<AuthPayload>;
  selectPlatform?: Maybe<AuthPayload>;
  signup: AuthPayload;
  updateAddress: User;
  updateContact: User;
  updateField: Field;
  updateManyAddress: BatchPayload;
  updateManyCard: BatchPayload;
  updateManyCategory: BatchPayload;
  updateManyCompany: BatchPayload;
  updateManyContact: BatchPayload;
  updateManyCountry: BatchPayload;
  updateManyCoupon: BatchPayload;
  updateManyCustomer: BatchPayload;
  updateManyDeliveryDetail: BatchPayload;
  updateManyInvoice: BatchPayload;
  updateManyOrder: BatchPayload;
  updateManyOrderItem: BatchPayload;
  updateManyPlatform: BatchPayload;
  updateManyProduct: BatchPayload;
  updateManyReview: BatchPayload;
  updateManyStaff: BatchPayload;
  updateManyUser: BatchPayload;
  updateMe: User;
  updateModel: Model;
  updateOneAddress: Address;
  updateOneCard: Card;
  updateOneCategory: Category;
  updateOneCompany: Company;
  updateOneContact: Contact;
  updateOneCountry: Country;
  updateOneCoupon: Coupon;
  updateOneCustomer: Customer;
  updateOneDeliveryDetail: DeliveryDetail;
  updateOneInvoice: Invoice;
  updateOneOrder: Order;
  updateOneOrderItem: OrderItem;
  updateOnePlatform: Platform;
  updateOneProduct: Product;
  updateOneReview: Review;
  updateOneStaff: Staff;
  updateOneUser: User;
  upsertOneAddress: Address;
  upsertOneCard: Card;
  upsertOneCategory: Category;
  upsertOneCompany: Company;
  upsertOneContact: Contact;
  upsertOneCountry: Country;
  upsertOneCoupon: Coupon;
  upsertOneCustomer: Customer;
  upsertOneDeliveryDetail: DeliveryDetail;
  upsertOneInvoice: Invoice;
  upsertOneOrder: Order;
  upsertOneOrderItem: OrderItem;
  upsertOnePlatform: Platform;
  upsertOneProduct: Product;
  upsertOneReview: Review;
  upsertOneStaff: Staff;
  upsertOneUser: User;
};


export type MutationAddOrderArgs = {
  orderInput: Scalars['String'];
};


export type MutationAddPaymentCardArgs = {
  cardInput: Scalars['String'];
};


export type MutationApplyCouponArgs = {
  code: Scalars['String'];
};


export type MutationChargeArgs = {
  paymentInput: Scalars['String'];
};


export type MutationCreateOneAddressArgs = {
  data: AddressCreateInput;
};


export type MutationCreateOneCardArgs = {
  data: CardCreateInput;
};


export type MutationCreateOneCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateOneCompanyArgs = {
  data: CompanyCreateInput;
};


export type MutationCreateOneContactArgs = {
  data: ContactCreateInput;
};


export type MutationCreateOneCountryArgs = {
  data: CountryCreateInput;
};


export type MutationCreateOneCouponArgs = {
  data: CouponCreateInput;
};


export type MutationCreateOneCustomerArgs = {
  data: CustomerCreateInput;
};


export type MutationCreateOneDeliveryDetailArgs = {
  data: DeliveryDetailCreateInput;
};


export type MutationCreateOneInvoiceArgs = {
  data: InvoiceCreateInput;
};


export type MutationCreateOneOrderArgs = {
  data: OrderCreateInput;
};


export type MutationCreateOneOrderItemArgs = {
  data: OrderItemCreateInput;
};


export type MutationCreateOnePlatformArgs = {
  data: PlatformCreateInput;
};


export type MutationCreateOneProductArgs = {
  data: ProductCreateInput;
};


export type MutationCreateOneReviewArgs = {
  data: ReviewCreateInput;
};


export type MutationCreateOneStaffArgs = {
  data: StaffCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteAddressArgs = {
  addressId: Scalars['String'];
};


export type MutationDeleteContactArgs = {
  contactId: Scalars['String'];
};


export type MutationDeleteManyAddressArgs = {
  where?: Maybe<AddressWhereInput>;
};


export type MutationDeleteManyCardArgs = {
  where?: Maybe<CardWhereInput>;
};


export type MutationDeleteManyCategoryArgs = {
  where?: Maybe<CategoryWhereInput>;
};


export type MutationDeleteManyCompanyArgs = {
  where?: Maybe<CompanyWhereInput>;
};


export type MutationDeleteManyContactArgs = {
  where?: Maybe<ContactWhereInput>;
};


export type MutationDeleteManyCountryArgs = {
  where?: Maybe<CountryWhereInput>;
};


export type MutationDeleteManyCouponArgs = {
  where?: Maybe<CouponWhereInput>;
};


export type MutationDeleteManyCustomerArgs = {
  where?: Maybe<CustomerWhereInput>;
};


export type MutationDeleteManyDeliveryDetailArgs = {
  where?: Maybe<DeliveryDetailWhereInput>;
};


export type MutationDeleteManyInvoiceArgs = {
  where?: Maybe<InvoiceWhereInput>;
};


export type MutationDeleteManyOrderArgs = {
  where?: Maybe<OrderWhereInput>;
};


export type MutationDeleteManyOrderItemArgs = {
  where?: Maybe<OrderItemWhereInput>;
};


export type MutationDeleteManyPlatformArgs = {
  where?: Maybe<PlatformWhereInput>;
};


export type MutationDeleteManyProductArgs = {
  where?: Maybe<ProductWhereInput>;
};


export type MutationDeleteManyReviewArgs = {
  where?: Maybe<ReviewWhereInput>;
};


export type MutationDeleteManyStaffArgs = {
  where?: Maybe<StaffWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteOneAddressArgs = {
  where: AddressWhereUniqueInput;
};


export type MutationDeleteOneCardArgs = {
  where: CardWhereUniqueInput;
};


export type MutationDeleteOneCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteOneCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type MutationDeleteOneContactArgs = {
  where: ContactWhereUniqueInput;
};


export type MutationDeleteOneCountryArgs = {
  where: CountryWhereUniqueInput;
};


export type MutationDeleteOneCouponArgs = {
  where: CouponWhereUniqueInput;
};


export type MutationDeleteOneCustomerArgs = {
  where: CustomerWhereUniqueInput;
};


export type MutationDeleteOneDeliveryDetailArgs = {
  where: DeliveryDetailWhereUniqueInput;
};


export type MutationDeleteOneInvoiceArgs = {
  where: InvoiceWhereUniqueInput;
};


export type MutationDeleteOneOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type MutationDeleteOneOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};


export type MutationDeleteOnePlatformArgs = {
  where: PlatformWhereUniqueInput;
};


export type MutationDeleteOneProductArgs = {
  where: ProductWhereUniqueInput;
};


export type MutationDeleteOneReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type MutationDeleteOneStaffArgs = {
  where: StaffWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeletePaymentCardArgs = {
  cardId: Scalars['String'];
};


export type MutationLoginArgs = {
  idToken: Scalars['String'];
};


export type MutationSelectCompanyArgs = {
  companyId: Scalars['Int'];
};


export type MutationSelectPlatformArgs = {
  platformId: Scalars['Int'];
};


export type MutationSignupArgs = {
  idToken: Scalars['String'];
};


export type MutationUpdateAddressArgs = {
  addressInput: Scalars['String'];
};


export type MutationUpdateContactArgs = {
  contactInput: Scalars['String'];
};


export type MutationUpdateFieldArgs = {
  data?: Maybe<UpdateFieldInput>;
  id: Scalars['String'];
  modelId: Scalars['String'];
};


export type MutationUpdateManyAddressArgs = {
  data: AddressUpdateManyMutationInput;
  where?: Maybe<AddressWhereInput>;
};


export type MutationUpdateManyCardArgs = {
  data: CardUpdateManyMutationInput;
  where?: Maybe<CardWhereInput>;
};


export type MutationUpdateManyCategoryArgs = {
  data: CategoryUpdateManyMutationInput;
  where?: Maybe<CategoryWhereInput>;
};


export type MutationUpdateManyCompanyArgs = {
  data: CompanyUpdateManyMutationInput;
  where?: Maybe<CompanyWhereInput>;
};


export type MutationUpdateManyContactArgs = {
  data: ContactUpdateManyMutationInput;
  where?: Maybe<ContactWhereInput>;
};


export type MutationUpdateManyCountryArgs = {
  data: CountryUpdateManyMutationInput;
  where?: Maybe<CountryWhereInput>;
};


export type MutationUpdateManyCouponArgs = {
  data: CouponUpdateManyMutationInput;
  where?: Maybe<CouponWhereInput>;
};


export type MutationUpdateManyCustomerArgs = {
  data: CustomerUpdateManyMutationInput;
  where?: Maybe<CustomerWhereInput>;
};


export type MutationUpdateManyDeliveryDetailArgs = {
  data: DeliveryDetailUpdateManyMutationInput;
  where?: Maybe<DeliveryDetailWhereInput>;
};


export type MutationUpdateManyInvoiceArgs = {
  data: InvoiceUpdateManyMutationInput;
  where?: Maybe<InvoiceWhereInput>;
};


export type MutationUpdateManyOrderArgs = {
  data: OrderUpdateManyMutationInput;
  where?: Maybe<OrderWhereInput>;
};


export type MutationUpdateManyOrderItemArgs = {
  data: OrderItemUpdateManyMutationInput;
  where?: Maybe<OrderItemWhereInput>;
};


export type MutationUpdateManyPlatformArgs = {
  data: PlatformUpdateManyMutationInput;
  where?: Maybe<PlatformWhereInput>;
};


export type MutationUpdateManyProductArgs = {
  data: ProductUpdateManyMutationInput;
  where?: Maybe<ProductWhereInput>;
};


export type MutationUpdateManyReviewArgs = {
  data: ReviewUpdateManyMutationInput;
  where?: Maybe<ReviewWhereInput>;
};


export type MutationUpdateManyStaffArgs = {
  data: StaffUpdateManyMutationInput;
  where?: Maybe<StaffWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateMeArgs = {
  meInput: Scalars['String'];
};


export type MutationUpdateModelArgs = {
  data?: Maybe<UpdateModelInput>;
  id: Scalars['String'];
};


export type MutationUpdateOneAddressArgs = {
  data: AddressUpdateInput;
  where: AddressWhereUniqueInput;
};


export type MutationUpdateOneCardArgs = {
  data: CardUpdateInput;
  where: CardWhereUniqueInput;
};


export type MutationUpdateOneCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateOneCompanyArgs = {
  data: CompanyUpdateInput;
  where: CompanyWhereUniqueInput;
};


export type MutationUpdateOneContactArgs = {
  data: ContactUpdateInput;
  where: ContactWhereUniqueInput;
};


export type MutationUpdateOneCountryArgs = {
  data: CountryUpdateInput;
  where: CountryWhereUniqueInput;
};


export type MutationUpdateOneCouponArgs = {
  data: CouponUpdateInput;
  where: CouponWhereUniqueInput;
};


export type MutationUpdateOneCustomerArgs = {
  data: CustomerUpdateInput;
  where: CustomerWhereUniqueInput;
};


export type MutationUpdateOneDeliveryDetailArgs = {
  data: DeliveryDetailUpdateInput;
  where: DeliveryDetailWhereUniqueInput;
};


export type MutationUpdateOneInvoiceArgs = {
  data: InvoiceUpdateInput;
  where: InvoiceWhereUniqueInput;
};


export type MutationUpdateOneOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpdateOneOrderItemArgs = {
  data: OrderItemUpdateInput;
  where: OrderItemWhereUniqueInput;
};


export type MutationUpdateOnePlatformArgs = {
  data: PlatformUpdateInput;
  where: PlatformWhereUniqueInput;
};


export type MutationUpdateOneProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpdateOneReviewArgs = {
  data: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};


export type MutationUpdateOneStaffArgs = {
  data: StaffUpdateInput;
  where: StaffWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneAddressArgs = {
  create: AddressCreateInput;
  update: AddressUpdateInput;
  where: AddressWhereUniqueInput;
};


export type MutationUpsertOneCardArgs = {
  create: CardCreateInput;
  update: CardUpdateInput;
  where: CardWhereUniqueInput;
};


export type MutationUpsertOneCategoryArgs = {
  create: CategoryCreateInput;
  update: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertOneCompanyArgs = {
  create: CompanyCreateInput;
  update: CompanyUpdateInput;
  where: CompanyWhereUniqueInput;
};


export type MutationUpsertOneContactArgs = {
  create: ContactCreateInput;
  update: ContactUpdateInput;
  where: ContactWhereUniqueInput;
};


export type MutationUpsertOneCountryArgs = {
  create: CountryCreateInput;
  update: CountryUpdateInput;
  where: CountryWhereUniqueInput;
};


export type MutationUpsertOneCouponArgs = {
  create: CouponCreateInput;
  update: CouponUpdateInput;
  where: CouponWhereUniqueInput;
};


export type MutationUpsertOneCustomerArgs = {
  create: CustomerCreateInput;
  update: CustomerUpdateInput;
  where: CustomerWhereUniqueInput;
};


export type MutationUpsertOneDeliveryDetailArgs = {
  create: DeliveryDetailCreateInput;
  update: DeliveryDetailUpdateInput;
  where: DeliveryDetailWhereUniqueInput;
};


export type MutationUpsertOneInvoiceArgs = {
  create: InvoiceCreateInput;
  update: InvoiceUpdateInput;
  where: InvoiceWhereUniqueInput;
};


export type MutationUpsertOneOrderArgs = {
  create: OrderCreateInput;
  update: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpsertOneOrderItemArgs = {
  create: OrderItemCreateInput;
  update: OrderItemUpdateInput;
  where: OrderItemWhereUniqueInput;
};


export type MutationUpsertOnePlatformArgs = {
  create: PlatformCreateInput;
  update: PlatformUpdateInput;
  where: PlatformWhereUniqueInput;
};


export type MutationUpsertOneProductArgs = {
  create: ProductCreateInput;
  update: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};


export type MutationUpsertOneReviewArgs = {
  create: ReviewCreateInput;
  update: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};


export type MutationUpsertOneStaffArgs = {
  create: StaffCreateInput;
  update: StaffUpdateInput;
  where: StaffWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NullableBooleanFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<Scalars['Boolean']>;
};

export type NullableDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NullableFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<Scalars['Float']>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NullableIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NullableStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['Int']>;
  contact?: Maybe<Contact>;
  contactId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['Int']>;
  deliveryAddressId: Scalars['Int'];
  deliveryAdress: Address;
  deliveryFees: Scalars['Float'];
  deliveryTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  invoice: Array<Invoice>;
  orderItems: Array<OrderItem>;
  paymentMethod: Scalars['String'];
  reference?: Maybe<Scalars['String']>;
  returned: Scalars['Boolean'];
  reviews: Array<Review>;
  status?: Maybe<Scalars['String']>;
  subtotal: Scalars['Float'];
  taxes: Scalars['Float'];
  taxRate: Scalars['Float'];
  total: Scalars['Float'];
};


export type OrderInvoiceArgs = {
  cursor?: Maybe<InvoiceWhereUniqueInput>;
  orderBy?: Maybe<InvoiceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<InvoiceWhereInput>;
};


export type OrderOrderItemsArgs = {
  cursor?: Maybe<OrderItemWhereUniqueInput>;
  orderBy?: Maybe<OrderItemOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<OrderItemWhereInput>;
};


export type OrderReviewsArgs = {
  cursor?: Maybe<ReviewWhereUniqueInput>;
  orderBy?: Maybe<ReviewOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ReviewWhereInput>;
};

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc'
}

export type OrderCreateInput = {
  company?: Maybe<CompanyCreateOneWithoutOrdersInput>;
  contact?: Maybe<ContactCreateOneWithoutOrdersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerCreateOneWithoutOrdersInput>;
  deliveryAdress: AddressCreateOneWithoutOrdersInput;
  deliveryFees: Scalars['Float'];
  deliveryTime?: Maybe<Scalars['DateTime']>;
  invoice?: Maybe<InvoiceCreateManyWithoutOrderInput>;
  orderItems?: Maybe<OrderItemCreateManyWithoutOrderInput>;
  paymentMethod: Scalars['String'];
  reference?: Maybe<Scalars['String']>;
  returned?: Maybe<Scalars['Boolean']>;
  reviews?: Maybe<ReviewCreateManyWithoutOrderInput>;
  status?: Maybe<Scalars['String']>;
  subtotal: Scalars['Float'];
  taxes: Scalars['Float'];
  taxRate: Scalars['Float'];
  total: Scalars['Float'];
};

export type OrderCreateManyWithoutCompanyInput = {
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  create?: Maybe<Array<OrderCreateWithoutCompanyInput>>;
};

export type OrderCreateManyWithoutContactInput = {
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  create?: Maybe<Array<OrderCreateWithoutContactInput>>;
};

export type OrderCreateManyWithoutCustomerInput = {
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  create?: Maybe<Array<OrderCreateWithoutCustomerInput>>;
};

export type OrderCreateManyWithoutDeliveryAdressInput = {
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  create?: Maybe<Array<OrderCreateWithoutDeliveryAdressInput>>;
};

export type OrderCreateOneWithoutInvoiceInput = {
  connect?: Maybe<OrderWhereUniqueInput>;
  create?: Maybe<OrderCreateWithoutInvoiceInput>;
};

export type OrderCreateOneWithoutOrderItemsInput = {
  connect?: Maybe<OrderWhereUniqueInput>;
  create?: Maybe<OrderCreateWithoutOrderItemsInput>;
};

export type OrderCreateOneWithoutReviewsInput = {
  connect?: Maybe<OrderWhereUniqueInput>;
  create?: Maybe<OrderCreateWithoutReviewsInput>;
};

export type OrderCreateWithoutCompanyInput = {
  contact?: Maybe<ContactCreateOneWithoutOrdersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerCreateOneWithoutOrdersInput>;
  deliveryAdress: AddressCreateOneWithoutOrdersInput;
  deliveryFees: Scalars['Float'];
  deliveryTime?: Maybe<Scalars['DateTime']>;
  invoice?: Maybe<InvoiceCreateManyWithoutOrderInput>;
  orderItems?: Maybe<OrderItemCreateManyWithoutOrderInput>;
  paymentMethod: Scalars['String'];
  reference?: Maybe<Scalars['String']>;
  returned?: Maybe<Scalars['Boolean']>;
  reviews?: Maybe<ReviewCreateManyWithoutOrderInput>;
  status?: Maybe<Scalars['String']>;
  subtotal: Scalars['Float'];
  taxes: Scalars['Float'];
  taxRate: Scalars['Float'];
  total: Scalars['Float'];
};

export type OrderCreateWithoutContactInput = {
  company?: Maybe<CompanyCreateOneWithoutOrdersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerCreateOneWithoutOrdersInput>;
  deliveryAdress: AddressCreateOneWithoutOrdersInput;
  deliveryFees: Scalars['Float'];
  deliveryTime?: Maybe<Scalars['DateTime']>;
  invoice?: Maybe<InvoiceCreateManyWithoutOrderInput>;
  orderItems?: Maybe<OrderItemCreateManyWithoutOrderInput>;
  paymentMethod: Scalars['String'];
  reference?: Maybe<Scalars['String']>;
  returned?: Maybe<Scalars['Boolean']>;
  reviews?: Maybe<ReviewCreateManyWithoutOrderInput>;
  status?: Maybe<Scalars['String']>;
  subtotal: Scalars['Float'];
  taxes: Scalars['Float'];
  taxRate: Scalars['Float'];
  total: Scalars['Float'];
};

export type OrderCreateWithoutCustomerInput = {
  company?: Maybe<CompanyCreateOneWithoutOrdersInput>;
  contact?: Maybe<ContactCreateOneWithoutOrdersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deliveryAdress: AddressCreateOneWithoutOrdersInput;
  deliveryFees: Scalars['Float'];
  deliveryTime?: Maybe<Scalars['DateTime']>;
  invoice?: Maybe<InvoiceCreateManyWithoutOrderInput>;
  orderItems?: Maybe<OrderItemCreateManyWithoutOrderInput>;
  paymentMethod: Scalars['String'];
  reference?: Maybe<Scalars['String']>;
  returned?: Maybe<Scalars['Boolean']>;
  reviews?: Maybe<ReviewCreateManyWithoutOrderInput>;
  status?: Maybe<Scalars['String']>;
  subtotal: Scalars['Float'];
  taxes: Scalars['Float'];
  taxRate: Scalars['Float'];
  total: Scalars['Float'];
};

export type OrderCreateWithoutDeliveryAdressInput = {
  company?: Maybe<CompanyCreateOneWithoutOrdersInput>;
  contact?: Maybe<ContactCreateOneWithoutOrdersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerCreateOneWithoutOrdersInput>;
  deliveryFees: Scalars['Float'];
  deliveryTime?: Maybe<Scalars['DateTime']>;
  invoice?: Maybe<InvoiceCreateManyWithoutOrderInput>;
  orderItems?: Maybe<OrderItemCreateManyWithoutOrderInput>;
  paymentMethod: Scalars['String'];
  reference?: Maybe<Scalars['String']>;
  returned?: Maybe<Scalars['Boolean']>;
  reviews?: Maybe<ReviewCreateManyWithoutOrderInput>;
  status?: Maybe<Scalars['String']>;
  subtotal: Scalars['Float'];
  taxes: Scalars['Float'];
  taxRate: Scalars['Float'];
  total: Scalars['Float'];
};

export type OrderCreateWithoutInvoiceInput = {
  company?: Maybe<CompanyCreateOneWithoutOrdersInput>;
  contact?: Maybe<ContactCreateOneWithoutOrdersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerCreateOneWithoutOrdersInput>;
  deliveryAdress: AddressCreateOneWithoutOrdersInput;
  deliveryFees: Scalars['Float'];
  deliveryTime?: Maybe<Scalars['DateTime']>;
  orderItems?: Maybe<OrderItemCreateManyWithoutOrderInput>;
  paymentMethod: Scalars['String'];
  reference?: Maybe<Scalars['String']>;
  returned?: Maybe<Scalars['Boolean']>;
  reviews?: Maybe<ReviewCreateManyWithoutOrderInput>;
  status?: Maybe<Scalars['String']>;
  subtotal: Scalars['Float'];
  taxes: Scalars['Float'];
  taxRate: Scalars['Float'];
  total: Scalars['Float'];
};

export type OrderCreateWithoutOrderItemsInput = {
  company?: Maybe<CompanyCreateOneWithoutOrdersInput>;
  contact?: Maybe<ContactCreateOneWithoutOrdersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerCreateOneWithoutOrdersInput>;
  deliveryAdress: AddressCreateOneWithoutOrdersInput;
  deliveryFees: Scalars['Float'];
  deliveryTime?: Maybe<Scalars['DateTime']>;
  invoice?: Maybe<InvoiceCreateManyWithoutOrderInput>;
  paymentMethod: Scalars['String'];
  reference?: Maybe<Scalars['String']>;
  returned?: Maybe<Scalars['Boolean']>;
  reviews?: Maybe<ReviewCreateManyWithoutOrderInput>;
  status?: Maybe<Scalars['String']>;
  subtotal: Scalars['Float'];
  taxes: Scalars['Float'];
  taxRate: Scalars['Float'];
  total: Scalars['Float'];
};

export type OrderCreateWithoutReviewsInput = {
  company?: Maybe<CompanyCreateOneWithoutOrdersInput>;
  contact?: Maybe<ContactCreateOneWithoutOrdersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerCreateOneWithoutOrdersInput>;
  deliveryAdress: AddressCreateOneWithoutOrdersInput;
  deliveryFees: Scalars['Float'];
  deliveryTime?: Maybe<Scalars['DateTime']>;
  invoice?: Maybe<InvoiceCreateManyWithoutOrderInput>;
  orderItems?: Maybe<OrderItemCreateManyWithoutOrderInput>;
  paymentMethod: Scalars['String'];
  reference?: Maybe<Scalars['String']>;
  returned?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  subtotal: Scalars['Float'];
  taxes: Scalars['Float'];
  taxRate: Scalars['Float'];
  total: Scalars['Float'];
};

export type OrderFilter = {
  every?: Maybe<OrderWhereInput>;
  none?: Maybe<OrderWhereInput>;
  some?: Maybe<OrderWhereInput>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  order: Order;
  orderId: Scalars['Int'];
  price: Scalars['Float'];
  product: Product;
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
  weight?: Maybe<Scalars['String']>;
};

export type OrderItemCreateInput = {
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  order: OrderCreateOneWithoutOrderItemsInput;
  price: Scalars['Float'];
  product: ProductCreateOneWithoutOrderItemsInput;
  quantity: Scalars['Int'];
  weight?: Maybe<Scalars['String']>;
};

export type OrderItemCreateManyWithoutOrderInput = {
  connect?: Maybe<Array<OrderItemWhereUniqueInput>>;
  create?: Maybe<Array<OrderItemCreateWithoutOrderInput>>;
};

export type OrderItemCreateManyWithoutProductInput = {
  connect?: Maybe<Array<OrderItemWhereUniqueInput>>;
  create?: Maybe<Array<OrderItemCreateWithoutProductInput>>;
};

export type OrderItemCreateWithoutOrderInput = {
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  product: ProductCreateOneWithoutOrderItemsInput;
  quantity: Scalars['Int'];
  weight?: Maybe<Scalars['String']>;
};

export type OrderItemCreateWithoutProductInput = {
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  order: OrderCreateOneWithoutOrderItemsInput;
  price: Scalars['Float'];
  quantity: Scalars['Int'];
  weight?: Maybe<Scalars['String']>;
};

export type OrderItemFilter = {
  every?: Maybe<OrderItemWhereInput>;
  none?: Maybe<OrderItemWhereInput>;
  some?: Maybe<OrderItemWhereInput>;
};

export type OrderItemOrderByInput = {
  id?: Maybe<OrderByArg>;
  image?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  orderId?: Maybe<OrderByArg>;
  price?: Maybe<OrderByArg>;
  productId?: Maybe<OrderByArg>;
  quantity?: Maybe<OrderByArg>;
  weight?: Maybe<OrderByArg>;
};

export type OrderItemScalarWhereInput = {
  AND?: Maybe<Array<OrderItemScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  image?: Maybe<NullableStringFilter>;
  name?: Maybe<NullableStringFilter>;
  NOT?: Maybe<Array<OrderItemScalarWhereInput>>;
  OR?: Maybe<Array<OrderItemScalarWhereInput>>;
  orderId?: Maybe<IntFilter>;
  price?: Maybe<FloatFilter>;
  productId?: Maybe<IntFilter>;
  quantity?: Maybe<IntFilter>;
  weight?: Maybe<NullableStringFilter>;
};

export type OrderItemUpdateInput = {
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<OrderUpdateOneRequiredWithoutOrderItemsInput>;
  price?: Maybe<Scalars['Float']>;
  product?: Maybe<ProductUpdateOneRequiredWithoutOrderItemsInput>;
  quantity?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['String']>;
};

export type OrderItemUpdateManyDataInput = {
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['String']>;
};

export type OrderItemUpdateManyMutationInput = {
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['String']>;
};

export type OrderItemUpdateManyWithoutOrderInput = {
  connect?: Maybe<Array<OrderItemWhereUniqueInput>>;
  create?: Maybe<Array<OrderItemCreateWithoutOrderInput>>;
  delete?: Maybe<Array<OrderItemWhereUniqueInput>>;
  deleteMany?: Maybe<Array<OrderItemScalarWhereInput>>;
  disconnect?: Maybe<Array<OrderItemWhereUniqueInput>>;
  set?: Maybe<Array<OrderItemWhereUniqueInput>>;
  update?: Maybe<Array<OrderItemUpdateWithWhereUniqueWithoutOrderInput>>;
  updateMany?: Maybe<Array<OrderItemUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<OrderItemUpsertWithWhereUniqueWithoutOrderInput>>;
};

export type OrderItemUpdateManyWithoutProductInput = {
  connect?: Maybe<Array<OrderItemWhereUniqueInput>>;
  create?: Maybe<Array<OrderItemCreateWithoutProductInput>>;
  delete?: Maybe<Array<OrderItemWhereUniqueInput>>;
  deleteMany?: Maybe<Array<OrderItemScalarWhereInput>>;
  disconnect?: Maybe<Array<OrderItemWhereUniqueInput>>;
  set?: Maybe<Array<OrderItemWhereUniqueInput>>;
  update?: Maybe<Array<OrderItemUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<OrderItemUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<OrderItemUpsertWithWhereUniqueWithoutProductInput>>;
};

export type OrderItemUpdateManyWithWhereNestedInput = {
  data: OrderItemUpdateManyDataInput;
  where: OrderItemScalarWhereInput;
};

export type OrderItemUpdateWithoutOrderDataInput = {
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  product?: Maybe<ProductUpdateOneRequiredWithoutOrderItemsInput>;
  quantity?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['String']>;
};

export type OrderItemUpdateWithoutProductDataInput = {
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<OrderUpdateOneRequiredWithoutOrderItemsInput>;
  price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['String']>;
};

export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
  data: OrderItemUpdateWithoutOrderDataInput;
  where: OrderItemWhereUniqueInput;
};

export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
  data: OrderItemUpdateWithoutProductDataInput;
  where: OrderItemWhereUniqueInput;
};

export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
  create: OrderItemCreateWithoutOrderInput;
  update: OrderItemUpdateWithoutOrderDataInput;
  where: OrderItemWhereUniqueInput;
};

export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
  create: OrderItemCreateWithoutProductInput;
  update: OrderItemUpdateWithoutProductDataInput;
  where: OrderItemWhereUniqueInput;
};

export type OrderItemWhereInput = {
  AND?: Maybe<Array<OrderItemWhereInput>>;
  id?: Maybe<IntFilter>;
  image?: Maybe<NullableStringFilter>;
  name?: Maybe<NullableStringFilter>;
  NOT?: Maybe<Array<OrderItemWhereInput>>;
  OR?: Maybe<Array<OrderItemWhereInput>>;
  order?: Maybe<OrderWhereInput>;
  orderId?: Maybe<IntFilter>;
  price?: Maybe<FloatFilter>;
  product?: Maybe<ProductWhereInput>;
  productId?: Maybe<IntFilter>;
  quantity?: Maybe<IntFilter>;
  weight?: Maybe<NullableStringFilter>;
};

export type OrderItemWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type OrderOrderByInput = {
  companyId?: Maybe<OrderByArg>;
  contactId?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  customerId?: Maybe<OrderByArg>;
  deliveryAddressId?: Maybe<OrderByArg>;
  deliveryFees?: Maybe<OrderByArg>;
  deliveryTime?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  paymentMethod?: Maybe<OrderByArg>;
  reference?: Maybe<OrderByArg>;
  returned?: Maybe<OrderByArg>;
  status?: Maybe<OrderByArg>;
  subtotal?: Maybe<OrderByArg>;
  taxes?: Maybe<OrderByArg>;
  taxRate?: Maybe<OrderByArg>;
  total?: Maybe<OrderByArg>;
};

export type OrderScalarWhereInput = {
  AND?: Maybe<Array<OrderScalarWhereInput>>;
  companyId?: Maybe<NullableIntFilter>;
  contactId?: Maybe<NullableIntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  customerId?: Maybe<NullableIntFilter>;
  deliveryAddressId?: Maybe<IntFilter>;
  deliveryFees?: Maybe<FloatFilter>;
  deliveryTime?: Maybe<NullableDateTimeFilter>;
  id?: Maybe<IntFilter>;
  invoice?: Maybe<InvoiceFilter>;
  NOT?: Maybe<Array<OrderScalarWhereInput>>;
  OR?: Maybe<Array<OrderScalarWhereInput>>;
  orderItems?: Maybe<OrderItemFilter>;
  paymentMethod?: Maybe<StringFilter>;
  reference?: Maybe<NullableStringFilter>;
  returned?: Maybe<BooleanFilter>;
  reviews?: Maybe<ReviewFilter>;
  status?: Maybe<NullableStringFilter>;
  subtotal?: Maybe<FloatFilter>;
  taxes?: Maybe<FloatFilter>;
  taxRate?: Maybe<FloatFilter>;
  total?: Maybe<FloatFilter>;
};

export type OrderUpdateInput = {
  company?: Maybe<CompanyUpdateOneWithoutOrdersInput>;
  contact?: Maybe<ContactUpdateOneWithoutOrdersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerUpdateOneWithoutOrdersInput>;
  deliveryAdress?: Maybe<AddressUpdateOneRequiredWithoutOrdersInput>;
  deliveryFees?: Maybe<Scalars['Float']>;
  deliveryTime?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  invoice?: Maybe<InvoiceUpdateManyWithoutOrderInput>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutOrderInput>;
  paymentMethod?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  returned?: Maybe<Scalars['Boolean']>;
  reviews?: Maybe<ReviewUpdateManyWithoutOrderInput>;
  status?: Maybe<Scalars['String']>;
  subtotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type OrderUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  deliveryFees?: Maybe<Scalars['Float']>;
  deliveryTime?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  paymentMethod?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  returned?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  subtotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type OrderUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  deliveryFees?: Maybe<Scalars['Float']>;
  deliveryTime?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  paymentMethod?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  returned?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  subtotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type OrderUpdateManyWithoutCompanyInput = {
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  create?: Maybe<Array<OrderCreateWithoutCompanyInput>>;
  delete?: Maybe<Array<OrderWhereUniqueInput>>;
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>;
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>;
  set?: Maybe<Array<OrderWhereUniqueInput>>;
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutCompanyInput>>;
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutCompanyInput>>;
};

export type OrderUpdateManyWithoutContactInput = {
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  create?: Maybe<Array<OrderCreateWithoutContactInput>>;
  delete?: Maybe<Array<OrderWhereUniqueInput>>;
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>;
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>;
  set?: Maybe<Array<OrderWhereUniqueInput>>;
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutContactInput>>;
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutContactInput>>;
};

export type OrderUpdateManyWithoutCustomerInput = {
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  create?: Maybe<Array<OrderCreateWithoutCustomerInput>>;
  delete?: Maybe<Array<OrderWhereUniqueInput>>;
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>;
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>;
  set?: Maybe<Array<OrderWhereUniqueInput>>;
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutCustomerInput>>;
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutCustomerInput>>;
};

export type OrderUpdateManyWithoutDeliveryAdressInput = {
  connect?: Maybe<Array<OrderWhereUniqueInput>>;
  create?: Maybe<Array<OrderCreateWithoutDeliveryAdressInput>>;
  delete?: Maybe<Array<OrderWhereUniqueInput>>;
  deleteMany?: Maybe<Array<OrderScalarWhereInput>>;
  disconnect?: Maybe<Array<OrderWhereUniqueInput>>;
  set?: Maybe<Array<OrderWhereUniqueInput>>;
  update?: Maybe<Array<OrderUpdateWithWhereUniqueWithoutDeliveryAdressInput>>;
  updateMany?: Maybe<Array<OrderUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<OrderUpsertWithWhereUniqueWithoutDeliveryAdressInput>>;
};

export type OrderUpdateManyWithWhereNestedInput = {
  data: OrderUpdateManyDataInput;
  where: OrderScalarWhereInput;
};

export type OrderUpdateOneRequiredWithoutInvoiceInput = {
  connect?: Maybe<OrderWhereUniqueInput>;
  create?: Maybe<OrderCreateWithoutInvoiceInput>;
  update?: Maybe<OrderUpdateWithoutInvoiceDataInput>;
  upsert?: Maybe<OrderUpsertWithoutInvoiceInput>;
};

export type OrderUpdateOneRequiredWithoutOrderItemsInput = {
  connect?: Maybe<OrderWhereUniqueInput>;
  create?: Maybe<OrderCreateWithoutOrderItemsInput>;
  update?: Maybe<OrderUpdateWithoutOrderItemsDataInput>;
  upsert?: Maybe<OrderUpsertWithoutOrderItemsInput>;
};

export type OrderUpdateOneWithoutReviewsInput = {
  connect?: Maybe<OrderWhereUniqueInput>;
  create?: Maybe<OrderCreateWithoutReviewsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<OrderUpdateWithoutReviewsDataInput>;
  upsert?: Maybe<OrderUpsertWithoutReviewsInput>;
};

export type OrderUpdateWithoutCompanyDataInput = {
  contact?: Maybe<ContactUpdateOneWithoutOrdersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerUpdateOneWithoutOrdersInput>;
  deliveryAdress?: Maybe<AddressUpdateOneRequiredWithoutOrdersInput>;
  deliveryFees?: Maybe<Scalars['Float']>;
  deliveryTime?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  invoice?: Maybe<InvoiceUpdateManyWithoutOrderInput>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutOrderInput>;
  paymentMethod?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  returned?: Maybe<Scalars['Boolean']>;
  reviews?: Maybe<ReviewUpdateManyWithoutOrderInput>;
  status?: Maybe<Scalars['String']>;
  subtotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type OrderUpdateWithoutContactDataInput = {
  company?: Maybe<CompanyUpdateOneWithoutOrdersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerUpdateOneWithoutOrdersInput>;
  deliveryAdress?: Maybe<AddressUpdateOneRequiredWithoutOrdersInput>;
  deliveryFees?: Maybe<Scalars['Float']>;
  deliveryTime?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  invoice?: Maybe<InvoiceUpdateManyWithoutOrderInput>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutOrderInput>;
  paymentMethod?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  returned?: Maybe<Scalars['Boolean']>;
  reviews?: Maybe<ReviewUpdateManyWithoutOrderInput>;
  status?: Maybe<Scalars['String']>;
  subtotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type OrderUpdateWithoutCustomerDataInput = {
  company?: Maybe<CompanyUpdateOneWithoutOrdersInput>;
  contact?: Maybe<ContactUpdateOneWithoutOrdersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deliveryAdress?: Maybe<AddressUpdateOneRequiredWithoutOrdersInput>;
  deliveryFees?: Maybe<Scalars['Float']>;
  deliveryTime?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  invoice?: Maybe<InvoiceUpdateManyWithoutOrderInput>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutOrderInput>;
  paymentMethod?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  returned?: Maybe<Scalars['Boolean']>;
  reviews?: Maybe<ReviewUpdateManyWithoutOrderInput>;
  status?: Maybe<Scalars['String']>;
  subtotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type OrderUpdateWithoutDeliveryAdressDataInput = {
  company?: Maybe<CompanyUpdateOneWithoutOrdersInput>;
  contact?: Maybe<ContactUpdateOneWithoutOrdersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerUpdateOneWithoutOrdersInput>;
  deliveryFees?: Maybe<Scalars['Float']>;
  deliveryTime?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  invoice?: Maybe<InvoiceUpdateManyWithoutOrderInput>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutOrderInput>;
  paymentMethod?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  returned?: Maybe<Scalars['Boolean']>;
  reviews?: Maybe<ReviewUpdateManyWithoutOrderInput>;
  status?: Maybe<Scalars['String']>;
  subtotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type OrderUpdateWithoutInvoiceDataInput = {
  company?: Maybe<CompanyUpdateOneWithoutOrdersInput>;
  contact?: Maybe<ContactUpdateOneWithoutOrdersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerUpdateOneWithoutOrdersInput>;
  deliveryAdress?: Maybe<AddressUpdateOneRequiredWithoutOrdersInput>;
  deliveryFees?: Maybe<Scalars['Float']>;
  deliveryTime?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutOrderInput>;
  paymentMethod?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  returned?: Maybe<Scalars['Boolean']>;
  reviews?: Maybe<ReviewUpdateManyWithoutOrderInput>;
  status?: Maybe<Scalars['String']>;
  subtotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type OrderUpdateWithoutOrderItemsDataInput = {
  company?: Maybe<CompanyUpdateOneWithoutOrdersInput>;
  contact?: Maybe<ContactUpdateOneWithoutOrdersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerUpdateOneWithoutOrdersInput>;
  deliveryAdress?: Maybe<AddressUpdateOneRequiredWithoutOrdersInput>;
  deliveryFees?: Maybe<Scalars['Float']>;
  deliveryTime?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  invoice?: Maybe<InvoiceUpdateManyWithoutOrderInput>;
  paymentMethod?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  returned?: Maybe<Scalars['Boolean']>;
  reviews?: Maybe<ReviewUpdateManyWithoutOrderInput>;
  status?: Maybe<Scalars['String']>;
  subtotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type OrderUpdateWithoutReviewsDataInput = {
  company?: Maybe<CompanyUpdateOneWithoutOrdersInput>;
  contact?: Maybe<ContactUpdateOneWithoutOrdersInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerUpdateOneWithoutOrdersInput>;
  deliveryAdress?: Maybe<AddressUpdateOneRequiredWithoutOrdersInput>;
  deliveryFees?: Maybe<Scalars['Float']>;
  deliveryTime?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  invoice?: Maybe<InvoiceUpdateManyWithoutOrderInput>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutOrderInput>;
  paymentMethod?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  returned?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  subtotal?: Maybe<Scalars['Float']>;
  taxes?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type OrderUpdateWithWhereUniqueWithoutCompanyInput = {
  data: OrderUpdateWithoutCompanyDataInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpdateWithWhereUniqueWithoutContactInput = {
  data: OrderUpdateWithoutContactDataInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
  data: OrderUpdateWithoutCustomerDataInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpdateWithWhereUniqueWithoutDeliveryAdressInput = {
  data: OrderUpdateWithoutDeliveryAdressDataInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpsertWithoutInvoiceInput = {
  create: OrderCreateWithoutInvoiceInput;
  update: OrderUpdateWithoutInvoiceDataInput;
};

export type OrderUpsertWithoutOrderItemsInput = {
  create: OrderCreateWithoutOrderItemsInput;
  update: OrderUpdateWithoutOrderItemsDataInput;
};

export type OrderUpsertWithoutReviewsInput = {
  create: OrderCreateWithoutReviewsInput;
  update: OrderUpdateWithoutReviewsDataInput;
};

export type OrderUpsertWithWhereUniqueWithoutCompanyInput = {
  create: OrderCreateWithoutCompanyInput;
  update: OrderUpdateWithoutCompanyDataInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpsertWithWhereUniqueWithoutContactInput = {
  create: OrderCreateWithoutContactInput;
  update: OrderUpdateWithoutContactDataInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
  create: OrderCreateWithoutCustomerInput;
  update: OrderUpdateWithoutCustomerDataInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpsertWithWhereUniqueWithoutDeliveryAdressInput = {
  create: OrderCreateWithoutDeliveryAdressInput;
  update: OrderUpdateWithoutDeliveryAdressDataInput;
  where: OrderWhereUniqueInput;
};

export type OrderWhereInput = {
  AND?: Maybe<Array<OrderWhereInput>>;
  company?: Maybe<CompanyWhereInput>;
  companyId?: Maybe<NullableIntFilter>;
  contact?: Maybe<ContactWhereInput>;
  contactId?: Maybe<NullableIntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  customer?: Maybe<CustomerWhereInput>;
  customerId?: Maybe<NullableIntFilter>;
  deliveryAddressId?: Maybe<IntFilter>;
  deliveryAdress?: Maybe<AddressWhereInput>;
  deliveryFees?: Maybe<FloatFilter>;
  deliveryTime?: Maybe<NullableDateTimeFilter>;
  id?: Maybe<IntFilter>;
  invoice?: Maybe<InvoiceFilter>;
  NOT?: Maybe<Array<OrderWhereInput>>;
  OR?: Maybe<Array<OrderWhereInput>>;
  orderItems?: Maybe<OrderItemFilter>;
  paymentMethod?: Maybe<StringFilter>;
  reference?: Maybe<NullableStringFilter>;
  returned?: Maybe<BooleanFilter>;
  reviews?: Maybe<ReviewFilter>;
  status?: Maybe<NullableStringFilter>;
  subtotal?: Maybe<FloatFilter>;
  taxes?: Maybe<FloatFilter>;
  taxRate?: Maybe<FloatFilter>;
  total?: Maybe<FloatFilter>;
};

export type OrderWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Payment = {
  __typename?: 'Payment';
  status: Scalars['String'];
};

export type Platform = {
  __typename?: 'Platform';
  bannerImg?: Maybe<Scalars['String']>;
  categories: Array<Category>;
  companies: Array<Company>;
  country?: Maybe<Country>;
  countryId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  owner: User;
  ownerId: Scalars['String'];
  platformType?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  taxRate: Scalars['Float'];
};


export type PlatformCategoriesArgs = {
  cursor?: Maybe<CategoryWhereUniqueInput>;
  orderBy?: Maybe<CategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};


export type PlatformCompaniesArgs = {
  cursor?: Maybe<CompanyWhereUniqueInput>;
  orderBy?: Maybe<CompanyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompanyWhereInput>;
};

export type PlatformCreateInput = {
  bannerImg?: Maybe<Scalars['String']>;
  categories?: Maybe<CategoryCreateManyWithoutPlatformInput>;
  companies?: Maybe<CompanyCreateManyWithoutPlatformInput>;
  country?: Maybe<CountryCreateOneWithoutPlatformsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner: UserCreateOneWithoutPlatformsInput;
  platformType?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  taxRate: Scalars['Float'];
};

export type PlatformCreateManyWithoutCountryInput = {
  connect?: Maybe<Array<PlatformWhereUniqueInput>>;
  create?: Maybe<Array<PlatformCreateWithoutCountryInput>>;
};

export type PlatformCreateManyWithoutOwnerInput = {
  connect?: Maybe<Array<PlatformWhereUniqueInput>>;
  create?: Maybe<Array<PlatformCreateWithoutOwnerInput>>;
};

export type PlatformCreateOneWithoutCategoriesInput = {
  connect?: Maybe<PlatformWhereUniqueInput>;
  create?: Maybe<PlatformCreateWithoutCategoriesInput>;
};

export type PlatformCreateOneWithoutCompaniesInput = {
  connect?: Maybe<PlatformWhereUniqueInput>;
  create?: Maybe<PlatformCreateWithoutCompaniesInput>;
};

export type PlatformCreateWithoutCategoriesInput = {
  bannerImg?: Maybe<Scalars['String']>;
  companies?: Maybe<CompanyCreateManyWithoutPlatformInput>;
  country?: Maybe<CountryCreateOneWithoutPlatformsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner: UserCreateOneWithoutPlatformsInput;
  platformType?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  taxRate: Scalars['Float'];
};

export type PlatformCreateWithoutCompaniesInput = {
  bannerImg?: Maybe<Scalars['String']>;
  categories?: Maybe<CategoryCreateManyWithoutPlatformInput>;
  country?: Maybe<CountryCreateOneWithoutPlatformsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner: UserCreateOneWithoutPlatformsInput;
  platformType?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  taxRate: Scalars['Float'];
};

export type PlatformCreateWithoutCountryInput = {
  bannerImg?: Maybe<Scalars['String']>;
  categories?: Maybe<CategoryCreateManyWithoutPlatformInput>;
  companies?: Maybe<CompanyCreateManyWithoutPlatformInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner: UserCreateOneWithoutPlatformsInput;
  platformType?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  taxRate: Scalars['Float'];
};

export type PlatformCreateWithoutOwnerInput = {
  bannerImg?: Maybe<Scalars['String']>;
  categories?: Maybe<CategoryCreateManyWithoutPlatformInput>;
  companies?: Maybe<CompanyCreateManyWithoutPlatformInput>;
  country?: Maybe<CountryCreateOneWithoutPlatformsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  platformType?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  taxRate: Scalars['Float'];
};

export type PlatformFilter = {
  every?: Maybe<PlatformWhereInput>;
  none?: Maybe<PlatformWhereInput>;
  some?: Maybe<PlatformWhereInput>;
};

export type PlatformOrderByInput = {
  bannerImg?: Maybe<OrderByArg>;
  countryId?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  description?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  ownerId?: Maybe<OrderByArg>;
  platformType?: Maybe<OrderByArg>;
  slug?: Maybe<OrderByArg>;
  taxRate?: Maybe<OrderByArg>;
};

export type PlatformScalarWhereInput = {
  AND?: Maybe<Array<PlatformScalarWhereInput>>;
  bannerImg?: Maybe<NullableStringFilter>;
  categories?: Maybe<CategoryFilter>;
  companies?: Maybe<CompanyFilter>;
  countryId?: Maybe<NullableIntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<NullableStringFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<NullableStringFilter>;
  NOT?: Maybe<Array<PlatformScalarWhereInput>>;
  OR?: Maybe<Array<PlatformScalarWhereInput>>;
  ownerId?: Maybe<StringFilter>;
  platformType?: Maybe<NullableStringFilter>;
  slug?: Maybe<StringFilter>;
  taxRate?: Maybe<FloatFilter>;
};

export type PlatformUpdateInput = {
  bannerImg?: Maybe<Scalars['String']>;
  categories?: Maybe<CategoryUpdateManyWithoutPlatformInput>;
  companies?: Maybe<CompanyUpdateManyWithoutPlatformInput>;
  country?: Maybe<CountryUpdateOneWithoutPlatformsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<UserUpdateOneRequiredWithoutPlatformsInput>;
  platformType?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxRate?: Maybe<Scalars['Float']>;
};

export type PlatformUpdateManyDataInput = {
  bannerImg?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  platformType?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxRate?: Maybe<Scalars['Float']>;
};

export type PlatformUpdateManyMutationInput = {
  bannerImg?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  platformType?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxRate?: Maybe<Scalars['Float']>;
};

export type PlatformUpdateManyWithoutCountryInput = {
  connect?: Maybe<Array<PlatformWhereUniqueInput>>;
  create?: Maybe<Array<PlatformCreateWithoutCountryInput>>;
  delete?: Maybe<Array<PlatformWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PlatformScalarWhereInput>>;
  disconnect?: Maybe<Array<PlatformWhereUniqueInput>>;
  set?: Maybe<Array<PlatformWhereUniqueInput>>;
  update?: Maybe<Array<PlatformUpdateWithWhereUniqueWithoutCountryInput>>;
  updateMany?: Maybe<Array<PlatformUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PlatformUpsertWithWhereUniqueWithoutCountryInput>>;
};

export type PlatformUpdateManyWithoutOwnerInput = {
  connect?: Maybe<Array<PlatformWhereUniqueInput>>;
  create?: Maybe<Array<PlatformCreateWithoutOwnerInput>>;
  delete?: Maybe<Array<PlatformWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PlatformScalarWhereInput>>;
  disconnect?: Maybe<Array<PlatformWhereUniqueInput>>;
  set?: Maybe<Array<PlatformWhereUniqueInput>>;
  update?: Maybe<Array<PlatformUpdateWithWhereUniqueWithoutOwnerInput>>;
  updateMany?: Maybe<Array<PlatformUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PlatformUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type PlatformUpdateManyWithWhereNestedInput = {
  data: PlatformUpdateManyDataInput;
  where: PlatformScalarWhereInput;
};

export type PlatformUpdateOneRequiredWithoutCategoriesInput = {
  connect?: Maybe<PlatformWhereUniqueInput>;
  create?: Maybe<PlatformCreateWithoutCategoriesInput>;
  update?: Maybe<PlatformUpdateWithoutCategoriesDataInput>;
  upsert?: Maybe<PlatformUpsertWithoutCategoriesInput>;
};

export type PlatformUpdateOneRequiredWithoutCompaniesInput = {
  connect?: Maybe<PlatformWhereUniqueInput>;
  create?: Maybe<PlatformCreateWithoutCompaniesInput>;
  update?: Maybe<PlatformUpdateWithoutCompaniesDataInput>;
  upsert?: Maybe<PlatformUpsertWithoutCompaniesInput>;
};

export type PlatformUpdateWithoutCategoriesDataInput = {
  bannerImg?: Maybe<Scalars['String']>;
  companies?: Maybe<CompanyUpdateManyWithoutPlatformInput>;
  country?: Maybe<CountryUpdateOneWithoutPlatformsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<UserUpdateOneRequiredWithoutPlatformsInput>;
  platformType?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxRate?: Maybe<Scalars['Float']>;
};

export type PlatformUpdateWithoutCompaniesDataInput = {
  bannerImg?: Maybe<Scalars['String']>;
  categories?: Maybe<CategoryUpdateManyWithoutPlatformInput>;
  country?: Maybe<CountryUpdateOneWithoutPlatformsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<UserUpdateOneRequiredWithoutPlatformsInput>;
  platformType?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxRate?: Maybe<Scalars['Float']>;
};

export type PlatformUpdateWithoutCountryDataInput = {
  bannerImg?: Maybe<Scalars['String']>;
  categories?: Maybe<CategoryUpdateManyWithoutPlatformInput>;
  companies?: Maybe<CompanyUpdateManyWithoutPlatformInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<UserUpdateOneRequiredWithoutPlatformsInput>;
  platformType?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxRate?: Maybe<Scalars['Float']>;
};

export type PlatformUpdateWithoutOwnerDataInput = {
  bannerImg?: Maybe<Scalars['String']>;
  categories?: Maybe<CategoryUpdateManyWithoutPlatformInput>;
  companies?: Maybe<CompanyUpdateManyWithoutPlatformInput>;
  country?: Maybe<CountryUpdateOneWithoutPlatformsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  platformType?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxRate?: Maybe<Scalars['Float']>;
};

export type PlatformUpdateWithWhereUniqueWithoutCountryInput = {
  data: PlatformUpdateWithoutCountryDataInput;
  where: PlatformWhereUniqueInput;
};

export type PlatformUpdateWithWhereUniqueWithoutOwnerInput = {
  data: PlatformUpdateWithoutOwnerDataInput;
  where: PlatformWhereUniqueInput;
};

export type PlatformUpsertWithoutCategoriesInput = {
  create: PlatformCreateWithoutCategoriesInput;
  update: PlatformUpdateWithoutCategoriesDataInput;
};

export type PlatformUpsertWithoutCompaniesInput = {
  create: PlatformCreateWithoutCompaniesInput;
  update: PlatformUpdateWithoutCompaniesDataInput;
};

export type PlatformUpsertWithWhereUniqueWithoutCountryInput = {
  create: PlatformCreateWithoutCountryInput;
  update: PlatformUpdateWithoutCountryDataInput;
  where: PlatformWhereUniqueInput;
};

export type PlatformUpsertWithWhereUniqueWithoutOwnerInput = {
  create: PlatformCreateWithoutOwnerInput;
  update: PlatformUpdateWithoutOwnerDataInput;
  where: PlatformWhereUniqueInput;
};

export type PlatformWhereInput = {
  AND?: Maybe<Array<PlatformWhereInput>>;
  bannerImg?: Maybe<NullableStringFilter>;
  categories?: Maybe<CategoryFilter>;
  companies?: Maybe<CompanyFilter>;
  country?: Maybe<CountryWhereInput>;
  countryId?: Maybe<NullableIntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<NullableStringFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<NullableStringFilter>;
  NOT?: Maybe<Array<PlatformWhereInput>>;
  OR?: Maybe<Array<PlatformWhereInput>>;
  owner?: Maybe<UserWhereInput>;
  ownerId?: Maybe<StringFilter>;
  platformType?: Maybe<NullableStringFilter>;
  slug?: Maybe<StringFilter>;
  taxRate?: Maybe<FloatFilter>;
};

export type PlatformWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  categories: Array<Category>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  discountInPercent?: Maybe<Scalars['Int']>;
  gallery: Array<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orderItems: Array<OrderItem>;
  price?: Maybe<Scalars['Float']>;
  review: Array<Review>;
  salePrice?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  stock?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};


export type ProductCategoriesArgs = {
  cursor?: Maybe<CategoryWhereUniqueInput>;
  orderBy?: Maybe<CategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};


export type ProductOrderItemsArgs = {
  cursor?: Maybe<OrderItemWhereUniqueInput>;
  orderBy?: Maybe<OrderItemOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<OrderItemWhereInput>;
};


export type ProductReviewArgs = {
  cursor?: Maybe<ReviewWhereUniqueInput>;
  orderBy?: Maybe<ReviewOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ReviewWhereInput>;
};

export type ProductCreategalleryInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type ProductCreateInput = {
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
  company?: Maybe<CompanyCreateOneWithoutProductsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discountInPercent?: Maybe<Scalars['Int']>;
  gallery?: Maybe<ProductCreategalleryInput>;
  height?: Maybe<Scalars['Float']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orderItems?: Maybe<OrderItemCreateManyWithoutProductInput>;
  price?: Maybe<Scalars['Float']>;
  review?: Maybe<ReviewCreateManyWithoutProductInput>;
  salePrice?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  stock?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ProductCreateManyWithoutCategoriesInput = {
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
  create?: Maybe<Array<ProductCreateWithoutCategoriesInput>>;
};

export type ProductCreateManyWithoutCompanyInput = {
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
  create?: Maybe<Array<ProductCreateWithoutCompanyInput>>;
};

export type ProductCreateOneWithoutOrderItemsInput = {
  connect?: Maybe<ProductWhereUniqueInput>;
  create?: Maybe<ProductCreateWithoutOrderItemsInput>;
};

export type ProductCreateOneWithoutReviewInput = {
  connect?: Maybe<ProductWhereUniqueInput>;
  create?: Maybe<ProductCreateWithoutReviewInput>;
};

export type ProductCreateWithoutCategoriesInput = {
  company?: Maybe<CompanyCreateOneWithoutProductsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discountInPercent?: Maybe<Scalars['Int']>;
  gallery?: Maybe<ProductCreategalleryInput>;
  height?: Maybe<Scalars['Float']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orderItems?: Maybe<OrderItemCreateManyWithoutProductInput>;
  price?: Maybe<Scalars['Float']>;
  review?: Maybe<ReviewCreateManyWithoutProductInput>;
  salePrice?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  stock?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ProductCreateWithoutCompanyInput = {
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discountInPercent?: Maybe<Scalars['Int']>;
  gallery?: Maybe<ProductCreategalleryInput>;
  height?: Maybe<Scalars['Float']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orderItems?: Maybe<OrderItemCreateManyWithoutProductInput>;
  price?: Maybe<Scalars['Float']>;
  review?: Maybe<ReviewCreateManyWithoutProductInput>;
  salePrice?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  stock?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ProductCreateWithoutOrderItemsInput = {
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
  company?: Maybe<CompanyCreateOneWithoutProductsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discountInPercent?: Maybe<Scalars['Int']>;
  gallery?: Maybe<ProductCreategalleryInput>;
  height?: Maybe<Scalars['Float']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  review?: Maybe<ReviewCreateManyWithoutProductInput>;
  salePrice?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  stock?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ProductCreateWithoutReviewInput = {
  categories?: Maybe<CategoryCreateManyWithoutProductsInput>;
  company?: Maybe<CompanyCreateOneWithoutProductsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discountInPercent?: Maybe<Scalars['Int']>;
  gallery?: Maybe<ProductCreategalleryInput>;
  height?: Maybe<Scalars['Float']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orderItems?: Maybe<OrderItemCreateManyWithoutProductInput>;
  price?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  stock?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ProductFilter = {
  every?: Maybe<ProductWhereInput>;
  none?: Maybe<ProductWhereInput>;
  some?: Maybe<ProductWhereInput>;
};

export type ProductOrderByInput = {
  companyId?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  description?: Maybe<OrderByArg>;
  discountInPercent?: Maybe<OrderByArg>;
  height?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  image?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  price?: Maybe<OrderByArg>;
  salePrice?: Maybe<OrderByArg>;
  sku?: Maybe<OrderByArg>;
  slug?: Maybe<OrderByArg>;
  stock?: Maybe<OrderByArg>;
  thumbnail?: Maybe<OrderByArg>;
  type?: Maybe<OrderByArg>;
  unit?: Maybe<OrderByArg>;
  width?: Maybe<OrderByArg>;
};

export type ProductResponse = {
  __typename?: 'ProductResponse';
  hasMore: Scalars['Boolean'];
  items: Array<Product>;
  total: Scalars['Int'];
};

export type ProductScalarWhereInput = {
  AND?: Maybe<Array<ProductScalarWhereInput>>;
  categories?: Maybe<CategoryFilter>;
  companyId?: Maybe<NullableIntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<NullableStringFilter>;
  discountInPercent?: Maybe<NullableIntFilter>;
  height?: Maybe<NullableFloatFilter>;
  id?: Maybe<IntFilter>;
  image?: Maybe<NullableStringFilter>;
  name?: Maybe<NullableStringFilter>;
  NOT?: Maybe<Array<ProductScalarWhereInput>>;
  OR?: Maybe<Array<ProductScalarWhereInput>>;
  orderItems?: Maybe<OrderItemFilter>;
  price?: Maybe<NullableFloatFilter>;
  review?: Maybe<ReviewFilter>;
  salePrice?: Maybe<NullableFloatFilter>;
  sku?: Maybe<NullableStringFilter>;
  slug?: Maybe<StringFilter>;
  stock?: Maybe<NullableIntFilter>;
  thumbnail?: Maybe<NullableStringFilter>;
  type?: Maybe<StringFilter>;
  unit?: Maybe<NullableStringFilter>;
  width?: Maybe<NullableFloatFilter>;
};

export type ProductUpdategalleryInput = {
  set?: Maybe<Array<Scalars['String']>>;
};

export type ProductUpdateInput = {
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
  company?: Maybe<CompanyUpdateOneWithoutProductsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discountInPercent?: Maybe<Scalars['Int']>;
  gallery?: Maybe<ProductUpdategalleryInput>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutProductInput>;
  price?: Maybe<Scalars['Float']>;
  review?: Maybe<ReviewUpdateManyWithoutProductInput>;
  salePrice?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ProductUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discountInPercent?: Maybe<Scalars['Int']>;
  gallery?: Maybe<ProductUpdategalleryInput>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ProductUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discountInPercent?: Maybe<Scalars['Int']>;
  gallery?: Maybe<ProductUpdategalleryInput>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ProductUpdateManyWithoutCategoriesInput = {
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
  create?: Maybe<Array<ProductCreateWithoutCategoriesInput>>;
  delete?: Maybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ProductScalarWhereInput>>;
  disconnect?: Maybe<Array<ProductWhereUniqueInput>>;
  set?: Maybe<Array<ProductWhereUniqueInput>>;
  update?: Maybe<Array<ProductUpdateWithWhereUniqueWithoutCategoriesInput>>;
  updateMany?: Maybe<Array<ProductUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ProductUpsertWithWhereUniqueWithoutCategoriesInput>>;
};

export type ProductUpdateManyWithoutCompanyInput = {
  connect?: Maybe<Array<ProductWhereUniqueInput>>;
  create?: Maybe<Array<ProductCreateWithoutCompanyInput>>;
  delete?: Maybe<Array<ProductWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ProductScalarWhereInput>>;
  disconnect?: Maybe<Array<ProductWhereUniqueInput>>;
  set?: Maybe<Array<ProductWhereUniqueInput>>;
  update?: Maybe<Array<ProductUpdateWithWhereUniqueWithoutCompanyInput>>;
  updateMany?: Maybe<Array<ProductUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ProductUpsertWithWhereUniqueWithoutCompanyInput>>;
};

export type ProductUpdateManyWithWhereNestedInput = {
  data: ProductUpdateManyDataInput;
  where: ProductScalarWhereInput;
};

export type ProductUpdateOneRequiredWithoutOrderItemsInput = {
  connect?: Maybe<ProductWhereUniqueInput>;
  create?: Maybe<ProductCreateWithoutOrderItemsInput>;
  update?: Maybe<ProductUpdateWithoutOrderItemsDataInput>;
  upsert?: Maybe<ProductUpsertWithoutOrderItemsInput>;
};

export type ProductUpdateOneWithoutReviewInput = {
  connect?: Maybe<ProductWhereUniqueInput>;
  create?: Maybe<ProductCreateWithoutReviewInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<ProductUpdateWithoutReviewDataInput>;
  upsert?: Maybe<ProductUpsertWithoutReviewInput>;
};

export type ProductUpdateWithoutCategoriesDataInput = {
  company?: Maybe<CompanyUpdateOneWithoutProductsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discountInPercent?: Maybe<Scalars['Int']>;
  gallery?: Maybe<ProductUpdategalleryInput>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutProductInput>;
  price?: Maybe<Scalars['Float']>;
  review?: Maybe<ReviewUpdateManyWithoutProductInput>;
  salePrice?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ProductUpdateWithoutCompanyDataInput = {
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discountInPercent?: Maybe<Scalars['Int']>;
  gallery?: Maybe<ProductUpdategalleryInput>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutProductInput>;
  price?: Maybe<Scalars['Float']>;
  review?: Maybe<ReviewUpdateManyWithoutProductInput>;
  salePrice?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ProductUpdateWithoutOrderItemsDataInput = {
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
  company?: Maybe<CompanyUpdateOneWithoutProductsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discountInPercent?: Maybe<Scalars['Int']>;
  gallery?: Maybe<ProductUpdategalleryInput>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  review?: Maybe<ReviewUpdateManyWithoutProductInput>;
  salePrice?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ProductUpdateWithoutReviewDataInput = {
  categories?: Maybe<CategoryUpdateManyWithoutProductsInput>;
  company?: Maybe<CompanyUpdateOneWithoutProductsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  discountInPercent?: Maybe<Scalars['Int']>;
  gallery?: Maybe<ProductUpdategalleryInput>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orderItems?: Maybe<OrderItemUpdateManyWithoutProductInput>;
  price?: Maybe<Scalars['Float']>;
  salePrice?: Maybe<Scalars['Float']>;
  sku?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  stock?: Maybe<Scalars['Int']>;
  thumbnail?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ProductUpdateWithWhereUniqueWithoutCategoriesInput = {
  data: ProductUpdateWithoutCategoriesDataInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpdateWithWhereUniqueWithoutCompanyInput = {
  data: ProductUpdateWithoutCompanyDataInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithoutOrderItemsInput = {
  create: ProductCreateWithoutOrderItemsInput;
  update: ProductUpdateWithoutOrderItemsDataInput;
};

export type ProductUpsertWithoutReviewInput = {
  create: ProductCreateWithoutReviewInput;
  update: ProductUpdateWithoutReviewDataInput;
};

export type ProductUpsertWithWhereUniqueWithoutCategoriesInput = {
  create: ProductCreateWithoutCategoriesInput;
  update: ProductUpdateWithoutCategoriesDataInput;
  where: ProductWhereUniqueInput;
};

export type ProductUpsertWithWhereUniqueWithoutCompanyInput = {
  create: ProductCreateWithoutCompanyInput;
  update: ProductUpdateWithoutCompanyDataInput;
  where: ProductWhereUniqueInput;
};

export type ProductWhereInput = {
  AND?: Maybe<Array<ProductWhereInput>>;
  categories?: Maybe<CategoryFilter>;
  company?: Maybe<CompanyWhereInput>;
  companyId?: Maybe<NullableIntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<NullableStringFilter>;
  discountInPercent?: Maybe<NullableIntFilter>;
  height?: Maybe<NullableFloatFilter>;
  id?: Maybe<IntFilter>;
  image?: Maybe<NullableStringFilter>;
  name?: Maybe<NullableStringFilter>;
  NOT?: Maybe<Array<ProductWhereInput>>;
  OR?: Maybe<Array<ProductWhereInput>>;
  orderItems?: Maybe<OrderItemFilter>;
  price?: Maybe<NullableFloatFilter>;
  review?: Maybe<ReviewFilter>;
  salePrice?: Maybe<NullableFloatFilter>;
  sku?: Maybe<NullableStringFilter>;
  slug?: Maybe<StringFilter>;
  stock?: Maybe<NullableIntFilter>;
  thumbnail?: Maybe<NullableStringFilter>;
  type?: Maybe<StringFilter>;
  unit?: Maybe<NullableStringFilter>;
  width?: Maybe<NullableFloatFilter>;
};

export type ProductWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  category: Category;
  coupons: Array<Coupon>;
  findManyAddress?: Maybe<Array<Address>>;
  findManyAddressCount: Scalars['Int'];
  findManyCard?: Maybe<Array<Card>>;
  findManyCardCount: Scalars['Int'];
  findManyCategory?: Maybe<Array<Category>>;
  findManyCategoryCount: Scalars['Int'];
  findManyCompany?: Maybe<Array<Company>>;
  findManyCompanyCount: Scalars['Int'];
  findManyContact?: Maybe<Array<Contact>>;
  findManyContactCount: Scalars['Int'];
  findManyCountry?: Maybe<Array<Country>>;
  findManyCountryCount: Scalars['Int'];
  findManyCoupon?: Maybe<Array<Coupon>>;
  findManyCouponCount: Scalars['Int'];
  findManyCustomer?: Maybe<Array<Customer>>;
  findManyCustomerCount: Scalars['Int'];
  findManyDeliveryDetail?: Maybe<Array<DeliveryDetail>>;
  findManyDeliveryDetailCount: Scalars['Int'];
  findManyInvoice?: Maybe<Array<Invoice>>;
  findManyInvoiceCount: Scalars['Int'];
  findManyOrder?: Maybe<Array<Order>>;
  findManyOrderCount: Scalars['Int'];
  findManyOrderItem?: Maybe<Array<OrderItem>>;
  findManyOrderItemCount: Scalars['Int'];
  findManyPlatform?: Maybe<Array<Platform>>;
  findManyPlatformCount: Scalars['Int'];
  findManyProduct?: Maybe<Array<Product>>;
  findManyProductCount: Scalars['Int'];
  findManyReview?: Maybe<Array<Review>>;
  findManyReviewCount: Scalars['Int'];
  findManyStaff?: Maybe<Array<Staff>>;
  findManyStaffCount: Scalars['Int'];
  findManyUser?: Maybe<Array<User>>;
  findManyUserCount: Scalars['Int'];
  findOneAddress?: Maybe<Address>;
  findOneCard?: Maybe<Card>;
  findOneCategory?: Maybe<Category>;
  findOneCompany?: Maybe<Company>;
  findOneContact?: Maybe<Contact>;
  findOneCountry?: Maybe<Country>;
  findOneCoupon?: Maybe<Coupon>;
  findOneCustomer?: Maybe<Customer>;
  findOneDeliveryDetail?: Maybe<DeliveryDetail>;
  findOneInvoice?: Maybe<Invoice>;
  findOneOrder?: Maybe<Order>;
  findOneOrderItem?: Maybe<OrderItem>;
  findOnePlatform?: Maybe<Platform>;
  findOneProduct?: Maybe<Product>;
  findOneReview?: Maybe<Review>;
  findOneStaff?: Maybe<Staff>;
  findOneUser?: Maybe<User>;
  getSchema: Schema;
  me?: Maybe<User>;
  order: Order;
  orders: Array<Order>;
  product: Product;
  products: ProductResponse;
  relatedProducts: Array<Product>;
  vendor: Company;
  vendors: Vendors;
};


export type QueryCategoriesArgs = {
  type: Scalars['String'];
};


export type QueryCategoryArgs = {
  id: Scalars['Int'];
};


export type QueryFindManyAddressArgs = {
  cursor?: Maybe<AddressWhereUniqueInput>;
  orderBy?: Maybe<AddressOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AddressWhereInput>;
};


export type QueryFindManyAddressCountArgs = {
  cursor?: Maybe<AddressWhereUniqueInput>;
  orderBy?: Maybe<AddressOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AddressWhereInput>;
};


export type QueryFindManyCardArgs = {
  cursor?: Maybe<CardWhereUniqueInput>;
  orderBy?: Maybe<CardOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CardWhereInput>;
};


export type QueryFindManyCardCountArgs = {
  cursor?: Maybe<CardWhereUniqueInput>;
  orderBy?: Maybe<CardOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CardWhereInput>;
};


export type QueryFindManyCategoryArgs = {
  cursor?: Maybe<CategoryWhereUniqueInput>;
  orderBy?: Maybe<CategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};


export type QueryFindManyCategoryCountArgs = {
  cursor?: Maybe<CategoryWhereUniqueInput>;
  orderBy?: Maybe<CategoryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CategoryWhereInput>;
};


export type QueryFindManyCompanyArgs = {
  cursor?: Maybe<CompanyWhereUniqueInput>;
  orderBy?: Maybe<CompanyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompanyWhereInput>;
};


export type QueryFindManyCompanyCountArgs = {
  cursor?: Maybe<CompanyWhereUniqueInput>;
  orderBy?: Maybe<CompanyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompanyWhereInput>;
};


export type QueryFindManyContactArgs = {
  cursor?: Maybe<ContactWhereUniqueInput>;
  orderBy?: Maybe<ContactOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ContactWhereInput>;
};


export type QueryFindManyContactCountArgs = {
  cursor?: Maybe<ContactWhereUniqueInput>;
  orderBy?: Maybe<ContactOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ContactWhereInput>;
};


export type QueryFindManyCountryArgs = {
  cursor?: Maybe<CountryWhereUniqueInput>;
  orderBy?: Maybe<CountryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CountryWhereInput>;
};


export type QueryFindManyCountryCountArgs = {
  cursor?: Maybe<CountryWhereUniqueInput>;
  orderBy?: Maybe<CountryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CountryWhereInput>;
};


export type QueryFindManyCouponArgs = {
  cursor?: Maybe<CouponWhereUniqueInput>;
  orderBy?: Maybe<CouponOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CouponWhereInput>;
};


export type QueryFindManyCouponCountArgs = {
  cursor?: Maybe<CouponWhereUniqueInput>;
  orderBy?: Maybe<CouponOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CouponWhereInput>;
};


export type QueryFindManyCustomerArgs = {
  cursor?: Maybe<CustomerWhereUniqueInput>;
  orderBy?: Maybe<CustomerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CustomerWhereInput>;
};


export type QueryFindManyCustomerCountArgs = {
  cursor?: Maybe<CustomerWhereUniqueInput>;
  orderBy?: Maybe<CustomerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CustomerWhereInput>;
};


export type QueryFindManyDeliveryDetailArgs = {
  cursor?: Maybe<DeliveryDetailWhereUniqueInput>;
  orderBy?: Maybe<DeliveryDetailOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<DeliveryDetailWhereInput>;
};


export type QueryFindManyDeliveryDetailCountArgs = {
  cursor?: Maybe<DeliveryDetailWhereUniqueInput>;
  orderBy?: Maybe<DeliveryDetailOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<DeliveryDetailWhereInput>;
};


export type QueryFindManyInvoiceArgs = {
  cursor?: Maybe<InvoiceWhereUniqueInput>;
  orderBy?: Maybe<InvoiceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<InvoiceWhereInput>;
};


export type QueryFindManyInvoiceCountArgs = {
  cursor?: Maybe<InvoiceWhereUniqueInput>;
  orderBy?: Maybe<InvoiceOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<InvoiceWhereInput>;
};


export type QueryFindManyOrderArgs = {
  cursor?: Maybe<OrderWhereUniqueInput>;
  orderBy?: Maybe<OrderOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<OrderWhereInput>;
};


export type QueryFindManyOrderCountArgs = {
  cursor?: Maybe<OrderWhereUniqueInput>;
  orderBy?: Maybe<OrderOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<OrderWhereInput>;
};


export type QueryFindManyOrderItemArgs = {
  cursor?: Maybe<OrderItemWhereUniqueInput>;
  orderBy?: Maybe<OrderItemOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<OrderItemWhereInput>;
};


export type QueryFindManyOrderItemCountArgs = {
  cursor?: Maybe<OrderItemWhereUniqueInput>;
  orderBy?: Maybe<OrderItemOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<OrderItemWhereInput>;
};


export type QueryFindManyPlatformArgs = {
  cursor?: Maybe<PlatformWhereUniqueInput>;
  orderBy?: Maybe<PlatformOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PlatformWhereInput>;
};


export type QueryFindManyPlatformCountArgs = {
  cursor?: Maybe<PlatformWhereUniqueInput>;
  orderBy?: Maybe<PlatformOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PlatformWhereInput>;
};


export type QueryFindManyProductArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  orderBy?: Maybe<ProductOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};


export type QueryFindManyProductCountArgs = {
  cursor?: Maybe<ProductWhereUniqueInput>;
  orderBy?: Maybe<ProductOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ProductWhereInput>;
};


export type QueryFindManyReviewArgs = {
  cursor?: Maybe<ReviewWhereUniqueInput>;
  orderBy?: Maybe<ReviewOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ReviewWhereInput>;
};


export type QueryFindManyReviewCountArgs = {
  cursor?: Maybe<ReviewWhereUniqueInput>;
  orderBy?: Maybe<ReviewOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ReviewWhereInput>;
};


export type QueryFindManyStaffArgs = {
  cursor?: Maybe<StaffWhereUniqueInput>;
  orderBy?: Maybe<StaffOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StaffWhereInput>;
};


export type QueryFindManyStaffCountArgs = {
  cursor?: Maybe<StaffWhereUniqueInput>;
  orderBy?: Maybe<StaffOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StaffWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindManyUserCountArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindOneAddressArgs = {
  where: AddressWhereUniqueInput;
};


export type QueryFindOneCardArgs = {
  where: CardWhereUniqueInput;
};


export type QueryFindOneCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryFindOneCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type QueryFindOneContactArgs = {
  where: ContactWhereUniqueInput;
};


export type QueryFindOneCountryArgs = {
  where: CountryWhereUniqueInput;
};


export type QueryFindOneCouponArgs = {
  where: CouponWhereUniqueInput;
};


export type QueryFindOneCustomerArgs = {
  where: CustomerWhereUniqueInput;
};


export type QueryFindOneDeliveryDetailArgs = {
  where: DeliveryDetailWhereUniqueInput;
};


export type QueryFindOneInvoiceArgs = {
  where: InvoiceWhereUniqueInput;
};


export type QueryFindOneOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type QueryFindOneOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};


export type QueryFindOnePlatformArgs = {
  where: PlatformWhereUniqueInput;
};


export type QueryFindOneProductArgs = {
  where: ProductWhereUniqueInput;
};


export type QueryFindOneReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type QueryFindOneStaffArgs = {
  where: StaffWhereUniqueInput;
};


export type QueryFindOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryOrderArgs = {
  id: Scalars['Int'];
};


export type QueryOrdersArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type QueryProductArgs = {
  slug: Scalars['String'];
};


export type QueryProductsArgs = {
  category?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};


export type QueryRelatedProductsArgs = {
  slug: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};


export type QueryVendorArgs = {
  slug: Scalars['String'];
};


export type QueryVendorsArgs = {
  category?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Review = {
  __typename?: 'Review';
  comment?: Maybe<Scalars['String']>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<Customer>;
  customerId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['Int']>;
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

export type ReviewCreateInput = {
  comment?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyCreateOneWithoutReviewsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerCreateOneWithoutReviewsInput>;
  order?: Maybe<OrderCreateOneWithoutReviewsInput>;
  product?: Maybe<ProductCreateOneWithoutReviewInput>;
  rating?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

export type ReviewCreateManyWithoutCompanyInput = {
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
  create?: Maybe<Array<ReviewCreateWithoutCompanyInput>>;
};

export type ReviewCreateManyWithoutCustomerInput = {
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
  create?: Maybe<Array<ReviewCreateWithoutCustomerInput>>;
};

export type ReviewCreateManyWithoutOrderInput = {
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
  create?: Maybe<Array<ReviewCreateWithoutOrderInput>>;
};

export type ReviewCreateManyWithoutProductInput = {
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
  create?: Maybe<Array<ReviewCreateWithoutProductInput>>;
};

export type ReviewCreateWithoutCompanyInput = {
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerCreateOneWithoutReviewsInput>;
  order?: Maybe<OrderCreateOneWithoutReviewsInput>;
  product?: Maybe<ProductCreateOneWithoutReviewInput>;
  rating?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

export type ReviewCreateWithoutCustomerInput = {
  comment?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyCreateOneWithoutReviewsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  order?: Maybe<OrderCreateOneWithoutReviewsInput>;
  product?: Maybe<ProductCreateOneWithoutReviewInput>;
  rating?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

export type ReviewCreateWithoutOrderInput = {
  comment?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyCreateOneWithoutReviewsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerCreateOneWithoutReviewsInput>;
  product?: Maybe<ProductCreateOneWithoutReviewInput>;
  rating?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

export type ReviewCreateWithoutProductInput = {
  comment?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyCreateOneWithoutReviewsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerCreateOneWithoutReviewsInput>;
  order?: Maybe<OrderCreateOneWithoutReviewsInput>;
  rating?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

export type ReviewFilter = {
  every?: Maybe<ReviewWhereInput>;
  none?: Maybe<ReviewWhereInput>;
  some?: Maybe<ReviewWhereInput>;
};

export type ReviewOrderByInput = {
  comment?: Maybe<OrderByArg>;
  companyId?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  customerId?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  orderId?: Maybe<OrderByArg>;
  productId?: Maybe<OrderByArg>;
  rating?: Maybe<OrderByArg>;
  status?: Maybe<OrderByArg>;
};

export type ReviewScalarWhereInput = {
  AND?: Maybe<Array<ReviewScalarWhereInput>>;
  comment?: Maybe<NullableStringFilter>;
  companyId?: Maybe<NullableIntFilter>;
  createdAt?: Maybe<NullableDateTimeFilter>;
  customerId?: Maybe<NullableIntFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<ReviewScalarWhereInput>>;
  OR?: Maybe<Array<ReviewScalarWhereInput>>;
  orderId?: Maybe<NullableIntFilter>;
  productId?: Maybe<NullableIntFilter>;
  rating?: Maybe<NullableIntFilter>;
  status?: Maybe<NullableStringFilter>;
};

export type ReviewUpdateInput = {
  comment?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyUpdateOneWithoutReviewsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerUpdateOneWithoutReviewsInput>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderUpdateOneWithoutReviewsInput>;
  product?: Maybe<ProductUpdateOneWithoutReviewInput>;
  rating?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

export type ReviewUpdateManyDataInput = {
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

export type ReviewUpdateManyMutationInput = {
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

export type ReviewUpdateManyWithoutCompanyInput = {
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
  create?: Maybe<Array<ReviewCreateWithoutCompanyInput>>;
  delete?: Maybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ReviewScalarWhereInput>>;
  disconnect?: Maybe<Array<ReviewWhereUniqueInput>>;
  set?: Maybe<Array<ReviewWhereUniqueInput>>;
  update?: Maybe<Array<ReviewUpdateWithWhereUniqueWithoutCompanyInput>>;
  updateMany?: Maybe<Array<ReviewUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ReviewUpsertWithWhereUniqueWithoutCompanyInput>>;
};

export type ReviewUpdateManyWithoutCustomerInput = {
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
  create?: Maybe<Array<ReviewCreateWithoutCustomerInput>>;
  delete?: Maybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ReviewScalarWhereInput>>;
  disconnect?: Maybe<Array<ReviewWhereUniqueInput>>;
  set?: Maybe<Array<ReviewWhereUniqueInput>>;
  update?: Maybe<Array<ReviewUpdateWithWhereUniqueWithoutCustomerInput>>;
  updateMany?: Maybe<Array<ReviewUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ReviewUpsertWithWhereUniqueWithoutCustomerInput>>;
};

export type ReviewUpdateManyWithoutOrderInput = {
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
  create?: Maybe<Array<ReviewCreateWithoutOrderInput>>;
  delete?: Maybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ReviewScalarWhereInput>>;
  disconnect?: Maybe<Array<ReviewWhereUniqueInput>>;
  set?: Maybe<Array<ReviewWhereUniqueInput>>;
  update?: Maybe<Array<ReviewUpdateWithWhereUniqueWithoutOrderInput>>;
  updateMany?: Maybe<Array<ReviewUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ReviewUpsertWithWhereUniqueWithoutOrderInput>>;
};

export type ReviewUpdateManyWithoutProductInput = {
  connect?: Maybe<Array<ReviewWhereUniqueInput>>;
  create?: Maybe<Array<ReviewCreateWithoutProductInput>>;
  delete?: Maybe<Array<ReviewWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ReviewScalarWhereInput>>;
  disconnect?: Maybe<Array<ReviewWhereUniqueInput>>;
  set?: Maybe<Array<ReviewWhereUniqueInput>>;
  update?: Maybe<Array<ReviewUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: Maybe<Array<ReviewUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<ReviewUpsertWithWhereUniqueWithoutProductInput>>;
};

export type ReviewUpdateManyWithWhereNestedInput = {
  data: ReviewUpdateManyDataInput;
  where: ReviewScalarWhereInput;
};

export type ReviewUpdateWithoutCompanyDataInput = {
  comment?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerUpdateOneWithoutReviewsInput>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderUpdateOneWithoutReviewsInput>;
  product?: Maybe<ProductUpdateOneWithoutReviewInput>;
  rating?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

export type ReviewUpdateWithoutCustomerDataInput = {
  comment?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyUpdateOneWithoutReviewsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderUpdateOneWithoutReviewsInput>;
  product?: Maybe<ProductUpdateOneWithoutReviewInput>;
  rating?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

export type ReviewUpdateWithoutOrderDataInput = {
  comment?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyUpdateOneWithoutReviewsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerUpdateOneWithoutReviewsInput>;
  id?: Maybe<Scalars['Int']>;
  product?: Maybe<ProductUpdateOneWithoutReviewInput>;
  rating?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

export type ReviewUpdateWithoutProductDataInput = {
  comment?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyUpdateOneWithoutReviewsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customer?: Maybe<CustomerUpdateOneWithoutReviewsInput>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderUpdateOneWithoutReviewsInput>;
  rating?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

export type ReviewUpdateWithWhereUniqueWithoutCompanyInput = {
  data: ReviewUpdateWithoutCompanyDataInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithWhereUniqueWithoutCustomerInput = {
  data: ReviewUpdateWithoutCustomerDataInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithWhereUniqueWithoutOrderInput = {
  data: ReviewUpdateWithoutOrderDataInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpdateWithWhereUniqueWithoutProductInput = {
  data: ReviewUpdateWithoutProductDataInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertWithWhereUniqueWithoutCompanyInput = {
  create: ReviewCreateWithoutCompanyInput;
  update: ReviewUpdateWithoutCompanyDataInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertWithWhereUniqueWithoutCustomerInput = {
  create: ReviewCreateWithoutCustomerInput;
  update: ReviewUpdateWithoutCustomerDataInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertWithWhereUniqueWithoutOrderInput = {
  create: ReviewCreateWithoutOrderInput;
  update: ReviewUpdateWithoutOrderDataInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertWithWhereUniqueWithoutProductInput = {
  create: ReviewCreateWithoutProductInput;
  update: ReviewUpdateWithoutProductDataInput;
  where: ReviewWhereUniqueInput;
};

export type ReviewWhereInput = {
  AND?: Maybe<Array<ReviewWhereInput>>;
  comment?: Maybe<NullableStringFilter>;
  company?: Maybe<CompanyWhereInput>;
  companyId?: Maybe<NullableIntFilter>;
  createdAt?: Maybe<NullableDateTimeFilter>;
  customer?: Maybe<CustomerWhereInput>;
  customerId?: Maybe<NullableIntFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<ReviewWhereInput>>;
  OR?: Maybe<Array<ReviewWhereInput>>;
  order?: Maybe<OrderWhereInput>;
  orderId?: Maybe<NullableIntFilter>;
  product?: Maybe<ProductWhereInput>;
  productId?: Maybe<NullableIntFilter>;
  rating?: Maybe<NullableIntFilter>;
  status?: Maybe<NullableStringFilter>;
};

export type ReviewWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Schema = {
  __typename?: 'Schema';
  enums: Array<Enum>;
  models: Array<Model>;
};

export type Staff = {
  __typename?: 'Staff';
  company: Company;
  companyId: Scalars['Int'];
  contact?: Maybe<Contact>;
  contactId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lastName?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type StaffCreateInput = {
  company: CompanyCreateOneWithoutStaffsInput;
  contact?: Maybe<ContactCreateOneWithoutStaffsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  user: UserCreateOneWithoutStaffsInput;
};

export type StaffCreateManyWithoutCompanyInput = {
  connect?: Maybe<Array<StaffWhereUniqueInput>>;
  create?: Maybe<Array<StaffCreateWithoutCompanyInput>>;
};

export type StaffCreateManyWithoutContactInput = {
  connect?: Maybe<Array<StaffWhereUniqueInput>>;
  create?: Maybe<Array<StaffCreateWithoutContactInput>>;
};

export type StaffCreateManyWithoutUserInput = {
  connect?: Maybe<Array<StaffWhereUniqueInput>>;
  create?: Maybe<Array<StaffCreateWithoutUserInput>>;
};

export type StaffCreateWithoutCompanyInput = {
  contact?: Maybe<ContactCreateOneWithoutStaffsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  user: UserCreateOneWithoutStaffsInput;
};

export type StaffCreateWithoutContactInput = {
  company: CompanyCreateOneWithoutStaffsInput;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  user: UserCreateOneWithoutStaffsInput;
};

export type StaffCreateWithoutUserInput = {
  company: CompanyCreateOneWithoutStaffsInput;
  contact?: Maybe<ContactCreateOneWithoutStaffsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  role: Scalars['String'];
};

export type StaffFilter = {
  every?: Maybe<StaffWhereInput>;
  none?: Maybe<StaffWhereInput>;
  some?: Maybe<StaffWhereInput>;
};

export type StaffOrderByInput = {
  companyId?: Maybe<OrderByArg>;
  contactId?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  email?: Maybe<OrderByArg>;
  firstName?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  lastName?: Maybe<OrderByArg>;
  role?: Maybe<OrderByArg>;
  userId?: Maybe<OrderByArg>;
};

export type StaffScalarWhereInput = {
  AND?: Maybe<Array<StaffScalarWhereInput>>;
  companyId?: Maybe<IntFilter>;
  contactId?: Maybe<NullableIntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<NullableStringFilter>;
  firstName?: Maybe<NullableStringFilter>;
  id?: Maybe<IntFilter>;
  lastName?: Maybe<NullableStringFilter>;
  NOT?: Maybe<Array<StaffScalarWhereInput>>;
  OR?: Maybe<Array<StaffScalarWhereInput>>;
  role?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
};

export type StaffUpdateInput = {
  company?: Maybe<CompanyUpdateOneRequiredWithoutStaffsInput>;
  contact?: Maybe<ContactUpdateOneWithoutStaffsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  user?: Maybe<UserUpdateOneRequiredWithoutStaffsInput>;
};

export type StaffUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type StaffUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type StaffUpdateManyWithoutCompanyInput = {
  connect?: Maybe<Array<StaffWhereUniqueInput>>;
  create?: Maybe<Array<StaffCreateWithoutCompanyInput>>;
  delete?: Maybe<Array<StaffWhereUniqueInput>>;
  deleteMany?: Maybe<Array<StaffScalarWhereInput>>;
  disconnect?: Maybe<Array<StaffWhereUniqueInput>>;
  set?: Maybe<Array<StaffWhereUniqueInput>>;
  update?: Maybe<Array<StaffUpdateWithWhereUniqueWithoutCompanyInput>>;
  updateMany?: Maybe<Array<StaffUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<StaffUpsertWithWhereUniqueWithoutCompanyInput>>;
};

export type StaffUpdateManyWithoutContactInput = {
  connect?: Maybe<Array<StaffWhereUniqueInput>>;
  create?: Maybe<Array<StaffCreateWithoutContactInput>>;
  delete?: Maybe<Array<StaffWhereUniqueInput>>;
  deleteMany?: Maybe<Array<StaffScalarWhereInput>>;
  disconnect?: Maybe<Array<StaffWhereUniqueInput>>;
  set?: Maybe<Array<StaffWhereUniqueInput>>;
  update?: Maybe<Array<StaffUpdateWithWhereUniqueWithoutContactInput>>;
  updateMany?: Maybe<Array<StaffUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<StaffUpsertWithWhereUniqueWithoutContactInput>>;
};

export type StaffUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<StaffWhereUniqueInput>>;
  create?: Maybe<Array<StaffCreateWithoutUserInput>>;
  delete?: Maybe<Array<StaffWhereUniqueInput>>;
  deleteMany?: Maybe<Array<StaffScalarWhereInput>>;
  disconnect?: Maybe<Array<StaffWhereUniqueInput>>;
  set?: Maybe<Array<StaffWhereUniqueInput>>;
  update?: Maybe<Array<StaffUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<StaffUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<StaffUpsertWithWhereUniqueWithoutUserInput>>;
};

export type StaffUpdateManyWithWhereNestedInput = {
  data: StaffUpdateManyDataInput;
  where: StaffScalarWhereInput;
};

export type StaffUpdateWithoutCompanyDataInput = {
  contact?: Maybe<ContactUpdateOneWithoutStaffsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  user?: Maybe<UserUpdateOneRequiredWithoutStaffsInput>;
};

export type StaffUpdateWithoutContactDataInput = {
  company?: Maybe<CompanyUpdateOneRequiredWithoutStaffsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  user?: Maybe<UserUpdateOneRequiredWithoutStaffsInput>;
};

export type StaffUpdateWithoutUserDataInput = {
  company?: Maybe<CompanyUpdateOneRequiredWithoutStaffsInput>;
  contact?: Maybe<ContactUpdateOneWithoutStaffsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type StaffUpdateWithWhereUniqueWithoutCompanyInput = {
  data: StaffUpdateWithoutCompanyDataInput;
  where: StaffWhereUniqueInput;
};

export type StaffUpdateWithWhereUniqueWithoutContactInput = {
  data: StaffUpdateWithoutContactDataInput;
  where: StaffWhereUniqueInput;
};

export type StaffUpdateWithWhereUniqueWithoutUserInput = {
  data: StaffUpdateWithoutUserDataInput;
  where: StaffWhereUniqueInput;
};

export type StaffUpsertWithWhereUniqueWithoutCompanyInput = {
  create: StaffCreateWithoutCompanyInput;
  update: StaffUpdateWithoutCompanyDataInput;
  where: StaffWhereUniqueInput;
};

export type StaffUpsertWithWhereUniqueWithoutContactInput = {
  create: StaffCreateWithoutContactInput;
  update: StaffUpdateWithoutContactDataInput;
  where: StaffWhereUniqueInput;
};

export type StaffUpsertWithWhereUniqueWithoutUserInput = {
  create: StaffCreateWithoutUserInput;
  update: StaffUpdateWithoutUserDataInput;
  where: StaffWhereUniqueInput;
};

export type StaffWhereInput = {
  AND?: Maybe<Array<StaffWhereInput>>;
  company?: Maybe<CompanyWhereInput>;
  companyId?: Maybe<IntFilter>;
  contact?: Maybe<ContactWhereInput>;
  contactId?: Maybe<NullableIntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<NullableStringFilter>;
  firstName?: Maybe<NullableStringFilter>;
  id?: Maybe<IntFilter>;
  lastName?: Maybe<NullableStringFilter>;
  NOT?: Maybe<Array<StaffWhereInput>>;
  OR?: Maybe<Array<StaffWhereInput>>;
  role?: Maybe<StringFilter>;
  user?: Maybe<UserWhereInput>;
  userId?: Maybe<StringFilter>;
};

export type StaffWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type UpdateFieldInput = {
  create?: Maybe<Scalars['Boolean']>;
  editor?: Maybe<Scalars['Boolean']>;
  filter?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  isId?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<KindEnum>;
  list?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  read?: Maybe<Scalars['Boolean']>;
  relationField?: Maybe<Scalars['Boolean']>;
  required?: Maybe<Scalars['Boolean']>;
  sort?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unique?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
};

export type UpdateModelInput = {
  create?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  displayFields?: Maybe<Array<Scalars['String']>>;
  fields?: Maybe<Array<UpdateFieldInput>>;
  idField?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  addresses: Array<Address>;
  cards: Array<Card>;
  companies: Array<Company>;
  contacts: Array<Contact>;
  coverImage?: Maybe<Scalars['String']>;
  coverImagePublicId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  customers: Array<Customer>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  imagePublicId?: Maybe<Scalars['String']>;
  income?: Maybe<Scalars['Float']>;
  isOnline: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  platforms: Array<Platform>;
  staffs: Array<Staff>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  walletId?: Maybe<Scalars['String']>;
};


export type UserAddressesArgs = {
  cursor?: Maybe<AddressWhereUniqueInput>;
  orderBy?: Maybe<AddressOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AddressWhereInput>;
};


export type UserCardsArgs = {
  cursor?: Maybe<CardWhereUniqueInput>;
  orderBy?: Maybe<CardOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CardWhereInput>;
};


export type UserCompaniesArgs = {
  cursor?: Maybe<CompanyWhereUniqueInput>;
  orderBy?: Maybe<CompanyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CompanyWhereInput>;
};


export type UserContactsArgs = {
  cursor?: Maybe<ContactWhereUniqueInput>;
  orderBy?: Maybe<ContactOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ContactWhereInput>;
};


export type UserCustomersArgs = {
  cursor?: Maybe<CustomerWhereUniqueInput>;
  orderBy?: Maybe<CustomerOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CustomerWhereInput>;
};


export type UserPlatformsArgs = {
  cursor?: Maybe<PlatformWhereUniqueInput>;
  orderBy?: Maybe<PlatformOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PlatformWhereInput>;
};


export type UserStaffsArgs = {
  cursor?: Maybe<StaffWhereUniqueInput>;
  orderBy?: Maybe<StaffOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StaffWhereInput>;
};

export type UserCreateInput = {
  addresses?: Maybe<AddressCreateManyWithoutUserInput>;
  cards?: Maybe<CardCreateManyWithoutUserInput>;
  companies?: Maybe<CompanyCreateManyWithoutOwnerInput>;
  contacts?: Maybe<ContactCreateManyWithoutUserInput>;
  coverImage?: Maybe<Scalars['String']>;
  coverImagePublicId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerCreateManyWithoutUserInput>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  imagePublicId?: Maybe<Scalars['String']>;
  income?: Maybe<Scalars['Float']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  platforms?: Maybe<PlatformCreateManyWithoutOwnerInput>;
  staffs?: Maybe<StaffCreateManyWithoutUserInput>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  walletId?: Maybe<Scalars['String']>;
};

export type UserCreateOneWithoutAddressesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutAddressesInput>;
};

export type UserCreateOneWithoutCardsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutCardsInput>;
};

export type UserCreateOneWithoutCompaniesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutCompaniesInput>;
};

export type UserCreateOneWithoutContactsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutContactsInput>;
};

export type UserCreateOneWithoutCustomersInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutCustomersInput>;
};

export type UserCreateOneWithoutPlatformsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutPlatformsInput>;
};

export type UserCreateOneWithoutStaffsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutStaffsInput>;
};

export type UserCreateWithoutAddressesInput = {
  cards?: Maybe<CardCreateManyWithoutUserInput>;
  companies?: Maybe<CompanyCreateManyWithoutOwnerInput>;
  contacts?: Maybe<ContactCreateManyWithoutUserInput>;
  coverImage?: Maybe<Scalars['String']>;
  coverImagePublicId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerCreateManyWithoutUserInput>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  imagePublicId?: Maybe<Scalars['String']>;
  income?: Maybe<Scalars['Float']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  platforms?: Maybe<PlatformCreateManyWithoutOwnerInput>;
  staffs?: Maybe<StaffCreateManyWithoutUserInput>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  walletId?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutCardsInput = {
  addresses?: Maybe<AddressCreateManyWithoutUserInput>;
  companies?: Maybe<CompanyCreateManyWithoutOwnerInput>;
  contacts?: Maybe<ContactCreateManyWithoutUserInput>;
  coverImage?: Maybe<Scalars['String']>;
  coverImagePublicId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerCreateManyWithoutUserInput>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  imagePublicId?: Maybe<Scalars['String']>;
  income?: Maybe<Scalars['Float']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  platforms?: Maybe<PlatformCreateManyWithoutOwnerInput>;
  staffs?: Maybe<StaffCreateManyWithoutUserInput>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  walletId?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutCompaniesInput = {
  addresses?: Maybe<AddressCreateManyWithoutUserInput>;
  cards?: Maybe<CardCreateManyWithoutUserInput>;
  contacts?: Maybe<ContactCreateManyWithoutUserInput>;
  coverImage?: Maybe<Scalars['String']>;
  coverImagePublicId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerCreateManyWithoutUserInput>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  imagePublicId?: Maybe<Scalars['String']>;
  income?: Maybe<Scalars['Float']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  platforms?: Maybe<PlatformCreateManyWithoutOwnerInput>;
  staffs?: Maybe<StaffCreateManyWithoutUserInput>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  walletId?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutContactsInput = {
  addresses?: Maybe<AddressCreateManyWithoutUserInput>;
  cards?: Maybe<CardCreateManyWithoutUserInput>;
  companies?: Maybe<CompanyCreateManyWithoutOwnerInput>;
  coverImage?: Maybe<Scalars['String']>;
  coverImagePublicId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerCreateManyWithoutUserInput>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  imagePublicId?: Maybe<Scalars['String']>;
  income?: Maybe<Scalars['Float']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  platforms?: Maybe<PlatformCreateManyWithoutOwnerInput>;
  staffs?: Maybe<StaffCreateManyWithoutUserInput>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  walletId?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutCustomersInput = {
  addresses?: Maybe<AddressCreateManyWithoutUserInput>;
  cards?: Maybe<CardCreateManyWithoutUserInput>;
  companies?: Maybe<CompanyCreateManyWithoutOwnerInput>;
  contacts?: Maybe<ContactCreateManyWithoutUserInput>;
  coverImage?: Maybe<Scalars['String']>;
  coverImagePublicId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  imagePublicId?: Maybe<Scalars['String']>;
  income?: Maybe<Scalars['Float']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  platforms?: Maybe<PlatformCreateManyWithoutOwnerInput>;
  staffs?: Maybe<StaffCreateManyWithoutUserInput>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  walletId?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutPlatformsInput = {
  addresses?: Maybe<AddressCreateManyWithoutUserInput>;
  cards?: Maybe<CardCreateManyWithoutUserInput>;
  companies?: Maybe<CompanyCreateManyWithoutOwnerInput>;
  contacts?: Maybe<ContactCreateManyWithoutUserInput>;
  coverImage?: Maybe<Scalars['String']>;
  coverImagePublicId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerCreateManyWithoutUserInput>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  imagePublicId?: Maybe<Scalars['String']>;
  income?: Maybe<Scalars['Float']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  staffs?: Maybe<StaffCreateManyWithoutUserInput>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  walletId?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutStaffsInput = {
  addresses?: Maybe<AddressCreateManyWithoutUserInput>;
  cards?: Maybe<CardCreateManyWithoutUserInput>;
  companies?: Maybe<CompanyCreateManyWithoutOwnerInput>;
  contacts?: Maybe<ContactCreateManyWithoutUserInput>;
  coverImage?: Maybe<Scalars['String']>;
  coverImagePublicId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerCreateManyWithoutUserInput>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  imagePublicId?: Maybe<Scalars['String']>;
  income?: Maybe<Scalars['Float']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  platforms?: Maybe<PlatformCreateManyWithoutOwnerInput>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  walletId?: Maybe<Scalars['String']>;
};

export type UserOrderByInput = {
  coverImage?: Maybe<OrderByArg>;
  coverImagePublicId?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  email?: Maybe<OrderByArg>;
  firstName?: Maybe<OrderByArg>;
  googleId?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  image?: Maybe<OrderByArg>;
  imagePublicId?: Maybe<OrderByArg>;
  income?: Maybe<OrderByArg>;
  isOnline?: Maybe<OrderByArg>;
  lastName?: Maybe<OrderByArg>;
  token?: Maybe<OrderByArg>;
  username?: Maybe<OrderByArg>;
  walletId?: Maybe<OrderByArg>;
};

export type UserUpdateInput = {
  addresses?: Maybe<AddressUpdateManyWithoutUserInput>;
  cards?: Maybe<CardUpdateManyWithoutUserInput>;
  companies?: Maybe<CompanyUpdateManyWithoutOwnerInput>;
  contacts?: Maybe<ContactUpdateManyWithoutUserInput>;
  coverImage?: Maybe<Scalars['String']>;
  coverImagePublicId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerUpdateManyWithoutUserInput>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  imagePublicId?: Maybe<Scalars['String']>;
  income?: Maybe<Scalars['Float']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  platforms?: Maybe<PlatformUpdateManyWithoutOwnerInput>;
  staffs?: Maybe<StaffUpdateManyWithoutUserInput>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  walletId?: Maybe<Scalars['String']>;
};

export type UserUpdateManyMutationInput = {
  coverImage?: Maybe<Scalars['String']>;
  coverImagePublicId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  imagePublicId?: Maybe<Scalars['String']>;
  income?: Maybe<Scalars['Float']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  walletId?: Maybe<Scalars['String']>;
};

export type UserUpdateOneRequiredWithoutCustomersInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutCustomersInput>;
  update?: Maybe<UserUpdateWithoutCustomersDataInput>;
  upsert?: Maybe<UserUpsertWithoutCustomersInput>;
};

export type UserUpdateOneRequiredWithoutPlatformsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutPlatformsInput>;
  update?: Maybe<UserUpdateWithoutPlatformsDataInput>;
  upsert?: Maybe<UserUpsertWithoutPlatformsInput>;
};

export type UserUpdateOneRequiredWithoutStaffsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutStaffsInput>;
  update?: Maybe<UserUpdateWithoutStaffsDataInput>;
  upsert?: Maybe<UserUpsertWithoutStaffsInput>;
};

export type UserUpdateOneWithoutAddressesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutAddressesInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutAddressesDataInput>;
  upsert?: Maybe<UserUpsertWithoutAddressesInput>;
};

export type UserUpdateOneWithoutCardsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutCardsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutCardsDataInput>;
  upsert?: Maybe<UserUpsertWithoutCardsInput>;
};

export type UserUpdateOneWithoutCompaniesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutCompaniesInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutCompaniesDataInput>;
  upsert?: Maybe<UserUpsertWithoutCompaniesInput>;
};

export type UserUpdateOneWithoutContactsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutContactsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutContactsDataInput>;
  upsert?: Maybe<UserUpsertWithoutContactsInput>;
};

export type UserUpdateWithoutAddressesDataInput = {
  cards?: Maybe<CardUpdateManyWithoutUserInput>;
  companies?: Maybe<CompanyUpdateManyWithoutOwnerInput>;
  contacts?: Maybe<ContactUpdateManyWithoutUserInput>;
  coverImage?: Maybe<Scalars['String']>;
  coverImagePublicId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerUpdateManyWithoutUserInput>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  imagePublicId?: Maybe<Scalars['String']>;
  income?: Maybe<Scalars['Float']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  platforms?: Maybe<PlatformUpdateManyWithoutOwnerInput>;
  staffs?: Maybe<StaffUpdateManyWithoutUserInput>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  walletId?: Maybe<Scalars['String']>;
};

export type UserUpdateWithoutCardsDataInput = {
  addresses?: Maybe<AddressUpdateManyWithoutUserInput>;
  companies?: Maybe<CompanyUpdateManyWithoutOwnerInput>;
  contacts?: Maybe<ContactUpdateManyWithoutUserInput>;
  coverImage?: Maybe<Scalars['String']>;
  coverImagePublicId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerUpdateManyWithoutUserInput>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  imagePublicId?: Maybe<Scalars['String']>;
  income?: Maybe<Scalars['Float']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  platforms?: Maybe<PlatformUpdateManyWithoutOwnerInput>;
  staffs?: Maybe<StaffUpdateManyWithoutUserInput>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  walletId?: Maybe<Scalars['String']>;
};

export type UserUpdateWithoutCompaniesDataInput = {
  addresses?: Maybe<AddressUpdateManyWithoutUserInput>;
  cards?: Maybe<CardUpdateManyWithoutUserInput>;
  contacts?: Maybe<ContactUpdateManyWithoutUserInput>;
  coverImage?: Maybe<Scalars['String']>;
  coverImagePublicId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerUpdateManyWithoutUserInput>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  imagePublicId?: Maybe<Scalars['String']>;
  income?: Maybe<Scalars['Float']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  platforms?: Maybe<PlatformUpdateManyWithoutOwnerInput>;
  staffs?: Maybe<StaffUpdateManyWithoutUserInput>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  walletId?: Maybe<Scalars['String']>;
};

export type UserUpdateWithoutContactsDataInput = {
  addresses?: Maybe<AddressUpdateManyWithoutUserInput>;
  cards?: Maybe<CardUpdateManyWithoutUserInput>;
  companies?: Maybe<CompanyUpdateManyWithoutOwnerInput>;
  coverImage?: Maybe<Scalars['String']>;
  coverImagePublicId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerUpdateManyWithoutUserInput>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  imagePublicId?: Maybe<Scalars['String']>;
  income?: Maybe<Scalars['Float']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  platforms?: Maybe<PlatformUpdateManyWithoutOwnerInput>;
  staffs?: Maybe<StaffUpdateManyWithoutUserInput>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  walletId?: Maybe<Scalars['String']>;
};

export type UserUpdateWithoutCustomersDataInput = {
  addresses?: Maybe<AddressUpdateManyWithoutUserInput>;
  cards?: Maybe<CardUpdateManyWithoutUserInput>;
  companies?: Maybe<CompanyUpdateManyWithoutOwnerInput>;
  contacts?: Maybe<ContactUpdateManyWithoutUserInput>;
  coverImage?: Maybe<Scalars['String']>;
  coverImagePublicId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  imagePublicId?: Maybe<Scalars['String']>;
  income?: Maybe<Scalars['Float']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  platforms?: Maybe<PlatformUpdateManyWithoutOwnerInput>;
  staffs?: Maybe<StaffUpdateManyWithoutUserInput>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  walletId?: Maybe<Scalars['String']>;
};

export type UserUpdateWithoutPlatformsDataInput = {
  addresses?: Maybe<AddressUpdateManyWithoutUserInput>;
  cards?: Maybe<CardUpdateManyWithoutUserInput>;
  companies?: Maybe<CompanyUpdateManyWithoutOwnerInput>;
  contacts?: Maybe<ContactUpdateManyWithoutUserInput>;
  coverImage?: Maybe<Scalars['String']>;
  coverImagePublicId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerUpdateManyWithoutUserInput>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  imagePublicId?: Maybe<Scalars['String']>;
  income?: Maybe<Scalars['Float']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  staffs?: Maybe<StaffUpdateManyWithoutUserInput>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  walletId?: Maybe<Scalars['String']>;
};

export type UserUpdateWithoutStaffsDataInput = {
  addresses?: Maybe<AddressUpdateManyWithoutUserInput>;
  cards?: Maybe<CardUpdateManyWithoutUserInput>;
  companies?: Maybe<CompanyUpdateManyWithoutOwnerInput>;
  contacts?: Maybe<ContactUpdateManyWithoutUserInput>;
  coverImage?: Maybe<Scalars['String']>;
  coverImagePublicId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customers?: Maybe<CustomerUpdateManyWithoutUserInput>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  googleId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  imagePublicId?: Maybe<Scalars['String']>;
  income?: Maybe<Scalars['Float']>;
  isOnline?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  platforms?: Maybe<PlatformUpdateManyWithoutOwnerInput>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  walletId?: Maybe<Scalars['String']>;
};

export type UserUpsertWithoutAddressesInput = {
  create: UserCreateWithoutAddressesInput;
  update: UserUpdateWithoutAddressesDataInput;
};

export type UserUpsertWithoutCardsInput = {
  create: UserCreateWithoutCardsInput;
  update: UserUpdateWithoutCardsDataInput;
};

export type UserUpsertWithoutCompaniesInput = {
  create: UserCreateWithoutCompaniesInput;
  update: UserUpdateWithoutCompaniesDataInput;
};

export type UserUpsertWithoutContactsInput = {
  create: UserCreateWithoutContactsInput;
  update: UserUpdateWithoutContactsDataInput;
};

export type UserUpsertWithoutCustomersInput = {
  create: UserCreateWithoutCustomersInput;
  update: UserUpdateWithoutCustomersDataInput;
};

export type UserUpsertWithoutPlatformsInput = {
  create: UserCreateWithoutPlatformsInput;
  update: UserUpdateWithoutPlatformsDataInput;
};

export type UserUpsertWithoutStaffsInput = {
  create: UserCreateWithoutStaffsInput;
  update: UserUpdateWithoutStaffsDataInput;
};

export type UserWhereInput = {
  addresses?: Maybe<AddressFilter>;
  AND?: Maybe<Array<UserWhereInput>>;
  cards?: Maybe<CardFilter>;
  companies?: Maybe<CompanyFilter>;
  contacts?: Maybe<ContactFilter>;
  coverImage?: Maybe<NullableStringFilter>;
  coverImagePublicId?: Maybe<NullableStringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  customers?: Maybe<CustomerFilter>;
  email?: Maybe<StringFilter>;
  firstName?: Maybe<NullableStringFilter>;
  googleId?: Maybe<NullableStringFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<NullableStringFilter>;
  imagePublicId?: Maybe<NullableStringFilter>;
  income?: Maybe<NullableFloatFilter>;
  isOnline?: Maybe<BooleanFilter>;
  lastName?: Maybe<NullableStringFilter>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  platforms?: Maybe<PlatformFilter>;
  staffs?: Maybe<StaffFilter>;
  token?: Maybe<NullableStringFilter>;
  username?: Maybe<NullableStringFilter>;
  walletId?: Maybe<NullableStringFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type Vendors = {
  __typename?: 'Vendors';
  hasMore: Scalars['Boolean'];
  items?: Maybe<Array<Company>>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  )> }
);

export type LoginMutationVariables = {
  idToken: Scalars['String'];
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    )> }
  )> }
);

export type SignupMutationVariables = {
  idToken: Scalars['String'];
};


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup: (
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    )> }
  ) }
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type SelectCompanyMutationVariables = {
  companyId: Scalars['Int'];
};


export type SelectCompanyMutation = (
  { __typename?: 'Mutation' }
  & { selectCompany?: Maybe<(
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    )> }
  )> }
);

export type SelectPlatformMutationVariables = {
  platformId: Scalars['Int'];
};


export type SelectPlatformMutation = (
  { __typename?: 'Mutation' }
  & { selectPlatform?: Maybe<(
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    )> }
  )> }
);

export type AddressFieldsFragment = (
  { __typename?: 'Address' }
  & Pick<Address, 'id' | 'type' | 'name' | 'json' | 'info' | 'companyId' | 'userId'>
);

export type AddressFragment = (
  { __typename?: 'Address' }
  & { company?: Maybe<(
    { __typename?: 'Company' }
    & CompanyFieldsFragment
  )>, user?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
  & AddressFieldsFragment
);

export type FindOneAddressQueryVariables = {
  where: AddressWhereUniqueInput;
};


export type FindOneAddressQuery = (
  { __typename?: 'Query' }
  & { findOneAddress?: Maybe<(
    { __typename?: 'Address' }
    & AddressFragment
  )> }
);

export type FindManyAddressQueryVariables = {
  where?: Maybe<AddressWhereInput>;
  orderBy?: Maybe<AddressOrderByInput>;
  cursor?: Maybe<AddressWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyAddressQuery = (
  { __typename?: 'Query' }
  & { findManyAddress?: Maybe<Array<(
    { __typename?: 'Address' }
    & AddressFragment
  )>> }
);

export type FindManyAddressCountQueryVariables = {
  where?: Maybe<AddressWhereInput>;
  orderBy?: Maybe<AddressOrderByInput>;
  cursor?: Maybe<AddressWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyAddressCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyAddressCount'>
);

export type CreateOneAddressMutationVariables = {
  data: AddressCreateInput;
};


export type CreateOneAddressMutation = (
  { __typename?: 'Mutation' }
  & { createOneAddress: (
    { __typename?: 'Address' }
    & AddressFragment
  ) }
);

export type UpdateOneAddressMutationVariables = {
  where: AddressWhereUniqueInput;
  data: AddressUpdateInput;
};


export type UpdateOneAddressMutation = (
  { __typename?: 'Mutation' }
  & { updateOneAddress: (
    { __typename?: 'Address' }
    & AddressFragment
  ) }
);

export type DeleteOneAddressMutationVariables = {
  where: AddressWhereUniqueInput;
};


export type DeleteOneAddressMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneAddress?: Maybe<(
    { __typename?: 'Address' }
    & Pick<Address, 'id'>
  )> }
);

export type DeleteManyAddressMutationVariables = {
  where?: Maybe<AddressWhereInput>;
};


export type DeleteManyAddressMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyAddress: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyAddressMutationVariables = {
  where?: Maybe<AddressWhereInput>;
  data: AddressUpdateManyMutationInput;
};


export type UpdateManyAddressMutation = (
  { __typename?: 'Mutation' }
  & { updateManyAddress: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type CardFieldsFragment = (
  { __typename?: 'Card' }
  & Pick<Card, 'id' | 'type' | 'cardType' | 'name' | 'lastFourDigit' | 'userId'>
);

export type CardFragment = (
  { __typename?: 'Card' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
  & CardFieldsFragment
);

export type FindOneCardQueryVariables = {
  where: CardWhereUniqueInput;
};


export type FindOneCardQuery = (
  { __typename?: 'Query' }
  & { findOneCard?: Maybe<(
    { __typename?: 'Card' }
    & CardFragment
  )> }
);

export type FindManyCardQueryVariables = {
  where?: Maybe<CardWhereInput>;
  orderBy?: Maybe<CardOrderByInput>;
  cursor?: Maybe<CardWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyCardQuery = (
  { __typename?: 'Query' }
  & { findManyCard?: Maybe<Array<(
    { __typename?: 'Card' }
    & CardFragment
  )>> }
);

export type FindManyCardCountQueryVariables = {
  where?: Maybe<CardWhereInput>;
  orderBy?: Maybe<CardOrderByInput>;
  cursor?: Maybe<CardWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyCardCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyCardCount'>
);

export type CreateOneCardMutationVariables = {
  data: CardCreateInput;
};


export type CreateOneCardMutation = (
  { __typename?: 'Mutation' }
  & { createOneCard: (
    { __typename?: 'Card' }
    & CardFragment
  ) }
);

export type UpdateOneCardMutationVariables = {
  where: CardWhereUniqueInput;
  data: CardUpdateInput;
};


export type UpdateOneCardMutation = (
  { __typename?: 'Mutation' }
  & { updateOneCard: (
    { __typename?: 'Card' }
    & CardFragment
  ) }
);

export type DeleteOneCardMutationVariables = {
  where: CardWhereUniqueInput;
};


export type DeleteOneCardMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneCard?: Maybe<(
    { __typename?: 'Card' }
    & Pick<Card, 'id'>
  )> }
);

export type DeleteManyCardMutationVariables = {
  where?: Maybe<CardWhereInput>;
};


export type DeleteManyCardMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyCard: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyCardMutationVariables = {
  where?: Maybe<CardWhereInput>;
  data: CardUpdateManyMutationInput;
};


export type UpdateManyCardMutation = (
  { __typename?: 'Mutation' }
  & { updateManyCard: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type CategoryFieldsFragment = (
  { __typename?: 'Category' }
  & Pick<Category, 'type' | 'id' | 'platformId' | 'slug' | 'name' | 'icon' | 'parentId'>
);

export type CategoryFragment = (
  { __typename?: 'Category' }
  & { platform: (
    { __typename?: 'Platform' }
    & PlatformFieldsFragment
  ), parent?: Maybe<(
    { __typename?: 'Category' }
    & CategoryFieldsFragment
  )> }
  & CategoryFieldsFragment
);

export type FindOneCategoryQueryVariables = {
  where: CategoryWhereUniqueInput;
};


export type FindOneCategoryQuery = (
  { __typename?: 'Query' }
  & { findOneCategory?: Maybe<(
    { __typename?: 'Category' }
    & CategoryFragment
  )> }
);

export type FindManyCategoryQueryVariables = {
  where?: Maybe<CategoryWhereInput>;
  orderBy?: Maybe<CategoryOrderByInput>;
  cursor?: Maybe<CategoryWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyCategoryQuery = (
  { __typename?: 'Query' }
  & { findManyCategory?: Maybe<Array<(
    { __typename?: 'Category' }
    & CategoryFragment
  )>> }
);

export type FindManyCategoryCountQueryVariables = {
  where?: Maybe<CategoryWhereInput>;
  orderBy?: Maybe<CategoryOrderByInput>;
  cursor?: Maybe<CategoryWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyCategoryCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyCategoryCount'>
);

export type CreateOneCategoryMutationVariables = {
  data: CategoryCreateInput;
};


export type CreateOneCategoryMutation = (
  { __typename?: 'Mutation' }
  & { createOneCategory: (
    { __typename?: 'Category' }
    & CategoryFragment
  ) }
);

export type UpdateOneCategoryMutationVariables = {
  where: CategoryWhereUniqueInput;
  data: CategoryUpdateInput;
};


export type UpdateOneCategoryMutation = (
  { __typename?: 'Mutation' }
  & { updateOneCategory: (
    { __typename?: 'Category' }
    & CategoryFragment
  ) }
);

export type DeleteOneCategoryMutationVariables = {
  where: CategoryWhereUniqueInput;
};


export type DeleteOneCategoryMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneCategory?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id'>
  )> }
);

export type DeleteManyCategoryMutationVariables = {
  where?: Maybe<CategoryWhereInput>;
};


export type DeleteManyCategoryMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyCategory: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyCategoryMutationVariables = {
  where?: Maybe<CategoryWhereInput>;
  data: CategoryUpdateManyMutationInput;
};


export type UpdateManyCategoryMutation = (
  { __typename?: 'Mutation' }
  & { updateManyCategory: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type CompanyFieldsFragment = (
  { __typename?: 'Company' }
  & Pick<Company, 'id' | 'name' | 'description' | 'previewUrl' | 'thumbnailUrl' | 'platformSlug' | 'addressId' | 'contactId' | 'platformId' | 'slug' | 'ownerId' | 'deliveryDetailId' | 'promotion' | 'createdAt' | 'updatedAt'>
);

export type CompanyFragment = (
  { __typename?: 'Company' }
  & { address?: Maybe<(
    { __typename?: 'Address' }
    & AddressFieldsFragment
  )>, contact?: Maybe<(
    { __typename?: 'Contact' }
    & ContactFieldsFragment
  )>, platform: (
    { __typename?: 'Platform' }
    & PlatformFieldsFragment
  ), owner?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )>, deliveryDetail: (
    { __typename?: 'DeliveryDetail' }
    & DeliveryDetailFieldsFragment
  ) }
  & CompanyFieldsFragment
);

export type FindOneCompanyQueryVariables = {
  where: CompanyWhereUniqueInput;
};


export type FindOneCompanyQuery = (
  { __typename?: 'Query' }
  & { findOneCompany?: Maybe<(
    { __typename?: 'Company' }
    & CompanyFragment
  )> }
);

export type FindManyCompanyQueryVariables = {
  where?: Maybe<CompanyWhereInput>;
  orderBy?: Maybe<CompanyOrderByInput>;
  cursor?: Maybe<CompanyWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyCompanyQuery = (
  { __typename?: 'Query' }
  & { findManyCompany?: Maybe<Array<(
    { __typename?: 'Company' }
    & CompanyFragment
  )>> }
);

export type FindManyCompanyCountQueryVariables = {
  where?: Maybe<CompanyWhereInput>;
  orderBy?: Maybe<CompanyOrderByInput>;
  cursor?: Maybe<CompanyWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyCompanyCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyCompanyCount'>
);

export type CreateOneCompanyMutationVariables = {
  data: CompanyCreateInput;
};


export type CreateOneCompanyMutation = (
  { __typename?: 'Mutation' }
  & { createOneCompany: (
    { __typename?: 'Company' }
    & CompanyFragment
  ) }
);

export type UpdateOneCompanyMutationVariables = {
  where: CompanyWhereUniqueInput;
  data: CompanyUpdateInput;
};


export type UpdateOneCompanyMutation = (
  { __typename?: 'Mutation' }
  & { updateOneCompany: (
    { __typename?: 'Company' }
    & CompanyFragment
  ) }
);

export type DeleteOneCompanyMutationVariables = {
  where: CompanyWhereUniqueInput;
};


export type DeleteOneCompanyMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneCompany?: Maybe<(
    { __typename?: 'Company' }
    & Pick<Company, 'id'>
  )> }
);

export type DeleteManyCompanyMutationVariables = {
  where?: Maybe<CompanyWhereInput>;
};


export type DeleteManyCompanyMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyCompany: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyCompanyMutationVariables = {
  where?: Maybe<CompanyWhereInput>;
  data: CompanyUpdateManyMutationInput;
};


export type UpdateManyCompanyMutation = (
  { __typename?: 'Mutation' }
  & { updateManyCompany: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type ContactFieldsFragment = (
  { __typename?: 'Contact' }
  & Pick<Contact, 'id' | 'type' | 'number' | 'companyId' | 'userId'>
);

export type ContactFragment = (
  { __typename?: 'Contact' }
  & { company?: Maybe<(
    { __typename?: 'Company' }
    & CompanyFieldsFragment
  )>, user?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
  & ContactFieldsFragment
);

export type FindOneContactQueryVariables = {
  where: ContactWhereUniqueInput;
};


export type FindOneContactQuery = (
  { __typename?: 'Query' }
  & { findOneContact?: Maybe<(
    { __typename?: 'Contact' }
    & ContactFragment
  )> }
);

export type FindManyContactQueryVariables = {
  where?: Maybe<ContactWhereInput>;
  orderBy?: Maybe<ContactOrderByInput>;
  cursor?: Maybe<ContactWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyContactQuery = (
  { __typename?: 'Query' }
  & { findManyContact?: Maybe<Array<(
    { __typename?: 'Contact' }
    & ContactFragment
  )>> }
);

export type FindManyContactCountQueryVariables = {
  where?: Maybe<ContactWhereInput>;
  orderBy?: Maybe<ContactOrderByInput>;
  cursor?: Maybe<ContactWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyContactCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyContactCount'>
);

export type CreateOneContactMutationVariables = {
  data: ContactCreateInput;
};


export type CreateOneContactMutation = (
  { __typename?: 'Mutation' }
  & { createOneContact: (
    { __typename?: 'Contact' }
    & ContactFragment
  ) }
);

export type UpdateOneContactMutationVariables = {
  where: ContactWhereUniqueInput;
  data: ContactUpdateInput;
};


export type UpdateOneContactMutation = (
  { __typename?: 'Mutation' }
  & { updateOneContact: (
    { __typename?: 'Contact' }
    & ContactFragment
  ) }
);

export type DeleteOneContactMutationVariables = {
  where: ContactWhereUniqueInput;
};


export type DeleteOneContactMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneContact?: Maybe<(
    { __typename?: 'Contact' }
    & Pick<Contact, 'id'>
  )> }
);

export type DeleteManyContactMutationVariables = {
  where?: Maybe<ContactWhereInput>;
};


export type DeleteManyContactMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyContact: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyContactMutationVariables = {
  where?: Maybe<ContactWhereInput>;
  data: ContactUpdateManyMutationInput;
};


export type UpdateManyContactMutation = (
  { __typename?: 'Mutation' }
  & { updateManyContact: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type CountryFieldsFragment = (
  { __typename?: 'Country' }
  & Pick<Country, 'id' | 'code' | 'name' | 'currency'>
);

export type CountryFragment = (
  { __typename?: 'Country' }
  & CountryFieldsFragment
);

export type FindOneCountryQueryVariables = {
  where: CountryWhereUniqueInput;
};


export type FindOneCountryQuery = (
  { __typename?: 'Query' }
  & { findOneCountry?: Maybe<(
    { __typename?: 'Country' }
    & CountryFragment
  )> }
);

export type FindManyCountryQueryVariables = {
  where?: Maybe<CountryWhereInput>;
  orderBy?: Maybe<CountryOrderByInput>;
  cursor?: Maybe<CountryWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyCountryQuery = (
  { __typename?: 'Query' }
  & { findManyCountry?: Maybe<Array<(
    { __typename?: 'Country' }
    & CountryFragment
  )>> }
);

export type FindManyCountryCountQueryVariables = {
  where?: Maybe<CountryWhereInput>;
  orderBy?: Maybe<CountryOrderByInput>;
  cursor?: Maybe<CountryWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyCountryCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyCountryCount'>
);

export type CreateOneCountryMutationVariables = {
  data: CountryCreateInput;
};


export type CreateOneCountryMutation = (
  { __typename?: 'Mutation' }
  & { createOneCountry: (
    { __typename?: 'Country' }
    & CountryFragment
  ) }
);

export type UpdateOneCountryMutationVariables = {
  where: CountryWhereUniqueInput;
  data: CountryUpdateInput;
};


export type UpdateOneCountryMutation = (
  { __typename?: 'Mutation' }
  & { updateOneCountry: (
    { __typename?: 'Country' }
    & CountryFragment
  ) }
);

export type DeleteOneCountryMutationVariables = {
  where: CountryWhereUniqueInput;
};


export type DeleteOneCountryMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneCountry?: Maybe<(
    { __typename?: 'Country' }
    & Pick<Country, 'id'>
  )> }
);

export type DeleteManyCountryMutationVariables = {
  where?: Maybe<CountryWhereInput>;
};


export type DeleteManyCountryMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyCountry: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyCountryMutationVariables = {
  where?: Maybe<CountryWhereInput>;
  data: CountryUpdateManyMutationInput;
};


export type UpdateManyCountryMutation = (
  { __typename?: 'Mutation' }
  & { updateManyCountry: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type CouponFieldsFragment = (
  { __typename?: 'Coupon' }
  & Pick<Coupon, 'id' | 'name' | 'code' | 'image' | 'discountInPercent' | 'numberOfCoupon' | 'numberOfUsedCoupon'>
);

export type CouponFragment = (
  { __typename?: 'Coupon' }
  & CouponFieldsFragment
);

export type FindOneCouponQueryVariables = {
  where: CouponWhereUniqueInput;
};


export type FindOneCouponQuery = (
  { __typename?: 'Query' }
  & { findOneCoupon?: Maybe<(
    { __typename?: 'Coupon' }
    & CouponFragment
  )> }
);

export type FindManyCouponQueryVariables = {
  where?: Maybe<CouponWhereInput>;
  orderBy?: Maybe<CouponOrderByInput>;
  cursor?: Maybe<CouponWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyCouponQuery = (
  { __typename?: 'Query' }
  & { findManyCoupon?: Maybe<Array<(
    { __typename?: 'Coupon' }
    & CouponFragment
  )>> }
);

export type FindManyCouponCountQueryVariables = {
  where?: Maybe<CouponWhereInput>;
  orderBy?: Maybe<CouponOrderByInput>;
  cursor?: Maybe<CouponWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyCouponCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyCouponCount'>
);

export type CreateOneCouponMutationVariables = {
  data: CouponCreateInput;
};


export type CreateOneCouponMutation = (
  { __typename?: 'Mutation' }
  & { createOneCoupon: (
    { __typename?: 'Coupon' }
    & CouponFragment
  ) }
);

export type UpdateOneCouponMutationVariables = {
  where: CouponWhereUniqueInput;
  data: CouponUpdateInput;
};


export type UpdateOneCouponMutation = (
  { __typename?: 'Mutation' }
  & { updateOneCoupon: (
    { __typename?: 'Coupon' }
    & CouponFragment
  ) }
);

export type DeleteOneCouponMutationVariables = {
  where: CouponWhereUniqueInput;
};


export type DeleteOneCouponMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneCoupon?: Maybe<(
    { __typename?: 'Coupon' }
    & Pick<Coupon, 'id'>
  )> }
);

export type DeleteManyCouponMutationVariables = {
  where?: Maybe<CouponWhereInput>;
};


export type DeleteManyCouponMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyCoupon: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyCouponMutationVariables = {
  where?: Maybe<CouponWhereInput>;
  data: CouponUpdateManyMutationInput;
};


export type UpdateManyCouponMutation = (
  { __typename?: 'Mutation' }
  & { updateManyCoupon: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type CustomerFieldsFragment = (
  { __typename?: 'Customer' }
  & Pick<Customer, 'hasNewsLetter' | 'id' | 'lastName' | 'email' | 'address' | 'zipcode' | 'city' | 'avatar' | 'birthday' | 'firstSeen' | 'lastSeen' | 'hasOrdered' | 'latestPurchase' | 'firstName' | 'groups' | 'nbOrders' | 'companyId' | 'userId' | 'image' | 'totalOrder' | 'totalSpent' | 'createdAt'>
);

export type CustomerFragment = (
  { __typename?: 'Customer' }
  & { company?: Maybe<(
    { __typename?: 'Company' }
    & CompanyFieldsFragment
  )>, user: (
    { __typename?: 'User' }
    & UserFieldsFragment
  ) }
  & CustomerFieldsFragment
);

export type FindOneCustomerQueryVariables = {
  where: CustomerWhereUniqueInput;
};


export type FindOneCustomerQuery = (
  { __typename?: 'Query' }
  & { findOneCustomer?: Maybe<(
    { __typename?: 'Customer' }
    & CustomerFragment
  )> }
);

export type FindManyCustomerQueryVariables = {
  where?: Maybe<CustomerWhereInput>;
  orderBy?: Maybe<CustomerOrderByInput>;
  cursor?: Maybe<CustomerWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyCustomerQuery = (
  { __typename?: 'Query' }
  & { findManyCustomer?: Maybe<Array<(
    { __typename?: 'Customer' }
    & CustomerFragment
  )>> }
);

export type FindManyCustomerCountQueryVariables = {
  where?: Maybe<CustomerWhereInput>;
  orderBy?: Maybe<CustomerOrderByInput>;
  cursor?: Maybe<CustomerWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyCustomerCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyCustomerCount'>
);

export type CreateOneCustomerMutationVariables = {
  data: CustomerCreateInput;
};


export type CreateOneCustomerMutation = (
  { __typename?: 'Mutation' }
  & { createOneCustomer: (
    { __typename?: 'Customer' }
    & CustomerFragment
  ) }
);

export type UpdateOneCustomerMutationVariables = {
  where: CustomerWhereUniqueInput;
  data: CustomerUpdateInput;
};


export type UpdateOneCustomerMutation = (
  { __typename?: 'Mutation' }
  & { updateOneCustomer: (
    { __typename?: 'Customer' }
    & CustomerFragment
  ) }
);

export type DeleteOneCustomerMutationVariables = {
  where: CustomerWhereUniqueInput;
};


export type DeleteOneCustomerMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneCustomer?: Maybe<(
    { __typename?: 'Customer' }
    & Pick<Customer, 'id'>
  )> }
);

export type DeleteManyCustomerMutationVariables = {
  where?: Maybe<CustomerWhereInput>;
};


export type DeleteManyCustomerMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyCustomer: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyCustomerMutationVariables = {
  where?: Maybe<CustomerWhereInput>;
  data: CustomerUpdateManyMutationInput;
};


export type UpdateManyCustomerMutation = (
  { __typename?: 'Mutation' }
  & { updateManyCustomer: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type DeliveryDetailFieldsFragment = (
  { __typename?: 'DeliveryDetail' }
  & Pick<DeliveryDetail, 'id' | 'isFree' | 'charge' | 'minimumOrder' | 'companyId'>
);

export type DeliveryDetailFragment = (
  { __typename?: 'DeliveryDetail' }
  & { company?: Maybe<(
    { __typename?: 'Company' }
    & CompanyFieldsFragment
  )> }
  & DeliveryDetailFieldsFragment
);

export type FindOneDeliveryDetailQueryVariables = {
  where: DeliveryDetailWhereUniqueInput;
};


export type FindOneDeliveryDetailQuery = (
  { __typename?: 'Query' }
  & { findOneDeliveryDetail?: Maybe<(
    { __typename?: 'DeliveryDetail' }
    & DeliveryDetailFragment
  )> }
);

export type FindManyDeliveryDetailQueryVariables = {
  where?: Maybe<DeliveryDetailWhereInput>;
  orderBy?: Maybe<DeliveryDetailOrderByInput>;
  cursor?: Maybe<DeliveryDetailWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyDeliveryDetailQuery = (
  { __typename?: 'Query' }
  & { findManyDeliveryDetail?: Maybe<Array<(
    { __typename?: 'DeliveryDetail' }
    & DeliveryDetailFragment
  )>> }
);

export type FindManyDeliveryDetailCountQueryVariables = {
  where?: Maybe<DeliveryDetailWhereInput>;
  orderBy?: Maybe<DeliveryDetailOrderByInput>;
  cursor?: Maybe<DeliveryDetailWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyDeliveryDetailCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyDeliveryDetailCount'>
);

export type CreateOneDeliveryDetailMutationVariables = {
  data: DeliveryDetailCreateInput;
};


export type CreateOneDeliveryDetailMutation = (
  { __typename?: 'Mutation' }
  & { createOneDeliveryDetail: (
    { __typename?: 'DeliveryDetail' }
    & DeliveryDetailFragment
  ) }
);

export type UpdateOneDeliveryDetailMutationVariables = {
  where: DeliveryDetailWhereUniqueInput;
  data: DeliveryDetailUpdateInput;
};


export type UpdateOneDeliveryDetailMutation = (
  { __typename?: 'Mutation' }
  & { updateOneDeliveryDetail: (
    { __typename?: 'DeliveryDetail' }
    & DeliveryDetailFragment
  ) }
);

export type DeleteOneDeliveryDetailMutationVariables = {
  where: DeliveryDetailWhereUniqueInput;
};


export type DeleteOneDeliveryDetailMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneDeliveryDetail?: Maybe<(
    { __typename?: 'DeliveryDetail' }
    & Pick<DeliveryDetail, 'id'>
  )> }
);

export type DeleteManyDeliveryDetailMutationVariables = {
  where?: Maybe<DeliveryDetailWhereInput>;
};


export type DeleteManyDeliveryDetailMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyDeliveryDetail: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyDeliveryDetailMutationVariables = {
  where?: Maybe<DeliveryDetailWhereInput>;
  data: DeliveryDetailUpdateManyMutationInput;
};


export type UpdateManyDeliveryDetailMutation = (
  { __typename?: 'Mutation' }
  & { updateManyDeliveryDetail: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type InvoiceFieldsFragment = (
  { __typename?: 'Invoice' }
  & Pick<Invoice, 'subtotal' | 'id' | 'orderId' | 'customerId' | 'createdAt' | 'deliveryFees' | 'taxRate' | 'taxes' | 'total' | 'companyId'>
);

export type InvoiceFragment = (
  { __typename?: 'Invoice' }
  & { order: (
    { __typename?: 'Order' }
    & OrderFieldsFragment
  ), customer: (
    { __typename?: 'Customer' }
    & CustomerFieldsFragment
  ), company?: Maybe<(
    { __typename?: 'Company' }
    & CompanyFieldsFragment
  )> }
  & InvoiceFieldsFragment
);

export type FindOneInvoiceQueryVariables = {
  where: InvoiceWhereUniqueInput;
};


export type FindOneInvoiceQuery = (
  { __typename?: 'Query' }
  & { findOneInvoice?: Maybe<(
    { __typename?: 'Invoice' }
    & InvoiceFragment
  )> }
);

export type FindManyInvoiceQueryVariables = {
  where?: Maybe<InvoiceWhereInput>;
  orderBy?: Maybe<InvoiceOrderByInput>;
  cursor?: Maybe<InvoiceWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyInvoiceQuery = (
  { __typename?: 'Query' }
  & { findManyInvoice?: Maybe<Array<(
    { __typename?: 'Invoice' }
    & InvoiceFragment
  )>> }
);

export type FindManyInvoiceCountQueryVariables = {
  where?: Maybe<InvoiceWhereInput>;
  orderBy?: Maybe<InvoiceOrderByInput>;
  cursor?: Maybe<InvoiceWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyInvoiceCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyInvoiceCount'>
);

export type CreateOneInvoiceMutationVariables = {
  data: InvoiceCreateInput;
};


export type CreateOneInvoiceMutation = (
  { __typename?: 'Mutation' }
  & { createOneInvoice: (
    { __typename?: 'Invoice' }
    & InvoiceFragment
  ) }
);

export type UpdateOneInvoiceMutationVariables = {
  where: InvoiceWhereUniqueInput;
  data: InvoiceUpdateInput;
};


export type UpdateOneInvoiceMutation = (
  { __typename?: 'Mutation' }
  & { updateOneInvoice: (
    { __typename?: 'Invoice' }
    & InvoiceFragment
  ) }
);

export type DeleteOneInvoiceMutationVariables = {
  where: InvoiceWhereUniqueInput;
};


export type DeleteOneInvoiceMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneInvoice?: Maybe<(
    { __typename?: 'Invoice' }
    & Pick<Invoice, 'id'>
  )> }
);

export type DeleteManyInvoiceMutationVariables = {
  where?: Maybe<InvoiceWhereInput>;
};


export type DeleteManyInvoiceMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyInvoice: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyInvoiceMutationVariables = {
  where?: Maybe<InvoiceWhereInput>;
  data: InvoiceUpdateManyMutationInput;
};


export type UpdateManyInvoiceMutation = (
  { __typename?: 'Mutation' }
  & { updateManyInvoice: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type OrderFieldsFragment = (
  { __typename?: 'Order' }
  & Pick<Order, 'id' | 'customerId' | 'subtotal' | 'deliveryFees' | 'taxRate' | 'taxes' | 'total' | 'status' | 'returned' | 'reference' | 'companyId' | 'deliveryTime' | 'createdAt' | 'paymentMethod' | 'deliveryAddressId' | 'contactId'>
);

export type OrderFragment = (
  { __typename?: 'Order' }
  & { customer?: Maybe<(
    { __typename?: 'Customer' }
    & CustomerFieldsFragment
  )>, company?: Maybe<(
    { __typename?: 'Company' }
    & CompanyFieldsFragment
  )>, deliveryAdress: (
    { __typename?: 'Address' }
    & AddressFieldsFragment
  ), contact?: Maybe<(
    { __typename?: 'Contact' }
    & ContactFieldsFragment
  )> }
  & OrderFieldsFragment
);

export type FindOneOrderQueryVariables = {
  where: OrderWhereUniqueInput;
};


export type FindOneOrderQuery = (
  { __typename?: 'Query' }
  & { findOneOrder?: Maybe<(
    { __typename?: 'Order' }
    & OrderFragment
  )> }
);

export type FindManyOrderQueryVariables = {
  where?: Maybe<OrderWhereInput>;
  orderBy?: Maybe<OrderOrderByInput>;
  cursor?: Maybe<OrderWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyOrderQuery = (
  { __typename?: 'Query' }
  & { findManyOrder?: Maybe<Array<(
    { __typename?: 'Order' }
    & OrderFragment
  )>> }
);

export type FindManyOrderCountQueryVariables = {
  where?: Maybe<OrderWhereInput>;
  orderBy?: Maybe<OrderOrderByInput>;
  cursor?: Maybe<OrderWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyOrderCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyOrderCount'>
);

export type CreateOneOrderMutationVariables = {
  data: OrderCreateInput;
};


export type CreateOneOrderMutation = (
  { __typename?: 'Mutation' }
  & { createOneOrder: (
    { __typename?: 'Order' }
    & OrderFragment
  ) }
);

export type UpdateOneOrderMutationVariables = {
  where: OrderWhereUniqueInput;
  data: OrderUpdateInput;
};


export type UpdateOneOrderMutation = (
  { __typename?: 'Mutation' }
  & { updateOneOrder: (
    { __typename?: 'Order' }
    & OrderFragment
  ) }
);

export type DeleteOneOrderMutationVariables = {
  where: OrderWhereUniqueInput;
};


export type DeleteOneOrderMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneOrder?: Maybe<(
    { __typename?: 'Order' }
    & Pick<Order, 'id'>
  )> }
);

export type DeleteManyOrderMutationVariables = {
  where?: Maybe<OrderWhereInput>;
};


export type DeleteManyOrderMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyOrder: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyOrderMutationVariables = {
  where?: Maybe<OrderWhereInput>;
  data: OrderUpdateManyMutationInput;
};


export type UpdateManyOrderMutation = (
  { __typename?: 'Mutation' }
  & { updateManyOrder: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type OrderItemFieldsFragment = (
  { __typename?: 'OrderItem' }
  & Pick<OrderItem, 'id' | 'orderId' | 'quantity' | 'name' | 'weight' | 'price' | 'productId' | 'image'>
);

export type OrderItemFragment = (
  { __typename?: 'OrderItem' }
  & { order: (
    { __typename?: 'Order' }
    & OrderFieldsFragment
  ), product: (
    { __typename?: 'Product' }
    & ProductFieldsFragment
  ) }
  & OrderItemFieldsFragment
);

export type FindOneOrderItemQueryVariables = {
  where: OrderItemWhereUniqueInput;
};


export type FindOneOrderItemQuery = (
  { __typename?: 'Query' }
  & { findOneOrderItem?: Maybe<(
    { __typename?: 'OrderItem' }
    & OrderItemFragment
  )> }
);

export type FindManyOrderItemQueryVariables = {
  where?: Maybe<OrderItemWhereInput>;
  orderBy?: Maybe<OrderItemOrderByInput>;
  cursor?: Maybe<OrderItemWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyOrderItemQuery = (
  { __typename?: 'Query' }
  & { findManyOrderItem?: Maybe<Array<(
    { __typename?: 'OrderItem' }
    & OrderItemFragment
  )>> }
);

export type FindManyOrderItemCountQueryVariables = {
  where?: Maybe<OrderItemWhereInput>;
  orderBy?: Maybe<OrderItemOrderByInput>;
  cursor?: Maybe<OrderItemWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyOrderItemCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyOrderItemCount'>
);

export type CreateOneOrderItemMutationVariables = {
  data: OrderItemCreateInput;
};


export type CreateOneOrderItemMutation = (
  { __typename?: 'Mutation' }
  & { createOneOrderItem: (
    { __typename?: 'OrderItem' }
    & OrderItemFragment
  ) }
);

export type UpdateOneOrderItemMutationVariables = {
  where: OrderItemWhereUniqueInput;
  data: OrderItemUpdateInput;
};


export type UpdateOneOrderItemMutation = (
  { __typename?: 'Mutation' }
  & { updateOneOrderItem: (
    { __typename?: 'OrderItem' }
    & OrderItemFragment
  ) }
);

export type DeleteOneOrderItemMutationVariables = {
  where: OrderItemWhereUniqueInput;
};


export type DeleteOneOrderItemMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneOrderItem?: Maybe<(
    { __typename?: 'OrderItem' }
    & Pick<OrderItem, 'id'>
  )> }
);

export type DeleteManyOrderItemMutationVariables = {
  where?: Maybe<OrderItemWhereInput>;
};


export type DeleteManyOrderItemMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyOrderItem: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyOrderItemMutationVariables = {
  where?: Maybe<OrderItemWhereInput>;
  data: OrderItemUpdateManyMutationInput;
};


export type UpdateManyOrderItemMutation = (
  { __typename?: 'Mutation' }
  & { updateManyOrderItem: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type PlatformFieldsFragment = (
  { __typename?: 'Platform' }
  & Pick<Platform, 'id' | 'bannerImg' | 'slug' | 'ownerId' | 'description' | 'name' | 'platformType' | 'countryId' | 'taxRate' | 'createdAt'>
);

export type PlatformFragment = (
  { __typename?: 'Platform' }
  & { owner: (
    { __typename?: 'User' }
    & UserFieldsFragment
  ), country?: Maybe<(
    { __typename?: 'Country' }
    & CountryFieldsFragment
  )> }
  & PlatformFieldsFragment
);

export type FindOnePlatformQueryVariables = {
  where: PlatformWhereUniqueInput;
};


export type FindOnePlatformQuery = (
  { __typename?: 'Query' }
  & { findOnePlatform?: Maybe<(
    { __typename?: 'Platform' }
    & PlatformFragment
  )> }
);

export type FindManyPlatformQueryVariables = {
  where?: Maybe<PlatformWhereInput>;
  orderBy?: Maybe<PlatformOrderByInput>;
  cursor?: Maybe<PlatformWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyPlatformQuery = (
  { __typename?: 'Query' }
  & { findManyPlatform?: Maybe<Array<(
    { __typename?: 'Platform' }
    & PlatformFragment
  )>> }
);

export type FindManyPlatformCountQueryVariables = {
  where?: Maybe<PlatformWhereInput>;
  orderBy?: Maybe<PlatformOrderByInput>;
  cursor?: Maybe<PlatformWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyPlatformCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyPlatformCount'>
);

export type CreateOnePlatformMutationVariables = {
  data: PlatformCreateInput;
};


export type CreateOnePlatformMutation = (
  { __typename?: 'Mutation' }
  & { createOnePlatform: (
    { __typename?: 'Platform' }
    & PlatformFragment
  ) }
);

export type UpdateOnePlatformMutationVariables = {
  where: PlatformWhereUniqueInput;
  data: PlatformUpdateInput;
};


export type UpdateOnePlatformMutation = (
  { __typename?: 'Mutation' }
  & { updateOnePlatform: (
    { __typename?: 'Platform' }
    & PlatformFragment
  ) }
);

export type DeleteOnePlatformMutationVariables = {
  where: PlatformWhereUniqueInput;
};


export type DeleteOnePlatformMutation = (
  { __typename?: 'Mutation' }
  & { deleteOnePlatform?: Maybe<(
    { __typename?: 'Platform' }
    & Pick<Platform, 'id'>
  )> }
);

export type DeleteManyPlatformMutationVariables = {
  where?: Maybe<PlatformWhereInput>;
};


export type DeleteManyPlatformMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyPlatform: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyPlatformMutationVariables = {
  where?: Maybe<PlatformWhereInput>;
  data: PlatformUpdateManyMutationInput;
};


export type UpdateManyPlatformMutation = (
  { __typename?: 'Mutation' }
  & { updateManyPlatform: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type ProductFieldsFragment = (
  { __typename?: 'Product' }
  & Pick<Product, 'companyId' | 'id' | 'height' | 'price' | 'thumbnail' | 'image' | 'description' | 'stock' | 'width' | 'sku' | 'name' | 'slug' | 'salePrice' | 'discountInPercent' | 'type' | 'gallery' | 'unit' | 'createdAt'>
);

export type ProductFragment = (
  { __typename?: 'Product' }
  & { company?: Maybe<(
    { __typename?: 'Company' }
    & CompanyFieldsFragment
  )> }
  & ProductFieldsFragment
);

export type FindOneProductQueryVariables = {
  where: ProductWhereUniqueInput;
};


export type FindOneProductQuery = (
  { __typename?: 'Query' }
  & { findOneProduct?: Maybe<(
    { __typename?: 'Product' }
    & ProductFragment
  )> }
);

export type FindManyProductQueryVariables = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<ProductOrderByInput>;
  cursor?: Maybe<ProductWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyProductQuery = (
  { __typename?: 'Query' }
  & { findManyProduct?: Maybe<Array<(
    { __typename?: 'Product' }
    & ProductFragment
  )>> }
);

export type FindManyProductCountQueryVariables = {
  where?: Maybe<ProductWhereInput>;
  orderBy?: Maybe<ProductOrderByInput>;
  cursor?: Maybe<ProductWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyProductCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyProductCount'>
);

export type CreateOneProductMutationVariables = {
  data: ProductCreateInput;
};


export type CreateOneProductMutation = (
  { __typename?: 'Mutation' }
  & { createOneProduct: (
    { __typename?: 'Product' }
    & ProductFragment
  ) }
);

export type UpdateOneProductMutationVariables = {
  where: ProductWhereUniqueInput;
  data: ProductUpdateInput;
};


export type UpdateOneProductMutation = (
  { __typename?: 'Mutation' }
  & { updateOneProduct: (
    { __typename?: 'Product' }
    & ProductFragment
  ) }
);

export type DeleteOneProductMutationVariables = {
  where: ProductWhereUniqueInput;
};


export type DeleteOneProductMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneProduct?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id'>
  )> }
);

export type DeleteManyProductMutationVariables = {
  where?: Maybe<ProductWhereInput>;
};


export type DeleteManyProductMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyProduct: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyProductMutationVariables = {
  where?: Maybe<ProductWhereInput>;
  data: ProductUpdateManyMutationInput;
};


export type UpdateManyProductMutation = (
  { __typename?: 'Mutation' }
  & { updateManyProduct: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type ReviewFieldsFragment = (
  { __typename?: 'Review' }
  & Pick<Review, 'id' | 'status' | 'orderId' | 'productId' | 'createdAt' | 'customerId' | 'rating' | 'comment' | 'companyId'>
);

export type ReviewFragment = (
  { __typename?: 'Review' }
  & { product?: Maybe<(
    { __typename?: 'Product' }
    & ProductFieldsFragment
  )>, order?: Maybe<(
    { __typename?: 'Order' }
    & OrderFieldsFragment
  )>, customer?: Maybe<(
    { __typename?: 'Customer' }
    & CustomerFieldsFragment
  )>, company?: Maybe<(
    { __typename?: 'Company' }
    & CompanyFieldsFragment
  )> }
  & ReviewFieldsFragment
);

export type FindOneReviewQueryVariables = {
  where: ReviewWhereUniqueInput;
};


export type FindOneReviewQuery = (
  { __typename?: 'Query' }
  & { findOneReview?: Maybe<(
    { __typename?: 'Review' }
    & ReviewFragment
  )> }
);

export type FindManyReviewQueryVariables = {
  where?: Maybe<ReviewWhereInput>;
  orderBy?: Maybe<ReviewOrderByInput>;
  cursor?: Maybe<ReviewWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyReviewQuery = (
  { __typename?: 'Query' }
  & { findManyReview?: Maybe<Array<(
    { __typename?: 'Review' }
    & ReviewFragment
  )>> }
);

export type FindManyReviewCountQueryVariables = {
  where?: Maybe<ReviewWhereInput>;
  orderBy?: Maybe<ReviewOrderByInput>;
  cursor?: Maybe<ReviewWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyReviewCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyReviewCount'>
);

export type CreateOneReviewMutationVariables = {
  data: ReviewCreateInput;
};


export type CreateOneReviewMutation = (
  { __typename?: 'Mutation' }
  & { createOneReview: (
    { __typename?: 'Review' }
    & ReviewFragment
  ) }
);

export type UpdateOneReviewMutationVariables = {
  where: ReviewWhereUniqueInput;
  data: ReviewUpdateInput;
};


export type UpdateOneReviewMutation = (
  { __typename?: 'Mutation' }
  & { updateOneReview: (
    { __typename?: 'Review' }
    & ReviewFragment
  ) }
);

export type DeleteOneReviewMutationVariables = {
  where: ReviewWhereUniqueInput;
};


export type DeleteOneReviewMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneReview?: Maybe<(
    { __typename?: 'Review' }
    & Pick<Review, 'id'>
  )> }
);

export type DeleteManyReviewMutationVariables = {
  where?: Maybe<ReviewWhereInput>;
};


export type DeleteManyReviewMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyReview: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyReviewMutationVariables = {
  where?: Maybe<ReviewWhereInput>;
  data: ReviewUpdateManyMutationInput;
};


export type UpdateManyReviewMutation = (
  { __typename?: 'Mutation' }
  & { updateManyReview: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type StaffFieldsFragment = (
  { __typename?: 'Staff' }
  & Pick<Staff, 'createdAt' | 'id' | 'companyId' | 'role' | 'userId' | 'firstName' | 'lastName' | 'contactId' | 'email'>
);

export type StaffFragment = (
  { __typename?: 'Staff' }
  & { user: (
    { __typename?: 'User' }
    & UserFieldsFragment
  ), company: (
    { __typename?: 'Company' }
    & CompanyFieldsFragment
  ), contact?: Maybe<(
    { __typename?: 'Contact' }
    & ContactFieldsFragment
  )> }
  & StaffFieldsFragment
);

export type FindOneStaffQueryVariables = {
  where: StaffWhereUniqueInput;
};


export type FindOneStaffQuery = (
  { __typename?: 'Query' }
  & { findOneStaff?: Maybe<(
    { __typename?: 'Staff' }
    & StaffFragment
  )> }
);

export type FindManyStaffQueryVariables = {
  where?: Maybe<StaffWhereInput>;
  orderBy?: Maybe<StaffOrderByInput>;
  cursor?: Maybe<StaffWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyStaffQuery = (
  { __typename?: 'Query' }
  & { findManyStaff?: Maybe<Array<(
    { __typename?: 'Staff' }
    & StaffFragment
  )>> }
);

export type FindManyStaffCountQueryVariables = {
  where?: Maybe<StaffWhereInput>;
  orderBy?: Maybe<StaffOrderByInput>;
  cursor?: Maybe<StaffWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyStaffCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyStaffCount'>
);

export type CreateOneStaffMutationVariables = {
  data: StaffCreateInput;
};


export type CreateOneStaffMutation = (
  { __typename?: 'Mutation' }
  & { createOneStaff: (
    { __typename?: 'Staff' }
    & StaffFragment
  ) }
);

export type UpdateOneStaffMutationVariables = {
  where: StaffWhereUniqueInput;
  data: StaffUpdateInput;
};


export type UpdateOneStaffMutation = (
  { __typename?: 'Mutation' }
  & { updateOneStaff: (
    { __typename?: 'Staff' }
    & StaffFragment
  ) }
);

export type DeleteOneStaffMutationVariables = {
  where: StaffWhereUniqueInput;
};


export type DeleteOneStaffMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneStaff?: Maybe<(
    { __typename?: 'Staff' }
    & Pick<Staff, 'id'>
  )> }
);

export type DeleteManyStaffMutationVariables = {
  where?: Maybe<StaffWhereInput>;
};


export type DeleteManyStaffMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyStaff: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyStaffMutationVariables = {
  where?: Maybe<StaffWhereInput>;
  data: StaffUpdateManyMutationInput;
};


export type UpdateManyStaffMutation = (
  { __typename?: 'Mutation' }
  & { updateManyStaff: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'imagePublicId' | 'firstName' | 'lastName' | 'token' | 'googleId' | 'walletId' | 'income' | 'username' | 'image' | 'coverImage' | 'coverImagePublicId' | 'isOnline' | 'id' | 'email' | 'createdAt'>
);

export type UserFragment = (
  { __typename?: 'User' }
  & UserFieldsFragment
);

export type FindOneUserQueryVariables = {
  where: UserWhereUniqueInput;
};


export type FindOneUserQuery = (
  { __typename?: 'Query' }
  & { findOneUser?: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type FindManyUserQueryVariables = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  cursor?: Maybe<UserWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyUserQuery = (
  { __typename?: 'Query' }
  & { findManyUser?: Maybe<Array<(
    { __typename?: 'User' }
    & UserFragment
  )>> }
);

export type FindManyUserCountQueryVariables = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  cursor?: Maybe<UserWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyUserCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyUserCount'>
);

export type CreateOneUserMutationVariables = {
  data: UserCreateInput;
};


export type CreateOneUserMutation = (
  { __typename?: 'Mutation' }
  & { createOneUser: (
    { __typename?: 'User' }
    & UserFragment
  ) }
);

export type UpdateOneUserMutationVariables = {
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
};


export type UpdateOneUserMutation = (
  { __typename?: 'Mutation' }
  & { updateOneUser: (
    { __typename?: 'User' }
    & UserFragment
  ) }
);

export type DeleteOneUserMutationVariables = {
  where: UserWhereUniqueInput;
};


export type DeleteOneUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type DeleteManyUserMutationVariables = {
  where?: Maybe<UserWhereInput>;
};


export type DeleteManyUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyUser: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyUserMutationVariables = {
  where?: Maybe<UserWhereInput>;
  data: UserUpdateManyMutationInput;
};


export type UpdateManyUserMutation = (
  { __typename?: 'Mutation' }
  & { updateManyUser: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export const AddressFieldsFragmentDoc = gql`
    fragment AddressFields on Address {
  id
  type
  name
  json
  info
  companyId
  userId
}
    `;
export const CompanyFieldsFragmentDoc = gql`
    fragment CompanyFields on Company {
  id
  name
  description
  previewUrl
  thumbnailUrl
  platformSlug
  addressId
  contactId
  platformId
  slug
  ownerId
  deliveryDetailId
  promotion
  createdAt
  updatedAt
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  imagePublicId
  firstName
  lastName
  token
  googleId
  walletId
  income
  username
  image
  coverImage
  coverImagePublicId
  isOnline
  id
  email
  createdAt
}
    `;
export const AddressFragmentDoc = gql`
    fragment Address on Address {
  ...AddressFields
  company {
    ...CompanyFields
  }
  user {
    ...UserFields
  }
}
    ${AddressFieldsFragmentDoc}
${CompanyFieldsFragmentDoc}
${UserFieldsFragmentDoc}`;
export const CardFieldsFragmentDoc = gql`
    fragment CardFields on Card {
  id
  type
  cardType
  name
  lastFourDigit
  userId
}
    `;
export const CardFragmentDoc = gql`
    fragment Card on Card {
  ...CardFields
  user {
    ...UserFields
  }
}
    ${CardFieldsFragmentDoc}
${UserFieldsFragmentDoc}`;
export const CategoryFieldsFragmentDoc = gql`
    fragment CategoryFields on Category {
  type
  id
  platformId
  slug
  name
  icon
  parentId
}
    `;
export const PlatformFieldsFragmentDoc = gql`
    fragment PlatformFields on Platform {
  id
  bannerImg
  slug
  ownerId
  description
  name
  platformType
  countryId
  taxRate
  createdAt
}
    `;
export const CategoryFragmentDoc = gql`
    fragment Category on Category {
  ...CategoryFields
  platform {
    ...PlatformFields
  }
  parent {
    ...CategoryFields
  }
}
    ${CategoryFieldsFragmentDoc}
${PlatformFieldsFragmentDoc}`;
export const ContactFieldsFragmentDoc = gql`
    fragment ContactFields on Contact {
  id
  type
  number
  companyId
  userId
}
    `;
export const DeliveryDetailFieldsFragmentDoc = gql`
    fragment DeliveryDetailFields on DeliveryDetail {
  id
  isFree
  charge
  minimumOrder
  companyId
}
    `;
export const CompanyFragmentDoc = gql`
    fragment Company on Company {
  ...CompanyFields
  address {
    ...AddressFields
  }
  contact {
    ...ContactFields
  }
  platform {
    ...PlatformFields
  }
  owner {
    ...UserFields
  }
  deliveryDetail {
    ...DeliveryDetailFields
  }
}
    ${CompanyFieldsFragmentDoc}
${AddressFieldsFragmentDoc}
${ContactFieldsFragmentDoc}
${PlatformFieldsFragmentDoc}
${UserFieldsFragmentDoc}
${DeliveryDetailFieldsFragmentDoc}`;
export const ContactFragmentDoc = gql`
    fragment Contact on Contact {
  ...ContactFields
  company {
    ...CompanyFields
  }
  user {
    ...UserFields
  }
}
    ${ContactFieldsFragmentDoc}
${CompanyFieldsFragmentDoc}
${UserFieldsFragmentDoc}`;
export const CountryFieldsFragmentDoc = gql`
    fragment CountryFields on Country {
  id
  code
  name
  currency
}
    `;
export const CountryFragmentDoc = gql`
    fragment Country on Country {
  ...CountryFields
}
    ${CountryFieldsFragmentDoc}`;
export const CouponFieldsFragmentDoc = gql`
    fragment CouponFields on Coupon {
  id
  name
  code
  image
  discountInPercent
  numberOfCoupon
  numberOfUsedCoupon
}
    `;
export const CouponFragmentDoc = gql`
    fragment Coupon on Coupon {
  ...CouponFields
}
    ${CouponFieldsFragmentDoc}`;
export const CustomerFieldsFragmentDoc = gql`
    fragment CustomerFields on Customer {
  hasNewsLetter
  id
  lastName
  email
  address
  zipcode
  city
  avatar
  birthday
  firstSeen
  lastSeen
  hasOrdered
  latestPurchase
  firstName
  groups
  nbOrders
  companyId
  userId
  image
  totalOrder
  totalSpent
  createdAt
}
    `;
export const CustomerFragmentDoc = gql`
    fragment Customer on Customer {
  ...CustomerFields
  company {
    ...CompanyFields
  }
  user {
    ...UserFields
  }
}
    ${CustomerFieldsFragmentDoc}
${CompanyFieldsFragmentDoc}
${UserFieldsFragmentDoc}`;
export const DeliveryDetailFragmentDoc = gql`
    fragment DeliveryDetail on DeliveryDetail {
  ...DeliveryDetailFields
  company {
    ...CompanyFields
  }
}
    ${DeliveryDetailFieldsFragmentDoc}
${CompanyFieldsFragmentDoc}`;
export const InvoiceFieldsFragmentDoc = gql`
    fragment InvoiceFields on Invoice {
  subtotal
  id
  orderId
  customerId
  createdAt
  deliveryFees
  taxRate
  taxes
  total
  companyId
}
    `;
export const OrderFieldsFragmentDoc = gql`
    fragment OrderFields on Order {
  id
  customerId
  subtotal
  deliveryFees
  taxRate
  taxes
  total
  status
  returned
  reference
  companyId
  deliveryTime
  createdAt
  paymentMethod
  deliveryAddressId
  contactId
}
    `;
export const InvoiceFragmentDoc = gql`
    fragment Invoice on Invoice {
  ...InvoiceFields
  order {
    ...OrderFields
  }
  customer {
    ...CustomerFields
  }
  company {
    ...CompanyFields
  }
}
    ${InvoiceFieldsFragmentDoc}
${OrderFieldsFragmentDoc}
${CustomerFieldsFragmentDoc}
${CompanyFieldsFragmentDoc}`;
export const OrderFragmentDoc = gql`
    fragment Order on Order {
  ...OrderFields
  customer {
    ...CustomerFields
  }
  company {
    ...CompanyFields
  }
  deliveryAdress {
    ...AddressFields
  }
  contact {
    ...ContactFields
  }
}
    ${OrderFieldsFragmentDoc}
${CustomerFieldsFragmentDoc}
${CompanyFieldsFragmentDoc}
${AddressFieldsFragmentDoc}
${ContactFieldsFragmentDoc}`;
export const OrderItemFieldsFragmentDoc = gql`
    fragment OrderItemFields on OrderItem {
  id
  orderId
  quantity
  name
  weight
  price
  productId
  image
}
    `;
export const ProductFieldsFragmentDoc = gql`
    fragment ProductFields on Product {
  companyId
  id
  height
  price
  thumbnail
  image
  description
  stock
  width
  sku
  name
  slug
  salePrice
  discountInPercent
  type
  gallery
  unit
  createdAt
}
    `;
export const OrderItemFragmentDoc = gql`
    fragment OrderItem on OrderItem {
  ...OrderItemFields
  order {
    ...OrderFields
  }
  product {
    ...ProductFields
  }
}
    ${OrderItemFieldsFragmentDoc}
${OrderFieldsFragmentDoc}
${ProductFieldsFragmentDoc}`;
export const PlatformFragmentDoc = gql`
    fragment Platform on Platform {
  ...PlatformFields
  owner {
    ...UserFields
  }
  country {
    ...CountryFields
  }
}
    ${PlatformFieldsFragmentDoc}
${UserFieldsFragmentDoc}
${CountryFieldsFragmentDoc}`;
export const ProductFragmentDoc = gql`
    fragment Product on Product {
  ...ProductFields
  company {
    ...CompanyFields
  }
}
    ${ProductFieldsFragmentDoc}
${CompanyFieldsFragmentDoc}`;
export const ReviewFieldsFragmentDoc = gql`
    fragment ReviewFields on Review {
  id
  status
  orderId
  productId
  createdAt
  customerId
  rating
  comment
  companyId
}
    `;
export const ReviewFragmentDoc = gql`
    fragment Review on Review {
  ...ReviewFields
  product {
    ...ProductFields
  }
  order {
    ...OrderFields
  }
  customer {
    ...CustomerFields
  }
  company {
    ...CompanyFields
  }
}
    ${ReviewFieldsFragmentDoc}
${ProductFieldsFragmentDoc}
${OrderFieldsFragmentDoc}
${CustomerFieldsFragmentDoc}
${CompanyFieldsFragmentDoc}`;
export const StaffFieldsFragmentDoc = gql`
    fragment StaffFields on Staff {
  createdAt
  id
  companyId
  role
  userId
  firstName
  lastName
  contactId
  email
}
    `;
export const StaffFragmentDoc = gql`
    fragment Staff on Staff {
  ...StaffFields
  user {
    ...UserFields
  }
  company {
    ...CompanyFields
  }
  contact {
    ...ContactFields
  }
}
    ${StaffFieldsFragmentDoc}
${UserFieldsFragmentDoc}
${CompanyFieldsFragmentDoc}
${ContactFieldsFragmentDoc}`;
export const UserFragmentDoc = gql`
    fragment User on User {
  ...UserFields
}
    ${UserFieldsFragmentDoc}`;
export const MeDocument = gql`
    query me {
  me {
    id
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const LoginDocument = gql`
    mutation login($idToken: String!) {
  login(idToken: $idToken) {
    user {
      id
      email
    }
    token
  }
}
    `;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      idToken: // value for 'idToken'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignupDocument = gql`
    mutation signup($idToken: String!) {
  signup(idToken: $idToken) {
    user {
      id
      email
    }
    token
  }
}
    `;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      idToken: // value for 'idToken'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return ApolloReactHooks.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = ApolloReactCommon.MutationResult<SignupMutation>;
export type SignupMutationOptions = ApolloReactCommon.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const SelectCompanyDocument = gql`
    mutation selectCompany($companyId: Int!) {
  selectCompany(companyId: $companyId) {
    user {
      id
      email
    }
    token
  }
}
    `;

/**
 * __useSelectCompanyMutation__
 *
 * To run a mutation, you first call `useSelectCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSelectCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [selectCompanyMutation, { data, loading, error }] = useSelectCompanyMutation({
 *   variables: {
 *      companyId: // value for 'companyId'
 *   },
 * });
 */
export function useSelectCompanyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SelectCompanyMutation, SelectCompanyMutationVariables>) {
        return ApolloReactHooks.useMutation<SelectCompanyMutation, SelectCompanyMutationVariables>(SelectCompanyDocument, baseOptions);
      }
export type SelectCompanyMutationHookResult = ReturnType<typeof useSelectCompanyMutation>;
export type SelectCompanyMutationResult = ApolloReactCommon.MutationResult<SelectCompanyMutation>;
export type SelectCompanyMutationOptions = ApolloReactCommon.BaseMutationOptions<SelectCompanyMutation, SelectCompanyMutationVariables>;
export const SelectPlatformDocument = gql`
    mutation selectPlatform($platformId: Int!) {
  selectPlatform(platformId: $platformId) {
    user {
      id
      email
    }
    token
  }
}
    `;

/**
 * __useSelectPlatformMutation__
 *
 * To run a mutation, you first call `useSelectPlatformMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSelectPlatformMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [selectPlatformMutation, { data, loading, error }] = useSelectPlatformMutation({
 *   variables: {
 *      platformId: // value for 'platformId'
 *   },
 * });
 */
export function useSelectPlatformMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SelectPlatformMutation, SelectPlatformMutationVariables>) {
        return ApolloReactHooks.useMutation<SelectPlatformMutation, SelectPlatformMutationVariables>(SelectPlatformDocument, baseOptions);
      }
export type SelectPlatformMutationHookResult = ReturnType<typeof useSelectPlatformMutation>;
export type SelectPlatformMutationResult = ApolloReactCommon.MutationResult<SelectPlatformMutation>;
export type SelectPlatformMutationOptions = ApolloReactCommon.BaseMutationOptions<SelectPlatformMutation, SelectPlatformMutationVariables>;
export const FindOneAddressDocument = gql`
    query findOneAddress($where: AddressWhereUniqueInput!) {
  findOneAddress(where: $where) {
    ...Address
  }
}
    ${AddressFragmentDoc}`;

/**
 * __useFindOneAddressQuery__
 *
 * To run a query within a React component, call `useFindOneAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneAddressQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneAddressQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneAddressQuery, FindOneAddressQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneAddressQuery, FindOneAddressQueryVariables>(FindOneAddressDocument, baseOptions);
      }
export function useFindOneAddressLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneAddressQuery, FindOneAddressQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneAddressQuery, FindOneAddressQueryVariables>(FindOneAddressDocument, baseOptions);
        }
export type FindOneAddressQueryHookResult = ReturnType<typeof useFindOneAddressQuery>;
export type FindOneAddressLazyQueryHookResult = ReturnType<typeof useFindOneAddressLazyQuery>;
export type FindOneAddressQueryResult = ApolloReactCommon.QueryResult<FindOneAddressQuery, FindOneAddressQueryVariables>;
export const FindManyAddressDocument = gql`
    query findManyAddress($where: AddressWhereInput, $orderBy: AddressOrderByInput, $cursor: AddressWhereUniqueInput, $skip: Int, $take: Int) {
  findManyAddress(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...Address
  }
}
    ${AddressFragmentDoc}`;

/**
 * __useFindManyAddressQuery__
 *
 * To run a query within a React component, call `useFindManyAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyAddressQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyAddressQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyAddressQuery, FindManyAddressQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyAddressQuery, FindManyAddressQueryVariables>(FindManyAddressDocument, baseOptions);
      }
export function useFindManyAddressLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyAddressQuery, FindManyAddressQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyAddressQuery, FindManyAddressQueryVariables>(FindManyAddressDocument, baseOptions);
        }
export type FindManyAddressQueryHookResult = ReturnType<typeof useFindManyAddressQuery>;
export type FindManyAddressLazyQueryHookResult = ReturnType<typeof useFindManyAddressLazyQuery>;
export type FindManyAddressQueryResult = ApolloReactCommon.QueryResult<FindManyAddressQuery, FindManyAddressQueryVariables>;
export const FindManyAddressCountDocument = gql`
    query findManyAddressCount($where: AddressWhereInput, $orderBy: AddressOrderByInput, $cursor: AddressWhereUniqueInput, $skip: Int, $take: Int) {
  findManyAddressCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyAddressCountQuery__
 *
 * To run a query within a React component, call `useFindManyAddressCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyAddressCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyAddressCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyAddressCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyAddressCountQuery, FindManyAddressCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyAddressCountQuery, FindManyAddressCountQueryVariables>(FindManyAddressCountDocument, baseOptions);
      }
export function useFindManyAddressCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyAddressCountQuery, FindManyAddressCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyAddressCountQuery, FindManyAddressCountQueryVariables>(FindManyAddressCountDocument, baseOptions);
        }
export type FindManyAddressCountQueryHookResult = ReturnType<typeof useFindManyAddressCountQuery>;
export type FindManyAddressCountLazyQueryHookResult = ReturnType<typeof useFindManyAddressCountLazyQuery>;
export type FindManyAddressCountQueryResult = ApolloReactCommon.QueryResult<FindManyAddressCountQuery, FindManyAddressCountQueryVariables>;
export const CreateOneAddressDocument = gql`
    mutation createOneAddress($data: AddressCreateInput!) {
  createOneAddress(data: $data) {
    ...Address
  }
}
    ${AddressFragmentDoc}`;

/**
 * __useCreateOneAddressMutation__
 *
 * To run a mutation, you first call `useCreateOneAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneAddressMutation, { data, loading, error }] = useCreateOneAddressMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneAddressMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneAddressMutation, CreateOneAddressMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneAddressMutation, CreateOneAddressMutationVariables>(CreateOneAddressDocument, baseOptions);
      }
export type CreateOneAddressMutationHookResult = ReturnType<typeof useCreateOneAddressMutation>;
export type CreateOneAddressMutationResult = ApolloReactCommon.MutationResult<CreateOneAddressMutation>;
export type CreateOneAddressMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneAddressMutation, CreateOneAddressMutationVariables>;
export const UpdateOneAddressDocument = gql`
    mutation updateOneAddress($where: AddressWhereUniqueInput!, $data: AddressUpdateInput!) {
  updateOneAddress(where: $where, data: $data) {
    ...Address
  }
}
    ${AddressFragmentDoc}`;

/**
 * __useUpdateOneAddressMutation__
 *
 * To run a mutation, you first call `useUpdateOneAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneAddressMutation, { data, loading, error }] = useUpdateOneAddressMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneAddressMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneAddressMutation, UpdateOneAddressMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneAddressMutation, UpdateOneAddressMutationVariables>(UpdateOneAddressDocument, baseOptions);
      }
export type UpdateOneAddressMutationHookResult = ReturnType<typeof useUpdateOneAddressMutation>;
export type UpdateOneAddressMutationResult = ApolloReactCommon.MutationResult<UpdateOneAddressMutation>;
export type UpdateOneAddressMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneAddressMutation, UpdateOneAddressMutationVariables>;
export const DeleteOneAddressDocument = gql`
    mutation deleteOneAddress($where: AddressWhereUniqueInput!) {
  deleteOneAddress(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneAddressMutation__
 *
 * To run a mutation, you first call `useDeleteOneAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneAddressMutation, { data, loading, error }] = useDeleteOneAddressMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneAddressMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneAddressMutation, DeleteOneAddressMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneAddressMutation, DeleteOneAddressMutationVariables>(DeleteOneAddressDocument, baseOptions);
      }
export type DeleteOneAddressMutationHookResult = ReturnType<typeof useDeleteOneAddressMutation>;
export type DeleteOneAddressMutationResult = ApolloReactCommon.MutationResult<DeleteOneAddressMutation>;
export type DeleteOneAddressMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneAddressMutation, DeleteOneAddressMutationVariables>;
export const DeleteManyAddressDocument = gql`
    mutation deleteManyAddress($where: AddressWhereInput) {
  deleteManyAddress(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyAddressMutation__
 *
 * To run a mutation, you first call `useDeleteManyAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyAddressMutation, { data, loading, error }] = useDeleteManyAddressMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyAddressMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteManyAddressMutation, DeleteManyAddressMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteManyAddressMutation, DeleteManyAddressMutationVariables>(DeleteManyAddressDocument, baseOptions);
      }
export type DeleteManyAddressMutationHookResult = ReturnType<typeof useDeleteManyAddressMutation>;
export type DeleteManyAddressMutationResult = ApolloReactCommon.MutationResult<DeleteManyAddressMutation>;
export type DeleteManyAddressMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteManyAddressMutation, DeleteManyAddressMutationVariables>;
export const UpdateManyAddressDocument = gql`
    mutation updateManyAddress($where: AddressWhereInput, $data: AddressUpdateManyMutationInput!) {
  updateManyAddress(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyAddressMutation__
 *
 * To run a mutation, you first call `useUpdateManyAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyAddressMutation, { data, loading, error }] = useUpdateManyAddressMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyAddressMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateManyAddressMutation, UpdateManyAddressMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateManyAddressMutation, UpdateManyAddressMutationVariables>(UpdateManyAddressDocument, baseOptions);
      }
export type UpdateManyAddressMutationHookResult = ReturnType<typeof useUpdateManyAddressMutation>;
export type UpdateManyAddressMutationResult = ApolloReactCommon.MutationResult<UpdateManyAddressMutation>;
export type UpdateManyAddressMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateManyAddressMutation, UpdateManyAddressMutationVariables>;
export const FindOneCardDocument = gql`
    query findOneCard($where: CardWhereUniqueInput!) {
  findOneCard(where: $where) {
    ...Card
  }
}
    ${CardFragmentDoc}`;

/**
 * __useFindOneCardQuery__
 *
 * To run a query within a React component, call `useFindOneCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneCardQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneCardQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneCardQuery, FindOneCardQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneCardQuery, FindOneCardQueryVariables>(FindOneCardDocument, baseOptions);
      }
export function useFindOneCardLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneCardQuery, FindOneCardQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneCardQuery, FindOneCardQueryVariables>(FindOneCardDocument, baseOptions);
        }
export type FindOneCardQueryHookResult = ReturnType<typeof useFindOneCardQuery>;
export type FindOneCardLazyQueryHookResult = ReturnType<typeof useFindOneCardLazyQuery>;
export type FindOneCardQueryResult = ApolloReactCommon.QueryResult<FindOneCardQuery, FindOneCardQueryVariables>;
export const FindManyCardDocument = gql`
    query findManyCard($where: CardWhereInput, $orderBy: CardOrderByInput, $cursor: CardWhereUniqueInput, $skip: Int, $take: Int) {
  findManyCard(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...Card
  }
}
    ${CardFragmentDoc}`;

/**
 * __useFindManyCardQuery__
 *
 * To run a query within a React component, call `useFindManyCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyCardQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyCardQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyCardQuery, FindManyCardQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyCardQuery, FindManyCardQueryVariables>(FindManyCardDocument, baseOptions);
      }
export function useFindManyCardLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyCardQuery, FindManyCardQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyCardQuery, FindManyCardQueryVariables>(FindManyCardDocument, baseOptions);
        }
export type FindManyCardQueryHookResult = ReturnType<typeof useFindManyCardQuery>;
export type FindManyCardLazyQueryHookResult = ReturnType<typeof useFindManyCardLazyQuery>;
export type FindManyCardQueryResult = ApolloReactCommon.QueryResult<FindManyCardQuery, FindManyCardQueryVariables>;
export const FindManyCardCountDocument = gql`
    query findManyCardCount($where: CardWhereInput, $orderBy: CardOrderByInput, $cursor: CardWhereUniqueInput, $skip: Int, $take: Int) {
  findManyCardCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyCardCountQuery__
 *
 * To run a query within a React component, call `useFindManyCardCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyCardCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyCardCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyCardCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyCardCountQuery, FindManyCardCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyCardCountQuery, FindManyCardCountQueryVariables>(FindManyCardCountDocument, baseOptions);
      }
export function useFindManyCardCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyCardCountQuery, FindManyCardCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyCardCountQuery, FindManyCardCountQueryVariables>(FindManyCardCountDocument, baseOptions);
        }
export type FindManyCardCountQueryHookResult = ReturnType<typeof useFindManyCardCountQuery>;
export type FindManyCardCountLazyQueryHookResult = ReturnType<typeof useFindManyCardCountLazyQuery>;
export type FindManyCardCountQueryResult = ApolloReactCommon.QueryResult<FindManyCardCountQuery, FindManyCardCountQueryVariables>;
export const CreateOneCardDocument = gql`
    mutation createOneCard($data: CardCreateInput!) {
  createOneCard(data: $data) {
    ...Card
  }
}
    ${CardFragmentDoc}`;

/**
 * __useCreateOneCardMutation__
 *
 * To run a mutation, you first call `useCreateOneCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneCardMutation, { data, loading, error }] = useCreateOneCardMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneCardMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneCardMutation, CreateOneCardMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneCardMutation, CreateOneCardMutationVariables>(CreateOneCardDocument, baseOptions);
      }
export type CreateOneCardMutationHookResult = ReturnType<typeof useCreateOneCardMutation>;
export type CreateOneCardMutationResult = ApolloReactCommon.MutationResult<CreateOneCardMutation>;
export type CreateOneCardMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneCardMutation, CreateOneCardMutationVariables>;
export const UpdateOneCardDocument = gql`
    mutation updateOneCard($where: CardWhereUniqueInput!, $data: CardUpdateInput!) {
  updateOneCard(where: $where, data: $data) {
    ...Card
  }
}
    ${CardFragmentDoc}`;

/**
 * __useUpdateOneCardMutation__
 *
 * To run a mutation, you first call `useUpdateOneCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneCardMutation, { data, loading, error }] = useUpdateOneCardMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneCardMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneCardMutation, UpdateOneCardMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneCardMutation, UpdateOneCardMutationVariables>(UpdateOneCardDocument, baseOptions);
      }
export type UpdateOneCardMutationHookResult = ReturnType<typeof useUpdateOneCardMutation>;
export type UpdateOneCardMutationResult = ApolloReactCommon.MutationResult<UpdateOneCardMutation>;
export type UpdateOneCardMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneCardMutation, UpdateOneCardMutationVariables>;
export const DeleteOneCardDocument = gql`
    mutation deleteOneCard($where: CardWhereUniqueInput!) {
  deleteOneCard(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneCardMutation__
 *
 * To run a mutation, you first call `useDeleteOneCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneCardMutation, { data, loading, error }] = useDeleteOneCardMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneCardMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneCardMutation, DeleteOneCardMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneCardMutation, DeleteOneCardMutationVariables>(DeleteOneCardDocument, baseOptions);
      }
export type DeleteOneCardMutationHookResult = ReturnType<typeof useDeleteOneCardMutation>;
export type DeleteOneCardMutationResult = ApolloReactCommon.MutationResult<DeleteOneCardMutation>;
export type DeleteOneCardMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneCardMutation, DeleteOneCardMutationVariables>;
export const DeleteManyCardDocument = gql`
    mutation deleteManyCard($where: CardWhereInput) {
  deleteManyCard(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyCardMutation__
 *
 * To run a mutation, you first call `useDeleteManyCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyCardMutation, { data, loading, error }] = useDeleteManyCardMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyCardMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteManyCardMutation, DeleteManyCardMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteManyCardMutation, DeleteManyCardMutationVariables>(DeleteManyCardDocument, baseOptions);
      }
export type DeleteManyCardMutationHookResult = ReturnType<typeof useDeleteManyCardMutation>;
export type DeleteManyCardMutationResult = ApolloReactCommon.MutationResult<DeleteManyCardMutation>;
export type DeleteManyCardMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteManyCardMutation, DeleteManyCardMutationVariables>;
export const UpdateManyCardDocument = gql`
    mutation updateManyCard($where: CardWhereInput, $data: CardUpdateManyMutationInput!) {
  updateManyCard(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyCardMutation__
 *
 * To run a mutation, you first call `useUpdateManyCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyCardMutation, { data, loading, error }] = useUpdateManyCardMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyCardMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateManyCardMutation, UpdateManyCardMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateManyCardMutation, UpdateManyCardMutationVariables>(UpdateManyCardDocument, baseOptions);
      }
export type UpdateManyCardMutationHookResult = ReturnType<typeof useUpdateManyCardMutation>;
export type UpdateManyCardMutationResult = ApolloReactCommon.MutationResult<UpdateManyCardMutation>;
export type UpdateManyCardMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateManyCardMutation, UpdateManyCardMutationVariables>;
export const FindOneCategoryDocument = gql`
    query findOneCategory($where: CategoryWhereUniqueInput!) {
  findOneCategory(where: $where) {
    ...Category
  }
}
    ${CategoryFragmentDoc}`;

/**
 * __useFindOneCategoryQuery__
 *
 * To run a query within a React component, call `useFindOneCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneCategoryQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneCategoryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneCategoryQuery, FindOneCategoryQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneCategoryQuery, FindOneCategoryQueryVariables>(FindOneCategoryDocument, baseOptions);
      }
export function useFindOneCategoryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneCategoryQuery, FindOneCategoryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneCategoryQuery, FindOneCategoryQueryVariables>(FindOneCategoryDocument, baseOptions);
        }
export type FindOneCategoryQueryHookResult = ReturnType<typeof useFindOneCategoryQuery>;
export type FindOneCategoryLazyQueryHookResult = ReturnType<typeof useFindOneCategoryLazyQuery>;
export type FindOneCategoryQueryResult = ApolloReactCommon.QueryResult<FindOneCategoryQuery, FindOneCategoryQueryVariables>;
export const FindManyCategoryDocument = gql`
    query findManyCategory($where: CategoryWhereInput, $orderBy: CategoryOrderByInput, $cursor: CategoryWhereUniqueInput, $skip: Int, $take: Int) {
  findManyCategory(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...Category
  }
}
    ${CategoryFragmentDoc}`;

/**
 * __useFindManyCategoryQuery__
 *
 * To run a query within a React component, call `useFindManyCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyCategoryQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyCategoryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyCategoryQuery, FindManyCategoryQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyCategoryQuery, FindManyCategoryQueryVariables>(FindManyCategoryDocument, baseOptions);
      }
export function useFindManyCategoryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyCategoryQuery, FindManyCategoryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyCategoryQuery, FindManyCategoryQueryVariables>(FindManyCategoryDocument, baseOptions);
        }
export type FindManyCategoryQueryHookResult = ReturnType<typeof useFindManyCategoryQuery>;
export type FindManyCategoryLazyQueryHookResult = ReturnType<typeof useFindManyCategoryLazyQuery>;
export type FindManyCategoryQueryResult = ApolloReactCommon.QueryResult<FindManyCategoryQuery, FindManyCategoryQueryVariables>;
export const FindManyCategoryCountDocument = gql`
    query findManyCategoryCount($where: CategoryWhereInput, $orderBy: CategoryOrderByInput, $cursor: CategoryWhereUniqueInput, $skip: Int, $take: Int) {
  findManyCategoryCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyCategoryCountQuery__
 *
 * To run a query within a React component, call `useFindManyCategoryCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyCategoryCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyCategoryCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyCategoryCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyCategoryCountQuery, FindManyCategoryCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyCategoryCountQuery, FindManyCategoryCountQueryVariables>(FindManyCategoryCountDocument, baseOptions);
      }
export function useFindManyCategoryCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyCategoryCountQuery, FindManyCategoryCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyCategoryCountQuery, FindManyCategoryCountQueryVariables>(FindManyCategoryCountDocument, baseOptions);
        }
export type FindManyCategoryCountQueryHookResult = ReturnType<typeof useFindManyCategoryCountQuery>;
export type FindManyCategoryCountLazyQueryHookResult = ReturnType<typeof useFindManyCategoryCountLazyQuery>;
export type FindManyCategoryCountQueryResult = ApolloReactCommon.QueryResult<FindManyCategoryCountQuery, FindManyCategoryCountQueryVariables>;
export const CreateOneCategoryDocument = gql`
    mutation createOneCategory($data: CategoryCreateInput!) {
  createOneCategory(data: $data) {
    ...Category
  }
}
    ${CategoryFragmentDoc}`;

/**
 * __useCreateOneCategoryMutation__
 *
 * To run a mutation, you first call `useCreateOneCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneCategoryMutation, { data, loading, error }] = useCreateOneCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneCategoryMutation, CreateOneCategoryMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneCategoryMutation, CreateOneCategoryMutationVariables>(CreateOneCategoryDocument, baseOptions);
      }
export type CreateOneCategoryMutationHookResult = ReturnType<typeof useCreateOneCategoryMutation>;
export type CreateOneCategoryMutationResult = ApolloReactCommon.MutationResult<CreateOneCategoryMutation>;
export type CreateOneCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneCategoryMutation, CreateOneCategoryMutationVariables>;
export const UpdateOneCategoryDocument = gql`
    mutation updateOneCategory($where: CategoryWhereUniqueInput!, $data: CategoryUpdateInput!) {
  updateOneCategory(where: $where, data: $data) {
    ...Category
  }
}
    ${CategoryFragmentDoc}`;

/**
 * __useUpdateOneCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateOneCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneCategoryMutation, { data, loading, error }] = useUpdateOneCategoryMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneCategoryMutation, UpdateOneCategoryMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneCategoryMutation, UpdateOneCategoryMutationVariables>(UpdateOneCategoryDocument, baseOptions);
      }
export type UpdateOneCategoryMutationHookResult = ReturnType<typeof useUpdateOneCategoryMutation>;
export type UpdateOneCategoryMutationResult = ApolloReactCommon.MutationResult<UpdateOneCategoryMutation>;
export type UpdateOneCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneCategoryMutation, UpdateOneCategoryMutationVariables>;
export const DeleteOneCategoryDocument = gql`
    mutation deleteOneCategory($where: CategoryWhereUniqueInput!) {
  deleteOneCategory(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteOneCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneCategoryMutation, { data, loading, error }] = useDeleteOneCategoryMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneCategoryMutation, DeleteOneCategoryMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneCategoryMutation, DeleteOneCategoryMutationVariables>(DeleteOneCategoryDocument, baseOptions);
      }
export type DeleteOneCategoryMutationHookResult = ReturnType<typeof useDeleteOneCategoryMutation>;
export type DeleteOneCategoryMutationResult = ApolloReactCommon.MutationResult<DeleteOneCategoryMutation>;
export type DeleteOneCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneCategoryMutation, DeleteOneCategoryMutationVariables>;
export const DeleteManyCategoryDocument = gql`
    mutation deleteManyCategory($where: CategoryWhereInput) {
  deleteManyCategory(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteManyCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyCategoryMutation, { data, loading, error }] = useDeleteManyCategoryMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteManyCategoryMutation, DeleteManyCategoryMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteManyCategoryMutation, DeleteManyCategoryMutationVariables>(DeleteManyCategoryDocument, baseOptions);
      }
export type DeleteManyCategoryMutationHookResult = ReturnType<typeof useDeleteManyCategoryMutation>;
export type DeleteManyCategoryMutationResult = ApolloReactCommon.MutationResult<DeleteManyCategoryMutation>;
export type DeleteManyCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteManyCategoryMutation, DeleteManyCategoryMutationVariables>;
export const UpdateManyCategoryDocument = gql`
    mutation updateManyCategory($where: CategoryWhereInput, $data: CategoryUpdateManyMutationInput!) {
  updateManyCategory(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateManyCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyCategoryMutation, { data, loading, error }] = useUpdateManyCategoryMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateManyCategoryMutation, UpdateManyCategoryMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateManyCategoryMutation, UpdateManyCategoryMutationVariables>(UpdateManyCategoryDocument, baseOptions);
      }
export type UpdateManyCategoryMutationHookResult = ReturnType<typeof useUpdateManyCategoryMutation>;
export type UpdateManyCategoryMutationResult = ApolloReactCommon.MutationResult<UpdateManyCategoryMutation>;
export type UpdateManyCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateManyCategoryMutation, UpdateManyCategoryMutationVariables>;
export const FindOneCompanyDocument = gql`
    query findOneCompany($where: CompanyWhereUniqueInput!) {
  findOneCompany(where: $where) {
    ...Company
  }
}
    ${CompanyFragmentDoc}`;

/**
 * __useFindOneCompanyQuery__
 *
 * To run a query within a React component, call `useFindOneCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneCompanyQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneCompanyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneCompanyQuery, FindOneCompanyQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneCompanyQuery, FindOneCompanyQueryVariables>(FindOneCompanyDocument, baseOptions);
      }
export function useFindOneCompanyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneCompanyQuery, FindOneCompanyQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneCompanyQuery, FindOneCompanyQueryVariables>(FindOneCompanyDocument, baseOptions);
        }
export type FindOneCompanyQueryHookResult = ReturnType<typeof useFindOneCompanyQuery>;
export type FindOneCompanyLazyQueryHookResult = ReturnType<typeof useFindOneCompanyLazyQuery>;
export type FindOneCompanyQueryResult = ApolloReactCommon.QueryResult<FindOneCompanyQuery, FindOneCompanyQueryVariables>;
export const FindManyCompanyDocument = gql`
    query findManyCompany($where: CompanyWhereInput, $orderBy: CompanyOrderByInput, $cursor: CompanyWhereUniqueInput, $skip: Int, $take: Int) {
  findManyCompany(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...Company
  }
}
    ${CompanyFragmentDoc}`;

/**
 * __useFindManyCompanyQuery__
 *
 * To run a query within a React component, call `useFindManyCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyCompanyQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyCompanyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyCompanyQuery, FindManyCompanyQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyCompanyQuery, FindManyCompanyQueryVariables>(FindManyCompanyDocument, baseOptions);
      }
export function useFindManyCompanyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyCompanyQuery, FindManyCompanyQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyCompanyQuery, FindManyCompanyQueryVariables>(FindManyCompanyDocument, baseOptions);
        }
export type FindManyCompanyQueryHookResult = ReturnType<typeof useFindManyCompanyQuery>;
export type FindManyCompanyLazyQueryHookResult = ReturnType<typeof useFindManyCompanyLazyQuery>;
export type FindManyCompanyQueryResult = ApolloReactCommon.QueryResult<FindManyCompanyQuery, FindManyCompanyQueryVariables>;
export const FindManyCompanyCountDocument = gql`
    query findManyCompanyCount($where: CompanyWhereInput, $orderBy: CompanyOrderByInput, $cursor: CompanyWhereUniqueInput, $skip: Int, $take: Int) {
  findManyCompanyCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyCompanyCountQuery__
 *
 * To run a query within a React component, call `useFindManyCompanyCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyCompanyCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyCompanyCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyCompanyCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyCompanyCountQuery, FindManyCompanyCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyCompanyCountQuery, FindManyCompanyCountQueryVariables>(FindManyCompanyCountDocument, baseOptions);
      }
export function useFindManyCompanyCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyCompanyCountQuery, FindManyCompanyCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyCompanyCountQuery, FindManyCompanyCountQueryVariables>(FindManyCompanyCountDocument, baseOptions);
        }
export type FindManyCompanyCountQueryHookResult = ReturnType<typeof useFindManyCompanyCountQuery>;
export type FindManyCompanyCountLazyQueryHookResult = ReturnType<typeof useFindManyCompanyCountLazyQuery>;
export type FindManyCompanyCountQueryResult = ApolloReactCommon.QueryResult<FindManyCompanyCountQuery, FindManyCompanyCountQueryVariables>;
export const CreateOneCompanyDocument = gql`
    mutation createOneCompany($data: CompanyCreateInput!) {
  createOneCompany(data: $data) {
    ...Company
  }
}
    ${CompanyFragmentDoc}`;

/**
 * __useCreateOneCompanyMutation__
 *
 * To run a mutation, you first call `useCreateOneCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneCompanyMutation, { data, loading, error }] = useCreateOneCompanyMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneCompanyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneCompanyMutation, CreateOneCompanyMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneCompanyMutation, CreateOneCompanyMutationVariables>(CreateOneCompanyDocument, baseOptions);
      }
export type CreateOneCompanyMutationHookResult = ReturnType<typeof useCreateOneCompanyMutation>;
export type CreateOneCompanyMutationResult = ApolloReactCommon.MutationResult<CreateOneCompanyMutation>;
export type CreateOneCompanyMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneCompanyMutation, CreateOneCompanyMutationVariables>;
export const UpdateOneCompanyDocument = gql`
    mutation updateOneCompany($where: CompanyWhereUniqueInput!, $data: CompanyUpdateInput!) {
  updateOneCompany(where: $where, data: $data) {
    ...Company
  }
}
    ${CompanyFragmentDoc}`;

/**
 * __useUpdateOneCompanyMutation__
 *
 * To run a mutation, you first call `useUpdateOneCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneCompanyMutation, { data, loading, error }] = useUpdateOneCompanyMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneCompanyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneCompanyMutation, UpdateOneCompanyMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneCompanyMutation, UpdateOneCompanyMutationVariables>(UpdateOneCompanyDocument, baseOptions);
      }
export type UpdateOneCompanyMutationHookResult = ReturnType<typeof useUpdateOneCompanyMutation>;
export type UpdateOneCompanyMutationResult = ApolloReactCommon.MutationResult<UpdateOneCompanyMutation>;
export type UpdateOneCompanyMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneCompanyMutation, UpdateOneCompanyMutationVariables>;
export const DeleteOneCompanyDocument = gql`
    mutation deleteOneCompany($where: CompanyWhereUniqueInput!) {
  deleteOneCompany(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneCompanyMutation__
 *
 * To run a mutation, you first call `useDeleteOneCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneCompanyMutation, { data, loading, error }] = useDeleteOneCompanyMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneCompanyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneCompanyMutation, DeleteOneCompanyMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneCompanyMutation, DeleteOneCompanyMutationVariables>(DeleteOneCompanyDocument, baseOptions);
      }
export type DeleteOneCompanyMutationHookResult = ReturnType<typeof useDeleteOneCompanyMutation>;
export type DeleteOneCompanyMutationResult = ApolloReactCommon.MutationResult<DeleteOneCompanyMutation>;
export type DeleteOneCompanyMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneCompanyMutation, DeleteOneCompanyMutationVariables>;
export const DeleteManyCompanyDocument = gql`
    mutation deleteManyCompany($where: CompanyWhereInput) {
  deleteManyCompany(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyCompanyMutation__
 *
 * To run a mutation, you first call `useDeleteManyCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyCompanyMutation, { data, loading, error }] = useDeleteManyCompanyMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyCompanyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteManyCompanyMutation, DeleteManyCompanyMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteManyCompanyMutation, DeleteManyCompanyMutationVariables>(DeleteManyCompanyDocument, baseOptions);
      }
export type DeleteManyCompanyMutationHookResult = ReturnType<typeof useDeleteManyCompanyMutation>;
export type DeleteManyCompanyMutationResult = ApolloReactCommon.MutationResult<DeleteManyCompanyMutation>;
export type DeleteManyCompanyMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteManyCompanyMutation, DeleteManyCompanyMutationVariables>;
export const UpdateManyCompanyDocument = gql`
    mutation updateManyCompany($where: CompanyWhereInput, $data: CompanyUpdateManyMutationInput!) {
  updateManyCompany(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyCompanyMutation__
 *
 * To run a mutation, you first call `useUpdateManyCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyCompanyMutation, { data, loading, error }] = useUpdateManyCompanyMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyCompanyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateManyCompanyMutation, UpdateManyCompanyMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateManyCompanyMutation, UpdateManyCompanyMutationVariables>(UpdateManyCompanyDocument, baseOptions);
      }
export type UpdateManyCompanyMutationHookResult = ReturnType<typeof useUpdateManyCompanyMutation>;
export type UpdateManyCompanyMutationResult = ApolloReactCommon.MutationResult<UpdateManyCompanyMutation>;
export type UpdateManyCompanyMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateManyCompanyMutation, UpdateManyCompanyMutationVariables>;
export const FindOneContactDocument = gql`
    query findOneContact($where: ContactWhereUniqueInput!) {
  findOneContact(where: $where) {
    ...Contact
  }
}
    ${ContactFragmentDoc}`;

/**
 * __useFindOneContactQuery__
 *
 * To run a query within a React component, call `useFindOneContactQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneContactQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneContactQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneContactQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneContactQuery, FindOneContactQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneContactQuery, FindOneContactQueryVariables>(FindOneContactDocument, baseOptions);
      }
export function useFindOneContactLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneContactQuery, FindOneContactQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneContactQuery, FindOneContactQueryVariables>(FindOneContactDocument, baseOptions);
        }
export type FindOneContactQueryHookResult = ReturnType<typeof useFindOneContactQuery>;
export type FindOneContactLazyQueryHookResult = ReturnType<typeof useFindOneContactLazyQuery>;
export type FindOneContactQueryResult = ApolloReactCommon.QueryResult<FindOneContactQuery, FindOneContactQueryVariables>;
export const FindManyContactDocument = gql`
    query findManyContact($where: ContactWhereInput, $orderBy: ContactOrderByInput, $cursor: ContactWhereUniqueInput, $skip: Int, $take: Int) {
  findManyContact(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...Contact
  }
}
    ${ContactFragmentDoc}`;

/**
 * __useFindManyContactQuery__
 *
 * To run a query within a React component, call `useFindManyContactQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyContactQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyContactQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyContactQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyContactQuery, FindManyContactQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyContactQuery, FindManyContactQueryVariables>(FindManyContactDocument, baseOptions);
      }
export function useFindManyContactLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyContactQuery, FindManyContactQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyContactQuery, FindManyContactQueryVariables>(FindManyContactDocument, baseOptions);
        }
export type FindManyContactQueryHookResult = ReturnType<typeof useFindManyContactQuery>;
export type FindManyContactLazyQueryHookResult = ReturnType<typeof useFindManyContactLazyQuery>;
export type FindManyContactQueryResult = ApolloReactCommon.QueryResult<FindManyContactQuery, FindManyContactQueryVariables>;
export const FindManyContactCountDocument = gql`
    query findManyContactCount($where: ContactWhereInput, $orderBy: ContactOrderByInput, $cursor: ContactWhereUniqueInput, $skip: Int, $take: Int) {
  findManyContactCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyContactCountQuery__
 *
 * To run a query within a React component, call `useFindManyContactCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyContactCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyContactCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyContactCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyContactCountQuery, FindManyContactCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyContactCountQuery, FindManyContactCountQueryVariables>(FindManyContactCountDocument, baseOptions);
      }
export function useFindManyContactCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyContactCountQuery, FindManyContactCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyContactCountQuery, FindManyContactCountQueryVariables>(FindManyContactCountDocument, baseOptions);
        }
export type FindManyContactCountQueryHookResult = ReturnType<typeof useFindManyContactCountQuery>;
export type FindManyContactCountLazyQueryHookResult = ReturnType<typeof useFindManyContactCountLazyQuery>;
export type FindManyContactCountQueryResult = ApolloReactCommon.QueryResult<FindManyContactCountQuery, FindManyContactCountQueryVariables>;
export const CreateOneContactDocument = gql`
    mutation createOneContact($data: ContactCreateInput!) {
  createOneContact(data: $data) {
    ...Contact
  }
}
    ${ContactFragmentDoc}`;

/**
 * __useCreateOneContactMutation__
 *
 * To run a mutation, you first call `useCreateOneContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneContactMutation, { data, loading, error }] = useCreateOneContactMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneContactMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneContactMutation, CreateOneContactMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneContactMutation, CreateOneContactMutationVariables>(CreateOneContactDocument, baseOptions);
      }
export type CreateOneContactMutationHookResult = ReturnType<typeof useCreateOneContactMutation>;
export type CreateOneContactMutationResult = ApolloReactCommon.MutationResult<CreateOneContactMutation>;
export type CreateOneContactMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneContactMutation, CreateOneContactMutationVariables>;
export const UpdateOneContactDocument = gql`
    mutation updateOneContact($where: ContactWhereUniqueInput!, $data: ContactUpdateInput!) {
  updateOneContact(where: $where, data: $data) {
    ...Contact
  }
}
    ${ContactFragmentDoc}`;

/**
 * __useUpdateOneContactMutation__
 *
 * To run a mutation, you first call `useUpdateOneContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneContactMutation, { data, loading, error }] = useUpdateOneContactMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneContactMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneContactMutation, UpdateOneContactMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneContactMutation, UpdateOneContactMutationVariables>(UpdateOneContactDocument, baseOptions);
      }
export type UpdateOneContactMutationHookResult = ReturnType<typeof useUpdateOneContactMutation>;
export type UpdateOneContactMutationResult = ApolloReactCommon.MutationResult<UpdateOneContactMutation>;
export type UpdateOneContactMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneContactMutation, UpdateOneContactMutationVariables>;
export const DeleteOneContactDocument = gql`
    mutation deleteOneContact($where: ContactWhereUniqueInput!) {
  deleteOneContact(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneContactMutation__
 *
 * To run a mutation, you first call `useDeleteOneContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneContactMutation, { data, loading, error }] = useDeleteOneContactMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneContactMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneContactMutation, DeleteOneContactMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneContactMutation, DeleteOneContactMutationVariables>(DeleteOneContactDocument, baseOptions);
      }
export type DeleteOneContactMutationHookResult = ReturnType<typeof useDeleteOneContactMutation>;
export type DeleteOneContactMutationResult = ApolloReactCommon.MutationResult<DeleteOneContactMutation>;
export type DeleteOneContactMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneContactMutation, DeleteOneContactMutationVariables>;
export const DeleteManyContactDocument = gql`
    mutation deleteManyContact($where: ContactWhereInput) {
  deleteManyContact(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyContactMutation__
 *
 * To run a mutation, you first call `useDeleteManyContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyContactMutation, { data, loading, error }] = useDeleteManyContactMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyContactMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteManyContactMutation, DeleteManyContactMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteManyContactMutation, DeleteManyContactMutationVariables>(DeleteManyContactDocument, baseOptions);
      }
export type DeleteManyContactMutationHookResult = ReturnType<typeof useDeleteManyContactMutation>;
export type DeleteManyContactMutationResult = ApolloReactCommon.MutationResult<DeleteManyContactMutation>;
export type DeleteManyContactMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteManyContactMutation, DeleteManyContactMutationVariables>;
export const UpdateManyContactDocument = gql`
    mutation updateManyContact($where: ContactWhereInput, $data: ContactUpdateManyMutationInput!) {
  updateManyContact(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyContactMutation__
 *
 * To run a mutation, you first call `useUpdateManyContactMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyContactMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyContactMutation, { data, loading, error }] = useUpdateManyContactMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyContactMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateManyContactMutation, UpdateManyContactMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateManyContactMutation, UpdateManyContactMutationVariables>(UpdateManyContactDocument, baseOptions);
      }
export type UpdateManyContactMutationHookResult = ReturnType<typeof useUpdateManyContactMutation>;
export type UpdateManyContactMutationResult = ApolloReactCommon.MutationResult<UpdateManyContactMutation>;
export type UpdateManyContactMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateManyContactMutation, UpdateManyContactMutationVariables>;
export const FindOneCountryDocument = gql`
    query findOneCountry($where: CountryWhereUniqueInput!) {
  findOneCountry(where: $where) {
    ...Country
  }
}
    ${CountryFragmentDoc}`;

/**
 * __useFindOneCountryQuery__
 *
 * To run a query within a React component, call `useFindOneCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneCountryQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneCountryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneCountryQuery, FindOneCountryQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneCountryQuery, FindOneCountryQueryVariables>(FindOneCountryDocument, baseOptions);
      }
export function useFindOneCountryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneCountryQuery, FindOneCountryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneCountryQuery, FindOneCountryQueryVariables>(FindOneCountryDocument, baseOptions);
        }
export type FindOneCountryQueryHookResult = ReturnType<typeof useFindOneCountryQuery>;
export type FindOneCountryLazyQueryHookResult = ReturnType<typeof useFindOneCountryLazyQuery>;
export type FindOneCountryQueryResult = ApolloReactCommon.QueryResult<FindOneCountryQuery, FindOneCountryQueryVariables>;
export const FindManyCountryDocument = gql`
    query findManyCountry($where: CountryWhereInput, $orderBy: CountryOrderByInput, $cursor: CountryWhereUniqueInput, $skip: Int, $take: Int) {
  findManyCountry(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...Country
  }
}
    ${CountryFragmentDoc}`;

/**
 * __useFindManyCountryQuery__
 *
 * To run a query within a React component, call `useFindManyCountryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyCountryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyCountryQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyCountryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyCountryQuery, FindManyCountryQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyCountryQuery, FindManyCountryQueryVariables>(FindManyCountryDocument, baseOptions);
      }
export function useFindManyCountryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyCountryQuery, FindManyCountryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyCountryQuery, FindManyCountryQueryVariables>(FindManyCountryDocument, baseOptions);
        }
export type FindManyCountryQueryHookResult = ReturnType<typeof useFindManyCountryQuery>;
export type FindManyCountryLazyQueryHookResult = ReturnType<typeof useFindManyCountryLazyQuery>;
export type FindManyCountryQueryResult = ApolloReactCommon.QueryResult<FindManyCountryQuery, FindManyCountryQueryVariables>;
export const FindManyCountryCountDocument = gql`
    query findManyCountryCount($where: CountryWhereInput, $orderBy: CountryOrderByInput, $cursor: CountryWhereUniqueInput, $skip: Int, $take: Int) {
  findManyCountryCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyCountryCountQuery__
 *
 * To run a query within a React component, call `useFindManyCountryCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyCountryCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyCountryCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyCountryCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyCountryCountQuery, FindManyCountryCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyCountryCountQuery, FindManyCountryCountQueryVariables>(FindManyCountryCountDocument, baseOptions);
      }
export function useFindManyCountryCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyCountryCountQuery, FindManyCountryCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyCountryCountQuery, FindManyCountryCountQueryVariables>(FindManyCountryCountDocument, baseOptions);
        }
export type FindManyCountryCountQueryHookResult = ReturnType<typeof useFindManyCountryCountQuery>;
export type FindManyCountryCountLazyQueryHookResult = ReturnType<typeof useFindManyCountryCountLazyQuery>;
export type FindManyCountryCountQueryResult = ApolloReactCommon.QueryResult<FindManyCountryCountQuery, FindManyCountryCountQueryVariables>;
export const CreateOneCountryDocument = gql`
    mutation createOneCountry($data: CountryCreateInput!) {
  createOneCountry(data: $data) {
    ...Country
  }
}
    ${CountryFragmentDoc}`;

/**
 * __useCreateOneCountryMutation__
 *
 * To run a mutation, you first call `useCreateOneCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneCountryMutation, { data, loading, error }] = useCreateOneCountryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneCountryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneCountryMutation, CreateOneCountryMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneCountryMutation, CreateOneCountryMutationVariables>(CreateOneCountryDocument, baseOptions);
      }
export type CreateOneCountryMutationHookResult = ReturnType<typeof useCreateOneCountryMutation>;
export type CreateOneCountryMutationResult = ApolloReactCommon.MutationResult<CreateOneCountryMutation>;
export type CreateOneCountryMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneCountryMutation, CreateOneCountryMutationVariables>;
export const UpdateOneCountryDocument = gql`
    mutation updateOneCountry($where: CountryWhereUniqueInput!, $data: CountryUpdateInput!) {
  updateOneCountry(where: $where, data: $data) {
    ...Country
  }
}
    ${CountryFragmentDoc}`;

/**
 * __useUpdateOneCountryMutation__
 *
 * To run a mutation, you first call `useUpdateOneCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneCountryMutation, { data, loading, error }] = useUpdateOneCountryMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneCountryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneCountryMutation, UpdateOneCountryMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneCountryMutation, UpdateOneCountryMutationVariables>(UpdateOneCountryDocument, baseOptions);
      }
export type UpdateOneCountryMutationHookResult = ReturnType<typeof useUpdateOneCountryMutation>;
export type UpdateOneCountryMutationResult = ApolloReactCommon.MutationResult<UpdateOneCountryMutation>;
export type UpdateOneCountryMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneCountryMutation, UpdateOneCountryMutationVariables>;
export const DeleteOneCountryDocument = gql`
    mutation deleteOneCountry($where: CountryWhereUniqueInput!) {
  deleteOneCountry(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneCountryMutation__
 *
 * To run a mutation, you first call `useDeleteOneCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneCountryMutation, { data, loading, error }] = useDeleteOneCountryMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneCountryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneCountryMutation, DeleteOneCountryMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneCountryMutation, DeleteOneCountryMutationVariables>(DeleteOneCountryDocument, baseOptions);
      }
export type DeleteOneCountryMutationHookResult = ReturnType<typeof useDeleteOneCountryMutation>;
export type DeleteOneCountryMutationResult = ApolloReactCommon.MutationResult<DeleteOneCountryMutation>;
export type DeleteOneCountryMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneCountryMutation, DeleteOneCountryMutationVariables>;
export const DeleteManyCountryDocument = gql`
    mutation deleteManyCountry($where: CountryWhereInput) {
  deleteManyCountry(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyCountryMutation__
 *
 * To run a mutation, you first call `useDeleteManyCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyCountryMutation, { data, loading, error }] = useDeleteManyCountryMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyCountryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteManyCountryMutation, DeleteManyCountryMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteManyCountryMutation, DeleteManyCountryMutationVariables>(DeleteManyCountryDocument, baseOptions);
      }
export type DeleteManyCountryMutationHookResult = ReturnType<typeof useDeleteManyCountryMutation>;
export type DeleteManyCountryMutationResult = ApolloReactCommon.MutationResult<DeleteManyCountryMutation>;
export type DeleteManyCountryMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteManyCountryMutation, DeleteManyCountryMutationVariables>;
export const UpdateManyCountryDocument = gql`
    mutation updateManyCountry($where: CountryWhereInput, $data: CountryUpdateManyMutationInput!) {
  updateManyCountry(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyCountryMutation__
 *
 * To run a mutation, you first call `useUpdateManyCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyCountryMutation, { data, loading, error }] = useUpdateManyCountryMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyCountryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateManyCountryMutation, UpdateManyCountryMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateManyCountryMutation, UpdateManyCountryMutationVariables>(UpdateManyCountryDocument, baseOptions);
      }
export type UpdateManyCountryMutationHookResult = ReturnType<typeof useUpdateManyCountryMutation>;
export type UpdateManyCountryMutationResult = ApolloReactCommon.MutationResult<UpdateManyCountryMutation>;
export type UpdateManyCountryMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateManyCountryMutation, UpdateManyCountryMutationVariables>;
export const FindOneCouponDocument = gql`
    query findOneCoupon($where: CouponWhereUniqueInput!) {
  findOneCoupon(where: $where) {
    ...Coupon
  }
}
    ${CouponFragmentDoc}`;

/**
 * __useFindOneCouponQuery__
 *
 * To run a query within a React component, call `useFindOneCouponQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneCouponQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneCouponQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneCouponQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneCouponQuery, FindOneCouponQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneCouponQuery, FindOneCouponQueryVariables>(FindOneCouponDocument, baseOptions);
      }
export function useFindOneCouponLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneCouponQuery, FindOneCouponQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneCouponQuery, FindOneCouponQueryVariables>(FindOneCouponDocument, baseOptions);
        }
export type FindOneCouponQueryHookResult = ReturnType<typeof useFindOneCouponQuery>;
export type FindOneCouponLazyQueryHookResult = ReturnType<typeof useFindOneCouponLazyQuery>;
export type FindOneCouponQueryResult = ApolloReactCommon.QueryResult<FindOneCouponQuery, FindOneCouponQueryVariables>;
export const FindManyCouponDocument = gql`
    query findManyCoupon($where: CouponWhereInput, $orderBy: CouponOrderByInput, $cursor: CouponWhereUniqueInput, $skip: Int, $take: Int) {
  findManyCoupon(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...Coupon
  }
}
    ${CouponFragmentDoc}`;

/**
 * __useFindManyCouponQuery__
 *
 * To run a query within a React component, call `useFindManyCouponQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyCouponQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyCouponQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyCouponQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyCouponQuery, FindManyCouponQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyCouponQuery, FindManyCouponQueryVariables>(FindManyCouponDocument, baseOptions);
      }
export function useFindManyCouponLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyCouponQuery, FindManyCouponQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyCouponQuery, FindManyCouponQueryVariables>(FindManyCouponDocument, baseOptions);
        }
export type FindManyCouponQueryHookResult = ReturnType<typeof useFindManyCouponQuery>;
export type FindManyCouponLazyQueryHookResult = ReturnType<typeof useFindManyCouponLazyQuery>;
export type FindManyCouponQueryResult = ApolloReactCommon.QueryResult<FindManyCouponQuery, FindManyCouponQueryVariables>;
export const FindManyCouponCountDocument = gql`
    query findManyCouponCount($where: CouponWhereInput, $orderBy: CouponOrderByInput, $cursor: CouponWhereUniqueInput, $skip: Int, $take: Int) {
  findManyCouponCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyCouponCountQuery__
 *
 * To run a query within a React component, call `useFindManyCouponCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyCouponCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyCouponCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyCouponCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyCouponCountQuery, FindManyCouponCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyCouponCountQuery, FindManyCouponCountQueryVariables>(FindManyCouponCountDocument, baseOptions);
      }
export function useFindManyCouponCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyCouponCountQuery, FindManyCouponCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyCouponCountQuery, FindManyCouponCountQueryVariables>(FindManyCouponCountDocument, baseOptions);
        }
export type FindManyCouponCountQueryHookResult = ReturnType<typeof useFindManyCouponCountQuery>;
export type FindManyCouponCountLazyQueryHookResult = ReturnType<typeof useFindManyCouponCountLazyQuery>;
export type FindManyCouponCountQueryResult = ApolloReactCommon.QueryResult<FindManyCouponCountQuery, FindManyCouponCountQueryVariables>;
export const CreateOneCouponDocument = gql`
    mutation createOneCoupon($data: CouponCreateInput!) {
  createOneCoupon(data: $data) {
    ...Coupon
  }
}
    ${CouponFragmentDoc}`;

/**
 * __useCreateOneCouponMutation__
 *
 * To run a mutation, you first call `useCreateOneCouponMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneCouponMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneCouponMutation, { data, loading, error }] = useCreateOneCouponMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneCouponMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneCouponMutation, CreateOneCouponMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneCouponMutation, CreateOneCouponMutationVariables>(CreateOneCouponDocument, baseOptions);
      }
export type CreateOneCouponMutationHookResult = ReturnType<typeof useCreateOneCouponMutation>;
export type CreateOneCouponMutationResult = ApolloReactCommon.MutationResult<CreateOneCouponMutation>;
export type CreateOneCouponMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneCouponMutation, CreateOneCouponMutationVariables>;
export const UpdateOneCouponDocument = gql`
    mutation updateOneCoupon($where: CouponWhereUniqueInput!, $data: CouponUpdateInput!) {
  updateOneCoupon(where: $where, data: $data) {
    ...Coupon
  }
}
    ${CouponFragmentDoc}`;

/**
 * __useUpdateOneCouponMutation__
 *
 * To run a mutation, you first call `useUpdateOneCouponMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneCouponMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneCouponMutation, { data, loading, error }] = useUpdateOneCouponMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneCouponMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneCouponMutation, UpdateOneCouponMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneCouponMutation, UpdateOneCouponMutationVariables>(UpdateOneCouponDocument, baseOptions);
      }
export type UpdateOneCouponMutationHookResult = ReturnType<typeof useUpdateOneCouponMutation>;
export type UpdateOneCouponMutationResult = ApolloReactCommon.MutationResult<UpdateOneCouponMutation>;
export type UpdateOneCouponMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneCouponMutation, UpdateOneCouponMutationVariables>;
export const DeleteOneCouponDocument = gql`
    mutation deleteOneCoupon($where: CouponWhereUniqueInput!) {
  deleteOneCoupon(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneCouponMutation__
 *
 * To run a mutation, you first call `useDeleteOneCouponMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneCouponMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneCouponMutation, { data, loading, error }] = useDeleteOneCouponMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneCouponMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneCouponMutation, DeleteOneCouponMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneCouponMutation, DeleteOneCouponMutationVariables>(DeleteOneCouponDocument, baseOptions);
      }
export type DeleteOneCouponMutationHookResult = ReturnType<typeof useDeleteOneCouponMutation>;
export type DeleteOneCouponMutationResult = ApolloReactCommon.MutationResult<DeleteOneCouponMutation>;
export type DeleteOneCouponMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneCouponMutation, DeleteOneCouponMutationVariables>;
export const DeleteManyCouponDocument = gql`
    mutation deleteManyCoupon($where: CouponWhereInput) {
  deleteManyCoupon(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyCouponMutation__
 *
 * To run a mutation, you first call `useDeleteManyCouponMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyCouponMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyCouponMutation, { data, loading, error }] = useDeleteManyCouponMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyCouponMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteManyCouponMutation, DeleteManyCouponMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteManyCouponMutation, DeleteManyCouponMutationVariables>(DeleteManyCouponDocument, baseOptions);
      }
export type DeleteManyCouponMutationHookResult = ReturnType<typeof useDeleteManyCouponMutation>;
export type DeleteManyCouponMutationResult = ApolloReactCommon.MutationResult<DeleteManyCouponMutation>;
export type DeleteManyCouponMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteManyCouponMutation, DeleteManyCouponMutationVariables>;
export const UpdateManyCouponDocument = gql`
    mutation updateManyCoupon($where: CouponWhereInput, $data: CouponUpdateManyMutationInput!) {
  updateManyCoupon(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyCouponMutation__
 *
 * To run a mutation, you first call `useUpdateManyCouponMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyCouponMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyCouponMutation, { data, loading, error }] = useUpdateManyCouponMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyCouponMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateManyCouponMutation, UpdateManyCouponMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateManyCouponMutation, UpdateManyCouponMutationVariables>(UpdateManyCouponDocument, baseOptions);
      }
export type UpdateManyCouponMutationHookResult = ReturnType<typeof useUpdateManyCouponMutation>;
export type UpdateManyCouponMutationResult = ApolloReactCommon.MutationResult<UpdateManyCouponMutation>;
export type UpdateManyCouponMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateManyCouponMutation, UpdateManyCouponMutationVariables>;
export const FindOneCustomerDocument = gql`
    query findOneCustomer($where: CustomerWhereUniqueInput!) {
  findOneCustomer(where: $where) {
    ...Customer
  }
}
    ${CustomerFragmentDoc}`;

/**
 * __useFindOneCustomerQuery__
 *
 * To run a query within a React component, call `useFindOneCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneCustomerQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneCustomerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneCustomerQuery, FindOneCustomerQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneCustomerQuery, FindOneCustomerQueryVariables>(FindOneCustomerDocument, baseOptions);
      }
export function useFindOneCustomerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneCustomerQuery, FindOneCustomerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneCustomerQuery, FindOneCustomerQueryVariables>(FindOneCustomerDocument, baseOptions);
        }
export type FindOneCustomerQueryHookResult = ReturnType<typeof useFindOneCustomerQuery>;
export type FindOneCustomerLazyQueryHookResult = ReturnType<typeof useFindOneCustomerLazyQuery>;
export type FindOneCustomerQueryResult = ApolloReactCommon.QueryResult<FindOneCustomerQuery, FindOneCustomerQueryVariables>;
export const FindManyCustomerDocument = gql`
    query findManyCustomer($where: CustomerWhereInput, $orderBy: CustomerOrderByInput, $cursor: CustomerWhereUniqueInput, $skip: Int, $take: Int) {
  findManyCustomer(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...Customer
  }
}
    ${CustomerFragmentDoc}`;

/**
 * __useFindManyCustomerQuery__
 *
 * To run a query within a React component, call `useFindManyCustomerQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyCustomerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyCustomerQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyCustomerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyCustomerQuery, FindManyCustomerQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyCustomerQuery, FindManyCustomerQueryVariables>(FindManyCustomerDocument, baseOptions);
      }
export function useFindManyCustomerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyCustomerQuery, FindManyCustomerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyCustomerQuery, FindManyCustomerQueryVariables>(FindManyCustomerDocument, baseOptions);
        }
export type FindManyCustomerQueryHookResult = ReturnType<typeof useFindManyCustomerQuery>;
export type FindManyCustomerLazyQueryHookResult = ReturnType<typeof useFindManyCustomerLazyQuery>;
export type FindManyCustomerQueryResult = ApolloReactCommon.QueryResult<FindManyCustomerQuery, FindManyCustomerQueryVariables>;
export const FindManyCustomerCountDocument = gql`
    query findManyCustomerCount($where: CustomerWhereInput, $orderBy: CustomerOrderByInput, $cursor: CustomerWhereUniqueInput, $skip: Int, $take: Int) {
  findManyCustomerCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyCustomerCountQuery__
 *
 * To run a query within a React component, call `useFindManyCustomerCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyCustomerCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyCustomerCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyCustomerCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyCustomerCountQuery, FindManyCustomerCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyCustomerCountQuery, FindManyCustomerCountQueryVariables>(FindManyCustomerCountDocument, baseOptions);
      }
export function useFindManyCustomerCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyCustomerCountQuery, FindManyCustomerCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyCustomerCountQuery, FindManyCustomerCountQueryVariables>(FindManyCustomerCountDocument, baseOptions);
        }
export type FindManyCustomerCountQueryHookResult = ReturnType<typeof useFindManyCustomerCountQuery>;
export type FindManyCustomerCountLazyQueryHookResult = ReturnType<typeof useFindManyCustomerCountLazyQuery>;
export type FindManyCustomerCountQueryResult = ApolloReactCommon.QueryResult<FindManyCustomerCountQuery, FindManyCustomerCountQueryVariables>;
export const CreateOneCustomerDocument = gql`
    mutation createOneCustomer($data: CustomerCreateInput!) {
  createOneCustomer(data: $data) {
    ...Customer
  }
}
    ${CustomerFragmentDoc}`;

/**
 * __useCreateOneCustomerMutation__
 *
 * To run a mutation, you first call `useCreateOneCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneCustomerMutation, { data, loading, error }] = useCreateOneCustomerMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneCustomerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneCustomerMutation, CreateOneCustomerMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneCustomerMutation, CreateOneCustomerMutationVariables>(CreateOneCustomerDocument, baseOptions);
      }
export type CreateOneCustomerMutationHookResult = ReturnType<typeof useCreateOneCustomerMutation>;
export type CreateOneCustomerMutationResult = ApolloReactCommon.MutationResult<CreateOneCustomerMutation>;
export type CreateOneCustomerMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneCustomerMutation, CreateOneCustomerMutationVariables>;
export const UpdateOneCustomerDocument = gql`
    mutation updateOneCustomer($where: CustomerWhereUniqueInput!, $data: CustomerUpdateInput!) {
  updateOneCustomer(where: $where, data: $data) {
    ...Customer
  }
}
    ${CustomerFragmentDoc}`;

/**
 * __useUpdateOneCustomerMutation__
 *
 * To run a mutation, you first call `useUpdateOneCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneCustomerMutation, { data, loading, error }] = useUpdateOneCustomerMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneCustomerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneCustomerMutation, UpdateOneCustomerMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneCustomerMutation, UpdateOneCustomerMutationVariables>(UpdateOneCustomerDocument, baseOptions);
      }
export type UpdateOneCustomerMutationHookResult = ReturnType<typeof useUpdateOneCustomerMutation>;
export type UpdateOneCustomerMutationResult = ApolloReactCommon.MutationResult<UpdateOneCustomerMutation>;
export type UpdateOneCustomerMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneCustomerMutation, UpdateOneCustomerMutationVariables>;
export const DeleteOneCustomerDocument = gql`
    mutation deleteOneCustomer($where: CustomerWhereUniqueInput!) {
  deleteOneCustomer(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneCustomerMutation__
 *
 * To run a mutation, you first call `useDeleteOneCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneCustomerMutation, { data, loading, error }] = useDeleteOneCustomerMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneCustomerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneCustomerMutation, DeleteOneCustomerMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneCustomerMutation, DeleteOneCustomerMutationVariables>(DeleteOneCustomerDocument, baseOptions);
      }
export type DeleteOneCustomerMutationHookResult = ReturnType<typeof useDeleteOneCustomerMutation>;
export type DeleteOneCustomerMutationResult = ApolloReactCommon.MutationResult<DeleteOneCustomerMutation>;
export type DeleteOneCustomerMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneCustomerMutation, DeleteOneCustomerMutationVariables>;
export const DeleteManyCustomerDocument = gql`
    mutation deleteManyCustomer($where: CustomerWhereInput) {
  deleteManyCustomer(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyCustomerMutation__
 *
 * To run a mutation, you first call `useDeleteManyCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyCustomerMutation, { data, loading, error }] = useDeleteManyCustomerMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyCustomerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteManyCustomerMutation, DeleteManyCustomerMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteManyCustomerMutation, DeleteManyCustomerMutationVariables>(DeleteManyCustomerDocument, baseOptions);
      }
export type DeleteManyCustomerMutationHookResult = ReturnType<typeof useDeleteManyCustomerMutation>;
export type DeleteManyCustomerMutationResult = ApolloReactCommon.MutationResult<DeleteManyCustomerMutation>;
export type DeleteManyCustomerMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteManyCustomerMutation, DeleteManyCustomerMutationVariables>;
export const UpdateManyCustomerDocument = gql`
    mutation updateManyCustomer($where: CustomerWhereInput, $data: CustomerUpdateManyMutationInput!) {
  updateManyCustomer(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyCustomerMutation__
 *
 * To run a mutation, you first call `useUpdateManyCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyCustomerMutation, { data, loading, error }] = useUpdateManyCustomerMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyCustomerMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateManyCustomerMutation, UpdateManyCustomerMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateManyCustomerMutation, UpdateManyCustomerMutationVariables>(UpdateManyCustomerDocument, baseOptions);
      }
export type UpdateManyCustomerMutationHookResult = ReturnType<typeof useUpdateManyCustomerMutation>;
export type UpdateManyCustomerMutationResult = ApolloReactCommon.MutationResult<UpdateManyCustomerMutation>;
export type UpdateManyCustomerMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateManyCustomerMutation, UpdateManyCustomerMutationVariables>;
export const FindOneDeliveryDetailDocument = gql`
    query findOneDeliveryDetail($where: DeliveryDetailWhereUniqueInput!) {
  findOneDeliveryDetail(where: $where) {
    ...DeliveryDetail
  }
}
    ${DeliveryDetailFragmentDoc}`;

/**
 * __useFindOneDeliveryDetailQuery__
 *
 * To run a query within a React component, call `useFindOneDeliveryDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneDeliveryDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneDeliveryDetailQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneDeliveryDetailQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneDeliveryDetailQuery, FindOneDeliveryDetailQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneDeliveryDetailQuery, FindOneDeliveryDetailQueryVariables>(FindOneDeliveryDetailDocument, baseOptions);
      }
export function useFindOneDeliveryDetailLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneDeliveryDetailQuery, FindOneDeliveryDetailQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneDeliveryDetailQuery, FindOneDeliveryDetailQueryVariables>(FindOneDeliveryDetailDocument, baseOptions);
        }
export type FindOneDeliveryDetailQueryHookResult = ReturnType<typeof useFindOneDeliveryDetailQuery>;
export type FindOneDeliveryDetailLazyQueryHookResult = ReturnType<typeof useFindOneDeliveryDetailLazyQuery>;
export type FindOneDeliveryDetailQueryResult = ApolloReactCommon.QueryResult<FindOneDeliveryDetailQuery, FindOneDeliveryDetailQueryVariables>;
export const FindManyDeliveryDetailDocument = gql`
    query findManyDeliveryDetail($where: DeliveryDetailWhereInput, $orderBy: DeliveryDetailOrderByInput, $cursor: DeliveryDetailWhereUniqueInput, $skip: Int, $take: Int) {
  findManyDeliveryDetail(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...DeliveryDetail
  }
}
    ${DeliveryDetailFragmentDoc}`;

/**
 * __useFindManyDeliveryDetailQuery__
 *
 * To run a query within a React component, call `useFindManyDeliveryDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyDeliveryDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyDeliveryDetailQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyDeliveryDetailQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyDeliveryDetailQuery, FindManyDeliveryDetailQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyDeliveryDetailQuery, FindManyDeliveryDetailQueryVariables>(FindManyDeliveryDetailDocument, baseOptions);
      }
export function useFindManyDeliveryDetailLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyDeliveryDetailQuery, FindManyDeliveryDetailQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyDeliveryDetailQuery, FindManyDeliveryDetailQueryVariables>(FindManyDeliveryDetailDocument, baseOptions);
        }
export type FindManyDeliveryDetailQueryHookResult = ReturnType<typeof useFindManyDeliveryDetailQuery>;
export type FindManyDeliveryDetailLazyQueryHookResult = ReturnType<typeof useFindManyDeliveryDetailLazyQuery>;
export type FindManyDeliveryDetailQueryResult = ApolloReactCommon.QueryResult<FindManyDeliveryDetailQuery, FindManyDeliveryDetailQueryVariables>;
export const FindManyDeliveryDetailCountDocument = gql`
    query findManyDeliveryDetailCount($where: DeliveryDetailWhereInput, $orderBy: DeliveryDetailOrderByInput, $cursor: DeliveryDetailWhereUniqueInput, $skip: Int, $take: Int) {
  findManyDeliveryDetailCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyDeliveryDetailCountQuery__
 *
 * To run a query within a React component, call `useFindManyDeliveryDetailCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyDeliveryDetailCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyDeliveryDetailCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyDeliveryDetailCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyDeliveryDetailCountQuery, FindManyDeliveryDetailCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyDeliveryDetailCountQuery, FindManyDeliveryDetailCountQueryVariables>(FindManyDeliveryDetailCountDocument, baseOptions);
      }
export function useFindManyDeliveryDetailCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyDeliveryDetailCountQuery, FindManyDeliveryDetailCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyDeliveryDetailCountQuery, FindManyDeliveryDetailCountQueryVariables>(FindManyDeliveryDetailCountDocument, baseOptions);
        }
export type FindManyDeliveryDetailCountQueryHookResult = ReturnType<typeof useFindManyDeliveryDetailCountQuery>;
export type FindManyDeliveryDetailCountLazyQueryHookResult = ReturnType<typeof useFindManyDeliveryDetailCountLazyQuery>;
export type FindManyDeliveryDetailCountQueryResult = ApolloReactCommon.QueryResult<FindManyDeliveryDetailCountQuery, FindManyDeliveryDetailCountQueryVariables>;
export const CreateOneDeliveryDetailDocument = gql`
    mutation createOneDeliveryDetail($data: DeliveryDetailCreateInput!) {
  createOneDeliveryDetail(data: $data) {
    ...DeliveryDetail
  }
}
    ${DeliveryDetailFragmentDoc}`;

/**
 * __useCreateOneDeliveryDetailMutation__
 *
 * To run a mutation, you first call `useCreateOneDeliveryDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneDeliveryDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneDeliveryDetailMutation, { data, loading, error }] = useCreateOneDeliveryDetailMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneDeliveryDetailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneDeliveryDetailMutation, CreateOneDeliveryDetailMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneDeliveryDetailMutation, CreateOneDeliveryDetailMutationVariables>(CreateOneDeliveryDetailDocument, baseOptions);
      }
export type CreateOneDeliveryDetailMutationHookResult = ReturnType<typeof useCreateOneDeliveryDetailMutation>;
export type CreateOneDeliveryDetailMutationResult = ApolloReactCommon.MutationResult<CreateOneDeliveryDetailMutation>;
export type CreateOneDeliveryDetailMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneDeliveryDetailMutation, CreateOneDeliveryDetailMutationVariables>;
export const UpdateOneDeliveryDetailDocument = gql`
    mutation updateOneDeliveryDetail($where: DeliveryDetailWhereUniqueInput!, $data: DeliveryDetailUpdateInput!) {
  updateOneDeliveryDetail(where: $where, data: $data) {
    ...DeliveryDetail
  }
}
    ${DeliveryDetailFragmentDoc}`;

/**
 * __useUpdateOneDeliveryDetailMutation__
 *
 * To run a mutation, you first call `useUpdateOneDeliveryDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneDeliveryDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneDeliveryDetailMutation, { data, loading, error }] = useUpdateOneDeliveryDetailMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneDeliveryDetailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneDeliveryDetailMutation, UpdateOneDeliveryDetailMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneDeliveryDetailMutation, UpdateOneDeliveryDetailMutationVariables>(UpdateOneDeliveryDetailDocument, baseOptions);
      }
export type UpdateOneDeliveryDetailMutationHookResult = ReturnType<typeof useUpdateOneDeliveryDetailMutation>;
export type UpdateOneDeliveryDetailMutationResult = ApolloReactCommon.MutationResult<UpdateOneDeliveryDetailMutation>;
export type UpdateOneDeliveryDetailMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneDeliveryDetailMutation, UpdateOneDeliveryDetailMutationVariables>;
export const DeleteOneDeliveryDetailDocument = gql`
    mutation deleteOneDeliveryDetail($where: DeliveryDetailWhereUniqueInput!) {
  deleteOneDeliveryDetail(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneDeliveryDetailMutation__
 *
 * To run a mutation, you first call `useDeleteOneDeliveryDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneDeliveryDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneDeliveryDetailMutation, { data, loading, error }] = useDeleteOneDeliveryDetailMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneDeliveryDetailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneDeliveryDetailMutation, DeleteOneDeliveryDetailMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneDeliveryDetailMutation, DeleteOneDeliveryDetailMutationVariables>(DeleteOneDeliveryDetailDocument, baseOptions);
      }
export type DeleteOneDeliveryDetailMutationHookResult = ReturnType<typeof useDeleteOneDeliveryDetailMutation>;
export type DeleteOneDeliveryDetailMutationResult = ApolloReactCommon.MutationResult<DeleteOneDeliveryDetailMutation>;
export type DeleteOneDeliveryDetailMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneDeliveryDetailMutation, DeleteOneDeliveryDetailMutationVariables>;
export const DeleteManyDeliveryDetailDocument = gql`
    mutation deleteManyDeliveryDetail($where: DeliveryDetailWhereInput) {
  deleteManyDeliveryDetail(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyDeliveryDetailMutation__
 *
 * To run a mutation, you first call `useDeleteManyDeliveryDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyDeliveryDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyDeliveryDetailMutation, { data, loading, error }] = useDeleteManyDeliveryDetailMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyDeliveryDetailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteManyDeliveryDetailMutation, DeleteManyDeliveryDetailMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteManyDeliveryDetailMutation, DeleteManyDeliveryDetailMutationVariables>(DeleteManyDeliveryDetailDocument, baseOptions);
      }
export type DeleteManyDeliveryDetailMutationHookResult = ReturnType<typeof useDeleteManyDeliveryDetailMutation>;
export type DeleteManyDeliveryDetailMutationResult = ApolloReactCommon.MutationResult<DeleteManyDeliveryDetailMutation>;
export type DeleteManyDeliveryDetailMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteManyDeliveryDetailMutation, DeleteManyDeliveryDetailMutationVariables>;
export const UpdateManyDeliveryDetailDocument = gql`
    mutation updateManyDeliveryDetail($where: DeliveryDetailWhereInput, $data: DeliveryDetailUpdateManyMutationInput!) {
  updateManyDeliveryDetail(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyDeliveryDetailMutation__
 *
 * To run a mutation, you first call `useUpdateManyDeliveryDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyDeliveryDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyDeliveryDetailMutation, { data, loading, error }] = useUpdateManyDeliveryDetailMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyDeliveryDetailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateManyDeliveryDetailMutation, UpdateManyDeliveryDetailMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateManyDeliveryDetailMutation, UpdateManyDeliveryDetailMutationVariables>(UpdateManyDeliveryDetailDocument, baseOptions);
      }
export type UpdateManyDeliveryDetailMutationHookResult = ReturnType<typeof useUpdateManyDeliveryDetailMutation>;
export type UpdateManyDeliveryDetailMutationResult = ApolloReactCommon.MutationResult<UpdateManyDeliveryDetailMutation>;
export type UpdateManyDeliveryDetailMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateManyDeliveryDetailMutation, UpdateManyDeliveryDetailMutationVariables>;
export const FindOneInvoiceDocument = gql`
    query findOneInvoice($where: InvoiceWhereUniqueInput!) {
  findOneInvoice(where: $where) {
    ...Invoice
  }
}
    ${InvoiceFragmentDoc}`;

/**
 * __useFindOneInvoiceQuery__
 *
 * To run a query within a React component, call `useFindOneInvoiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneInvoiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneInvoiceQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneInvoiceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneInvoiceQuery, FindOneInvoiceQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneInvoiceQuery, FindOneInvoiceQueryVariables>(FindOneInvoiceDocument, baseOptions);
      }
export function useFindOneInvoiceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneInvoiceQuery, FindOneInvoiceQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneInvoiceQuery, FindOneInvoiceQueryVariables>(FindOneInvoiceDocument, baseOptions);
        }
export type FindOneInvoiceQueryHookResult = ReturnType<typeof useFindOneInvoiceQuery>;
export type FindOneInvoiceLazyQueryHookResult = ReturnType<typeof useFindOneInvoiceLazyQuery>;
export type FindOneInvoiceQueryResult = ApolloReactCommon.QueryResult<FindOneInvoiceQuery, FindOneInvoiceQueryVariables>;
export const FindManyInvoiceDocument = gql`
    query findManyInvoice($where: InvoiceWhereInput, $orderBy: InvoiceOrderByInput, $cursor: InvoiceWhereUniqueInput, $skip: Int, $take: Int) {
  findManyInvoice(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...Invoice
  }
}
    ${InvoiceFragmentDoc}`;

/**
 * __useFindManyInvoiceQuery__
 *
 * To run a query within a React component, call `useFindManyInvoiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyInvoiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyInvoiceQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyInvoiceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyInvoiceQuery, FindManyInvoiceQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyInvoiceQuery, FindManyInvoiceQueryVariables>(FindManyInvoiceDocument, baseOptions);
      }
export function useFindManyInvoiceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyInvoiceQuery, FindManyInvoiceQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyInvoiceQuery, FindManyInvoiceQueryVariables>(FindManyInvoiceDocument, baseOptions);
        }
export type FindManyInvoiceQueryHookResult = ReturnType<typeof useFindManyInvoiceQuery>;
export type FindManyInvoiceLazyQueryHookResult = ReturnType<typeof useFindManyInvoiceLazyQuery>;
export type FindManyInvoiceQueryResult = ApolloReactCommon.QueryResult<FindManyInvoiceQuery, FindManyInvoiceQueryVariables>;
export const FindManyInvoiceCountDocument = gql`
    query findManyInvoiceCount($where: InvoiceWhereInput, $orderBy: InvoiceOrderByInput, $cursor: InvoiceWhereUniqueInput, $skip: Int, $take: Int) {
  findManyInvoiceCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyInvoiceCountQuery__
 *
 * To run a query within a React component, call `useFindManyInvoiceCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyInvoiceCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyInvoiceCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyInvoiceCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyInvoiceCountQuery, FindManyInvoiceCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyInvoiceCountQuery, FindManyInvoiceCountQueryVariables>(FindManyInvoiceCountDocument, baseOptions);
      }
export function useFindManyInvoiceCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyInvoiceCountQuery, FindManyInvoiceCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyInvoiceCountQuery, FindManyInvoiceCountQueryVariables>(FindManyInvoiceCountDocument, baseOptions);
        }
export type FindManyInvoiceCountQueryHookResult = ReturnType<typeof useFindManyInvoiceCountQuery>;
export type FindManyInvoiceCountLazyQueryHookResult = ReturnType<typeof useFindManyInvoiceCountLazyQuery>;
export type FindManyInvoiceCountQueryResult = ApolloReactCommon.QueryResult<FindManyInvoiceCountQuery, FindManyInvoiceCountQueryVariables>;
export const CreateOneInvoiceDocument = gql`
    mutation createOneInvoice($data: InvoiceCreateInput!) {
  createOneInvoice(data: $data) {
    ...Invoice
  }
}
    ${InvoiceFragmentDoc}`;

/**
 * __useCreateOneInvoiceMutation__
 *
 * To run a mutation, you first call `useCreateOneInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneInvoiceMutation, { data, loading, error }] = useCreateOneInvoiceMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneInvoiceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneInvoiceMutation, CreateOneInvoiceMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneInvoiceMutation, CreateOneInvoiceMutationVariables>(CreateOneInvoiceDocument, baseOptions);
      }
export type CreateOneInvoiceMutationHookResult = ReturnType<typeof useCreateOneInvoiceMutation>;
export type CreateOneInvoiceMutationResult = ApolloReactCommon.MutationResult<CreateOneInvoiceMutation>;
export type CreateOneInvoiceMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneInvoiceMutation, CreateOneInvoiceMutationVariables>;
export const UpdateOneInvoiceDocument = gql`
    mutation updateOneInvoice($where: InvoiceWhereUniqueInput!, $data: InvoiceUpdateInput!) {
  updateOneInvoice(where: $where, data: $data) {
    ...Invoice
  }
}
    ${InvoiceFragmentDoc}`;

/**
 * __useUpdateOneInvoiceMutation__
 *
 * To run a mutation, you first call `useUpdateOneInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneInvoiceMutation, { data, loading, error }] = useUpdateOneInvoiceMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneInvoiceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneInvoiceMutation, UpdateOneInvoiceMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneInvoiceMutation, UpdateOneInvoiceMutationVariables>(UpdateOneInvoiceDocument, baseOptions);
      }
export type UpdateOneInvoiceMutationHookResult = ReturnType<typeof useUpdateOneInvoiceMutation>;
export type UpdateOneInvoiceMutationResult = ApolloReactCommon.MutationResult<UpdateOneInvoiceMutation>;
export type UpdateOneInvoiceMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneInvoiceMutation, UpdateOneInvoiceMutationVariables>;
export const DeleteOneInvoiceDocument = gql`
    mutation deleteOneInvoice($where: InvoiceWhereUniqueInput!) {
  deleteOneInvoice(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneInvoiceMutation__
 *
 * To run a mutation, you first call `useDeleteOneInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneInvoiceMutation, { data, loading, error }] = useDeleteOneInvoiceMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneInvoiceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneInvoiceMutation, DeleteOneInvoiceMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneInvoiceMutation, DeleteOneInvoiceMutationVariables>(DeleteOneInvoiceDocument, baseOptions);
      }
export type DeleteOneInvoiceMutationHookResult = ReturnType<typeof useDeleteOneInvoiceMutation>;
export type DeleteOneInvoiceMutationResult = ApolloReactCommon.MutationResult<DeleteOneInvoiceMutation>;
export type DeleteOneInvoiceMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneInvoiceMutation, DeleteOneInvoiceMutationVariables>;
export const DeleteManyInvoiceDocument = gql`
    mutation deleteManyInvoice($where: InvoiceWhereInput) {
  deleteManyInvoice(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyInvoiceMutation__
 *
 * To run a mutation, you first call `useDeleteManyInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyInvoiceMutation, { data, loading, error }] = useDeleteManyInvoiceMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyInvoiceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteManyInvoiceMutation, DeleteManyInvoiceMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteManyInvoiceMutation, DeleteManyInvoiceMutationVariables>(DeleteManyInvoiceDocument, baseOptions);
      }
export type DeleteManyInvoiceMutationHookResult = ReturnType<typeof useDeleteManyInvoiceMutation>;
export type DeleteManyInvoiceMutationResult = ApolloReactCommon.MutationResult<DeleteManyInvoiceMutation>;
export type DeleteManyInvoiceMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteManyInvoiceMutation, DeleteManyInvoiceMutationVariables>;
export const UpdateManyInvoiceDocument = gql`
    mutation updateManyInvoice($where: InvoiceWhereInput, $data: InvoiceUpdateManyMutationInput!) {
  updateManyInvoice(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyInvoiceMutation__
 *
 * To run a mutation, you first call `useUpdateManyInvoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyInvoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyInvoiceMutation, { data, loading, error }] = useUpdateManyInvoiceMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyInvoiceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateManyInvoiceMutation, UpdateManyInvoiceMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateManyInvoiceMutation, UpdateManyInvoiceMutationVariables>(UpdateManyInvoiceDocument, baseOptions);
      }
export type UpdateManyInvoiceMutationHookResult = ReturnType<typeof useUpdateManyInvoiceMutation>;
export type UpdateManyInvoiceMutationResult = ApolloReactCommon.MutationResult<UpdateManyInvoiceMutation>;
export type UpdateManyInvoiceMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateManyInvoiceMutation, UpdateManyInvoiceMutationVariables>;
export const FindOneOrderDocument = gql`
    query findOneOrder($where: OrderWhereUniqueInput!) {
  findOneOrder(where: $where) {
    ...Order
  }
}
    ${OrderFragmentDoc}`;

/**
 * __useFindOneOrderQuery__
 *
 * To run a query within a React component, call `useFindOneOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneOrderQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneOrderQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneOrderQuery, FindOneOrderQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneOrderQuery, FindOneOrderQueryVariables>(FindOneOrderDocument, baseOptions);
      }
export function useFindOneOrderLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneOrderQuery, FindOneOrderQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneOrderQuery, FindOneOrderQueryVariables>(FindOneOrderDocument, baseOptions);
        }
export type FindOneOrderQueryHookResult = ReturnType<typeof useFindOneOrderQuery>;
export type FindOneOrderLazyQueryHookResult = ReturnType<typeof useFindOneOrderLazyQuery>;
export type FindOneOrderQueryResult = ApolloReactCommon.QueryResult<FindOneOrderQuery, FindOneOrderQueryVariables>;
export const FindManyOrderDocument = gql`
    query findManyOrder($where: OrderWhereInput, $orderBy: OrderOrderByInput, $cursor: OrderWhereUniqueInput, $skip: Int, $take: Int) {
  findManyOrder(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...Order
  }
}
    ${OrderFragmentDoc}`;

/**
 * __useFindManyOrderQuery__
 *
 * To run a query within a React component, call `useFindManyOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyOrderQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyOrderQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyOrderQuery, FindManyOrderQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyOrderQuery, FindManyOrderQueryVariables>(FindManyOrderDocument, baseOptions);
      }
export function useFindManyOrderLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyOrderQuery, FindManyOrderQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyOrderQuery, FindManyOrderQueryVariables>(FindManyOrderDocument, baseOptions);
        }
export type FindManyOrderQueryHookResult = ReturnType<typeof useFindManyOrderQuery>;
export type FindManyOrderLazyQueryHookResult = ReturnType<typeof useFindManyOrderLazyQuery>;
export type FindManyOrderQueryResult = ApolloReactCommon.QueryResult<FindManyOrderQuery, FindManyOrderQueryVariables>;
export const FindManyOrderCountDocument = gql`
    query findManyOrderCount($where: OrderWhereInput, $orderBy: OrderOrderByInput, $cursor: OrderWhereUniqueInput, $skip: Int, $take: Int) {
  findManyOrderCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyOrderCountQuery__
 *
 * To run a query within a React component, call `useFindManyOrderCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyOrderCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyOrderCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyOrderCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyOrderCountQuery, FindManyOrderCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyOrderCountQuery, FindManyOrderCountQueryVariables>(FindManyOrderCountDocument, baseOptions);
      }
export function useFindManyOrderCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyOrderCountQuery, FindManyOrderCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyOrderCountQuery, FindManyOrderCountQueryVariables>(FindManyOrderCountDocument, baseOptions);
        }
export type FindManyOrderCountQueryHookResult = ReturnType<typeof useFindManyOrderCountQuery>;
export type FindManyOrderCountLazyQueryHookResult = ReturnType<typeof useFindManyOrderCountLazyQuery>;
export type FindManyOrderCountQueryResult = ApolloReactCommon.QueryResult<FindManyOrderCountQuery, FindManyOrderCountQueryVariables>;
export const CreateOneOrderDocument = gql`
    mutation createOneOrder($data: OrderCreateInput!) {
  createOneOrder(data: $data) {
    ...Order
  }
}
    ${OrderFragmentDoc}`;

/**
 * __useCreateOneOrderMutation__
 *
 * To run a mutation, you first call `useCreateOneOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneOrderMutation, { data, loading, error }] = useCreateOneOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneOrderMutation, CreateOneOrderMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneOrderMutation, CreateOneOrderMutationVariables>(CreateOneOrderDocument, baseOptions);
      }
export type CreateOneOrderMutationHookResult = ReturnType<typeof useCreateOneOrderMutation>;
export type CreateOneOrderMutationResult = ApolloReactCommon.MutationResult<CreateOneOrderMutation>;
export type CreateOneOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneOrderMutation, CreateOneOrderMutationVariables>;
export const UpdateOneOrderDocument = gql`
    mutation updateOneOrder($where: OrderWhereUniqueInput!, $data: OrderUpdateInput!) {
  updateOneOrder(where: $where, data: $data) {
    ...Order
  }
}
    ${OrderFragmentDoc}`;

/**
 * __useUpdateOneOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOneOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneOrderMutation, { data, loading, error }] = useUpdateOneOrderMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneOrderMutation, UpdateOneOrderMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneOrderMutation, UpdateOneOrderMutationVariables>(UpdateOneOrderDocument, baseOptions);
      }
export type UpdateOneOrderMutationHookResult = ReturnType<typeof useUpdateOneOrderMutation>;
export type UpdateOneOrderMutationResult = ApolloReactCommon.MutationResult<UpdateOneOrderMutation>;
export type UpdateOneOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneOrderMutation, UpdateOneOrderMutationVariables>;
export const DeleteOneOrderDocument = gql`
    mutation deleteOneOrder($where: OrderWhereUniqueInput!) {
  deleteOneOrder(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneOrderMutation__
 *
 * To run a mutation, you first call `useDeleteOneOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneOrderMutation, { data, loading, error }] = useDeleteOneOrderMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneOrderMutation, DeleteOneOrderMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneOrderMutation, DeleteOneOrderMutationVariables>(DeleteOneOrderDocument, baseOptions);
      }
export type DeleteOneOrderMutationHookResult = ReturnType<typeof useDeleteOneOrderMutation>;
export type DeleteOneOrderMutationResult = ApolloReactCommon.MutationResult<DeleteOneOrderMutation>;
export type DeleteOneOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneOrderMutation, DeleteOneOrderMutationVariables>;
export const DeleteManyOrderDocument = gql`
    mutation deleteManyOrder($where: OrderWhereInput) {
  deleteManyOrder(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyOrderMutation__
 *
 * To run a mutation, you first call `useDeleteManyOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyOrderMutation, { data, loading, error }] = useDeleteManyOrderMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteManyOrderMutation, DeleteManyOrderMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteManyOrderMutation, DeleteManyOrderMutationVariables>(DeleteManyOrderDocument, baseOptions);
      }
export type DeleteManyOrderMutationHookResult = ReturnType<typeof useDeleteManyOrderMutation>;
export type DeleteManyOrderMutationResult = ApolloReactCommon.MutationResult<DeleteManyOrderMutation>;
export type DeleteManyOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteManyOrderMutation, DeleteManyOrderMutationVariables>;
export const UpdateManyOrderDocument = gql`
    mutation updateManyOrder($where: OrderWhereInput, $data: OrderUpdateManyMutationInput!) {
  updateManyOrder(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyOrderMutation__
 *
 * To run a mutation, you first call `useUpdateManyOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyOrderMutation, { data, loading, error }] = useUpdateManyOrderMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateManyOrderMutation, UpdateManyOrderMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateManyOrderMutation, UpdateManyOrderMutationVariables>(UpdateManyOrderDocument, baseOptions);
      }
export type UpdateManyOrderMutationHookResult = ReturnType<typeof useUpdateManyOrderMutation>;
export type UpdateManyOrderMutationResult = ApolloReactCommon.MutationResult<UpdateManyOrderMutation>;
export type UpdateManyOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateManyOrderMutation, UpdateManyOrderMutationVariables>;
export const FindOneOrderItemDocument = gql`
    query findOneOrderItem($where: OrderItemWhereUniqueInput!) {
  findOneOrderItem(where: $where) {
    ...OrderItem
  }
}
    ${OrderItemFragmentDoc}`;

/**
 * __useFindOneOrderItemQuery__
 *
 * To run a query within a React component, call `useFindOneOrderItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneOrderItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneOrderItemQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneOrderItemQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneOrderItemQuery, FindOneOrderItemQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneOrderItemQuery, FindOneOrderItemQueryVariables>(FindOneOrderItemDocument, baseOptions);
      }
export function useFindOneOrderItemLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneOrderItemQuery, FindOneOrderItemQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneOrderItemQuery, FindOneOrderItemQueryVariables>(FindOneOrderItemDocument, baseOptions);
        }
export type FindOneOrderItemQueryHookResult = ReturnType<typeof useFindOneOrderItemQuery>;
export type FindOneOrderItemLazyQueryHookResult = ReturnType<typeof useFindOneOrderItemLazyQuery>;
export type FindOneOrderItemQueryResult = ApolloReactCommon.QueryResult<FindOneOrderItemQuery, FindOneOrderItemQueryVariables>;
export const FindManyOrderItemDocument = gql`
    query findManyOrderItem($where: OrderItemWhereInput, $orderBy: OrderItemOrderByInput, $cursor: OrderItemWhereUniqueInput, $skip: Int, $take: Int) {
  findManyOrderItem(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...OrderItem
  }
}
    ${OrderItemFragmentDoc}`;

/**
 * __useFindManyOrderItemQuery__
 *
 * To run a query within a React component, call `useFindManyOrderItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyOrderItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyOrderItemQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyOrderItemQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyOrderItemQuery, FindManyOrderItemQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyOrderItemQuery, FindManyOrderItemQueryVariables>(FindManyOrderItemDocument, baseOptions);
      }
export function useFindManyOrderItemLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyOrderItemQuery, FindManyOrderItemQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyOrderItemQuery, FindManyOrderItemQueryVariables>(FindManyOrderItemDocument, baseOptions);
        }
export type FindManyOrderItemQueryHookResult = ReturnType<typeof useFindManyOrderItemQuery>;
export type FindManyOrderItemLazyQueryHookResult = ReturnType<typeof useFindManyOrderItemLazyQuery>;
export type FindManyOrderItemQueryResult = ApolloReactCommon.QueryResult<FindManyOrderItemQuery, FindManyOrderItemQueryVariables>;
export const FindManyOrderItemCountDocument = gql`
    query findManyOrderItemCount($where: OrderItemWhereInput, $orderBy: OrderItemOrderByInput, $cursor: OrderItemWhereUniqueInput, $skip: Int, $take: Int) {
  findManyOrderItemCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyOrderItemCountQuery__
 *
 * To run a query within a React component, call `useFindManyOrderItemCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyOrderItemCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyOrderItemCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyOrderItemCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyOrderItemCountQuery, FindManyOrderItemCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyOrderItemCountQuery, FindManyOrderItemCountQueryVariables>(FindManyOrderItemCountDocument, baseOptions);
      }
export function useFindManyOrderItemCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyOrderItemCountQuery, FindManyOrderItemCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyOrderItemCountQuery, FindManyOrderItemCountQueryVariables>(FindManyOrderItemCountDocument, baseOptions);
        }
export type FindManyOrderItemCountQueryHookResult = ReturnType<typeof useFindManyOrderItemCountQuery>;
export type FindManyOrderItemCountLazyQueryHookResult = ReturnType<typeof useFindManyOrderItemCountLazyQuery>;
export type FindManyOrderItemCountQueryResult = ApolloReactCommon.QueryResult<FindManyOrderItemCountQuery, FindManyOrderItemCountQueryVariables>;
export const CreateOneOrderItemDocument = gql`
    mutation createOneOrderItem($data: OrderItemCreateInput!) {
  createOneOrderItem(data: $data) {
    ...OrderItem
  }
}
    ${OrderItemFragmentDoc}`;

/**
 * __useCreateOneOrderItemMutation__
 *
 * To run a mutation, you first call `useCreateOneOrderItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneOrderItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneOrderItemMutation, { data, loading, error }] = useCreateOneOrderItemMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneOrderItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneOrderItemMutation, CreateOneOrderItemMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneOrderItemMutation, CreateOneOrderItemMutationVariables>(CreateOneOrderItemDocument, baseOptions);
      }
export type CreateOneOrderItemMutationHookResult = ReturnType<typeof useCreateOneOrderItemMutation>;
export type CreateOneOrderItemMutationResult = ApolloReactCommon.MutationResult<CreateOneOrderItemMutation>;
export type CreateOneOrderItemMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneOrderItemMutation, CreateOneOrderItemMutationVariables>;
export const UpdateOneOrderItemDocument = gql`
    mutation updateOneOrderItem($where: OrderItemWhereUniqueInput!, $data: OrderItemUpdateInput!) {
  updateOneOrderItem(where: $where, data: $data) {
    ...OrderItem
  }
}
    ${OrderItemFragmentDoc}`;

/**
 * __useUpdateOneOrderItemMutation__
 *
 * To run a mutation, you first call `useUpdateOneOrderItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneOrderItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneOrderItemMutation, { data, loading, error }] = useUpdateOneOrderItemMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneOrderItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneOrderItemMutation, UpdateOneOrderItemMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneOrderItemMutation, UpdateOneOrderItemMutationVariables>(UpdateOneOrderItemDocument, baseOptions);
      }
export type UpdateOneOrderItemMutationHookResult = ReturnType<typeof useUpdateOneOrderItemMutation>;
export type UpdateOneOrderItemMutationResult = ApolloReactCommon.MutationResult<UpdateOneOrderItemMutation>;
export type UpdateOneOrderItemMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneOrderItemMutation, UpdateOneOrderItemMutationVariables>;
export const DeleteOneOrderItemDocument = gql`
    mutation deleteOneOrderItem($where: OrderItemWhereUniqueInput!) {
  deleteOneOrderItem(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneOrderItemMutation__
 *
 * To run a mutation, you first call `useDeleteOneOrderItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneOrderItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneOrderItemMutation, { data, loading, error }] = useDeleteOneOrderItemMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneOrderItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneOrderItemMutation, DeleteOneOrderItemMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneOrderItemMutation, DeleteOneOrderItemMutationVariables>(DeleteOneOrderItemDocument, baseOptions);
      }
export type DeleteOneOrderItemMutationHookResult = ReturnType<typeof useDeleteOneOrderItemMutation>;
export type DeleteOneOrderItemMutationResult = ApolloReactCommon.MutationResult<DeleteOneOrderItemMutation>;
export type DeleteOneOrderItemMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneOrderItemMutation, DeleteOneOrderItemMutationVariables>;
export const DeleteManyOrderItemDocument = gql`
    mutation deleteManyOrderItem($where: OrderItemWhereInput) {
  deleteManyOrderItem(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyOrderItemMutation__
 *
 * To run a mutation, you first call `useDeleteManyOrderItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyOrderItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyOrderItemMutation, { data, loading, error }] = useDeleteManyOrderItemMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyOrderItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteManyOrderItemMutation, DeleteManyOrderItemMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteManyOrderItemMutation, DeleteManyOrderItemMutationVariables>(DeleteManyOrderItemDocument, baseOptions);
      }
export type DeleteManyOrderItemMutationHookResult = ReturnType<typeof useDeleteManyOrderItemMutation>;
export type DeleteManyOrderItemMutationResult = ApolloReactCommon.MutationResult<DeleteManyOrderItemMutation>;
export type DeleteManyOrderItemMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteManyOrderItemMutation, DeleteManyOrderItemMutationVariables>;
export const UpdateManyOrderItemDocument = gql`
    mutation updateManyOrderItem($where: OrderItemWhereInput, $data: OrderItemUpdateManyMutationInput!) {
  updateManyOrderItem(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyOrderItemMutation__
 *
 * To run a mutation, you first call `useUpdateManyOrderItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyOrderItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyOrderItemMutation, { data, loading, error }] = useUpdateManyOrderItemMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyOrderItemMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateManyOrderItemMutation, UpdateManyOrderItemMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateManyOrderItemMutation, UpdateManyOrderItemMutationVariables>(UpdateManyOrderItemDocument, baseOptions);
      }
export type UpdateManyOrderItemMutationHookResult = ReturnType<typeof useUpdateManyOrderItemMutation>;
export type UpdateManyOrderItemMutationResult = ApolloReactCommon.MutationResult<UpdateManyOrderItemMutation>;
export type UpdateManyOrderItemMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateManyOrderItemMutation, UpdateManyOrderItemMutationVariables>;
export const FindOnePlatformDocument = gql`
    query findOnePlatform($where: PlatformWhereUniqueInput!) {
  findOnePlatform(where: $where) {
    ...Platform
  }
}
    ${PlatformFragmentDoc}`;

/**
 * __useFindOnePlatformQuery__
 *
 * To run a query within a React component, call `useFindOnePlatformQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOnePlatformQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOnePlatformQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOnePlatformQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOnePlatformQuery, FindOnePlatformQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOnePlatformQuery, FindOnePlatformQueryVariables>(FindOnePlatformDocument, baseOptions);
      }
export function useFindOnePlatformLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOnePlatformQuery, FindOnePlatformQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOnePlatformQuery, FindOnePlatformQueryVariables>(FindOnePlatformDocument, baseOptions);
        }
export type FindOnePlatformQueryHookResult = ReturnType<typeof useFindOnePlatformQuery>;
export type FindOnePlatformLazyQueryHookResult = ReturnType<typeof useFindOnePlatformLazyQuery>;
export type FindOnePlatformQueryResult = ApolloReactCommon.QueryResult<FindOnePlatformQuery, FindOnePlatformQueryVariables>;
export const FindManyPlatformDocument = gql`
    query findManyPlatform($where: PlatformWhereInput, $orderBy: PlatformOrderByInput, $cursor: PlatformWhereUniqueInput, $skip: Int, $take: Int) {
  findManyPlatform(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...Platform
  }
}
    ${PlatformFragmentDoc}`;

/**
 * __useFindManyPlatformQuery__
 *
 * To run a query within a React component, call `useFindManyPlatformQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyPlatformQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyPlatformQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyPlatformQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyPlatformQuery, FindManyPlatformQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyPlatformQuery, FindManyPlatformQueryVariables>(FindManyPlatformDocument, baseOptions);
      }
export function useFindManyPlatformLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyPlatformQuery, FindManyPlatformQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyPlatformQuery, FindManyPlatformQueryVariables>(FindManyPlatformDocument, baseOptions);
        }
export type FindManyPlatformQueryHookResult = ReturnType<typeof useFindManyPlatformQuery>;
export type FindManyPlatformLazyQueryHookResult = ReturnType<typeof useFindManyPlatformLazyQuery>;
export type FindManyPlatformQueryResult = ApolloReactCommon.QueryResult<FindManyPlatformQuery, FindManyPlatformQueryVariables>;
export const FindManyPlatformCountDocument = gql`
    query findManyPlatformCount($where: PlatformWhereInput, $orderBy: PlatformOrderByInput, $cursor: PlatformWhereUniqueInput, $skip: Int, $take: Int) {
  findManyPlatformCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyPlatformCountQuery__
 *
 * To run a query within a React component, call `useFindManyPlatformCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyPlatformCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyPlatformCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyPlatformCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyPlatformCountQuery, FindManyPlatformCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyPlatformCountQuery, FindManyPlatformCountQueryVariables>(FindManyPlatformCountDocument, baseOptions);
      }
export function useFindManyPlatformCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyPlatformCountQuery, FindManyPlatformCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyPlatformCountQuery, FindManyPlatformCountQueryVariables>(FindManyPlatformCountDocument, baseOptions);
        }
export type FindManyPlatformCountQueryHookResult = ReturnType<typeof useFindManyPlatformCountQuery>;
export type FindManyPlatformCountLazyQueryHookResult = ReturnType<typeof useFindManyPlatformCountLazyQuery>;
export type FindManyPlatformCountQueryResult = ApolloReactCommon.QueryResult<FindManyPlatformCountQuery, FindManyPlatformCountQueryVariables>;
export const CreateOnePlatformDocument = gql`
    mutation createOnePlatform($data: PlatformCreateInput!) {
  createOnePlatform(data: $data) {
    ...Platform
  }
}
    ${PlatformFragmentDoc}`;

/**
 * __useCreateOnePlatformMutation__
 *
 * To run a mutation, you first call `useCreateOnePlatformMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOnePlatformMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOnePlatformMutation, { data, loading, error }] = useCreateOnePlatformMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOnePlatformMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOnePlatformMutation, CreateOnePlatformMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOnePlatformMutation, CreateOnePlatformMutationVariables>(CreateOnePlatformDocument, baseOptions);
      }
export type CreateOnePlatformMutationHookResult = ReturnType<typeof useCreateOnePlatformMutation>;
export type CreateOnePlatformMutationResult = ApolloReactCommon.MutationResult<CreateOnePlatformMutation>;
export type CreateOnePlatformMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOnePlatformMutation, CreateOnePlatformMutationVariables>;
export const UpdateOnePlatformDocument = gql`
    mutation updateOnePlatform($where: PlatformWhereUniqueInput!, $data: PlatformUpdateInput!) {
  updateOnePlatform(where: $where, data: $data) {
    ...Platform
  }
}
    ${PlatformFragmentDoc}`;

/**
 * __useUpdateOnePlatformMutation__
 *
 * To run a mutation, you first call `useUpdateOnePlatformMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOnePlatformMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOnePlatformMutation, { data, loading, error }] = useUpdateOnePlatformMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOnePlatformMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOnePlatformMutation, UpdateOnePlatformMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOnePlatformMutation, UpdateOnePlatformMutationVariables>(UpdateOnePlatformDocument, baseOptions);
      }
export type UpdateOnePlatformMutationHookResult = ReturnType<typeof useUpdateOnePlatformMutation>;
export type UpdateOnePlatformMutationResult = ApolloReactCommon.MutationResult<UpdateOnePlatformMutation>;
export type UpdateOnePlatformMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOnePlatformMutation, UpdateOnePlatformMutationVariables>;
export const DeleteOnePlatformDocument = gql`
    mutation deleteOnePlatform($where: PlatformWhereUniqueInput!) {
  deleteOnePlatform(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOnePlatformMutation__
 *
 * To run a mutation, you first call `useDeleteOnePlatformMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOnePlatformMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOnePlatformMutation, { data, loading, error }] = useDeleteOnePlatformMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOnePlatformMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOnePlatformMutation, DeleteOnePlatformMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOnePlatformMutation, DeleteOnePlatformMutationVariables>(DeleteOnePlatformDocument, baseOptions);
      }
export type DeleteOnePlatformMutationHookResult = ReturnType<typeof useDeleteOnePlatformMutation>;
export type DeleteOnePlatformMutationResult = ApolloReactCommon.MutationResult<DeleteOnePlatformMutation>;
export type DeleteOnePlatformMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOnePlatformMutation, DeleteOnePlatformMutationVariables>;
export const DeleteManyPlatformDocument = gql`
    mutation deleteManyPlatform($where: PlatformWhereInput) {
  deleteManyPlatform(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyPlatformMutation__
 *
 * To run a mutation, you first call `useDeleteManyPlatformMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyPlatformMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyPlatformMutation, { data, loading, error }] = useDeleteManyPlatformMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyPlatformMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteManyPlatformMutation, DeleteManyPlatformMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteManyPlatformMutation, DeleteManyPlatformMutationVariables>(DeleteManyPlatformDocument, baseOptions);
      }
export type DeleteManyPlatformMutationHookResult = ReturnType<typeof useDeleteManyPlatformMutation>;
export type DeleteManyPlatformMutationResult = ApolloReactCommon.MutationResult<DeleteManyPlatformMutation>;
export type DeleteManyPlatformMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteManyPlatformMutation, DeleteManyPlatformMutationVariables>;
export const UpdateManyPlatformDocument = gql`
    mutation updateManyPlatform($where: PlatformWhereInput, $data: PlatformUpdateManyMutationInput!) {
  updateManyPlatform(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyPlatformMutation__
 *
 * To run a mutation, you first call `useUpdateManyPlatformMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyPlatformMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyPlatformMutation, { data, loading, error }] = useUpdateManyPlatformMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyPlatformMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateManyPlatformMutation, UpdateManyPlatformMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateManyPlatformMutation, UpdateManyPlatformMutationVariables>(UpdateManyPlatformDocument, baseOptions);
      }
export type UpdateManyPlatformMutationHookResult = ReturnType<typeof useUpdateManyPlatformMutation>;
export type UpdateManyPlatformMutationResult = ApolloReactCommon.MutationResult<UpdateManyPlatformMutation>;
export type UpdateManyPlatformMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateManyPlatformMutation, UpdateManyPlatformMutationVariables>;
export const FindOneProductDocument = gql`
    query findOneProduct($where: ProductWhereUniqueInput!) {
  findOneProduct(where: $where) {
    ...Product
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useFindOneProductQuery__
 *
 * To run a query within a React component, call `useFindOneProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneProductQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneProductQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneProductQuery, FindOneProductQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneProductQuery, FindOneProductQueryVariables>(FindOneProductDocument, baseOptions);
      }
export function useFindOneProductLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneProductQuery, FindOneProductQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneProductQuery, FindOneProductQueryVariables>(FindOneProductDocument, baseOptions);
        }
export type FindOneProductQueryHookResult = ReturnType<typeof useFindOneProductQuery>;
export type FindOneProductLazyQueryHookResult = ReturnType<typeof useFindOneProductLazyQuery>;
export type FindOneProductQueryResult = ApolloReactCommon.QueryResult<FindOneProductQuery, FindOneProductQueryVariables>;
export const FindManyProductDocument = gql`
    query findManyProduct($where: ProductWhereInput, $orderBy: ProductOrderByInput, $cursor: ProductWhereUniqueInput, $skip: Int, $take: Int) {
  findManyProduct(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...Product
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useFindManyProductQuery__
 *
 * To run a query within a React component, call `useFindManyProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyProductQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyProductQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyProductQuery, FindManyProductQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyProductQuery, FindManyProductQueryVariables>(FindManyProductDocument, baseOptions);
      }
export function useFindManyProductLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyProductQuery, FindManyProductQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyProductQuery, FindManyProductQueryVariables>(FindManyProductDocument, baseOptions);
        }
export type FindManyProductQueryHookResult = ReturnType<typeof useFindManyProductQuery>;
export type FindManyProductLazyQueryHookResult = ReturnType<typeof useFindManyProductLazyQuery>;
export type FindManyProductQueryResult = ApolloReactCommon.QueryResult<FindManyProductQuery, FindManyProductQueryVariables>;
export const FindManyProductCountDocument = gql`
    query findManyProductCount($where: ProductWhereInput, $orderBy: ProductOrderByInput, $cursor: ProductWhereUniqueInput, $skip: Int, $take: Int) {
  findManyProductCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyProductCountQuery__
 *
 * To run a query within a React component, call `useFindManyProductCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyProductCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyProductCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyProductCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyProductCountQuery, FindManyProductCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyProductCountQuery, FindManyProductCountQueryVariables>(FindManyProductCountDocument, baseOptions);
      }
export function useFindManyProductCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyProductCountQuery, FindManyProductCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyProductCountQuery, FindManyProductCountQueryVariables>(FindManyProductCountDocument, baseOptions);
        }
export type FindManyProductCountQueryHookResult = ReturnType<typeof useFindManyProductCountQuery>;
export type FindManyProductCountLazyQueryHookResult = ReturnType<typeof useFindManyProductCountLazyQuery>;
export type FindManyProductCountQueryResult = ApolloReactCommon.QueryResult<FindManyProductCountQuery, FindManyProductCountQueryVariables>;
export const CreateOneProductDocument = gql`
    mutation createOneProduct($data: ProductCreateInput!) {
  createOneProduct(data: $data) {
    ...Product
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useCreateOneProductMutation__
 *
 * To run a mutation, you first call `useCreateOneProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneProductMutation, { data, loading, error }] = useCreateOneProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneProductMutation, CreateOneProductMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneProductMutation, CreateOneProductMutationVariables>(CreateOneProductDocument, baseOptions);
      }
export type CreateOneProductMutationHookResult = ReturnType<typeof useCreateOneProductMutation>;
export type CreateOneProductMutationResult = ApolloReactCommon.MutationResult<CreateOneProductMutation>;
export type CreateOneProductMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneProductMutation, CreateOneProductMutationVariables>;
export const UpdateOneProductDocument = gql`
    mutation updateOneProduct($where: ProductWhereUniqueInput!, $data: ProductUpdateInput!) {
  updateOneProduct(where: $where, data: $data) {
    ...Product
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useUpdateOneProductMutation__
 *
 * To run a mutation, you first call `useUpdateOneProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneProductMutation, { data, loading, error }] = useUpdateOneProductMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneProductMutation, UpdateOneProductMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneProductMutation, UpdateOneProductMutationVariables>(UpdateOneProductDocument, baseOptions);
      }
export type UpdateOneProductMutationHookResult = ReturnType<typeof useUpdateOneProductMutation>;
export type UpdateOneProductMutationResult = ApolloReactCommon.MutationResult<UpdateOneProductMutation>;
export type UpdateOneProductMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneProductMutation, UpdateOneProductMutationVariables>;
export const DeleteOneProductDocument = gql`
    mutation deleteOneProduct($where: ProductWhereUniqueInput!) {
  deleteOneProduct(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneProductMutation__
 *
 * To run a mutation, you first call `useDeleteOneProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneProductMutation, { data, loading, error }] = useDeleteOneProductMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneProductMutation, DeleteOneProductMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneProductMutation, DeleteOneProductMutationVariables>(DeleteOneProductDocument, baseOptions);
      }
export type DeleteOneProductMutationHookResult = ReturnType<typeof useDeleteOneProductMutation>;
export type DeleteOneProductMutationResult = ApolloReactCommon.MutationResult<DeleteOneProductMutation>;
export type DeleteOneProductMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneProductMutation, DeleteOneProductMutationVariables>;
export const DeleteManyProductDocument = gql`
    mutation deleteManyProduct($where: ProductWhereInput) {
  deleteManyProduct(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyProductMutation__
 *
 * To run a mutation, you first call `useDeleteManyProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyProductMutation, { data, loading, error }] = useDeleteManyProductMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteManyProductMutation, DeleteManyProductMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteManyProductMutation, DeleteManyProductMutationVariables>(DeleteManyProductDocument, baseOptions);
      }
export type DeleteManyProductMutationHookResult = ReturnType<typeof useDeleteManyProductMutation>;
export type DeleteManyProductMutationResult = ApolloReactCommon.MutationResult<DeleteManyProductMutation>;
export type DeleteManyProductMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteManyProductMutation, DeleteManyProductMutationVariables>;
export const UpdateManyProductDocument = gql`
    mutation updateManyProduct($where: ProductWhereInput, $data: ProductUpdateManyMutationInput!) {
  updateManyProduct(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyProductMutation__
 *
 * To run a mutation, you first call `useUpdateManyProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyProductMutation, { data, loading, error }] = useUpdateManyProductMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyProductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateManyProductMutation, UpdateManyProductMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateManyProductMutation, UpdateManyProductMutationVariables>(UpdateManyProductDocument, baseOptions);
      }
export type UpdateManyProductMutationHookResult = ReturnType<typeof useUpdateManyProductMutation>;
export type UpdateManyProductMutationResult = ApolloReactCommon.MutationResult<UpdateManyProductMutation>;
export type UpdateManyProductMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateManyProductMutation, UpdateManyProductMutationVariables>;
export const FindOneReviewDocument = gql`
    query findOneReview($where: ReviewWhereUniqueInput!) {
  findOneReview(where: $where) {
    ...Review
  }
}
    ${ReviewFragmentDoc}`;

/**
 * __useFindOneReviewQuery__
 *
 * To run a query within a React component, call `useFindOneReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneReviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneReviewQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneReviewQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneReviewQuery, FindOneReviewQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneReviewQuery, FindOneReviewQueryVariables>(FindOneReviewDocument, baseOptions);
      }
export function useFindOneReviewLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneReviewQuery, FindOneReviewQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneReviewQuery, FindOneReviewQueryVariables>(FindOneReviewDocument, baseOptions);
        }
export type FindOneReviewQueryHookResult = ReturnType<typeof useFindOneReviewQuery>;
export type FindOneReviewLazyQueryHookResult = ReturnType<typeof useFindOneReviewLazyQuery>;
export type FindOneReviewQueryResult = ApolloReactCommon.QueryResult<FindOneReviewQuery, FindOneReviewQueryVariables>;
export const FindManyReviewDocument = gql`
    query findManyReview($where: ReviewWhereInput, $orderBy: ReviewOrderByInput, $cursor: ReviewWhereUniqueInput, $skip: Int, $take: Int) {
  findManyReview(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...Review
  }
}
    ${ReviewFragmentDoc}`;

/**
 * __useFindManyReviewQuery__
 *
 * To run a query within a React component, call `useFindManyReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyReviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyReviewQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyReviewQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyReviewQuery, FindManyReviewQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyReviewQuery, FindManyReviewQueryVariables>(FindManyReviewDocument, baseOptions);
      }
export function useFindManyReviewLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyReviewQuery, FindManyReviewQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyReviewQuery, FindManyReviewQueryVariables>(FindManyReviewDocument, baseOptions);
        }
export type FindManyReviewQueryHookResult = ReturnType<typeof useFindManyReviewQuery>;
export type FindManyReviewLazyQueryHookResult = ReturnType<typeof useFindManyReviewLazyQuery>;
export type FindManyReviewQueryResult = ApolloReactCommon.QueryResult<FindManyReviewQuery, FindManyReviewQueryVariables>;
export const FindManyReviewCountDocument = gql`
    query findManyReviewCount($where: ReviewWhereInput, $orderBy: ReviewOrderByInput, $cursor: ReviewWhereUniqueInput, $skip: Int, $take: Int) {
  findManyReviewCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyReviewCountQuery__
 *
 * To run a query within a React component, call `useFindManyReviewCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyReviewCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyReviewCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyReviewCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyReviewCountQuery, FindManyReviewCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyReviewCountQuery, FindManyReviewCountQueryVariables>(FindManyReviewCountDocument, baseOptions);
      }
export function useFindManyReviewCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyReviewCountQuery, FindManyReviewCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyReviewCountQuery, FindManyReviewCountQueryVariables>(FindManyReviewCountDocument, baseOptions);
        }
export type FindManyReviewCountQueryHookResult = ReturnType<typeof useFindManyReviewCountQuery>;
export type FindManyReviewCountLazyQueryHookResult = ReturnType<typeof useFindManyReviewCountLazyQuery>;
export type FindManyReviewCountQueryResult = ApolloReactCommon.QueryResult<FindManyReviewCountQuery, FindManyReviewCountQueryVariables>;
export const CreateOneReviewDocument = gql`
    mutation createOneReview($data: ReviewCreateInput!) {
  createOneReview(data: $data) {
    ...Review
  }
}
    ${ReviewFragmentDoc}`;

/**
 * __useCreateOneReviewMutation__
 *
 * To run a mutation, you first call `useCreateOneReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneReviewMutation, { data, loading, error }] = useCreateOneReviewMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneReviewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneReviewMutation, CreateOneReviewMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneReviewMutation, CreateOneReviewMutationVariables>(CreateOneReviewDocument, baseOptions);
      }
export type CreateOneReviewMutationHookResult = ReturnType<typeof useCreateOneReviewMutation>;
export type CreateOneReviewMutationResult = ApolloReactCommon.MutationResult<CreateOneReviewMutation>;
export type CreateOneReviewMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneReviewMutation, CreateOneReviewMutationVariables>;
export const UpdateOneReviewDocument = gql`
    mutation updateOneReview($where: ReviewWhereUniqueInput!, $data: ReviewUpdateInput!) {
  updateOneReview(where: $where, data: $data) {
    ...Review
  }
}
    ${ReviewFragmentDoc}`;

/**
 * __useUpdateOneReviewMutation__
 *
 * To run a mutation, you first call `useUpdateOneReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneReviewMutation, { data, loading, error }] = useUpdateOneReviewMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneReviewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneReviewMutation, UpdateOneReviewMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneReviewMutation, UpdateOneReviewMutationVariables>(UpdateOneReviewDocument, baseOptions);
      }
export type UpdateOneReviewMutationHookResult = ReturnType<typeof useUpdateOneReviewMutation>;
export type UpdateOneReviewMutationResult = ApolloReactCommon.MutationResult<UpdateOneReviewMutation>;
export type UpdateOneReviewMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneReviewMutation, UpdateOneReviewMutationVariables>;
export const DeleteOneReviewDocument = gql`
    mutation deleteOneReview($where: ReviewWhereUniqueInput!) {
  deleteOneReview(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneReviewMutation__
 *
 * To run a mutation, you first call `useDeleteOneReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneReviewMutation, { data, loading, error }] = useDeleteOneReviewMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneReviewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneReviewMutation, DeleteOneReviewMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneReviewMutation, DeleteOneReviewMutationVariables>(DeleteOneReviewDocument, baseOptions);
      }
export type DeleteOneReviewMutationHookResult = ReturnType<typeof useDeleteOneReviewMutation>;
export type DeleteOneReviewMutationResult = ApolloReactCommon.MutationResult<DeleteOneReviewMutation>;
export type DeleteOneReviewMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneReviewMutation, DeleteOneReviewMutationVariables>;
export const DeleteManyReviewDocument = gql`
    mutation deleteManyReview($where: ReviewWhereInput) {
  deleteManyReview(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyReviewMutation__
 *
 * To run a mutation, you first call `useDeleteManyReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyReviewMutation, { data, loading, error }] = useDeleteManyReviewMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyReviewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteManyReviewMutation, DeleteManyReviewMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteManyReviewMutation, DeleteManyReviewMutationVariables>(DeleteManyReviewDocument, baseOptions);
      }
export type DeleteManyReviewMutationHookResult = ReturnType<typeof useDeleteManyReviewMutation>;
export type DeleteManyReviewMutationResult = ApolloReactCommon.MutationResult<DeleteManyReviewMutation>;
export type DeleteManyReviewMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteManyReviewMutation, DeleteManyReviewMutationVariables>;
export const UpdateManyReviewDocument = gql`
    mutation updateManyReview($where: ReviewWhereInput, $data: ReviewUpdateManyMutationInput!) {
  updateManyReview(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyReviewMutation__
 *
 * To run a mutation, you first call `useUpdateManyReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyReviewMutation, { data, loading, error }] = useUpdateManyReviewMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyReviewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateManyReviewMutation, UpdateManyReviewMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateManyReviewMutation, UpdateManyReviewMutationVariables>(UpdateManyReviewDocument, baseOptions);
      }
export type UpdateManyReviewMutationHookResult = ReturnType<typeof useUpdateManyReviewMutation>;
export type UpdateManyReviewMutationResult = ApolloReactCommon.MutationResult<UpdateManyReviewMutation>;
export type UpdateManyReviewMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateManyReviewMutation, UpdateManyReviewMutationVariables>;
export const FindOneStaffDocument = gql`
    query findOneStaff($where: StaffWhereUniqueInput!) {
  findOneStaff(where: $where) {
    ...Staff
  }
}
    ${StaffFragmentDoc}`;

/**
 * __useFindOneStaffQuery__
 *
 * To run a query within a React component, call `useFindOneStaffQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneStaffQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneStaffQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneStaffQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneStaffQuery, FindOneStaffQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneStaffQuery, FindOneStaffQueryVariables>(FindOneStaffDocument, baseOptions);
      }
export function useFindOneStaffLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneStaffQuery, FindOneStaffQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneStaffQuery, FindOneStaffQueryVariables>(FindOneStaffDocument, baseOptions);
        }
export type FindOneStaffQueryHookResult = ReturnType<typeof useFindOneStaffQuery>;
export type FindOneStaffLazyQueryHookResult = ReturnType<typeof useFindOneStaffLazyQuery>;
export type FindOneStaffQueryResult = ApolloReactCommon.QueryResult<FindOneStaffQuery, FindOneStaffQueryVariables>;
export const FindManyStaffDocument = gql`
    query findManyStaff($where: StaffWhereInput, $orderBy: StaffOrderByInput, $cursor: StaffWhereUniqueInput, $skip: Int, $take: Int) {
  findManyStaff(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...Staff
  }
}
    ${StaffFragmentDoc}`;

/**
 * __useFindManyStaffQuery__
 *
 * To run a query within a React component, call `useFindManyStaffQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyStaffQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyStaffQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyStaffQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyStaffQuery, FindManyStaffQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyStaffQuery, FindManyStaffQueryVariables>(FindManyStaffDocument, baseOptions);
      }
export function useFindManyStaffLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyStaffQuery, FindManyStaffQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyStaffQuery, FindManyStaffQueryVariables>(FindManyStaffDocument, baseOptions);
        }
export type FindManyStaffQueryHookResult = ReturnType<typeof useFindManyStaffQuery>;
export type FindManyStaffLazyQueryHookResult = ReturnType<typeof useFindManyStaffLazyQuery>;
export type FindManyStaffQueryResult = ApolloReactCommon.QueryResult<FindManyStaffQuery, FindManyStaffQueryVariables>;
export const FindManyStaffCountDocument = gql`
    query findManyStaffCount($where: StaffWhereInput, $orderBy: StaffOrderByInput, $cursor: StaffWhereUniqueInput, $skip: Int, $take: Int) {
  findManyStaffCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyStaffCountQuery__
 *
 * To run a query within a React component, call `useFindManyStaffCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyStaffCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyStaffCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyStaffCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyStaffCountQuery, FindManyStaffCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyStaffCountQuery, FindManyStaffCountQueryVariables>(FindManyStaffCountDocument, baseOptions);
      }
export function useFindManyStaffCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyStaffCountQuery, FindManyStaffCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyStaffCountQuery, FindManyStaffCountQueryVariables>(FindManyStaffCountDocument, baseOptions);
        }
export type FindManyStaffCountQueryHookResult = ReturnType<typeof useFindManyStaffCountQuery>;
export type FindManyStaffCountLazyQueryHookResult = ReturnType<typeof useFindManyStaffCountLazyQuery>;
export type FindManyStaffCountQueryResult = ApolloReactCommon.QueryResult<FindManyStaffCountQuery, FindManyStaffCountQueryVariables>;
export const CreateOneStaffDocument = gql`
    mutation createOneStaff($data: StaffCreateInput!) {
  createOneStaff(data: $data) {
    ...Staff
  }
}
    ${StaffFragmentDoc}`;

/**
 * __useCreateOneStaffMutation__
 *
 * To run a mutation, you first call `useCreateOneStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneStaffMutation, { data, loading, error }] = useCreateOneStaffMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneStaffMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneStaffMutation, CreateOneStaffMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneStaffMutation, CreateOneStaffMutationVariables>(CreateOneStaffDocument, baseOptions);
      }
export type CreateOneStaffMutationHookResult = ReturnType<typeof useCreateOneStaffMutation>;
export type CreateOneStaffMutationResult = ApolloReactCommon.MutationResult<CreateOneStaffMutation>;
export type CreateOneStaffMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneStaffMutation, CreateOneStaffMutationVariables>;
export const UpdateOneStaffDocument = gql`
    mutation updateOneStaff($where: StaffWhereUniqueInput!, $data: StaffUpdateInput!) {
  updateOneStaff(where: $where, data: $data) {
    ...Staff
  }
}
    ${StaffFragmentDoc}`;

/**
 * __useUpdateOneStaffMutation__
 *
 * To run a mutation, you first call `useUpdateOneStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneStaffMutation, { data, loading, error }] = useUpdateOneStaffMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneStaffMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneStaffMutation, UpdateOneStaffMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneStaffMutation, UpdateOneStaffMutationVariables>(UpdateOneStaffDocument, baseOptions);
      }
export type UpdateOneStaffMutationHookResult = ReturnType<typeof useUpdateOneStaffMutation>;
export type UpdateOneStaffMutationResult = ApolloReactCommon.MutationResult<UpdateOneStaffMutation>;
export type UpdateOneStaffMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneStaffMutation, UpdateOneStaffMutationVariables>;
export const DeleteOneStaffDocument = gql`
    mutation deleteOneStaff($where: StaffWhereUniqueInput!) {
  deleteOneStaff(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneStaffMutation__
 *
 * To run a mutation, you first call `useDeleteOneStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneStaffMutation, { data, loading, error }] = useDeleteOneStaffMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneStaffMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneStaffMutation, DeleteOneStaffMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneStaffMutation, DeleteOneStaffMutationVariables>(DeleteOneStaffDocument, baseOptions);
      }
export type DeleteOneStaffMutationHookResult = ReturnType<typeof useDeleteOneStaffMutation>;
export type DeleteOneStaffMutationResult = ApolloReactCommon.MutationResult<DeleteOneStaffMutation>;
export type DeleteOneStaffMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneStaffMutation, DeleteOneStaffMutationVariables>;
export const DeleteManyStaffDocument = gql`
    mutation deleteManyStaff($where: StaffWhereInput) {
  deleteManyStaff(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyStaffMutation__
 *
 * To run a mutation, you first call `useDeleteManyStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyStaffMutation, { data, loading, error }] = useDeleteManyStaffMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyStaffMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteManyStaffMutation, DeleteManyStaffMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteManyStaffMutation, DeleteManyStaffMutationVariables>(DeleteManyStaffDocument, baseOptions);
      }
export type DeleteManyStaffMutationHookResult = ReturnType<typeof useDeleteManyStaffMutation>;
export type DeleteManyStaffMutationResult = ApolloReactCommon.MutationResult<DeleteManyStaffMutation>;
export type DeleteManyStaffMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteManyStaffMutation, DeleteManyStaffMutationVariables>;
export const UpdateManyStaffDocument = gql`
    mutation updateManyStaff($where: StaffWhereInput, $data: StaffUpdateManyMutationInput!) {
  updateManyStaff(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyStaffMutation__
 *
 * To run a mutation, you first call `useUpdateManyStaffMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyStaffMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyStaffMutation, { data, loading, error }] = useUpdateManyStaffMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyStaffMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateManyStaffMutation, UpdateManyStaffMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateManyStaffMutation, UpdateManyStaffMutationVariables>(UpdateManyStaffDocument, baseOptions);
      }
export type UpdateManyStaffMutationHookResult = ReturnType<typeof useUpdateManyStaffMutation>;
export type UpdateManyStaffMutationResult = ApolloReactCommon.MutationResult<UpdateManyStaffMutation>;
export type UpdateManyStaffMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateManyStaffMutation, UpdateManyStaffMutationVariables>;
export const FindOneUserDocument = gql`
    query findOneUser($where: UserWhereUniqueInput!) {
  findOneUser(where: $where) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useFindOneUserQuery__
 *
 * To run a query within a React component, call `useFindOneUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneUserQuery, FindOneUserQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneUserQuery, FindOneUserQueryVariables>(FindOneUserDocument, baseOptions);
      }
export function useFindOneUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneUserQuery, FindOneUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneUserQuery, FindOneUserQueryVariables>(FindOneUserDocument, baseOptions);
        }
export type FindOneUserQueryHookResult = ReturnType<typeof useFindOneUserQuery>;
export type FindOneUserLazyQueryHookResult = ReturnType<typeof useFindOneUserLazyQuery>;
export type FindOneUserQueryResult = ApolloReactCommon.QueryResult<FindOneUserQuery, FindOneUserQueryVariables>;
export const FindManyUserDocument = gql`
    query findManyUser($where: UserWhereInput, $orderBy: UserOrderByInput, $cursor: UserWhereUniqueInput, $skip: Int, $take: Int) {
  findManyUser(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useFindManyUserQuery__
 *
 * To run a query within a React component, call `useFindManyUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyUserQuery, FindManyUserQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyUserQuery, FindManyUserQueryVariables>(FindManyUserDocument, baseOptions);
      }
export function useFindManyUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyUserQuery, FindManyUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyUserQuery, FindManyUserQueryVariables>(FindManyUserDocument, baseOptions);
        }
export type FindManyUserQueryHookResult = ReturnType<typeof useFindManyUserQuery>;
export type FindManyUserLazyQueryHookResult = ReturnType<typeof useFindManyUserLazyQuery>;
export type FindManyUserQueryResult = ApolloReactCommon.QueryResult<FindManyUserQuery, FindManyUserQueryVariables>;
export const FindManyUserCountDocument = gql`
    query findManyUserCount($where: UserWhereInput, $orderBy: UserOrderByInput, $cursor: UserWhereUniqueInput, $skip: Int, $take: Int) {
  findManyUserCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyUserCountQuery__
 *
 * To run a query within a React component, call `useFindManyUserCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyUserCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyUserCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyUserCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyUserCountQuery, FindManyUserCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyUserCountQuery, FindManyUserCountQueryVariables>(FindManyUserCountDocument, baseOptions);
      }
export function useFindManyUserCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyUserCountQuery, FindManyUserCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyUserCountQuery, FindManyUserCountQueryVariables>(FindManyUserCountDocument, baseOptions);
        }
export type FindManyUserCountQueryHookResult = ReturnType<typeof useFindManyUserCountQuery>;
export type FindManyUserCountLazyQueryHookResult = ReturnType<typeof useFindManyUserCountLazyQuery>;
export type FindManyUserCountQueryResult = ApolloReactCommon.QueryResult<FindManyUserCountQuery, FindManyUserCountQueryVariables>;
export const CreateOneUserDocument = gql`
    mutation createOneUser($data: UserCreateInput!) {
  createOneUser(data: $data) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useCreateOneUserMutation__
 *
 * To run a mutation, you first call `useCreateOneUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneUserMutation, { data, loading, error }] = useCreateOneUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneUserMutation, CreateOneUserMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneUserMutation, CreateOneUserMutationVariables>(CreateOneUserDocument, baseOptions);
      }
export type CreateOneUserMutationHookResult = ReturnType<typeof useCreateOneUserMutation>;
export type CreateOneUserMutationResult = ApolloReactCommon.MutationResult<CreateOneUserMutation>;
export type CreateOneUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneUserMutation, CreateOneUserMutationVariables>;
export const UpdateOneUserDocument = gql`
    mutation updateOneUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
  updateOneUser(where: $where, data: $data) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useUpdateOneUserMutation__
 *
 * To run a mutation, you first call `useUpdateOneUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneUserMutation, { data, loading, error }] = useUpdateOneUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneUserMutation, UpdateOneUserMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneUserMutation, UpdateOneUserMutationVariables>(UpdateOneUserDocument, baseOptions);
      }
export type UpdateOneUserMutationHookResult = ReturnType<typeof useUpdateOneUserMutation>;
export type UpdateOneUserMutationResult = ApolloReactCommon.MutationResult<UpdateOneUserMutation>;
export type UpdateOneUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneUserMutation, UpdateOneUserMutationVariables>;
export const DeleteOneUserDocument = gql`
    mutation deleteOneUser($where: UserWhereUniqueInput!) {
  deleteOneUser(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneUserMutation__
 *
 * To run a mutation, you first call `useDeleteOneUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneUserMutation, { data, loading, error }] = useDeleteOneUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneUserMutation, DeleteOneUserMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneUserMutation, DeleteOneUserMutationVariables>(DeleteOneUserDocument, baseOptions);
      }
export type DeleteOneUserMutationHookResult = ReturnType<typeof useDeleteOneUserMutation>;
export type DeleteOneUserMutationResult = ApolloReactCommon.MutationResult<DeleteOneUserMutation>;
export type DeleteOneUserMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneUserMutation, DeleteOneUserMutationVariables>;
export const DeleteManyUserDocument = gql`
    mutation deleteManyUser($where: UserWhereInput) {
  deleteManyUser(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyUserMutation__
 *
 * To run a mutation, you first call `useDeleteManyUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyUserMutation, { data, loading, error }] = useDeleteManyUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteManyUserMutation, DeleteManyUserMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteManyUserMutation, DeleteManyUserMutationVariables>(DeleteManyUserDocument, baseOptions);
      }
export type DeleteManyUserMutationHookResult = ReturnType<typeof useDeleteManyUserMutation>;
export type DeleteManyUserMutationResult = ApolloReactCommon.MutationResult<DeleteManyUserMutation>;
export type DeleteManyUserMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteManyUserMutation, DeleteManyUserMutationVariables>;
export const UpdateManyUserDocument = gql`
    mutation updateManyUser($where: UserWhereInput, $data: UserUpdateManyMutationInput!) {
  updateManyUser(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyUserMutation__
 *
 * To run a mutation, you first call `useUpdateManyUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyUserMutation, { data, loading, error }] = useUpdateManyUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateManyUserMutation, UpdateManyUserMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateManyUserMutation, UpdateManyUserMutationVariables>(UpdateManyUserDocument, baseOptions);
      }
export type UpdateManyUserMutationHookResult = ReturnType<typeof useUpdateManyUserMutation>;
export type UpdateManyUserMutationResult = ApolloReactCommon.MutationResult<UpdateManyUserMutation>;
export type UpdateManyUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateManyUserMutation, UpdateManyUserMutationVariables>;