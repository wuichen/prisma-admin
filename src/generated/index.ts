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

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type BooleanFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<Scalars['Boolean']>;
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['String']>;
  contain: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  post: Post;
  postId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type CommentCreateInput = {
  author?: Maybe<UserCreateOneWithoutCommentsInput>;
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  post: PostCreateOneWithoutCommentsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentCreateManyWithoutAuthorInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  create?: Maybe<Array<CommentCreateWithoutAuthorInput>>;
};

export type CommentCreateManyWithoutPostInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
};

export type CommentCreateWithoutAuthorInput = {
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  post: PostCreateOneWithoutCommentsInput;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentCreateWithoutPostInput = {
  author?: Maybe<UserCreateOneWithoutCommentsInput>;
  contain: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentFilter = {
  every?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
};

export type CommentOrderByInput = {
  authorId?: Maybe<OrderByArg>;
  contain?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  postId?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type CommentScalarWhereInput = {
  AND?: Maybe<Array<CommentScalarWhereInput>>;
  authorId?: Maybe<NullableStringFilter>;
  contain?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<CommentScalarWhereInput>>;
  OR?: Maybe<Array<CommentScalarWhereInput>>;
  postId?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CommentUpdateInput = {
  author?: Maybe<UserUpdateOneWithoutCommentsInput>;
  contain?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentUpdateManyDataInput = {
  contain?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentUpdateManyMutationInput = {
  contain?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  create?: Maybe<Array<CommentCreateWithoutAuthorInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type CommentUpdateManyWithoutPostInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutPostInput>>;
};

export type CommentUpdateManyWithWhereNestedInput = {
  data: CommentUpdateManyDataInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateWithoutAuthorDataInput = {
  contain?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentUpdateWithoutPostDataInput = {
  author?: Maybe<UserUpdateOneWithoutCommentsInput>;
  contain?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
  data: CommentUpdateWithoutAuthorDataInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutPostInput = {
  data: CommentUpdateWithoutPostDataInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
  create: CommentCreateWithoutAuthorInput;
  update: CommentUpdateWithoutAuthorDataInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutPostInput = {
  create: CommentCreateWithoutPostInput;
  update: CommentUpdateWithoutPostDataInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: Maybe<Array<CommentWhereInput>>;
  author?: Maybe<UserWhereInput>;
  authorId?: Maybe<NullableStringFilter>;
  contain?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<CommentWhereInput>>;
  OR?: Maybe<Array<CommentWhereInput>>;
  post?: Maybe<PostWhereInput>;
  postId?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CommentWhereUniqueInput = {
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

export type Group = {
  __typename?: 'Group';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  users: Array<User>;
};


export type GroupUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type GroupCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UserCreateManyWithoutGroupInput>;
};

export type GroupCreateOneWithoutUsersInput = {
  connect?: Maybe<GroupWhereUniqueInput>;
  create?: Maybe<GroupCreateWithoutUsersInput>;
};

export type GroupCreateWithoutUsersInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type GroupUpdateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UserUpdateManyWithoutGroupInput>;
};

export type GroupUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupUpdateOneWithoutUsersInput = {
  connect?: Maybe<GroupWhereUniqueInput>;
  create?: Maybe<GroupCreateWithoutUsersInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<GroupUpdateWithoutUsersDataInput>;
  upsert?: Maybe<GroupUpsertWithoutUsersInput>;
};

export type GroupUpdateWithoutUsersDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupUpsertWithoutUsersInput = {
  create: GroupCreateWithoutUsersInput;
  update: GroupUpdateWithoutUsersDataInput;
};

export type GroupWhereInput = {
  AND?: Maybe<Array<GroupWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  NOT?: Maybe<Array<GroupWhereInput>>;
  OR?: Maybe<Array<GroupWhereInput>>;
  updatedAt?: Maybe<DateTimeFilter>;
  users?: Maybe<UserFilter>;
};

export type GroupWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
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
  createOneComment: Comment;
  createOneGroup: Group;
  createOnePost: Post;
  createOneUser: User;
  deleteManyComment: BatchPayload;
  deleteManyGroup: BatchPayload;
  deleteManyPost: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteOneComment?: Maybe<Comment>;
  deleteOneGroup?: Maybe<Group>;
  deleteOnePost?: Maybe<Post>;
  deleteOneUser?: Maybe<User>;
  login?: Maybe<User>;
  logout: Scalars['Boolean'];
  signup: User;
  updateField: Field;
  updateManyComment: BatchPayload;
  updateManyGroup: BatchPayload;
  updateManyPost: BatchPayload;
  updateManyUser: BatchPayload;
  updateModel: Model;
  updateOneComment: Comment;
  updateOneGroup: Group;
  updateOnePost: Post;
  updateOneUser: User;
  upsertOneComment: Comment;
  upsertOneGroup: Group;
  upsertOnePost: Post;
  upsertOneUser: User;
};


export type MutationCreateOneCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateOneGroupArgs = {
  data: GroupCreateInput;
};


export type MutationCreateOnePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyCommentArgs = {
  where?: Maybe<CommentWhereInput>;
};


export type MutationDeleteManyGroupArgs = {
  where?: Maybe<GroupWhereInput>;
};


export type MutationDeleteManyPostArgs = {
  where?: Maybe<PostWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteOneCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteOneGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  idToken: Scalars['String'];
};


export type MutationSignupArgs = {
  idToken: Scalars['String'];
};


export type MutationUpdateFieldArgs = {
  data?: Maybe<UpdateFieldInput>;
  id: Scalars['String'];
  modelId: Scalars['String'];
};


export type MutationUpdateManyCommentArgs = {
  data: CommentUpdateManyMutationInput;
  where?: Maybe<CommentWhereInput>;
};


export type MutationUpdateManyGroupArgs = {
  data: GroupUpdateManyMutationInput;
  where?: Maybe<GroupWhereInput>;
};


export type MutationUpdateManyPostArgs = {
  data: PostUpdateManyMutationInput;
  where?: Maybe<PostWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateModelArgs = {
  data?: Maybe<UpdateModelInput>;
  id: Scalars['String'];
};


export type MutationUpdateOneCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateOneGroupArgs = {
  data: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};


export type MutationUpdateOnePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneCommentArgs = {
  create: CommentCreateInput;
  update: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpsertOneGroupArgs = {
  create: GroupCreateInput;
  update: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};


export type MutationUpsertOnePostArgs = {
  create: PostCreateInput;
  update: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
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

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc'
}

export type Post = {
  __typename?: 'Post';
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['String']>;
  comments: Array<Comment>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type PostCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};

export type PostCreateInput = {
  author?: Maybe<UserCreateOneWithoutPostsInput>;
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostCreateManyWithoutAuthorInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
};

export type PostCreateOneWithoutCommentsInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  create?: Maybe<PostCreateWithoutCommentsInput>;
};

export type PostCreateWithoutAuthorInput = {
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostCreateWithoutCommentsInput = {
  author?: Maybe<UserCreateOneWithoutPostsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  published?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostFilter = {
  every?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
};

export type PostOrderByInput = {
  authorId?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  published?: Maybe<OrderByArg>;
  title?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
};

export type PostScalarWhereInput = {
  AND?: Maybe<Array<PostScalarWhereInput>>;
  authorId?: Maybe<NullableStringFilter>;
  comments?: Maybe<CommentFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<PostScalarWhereInput>>;
  OR?: Maybe<Array<PostScalarWhereInput>>;
  published?: Maybe<BooleanFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type PostUpdateInput = {
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostUpdateManyWithoutAuthorInput = {
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type PostUpdateManyWithWhereNestedInput = {
  data: PostUpdateManyDataInput;
  where: PostScalarWhereInput;
};

export type PostUpdateOneRequiredWithoutCommentsInput = {
  connect?: Maybe<PostWhereUniqueInput>;
  create?: Maybe<PostCreateWithoutCommentsInput>;
  update?: Maybe<PostUpdateWithoutCommentsDataInput>;
  upsert?: Maybe<PostUpsertWithoutCommentsInput>;
};

export type PostUpdateWithoutAuthorDataInput = {
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostUpdateWithoutCommentsDataInput = {
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  data: PostUpdateWithoutAuthorDataInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithoutCommentsInput = {
  create: PostCreateWithoutCommentsInput;
  update: PostUpdateWithoutCommentsDataInput;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  update: PostUpdateWithoutAuthorDataInput;
  where: PostWhereUniqueInput;
};

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>;
  author?: Maybe<UserWhereInput>;
  authorId?: Maybe<NullableStringFilter>;
  comments?: Maybe<CommentFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  NOT?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  published?: Maybe<BooleanFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  findManyComment?: Maybe<Array<Comment>>;
  findManyCommentCount: Scalars['Int'];
  findManyGroup?: Maybe<Array<Group>>;
  findManyGroupCount: Scalars['Int'];
  findManyPost?: Maybe<Array<Post>>;
  findManyPostCount: Scalars['Int'];
  findManyUser?: Maybe<Array<User>>;
  findManyUserCount: Scalars['Int'];
  findOneComment?: Maybe<Comment>;
  findOneGroup?: Maybe<Group>;
  findOnePost?: Maybe<Post>;
  findOneUser?: Maybe<User>;
  getSchema: Schema;
  me?: Maybe<User>;
};


export type QueryFindManyCommentArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type QueryFindManyCommentCountArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type QueryFindManyGroupArgs = {
  cursor?: Maybe<GroupWhereUniqueInput>;
  orderBy?: Maybe<GroupOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GroupWhereInput>;
};


export type QueryFindManyGroupCountArgs = {
  cursor?: Maybe<GroupWhereUniqueInput>;
  orderBy?: Maybe<GroupOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GroupWhereInput>;
};


export type QueryFindManyPostArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};


export type QueryFindManyPostCountArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
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


export type QueryFindOneCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryFindOneGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type QueryFindOnePostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryFindOneUserArgs = {
  where: UserWhereUniqueInput;
};

export type Schema = {
  __typename?: 'Schema';
  enums: Array<Enum>;
  models: Array<Model>;
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
  comments: Array<Comment>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  group?: Maybe<Group>;
  groupId?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  posts: Array<Post>;
};


export type UserCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type UserPostsArgs = {
  cursor?: Maybe<PostWhereUniqueInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<PostWhereInput>;
};

export type UserCreateInput = {
  comments?: Maybe<CommentCreateManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  group?: Maybe<GroupCreateOneWithoutUsersInput>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
};

export type UserCreateManyWithoutGroupInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutGroupInput>>;
};

export type UserCreateOneWithoutCommentsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutCommentsInput>;
};

export type UserCreateOneWithoutPostsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutPostsInput>;
};

export type UserCreateWithoutCommentsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  group?: Maybe<GroupCreateOneWithoutUsersInput>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
};

export type UserCreateWithoutGroupInput = {
  comments?: Maybe<CommentCreateManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
};

export type UserCreateWithoutPostsInput = {
  comments?: Maybe<CommentCreateManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  group?: Maybe<GroupCreateOneWithoutUsersInput>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type UserFilter = {
  every?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
};

export type UserOrderByInput = {
  createdAt?: Maybe<OrderByArg>;
  email?: Maybe<OrderByArg>;
  groupId?: Maybe<OrderByArg>;
  id?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
};

export type UserScalarWhereInput = {
  AND?: Maybe<Array<UserScalarWhereInput>>;
  comments?: Maybe<CommentFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  groupId?: Maybe<NullableIntFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<NullableStringFilter>;
  NOT?: Maybe<Array<UserScalarWhereInput>>;
  OR?: Maybe<Array<UserScalarWhereInput>>;
  posts?: Maybe<PostFilter>;
};

export type UserUpdateInput = {
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  group?: Maybe<GroupUpdateOneWithoutUsersInput>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateManyDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserUpdateManyWithoutGroupInput = {
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  create?: Maybe<Array<UserCreateWithoutGroupInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutGroupInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereNestedInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutGroupInput>>;
};

export type UserUpdateManyWithWhereNestedInput = {
  data: UserUpdateManyDataInput;
  where: UserScalarWhereInput;
};

export type UserUpdateOneWithoutCommentsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutCommentsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutCommentsDataInput>;
  upsert?: Maybe<UserUpsertWithoutCommentsInput>;
};

export type UserUpdateOneWithoutPostsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  create?: Maybe<UserCreateWithoutPostsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutPostsDataInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
};

export type UserUpdateWithoutCommentsDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  group?: Maybe<GroupUpdateOneWithoutUsersInput>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateWithoutGroupDataInput = {
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateWithoutPostsDataInput = {
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  group?: Maybe<GroupUpdateOneWithoutUsersInput>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserUpdateWithWhereUniqueWithoutGroupInput = {
  data: UserUpdateWithoutGroupDataInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  update: UserUpdateWithoutCommentsDataInput;
};

export type UserUpsertWithoutPostsInput = {
  create: UserCreateWithoutPostsInput;
  update: UserUpdateWithoutPostsDataInput;
};

export type UserUpsertWithWhereUniqueWithoutGroupInput = {
  create: UserCreateWithoutGroupInput;
  update: UserUpdateWithoutGroupDataInput;
  where: UserWhereUniqueInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  comments?: Maybe<CommentFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  group?: Maybe<GroupWhereInput>;
  groupId?: Maybe<NullableIntFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<NullableStringFilter>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  posts?: Maybe<PostFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )> }
);

export type LoginMutationVariables = {
  idToken: Scalars['String'];
};


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type SignupMutationVariables = {
  idToken: Scalars['String'];
};


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type LogoutMutationVariables = {};


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type CommentFieldsFragment = (
  { __typename?: 'Comment' }
  & Pick<Comment, 'id' | 'contain' | 'createdAt' | 'updatedAt' | 'authorId' | 'postId'>
);

export type CommentFragment = (
  { __typename?: 'Comment' }
  & { post: (
    { __typename?: 'Post' }
    & PostFieldsFragment
  ), author?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
  & CommentFieldsFragment
);

export type FindOneCommentQueryVariables = {
  where: CommentWhereUniqueInput;
};


export type FindOneCommentQuery = (
  { __typename?: 'Query' }
  & { findOneComment?: Maybe<(
    { __typename?: 'Comment' }
    & CommentFragment
  )> }
);

export type FindManyCommentQueryVariables = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyCommentQuery = (
  { __typename?: 'Query' }
  & { findManyComment?: Maybe<Array<(
    { __typename?: 'Comment' }
    & CommentFragment
  )>> }
);

export type FindManyCommentCountQueryVariables = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  cursor?: Maybe<CommentWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyCommentCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyCommentCount'>
);

export type CreateOneCommentMutationVariables = {
  data: CommentCreateInput;
};


export type CreateOneCommentMutation = (
  { __typename?: 'Mutation' }
  & { createOneComment: (
    { __typename?: 'Comment' }
    & CommentFragment
  ) }
);

export type UpdateOneCommentMutationVariables = {
  where: CommentWhereUniqueInput;
  data: CommentUpdateInput;
};


export type UpdateOneCommentMutation = (
  { __typename?: 'Mutation' }
  & { updateOneComment: (
    { __typename?: 'Comment' }
    & CommentFragment
  ) }
);

export type DeleteOneCommentMutationVariables = {
  where: CommentWhereUniqueInput;
};


export type DeleteOneCommentMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneComment?: Maybe<(
    { __typename?: 'Comment' }
    & Pick<Comment, 'id'>
  )> }
);

export type DeleteManyCommentMutationVariables = {
  where?: Maybe<CommentWhereInput>;
};


export type DeleteManyCommentMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyComment: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyCommentMutationVariables = {
  where?: Maybe<CommentWhereInput>;
  data: CommentUpdateManyMutationInput;
};


export type UpdateManyCommentMutation = (
  { __typename?: 'Mutation' }
  & { updateManyComment: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type GroupFieldsFragment = (
  { __typename?: 'Group' }
  & Pick<Group, 'id' | 'name' | 'createdAt' | 'updatedAt'>
);

export type GroupFragment = (
  { __typename?: 'Group' }
  & GroupFieldsFragment
);

export type FindOneGroupQueryVariables = {
  where: GroupWhereUniqueInput;
};


export type FindOneGroupQuery = (
  { __typename?: 'Query' }
  & { findOneGroup?: Maybe<(
    { __typename?: 'Group' }
    & GroupFragment
  )> }
);

export type FindManyGroupQueryVariables = {
  where?: Maybe<GroupWhereInput>;
  orderBy?: Maybe<GroupOrderByInput>;
  cursor?: Maybe<GroupWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyGroupQuery = (
  { __typename?: 'Query' }
  & { findManyGroup?: Maybe<Array<(
    { __typename?: 'Group' }
    & GroupFragment
  )>> }
);

export type FindManyGroupCountQueryVariables = {
  where?: Maybe<GroupWhereInput>;
  orderBy?: Maybe<GroupOrderByInput>;
  cursor?: Maybe<GroupWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyGroupCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyGroupCount'>
);

export type CreateOneGroupMutationVariables = {
  data: GroupCreateInput;
};


export type CreateOneGroupMutation = (
  { __typename?: 'Mutation' }
  & { createOneGroup: (
    { __typename?: 'Group' }
    & GroupFragment
  ) }
);

export type UpdateOneGroupMutationVariables = {
  where: GroupWhereUniqueInput;
  data: GroupUpdateInput;
};


export type UpdateOneGroupMutation = (
  { __typename?: 'Mutation' }
  & { updateOneGroup: (
    { __typename?: 'Group' }
    & GroupFragment
  ) }
);

export type DeleteOneGroupMutationVariables = {
  where: GroupWhereUniqueInput;
};


export type DeleteOneGroupMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneGroup?: Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'id'>
  )> }
);

export type DeleteManyGroupMutationVariables = {
  where?: Maybe<GroupWhereInput>;
};


export type DeleteManyGroupMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyGroup: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyGroupMutationVariables = {
  where?: Maybe<GroupWhereInput>;
  data: GroupUpdateManyMutationInput;
};


export type UpdateManyGroupMutation = (
  { __typename?: 'Mutation' }
  & { updateManyGroup: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type PostFieldsFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'published' | 'title' | 'authorId' | 'createdAt' | 'updatedAt'>
);

export type PostFragment = (
  { __typename?: 'Post' }
  & { author?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
  & PostFieldsFragment
);

export type FindOnePostQueryVariables = {
  where: PostWhereUniqueInput;
};


export type FindOnePostQuery = (
  { __typename?: 'Query' }
  & { findOnePost?: Maybe<(
    { __typename?: 'Post' }
    & PostFragment
  )> }
);

export type FindManyPostQueryVariables = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  cursor?: Maybe<PostWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyPostQuery = (
  { __typename?: 'Query' }
  & { findManyPost?: Maybe<Array<(
    { __typename?: 'Post' }
    & PostFragment
  )>> }
);

export type FindManyPostCountQueryVariables = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  cursor?: Maybe<PostWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type FindManyPostCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyPostCount'>
);

export type CreateOnePostMutationVariables = {
  data: PostCreateInput;
};


export type CreateOnePostMutation = (
  { __typename?: 'Mutation' }
  & { createOnePost: (
    { __typename?: 'Post' }
    & PostFragment
  ) }
);

export type UpdateOnePostMutationVariables = {
  where: PostWhereUniqueInput;
  data: PostUpdateInput;
};


export type UpdateOnePostMutation = (
  { __typename?: 'Mutation' }
  & { updateOnePost: (
    { __typename?: 'Post' }
    & PostFragment
  ) }
);

export type DeleteOnePostMutationVariables = {
  where: PostWhereUniqueInput;
};


export type DeleteOnePostMutation = (
  { __typename?: 'Mutation' }
  & { deleteOnePost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id'>
  )> }
);

export type DeleteManyPostMutationVariables = {
  where?: Maybe<PostWhereInput>;
};


export type DeleteManyPostMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyPost: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UpdateManyPostMutationVariables = {
  where?: Maybe<PostWhereInput>;
  data: PostUpdateManyMutationInput;
};


export type UpdateManyPostMutation = (
  { __typename?: 'Mutation' }
  & { updateManyPost: (
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  ) }
);

export type UserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'email' | 'name' | 'createdAt' | 'groupId'>
);

export type UserFragment = (
  { __typename?: 'User' }
  & { group?: Maybe<(
    { __typename?: 'Group' }
    & GroupFieldsFragment
  )> }
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

export const CommentFieldsFragmentDoc = gql`
    fragment CommentFields on Comment {
  id
  contain
  createdAt
  updatedAt
  authorId
  postId
}
    `;
export const PostFieldsFragmentDoc = gql`
    fragment PostFields on Post {
  id
  published
  title
  authorId
  createdAt
  updatedAt
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  id
  email
  name
  createdAt
  groupId
}
    `;
export const CommentFragmentDoc = gql`
    fragment Comment on Comment {
  ...CommentFields
  post {
    ...PostFields
  }
  author {
    ...UserFields
  }
}
    ${CommentFieldsFragmentDoc}
${PostFieldsFragmentDoc}
${UserFieldsFragmentDoc}`;
export const GroupFieldsFragmentDoc = gql`
    fragment GroupFields on Group {
  id
  name
  createdAt
  updatedAt
}
    `;
export const GroupFragmentDoc = gql`
    fragment Group on Group {
  ...GroupFields
}
    ${GroupFieldsFragmentDoc}`;
export const PostFragmentDoc = gql`
    fragment Post on Post {
  ...PostFields
  author {
    ...UserFields
  }
}
    ${PostFieldsFragmentDoc}
${UserFieldsFragmentDoc}`;
export const UserFragmentDoc = gql`
    fragment User on User {
  ...UserFields
  group {
    ...GroupFields
  }
}
    ${UserFieldsFragmentDoc}
${GroupFieldsFragmentDoc}`;
export const MeDocument = gql`
    query me {
  me {
    id
    name
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
    id
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
    id
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
export const FindOneCommentDocument = gql`
    query findOneComment($where: CommentWhereUniqueInput!) {
  findOneComment(where: $where) {
    ...Comment
  }
}
    ${CommentFragmentDoc}`;

/**
 * __useFindOneCommentQuery__
 *
 * To run a query within a React component, call `useFindOneCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneCommentQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneCommentQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneCommentQuery, FindOneCommentQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneCommentQuery, FindOneCommentQueryVariables>(FindOneCommentDocument, baseOptions);
      }
export function useFindOneCommentLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneCommentQuery, FindOneCommentQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneCommentQuery, FindOneCommentQueryVariables>(FindOneCommentDocument, baseOptions);
        }
export type FindOneCommentQueryHookResult = ReturnType<typeof useFindOneCommentQuery>;
export type FindOneCommentLazyQueryHookResult = ReturnType<typeof useFindOneCommentLazyQuery>;
export type FindOneCommentQueryResult = ApolloReactCommon.QueryResult<FindOneCommentQuery, FindOneCommentQueryVariables>;
export const FindManyCommentDocument = gql`
    query findManyComment($where: CommentWhereInput, $orderBy: CommentOrderByInput, $cursor: CommentWhereUniqueInput, $skip: Int, $take: Int) {
  findManyComment(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...Comment
  }
}
    ${CommentFragmentDoc}`;

/**
 * __useFindManyCommentQuery__
 *
 * To run a query within a React component, call `useFindManyCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyCommentQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyCommentQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyCommentQuery, FindManyCommentQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyCommentQuery, FindManyCommentQueryVariables>(FindManyCommentDocument, baseOptions);
      }
export function useFindManyCommentLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyCommentQuery, FindManyCommentQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyCommentQuery, FindManyCommentQueryVariables>(FindManyCommentDocument, baseOptions);
        }
export type FindManyCommentQueryHookResult = ReturnType<typeof useFindManyCommentQuery>;
export type FindManyCommentLazyQueryHookResult = ReturnType<typeof useFindManyCommentLazyQuery>;
export type FindManyCommentQueryResult = ApolloReactCommon.QueryResult<FindManyCommentQuery, FindManyCommentQueryVariables>;
export const FindManyCommentCountDocument = gql`
    query findManyCommentCount($where: CommentWhereInput, $orderBy: CommentOrderByInput, $cursor: CommentWhereUniqueInput, $skip: Int, $take: Int) {
  findManyCommentCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyCommentCountQuery__
 *
 * To run a query within a React component, call `useFindManyCommentCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyCommentCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyCommentCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyCommentCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyCommentCountQuery, FindManyCommentCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyCommentCountQuery, FindManyCommentCountQueryVariables>(FindManyCommentCountDocument, baseOptions);
      }
export function useFindManyCommentCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyCommentCountQuery, FindManyCommentCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyCommentCountQuery, FindManyCommentCountQueryVariables>(FindManyCommentCountDocument, baseOptions);
        }
export type FindManyCommentCountQueryHookResult = ReturnType<typeof useFindManyCommentCountQuery>;
export type FindManyCommentCountLazyQueryHookResult = ReturnType<typeof useFindManyCommentCountLazyQuery>;
export type FindManyCommentCountQueryResult = ApolloReactCommon.QueryResult<FindManyCommentCountQuery, FindManyCommentCountQueryVariables>;
export const CreateOneCommentDocument = gql`
    mutation createOneComment($data: CommentCreateInput!) {
  createOneComment(data: $data) {
    ...Comment
  }
}
    ${CommentFragmentDoc}`;

/**
 * __useCreateOneCommentMutation__
 *
 * To run a mutation, you first call `useCreateOneCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneCommentMutation, { data, loading, error }] = useCreateOneCommentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneCommentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneCommentMutation, CreateOneCommentMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneCommentMutation, CreateOneCommentMutationVariables>(CreateOneCommentDocument, baseOptions);
      }
export type CreateOneCommentMutationHookResult = ReturnType<typeof useCreateOneCommentMutation>;
export type CreateOneCommentMutationResult = ApolloReactCommon.MutationResult<CreateOneCommentMutation>;
export type CreateOneCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneCommentMutation, CreateOneCommentMutationVariables>;
export const UpdateOneCommentDocument = gql`
    mutation updateOneComment($where: CommentWhereUniqueInput!, $data: CommentUpdateInput!) {
  updateOneComment(where: $where, data: $data) {
    ...Comment
  }
}
    ${CommentFragmentDoc}`;

/**
 * __useUpdateOneCommentMutation__
 *
 * To run a mutation, you first call `useUpdateOneCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneCommentMutation, { data, loading, error }] = useUpdateOneCommentMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneCommentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneCommentMutation, UpdateOneCommentMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneCommentMutation, UpdateOneCommentMutationVariables>(UpdateOneCommentDocument, baseOptions);
      }
export type UpdateOneCommentMutationHookResult = ReturnType<typeof useUpdateOneCommentMutation>;
export type UpdateOneCommentMutationResult = ApolloReactCommon.MutationResult<UpdateOneCommentMutation>;
export type UpdateOneCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneCommentMutation, UpdateOneCommentMutationVariables>;
export const DeleteOneCommentDocument = gql`
    mutation deleteOneComment($where: CommentWhereUniqueInput!) {
  deleteOneComment(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneCommentMutation__
 *
 * To run a mutation, you first call `useDeleteOneCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneCommentMutation, { data, loading, error }] = useDeleteOneCommentMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneCommentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneCommentMutation, DeleteOneCommentMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneCommentMutation, DeleteOneCommentMutationVariables>(DeleteOneCommentDocument, baseOptions);
      }
export type DeleteOneCommentMutationHookResult = ReturnType<typeof useDeleteOneCommentMutation>;
export type DeleteOneCommentMutationResult = ApolloReactCommon.MutationResult<DeleteOneCommentMutation>;
export type DeleteOneCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneCommentMutation, DeleteOneCommentMutationVariables>;
export const DeleteManyCommentDocument = gql`
    mutation deleteManyComment($where: CommentWhereInput) {
  deleteManyComment(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyCommentMutation__
 *
 * To run a mutation, you first call `useDeleteManyCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyCommentMutation, { data, loading, error }] = useDeleteManyCommentMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyCommentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteManyCommentMutation, DeleteManyCommentMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteManyCommentMutation, DeleteManyCommentMutationVariables>(DeleteManyCommentDocument, baseOptions);
      }
export type DeleteManyCommentMutationHookResult = ReturnType<typeof useDeleteManyCommentMutation>;
export type DeleteManyCommentMutationResult = ApolloReactCommon.MutationResult<DeleteManyCommentMutation>;
export type DeleteManyCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteManyCommentMutation, DeleteManyCommentMutationVariables>;
export const UpdateManyCommentDocument = gql`
    mutation updateManyComment($where: CommentWhereInput, $data: CommentUpdateManyMutationInput!) {
  updateManyComment(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyCommentMutation__
 *
 * To run a mutation, you first call `useUpdateManyCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyCommentMutation, { data, loading, error }] = useUpdateManyCommentMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyCommentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateManyCommentMutation, UpdateManyCommentMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateManyCommentMutation, UpdateManyCommentMutationVariables>(UpdateManyCommentDocument, baseOptions);
      }
export type UpdateManyCommentMutationHookResult = ReturnType<typeof useUpdateManyCommentMutation>;
export type UpdateManyCommentMutationResult = ApolloReactCommon.MutationResult<UpdateManyCommentMutation>;
export type UpdateManyCommentMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateManyCommentMutation, UpdateManyCommentMutationVariables>;
export const FindOneGroupDocument = gql`
    query findOneGroup($where: GroupWhereUniqueInput!) {
  findOneGroup(where: $where) {
    ...Group
  }
}
    ${GroupFragmentDoc}`;

/**
 * __useFindOneGroupQuery__
 *
 * To run a query within a React component, call `useFindOneGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneGroupQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOneGroupQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOneGroupQuery, FindOneGroupQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOneGroupQuery, FindOneGroupQueryVariables>(FindOneGroupDocument, baseOptions);
      }
export function useFindOneGroupLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOneGroupQuery, FindOneGroupQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOneGroupQuery, FindOneGroupQueryVariables>(FindOneGroupDocument, baseOptions);
        }
export type FindOneGroupQueryHookResult = ReturnType<typeof useFindOneGroupQuery>;
export type FindOneGroupLazyQueryHookResult = ReturnType<typeof useFindOneGroupLazyQuery>;
export type FindOneGroupQueryResult = ApolloReactCommon.QueryResult<FindOneGroupQuery, FindOneGroupQueryVariables>;
export const FindManyGroupDocument = gql`
    query findManyGroup($where: GroupWhereInput, $orderBy: GroupOrderByInput, $cursor: GroupWhereUniqueInput, $skip: Int, $take: Int) {
  findManyGroup(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...Group
  }
}
    ${GroupFragmentDoc}`;

/**
 * __useFindManyGroupQuery__
 *
 * To run a query within a React component, call `useFindManyGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyGroupQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyGroupQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyGroupQuery, FindManyGroupQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyGroupQuery, FindManyGroupQueryVariables>(FindManyGroupDocument, baseOptions);
      }
export function useFindManyGroupLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyGroupQuery, FindManyGroupQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyGroupQuery, FindManyGroupQueryVariables>(FindManyGroupDocument, baseOptions);
        }
export type FindManyGroupQueryHookResult = ReturnType<typeof useFindManyGroupQuery>;
export type FindManyGroupLazyQueryHookResult = ReturnType<typeof useFindManyGroupLazyQuery>;
export type FindManyGroupQueryResult = ApolloReactCommon.QueryResult<FindManyGroupQuery, FindManyGroupQueryVariables>;
export const FindManyGroupCountDocument = gql`
    query findManyGroupCount($where: GroupWhereInput, $orderBy: GroupOrderByInput, $cursor: GroupWhereUniqueInput, $skip: Int, $take: Int) {
  findManyGroupCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyGroupCountQuery__
 *
 * To run a query within a React component, call `useFindManyGroupCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyGroupCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyGroupCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyGroupCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyGroupCountQuery, FindManyGroupCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyGroupCountQuery, FindManyGroupCountQueryVariables>(FindManyGroupCountDocument, baseOptions);
      }
export function useFindManyGroupCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyGroupCountQuery, FindManyGroupCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyGroupCountQuery, FindManyGroupCountQueryVariables>(FindManyGroupCountDocument, baseOptions);
        }
export type FindManyGroupCountQueryHookResult = ReturnType<typeof useFindManyGroupCountQuery>;
export type FindManyGroupCountLazyQueryHookResult = ReturnType<typeof useFindManyGroupCountLazyQuery>;
export type FindManyGroupCountQueryResult = ApolloReactCommon.QueryResult<FindManyGroupCountQuery, FindManyGroupCountQueryVariables>;
export const CreateOneGroupDocument = gql`
    mutation createOneGroup($data: GroupCreateInput!) {
  createOneGroup(data: $data) {
    ...Group
  }
}
    ${GroupFragmentDoc}`;

/**
 * __useCreateOneGroupMutation__
 *
 * To run a mutation, you first call `useCreateOneGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneGroupMutation, { data, loading, error }] = useCreateOneGroupMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneGroupMutation, CreateOneGroupMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneGroupMutation, CreateOneGroupMutationVariables>(CreateOneGroupDocument, baseOptions);
      }
export type CreateOneGroupMutationHookResult = ReturnType<typeof useCreateOneGroupMutation>;
export type CreateOneGroupMutationResult = ApolloReactCommon.MutationResult<CreateOneGroupMutation>;
export type CreateOneGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneGroupMutation, CreateOneGroupMutationVariables>;
export const UpdateOneGroupDocument = gql`
    mutation updateOneGroup($where: GroupWhereUniqueInput!, $data: GroupUpdateInput!) {
  updateOneGroup(where: $where, data: $data) {
    ...Group
  }
}
    ${GroupFragmentDoc}`;

/**
 * __useUpdateOneGroupMutation__
 *
 * To run a mutation, you first call `useUpdateOneGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneGroupMutation, { data, loading, error }] = useUpdateOneGroupMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOneGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOneGroupMutation, UpdateOneGroupMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOneGroupMutation, UpdateOneGroupMutationVariables>(UpdateOneGroupDocument, baseOptions);
      }
export type UpdateOneGroupMutationHookResult = ReturnType<typeof useUpdateOneGroupMutation>;
export type UpdateOneGroupMutationResult = ApolloReactCommon.MutationResult<UpdateOneGroupMutation>;
export type UpdateOneGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOneGroupMutation, UpdateOneGroupMutationVariables>;
export const DeleteOneGroupDocument = gql`
    mutation deleteOneGroup($where: GroupWhereUniqueInput!) {
  deleteOneGroup(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOneGroupMutation__
 *
 * To run a mutation, you first call `useDeleteOneGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneGroupMutation, { data, loading, error }] = useDeleteOneGroupMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneGroupMutation, DeleteOneGroupMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneGroupMutation, DeleteOneGroupMutationVariables>(DeleteOneGroupDocument, baseOptions);
      }
export type DeleteOneGroupMutationHookResult = ReturnType<typeof useDeleteOneGroupMutation>;
export type DeleteOneGroupMutationResult = ApolloReactCommon.MutationResult<DeleteOneGroupMutation>;
export type DeleteOneGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneGroupMutation, DeleteOneGroupMutationVariables>;
export const DeleteManyGroupDocument = gql`
    mutation deleteManyGroup($where: GroupWhereInput) {
  deleteManyGroup(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyGroupMutation__
 *
 * To run a mutation, you first call `useDeleteManyGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyGroupMutation, { data, loading, error }] = useDeleteManyGroupMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteManyGroupMutation, DeleteManyGroupMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteManyGroupMutation, DeleteManyGroupMutationVariables>(DeleteManyGroupDocument, baseOptions);
      }
export type DeleteManyGroupMutationHookResult = ReturnType<typeof useDeleteManyGroupMutation>;
export type DeleteManyGroupMutationResult = ApolloReactCommon.MutationResult<DeleteManyGroupMutation>;
export type DeleteManyGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteManyGroupMutation, DeleteManyGroupMutationVariables>;
export const UpdateManyGroupDocument = gql`
    mutation updateManyGroup($where: GroupWhereInput, $data: GroupUpdateManyMutationInput!) {
  updateManyGroup(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyGroupMutation__
 *
 * To run a mutation, you first call `useUpdateManyGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyGroupMutation, { data, loading, error }] = useUpdateManyGroupMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyGroupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateManyGroupMutation, UpdateManyGroupMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateManyGroupMutation, UpdateManyGroupMutationVariables>(UpdateManyGroupDocument, baseOptions);
      }
export type UpdateManyGroupMutationHookResult = ReturnType<typeof useUpdateManyGroupMutation>;
export type UpdateManyGroupMutationResult = ApolloReactCommon.MutationResult<UpdateManyGroupMutation>;
export type UpdateManyGroupMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateManyGroupMutation, UpdateManyGroupMutationVariables>;
export const FindOnePostDocument = gql`
    query findOnePost($where: PostWhereUniqueInput!) {
  findOnePost(where: $where) {
    ...Post
  }
}
    ${PostFragmentDoc}`;

/**
 * __useFindOnePostQuery__
 *
 * To run a query within a React component, call `useFindOnePostQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOnePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOnePostQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFindOnePostQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindOnePostQuery, FindOnePostQueryVariables>) {
        return ApolloReactHooks.useQuery<FindOnePostQuery, FindOnePostQueryVariables>(FindOnePostDocument, baseOptions);
      }
export function useFindOnePostLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindOnePostQuery, FindOnePostQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindOnePostQuery, FindOnePostQueryVariables>(FindOnePostDocument, baseOptions);
        }
export type FindOnePostQueryHookResult = ReturnType<typeof useFindOnePostQuery>;
export type FindOnePostLazyQueryHookResult = ReturnType<typeof useFindOnePostLazyQuery>;
export type FindOnePostQueryResult = ApolloReactCommon.QueryResult<FindOnePostQuery, FindOnePostQueryVariables>;
export const FindManyPostDocument = gql`
    query findManyPost($where: PostWhereInput, $orderBy: PostOrderByInput, $cursor: PostWhereUniqueInput, $skip: Int, $take: Int) {
  findManyPost(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take) {
    ...Post
  }
}
    ${PostFragmentDoc}`;

/**
 * __useFindManyPostQuery__
 *
 * To run a query within a React component, call `useFindManyPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyPostQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyPostQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyPostQuery, FindManyPostQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyPostQuery, FindManyPostQueryVariables>(FindManyPostDocument, baseOptions);
      }
export function useFindManyPostLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyPostQuery, FindManyPostQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyPostQuery, FindManyPostQueryVariables>(FindManyPostDocument, baseOptions);
        }
export type FindManyPostQueryHookResult = ReturnType<typeof useFindManyPostQuery>;
export type FindManyPostLazyQueryHookResult = ReturnType<typeof useFindManyPostLazyQuery>;
export type FindManyPostQueryResult = ApolloReactCommon.QueryResult<FindManyPostQuery, FindManyPostQueryVariables>;
export const FindManyPostCountDocument = gql`
    query findManyPostCount($where: PostWhereInput, $orderBy: PostOrderByInput, $cursor: PostWhereUniqueInput, $skip: Int, $take: Int) {
  findManyPostCount(where: $where, orderBy: $orderBy, cursor: $cursor, skip: $skip, take: $take)
}
    `;

/**
 * __useFindManyPostCountQuery__
 *
 * To run a query within a React component, call `useFindManyPostCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyPostCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyPostCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useFindManyPostCountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FindManyPostCountQuery, FindManyPostCountQueryVariables>) {
        return ApolloReactHooks.useQuery<FindManyPostCountQuery, FindManyPostCountQueryVariables>(FindManyPostCountDocument, baseOptions);
      }
export function useFindManyPostCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FindManyPostCountQuery, FindManyPostCountQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FindManyPostCountQuery, FindManyPostCountQueryVariables>(FindManyPostCountDocument, baseOptions);
        }
export type FindManyPostCountQueryHookResult = ReturnType<typeof useFindManyPostCountQuery>;
export type FindManyPostCountLazyQueryHookResult = ReturnType<typeof useFindManyPostCountLazyQuery>;
export type FindManyPostCountQueryResult = ApolloReactCommon.QueryResult<FindManyPostCountQuery, FindManyPostCountQueryVariables>;
export const CreateOnePostDocument = gql`
    mutation createOnePost($data: PostCreateInput!) {
  createOnePost(data: $data) {
    ...Post
  }
}
    ${PostFragmentDoc}`;

/**
 * __useCreateOnePostMutation__
 *
 * To run a mutation, you first call `useCreateOnePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOnePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOnePostMutation, { data, loading, error }] = useCreateOnePostMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOnePostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOnePostMutation, CreateOnePostMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOnePostMutation, CreateOnePostMutationVariables>(CreateOnePostDocument, baseOptions);
      }
export type CreateOnePostMutationHookResult = ReturnType<typeof useCreateOnePostMutation>;
export type CreateOnePostMutationResult = ApolloReactCommon.MutationResult<CreateOnePostMutation>;
export type CreateOnePostMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOnePostMutation, CreateOnePostMutationVariables>;
export const UpdateOnePostDocument = gql`
    mutation updateOnePost($where: PostWhereUniqueInput!, $data: PostUpdateInput!) {
  updateOnePost(where: $where, data: $data) {
    ...Post
  }
}
    ${PostFragmentDoc}`;

/**
 * __useUpdateOnePostMutation__
 *
 * To run a mutation, you first call `useUpdateOnePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOnePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOnePostMutation, { data, loading, error }] = useUpdateOnePostMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOnePostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOnePostMutation, UpdateOnePostMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOnePostMutation, UpdateOnePostMutationVariables>(UpdateOnePostDocument, baseOptions);
      }
export type UpdateOnePostMutationHookResult = ReturnType<typeof useUpdateOnePostMutation>;
export type UpdateOnePostMutationResult = ApolloReactCommon.MutationResult<UpdateOnePostMutation>;
export type UpdateOnePostMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOnePostMutation, UpdateOnePostMutationVariables>;
export const DeleteOnePostDocument = gql`
    mutation deleteOnePost($where: PostWhereUniqueInput!) {
  deleteOnePost(where: $where) {
    id
  }
}
    `;

/**
 * __useDeleteOnePostMutation__
 *
 * To run a mutation, you first call `useDeleteOnePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOnePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOnePostMutation, { data, loading, error }] = useDeleteOnePostMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOnePostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOnePostMutation, DeleteOnePostMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOnePostMutation, DeleteOnePostMutationVariables>(DeleteOnePostDocument, baseOptions);
      }
export type DeleteOnePostMutationHookResult = ReturnType<typeof useDeleteOnePostMutation>;
export type DeleteOnePostMutationResult = ApolloReactCommon.MutationResult<DeleteOnePostMutation>;
export type DeleteOnePostMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOnePostMutation, DeleteOnePostMutationVariables>;
export const DeleteManyPostDocument = gql`
    mutation deleteManyPost($where: PostWhereInput) {
  deleteManyPost(where: $where) {
    count
  }
}
    `;

/**
 * __useDeleteManyPostMutation__
 *
 * To run a mutation, you first call `useDeleteManyPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteManyPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteManyPostMutation, { data, loading, error }] = useDeleteManyPostMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteManyPostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteManyPostMutation, DeleteManyPostMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteManyPostMutation, DeleteManyPostMutationVariables>(DeleteManyPostDocument, baseOptions);
      }
export type DeleteManyPostMutationHookResult = ReturnType<typeof useDeleteManyPostMutation>;
export type DeleteManyPostMutationResult = ApolloReactCommon.MutationResult<DeleteManyPostMutation>;
export type DeleteManyPostMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteManyPostMutation, DeleteManyPostMutationVariables>;
export const UpdateManyPostDocument = gql`
    mutation updateManyPost($where: PostWhereInput, $data: PostUpdateManyMutationInput!) {
  updateManyPost(where: $where, data: $data) {
    count
  }
}
    `;

/**
 * __useUpdateManyPostMutation__
 *
 * To run a mutation, you first call `useUpdateManyPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateManyPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateManyPostMutation, { data, loading, error }] = useUpdateManyPostMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateManyPostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateManyPostMutation, UpdateManyPostMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateManyPostMutation, UpdateManyPostMutationVariables>(UpdateManyPostDocument, baseOptions);
      }
export type UpdateManyPostMutationHookResult = ReturnType<typeof useUpdateManyPostMutation>;
export type UpdateManyPostMutationResult = ApolloReactCommon.MutationResult<UpdateManyPostMutation>;
export type UpdateManyPostMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateManyPostMutation, UpdateManyPostMutationVariables>;
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