import { enumType, scalarType, inputObjectType, objectType } from '@nexus/schema'

export const DateTime = scalarType({
  name: 'DateTime',
  description: 'Date custom scalar type',
  parseValue(value: any) {
    return value ? new Date(value) : null
  },
  serialize(value: any) {
    return value ? new Date(value) : null
  },
  parseLiteral(ast: any) {
    return ast.value ? new Date(ast.value) : null
  },
})

export const BatchPayload = objectType({
  name: 'BatchPayload',
  definition(t) {
    t.int('count', { nullable: false })
  },
})

export const OrderByArg = enumType({
  name: 'OrderByArg',
  members: ['asc', 'desc'],
})

export const InvoiceWhereInput = inputObjectType({
  name: 'InvoiceWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('orderId', { type: 'IntFilter' })
    t.field('customerId', { type: 'IntFilter' })
    t.field('subtotal', { type: 'NullableFloatFilter' })
    t.field('deliveryFees', { type: 'NullableFloatFilter' })
    t.field('taxRate', { type: 'NullableFloatFilter' })
    t.field('taxes', { type: 'NullableFloatFilter' })
    t.field('total', { type: 'NullableFloatFilter' })
    t.field('companyId', { type: 'NullableIntFilter' })
    t.field('AND', { type: 'InvoiceWhereInput', list: true })
    t.field('OR', { type: 'InvoiceWhereInput', list: true })
    t.field('NOT', { type: 'InvoiceWhereInput', list: true })
    t.field('order', { type: 'OrderWhereInput' })
    t.field('customer', { type: 'CustomerWhereInput' })
    t.field('company', { type: 'CompanyWhereInput' })
  },
})

export const CustomerWhereInput = inputObjectType({
  name: 'CustomerWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('firstName', { type: 'StringFilter' })
    t.field('lastName', { type: 'StringFilter' })
    t.field('email', { type: 'StringFilter' })
    t.field('address', { type: 'NullableStringFilter' })
    t.field('zipcode', { type: 'NullableStringFilter' })
    t.field('city', { type: 'NullableStringFilter' })
    t.field('avatar', { type: 'NullableStringFilter' })
    t.field('birthday', { type: 'NullableDateTimeFilter' })
    t.field('firstSeen', { type: 'NullableDateTimeFilter' })
    t.field('lastSeen', { type: 'NullableDateTimeFilter' })
    t.field('hasOrdered', { type: 'NullableBooleanFilter' })
    t.field('latestPurchase', { type: 'NullableDateTimeFilter' })
    t.field('hasNewsLetter', { type: 'NullableBooleanFilter' })
    t.field('nbOrders', { type: 'NullableIntFilter' })
    t.field('reviews', { type: 'ReviewFilter' })
    t.field('invoices', { type: 'InvoiceFilter' })
    t.field('orders', { type: 'OrderFilter' })
    t.field('companyId', { type: 'NullableIntFilter' })
    t.field('userId', { type: 'StringFilter' })
    t.field('image', { type: 'NullableStringFilter' })
    t.field('totalOrder', { type: 'IntFilter' })
    t.field('totalSpent', { type: 'NullableFloatFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('AND', { type: 'CustomerWhereInput', list: true })
    t.field('OR', { type: 'CustomerWhereInput', list: true })
    t.field('NOT', { type: 'CustomerWhereInput', list: true })
    t.field('company', { type: 'CompanyWhereInput' })
    t.field('user', { type: 'UserWhereInput' })
  },
})

export const OrderItemWhereInput = inputObjectType({
  name: 'OrderItemWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('orderId', { type: 'IntFilter' })
    t.field('quantity', { type: 'IntFilter' })
    t.field('name', { type: 'NullableStringFilter' })
    t.field('weight', { type: 'NullableStringFilter' })
    t.field('price', { type: 'FloatFilter' })
    t.field('productId', { type: 'IntFilter' })
    t.field('image', { type: 'NullableStringFilter' })
    t.field('AND', { type: 'OrderItemWhereInput', list: true })
    t.field('OR', { type: 'OrderItemWhereInput', list: true })
    t.field('NOT', { type: 'OrderItemWhereInput', list: true })
    t.field('order', { type: 'OrderWhereInput' })
    t.field('product', { type: 'ProductWhereInput' })
  },
})

export const OrderWhereInput = inputObjectType({
  name: 'OrderWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('reference', { type: 'NullableStringFilter' })
    t.field('customerId', { type: 'NullableIntFilter' })
    t.field('subtotal', { type: 'FloatFilter' })
    t.field('deliveryFees', { type: 'FloatFilter' })
    t.field('taxRate', { type: 'FloatFilter' })
    t.field('taxes', { type: 'FloatFilter' })
    t.field('total', { type: 'FloatFilter' })
    t.field('status', { type: 'NullableStringFilter' })
    t.field('returned', { type: 'BooleanFilter' })
    t.field('invoice', { type: 'InvoiceFilter' })
    t.field('reviews', { type: 'ReviewFilter' })
    t.field('orderItems', { type: 'OrderItemFilter' })
    t.field('companyId', { type: 'NullableIntFilter' })
    t.field('deliveryTime', { type: 'NullableDateTimeFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('paymentMethod', { type: 'StringFilter' })
    t.field('deliveryAddressId', { type: 'IntFilter' })
    t.field('contactId', { type: 'NullableIntFilter' })
    t.field('AND', { type: 'OrderWhereInput', list: true })
    t.field('OR', { type: 'OrderWhereInput', list: true })
    t.field('NOT', { type: 'OrderWhereInput', list: true })
    t.field('customer', { type: 'CustomerWhereInput' })
    t.field('company', { type: 'CompanyWhereInput' })
    t.field('deliveryAdress', { type: 'AddressWhereInput' })
    t.field('contact', { type: 'ContactWhereInput' })
  },
})

export const ReviewWhereInput = inputObjectType({
  name: 'ReviewWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'NullableDateTimeFilter' })
    t.field('status', { type: 'NullableStringFilter' })
    t.field('orderId', { type: 'NullableIntFilter' })
    t.field('productId', { type: 'NullableIntFilter' })
    t.field('customerId', { type: 'NullableIntFilter' })
    t.field('rating', { type: 'NullableIntFilter' })
    t.field('comment', { type: 'NullableStringFilter' })
    t.field('companyId', { type: 'NullableIntFilter' })
    t.field('AND', { type: 'ReviewWhereInput', list: true })
    t.field('OR', { type: 'ReviewWhereInput', list: true })
    t.field('NOT', { type: 'ReviewWhereInput', list: true })
    t.field('order', { type: 'OrderWhereInput' })
    t.field('product', { type: 'ProductWhereInput' })
    t.field('customer', { type: 'CustomerWhereInput' })
    t.field('company', { type: 'CompanyWhereInput' })
  },
})

export const ProductWhereInput = inputObjectType({
  name: 'ProductWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('width', { type: 'NullableFloatFilter' })
    t.field('height', { type: 'NullableFloatFilter' })
    t.field('price', { type: 'NullableFloatFilter' })
    t.field('thumbnail', { type: 'NullableStringFilter' })
    t.field('image', { type: 'NullableStringFilter' })
    t.field('description', { type: 'NullableStringFilter' })
    t.field('stock', { type: 'NullableIntFilter' })
    t.field('review', { type: 'ReviewFilter' })
    t.field('orderItems', { type: 'OrderItemFilter' })
    t.field('companyId', { type: 'NullableIntFilter' })
    t.field('sku', { type: 'NullableStringFilter' })
    t.field('name', { type: 'NullableStringFilter' })
    t.field('slug', { type: 'StringFilter' })
    t.field('salePrice', { type: 'NullableFloatFilter' })
    t.field('discountInPercent', { type: 'NullableIntFilter' })
    t.field('type', { type: 'StringFilter' })
    t.field('categories', { type: 'CategoryFilter' })
    t.field('unit', { type: 'NullableStringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('AND', { type: 'ProductWhereInput', list: true })
    t.field('OR', { type: 'ProductWhereInput', list: true })
    t.field('NOT', { type: 'ProductWhereInput', list: true })
    t.field('company', { type: 'CompanyWhereInput' })
  },
})

export const CategoryWhereInput = inputObjectType({
  name: 'CategoryWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('products', { type: 'ProductFilter' })
    t.field('platformId', { type: 'IntFilter' })
    t.field('slug', { type: 'StringFilter' })
    t.field('type', { type: 'StringFilter' })
    t.field('icon', { type: 'NullableStringFilter' })
    t.field('parentId', { type: 'NullableIntFilter' })
    t.field('children', { type: 'CategoryFilter' })
    t.field('companies', { type: 'CompanyFilter' })
    t.field('AND', { type: 'CategoryWhereInput', list: true })
    t.field('OR', { type: 'CategoryWhereInput', list: true })
    t.field('NOT', { type: 'CategoryWhereInput', list: true })
    t.field('platform', { type: 'PlatformWhereInput' })
    t.field('parent', { type: 'CategoryWhereInput' })
  },
})

export const CountryWhereInput = inputObjectType({
  name: 'CountryWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('code', { type: 'IntFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('currency', { type: 'StringFilter' })
    t.field('platforms', { type: 'PlatformFilter' })
    t.field('AND', { type: 'CountryWhereInput', list: true })
    t.field('OR', { type: 'CountryWhereInput', list: true })
    t.field('NOT', { type: 'CountryWhereInput', list: true })
  },
})

export const PlatformWhereInput = inputObjectType({
  name: 'PlatformWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('name', { type: 'NullableStringFilter' })
    t.field('bannerImg', { type: 'NullableStringFilter' })
    t.field('slug', { type: 'StringFilter' })
    t.field('ownerId', { type: 'StringFilter' })
    t.field('description', { type: 'NullableStringFilter' })
    t.field('companies', { type: 'CompanyFilter' })
    t.field('categories', { type: 'CategoryFilter' })
    t.field('platformType', { type: 'NullableStringFilter' })
    t.field('countryId', { type: 'NullableIntFilter' })
    t.field('taxRate', { type: 'FloatFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('AND', { type: 'PlatformWhereInput', list: true })
    t.field('OR', { type: 'PlatformWhereInput', list: true })
    t.field('NOT', { type: 'PlatformWhereInput', list: true })
    t.field('owner', { type: 'UserWhereInput' })
    t.field('country', { type: 'CountryWhereInput' })
  },
})

export const CardWhereInput = inputObjectType({
  name: 'CardWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('type', { type: 'StringFilter' })
    t.field('cardType', { type: 'StringFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('lastFourDigit', { type: 'IntFilter' })
    t.field('userId', { type: 'NullableStringFilter' })
    t.field('AND', { type: 'CardWhereInput', list: true })
    t.field('OR', { type: 'CardWhereInput', list: true })
    t.field('NOT', { type: 'CardWhereInput', list: true })
    t.field('user', { type: 'UserWhereInput' })
  },
})

export const StaffWhereInput = inputObjectType({
  name: 'StaffWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('userId', { type: 'StringFilter' })
    t.field('companyId', { type: 'IntFilter' })
    t.field('role', { type: 'StringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('firstName', { type: 'NullableStringFilter' })
    t.field('lastName', { type: 'NullableStringFilter' })
    t.field('contactId', { type: 'NullableIntFilter' })
    t.field('email', { type: 'NullableStringFilter' })
    t.field('AND', { type: 'StaffWhereInput', list: true })
    t.field('OR', { type: 'StaffWhereInput', list: true })
    t.field('NOT', { type: 'StaffWhereInput', list: true })
    t.field('user', { type: 'UserWhereInput' })
    t.field('company', { type: 'CompanyWhereInput' })
    t.field('contact', { type: 'ContactWhereInput' })
  },
})

export const UserWhereInput = inputObjectType({
  name: 'UserWhereInput',
  definition(t) {
    t.field('id', { type: 'StringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('email', { type: 'StringFilter' })
    t.field('firstName', { type: 'NullableStringFilter' })
    t.field('lastName', { type: 'NullableStringFilter' })
    t.field('token', { type: 'NullableStringFilter' })
    t.field('googleId', { type: 'NullableStringFilter' })
    t.field('walletId', { type: 'NullableStringFilter' })
    t.field('income', { type: 'NullableFloatFilter' })
    t.field('username', { type: 'NullableStringFilter' })
    t.field('image', { type: 'NullableStringFilter' })
    t.field('imagePublicId', { type: 'NullableStringFilter' })
    t.field('coverImage', { type: 'NullableStringFilter' })
    t.field('coverImagePublicId', { type: 'NullableStringFilter' })
    t.field('isOnline', { type: 'BooleanFilter' })
    t.field('companies', { type: 'CompanyFilter' })
    t.field('platforms', { type: 'PlatformFilter' })
    t.field('addresses', { type: 'AddressFilter' })
    t.field('cards', { type: 'CardFilter' })
    t.field('contacts', { type: 'ContactFilter' })
    t.field('customers', { type: 'CustomerFilter' })
    t.field('staffs', { type: 'StaffFilter' })
    t.field('AND', { type: 'UserWhereInput', list: true })
    t.field('OR', { type: 'UserWhereInput', list: true })
    t.field('NOT', { type: 'UserWhereInput', list: true })
  },
})

export const ContactWhereInput = inputObjectType({
  name: 'ContactWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('type', { type: 'NullableStringFilter' })
    t.field('number', { type: 'StringFilter' })
    t.field('companyId', { type: 'NullableIntFilter' })
    t.field('userId', { type: 'NullableStringFilter' })
    t.field('orders', { type: 'OrderFilter' })
    t.field('staffs', { type: 'StaffFilter' })
    t.field('AND', { type: 'ContactWhereInput', list: true })
    t.field('OR', { type: 'ContactWhereInput', list: true })
    t.field('NOT', { type: 'ContactWhereInput', list: true })
    t.field('company', { type: 'CompanyWhereInput' })
    t.field('user', { type: 'UserWhereInput' })
  },
})

export const DeliveryDetailWhereInput = inputObjectType({
  name: 'DeliveryDetailWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('isFree', { type: 'BooleanFilter' })
    t.field('charge', { type: 'StringFilter' })
    t.field('minimumOrder', { type: 'FloatFilter' })
    t.field('companyId', { type: 'NullableIntFilter' })
    t.field('AND', { type: 'DeliveryDetailWhereInput', list: true })
    t.field('OR', { type: 'DeliveryDetailWhereInput', list: true })
    t.field('NOT', { type: 'DeliveryDetailWhereInput', list: true })
    t.field('company', { type: 'CompanyWhereInput' })
  },
})

export const CompanyWhereInput = inputObjectType({
  name: 'CompanyWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('slug', { type: 'StringFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('description', { type: 'StringFilter' })
    t.field('previewUrl', { type: 'NullableStringFilter' })
    t.field('thumbnailUrl', { type: 'NullableStringFilter' })
    t.field('platformSlug', { type: 'StringFilter' })
    t.field('addressId', { type: 'NullableIntFilter' })
    t.field('contactId', { type: 'NullableIntFilter' })
    t.field('platformId', { type: 'IntFilter' })
    t.field('products', { type: 'ProductFilter' })
    t.field('customers', { type: 'CustomerFilter' })
    t.field('orders', { type: 'OrderFilter' })
    t.field('ownerId', { type: 'NullableStringFilter' })
    t.field('invoices', { type: 'InvoiceFilter' })
    t.field('reviews', { type: 'ReviewFilter' })
    t.field('staffs', { type: 'StaffFilter' })
    t.field('deliveryDetailId', { type: 'IntFilter' })
    t.field('promotion', { type: 'NullableStringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('categories', { type: 'CategoryFilter' })
    t.field('AND', { type: 'CompanyWhereInput', list: true })
    t.field('OR', { type: 'CompanyWhereInput', list: true })
    t.field('NOT', { type: 'CompanyWhereInput', list: true })
    t.field('address', { type: 'AddressWhereInput' })
    t.field('contact', { type: 'ContactWhereInput' })
    t.field('platform', { type: 'PlatformWhereInput' })
    t.field('owner', { type: 'UserWhereInput' })
    t.field('deliveryDetail', { type: 'DeliveryDetailWhereInput' })
  },
})

export const AddressWhereInput = inputObjectType({
  name: 'AddressWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('type', { type: 'StringFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('json', { type: 'NullableStringFilter' })
    t.field('info', { type: 'StringFilter' })
    t.field('companyId', { type: 'NullableIntFilter' })
    t.field('userId', { type: 'NullableStringFilter' })
    t.field('orders', { type: 'OrderFilter' })
    t.field('AND', { type: 'AddressWhereInput', list: true })
    t.field('OR', { type: 'AddressWhereInput', list: true })
    t.field('NOT', { type: 'AddressWhereInput', list: true })
    t.field('company', { type: 'CompanyWhereInput' })
    t.field('user', { type: 'UserWhereInput' })
  },
})

export const AddressWhereUniqueInput = inputObjectType({
  name: 'AddressWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
  },
})

export const CompanyWhereUniqueInput = inputObjectType({
  name: 'CompanyWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('slug', { type: 'String' })
  },
})

export const PlatformWhereUniqueInput = inputObjectType({
  name: 'PlatformWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('slug', { type: 'String' })
  },
})

export const CategoryWhereUniqueInput = inputObjectType({
  name: 'CategoryWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('slug', { type: 'String' })
  },
})

export const ProductWhereUniqueInput = inputObjectType({
  name: 'ProductWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('slug', { type: 'String' })
  },
})

export const ReviewWhereUniqueInput = inputObjectType({
  name: 'ReviewWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
  },
})

export const InvoiceWhereUniqueInput = inputObjectType({
  name: 'InvoiceWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
  },
})

export const OrderWhereUniqueInput = inputObjectType({
  name: 'OrderWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
  },
})

export const OrderItemWhereUniqueInput = inputObjectType({
  name: 'OrderItemWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
  },
})

export const CardWhereUniqueInput = inputObjectType({
  name: 'CardWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
  },
})

export const ContactWhereUniqueInput = inputObjectType({
  name: 'ContactWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
  },
})

export const CustomerWhereUniqueInput = inputObjectType({
  name: 'CustomerWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
  },
})

export const StaffWhereUniqueInput = inputObjectType({
  name: 'StaffWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
  },
})

export const DeliveryDetailWhereUniqueInput = inputObjectType({
  name: 'DeliveryDetailWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
  },
})

export const CouponWhereInput = inputObjectType({
  name: 'CouponWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('code', { type: 'StringFilter' })
    t.field('image', { type: 'StringFilter' })
    t.field('discountInPercent', { type: 'IntFilter' })
    t.field('numberOfCoupon', { type: 'IntFilter' })
    t.field('numberOfUsedCoupon', { type: 'IntFilter' })
    t.field('AND', { type: 'CouponWhereInput', list: true })
    t.field('OR', { type: 'CouponWhereInput', list: true })
    t.field('NOT', { type: 'CouponWhereInput', list: true })
  },
})

export const CouponWhereUniqueInput = inputObjectType({
  name: 'CouponWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
  },
})

export const CountryWhereUniqueInput = inputObjectType({
  name: 'CountryWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('code', { type: 'Int' })
  },
})

export const UserWhereUniqueInput = inputObjectType({
  name: 'UserWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('username', { type: 'String' })
  },
})

export const ProductCreategalleryInput = inputObjectType({
  name: 'ProductCreategalleryInput',
  definition(t) {
    t.field('set', { type: 'String', list: true })
  },
})

export const CustomerCreategroupsInput = inputObjectType({
  name: 'CustomerCreategroupsInput',
  definition(t) {
    t.field('set', { type: 'String', list: true })
  },
})

export const CardCreateWithoutUserInput = inputObjectType({
  name: 'CardCreateWithoutUserInput',
  definition(t) {
    t.field('type', { type: 'String', nullable: false })
    t.field('cardType', { type: 'String', nullable: false })
    t.field('name', { type: 'String', nullable: false })
    t.field('lastFourDigit', { type: 'Int', nullable: false })
  },
})

export const CardCreateManyWithoutUserInput = inputObjectType({
  name: 'CardCreateManyWithoutUserInput',
  definition(t) {
    t.field('create', { type: 'CardCreateWithoutUserInput', list: true })
    t.field('connect', { type: 'CardWhereUniqueInput', list: true })
  },
})

export const AddressCreateWithoutOrdersInput = inputObjectType({
  name: 'AddressCreateWithoutOrdersInput',
  definition(t) {
    t.field('type', { type: 'String', nullable: false })
    t.field('name', { type: 'String', nullable: false })
    t.field('json', { type: 'String' })
    t.field('info', { type: 'String', nullable: false })
    t.field('companyId', { type: 'Int' })
    t.field('company', { type: 'CompanyCreateOneWithoutAddressInput' })
    t.field('user', { type: 'UserCreateOneWithoutAddressesInput' })
  },
})

export const AddressCreateOneWithoutOrdersInput = inputObjectType({
  name: 'AddressCreateOneWithoutOrdersInput',
  definition(t) {
    t.field('create', { type: 'AddressCreateWithoutOrdersInput' })
    t.field('connect', { type: 'AddressWhereUniqueInput' })
  },
})

export const InvoiceCreateWithoutCompanyInput = inputObjectType({
  name: 'InvoiceCreateWithoutCompanyInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('subtotal', { type: 'Float' })
    t.field('deliveryFees', { type: 'Float' })
    t.field('taxRate', { type: 'Float' })
    t.field('taxes', { type: 'Float' })
    t.field('total', { type: 'Float' })
    t.field('order', {
      type: 'OrderCreateOneWithoutInvoiceInput',
      nullable: false,
    })
    t.field('customer', {
      type: 'CustomerCreateOneWithoutInvoicesInput',
      nullable: false,
    })
  },
})

export const InvoiceCreateManyWithoutCompanyInput = inputObjectType({
  name: 'InvoiceCreateManyWithoutCompanyInput',
  definition(t) {
    t.field('create', { type: 'InvoiceCreateWithoutCompanyInput', list: true })
    t.field('connect', { type: 'InvoiceWhereUniqueInput', list: true })
  },
})

export const ReviewCreateWithoutCompanyInput = inputObjectType({
  name: 'ReviewCreateWithoutCompanyInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('status', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.field('comment', { type: 'String' })
    t.field('order', { type: 'OrderCreateOneWithoutReviewsInput' })
    t.field('product', { type: 'ProductCreateOneWithoutReviewInput' })
    t.field('customer', { type: 'CustomerCreateOneWithoutReviewsInput' })
  },
})

export const ReviewCreateManyWithoutCompanyInput = inputObjectType({
  name: 'ReviewCreateManyWithoutCompanyInput',
  definition(t) {
    t.field('create', { type: 'ReviewCreateWithoutCompanyInput', list: true })
    t.field('connect', { type: 'ReviewWhereUniqueInput', list: true })
  },
})

export const DeliveryDetailCreateWithoutCompanyInput = inputObjectType({
  name: 'DeliveryDetailCreateWithoutCompanyInput',
  definition(t) {
    t.field('isFree', { type: 'Boolean', nullable: false })
    t.field('charge', { type: 'String', nullable: false })
    t.field('minimumOrder', { type: 'Float', nullable: false })
    t.field('companyId', { type: 'Int' })
  },
})

export const DeliveryDetailCreateOneWithoutCompanyInput = inputObjectType({
  name: 'DeliveryDetailCreateOneWithoutCompanyInput',
  definition(t) {
    t.field('create', { type: 'DeliveryDetailCreateWithoutCompanyInput' })
    t.field('connect', { type: 'DeliveryDetailWhereUniqueInput' })
  },
})

export const ProductCreateWithoutCategoriesInput = inputObjectType({
  name: 'ProductCreateWithoutCategoriesInput',
  definition(t) {
    t.field('width', { type: 'Float' })
    t.field('height', { type: 'Float' })
    t.field('price', { type: 'Float' })
    t.field('thumbnail', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('stock', { type: 'Int' })
    t.field('sku', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('slug', { type: 'String', nullable: false })
    t.field('salePrice', { type: 'Float' })
    t.field('discountInPercent', { type: 'Int' })
    t.field('type', { type: 'String', nullable: false })
    t.field('unit', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('gallery', { type: 'ProductCreategalleryInput' })
    t.field('review', { type: 'ReviewCreateManyWithoutProductInput' })
    t.field('orderItems', { type: 'OrderItemCreateManyWithoutProductInput' })
    t.field('company', { type: 'CompanyCreateOneWithoutProductsInput' })
  },
})

export const ProductCreateManyWithoutCategoriesInput = inputObjectType({
  name: 'ProductCreateManyWithoutCategoriesInput',
  definition(t) {
    t.field('create', {
      type: 'ProductCreateWithoutCategoriesInput',
      list: true,
    })
    t.field('connect', { type: 'ProductWhereUniqueInput', list: true })
  },
})

export const CountryCreateWithoutPlatformsInput = inputObjectType({
  name: 'CountryCreateWithoutPlatformsInput',
  definition(t) {
    t.field('code', { type: 'Int', nullable: false })
    t.field('name', { type: 'String', nullable: false })
    t.field('currency', { type: 'String', nullable: false })
  },
})

export const CountryCreateOneWithoutPlatformsInput = inputObjectType({
  name: 'CountryCreateOneWithoutPlatformsInput',
  definition(t) {
    t.field('create', { type: 'CountryCreateWithoutPlatformsInput' })
    t.field('connect', { type: 'CountryWhereUniqueInput' })
  },
})

export const PlatformCreateWithoutCategoriesInput = inputObjectType({
  name: 'PlatformCreateWithoutCategoriesInput',
  definition(t) {
    t.field('name', { type: 'String' })
    t.field('bannerImg', { type: 'String' })
    t.field('slug', { type: 'String', nullable: false })
    t.field('description', { type: 'String' })
    t.field('platformType', { type: 'String' })
    t.field('taxRate', { type: 'Float', nullable: false })
    t.field('createdAt', { type: 'DateTime' })
    t.field('owner', {
      type: 'UserCreateOneWithoutPlatformsInput',
      nullable: false,
    })
    t.field('companies', { type: 'CompanyCreateManyWithoutPlatformInput' })
    t.field('country', { type: 'CountryCreateOneWithoutPlatformsInput' })
  },
})

export const PlatformCreateOneWithoutCategoriesInput = inputObjectType({
  name: 'PlatformCreateOneWithoutCategoriesInput',
  definition(t) {
    t.field('create', { type: 'PlatformCreateWithoutCategoriesInput' })
    t.field('connect', { type: 'PlatformWhereUniqueInput' })
  },
})

export const OrderCreateWithoutContactInput = inputObjectType({
  name: 'OrderCreateWithoutContactInput',
  definition(t) {
    t.field('reference', { type: 'String' })
    t.field('subtotal', { type: 'Float', nullable: false })
    t.field('deliveryFees', { type: 'Float', nullable: false })
    t.field('taxRate', { type: 'Float', nullable: false })
    t.field('taxes', { type: 'Float', nullable: false })
    t.field('total', { type: 'Float', nullable: false })
    t.field('status', { type: 'String' })
    t.field('returned', { type: 'Boolean' })
    t.field('deliveryTime', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('paymentMethod', { type: 'String', nullable: false })
    t.field('customer', { type: 'CustomerCreateOneWithoutOrdersInput' })
    t.field('invoice', { type: 'InvoiceCreateManyWithoutOrderInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutOrderInput' })
    t.field('orderItems', { type: 'OrderItemCreateManyWithoutOrderInput' })
    t.field('company', { type: 'CompanyCreateOneWithoutOrdersInput' })
    t.field('deliveryAdress', {
      type: 'AddressCreateOneWithoutOrdersInput',
      nullable: false,
    })
  },
})

export const OrderCreateManyWithoutContactInput = inputObjectType({
  name: 'OrderCreateManyWithoutContactInput',
  definition(t) {
    t.field('create', { type: 'OrderCreateWithoutContactInput', list: true })
    t.field('connect', { type: 'OrderWhereUniqueInput', list: true })
  },
})

export const ContactCreateWithoutStaffsInput = inputObjectType({
  name: 'ContactCreateWithoutStaffsInput',
  definition(t) {
    t.field('type', { type: 'String' })
    t.field('number', { type: 'String', nullable: false })
    t.field('companyId', { type: 'Int' })
    t.field('company', { type: 'CompanyCreateOneWithoutContactInput' })
    t.field('user', { type: 'UserCreateOneWithoutContactsInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutContactInput' })
  },
})

export const ContactCreateOneWithoutStaffsInput = inputObjectType({
  name: 'ContactCreateOneWithoutStaffsInput',
  definition(t) {
    t.field('create', { type: 'ContactCreateWithoutStaffsInput' })
    t.field('connect', { type: 'ContactWhereUniqueInput' })
  },
})

export const StaffCreateWithoutCompanyInput = inputObjectType({
  name: 'StaffCreateWithoutCompanyInput',
  definition(t) {
    t.field('role', { type: 'String', nullable: false })
    t.field('createdAt', { type: 'DateTime' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('user', {
      type: 'UserCreateOneWithoutStaffsInput',
      nullable: false,
    })
    t.field('contact', { type: 'ContactCreateOneWithoutStaffsInput' })
  },
})

export const StaffCreateManyWithoutCompanyInput = inputObjectType({
  name: 'StaffCreateManyWithoutCompanyInput',
  definition(t) {
    t.field('create', { type: 'StaffCreateWithoutCompanyInput', list: true })
    t.field('connect', { type: 'StaffWhereUniqueInput', list: true })
  },
})

export const CompanyCreateWithoutCategoriesInput = inputObjectType({
  name: 'CompanyCreateWithoutCategoriesInput',
  definition(t) {
    t.field('slug', { type: 'String', nullable: false })
    t.field('name', { type: 'String', nullable: false })
    t.field('description', { type: 'String', nullable: false })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String', nullable: false })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressCreateOneWithoutCompanyInput' })
    t.field('contact', { type: 'ContactCreateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformCreateOneWithoutCompaniesInput',
      nullable: false,
    })
    t.field('products', { type: 'ProductCreateManyWithoutCompanyInput' })
    t.field('customers', { type: 'CustomerCreateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserCreateOneWithoutCompaniesInput' })
    t.field('invoices', { type: 'InvoiceCreateManyWithoutCompanyInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailCreateOneWithoutCompanyInput',
      nullable: false,
    })
  },
})

export const CompanyCreateManyWithoutCategoriesInput = inputObjectType({
  name: 'CompanyCreateManyWithoutCategoriesInput',
  definition(t) {
    t.field('create', {
      type: 'CompanyCreateWithoutCategoriesInput',
      list: true,
    })
    t.field('connect', { type: 'CompanyWhereUniqueInput', list: true })
  },
})

export const CategoryCreateWithoutChildrenInput = inputObjectType({
  name: 'CategoryCreateWithoutChildrenInput',
  definition(t) {
    t.field('name', { type: 'String', nullable: false })
    t.field('slug', { type: 'String', nullable: false })
    t.field('type', { type: 'String', nullable: false })
    t.field('icon', { type: 'String' })
    t.field('products', { type: 'ProductCreateManyWithoutCategoriesInput' })
    t.field('platform', {
      type: 'PlatformCreateOneWithoutCategoriesInput',
      nullable: false,
    })
    t.field('parent', { type: 'CategoryCreateOneWithoutChildrenInput' })
    t.field('companies', { type: 'CompanyCreateManyWithoutCategoriesInput' })
  },
})

export const CategoryCreateOneWithoutChildrenInput = inputObjectType({
  name: 'CategoryCreateOneWithoutChildrenInput',
  definition(t) {
    t.field('create', { type: 'CategoryCreateWithoutChildrenInput' })
    t.field('connect', { type: 'CategoryWhereUniqueInput' })
  },
})

export const CategoryCreateWithoutParentInput = inputObjectType({
  name: 'CategoryCreateWithoutParentInput',
  definition(t) {
    t.field('name', { type: 'String', nullable: false })
    t.field('slug', { type: 'String', nullable: false })
    t.field('type', { type: 'String', nullable: false })
    t.field('icon', { type: 'String' })
    t.field('products', { type: 'ProductCreateManyWithoutCategoriesInput' })
    t.field('platform', {
      type: 'PlatformCreateOneWithoutCategoriesInput',
      nullable: false,
    })
    t.field('children', { type: 'CategoryCreateManyWithoutParentInput' })
    t.field('companies', { type: 'CompanyCreateManyWithoutCategoriesInput' })
  },
})

export const CategoryCreateManyWithoutParentInput = inputObjectType({
  name: 'CategoryCreateManyWithoutParentInput',
  definition(t) {
    t.field('create', { type: 'CategoryCreateWithoutParentInput', list: true })
    t.field('connect', { type: 'CategoryWhereUniqueInput', list: true })
  },
})

export const CategoryCreateWithoutCompaniesInput = inputObjectType({
  name: 'CategoryCreateWithoutCompaniesInput',
  definition(t) {
    t.field('name', { type: 'String', nullable: false })
    t.field('slug', { type: 'String', nullable: false })
    t.field('type', { type: 'String', nullable: false })
    t.field('icon', { type: 'String' })
    t.field('products', { type: 'ProductCreateManyWithoutCategoriesInput' })
    t.field('platform', {
      type: 'PlatformCreateOneWithoutCategoriesInput',
      nullable: false,
    })
    t.field('parent', { type: 'CategoryCreateOneWithoutChildrenInput' })
    t.field('children', { type: 'CategoryCreateManyWithoutParentInput' })
  },
})

export const CategoryCreateManyWithoutCompaniesInput = inputObjectType({
  name: 'CategoryCreateManyWithoutCompaniesInput',
  definition(t) {
    t.field('create', {
      type: 'CategoryCreateWithoutCompaniesInput',
      list: true,
    })
    t.field('connect', { type: 'CategoryWhereUniqueInput', list: true })
  },
})

export const CompanyCreateWithoutStaffsInput = inputObjectType({
  name: 'CompanyCreateWithoutStaffsInput',
  definition(t) {
    t.field('slug', { type: 'String', nullable: false })
    t.field('name', { type: 'String', nullable: false })
    t.field('description', { type: 'String', nullable: false })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String', nullable: false })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressCreateOneWithoutCompanyInput' })
    t.field('contact', { type: 'ContactCreateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformCreateOneWithoutCompaniesInput',
      nullable: false,
    })
    t.field('products', { type: 'ProductCreateManyWithoutCompanyInput' })
    t.field('customers', { type: 'CustomerCreateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserCreateOneWithoutCompaniesInput' })
    t.field('invoices', { type: 'InvoiceCreateManyWithoutCompanyInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailCreateOneWithoutCompanyInput',
      nullable: false,
    })
    t.field('categories', { type: 'CategoryCreateManyWithoutCompaniesInput' })
  },
})

export const CompanyCreateOneWithoutStaffsInput = inputObjectType({
  name: 'CompanyCreateOneWithoutStaffsInput',
  definition(t) {
    t.field('create', { type: 'CompanyCreateWithoutStaffsInput' })
    t.field('connect', { type: 'CompanyWhereUniqueInput' })
  },
})

export const StaffCreateWithoutUserInput = inputObjectType({
  name: 'StaffCreateWithoutUserInput',
  definition(t) {
    t.field('role', { type: 'String', nullable: false })
    t.field('createdAt', { type: 'DateTime' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('company', {
      type: 'CompanyCreateOneWithoutStaffsInput',
      nullable: false,
    })
    t.field('contact', { type: 'ContactCreateOneWithoutStaffsInput' })
  },
})

export const StaffCreateManyWithoutUserInput = inputObjectType({
  name: 'StaffCreateManyWithoutUserInput',
  definition(t) {
    t.field('create', { type: 'StaffCreateWithoutUserInput', list: true })
    t.field('connect', { type: 'StaffWhereUniqueInput', list: true })
  },
})

export const UserCreateWithoutCompaniesInput = inputObjectType({
  name: 'UserCreateWithoutCompaniesInput',
  definition(t) {
    t.field('id', { type: 'String', nullable: false })
    t.field('createdAt', { type: 'DateTime' })
    t.field('email', { type: 'String', nullable: false })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('token', { type: 'String' })
    t.field('googleId', { type: 'String' })
    t.field('walletId', { type: 'String' })
    t.field('income', { type: 'Float' })
    t.field('username', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('imagePublicId', { type: 'String' })
    t.field('coverImage', { type: 'String' })
    t.field('coverImagePublicId', { type: 'String' })
    t.field('isOnline', { type: 'Boolean' })
    t.field('platforms', { type: 'PlatformCreateManyWithoutOwnerInput' })
    t.field('addresses', { type: 'AddressCreateManyWithoutUserInput' })
    t.field('cards', { type: 'CardCreateManyWithoutUserInput' })
    t.field('contacts', { type: 'ContactCreateManyWithoutUserInput' })
    t.field('customers', { type: 'CustomerCreateManyWithoutUserInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutUserInput' })
  },
})

export const UserCreateOneWithoutCompaniesInput = inputObjectType({
  name: 'UserCreateOneWithoutCompaniesInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutCompaniesInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const CompanyCreateWithoutCustomersInput = inputObjectType({
  name: 'CompanyCreateWithoutCustomersInput',
  definition(t) {
    t.field('slug', { type: 'String', nullable: false })
    t.field('name', { type: 'String', nullable: false })
    t.field('description', { type: 'String', nullable: false })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String', nullable: false })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressCreateOneWithoutCompanyInput' })
    t.field('contact', { type: 'ContactCreateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformCreateOneWithoutCompaniesInput',
      nullable: false,
    })
    t.field('products', { type: 'ProductCreateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserCreateOneWithoutCompaniesInput' })
    t.field('invoices', { type: 'InvoiceCreateManyWithoutCompanyInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailCreateOneWithoutCompanyInput',
      nullable: false,
    })
    t.field('categories', { type: 'CategoryCreateManyWithoutCompaniesInput' })
  },
})

export const CompanyCreateOneWithoutCustomersInput = inputObjectType({
  name: 'CompanyCreateOneWithoutCustomersInput',
  definition(t) {
    t.field('create', { type: 'CompanyCreateWithoutCustomersInput' })
    t.field('connect', { type: 'CompanyWhereUniqueInput' })
  },
})

export const CustomerCreateWithoutUserInput = inputObjectType({
  name: 'CustomerCreateWithoutUserInput',
  definition(t) {
    t.field('firstName', { type: 'String', nullable: false })
    t.field('lastName', { type: 'String', nullable: false })
    t.field('email', { type: 'String', nullable: false })
    t.field('address', { type: 'String' })
    t.field('zipcode', { type: 'String' })
    t.field('city', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('firstSeen', { type: 'DateTime' })
    t.field('lastSeen', { type: 'DateTime' })
    t.field('hasOrdered', { type: 'Boolean' })
    t.field('latestPurchase', { type: 'DateTime' })
    t.field('hasNewsLetter', { type: 'Boolean' })
    t.field('nbOrders', { type: 'Int' })
    t.field('image', { type: 'String' })
    t.field('totalOrder', { type: 'Int' })
    t.field('totalSpent', { type: 'Float' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('groups', { type: 'CustomerCreategroupsInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutCustomerInput' })
    t.field('invoices', { type: 'InvoiceCreateManyWithoutCustomerInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutCustomerInput' })
    t.field('company', { type: 'CompanyCreateOneWithoutCustomersInput' })
  },
})

export const CustomerCreateManyWithoutUserInput = inputObjectType({
  name: 'CustomerCreateManyWithoutUserInput',
  definition(t) {
    t.field('create', { type: 'CustomerCreateWithoutUserInput', list: true })
    t.field('connect', { type: 'CustomerWhereUniqueInput', list: true })
  },
})

export const UserCreateWithoutStaffsInput = inputObjectType({
  name: 'UserCreateWithoutStaffsInput',
  definition(t) {
    t.field('id', { type: 'String', nullable: false })
    t.field('createdAt', { type: 'DateTime' })
    t.field('email', { type: 'String', nullable: false })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('token', { type: 'String' })
    t.field('googleId', { type: 'String' })
    t.field('walletId', { type: 'String' })
    t.field('income', { type: 'Float' })
    t.field('username', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('imagePublicId', { type: 'String' })
    t.field('coverImage', { type: 'String' })
    t.field('coverImagePublicId', { type: 'String' })
    t.field('isOnline', { type: 'Boolean' })
    t.field('companies', { type: 'CompanyCreateManyWithoutOwnerInput' })
    t.field('platforms', { type: 'PlatformCreateManyWithoutOwnerInput' })
    t.field('addresses', { type: 'AddressCreateManyWithoutUserInput' })
    t.field('cards', { type: 'CardCreateManyWithoutUserInput' })
    t.field('contacts', { type: 'ContactCreateManyWithoutUserInput' })
    t.field('customers', { type: 'CustomerCreateManyWithoutUserInput' })
  },
})

export const UserCreateOneWithoutStaffsInput = inputObjectType({
  name: 'UserCreateOneWithoutStaffsInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutStaffsInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const StaffCreateWithoutContactInput = inputObjectType({
  name: 'StaffCreateWithoutContactInput',
  definition(t) {
    t.field('role', { type: 'String', nullable: false })
    t.field('createdAt', { type: 'DateTime' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('user', {
      type: 'UserCreateOneWithoutStaffsInput',
      nullable: false,
    })
    t.field('company', {
      type: 'CompanyCreateOneWithoutStaffsInput',
      nullable: false,
    })
  },
})

export const StaffCreateManyWithoutContactInput = inputObjectType({
  name: 'StaffCreateManyWithoutContactInput',
  definition(t) {
    t.field('create', { type: 'StaffCreateWithoutContactInput', list: true })
    t.field('connect', { type: 'StaffWhereUniqueInput', list: true })
  },
})

export const ContactCreateWithoutOrdersInput = inputObjectType({
  name: 'ContactCreateWithoutOrdersInput',
  definition(t) {
    t.field('type', { type: 'String' })
    t.field('number', { type: 'String', nullable: false })
    t.field('companyId', { type: 'Int' })
    t.field('company', { type: 'CompanyCreateOneWithoutContactInput' })
    t.field('user', { type: 'UserCreateOneWithoutContactsInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutContactInput' })
  },
})

export const ContactCreateOneWithoutOrdersInput = inputObjectType({
  name: 'ContactCreateOneWithoutOrdersInput',
  definition(t) {
    t.field('create', { type: 'ContactCreateWithoutOrdersInput' })
    t.field('connect', { type: 'ContactWhereUniqueInput' })
  },
})

export const OrderCreateWithoutCompanyInput = inputObjectType({
  name: 'OrderCreateWithoutCompanyInput',
  definition(t) {
    t.field('reference', { type: 'String' })
    t.field('subtotal', { type: 'Float', nullable: false })
    t.field('deliveryFees', { type: 'Float', nullable: false })
    t.field('taxRate', { type: 'Float', nullable: false })
    t.field('taxes', { type: 'Float', nullable: false })
    t.field('total', { type: 'Float', nullable: false })
    t.field('status', { type: 'String' })
    t.field('returned', { type: 'Boolean' })
    t.field('deliveryTime', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('paymentMethod', { type: 'String', nullable: false })
    t.field('customer', { type: 'CustomerCreateOneWithoutOrdersInput' })
    t.field('invoice', { type: 'InvoiceCreateManyWithoutOrderInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutOrderInput' })
    t.field('orderItems', { type: 'OrderItemCreateManyWithoutOrderInput' })
    t.field('deliveryAdress', {
      type: 'AddressCreateOneWithoutOrdersInput',
      nullable: false,
    })
    t.field('contact', { type: 'ContactCreateOneWithoutOrdersInput' })
  },
})

export const OrderCreateManyWithoutCompanyInput = inputObjectType({
  name: 'OrderCreateManyWithoutCompanyInput',
  definition(t) {
    t.field('create', { type: 'OrderCreateWithoutCompanyInput', list: true })
    t.field('connect', { type: 'OrderWhereUniqueInput', list: true })
  },
})

export const CompanyCreateWithoutContactInput = inputObjectType({
  name: 'CompanyCreateWithoutContactInput',
  definition(t) {
    t.field('slug', { type: 'String', nullable: false })
    t.field('name', { type: 'String', nullable: false })
    t.field('description', { type: 'String', nullable: false })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String', nullable: false })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressCreateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformCreateOneWithoutCompaniesInput',
      nullable: false,
    })
    t.field('products', { type: 'ProductCreateManyWithoutCompanyInput' })
    t.field('customers', { type: 'CustomerCreateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserCreateOneWithoutCompaniesInput' })
    t.field('invoices', { type: 'InvoiceCreateManyWithoutCompanyInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailCreateOneWithoutCompanyInput',
      nullable: false,
    })
    t.field('categories', { type: 'CategoryCreateManyWithoutCompaniesInput' })
  },
})

export const CompanyCreateOneWithoutContactInput = inputObjectType({
  name: 'CompanyCreateOneWithoutContactInput',
  definition(t) {
    t.field('create', { type: 'CompanyCreateWithoutContactInput' })
    t.field('connect', { type: 'CompanyWhereUniqueInput' })
  },
})

export const ContactCreateWithoutUserInput = inputObjectType({
  name: 'ContactCreateWithoutUserInput',
  definition(t) {
    t.field('type', { type: 'String' })
    t.field('number', { type: 'String', nullable: false })
    t.field('companyId', { type: 'Int' })
    t.field('company', { type: 'CompanyCreateOneWithoutContactInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutContactInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutContactInput' })
  },
})

export const ContactCreateManyWithoutUserInput = inputObjectType({
  name: 'ContactCreateManyWithoutUserInput',
  definition(t) {
    t.field('create', { type: 'ContactCreateWithoutUserInput', list: true })
    t.field('connect', { type: 'ContactWhereUniqueInput', list: true })
  },
})

export const UserCreateWithoutCustomersInput = inputObjectType({
  name: 'UserCreateWithoutCustomersInput',
  definition(t) {
    t.field('id', { type: 'String', nullable: false })
    t.field('createdAt', { type: 'DateTime' })
    t.field('email', { type: 'String', nullable: false })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('token', { type: 'String' })
    t.field('googleId', { type: 'String' })
    t.field('walletId', { type: 'String' })
    t.field('income', { type: 'Float' })
    t.field('username', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('imagePublicId', { type: 'String' })
    t.field('coverImage', { type: 'String' })
    t.field('coverImagePublicId', { type: 'String' })
    t.field('isOnline', { type: 'Boolean' })
    t.field('companies', { type: 'CompanyCreateManyWithoutOwnerInput' })
    t.field('platforms', { type: 'PlatformCreateManyWithoutOwnerInput' })
    t.field('addresses', { type: 'AddressCreateManyWithoutUserInput' })
    t.field('cards', { type: 'CardCreateManyWithoutUserInput' })
    t.field('contacts', { type: 'ContactCreateManyWithoutUserInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutUserInput' })
  },
})

export const UserCreateOneWithoutCustomersInput = inputObjectType({
  name: 'UserCreateOneWithoutCustomersInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutCustomersInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const CustomerCreateWithoutCompanyInput = inputObjectType({
  name: 'CustomerCreateWithoutCompanyInput',
  definition(t) {
    t.field('firstName', { type: 'String', nullable: false })
    t.field('lastName', { type: 'String', nullable: false })
    t.field('email', { type: 'String', nullable: false })
    t.field('address', { type: 'String' })
    t.field('zipcode', { type: 'String' })
    t.field('city', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('firstSeen', { type: 'DateTime' })
    t.field('lastSeen', { type: 'DateTime' })
    t.field('hasOrdered', { type: 'Boolean' })
    t.field('latestPurchase', { type: 'DateTime' })
    t.field('hasNewsLetter', { type: 'Boolean' })
    t.field('nbOrders', { type: 'Int' })
    t.field('image', { type: 'String' })
    t.field('totalOrder', { type: 'Int' })
    t.field('totalSpent', { type: 'Float' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('groups', { type: 'CustomerCreategroupsInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutCustomerInput' })
    t.field('invoices', { type: 'InvoiceCreateManyWithoutCustomerInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutCustomerInput' })
    t.field('user', {
      type: 'UserCreateOneWithoutCustomersInput',
      nullable: false,
    })
  },
})

export const CustomerCreateManyWithoutCompanyInput = inputObjectType({
  name: 'CustomerCreateManyWithoutCompanyInput',
  definition(t) {
    t.field('create', { type: 'CustomerCreateWithoutCompanyInput', list: true })
    t.field('connect', { type: 'CustomerWhereUniqueInput', list: true })
  },
})

export const CompanyCreateWithoutOrdersInput = inputObjectType({
  name: 'CompanyCreateWithoutOrdersInput',
  definition(t) {
    t.field('slug', { type: 'String', nullable: false })
    t.field('name', { type: 'String', nullable: false })
    t.field('description', { type: 'String', nullable: false })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String', nullable: false })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressCreateOneWithoutCompanyInput' })
    t.field('contact', { type: 'ContactCreateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformCreateOneWithoutCompaniesInput',
      nullable: false,
    })
    t.field('products', { type: 'ProductCreateManyWithoutCompanyInput' })
    t.field('customers', { type: 'CustomerCreateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserCreateOneWithoutCompaniesInput' })
    t.field('invoices', { type: 'InvoiceCreateManyWithoutCompanyInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailCreateOneWithoutCompanyInput',
      nullable: false,
    })
    t.field('categories', { type: 'CategoryCreateManyWithoutCompaniesInput' })
  },
})

export const CompanyCreateOneWithoutOrdersInput = inputObjectType({
  name: 'CompanyCreateOneWithoutOrdersInput',
  definition(t) {
    t.field('create', { type: 'CompanyCreateWithoutOrdersInput' })
    t.field('connect', { type: 'CompanyWhereUniqueInput' })
  },
})

export const OrderCreateWithoutDeliveryAdressInput = inputObjectType({
  name: 'OrderCreateWithoutDeliveryAdressInput',
  definition(t) {
    t.field('reference', { type: 'String' })
    t.field('subtotal', { type: 'Float', nullable: false })
    t.field('deliveryFees', { type: 'Float', nullable: false })
    t.field('taxRate', { type: 'Float', nullable: false })
    t.field('taxes', { type: 'Float', nullable: false })
    t.field('total', { type: 'Float', nullable: false })
    t.field('status', { type: 'String' })
    t.field('returned', { type: 'Boolean' })
    t.field('deliveryTime', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('paymentMethod', { type: 'String', nullable: false })
    t.field('customer', { type: 'CustomerCreateOneWithoutOrdersInput' })
    t.field('invoice', { type: 'InvoiceCreateManyWithoutOrderInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutOrderInput' })
    t.field('orderItems', { type: 'OrderItemCreateManyWithoutOrderInput' })
    t.field('company', { type: 'CompanyCreateOneWithoutOrdersInput' })
    t.field('contact', { type: 'ContactCreateOneWithoutOrdersInput' })
  },
})

export const OrderCreateManyWithoutDeliveryAdressInput = inputObjectType({
  name: 'OrderCreateManyWithoutDeliveryAdressInput',
  definition(t) {
    t.field('create', {
      type: 'OrderCreateWithoutDeliveryAdressInput',
      list: true,
    })
    t.field('connect', { type: 'OrderWhereUniqueInput', list: true })
  },
})

export const AddressCreateWithoutUserInput = inputObjectType({
  name: 'AddressCreateWithoutUserInput',
  definition(t) {
    t.field('type', { type: 'String', nullable: false })
    t.field('name', { type: 'String', nullable: false })
    t.field('json', { type: 'String' })
    t.field('info', { type: 'String', nullable: false })
    t.field('companyId', { type: 'Int' })
    t.field('company', { type: 'CompanyCreateOneWithoutAddressInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutDeliveryAdressInput' })
  },
})

export const AddressCreateManyWithoutUserInput = inputObjectType({
  name: 'AddressCreateManyWithoutUserInput',
  definition(t) {
    t.field('create', { type: 'AddressCreateWithoutUserInput', list: true })
    t.field('connect', { type: 'AddressWhereUniqueInput', list: true })
  },
})

export const UserCreateWithoutPlatformsInput = inputObjectType({
  name: 'UserCreateWithoutPlatformsInput',
  definition(t) {
    t.field('id', { type: 'String', nullable: false })
    t.field('createdAt', { type: 'DateTime' })
    t.field('email', { type: 'String', nullable: false })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('token', { type: 'String' })
    t.field('googleId', { type: 'String' })
    t.field('walletId', { type: 'String' })
    t.field('income', { type: 'Float' })
    t.field('username', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('imagePublicId', { type: 'String' })
    t.field('coverImage', { type: 'String' })
    t.field('coverImagePublicId', { type: 'String' })
    t.field('isOnline', { type: 'Boolean' })
    t.field('companies', { type: 'CompanyCreateManyWithoutOwnerInput' })
    t.field('addresses', { type: 'AddressCreateManyWithoutUserInput' })
    t.field('cards', { type: 'CardCreateManyWithoutUserInput' })
    t.field('contacts', { type: 'ContactCreateManyWithoutUserInput' })
    t.field('customers', { type: 'CustomerCreateManyWithoutUserInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutUserInput' })
  },
})

export const UserCreateOneWithoutPlatformsInput = inputObjectType({
  name: 'UserCreateOneWithoutPlatformsInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutPlatformsInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const CategoryCreateWithoutPlatformInput = inputObjectType({
  name: 'CategoryCreateWithoutPlatformInput',
  definition(t) {
    t.field('name', { type: 'String', nullable: false })
    t.field('slug', { type: 'String', nullable: false })
    t.field('type', { type: 'String', nullable: false })
    t.field('icon', { type: 'String' })
    t.field('products', { type: 'ProductCreateManyWithoutCategoriesInput' })
    t.field('parent', { type: 'CategoryCreateOneWithoutChildrenInput' })
    t.field('children', { type: 'CategoryCreateManyWithoutParentInput' })
    t.field('companies', { type: 'CompanyCreateManyWithoutCategoriesInput' })
  },
})

export const CategoryCreateManyWithoutPlatformInput = inputObjectType({
  name: 'CategoryCreateManyWithoutPlatformInput',
  definition(t) {
    t.field('create', {
      type: 'CategoryCreateWithoutPlatformInput',
      list: true,
    })
    t.field('connect', { type: 'CategoryWhereUniqueInput', list: true })
  },
})

export const PlatformCreateWithoutCompaniesInput = inputObjectType({
  name: 'PlatformCreateWithoutCompaniesInput',
  definition(t) {
    t.field('name', { type: 'String' })
    t.field('bannerImg', { type: 'String' })
    t.field('slug', { type: 'String', nullable: false })
    t.field('description', { type: 'String' })
    t.field('platformType', { type: 'String' })
    t.field('taxRate', { type: 'Float', nullable: false })
    t.field('createdAt', { type: 'DateTime' })
    t.field('owner', {
      type: 'UserCreateOneWithoutPlatformsInput',
      nullable: false,
    })
    t.field('categories', { type: 'CategoryCreateManyWithoutPlatformInput' })
    t.field('country', { type: 'CountryCreateOneWithoutPlatformsInput' })
  },
})

export const PlatformCreateOneWithoutCompaniesInput = inputObjectType({
  name: 'PlatformCreateOneWithoutCompaniesInput',
  definition(t) {
    t.field('create', { type: 'PlatformCreateWithoutCompaniesInput' })
    t.field('connect', { type: 'PlatformWhereUniqueInput' })
  },
})

export const CompanyCreateWithoutProductsInput = inputObjectType({
  name: 'CompanyCreateWithoutProductsInput',
  definition(t) {
    t.field('slug', { type: 'String', nullable: false })
    t.field('name', { type: 'String', nullable: false })
    t.field('description', { type: 'String', nullable: false })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String', nullable: false })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressCreateOneWithoutCompanyInput' })
    t.field('contact', { type: 'ContactCreateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformCreateOneWithoutCompaniesInput',
      nullable: false,
    })
    t.field('customers', { type: 'CustomerCreateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserCreateOneWithoutCompaniesInput' })
    t.field('invoices', { type: 'InvoiceCreateManyWithoutCompanyInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailCreateOneWithoutCompanyInput',
      nullable: false,
    })
    t.field('categories', { type: 'CategoryCreateManyWithoutCompaniesInput' })
  },
})

export const CompanyCreateOneWithoutProductsInput = inputObjectType({
  name: 'CompanyCreateOneWithoutProductsInput',
  definition(t) {
    t.field('create', { type: 'CompanyCreateWithoutProductsInput' })
    t.field('connect', { type: 'CompanyWhereUniqueInput' })
  },
})

export const CategoryCreateWithoutProductsInput = inputObjectType({
  name: 'CategoryCreateWithoutProductsInput',
  definition(t) {
    t.field('name', { type: 'String', nullable: false })
    t.field('slug', { type: 'String', nullable: false })
    t.field('type', { type: 'String', nullable: false })
    t.field('icon', { type: 'String' })
    t.field('platform', {
      type: 'PlatformCreateOneWithoutCategoriesInput',
      nullable: false,
    })
    t.field('parent', { type: 'CategoryCreateOneWithoutChildrenInput' })
    t.field('children', { type: 'CategoryCreateManyWithoutParentInput' })
    t.field('companies', { type: 'CompanyCreateManyWithoutCategoriesInput' })
  },
})

export const CategoryCreateManyWithoutProductsInput = inputObjectType({
  name: 'CategoryCreateManyWithoutProductsInput',
  definition(t) {
    t.field('create', {
      type: 'CategoryCreateWithoutProductsInput',
      list: true,
    })
    t.field('connect', { type: 'CategoryWhereUniqueInput', list: true })
  },
})

export const ProductCreateWithoutOrderItemsInput = inputObjectType({
  name: 'ProductCreateWithoutOrderItemsInput',
  definition(t) {
    t.field('width', { type: 'Float' })
    t.field('height', { type: 'Float' })
    t.field('price', { type: 'Float' })
    t.field('thumbnail', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('stock', { type: 'Int' })
    t.field('sku', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('slug', { type: 'String', nullable: false })
    t.field('salePrice', { type: 'Float' })
    t.field('discountInPercent', { type: 'Int' })
    t.field('type', { type: 'String', nullable: false })
    t.field('unit', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('gallery', { type: 'ProductCreategalleryInput' })
    t.field('review', { type: 'ReviewCreateManyWithoutProductInput' })
    t.field('company', { type: 'CompanyCreateOneWithoutProductsInput' })
    t.field('categories', { type: 'CategoryCreateManyWithoutProductsInput' })
  },
})

export const ProductCreateOneWithoutOrderItemsInput = inputObjectType({
  name: 'ProductCreateOneWithoutOrderItemsInput',
  definition(t) {
    t.field('create', { type: 'ProductCreateWithoutOrderItemsInput' })
    t.field('connect', { type: 'ProductWhereUniqueInput' })
  },
})

export const OrderItemCreateWithoutOrderInput = inputObjectType({
  name: 'OrderItemCreateWithoutOrderInput',
  definition(t) {
    t.field('quantity', { type: 'Int', nullable: false })
    t.field('name', { type: 'String' })
    t.field('weight', { type: 'String' })
    t.field('price', { type: 'Float', nullable: false })
    t.field('image', { type: 'String' })
    t.field('product', {
      type: 'ProductCreateOneWithoutOrderItemsInput',
      nullable: false,
    })
  },
})

export const OrderItemCreateManyWithoutOrderInput = inputObjectType({
  name: 'OrderItemCreateManyWithoutOrderInput',
  definition(t) {
    t.field('create', { type: 'OrderItemCreateWithoutOrderInput', list: true })
    t.field('connect', { type: 'OrderItemWhereUniqueInput', list: true })
  },
})

export const OrderCreateWithoutInvoiceInput = inputObjectType({
  name: 'OrderCreateWithoutInvoiceInput',
  definition(t) {
    t.field('reference', { type: 'String' })
    t.field('subtotal', { type: 'Float', nullable: false })
    t.field('deliveryFees', { type: 'Float', nullable: false })
    t.field('taxRate', { type: 'Float', nullable: false })
    t.field('taxes', { type: 'Float', nullable: false })
    t.field('total', { type: 'Float', nullable: false })
    t.field('status', { type: 'String' })
    t.field('returned', { type: 'Boolean' })
    t.field('deliveryTime', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('paymentMethod', { type: 'String', nullable: false })
    t.field('customer', { type: 'CustomerCreateOneWithoutOrdersInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutOrderInput' })
    t.field('orderItems', { type: 'OrderItemCreateManyWithoutOrderInput' })
    t.field('company', { type: 'CompanyCreateOneWithoutOrdersInput' })
    t.field('deliveryAdress', {
      type: 'AddressCreateOneWithoutOrdersInput',
      nullable: false,
    })
    t.field('contact', { type: 'ContactCreateOneWithoutOrdersInput' })
  },
})

export const OrderCreateOneWithoutInvoiceInput = inputObjectType({
  name: 'OrderCreateOneWithoutInvoiceInput',
  definition(t) {
    t.field('create', { type: 'OrderCreateWithoutInvoiceInput' })
    t.field('connect', { type: 'OrderWhereUniqueInput' })
  },
})

export const CompanyCreateWithoutInvoicesInput = inputObjectType({
  name: 'CompanyCreateWithoutInvoicesInput',
  definition(t) {
    t.field('slug', { type: 'String', nullable: false })
    t.field('name', { type: 'String', nullable: false })
    t.field('description', { type: 'String', nullable: false })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String', nullable: false })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressCreateOneWithoutCompanyInput' })
    t.field('contact', { type: 'ContactCreateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformCreateOneWithoutCompaniesInput',
      nullable: false,
    })
    t.field('products', { type: 'ProductCreateManyWithoutCompanyInput' })
    t.field('customers', { type: 'CustomerCreateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserCreateOneWithoutCompaniesInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailCreateOneWithoutCompanyInput',
      nullable: false,
    })
    t.field('categories', { type: 'CategoryCreateManyWithoutCompaniesInput' })
  },
})

export const CompanyCreateOneWithoutInvoicesInput = inputObjectType({
  name: 'CompanyCreateOneWithoutInvoicesInput',
  definition(t) {
    t.field('create', { type: 'CompanyCreateWithoutInvoicesInput' })
    t.field('connect', { type: 'CompanyWhereUniqueInput' })
  },
})

export const InvoiceCreateWithoutCustomerInput = inputObjectType({
  name: 'InvoiceCreateWithoutCustomerInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('subtotal', { type: 'Float' })
    t.field('deliveryFees', { type: 'Float' })
    t.field('taxRate', { type: 'Float' })
    t.field('taxes', { type: 'Float' })
    t.field('total', { type: 'Float' })
    t.field('order', {
      type: 'OrderCreateOneWithoutInvoiceInput',
      nullable: false,
    })
    t.field('company', { type: 'CompanyCreateOneWithoutInvoicesInput' })
  },
})

export const InvoiceCreateManyWithoutCustomerInput = inputObjectType({
  name: 'InvoiceCreateManyWithoutCustomerInput',
  definition(t) {
    t.field('create', { type: 'InvoiceCreateWithoutCustomerInput', list: true })
    t.field('connect', { type: 'InvoiceWhereUniqueInput', list: true })
  },
})

export const CustomerCreateWithoutReviewsInput = inputObjectType({
  name: 'CustomerCreateWithoutReviewsInput',
  definition(t) {
    t.field('firstName', { type: 'String', nullable: false })
    t.field('lastName', { type: 'String', nullable: false })
    t.field('email', { type: 'String', nullable: false })
    t.field('address', { type: 'String' })
    t.field('zipcode', { type: 'String' })
    t.field('city', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('firstSeen', { type: 'DateTime' })
    t.field('lastSeen', { type: 'DateTime' })
    t.field('hasOrdered', { type: 'Boolean' })
    t.field('latestPurchase', { type: 'DateTime' })
    t.field('hasNewsLetter', { type: 'Boolean' })
    t.field('nbOrders', { type: 'Int' })
    t.field('image', { type: 'String' })
    t.field('totalOrder', { type: 'Int' })
    t.field('totalSpent', { type: 'Float' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('groups', { type: 'CustomerCreategroupsInput' })
    t.field('invoices', { type: 'InvoiceCreateManyWithoutCustomerInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutCustomerInput' })
    t.field('company', { type: 'CompanyCreateOneWithoutCustomersInput' })
    t.field('user', {
      type: 'UserCreateOneWithoutCustomersInput',
      nullable: false,
    })
  },
})

export const CustomerCreateOneWithoutReviewsInput = inputObjectType({
  name: 'CustomerCreateOneWithoutReviewsInput',
  definition(t) {
    t.field('create', { type: 'CustomerCreateWithoutReviewsInput' })
    t.field('connect', { type: 'CustomerWhereUniqueInput' })
  },
})

export const CompanyCreateWithoutReviewsInput = inputObjectType({
  name: 'CompanyCreateWithoutReviewsInput',
  definition(t) {
    t.field('slug', { type: 'String', nullable: false })
    t.field('name', { type: 'String', nullable: false })
    t.field('description', { type: 'String', nullable: false })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String', nullable: false })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressCreateOneWithoutCompanyInput' })
    t.field('contact', { type: 'ContactCreateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformCreateOneWithoutCompaniesInput',
      nullable: false,
    })
    t.field('products', { type: 'ProductCreateManyWithoutCompanyInput' })
    t.field('customers', { type: 'CustomerCreateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserCreateOneWithoutCompaniesInput' })
    t.field('invoices', { type: 'InvoiceCreateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailCreateOneWithoutCompanyInput',
      nullable: false,
    })
    t.field('categories', { type: 'CategoryCreateManyWithoutCompaniesInput' })
  },
})

export const CompanyCreateOneWithoutReviewsInput = inputObjectType({
  name: 'CompanyCreateOneWithoutReviewsInput',
  definition(t) {
    t.field('create', { type: 'CompanyCreateWithoutReviewsInput' })
    t.field('connect', { type: 'CompanyWhereUniqueInput' })
  },
})

export const ReviewCreateWithoutOrderInput = inputObjectType({
  name: 'ReviewCreateWithoutOrderInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('status', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.field('comment', { type: 'String' })
    t.field('product', { type: 'ProductCreateOneWithoutReviewInput' })
    t.field('customer', { type: 'CustomerCreateOneWithoutReviewsInput' })
    t.field('company', { type: 'CompanyCreateOneWithoutReviewsInput' })
  },
})

export const ReviewCreateManyWithoutOrderInput = inputObjectType({
  name: 'ReviewCreateManyWithoutOrderInput',
  definition(t) {
    t.field('create', { type: 'ReviewCreateWithoutOrderInput', list: true })
    t.field('connect', { type: 'ReviewWhereUniqueInput', list: true })
  },
})

export const OrderCreateWithoutCustomerInput = inputObjectType({
  name: 'OrderCreateWithoutCustomerInput',
  definition(t) {
    t.field('reference', { type: 'String' })
    t.field('subtotal', { type: 'Float', nullable: false })
    t.field('deliveryFees', { type: 'Float', nullable: false })
    t.field('taxRate', { type: 'Float', nullable: false })
    t.field('taxes', { type: 'Float', nullable: false })
    t.field('total', { type: 'Float', nullable: false })
    t.field('status', { type: 'String' })
    t.field('returned', { type: 'Boolean' })
    t.field('deliveryTime', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('paymentMethod', { type: 'String', nullable: false })
    t.field('invoice', { type: 'InvoiceCreateManyWithoutOrderInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutOrderInput' })
    t.field('orderItems', { type: 'OrderItemCreateManyWithoutOrderInput' })
    t.field('company', { type: 'CompanyCreateOneWithoutOrdersInput' })
    t.field('deliveryAdress', {
      type: 'AddressCreateOneWithoutOrdersInput',
      nullable: false,
    })
    t.field('contact', { type: 'ContactCreateOneWithoutOrdersInput' })
  },
})

export const OrderCreateManyWithoutCustomerInput = inputObjectType({
  name: 'OrderCreateManyWithoutCustomerInput',
  definition(t) {
    t.field('create', { type: 'OrderCreateWithoutCustomerInput', list: true })
    t.field('connect', { type: 'OrderWhereUniqueInput', list: true })
  },
})

export const CustomerCreateWithoutInvoicesInput = inputObjectType({
  name: 'CustomerCreateWithoutInvoicesInput',
  definition(t) {
    t.field('firstName', { type: 'String', nullable: false })
    t.field('lastName', { type: 'String', nullable: false })
    t.field('email', { type: 'String', nullable: false })
    t.field('address', { type: 'String' })
    t.field('zipcode', { type: 'String' })
    t.field('city', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('firstSeen', { type: 'DateTime' })
    t.field('lastSeen', { type: 'DateTime' })
    t.field('hasOrdered', { type: 'Boolean' })
    t.field('latestPurchase', { type: 'DateTime' })
    t.field('hasNewsLetter', { type: 'Boolean' })
    t.field('nbOrders', { type: 'Int' })
    t.field('image', { type: 'String' })
    t.field('totalOrder', { type: 'Int' })
    t.field('totalSpent', { type: 'Float' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('groups', { type: 'CustomerCreategroupsInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutCustomerInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutCustomerInput' })
    t.field('company', { type: 'CompanyCreateOneWithoutCustomersInput' })
    t.field('user', {
      type: 'UserCreateOneWithoutCustomersInput',
      nullable: false,
    })
  },
})

export const CustomerCreateOneWithoutInvoicesInput = inputObjectType({
  name: 'CustomerCreateOneWithoutInvoicesInput',
  definition(t) {
    t.field('create', { type: 'CustomerCreateWithoutInvoicesInput' })
    t.field('connect', { type: 'CustomerWhereUniqueInput' })
  },
})

export const InvoiceCreateWithoutOrderInput = inputObjectType({
  name: 'InvoiceCreateWithoutOrderInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('subtotal', { type: 'Float' })
    t.field('deliveryFees', { type: 'Float' })
    t.field('taxRate', { type: 'Float' })
    t.field('taxes', { type: 'Float' })
    t.field('total', { type: 'Float' })
    t.field('customer', {
      type: 'CustomerCreateOneWithoutInvoicesInput',
      nullable: false,
    })
    t.field('company', { type: 'CompanyCreateOneWithoutInvoicesInput' })
  },
})

export const InvoiceCreateManyWithoutOrderInput = inputObjectType({
  name: 'InvoiceCreateManyWithoutOrderInput',
  definition(t) {
    t.field('create', { type: 'InvoiceCreateWithoutOrderInput', list: true })
    t.field('connect', { type: 'InvoiceWhereUniqueInput', list: true })
  },
})

export const OrderCreateWithoutOrderItemsInput = inputObjectType({
  name: 'OrderCreateWithoutOrderItemsInput',
  definition(t) {
    t.field('reference', { type: 'String' })
    t.field('subtotal', { type: 'Float', nullable: false })
    t.field('deliveryFees', { type: 'Float', nullable: false })
    t.field('taxRate', { type: 'Float', nullable: false })
    t.field('taxes', { type: 'Float', nullable: false })
    t.field('total', { type: 'Float', nullable: false })
    t.field('status', { type: 'String' })
    t.field('returned', { type: 'Boolean' })
    t.field('deliveryTime', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('paymentMethod', { type: 'String', nullable: false })
    t.field('customer', { type: 'CustomerCreateOneWithoutOrdersInput' })
    t.field('invoice', { type: 'InvoiceCreateManyWithoutOrderInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutOrderInput' })
    t.field('company', { type: 'CompanyCreateOneWithoutOrdersInput' })
    t.field('deliveryAdress', {
      type: 'AddressCreateOneWithoutOrdersInput',
      nullable: false,
    })
    t.field('contact', { type: 'ContactCreateOneWithoutOrdersInput' })
  },
})

export const OrderCreateOneWithoutOrderItemsInput = inputObjectType({
  name: 'OrderCreateOneWithoutOrderItemsInput',
  definition(t) {
    t.field('create', { type: 'OrderCreateWithoutOrderItemsInput' })
    t.field('connect', { type: 'OrderWhereUniqueInput' })
  },
})

export const OrderItemCreateWithoutProductInput = inputObjectType({
  name: 'OrderItemCreateWithoutProductInput',
  definition(t) {
    t.field('quantity', { type: 'Int', nullable: false })
    t.field('name', { type: 'String' })
    t.field('weight', { type: 'String' })
    t.field('price', { type: 'Float', nullable: false })
    t.field('image', { type: 'String' })
    t.field('order', {
      type: 'OrderCreateOneWithoutOrderItemsInput',
      nullable: false,
    })
  },
})

export const OrderItemCreateManyWithoutProductInput = inputObjectType({
  name: 'OrderItemCreateManyWithoutProductInput',
  definition(t) {
    t.field('create', {
      type: 'OrderItemCreateWithoutProductInput',
      list: true,
    })
    t.field('connect', { type: 'OrderItemWhereUniqueInput', list: true })
  },
})

export const ProductCreateWithoutReviewInput = inputObjectType({
  name: 'ProductCreateWithoutReviewInput',
  definition(t) {
    t.field('width', { type: 'Float' })
    t.field('height', { type: 'Float' })
    t.field('price', { type: 'Float' })
    t.field('thumbnail', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('stock', { type: 'Int' })
    t.field('sku', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('slug', { type: 'String', nullable: false })
    t.field('salePrice', { type: 'Float' })
    t.field('discountInPercent', { type: 'Int' })
    t.field('type', { type: 'String', nullable: false })
    t.field('unit', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('gallery', { type: 'ProductCreategalleryInput' })
    t.field('orderItems', { type: 'OrderItemCreateManyWithoutProductInput' })
    t.field('company', { type: 'CompanyCreateOneWithoutProductsInput' })
    t.field('categories', { type: 'CategoryCreateManyWithoutProductsInput' })
  },
})

export const ProductCreateOneWithoutReviewInput = inputObjectType({
  name: 'ProductCreateOneWithoutReviewInput',
  definition(t) {
    t.field('create', { type: 'ProductCreateWithoutReviewInput' })
    t.field('connect', { type: 'ProductWhereUniqueInput' })
  },
})

export const ReviewCreateWithoutCustomerInput = inputObjectType({
  name: 'ReviewCreateWithoutCustomerInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('status', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.field('comment', { type: 'String' })
    t.field('order', { type: 'OrderCreateOneWithoutReviewsInput' })
    t.field('product', { type: 'ProductCreateOneWithoutReviewInput' })
    t.field('company', { type: 'CompanyCreateOneWithoutReviewsInput' })
  },
})

export const ReviewCreateManyWithoutCustomerInput = inputObjectType({
  name: 'ReviewCreateManyWithoutCustomerInput',
  definition(t) {
    t.field('create', { type: 'ReviewCreateWithoutCustomerInput', list: true })
    t.field('connect', { type: 'ReviewWhereUniqueInput', list: true })
  },
})

export const CustomerCreateWithoutOrdersInput = inputObjectType({
  name: 'CustomerCreateWithoutOrdersInput',
  definition(t) {
    t.field('firstName', { type: 'String', nullable: false })
    t.field('lastName', { type: 'String', nullable: false })
    t.field('email', { type: 'String', nullable: false })
    t.field('address', { type: 'String' })
    t.field('zipcode', { type: 'String' })
    t.field('city', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('firstSeen', { type: 'DateTime' })
    t.field('lastSeen', { type: 'DateTime' })
    t.field('hasOrdered', { type: 'Boolean' })
    t.field('latestPurchase', { type: 'DateTime' })
    t.field('hasNewsLetter', { type: 'Boolean' })
    t.field('nbOrders', { type: 'Int' })
    t.field('image', { type: 'String' })
    t.field('totalOrder', { type: 'Int' })
    t.field('totalSpent', { type: 'Float' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('groups', { type: 'CustomerCreategroupsInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutCustomerInput' })
    t.field('invoices', { type: 'InvoiceCreateManyWithoutCustomerInput' })
    t.field('company', { type: 'CompanyCreateOneWithoutCustomersInput' })
    t.field('user', {
      type: 'UserCreateOneWithoutCustomersInput',
      nullable: false,
    })
  },
})

export const CustomerCreateOneWithoutOrdersInput = inputObjectType({
  name: 'CustomerCreateOneWithoutOrdersInput',
  definition(t) {
    t.field('create', { type: 'CustomerCreateWithoutOrdersInput' })
    t.field('connect', { type: 'CustomerWhereUniqueInput' })
  },
})

export const OrderCreateWithoutReviewsInput = inputObjectType({
  name: 'OrderCreateWithoutReviewsInput',
  definition(t) {
    t.field('reference', { type: 'String' })
    t.field('subtotal', { type: 'Float', nullable: false })
    t.field('deliveryFees', { type: 'Float', nullable: false })
    t.field('taxRate', { type: 'Float', nullable: false })
    t.field('taxes', { type: 'Float', nullable: false })
    t.field('total', { type: 'Float', nullable: false })
    t.field('status', { type: 'String' })
    t.field('returned', { type: 'Boolean' })
    t.field('deliveryTime', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('paymentMethod', { type: 'String', nullable: false })
    t.field('customer', { type: 'CustomerCreateOneWithoutOrdersInput' })
    t.field('invoice', { type: 'InvoiceCreateManyWithoutOrderInput' })
    t.field('orderItems', { type: 'OrderItemCreateManyWithoutOrderInput' })
    t.field('company', { type: 'CompanyCreateOneWithoutOrdersInput' })
    t.field('deliveryAdress', {
      type: 'AddressCreateOneWithoutOrdersInput',
      nullable: false,
    })
    t.field('contact', { type: 'ContactCreateOneWithoutOrdersInput' })
  },
})

export const OrderCreateOneWithoutReviewsInput = inputObjectType({
  name: 'OrderCreateOneWithoutReviewsInput',
  definition(t) {
    t.field('create', { type: 'OrderCreateWithoutReviewsInput' })
    t.field('connect', { type: 'OrderWhereUniqueInput' })
  },
})

export const ReviewCreateWithoutProductInput = inputObjectType({
  name: 'ReviewCreateWithoutProductInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('status', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.field('comment', { type: 'String' })
    t.field('order', { type: 'OrderCreateOneWithoutReviewsInput' })
    t.field('customer', { type: 'CustomerCreateOneWithoutReviewsInput' })
    t.field('company', { type: 'CompanyCreateOneWithoutReviewsInput' })
  },
})

export const ReviewCreateManyWithoutProductInput = inputObjectType({
  name: 'ReviewCreateManyWithoutProductInput',
  definition(t) {
    t.field('create', { type: 'ReviewCreateWithoutProductInput', list: true })
    t.field('connect', { type: 'ReviewWhereUniqueInput', list: true })
  },
})

export const ProductCreateWithoutCompanyInput = inputObjectType({
  name: 'ProductCreateWithoutCompanyInput',
  definition(t) {
    t.field('width', { type: 'Float' })
    t.field('height', { type: 'Float' })
    t.field('price', { type: 'Float' })
    t.field('thumbnail', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('stock', { type: 'Int' })
    t.field('sku', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('slug', { type: 'String', nullable: false })
    t.field('salePrice', { type: 'Float' })
    t.field('discountInPercent', { type: 'Int' })
    t.field('type', { type: 'String', nullable: false })
    t.field('unit', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('gallery', { type: 'ProductCreategalleryInput' })
    t.field('review', { type: 'ReviewCreateManyWithoutProductInput' })
    t.field('orderItems', { type: 'OrderItemCreateManyWithoutProductInput' })
    t.field('categories', { type: 'CategoryCreateManyWithoutProductsInput' })
  },
})

export const ProductCreateManyWithoutCompanyInput = inputObjectType({
  name: 'ProductCreateManyWithoutCompanyInput',
  definition(t) {
    t.field('create', { type: 'ProductCreateWithoutCompanyInput', list: true })
    t.field('connect', { type: 'ProductWhereUniqueInput', list: true })
  },
})

export const CompanyCreateWithoutPlatformInput = inputObjectType({
  name: 'CompanyCreateWithoutPlatformInput',
  definition(t) {
    t.field('slug', { type: 'String', nullable: false })
    t.field('name', { type: 'String', nullable: false })
    t.field('description', { type: 'String', nullable: false })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String', nullable: false })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressCreateOneWithoutCompanyInput' })
    t.field('contact', { type: 'ContactCreateOneWithoutCompanyInput' })
    t.field('products', { type: 'ProductCreateManyWithoutCompanyInput' })
    t.field('customers', { type: 'CustomerCreateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserCreateOneWithoutCompaniesInput' })
    t.field('invoices', { type: 'InvoiceCreateManyWithoutCompanyInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailCreateOneWithoutCompanyInput',
      nullable: false,
    })
    t.field('categories', { type: 'CategoryCreateManyWithoutCompaniesInput' })
  },
})

export const CompanyCreateManyWithoutPlatformInput = inputObjectType({
  name: 'CompanyCreateManyWithoutPlatformInput',
  definition(t) {
    t.field('create', { type: 'CompanyCreateWithoutPlatformInput', list: true })
    t.field('connect', { type: 'CompanyWhereUniqueInput', list: true })
  },
})

export const PlatformCreateWithoutOwnerInput = inputObjectType({
  name: 'PlatformCreateWithoutOwnerInput',
  definition(t) {
    t.field('name', { type: 'String' })
    t.field('bannerImg', { type: 'String' })
    t.field('slug', { type: 'String', nullable: false })
    t.field('description', { type: 'String' })
    t.field('platformType', { type: 'String' })
    t.field('taxRate', { type: 'Float', nullable: false })
    t.field('createdAt', { type: 'DateTime' })
    t.field('companies', { type: 'CompanyCreateManyWithoutPlatformInput' })
    t.field('categories', { type: 'CategoryCreateManyWithoutPlatformInput' })
    t.field('country', { type: 'CountryCreateOneWithoutPlatformsInput' })
  },
})

export const PlatformCreateManyWithoutOwnerInput = inputObjectType({
  name: 'PlatformCreateManyWithoutOwnerInput',
  definition(t) {
    t.field('create', { type: 'PlatformCreateWithoutOwnerInput', list: true })
    t.field('connect', { type: 'PlatformWhereUniqueInput', list: true })
  },
})

export const UserCreateWithoutAddressesInput = inputObjectType({
  name: 'UserCreateWithoutAddressesInput',
  definition(t) {
    t.field('id', { type: 'String', nullable: false })
    t.field('createdAt', { type: 'DateTime' })
    t.field('email', { type: 'String', nullable: false })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('token', { type: 'String' })
    t.field('googleId', { type: 'String' })
    t.field('walletId', { type: 'String' })
    t.field('income', { type: 'Float' })
    t.field('username', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('imagePublicId', { type: 'String' })
    t.field('coverImage', { type: 'String' })
    t.field('coverImagePublicId', { type: 'String' })
    t.field('isOnline', { type: 'Boolean' })
    t.field('companies', { type: 'CompanyCreateManyWithoutOwnerInput' })
    t.field('platforms', { type: 'PlatformCreateManyWithoutOwnerInput' })
    t.field('cards', { type: 'CardCreateManyWithoutUserInput' })
    t.field('contacts', { type: 'ContactCreateManyWithoutUserInput' })
    t.field('customers', { type: 'CustomerCreateManyWithoutUserInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutUserInput' })
  },
})

export const UserCreateOneWithoutAddressesInput = inputObjectType({
  name: 'UserCreateOneWithoutAddressesInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutAddressesInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const AddressCreateWithoutCompanyInput = inputObjectType({
  name: 'AddressCreateWithoutCompanyInput',
  definition(t) {
    t.field('type', { type: 'String', nullable: false })
    t.field('name', { type: 'String', nullable: false })
    t.field('json', { type: 'String' })
    t.field('info', { type: 'String', nullable: false })
    t.field('companyId', { type: 'Int' })
    t.field('user', { type: 'UserCreateOneWithoutAddressesInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutDeliveryAdressInput' })
  },
})

export const AddressCreateOneWithoutCompanyInput = inputObjectType({
  name: 'AddressCreateOneWithoutCompanyInput',
  definition(t) {
    t.field('create', { type: 'AddressCreateWithoutCompanyInput' })
    t.field('connect', { type: 'AddressWhereUniqueInput' })
  },
})

export const CompanyCreateWithoutOwnerInput = inputObjectType({
  name: 'CompanyCreateWithoutOwnerInput',
  definition(t) {
    t.field('slug', { type: 'String', nullable: false })
    t.field('name', { type: 'String', nullable: false })
    t.field('description', { type: 'String', nullable: false })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String', nullable: false })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressCreateOneWithoutCompanyInput' })
    t.field('contact', { type: 'ContactCreateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformCreateOneWithoutCompaniesInput',
      nullable: false,
    })
    t.field('products', { type: 'ProductCreateManyWithoutCompanyInput' })
    t.field('customers', { type: 'CustomerCreateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutCompanyInput' })
    t.field('invoices', { type: 'InvoiceCreateManyWithoutCompanyInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailCreateOneWithoutCompanyInput',
      nullable: false,
    })
    t.field('categories', { type: 'CategoryCreateManyWithoutCompaniesInput' })
  },
})

export const CompanyCreateManyWithoutOwnerInput = inputObjectType({
  name: 'CompanyCreateManyWithoutOwnerInput',
  definition(t) {
    t.field('create', { type: 'CompanyCreateWithoutOwnerInput', list: true })
    t.field('connect', { type: 'CompanyWhereUniqueInput', list: true })
  },
})

export const UserCreateWithoutContactsInput = inputObjectType({
  name: 'UserCreateWithoutContactsInput',
  definition(t) {
    t.field('id', { type: 'String', nullable: false })
    t.field('createdAt', { type: 'DateTime' })
    t.field('email', { type: 'String', nullable: false })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('token', { type: 'String' })
    t.field('googleId', { type: 'String' })
    t.field('walletId', { type: 'String' })
    t.field('income', { type: 'Float' })
    t.field('username', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('imagePublicId', { type: 'String' })
    t.field('coverImage', { type: 'String' })
    t.field('coverImagePublicId', { type: 'String' })
    t.field('isOnline', { type: 'Boolean' })
    t.field('companies', { type: 'CompanyCreateManyWithoutOwnerInput' })
    t.field('platforms', { type: 'PlatformCreateManyWithoutOwnerInput' })
    t.field('addresses', { type: 'AddressCreateManyWithoutUserInput' })
    t.field('cards', { type: 'CardCreateManyWithoutUserInput' })
    t.field('customers', { type: 'CustomerCreateManyWithoutUserInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutUserInput' })
  },
})

export const UserCreateOneWithoutContactsInput = inputObjectType({
  name: 'UserCreateOneWithoutContactsInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutContactsInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const ContactCreateWithoutCompanyInput = inputObjectType({
  name: 'ContactCreateWithoutCompanyInput',
  definition(t) {
    t.field('type', { type: 'String' })
    t.field('number', { type: 'String', nullable: false })
    t.field('companyId', { type: 'Int' })
    t.field('user', { type: 'UserCreateOneWithoutContactsInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutContactInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutContactInput' })
  },
})

export const ContactCreateOneWithoutCompanyInput = inputObjectType({
  name: 'ContactCreateOneWithoutCompanyInput',
  definition(t) {
    t.field('create', { type: 'ContactCreateWithoutCompanyInput' })
    t.field('connect', { type: 'ContactWhereUniqueInput' })
  },
})

export const CompanyCreateWithoutAddressInput = inputObjectType({
  name: 'CompanyCreateWithoutAddressInput',
  definition(t) {
    t.field('slug', { type: 'String', nullable: false })
    t.field('name', { type: 'String', nullable: false })
    t.field('description', { type: 'String', nullable: false })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String', nullable: false })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('contact', { type: 'ContactCreateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformCreateOneWithoutCompaniesInput',
      nullable: false,
    })
    t.field('products', { type: 'ProductCreateManyWithoutCompanyInput' })
    t.field('customers', { type: 'CustomerCreateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserCreateOneWithoutCompaniesInput' })
    t.field('invoices', { type: 'InvoiceCreateManyWithoutCompanyInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailCreateOneWithoutCompanyInput',
      nullable: false,
    })
    t.field('categories', { type: 'CategoryCreateManyWithoutCompaniesInput' })
  },
})

export const CompanyCreateOneWithoutAddressInput = inputObjectType({
  name: 'CompanyCreateOneWithoutAddressInput',
  definition(t) {
    t.field('create', { type: 'CompanyCreateWithoutAddressInput' })
    t.field('connect', { type: 'CompanyWhereUniqueInput' })
  },
})

export const AddressCreateInput = inputObjectType({
  name: 'AddressCreateInput',
  definition(t) {
    t.field('type', { type: 'String', nullable: false })
    t.field('name', { type: 'String', nullable: false })
    t.field('json', { type: 'String' })
    t.field('info', { type: 'String', nullable: false })
    t.field('companyId', { type: 'Int' })
    t.field('company', { type: 'CompanyCreateOneWithoutAddressInput' })
    t.field('user', { type: 'UserCreateOneWithoutAddressesInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutDeliveryAdressInput' })
  },
})

export const ProductUpdategalleryInput = inputObjectType({
  name: 'ProductUpdategalleryInput',
  definition(t) {
    t.field('set', { type: 'String', list: true })
  },
})

export const CustomerUpdategroupsInput = inputObjectType({
  name: 'CustomerUpdategroupsInput',
  definition(t) {
    t.field('set', { type: 'String', list: true })
  },
})

export const CardUpdateWithoutUserDataInput = inputObjectType({
  name: 'CardUpdateWithoutUserDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('cardType', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('lastFourDigit', { type: 'Int' })
  },
})

export const CardUpdateWithWhereUniqueWithoutUserInput = inputObjectType({
  name: 'CardUpdateWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.field('where', { type: 'CardWhereUniqueInput', nullable: false })
    t.field('data', { type: 'CardUpdateWithoutUserDataInput', nullable: false })
  },
})

export const CardScalarWhereInput = inputObjectType({
  name: 'CardScalarWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('type', { type: 'StringFilter' })
    t.field('cardType', { type: 'StringFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('lastFourDigit', { type: 'IntFilter' })
    t.field('userId', { type: 'NullableStringFilter' })
    t.field('AND', { type: 'CardScalarWhereInput', list: true })
    t.field('OR', { type: 'CardScalarWhereInput', list: true })
    t.field('NOT', { type: 'CardScalarWhereInput', list: true })
  },
})

export const CardUpdateManyDataInput = inputObjectType({
  name: 'CardUpdateManyDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('cardType', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('lastFourDigit', { type: 'Int' })
  },
})

export const CardUpdateManyWithWhereNestedInput = inputObjectType({
  name: 'CardUpdateManyWithWhereNestedInput',
  definition(t) {
    t.field('where', { type: 'CardScalarWhereInput', nullable: false })
    t.field('data', { type: 'CardUpdateManyDataInput', nullable: false })
  },
})

export const CardUpsertWithWhereUniqueWithoutUserInput = inputObjectType({
  name: 'CardUpsertWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.field('where', { type: 'CardWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'CardUpdateWithoutUserDataInput',
      nullable: false,
    })
    t.field('create', { type: 'CardCreateWithoutUserInput', nullable: false })
  },
})

export const CardUpdateManyWithoutUserInput = inputObjectType({
  name: 'CardUpdateManyWithoutUserInput',
  definition(t) {
    t.field('create', { type: 'CardCreateWithoutUserInput', list: true })
    t.field('connect', { type: 'CardWhereUniqueInput', list: true })
    t.field('set', { type: 'CardWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'CardWhereUniqueInput', list: true })
    t.field('delete', { type: 'CardWhereUniqueInput', list: true })
    t.field('update', {
      type: 'CardUpdateWithWhereUniqueWithoutUserInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'CardUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'CardScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'CardUpsertWithWhereUniqueWithoutUserInput',
      list: true,
    })
  },
})

export const AddressUpdateWithoutOrdersDataInput = inputObjectType({
  name: 'AddressUpdateWithoutOrdersDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('json', { type: 'String' })
    t.field('info', { type: 'String' })
    t.field('companyId', { type: 'Int' })
    t.field('company', { type: 'CompanyUpdateOneWithoutAddressInput' })
    t.field('user', { type: 'UserUpdateOneWithoutAddressesInput' })
  },
})

export const AddressUpsertWithoutOrdersInput = inputObjectType({
  name: 'AddressUpsertWithoutOrdersInput',
  definition(t) {
    t.field('update', {
      type: 'AddressUpdateWithoutOrdersDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'AddressCreateWithoutOrdersInput',
      nullable: false,
    })
  },
})

export const AddressUpdateOneRequiredWithoutOrdersInput = inputObjectType({
  name: 'AddressUpdateOneRequiredWithoutOrdersInput',
  definition(t) {
    t.field('create', { type: 'AddressCreateWithoutOrdersInput' })
    t.field('connect', { type: 'AddressWhereUniqueInput' })
    t.field('update', { type: 'AddressUpdateWithoutOrdersDataInput' })
    t.field('upsert', { type: 'AddressUpsertWithoutOrdersInput' })
  },
})

export const InvoiceUpdateWithoutCompanyDataInput = inputObjectType({
  name: 'InvoiceUpdateWithoutCompanyDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('subtotal', { type: 'Float' })
    t.field('deliveryFees', { type: 'Float' })
    t.field('taxRate', { type: 'Float' })
    t.field('taxes', { type: 'Float' })
    t.field('total', { type: 'Float' })
    t.field('order', { type: 'OrderUpdateOneRequiredWithoutInvoiceInput' })
    t.field('customer', {
      type: 'CustomerUpdateOneRequiredWithoutInvoicesInput',
    })
  },
})

export const InvoiceUpdateWithWhereUniqueWithoutCompanyInput = inputObjectType({
  name: 'InvoiceUpdateWithWhereUniqueWithoutCompanyInput',
  definition(t) {
    t.field('where', { type: 'InvoiceWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'InvoiceUpdateWithoutCompanyDataInput',
      nullable: false,
    })
  },
})

export const InvoiceScalarWhereInput = inputObjectType({
  name: 'InvoiceScalarWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('orderId', { type: 'IntFilter' })
    t.field('customerId', { type: 'IntFilter' })
    t.field('subtotal', { type: 'NullableFloatFilter' })
    t.field('deliveryFees', { type: 'NullableFloatFilter' })
    t.field('taxRate', { type: 'NullableFloatFilter' })
    t.field('taxes', { type: 'NullableFloatFilter' })
    t.field('total', { type: 'NullableFloatFilter' })
    t.field('companyId', { type: 'NullableIntFilter' })
    t.field('AND', { type: 'InvoiceScalarWhereInput', list: true })
    t.field('OR', { type: 'InvoiceScalarWhereInput', list: true })
    t.field('NOT', { type: 'InvoiceScalarWhereInput', list: true })
  },
})

export const InvoiceUpdateManyDataInput = inputObjectType({
  name: 'InvoiceUpdateManyDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('subtotal', { type: 'Float' })
    t.field('deliveryFees', { type: 'Float' })
    t.field('taxRate', { type: 'Float' })
    t.field('taxes', { type: 'Float' })
    t.field('total', { type: 'Float' })
  },
})

export const InvoiceUpdateManyWithWhereNestedInput = inputObjectType({
  name: 'InvoiceUpdateManyWithWhereNestedInput',
  definition(t) {
    t.field('where', { type: 'InvoiceScalarWhereInput', nullable: false })
    t.field('data', { type: 'InvoiceUpdateManyDataInput', nullable: false })
  },
})

export const InvoiceUpsertWithWhereUniqueWithoutCompanyInput = inputObjectType({
  name: 'InvoiceUpsertWithWhereUniqueWithoutCompanyInput',
  definition(t) {
    t.field('where', { type: 'InvoiceWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'InvoiceUpdateWithoutCompanyDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'InvoiceCreateWithoutCompanyInput',
      nullable: false,
    })
  },
})

export const InvoiceUpdateManyWithoutCompanyInput = inputObjectType({
  name: 'InvoiceUpdateManyWithoutCompanyInput',
  definition(t) {
    t.field('create', { type: 'InvoiceCreateWithoutCompanyInput', list: true })
    t.field('connect', { type: 'InvoiceWhereUniqueInput', list: true })
    t.field('set', { type: 'InvoiceWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'InvoiceWhereUniqueInput', list: true })
    t.field('delete', { type: 'InvoiceWhereUniqueInput', list: true })
    t.field('update', {
      type: 'InvoiceUpdateWithWhereUniqueWithoutCompanyInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'InvoiceUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'InvoiceScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'InvoiceUpsertWithWhereUniqueWithoutCompanyInput',
      list: true,
    })
  },
})

export const ReviewUpdateWithoutCompanyDataInput = inputObjectType({
  name: 'ReviewUpdateWithoutCompanyDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('status', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.field('comment', { type: 'String' })
    t.field('order', { type: 'OrderUpdateOneWithoutReviewsInput' })
    t.field('product', { type: 'ProductUpdateOneWithoutReviewInput' })
    t.field('customer', { type: 'CustomerUpdateOneWithoutReviewsInput' })
  },
})

export const ReviewUpdateWithWhereUniqueWithoutCompanyInput = inputObjectType({
  name: 'ReviewUpdateWithWhereUniqueWithoutCompanyInput',
  definition(t) {
    t.field('where', { type: 'ReviewWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'ReviewUpdateWithoutCompanyDataInput',
      nullable: false,
    })
  },
})

export const ReviewScalarWhereInput = inputObjectType({
  name: 'ReviewScalarWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('createdAt', { type: 'NullableDateTimeFilter' })
    t.field('status', { type: 'NullableStringFilter' })
    t.field('orderId', { type: 'NullableIntFilter' })
    t.field('productId', { type: 'NullableIntFilter' })
    t.field('customerId', { type: 'NullableIntFilter' })
    t.field('rating', { type: 'NullableIntFilter' })
    t.field('comment', { type: 'NullableStringFilter' })
    t.field('companyId', { type: 'NullableIntFilter' })
    t.field('AND', { type: 'ReviewScalarWhereInput', list: true })
    t.field('OR', { type: 'ReviewScalarWhereInput', list: true })
    t.field('NOT', { type: 'ReviewScalarWhereInput', list: true })
  },
})

export const ReviewUpdateManyDataInput = inputObjectType({
  name: 'ReviewUpdateManyDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('status', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.field('comment', { type: 'String' })
  },
})

export const ReviewUpdateManyWithWhereNestedInput = inputObjectType({
  name: 'ReviewUpdateManyWithWhereNestedInput',
  definition(t) {
    t.field('where', { type: 'ReviewScalarWhereInput', nullable: false })
    t.field('data', { type: 'ReviewUpdateManyDataInput', nullable: false })
  },
})

export const ReviewUpsertWithWhereUniqueWithoutCompanyInput = inputObjectType({
  name: 'ReviewUpsertWithWhereUniqueWithoutCompanyInput',
  definition(t) {
    t.field('where', { type: 'ReviewWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'ReviewUpdateWithoutCompanyDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'ReviewCreateWithoutCompanyInput',
      nullable: false,
    })
  },
})

export const ReviewUpdateManyWithoutCompanyInput = inputObjectType({
  name: 'ReviewUpdateManyWithoutCompanyInput',
  definition(t) {
    t.field('create', { type: 'ReviewCreateWithoutCompanyInput', list: true })
    t.field('connect', { type: 'ReviewWhereUniqueInput', list: true })
    t.field('set', { type: 'ReviewWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'ReviewWhereUniqueInput', list: true })
    t.field('delete', { type: 'ReviewWhereUniqueInput', list: true })
    t.field('update', {
      type: 'ReviewUpdateWithWhereUniqueWithoutCompanyInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'ReviewUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'ReviewScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'ReviewUpsertWithWhereUniqueWithoutCompanyInput',
      list: true,
    })
  },
})

export const DeliveryDetailUpdateWithoutCompanyDataInput = inputObjectType({
  name: 'DeliveryDetailUpdateWithoutCompanyDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('isFree', { type: 'Boolean' })
    t.field('charge', { type: 'String' })
    t.field('minimumOrder', { type: 'Float' })
    t.field('companyId', { type: 'Int' })
  },
})

export const DeliveryDetailUpsertWithoutCompanyInput = inputObjectType({
  name: 'DeliveryDetailUpsertWithoutCompanyInput',
  definition(t) {
    t.field('update', {
      type: 'DeliveryDetailUpdateWithoutCompanyDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'DeliveryDetailCreateWithoutCompanyInput',
      nullable: false,
    })
  },
})

export const DeliveryDetailUpdateOneRequiredWithoutCompanyInput = inputObjectType({
  name: 'DeliveryDetailUpdateOneRequiredWithoutCompanyInput',
  definition(t) {
    t.field('create', { type: 'DeliveryDetailCreateWithoutCompanyInput' })
    t.field('connect', { type: 'DeliveryDetailWhereUniqueInput' })
    t.field('update', { type: 'DeliveryDetailUpdateWithoutCompanyDataInput' })
    t.field('upsert', { type: 'DeliveryDetailUpsertWithoutCompanyInput' })
  },
})

export const ProductUpdateWithoutCategoriesDataInput = inputObjectType({
  name: 'ProductUpdateWithoutCategoriesDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('width', { type: 'Float' })
    t.field('height', { type: 'Float' })
    t.field('price', { type: 'Float' })
    t.field('thumbnail', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('stock', { type: 'Int' })
    t.field('sku', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('slug', { type: 'String' })
    t.field('salePrice', { type: 'Float' })
    t.field('discountInPercent', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('unit', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('gallery', { type: 'ProductUpdategalleryInput' })
    t.field('review', { type: 'ReviewUpdateManyWithoutProductInput' })
    t.field('orderItems', { type: 'OrderItemUpdateManyWithoutProductInput' })
    t.field('company', { type: 'CompanyUpdateOneWithoutProductsInput' })
  },
})

export const ProductUpdateWithWhereUniqueWithoutCategoriesInput = inputObjectType({
  name: 'ProductUpdateWithWhereUniqueWithoutCategoriesInput',
  definition(t) {
    t.field('where', { type: 'ProductWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'ProductUpdateWithoutCategoriesDataInput',
      nullable: false,
    })
  },
})

export const ProductScalarWhereInput = inputObjectType({
  name: 'ProductScalarWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('width', { type: 'NullableFloatFilter' })
    t.field('height', { type: 'NullableFloatFilter' })
    t.field('price', { type: 'NullableFloatFilter' })
    t.field('thumbnail', { type: 'NullableStringFilter' })
    t.field('image', { type: 'NullableStringFilter' })
    t.field('description', { type: 'NullableStringFilter' })
    t.field('stock', { type: 'NullableIntFilter' })
    t.field('review', { type: 'ReviewFilter' })
    t.field('orderItems', { type: 'OrderItemFilter' })
    t.field('companyId', { type: 'NullableIntFilter' })
    t.field('sku', { type: 'NullableStringFilter' })
    t.field('name', { type: 'NullableStringFilter' })
    t.field('slug', { type: 'StringFilter' })
    t.field('salePrice', { type: 'NullableFloatFilter' })
    t.field('discountInPercent', { type: 'NullableIntFilter' })
    t.field('type', { type: 'StringFilter' })
    t.field('categories', { type: 'CategoryFilter' })
    t.field('unit', { type: 'NullableStringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('AND', { type: 'ProductScalarWhereInput', list: true })
    t.field('OR', { type: 'ProductScalarWhereInput', list: true })
    t.field('NOT', { type: 'ProductScalarWhereInput', list: true })
  },
})

export const ProductUpdateManyDataInput = inputObjectType({
  name: 'ProductUpdateManyDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('width', { type: 'Float' })
    t.field('height', { type: 'Float' })
    t.field('price', { type: 'Float' })
    t.field('thumbnail', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('stock', { type: 'Int' })
    t.field('sku', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('slug', { type: 'String' })
    t.field('salePrice', { type: 'Float' })
    t.field('discountInPercent', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('unit', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('gallery', { type: 'ProductUpdategalleryInput' })
  },
})

export const ProductUpdateManyWithWhereNestedInput = inputObjectType({
  name: 'ProductUpdateManyWithWhereNestedInput',
  definition(t) {
    t.field('where', { type: 'ProductScalarWhereInput', nullable: false })
    t.field('data', { type: 'ProductUpdateManyDataInput', nullable: false })
  },
})

export const ProductUpsertWithWhereUniqueWithoutCategoriesInput = inputObjectType({
  name: 'ProductUpsertWithWhereUniqueWithoutCategoriesInput',
  definition(t) {
    t.field('where', { type: 'ProductWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'ProductUpdateWithoutCategoriesDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'ProductCreateWithoutCategoriesInput',
      nullable: false,
    })
  },
})

export const ProductUpdateManyWithoutCategoriesInput = inputObjectType({
  name: 'ProductUpdateManyWithoutCategoriesInput',
  definition(t) {
    t.field('create', {
      type: 'ProductCreateWithoutCategoriesInput',
      list: true,
    })
    t.field('connect', { type: 'ProductWhereUniqueInput', list: true })
    t.field('set', { type: 'ProductWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'ProductWhereUniqueInput', list: true })
    t.field('delete', { type: 'ProductWhereUniqueInput', list: true })
    t.field('update', {
      type: 'ProductUpdateWithWhereUniqueWithoutCategoriesInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'ProductUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'ProductScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'ProductUpsertWithWhereUniqueWithoutCategoriesInput',
      list: true,
    })
  },
})

export const CountryUpdateWithoutPlatformsDataInput = inputObjectType({
  name: 'CountryUpdateWithoutPlatformsDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('code', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('currency', { type: 'String' })
  },
})

export const CountryUpsertWithoutPlatformsInput = inputObjectType({
  name: 'CountryUpsertWithoutPlatformsInput',
  definition(t) {
    t.field('update', {
      type: 'CountryUpdateWithoutPlatformsDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CountryCreateWithoutPlatformsInput',
      nullable: false,
    })
  },
})

export const CountryUpdateOneWithoutPlatformsInput = inputObjectType({
  name: 'CountryUpdateOneWithoutPlatformsInput',
  definition(t) {
    t.field('create', { type: 'CountryCreateWithoutPlatformsInput' })
    t.field('connect', { type: 'CountryWhereUniqueInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('update', { type: 'CountryUpdateWithoutPlatformsDataInput' })
    t.field('upsert', { type: 'CountryUpsertWithoutPlatformsInput' })
  },
})

export const PlatformUpdateWithoutCategoriesDataInput = inputObjectType({
  name: 'PlatformUpdateWithoutCategoriesDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('bannerImg', { type: 'String' })
    t.field('slug', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('platformType', { type: 'String' })
    t.field('taxRate', { type: 'Float' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('owner', { type: 'UserUpdateOneRequiredWithoutPlatformsInput' })
    t.field('companies', { type: 'CompanyUpdateManyWithoutPlatformInput' })
    t.field('country', { type: 'CountryUpdateOneWithoutPlatformsInput' })
  },
})

export const PlatformUpsertWithoutCategoriesInput = inputObjectType({
  name: 'PlatformUpsertWithoutCategoriesInput',
  definition(t) {
    t.field('update', {
      type: 'PlatformUpdateWithoutCategoriesDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'PlatformCreateWithoutCategoriesInput',
      nullable: false,
    })
  },
})

export const PlatformUpdateOneRequiredWithoutCategoriesInput = inputObjectType({
  name: 'PlatformUpdateOneRequiredWithoutCategoriesInput',
  definition(t) {
    t.field('create', { type: 'PlatformCreateWithoutCategoriesInput' })
    t.field('connect', { type: 'PlatformWhereUniqueInput' })
    t.field('update', { type: 'PlatformUpdateWithoutCategoriesDataInput' })
    t.field('upsert', { type: 'PlatformUpsertWithoutCategoriesInput' })
  },
})

export const OrderUpdateWithoutContactDataInput = inputObjectType({
  name: 'OrderUpdateWithoutContactDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('reference', { type: 'String' })
    t.field('subtotal', { type: 'Float' })
    t.field('deliveryFees', { type: 'Float' })
    t.field('taxRate', { type: 'Float' })
    t.field('taxes', { type: 'Float' })
    t.field('total', { type: 'Float' })
    t.field('status', { type: 'String' })
    t.field('returned', { type: 'Boolean' })
    t.field('deliveryTime', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('paymentMethod', { type: 'String' })
    t.field('customer', { type: 'CustomerUpdateOneWithoutOrdersInput' })
    t.field('invoice', { type: 'InvoiceUpdateManyWithoutOrderInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutOrderInput' })
    t.field('orderItems', { type: 'OrderItemUpdateManyWithoutOrderInput' })
    t.field('company', { type: 'CompanyUpdateOneWithoutOrdersInput' })
    t.field('deliveryAdress', {
      type: 'AddressUpdateOneRequiredWithoutOrdersInput',
    })
  },
})

export const OrderUpdateWithWhereUniqueWithoutContactInput = inputObjectType({
  name: 'OrderUpdateWithWhereUniqueWithoutContactInput',
  definition(t) {
    t.field('where', { type: 'OrderWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'OrderUpdateWithoutContactDataInput',
      nullable: false,
    })
  },
})

export const OrderScalarWhereInput = inputObjectType({
  name: 'OrderScalarWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('reference', { type: 'NullableStringFilter' })
    t.field('customerId', { type: 'NullableIntFilter' })
    t.field('subtotal', { type: 'FloatFilter' })
    t.field('deliveryFees', { type: 'FloatFilter' })
    t.field('taxRate', { type: 'FloatFilter' })
    t.field('taxes', { type: 'FloatFilter' })
    t.field('total', { type: 'FloatFilter' })
    t.field('status', { type: 'NullableStringFilter' })
    t.field('returned', { type: 'BooleanFilter' })
    t.field('invoice', { type: 'InvoiceFilter' })
    t.field('reviews', { type: 'ReviewFilter' })
    t.field('orderItems', { type: 'OrderItemFilter' })
    t.field('companyId', { type: 'NullableIntFilter' })
    t.field('deliveryTime', { type: 'NullableDateTimeFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('paymentMethod', { type: 'StringFilter' })
    t.field('deliveryAddressId', { type: 'IntFilter' })
    t.field('contactId', { type: 'NullableIntFilter' })
    t.field('AND', { type: 'OrderScalarWhereInput', list: true })
    t.field('OR', { type: 'OrderScalarWhereInput', list: true })
    t.field('NOT', { type: 'OrderScalarWhereInput', list: true })
  },
})

export const OrderUpdateManyDataInput = inputObjectType({
  name: 'OrderUpdateManyDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('reference', { type: 'String' })
    t.field('subtotal', { type: 'Float' })
    t.field('deliveryFees', { type: 'Float' })
    t.field('taxRate', { type: 'Float' })
    t.field('taxes', { type: 'Float' })
    t.field('total', { type: 'Float' })
    t.field('status', { type: 'String' })
    t.field('returned', { type: 'Boolean' })
    t.field('deliveryTime', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('paymentMethod', { type: 'String' })
  },
})

export const OrderUpdateManyWithWhereNestedInput = inputObjectType({
  name: 'OrderUpdateManyWithWhereNestedInput',
  definition(t) {
    t.field('where', { type: 'OrderScalarWhereInput', nullable: false })
    t.field('data', { type: 'OrderUpdateManyDataInput', nullable: false })
  },
})

export const OrderUpsertWithWhereUniqueWithoutContactInput = inputObjectType({
  name: 'OrderUpsertWithWhereUniqueWithoutContactInput',
  definition(t) {
    t.field('where', { type: 'OrderWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'OrderUpdateWithoutContactDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'OrderCreateWithoutContactInput',
      nullable: false,
    })
  },
})

export const OrderUpdateManyWithoutContactInput = inputObjectType({
  name: 'OrderUpdateManyWithoutContactInput',
  definition(t) {
    t.field('create', { type: 'OrderCreateWithoutContactInput', list: true })
    t.field('connect', { type: 'OrderWhereUniqueInput', list: true })
    t.field('set', { type: 'OrderWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'OrderWhereUniqueInput', list: true })
    t.field('delete', { type: 'OrderWhereUniqueInput', list: true })
    t.field('update', {
      type: 'OrderUpdateWithWhereUniqueWithoutContactInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'OrderUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'OrderScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'OrderUpsertWithWhereUniqueWithoutContactInput',
      list: true,
    })
  },
})

export const ContactUpdateWithoutStaffsDataInput = inputObjectType({
  name: 'ContactUpdateWithoutStaffsDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('number', { type: 'String' })
    t.field('companyId', { type: 'Int' })
    t.field('company', { type: 'CompanyUpdateOneWithoutContactInput' })
    t.field('user', { type: 'UserUpdateOneWithoutContactsInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutContactInput' })
  },
})

export const ContactUpsertWithoutStaffsInput = inputObjectType({
  name: 'ContactUpsertWithoutStaffsInput',
  definition(t) {
    t.field('update', {
      type: 'ContactUpdateWithoutStaffsDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'ContactCreateWithoutStaffsInput',
      nullable: false,
    })
  },
})

export const ContactUpdateOneWithoutStaffsInput = inputObjectType({
  name: 'ContactUpdateOneWithoutStaffsInput',
  definition(t) {
    t.field('create', { type: 'ContactCreateWithoutStaffsInput' })
    t.field('connect', { type: 'ContactWhereUniqueInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('update', { type: 'ContactUpdateWithoutStaffsDataInput' })
    t.field('upsert', { type: 'ContactUpsertWithoutStaffsInput' })
  },
})

export const StaffUpdateWithoutCompanyDataInput = inputObjectType({
  name: 'StaffUpdateWithoutCompanyDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('role', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutStaffsInput' })
    t.field('contact', { type: 'ContactUpdateOneWithoutStaffsInput' })
  },
})

export const StaffUpdateWithWhereUniqueWithoutCompanyInput = inputObjectType({
  name: 'StaffUpdateWithWhereUniqueWithoutCompanyInput',
  definition(t) {
    t.field('where', { type: 'StaffWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'StaffUpdateWithoutCompanyDataInput',
      nullable: false,
    })
  },
})

export const StaffScalarWhereInput = inputObjectType({
  name: 'StaffScalarWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('userId', { type: 'StringFilter' })
    t.field('companyId', { type: 'IntFilter' })
    t.field('role', { type: 'StringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('firstName', { type: 'NullableStringFilter' })
    t.field('lastName', { type: 'NullableStringFilter' })
    t.field('contactId', { type: 'NullableIntFilter' })
    t.field('email', { type: 'NullableStringFilter' })
    t.field('AND', { type: 'StaffScalarWhereInput', list: true })
    t.field('OR', { type: 'StaffScalarWhereInput', list: true })
    t.field('NOT', { type: 'StaffScalarWhereInput', list: true })
  },
})

export const StaffUpdateManyDataInput = inputObjectType({
  name: 'StaffUpdateManyDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('role', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('email', { type: 'String' })
  },
})

export const StaffUpdateManyWithWhereNestedInput = inputObjectType({
  name: 'StaffUpdateManyWithWhereNestedInput',
  definition(t) {
    t.field('where', { type: 'StaffScalarWhereInput', nullable: false })
    t.field('data', { type: 'StaffUpdateManyDataInput', nullable: false })
  },
})

export const StaffUpsertWithWhereUniqueWithoutCompanyInput = inputObjectType({
  name: 'StaffUpsertWithWhereUniqueWithoutCompanyInput',
  definition(t) {
    t.field('where', { type: 'StaffWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'StaffUpdateWithoutCompanyDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'StaffCreateWithoutCompanyInput',
      nullable: false,
    })
  },
})

export const StaffUpdateManyWithoutCompanyInput = inputObjectType({
  name: 'StaffUpdateManyWithoutCompanyInput',
  definition(t) {
    t.field('create', { type: 'StaffCreateWithoutCompanyInput', list: true })
    t.field('connect', { type: 'StaffWhereUniqueInput', list: true })
    t.field('set', { type: 'StaffWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'StaffWhereUniqueInput', list: true })
    t.field('delete', { type: 'StaffWhereUniqueInput', list: true })
    t.field('update', {
      type: 'StaffUpdateWithWhereUniqueWithoutCompanyInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'StaffUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'StaffScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'StaffUpsertWithWhereUniqueWithoutCompanyInput',
      list: true,
    })
  },
})

export const CompanyUpdateWithoutCategoriesDataInput = inputObjectType({
  name: 'CompanyUpdateWithoutCategoriesDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('slug', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String' })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressUpdateOneWithoutCompanyInput' })
    t.field('contact', { type: 'ContactUpdateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformUpdateOneRequiredWithoutCompaniesInput',
    })
    t.field('products', { type: 'ProductUpdateManyWithoutCompanyInput' })
    t.field('customers', { type: 'CustomerUpdateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserUpdateOneWithoutCompaniesInput' })
    t.field('invoices', { type: 'InvoiceUpdateManyWithoutCompanyInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailUpdateOneRequiredWithoutCompanyInput',
    })
  },
})

export const CompanyUpdateWithWhereUniqueWithoutCategoriesInput = inputObjectType({
  name: 'CompanyUpdateWithWhereUniqueWithoutCategoriesInput',
  definition(t) {
    t.field('where', { type: 'CompanyWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'CompanyUpdateWithoutCategoriesDataInput',
      nullable: false,
    })
  },
})

export const CompanyScalarWhereInput = inputObjectType({
  name: 'CompanyScalarWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('slug', { type: 'StringFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('description', { type: 'StringFilter' })
    t.field('previewUrl', { type: 'NullableStringFilter' })
    t.field('thumbnailUrl', { type: 'NullableStringFilter' })
    t.field('platformSlug', { type: 'StringFilter' })
    t.field('addressId', { type: 'NullableIntFilter' })
    t.field('contactId', { type: 'NullableIntFilter' })
    t.field('platformId', { type: 'IntFilter' })
    t.field('products', { type: 'ProductFilter' })
    t.field('customers', { type: 'CustomerFilter' })
    t.field('orders', { type: 'OrderFilter' })
    t.field('ownerId', { type: 'NullableStringFilter' })
    t.field('invoices', { type: 'InvoiceFilter' })
    t.field('reviews', { type: 'ReviewFilter' })
    t.field('staffs', { type: 'StaffFilter' })
    t.field('deliveryDetailId', { type: 'IntFilter' })
    t.field('promotion', { type: 'NullableStringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('categories', { type: 'CategoryFilter' })
    t.field('AND', { type: 'CompanyScalarWhereInput', list: true })
    t.field('OR', { type: 'CompanyScalarWhereInput', list: true })
    t.field('NOT', { type: 'CompanyScalarWhereInput', list: true })
  },
})

export const CompanyUpdateManyDataInput = inputObjectType({
  name: 'CompanyUpdateManyDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('slug', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String' })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CompanyUpdateManyWithWhereNestedInput = inputObjectType({
  name: 'CompanyUpdateManyWithWhereNestedInput',
  definition(t) {
    t.field('where', { type: 'CompanyScalarWhereInput', nullable: false })
    t.field('data', { type: 'CompanyUpdateManyDataInput', nullable: false })
  },
})

export const CompanyUpsertWithWhereUniqueWithoutCategoriesInput = inputObjectType({
  name: 'CompanyUpsertWithWhereUniqueWithoutCategoriesInput',
  definition(t) {
    t.field('where', { type: 'CompanyWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'CompanyUpdateWithoutCategoriesDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CompanyCreateWithoutCategoriesInput',
      nullable: false,
    })
  },
})

export const CompanyUpdateManyWithoutCategoriesInput = inputObjectType({
  name: 'CompanyUpdateManyWithoutCategoriesInput',
  definition(t) {
    t.field('create', {
      type: 'CompanyCreateWithoutCategoriesInput',
      list: true,
    })
    t.field('connect', { type: 'CompanyWhereUniqueInput', list: true })
    t.field('set', { type: 'CompanyWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'CompanyWhereUniqueInput', list: true })
    t.field('delete', { type: 'CompanyWhereUniqueInput', list: true })
    t.field('update', {
      type: 'CompanyUpdateWithWhereUniqueWithoutCategoriesInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'CompanyUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'CompanyScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'CompanyUpsertWithWhereUniqueWithoutCategoriesInput',
      list: true,
    })
  },
})

export const CategoryUpdateWithoutChildrenDataInput = inputObjectType({
  name: 'CategoryUpdateWithoutChildrenDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('slug', { type: 'String' })
    t.field('type', { type: 'String' })
    t.field('icon', { type: 'String' })
    t.field('products', { type: 'ProductUpdateManyWithoutCategoriesInput' })
    t.field('platform', {
      type: 'PlatformUpdateOneRequiredWithoutCategoriesInput',
    })
    t.field('parent', { type: 'CategoryUpdateOneWithoutChildrenInput' })
    t.field('companies', { type: 'CompanyUpdateManyWithoutCategoriesInput' })
  },
})

export const CategoryUpsertWithoutChildrenInput = inputObjectType({
  name: 'CategoryUpsertWithoutChildrenInput',
  definition(t) {
    t.field('update', {
      type: 'CategoryUpdateWithoutChildrenDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CategoryCreateWithoutChildrenInput',
      nullable: false,
    })
  },
})

export const CategoryUpdateOneWithoutChildrenInput = inputObjectType({
  name: 'CategoryUpdateOneWithoutChildrenInput',
  definition(t) {
    t.field('create', { type: 'CategoryCreateWithoutChildrenInput' })
    t.field('connect', { type: 'CategoryWhereUniqueInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('update', { type: 'CategoryUpdateWithoutChildrenDataInput' })
    t.field('upsert', { type: 'CategoryUpsertWithoutChildrenInput' })
  },
})

export const CategoryUpdateWithoutParentDataInput = inputObjectType({
  name: 'CategoryUpdateWithoutParentDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('slug', { type: 'String' })
    t.field('type', { type: 'String' })
    t.field('icon', { type: 'String' })
    t.field('products', { type: 'ProductUpdateManyWithoutCategoriesInput' })
    t.field('platform', {
      type: 'PlatformUpdateOneRequiredWithoutCategoriesInput',
    })
    t.field('children', { type: 'CategoryUpdateManyWithoutParentInput' })
    t.field('companies', { type: 'CompanyUpdateManyWithoutCategoriesInput' })
  },
})

export const CategoryUpdateWithWhereUniqueWithoutParentInput = inputObjectType({
  name: 'CategoryUpdateWithWhereUniqueWithoutParentInput',
  definition(t) {
    t.field('where', { type: 'CategoryWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'CategoryUpdateWithoutParentDataInput',
      nullable: false,
    })
  },
})

export const CategoryScalarWhereInput = inputObjectType({
  name: 'CategoryScalarWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('products', { type: 'ProductFilter' })
    t.field('platformId', { type: 'IntFilter' })
    t.field('slug', { type: 'StringFilter' })
    t.field('type', { type: 'StringFilter' })
    t.field('icon', { type: 'NullableStringFilter' })
    t.field('parentId', { type: 'NullableIntFilter' })
    t.field('children', { type: 'CategoryFilter' })
    t.field('companies', { type: 'CompanyFilter' })
    t.field('AND', { type: 'CategoryScalarWhereInput', list: true })
    t.field('OR', { type: 'CategoryScalarWhereInput', list: true })
    t.field('NOT', { type: 'CategoryScalarWhereInput', list: true })
  },
})

export const CategoryUpdateManyDataInput = inputObjectType({
  name: 'CategoryUpdateManyDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('slug', { type: 'String' })
    t.field('type', { type: 'String' })
    t.field('icon', { type: 'String' })
  },
})

export const CategoryUpdateManyWithWhereNestedInput = inputObjectType({
  name: 'CategoryUpdateManyWithWhereNestedInput',
  definition(t) {
    t.field('where', { type: 'CategoryScalarWhereInput', nullable: false })
    t.field('data', { type: 'CategoryUpdateManyDataInput', nullable: false })
  },
})

export const CategoryUpsertWithWhereUniqueWithoutParentInput = inputObjectType({
  name: 'CategoryUpsertWithWhereUniqueWithoutParentInput',
  definition(t) {
    t.field('where', { type: 'CategoryWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'CategoryUpdateWithoutParentDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CategoryCreateWithoutParentInput',
      nullable: false,
    })
  },
})

export const CategoryUpdateManyWithoutParentInput = inputObjectType({
  name: 'CategoryUpdateManyWithoutParentInput',
  definition(t) {
    t.field('create', { type: 'CategoryCreateWithoutParentInput', list: true })
    t.field('connect', { type: 'CategoryWhereUniqueInput', list: true })
    t.field('set', { type: 'CategoryWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'CategoryWhereUniqueInput', list: true })
    t.field('delete', { type: 'CategoryWhereUniqueInput', list: true })
    t.field('update', {
      type: 'CategoryUpdateWithWhereUniqueWithoutParentInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'CategoryUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'CategoryScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'CategoryUpsertWithWhereUniqueWithoutParentInput',
      list: true,
    })
  },
})

export const CategoryUpdateWithoutCompaniesDataInput = inputObjectType({
  name: 'CategoryUpdateWithoutCompaniesDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('slug', { type: 'String' })
    t.field('type', { type: 'String' })
    t.field('icon', { type: 'String' })
    t.field('products', { type: 'ProductUpdateManyWithoutCategoriesInput' })
    t.field('platform', {
      type: 'PlatformUpdateOneRequiredWithoutCategoriesInput',
    })
    t.field('parent', { type: 'CategoryUpdateOneWithoutChildrenInput' })
    t.field('children', { type: 'CategoryUpdateManyWithoutParentInput' })
  },
})

export const CategoryUpdateWithWhereUniqueWithoutCompaniesInput = inputObjectType({
  name: 'CategoryUpdateWithWhereUniqueWithoutCompaniesInput',
  definition(t) {
    t.field('where', { type: 'CategoryWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'CategoryUpdateWithoutCompaniesDataInput',
      nullable: false,
    })
  },
})

export const CategoryUpsertWithWhereUniqueWithoutCompaniesInput = inputObjectType({
  name: 'CategoryUpsertWithWhereUniqueWithoutCompaniesInput',
  definition(t) {
    t.field('where', { type: 'CategoryWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'CategoryUpdateWithoutCompaniesDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CategoryCreateWithoutCompaniesInput',
      nullable: false,
    })
  },
})

export const CategoryUpdateManyWithoutCompaniesInput = inputObjectType({
  name: 'CategoryUpdateManyWithoutCompaniesInput',
  definition(t) {
    t.field('create', {
      type: 'CategoryCreateWithoutCompaniesInput',
      list: true,
    })
    t.field('connect', { type: 'CategoryWhereUniqueInput', list: true })
    t.field('set', { type: 'CategoryWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'CategoryWhereUniqueInput', list: true })
    t.field('delete', { type: 'CategoryWhereUniqueInput', list: true })
    t.field('update', {
      type: 'CategoryUpdateWithWhereUniqueWithoutCompaniesInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'CategoryUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'CategoryScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'CategoryUpsertWithWhereUniqueWithoutCompaniesInput',
      list: true,
    })
  },
})

export const CompanyUpdateWithoutStaffsDataInput = inputObjectType({
  name: 'CompanyUpdateWithoutStaffsDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('slug', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String' })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressUpdateOneWithoutCompanyInput' })
    t.field('contact', { type: 'ContactUpdateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformUpdateOneRequiredWithoutCompaniesInput',
    })
    t.field('products', { type: 'ProductUpdateManyWithoutCompanyInput' })
    t.field('customers', { type: 'CustomerUpdateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserUpdateOneWithoutCompaniesInput' })
    t.field('invoices', { type: 'InvoiceUpdateManyWithoutCompanyInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailUpdateOneRequiredWithoutCompanyInput',
    })
    t.field('categories', { type: 'CategoryUpdateManyWithoutCompaniesInput' })
  },
})

export const CompanyUpsertWithoutStaffsInput = inputObjectType({
  name: 'CompanyUpsertWithoutStaffsInput',
  definition(t) {
    t.field('update', {
      type: 'CompanyUpdateWithoutStaffsDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CompanyCreateWithoutStaffsInput',
      nullable: false,
    })
  },
})

export const CompanyUpdateOneRequiredWithoutStaffsInput = inputObjectType({
  name: 'CompanyUpdateOneRequiredWithoutStaffsInput',
  definition(t) {
    t.field('create', { type: 'CompanyCreateWithoutStaffsInput' })
    t.field('connect', { type: 'CompanyWhereUniqueInput' })
    t.field('update', { type: 'CompanyUpdateWithoutStaffsDataInput' })
    t.field('upsert', { type: 'CompanyUpsertWithoutStaffsInput' })
  },
})

export const StaffUpdateWithoutUserDataInput = inputObjectType({
  name: 'StaffUpdateWithoutUserDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('role', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('company', { type: 'CompanyUpdateOneRequiredWithoutStaffsInput' })
    t.field('contact', { type: 'ContactUpdateOneWithoutStaffsInput' })
  },
})

export const StaffUpdateWithWhereUniqueWithoutUserInput = inputObjectType({
  name: 'StaffUpdateWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.field('where', { type: 'StaffWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'StaffUpdateWithoutUserDataInput',
      nullable: false,
    })
  },
})

export const StaffUpsertWithWhereUniqueWithoutUserInput = inputObjectType({
  name: 'StaffUpsertWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.field('where', { type: 'StaffWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'StaffUpdateWithoutUserDataInput',
      nullable: false,
    })
    t.field('create', { type: 'StaffCreateWithoutUserInput', nullable: false })
  },
})

export const StaffUpdateManyWithoutUserInput = inputObjectType({
  name: 'StaffUpdateManyWithoutUserInput',
  definition(t) {
    t.field('create', { type: 'StaffCreateWithoutUserInput', list: true })
    t.field('connect', { type: 'StaffWhereUniqueInput', list: true })
    t.field('set', { type: 'StaffWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'StaffWhereUniqueInput', list: true })
    t.field('delete', { type: 'StaffWhereUniqueInput', list: true })
    t.field('update', {
      type: 'StaffUpdateWithWhereUniqueWithoutUserInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'StaffUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'StaffScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'StaffUpsertWithWhereUniqueWithoutUserInput',
      list: true,
    })
  },
})

export const UserUpdateWithoutCompaniesDataInput = inputObjectType({
  name: 'UserUpdateWithoutCompaniesDataInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('email', { type: 'String' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('token', { type: 'String' })
    t.field('googleId', { type: 'String' })
    t.field('walletId', { type: 'String' })
    t.field('income', { type: 'Float' })
    t.field('username', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('imagePublicId', { type: 'String' })
    t.field('coverImage', { type: 'String' })
    t.field('coverImagePublicId', { type: 'String' })
    t.field('isOnline', { type: 'Boolean' })
    t.field('platforms', { type: 'PlatformUpdateManyWithoutOwnerInput' })
    t.field('addresses', { type: 'AddressUpdateManyWithoutUserInput' })
    t.field('cards', { type: 'CardUpdateManyWithoutUserInput' })
    t.field('contacts', { type: 'ContactUpdateManyWithoutUserInput' })
    t.field('customers', { type: 'CustomerUpdateManyWithoutUserInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutUserInput' })
  },
})

export const UserUpsertWithoutCompaniesInput = inputObjectType({
  name: 'UserUpsertWithoutCompaniesInput',
  definition(t) {
    t.field('update', {
      type: 'UserUpdateWithoutCompaniesDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'UserCreateWithoutCompaniesInput',
      nullable: false,
    })
  },
})

export const UserUpdateOneWithoutCompaniesInput = inputObjectType({
  name: 'UserUpdateOneWithoutCompaniesInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutCompaniesInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('update', { type: 'UserUpdateWithoutCompaniesDataInput' })
    t.field('upsert', { type: 'UserUpsertWithoutCompaniesInput' })
  },
})

export const CompanyUpdateWithoutCustomersDataInput = inputObjectType({
  name: 'CompanyUpdateWithoutCustomersDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('slug', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String' })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressUpdateOneWithoutCompanyInput' })
    t.field('contact', { type: 'ContactUpdateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformUpdateOneRequiredWithoutCompaniesInput',
    })
    t.field('products', { type: 'ProductUpdateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserUpdateOneWithoutCompaniesInput' })
    t.field('invoices', { type: 'InvoiceUpdateManyWithoutCompanyInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailUpdateOneRequiredWithoutCompanyInput',
    })
    t.field('categories', { type: 'CategoryUpdateManyWithoutCompaniesInput' })
  },
})

export const CompanyUpsertWithoutCustomersInput = inputObjectType({
  name: 'CompanyUpsertWithoutCustomersInput',
  definition(t) {
    t.field('update', {
      type: 'CompanyUpdateWithoutCustomersDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CompanyCreateWithoutCustomersInput',
      nullable: false,
    })
  },
})

export const CompanyUpdateOneWithoutCustomersInput = inputObjectType({
  name: 'CompanyUpdateOneWithoutCustomersInput',
  definition(t) {
    t.field('create', { type: 'CompanyCreateWithoutCustomersInput' })
    t.field('connect', { type: 'CompanyWhereUniqueInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('update', { type: 'CompanyUpdateWithoutCustomersDataInput' })
    t.field('upsert', { type: 'CompanyUpsertWithoutCustomersInput' })
  },
})

export const CustomerUpdateWithoutUserDataInput = inputObjectType({
  name: 'CustomerUpdateWithoutUserDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('address', { type: 'String' })
    t.field('zipcode', { type: 'String' })
    t.field('city', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('firstSeen', { type: 'DateTime' })
    t.field('lastSeen', { type: 'DateTime' })
    t.field('hasOrdered', { type: 'Boolean' })
    t.field('latestPurchase', { type: 'DateTime' })
    t.field('hasNewsLetter', { type: 'Boolean' })
    t.field('nbOrders', { type: 'Int' })
    t.field('image', { type: 'String' })
    t.field('totalOrder', { type: 'Int' })
    t.field('totalSpent', { type: 'Float' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('groups', { type: 'CustomerUpdategroupsInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutCustomerInput' })
    t.field('invoices', { type: 'InvoiceUpdateManyWithoutCustomerInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutCustomerInput' })
    t.field('company', { type: 'CompanyUpdateOneWithoutCustomersInput' })
  },
})

export const CustomerUpdateWithWhereUniqueWithoutUserInput = inputObjectType({
  name: 'CustomerUpdateWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.field('where', { type: 'CustomerWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'CustomerUpdateWithoutUserDataInput',
      nullable: false,
    })
  },
})

export const CustomerScalarWhereInput = inputObjectType({
  name: 'CustomerScalarWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('firstName', { type: 'StringFilter' })
    t.field('lastName', { type: 'StringFilter' })
    t.field('email', { type: 'StringFilter' })
    t.field('address', { type: 'NullableStringFilter' })
    t.field('zipcode', { type: 'NullableStringFilter' })
    t.field('city', { type: 'NullableStringFilter' })
    t.field('avatar', { type: 'NullableStringFilter' })
    t.field('birthday', { type: 'NullableDateTimeFilter' })
    t.field('firstSeen', { type: 'NullableDateTimeFilter' })
    t.field('lastSeen', { type: 'NullableDateTimeFilter' })
    t.field('hasOrdered', { type: 'NullableBooleanFilter' })
    t.field('latestPurchase', { type: 'NullableDateTimeFilter' })
    t.field('hasNewsLetter', { type: 'NullableBooleanFilter' })
    t.field('nbOrders', { type: 'NullableIntFilter' })
    t.field('reviews', { type: 'ReviewFilter' })
    t.field('invoices', { type: 'InvoiceFilter' })
    t.field('orders', { type: 'OrderFilter' })
    t.field('companyId', { type: 'NullableIntFilter' })
    t.field('userId', { type: 'StringFilter' })
    t.field('image', { type: 'NullableStringFilter' })
    t.field('totalOrder', { type: 'IntFilter' })
    t.field('totalSpent', { type: 'NullableFloatFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('AND', { type: 'CustomerScalarWhereInput', list: true })
    t.field('OR', { type: 'CustomerScalarWhereInput', list: true })
    t.field('NOT', { type: 'CustomerScalarWhereInput', list: true })
  },
})

export const CustomerUpdateManyDataInput = inputObjectType({
  name: 'CustomerUpdateManyDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('address', { type: 'String' })
    t.field('zipcode', { type: 'String' })
    t.field('city', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('firstSeen', { type: 'DateTime' })
    t.field('lastSeen', { type: 'DateTime' })
    t.field('hasOrdered', { type: 'Boolean' })
    t.field('latestPurchase', { type: 'DateTime' })
    t.field('hasNewsLetter', { type: 'Boolean' })
    t.field('nbOrders', { type: 'Int' })
    t.field('image', { type: 'String' })
    t.field('totalOrder', { type: 'Int' })
    t.field('totalSpent', { type: 'Float' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('groups', { type: 'CustomerUpdategroupsInput' })
  },
})

export const CustomerUpdateManyWithWhereNestedInput = inputObjectType({
  name: 'CustomerUpdateManyWithWhereNestedInput',
  definition(t) {
    t.field('where', { type: 'CustomerScalarWhereInput', nullable: false })
    t.field('data', { type: 'CustomerUpdateManyDataInput', nullable: false })
  },
})

export const CustomerUpsertWithWhereUniqueWithoutUserInput = inputObjectType({
  name: 'CustomerUpsertWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.field('where', { type: 'CustomerWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'CustomerUpdateWithoutUserDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CustomerCreateWithoutUserInput',
      nullable: false,
    })
  },
})

export const CustomerUpdateManyWithoutUserInput = inputObjectType({
  name: 'CustomerUpdateManyWithoutUserInput',
  definition(t) {
    t.field('create', { type: 'CustomerCreateWithoutUserInput', list: true })
    t.field('connect', { type: 'CustomerWhereUniqueInput', list: true })
    t.field('set', { type: 'CustomerWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'CustomerWhereUniqueInput', list: true })
    t.field('delete', { type: 'CustomerWhereUniqueInput', list: true })
    t.field('update', {
      type: 'CustomerUpdateWithWhereUniqueWithoutUserInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'CustomerUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'CustomerScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'CustomerUpsertWithWhereUniqueWithoutUserInput',
      list: true,
    })
  },
})

export const UserUpdateWithoutStaffsDataInput = inputObjectType({
  name: 'UserUpdateWithoutStaffsDataInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('email', { type: 'String' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('token', { type: 'String' })
    t.field('googleId', { type: 'String' })
    t.field('walletId', { type: 'String' })
    t.field('income', { type: 'Float' })
    t.field('username', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('imagePublicId', { type: 'String' })
    t.field('coverImage', { type: 'String' })
    t.field('coverImagePublicId', { type: 'String' })
    t.field('isOnline', { type: 'Boolean' })
    t.field('companies', { type: 'CompanyUpdateManyWithoutOwnerInput' })
    t.field('platforms', { type: 'PlatformUpdateManyWithoutOwnerInput' })
    t.field('addresses', { type: 'AddressUpdateManyWithoutUserInput' })
    t.field('cards', { type: 'CardUpdateManyWithoutUserInput' })
    t.field('contacts', { type: 'ContactUpdateManyWithoutUserInput' })
    t.field('customers', { type: 'CustomerUpdateManyWithoutUserInput' })
  },
})

export const UserUpsertWithoutStaffsInput = inputObjectType({
  name: 'UserUpsertWithoutStaffsInput',
  definition(t) {
    t.field('update', {
      type: 'UserUpdateWithoutStaffsDataInput',
      nullable: false,
    })
    t.field('create', { type: 'UserCreateWithoutStaffsInput', nullable: false })
  },
})

export const UserUpdateOneRequiredWithoutStaffsInput = inputObjectType({
  name: 'UserUpdateOneRequiredWithoutStaffsInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutStaffsInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUpdateWithoutStaffsDataInput' })
    t.field('upsert', { type: 'UserUpsertWithoutStaffsInput' })
  },
})

export const StaffUpdateWithoutContactDataInput = inputObjectType({
  name: 'StaffUpdateWithoutContactDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('role', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutStaffsInput' })
    t.field('company', { type: 'CompanyUpdateOneRequiredWithoutStaffsInput' })
  },
})

export const StaffUpdateWithWhereUniqueWithoutContactInput = inputObjectType({
  name: 'StaffUpdateWithWhereUniqueWithoutContactInput',
  definition(t) {
    t.field('where', { type: 'StaffWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'StaffUpdateWithoutContactDataInput',
      nullable: false,
    })
  },
})

export const StaffUpsertWithWhereUniqueWithoutContactInput = inputObjectType({
  name: 'StaffUpsertWithWhereUniqueWithoutContactInput',
  definition(t) {
    t.field('where', { type: 'StaffWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'StaffUpdateWithoutContactDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'StaffCreateWithoutContactInput',
      nullable: false,
    })
  },
})

export const StaffUpdateManyWithoutContactInput = inputObjectType({
  name: 'StaffUpdateManyWithoutContactInput',
  definition(t) {
    t.field('create', { type: 'StaffCreateWithoutContactInput', list: true })
    t.field('connect', { type: 'StaffWhereUniqueInput', list: true })
    t.field('set', { type: 'StaffWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'StaffWhereUniqueInput', list: true })
    t.field('delete', { type: 'StaffWhereUniqueInput', list: true })
    t.field('update', {
      type: 'StaffUpdateWithWhereUniqueWithoutContactInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'StaffUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'StaffScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'StaffUpsertWithWhereUniqueWithoutContactInput',
      list: true,
    })
  },
})

export const ContactUpdateWithoutOrdersDataInput = inputObjectType({
  name: 'ContactUpdateWithoutOrdersDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('number', { type: 'String' })
    t.field('companyId', { type: 'Int' })
    t.field('company', { type: 'CompanyUpdateOneWithoutContactInput' })
    t.field('user', { type: 'UserUpdateOneWithoutContactsInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutContactInput' })
  },
})

export const ContactUpsertWithoutOrdersInput = inputObjectType({
  name: 'ContactUpsertWithoutOrdersInput',
  definition(t) {
    t.field('update', {
      type: 'ContactUpdateWithoutOrdersDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'ContactCreateWithoutOrdersInput',
      nullable: false,
    })
  },
})

export const ContactUpdateOneWithoutOrdersInput = inputObjectType({
  name: 'ContactUpdateOneWithoutOrdersInput',
  definition(t) {
    t.field('create', { type: 'ContactCreateWithoutOrdersInput' })
    t.field('connect', { type: 'ContactWhereUniqueInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('update', { type: 'ContactUpdateWithoutOrdersDataInput' })
    t.field('upsert', { type: 'ContactUpsertWithoutOrdersInput' })
  },
})

export const OrderUpdateWithoutCompanyDataInput = inputObjectType({
  name: 'OrderUpdateWithoutCompanyDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('reference', { type: 'String' })
    t.field('subtotal', { type: 'Float' })
    t.field('deliveryFees', { type: 'Float' })
    t.field('taxRate', { type: 'Float' })
    t.field('taxes', { type: 'Float' })
    t.field('total', { type: 'Float' })
    t.field('status', { type: 'String' })
    t.field('returned', { type: 'Boolean' })
    t.field('deliveryTime', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('paymentMethod', { type: 'String' })
    t.field('customer', { type: 'CustomerUpdateOneWithoutOrdersInput' })
    t.field('invoice', { type: 'InvoiceUpdateManyWithoutOrderInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutOrderInput' })
    t.field('orderItems', { type: 'OrderItemUpdateManyWithoutOrderInput' })
    t.field('deliveryAdress', {
      type: 'AddressUpdateOneRequiredWithoutOrdersInput',
    })
    t.field('contact', { type: 'ContactUpdateOneWithoutOrdersInput' })
  },
})

export const OrderUpdateWithWhereUniqueWithoutCompanyInput = inputObjectType({
  name: 'OrderUpdateWithWhereUniqueWithoutCompanyInput',
  definition(t) {
    t.field('where', { type: 'OrderWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'OrderUpdateWithoutCompanyDataInput',
      nullable: false,
    })
  },
})

export const OrderUpsertWithWhereUniqueWithoutCompanyInput = inputObjectType({
  name: 'OrderUpsertWithWhereUniqueWithoutCompanyInput',
  definition(t) {
    t.field('where', { type: 'OrderWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'OrderUpdateWithoutCompanyDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'OrderCreateWithoutCompanyInput',
      nullable: false,
    })
  },
})

export const OrderUpdateManyWithoutCompanyInput = inputObjectType({
  name: 'OrderUpdateManyWithoutCompanyInput',
  definition(t) {
    t.field('create', { type: 'OrderCreateWithoutCompanyInput', list: true })
    t.field('connect', { type: 'OrderWhereUniqueInput', list: true })
    t.field('set', { type: 'OrderWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'OrderWhereUniqueInput', list: true })
    t.field('delete', { type: 'OrderWhereUniqueInput', list: true })
    t.field('update', {
      type: 'OrderUpdateWithWhereUniqueWithoutCompanyInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'OrderUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'OrderScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'OrderUpsertWithWhereUniqueWithoutCompanyInput',
      list: true,
    })
  },
})

export const CompanyUpdateWithoutContactDataInput = inputObjectType({
  name: 'CompanyUpdateWithoutContactDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('slug', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String' })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressUpdateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformUpdateOneRequiredWithoutCompaniesInput',
    })
    t.field('products', { type: 'ProductUpdateManyWithoutCompanyInput' })
    t.field('customers', { type: 'CustomerUpdateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserUpdateOneWithoutCompaniesInput' })
    t.field('invoices', { type: 'InvoiceUpdateManyWithoutCompanyInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailUpdateOneRequiredWithoutCompanyInput',
    })
    t.field('categories', { type: 'CategoryUpdateManyWithoutCompaniesInput' })
  },
})

export const CompanyUpsertWithoutContactInput = inputObjectType({
  name: 'CompanyUpsertWithoutContactInput',
  definition(t) {
    t.field('update', {
      type: 'CompanyUpdateWithoutContactDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CompanyCreateWithoutContactInput',
      nullable: false,
    })
  },
})

export const CompanyUpdateOneWithoutContactInput = inputObjectType({
  name: 'CompanyUpdateOneWithoutContactInput',
  definition(t) {
    t.field('create', { type: 'CompanyCreateWithoutContactInput' })
    t.field('connect', { type: 'CompanyWhereUniqueInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('update', { type: 'CompanyUpdateWithoutContactDataInput' })
    t.field('upsert', { type: 'CompanyUpsertWithoutContactInput' })
  },
})

export const ContactUpdateWithoutUserDataInput = inputObjectType({
  name: 'ContactUpdateWithoutUserDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('number', { type: 'String' })
    t.field('companyId', { type: 'Int' })
    t.field('company', { type: 'CompanyUpdateOneWithoutContactInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutContactInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutContactInput' })
  },
})

export const ContactUpdateWithWhereUniqueWithoutUserInput = inputObjectType({
  name: 'ContactUpdateWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.field('where', { type: 'ContactWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'ContactUpdateWithoutUserDataInput',
      nullable: false,
    })
  },
})

export const ContactScalarWhereInput = inputObjectType({
  name: 'ContactScalarWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('type', { type: 'NullableStringFilter' })
    t.field('number', { type: 'StringFilter' })
    t.field('companyId', { type: 'NullableIntFilter' })
    t.field('userId', { type: 'NullableStringFilter' })
    t.field('orders', { type: 'OrderFilter' })
    t.field('staffs', { type: 'StaffFilter' })
    t.field('AND', { type: 'ContactScalarWhereInput', list: true })
    t.field('OR', { type: 'ContactScalarWhereInput', list: true })
    t.field('NOT', { type: 'ContactScalarWhereInput', list: true })
  },
})

export const ContactUpdateManyDataInput = inputObjectType({
  name: 'ContactUpdateManyDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('number', { type: 'String' })
    t.field('companyId', { type: 'Int' })
  },
})

export const ContactUpdateManyWithWhereNestedInput = inputObjectType({
  name: 'ContactUpdateManyWithWhereNestedInput',
  definition(t) {
    t.field('where', { type: 'ContactScalarWhereInput', nullable: false })
    t.field('data', { type: 'ContactUpdateManyDataInput', nullable: false })
  },
})

export const ContactUpsertWithWhereUniqueWithoutUserInput = inputObjectType({
  name: 'ContactUpsertWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.field('where', { type: 'ContactWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'ContactUpdateWithoutUserDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'ContactCreateWithoutUserInput',
      nullable: false,
    })
  },
})

export const ContactUpdateManyWithoutUserInput = inputObjectType({
  name: 'ContactUpdateManyWithoutUserInput',
  definition(t) {
    t.field('create', { type: 'ContactCreateWithoutUserInput', list: true })
    t.field('connect', { type: 'ContactWhereUniqueInput', list: true })
    t.field('set', { type: 'ContactWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'ContactWhereUniqueInput', list: true })
    t.field('delete', { type: 'ContactWhereUniqueInput', list: true })
    t.field('update', {
      type: 'ContactUpdateWithWhereUniqueWithoutUserInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'ContactUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'ContactScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'ContactUpsertWithWhereUniqueWithoutUserInput',
      list: true,
    })
  },
})

export const UserUpdateWithoutCustomersDataInput = inputObjectType({
  name: 'UserUpdateWithoutCustomersDataInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('email', { type: 'String' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('token', { type: 'String' })
    t.field('googleId', { type: 'String' })
    t.field('walletId', { type: 'String' })
    t.field('income', { type: 'Float' })
    t.field('username', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('imagePublicId', { type: 'String' })
    t.field('coverImage', { type: 'String' })
    t.field('coverImagePublicId', { type: 'String' })
    t.field('isOnline', { type: 'Boolean' })
    t.field('companies', { type: 'CompanyUpdateManyWithoutOwnerInput' })
    t.field('platforms', { type: 'PlatformUpdateManyWithoutOwnerInput' })
    t.field('addresses', { type: 'AddressUpdateManyWithoutUserInput' })
    t.field('cards', { type: 'CardUpdateManyWithoutUserInput' })
    t.field('contacts', { type: 'ContactUpdateManyWithoutUserInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutUserInput' })
  },
})

export const UserUpsertWithoutCustomersInput = inputObjectType({
  name: 'UserUpsertWithoutCustomersInput',
  definition(t) {
    t.field('update', {
      type: 'UserUpdateWithoutCustomersDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'UserCreateWithoutCustomersInput',
      nullable: false,
    })
  },
})

export const UserUpdateOneRequiredWithoutCustomersInput = inputObjectType({
  name: 'UserUpdateOneRequiredWithoutCustomersInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutCustomersInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUpdateWithoutCustomersDataInput' })
    t.field('upsert', { type: 'UserUpsertWithoutCustomersInput' })
  },
})

export const CustomerUpdateWithoutCompanyDataInput = inputObjectType({
  name: 'CustomerUpdateWithoutCompanyDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('address', { type: 'String' })
    t.field('zipcode', { type: 'String' })
    t.field('city', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('firstSeen', { type: 'DateTime' })
    t.field('lastSeen', { type: 'DateTime' })
    t.field('hasOrdered', { type: 'Boolean' })
    t.field('latestPurchase', { type: 'DateTime' })
    t.field('hasNewsLetter', { type: 'Boolean' })
    t.field('nbOrders', { type: 'Int' })
    t.field('image', { type: 'String' })
    t.field('totalOrder', { type: 'Int' })
    t.field('totalSpent', { type: 'Float' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('groups', { type: 'CustomerUpdategroupsInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutCustomerInput' })
    t.field('invoices', { type: 'InvoiceUpdateManyWithoutCustomerInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutCustomerInput' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutCustomersInput' })
  },
})

export const CustomerUpdateWithWhereUniqueWithoutCompanyInput = inputObjectType({
  name: 'CustomerUpdateWithWhereUniqueWithoutCompanyInput',
  definition(t) {
    t.field('where', { type: 'CustomerWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'CustomerUpdateWithoutCompanyDataInput',
      nullable: false,
    })
  },
})

export const CustomerUpsertWithWhereUniqueWithoutCompanyInput = inputObjectType({
  name: 'CustomerUpsertWithWhereUniqueWithoutCompanyInput',
  definition(t) {
    t.field('where', { type: 'CustomerWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'CustomerUpdateWithoutCompanyDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CustomerCreateWithoutCompanyInput',
      nullable: false,
    })
  },
})

export const CustomerUpdateManyWithoutCompanyInput = inputObjectType({
  name: 'CustomerUpdateManyWithoutCompanyInput',
  definition(t) {
    t.field('create', { type: 'CustomerCreateWithoutCompanyInput', list: true })
    t.field('connect', { type: 'CustomerWhereUniqueInput', list: true })
    t.field('set', { type: 'CustomerWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'CustomerWhereUniqueInput', list: true })
    t.field('delete', { type: 'CustomerWhereUniqueInput', list: true })
    t.field('update', {
      type: 'CustomerUpdateWithWhereUniqueWithoutCompanyInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'CustomerUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'CustomerScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'CustomerUpsertWithWhereUniqueWithoutCompanyInput',
      list: true,
    })
  },
})

export const CompanyUpdateWithoutOrdersDataInput = inputObjectType({
  name: 'CompanyUpdateWithoutOrdersDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('slug', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String' })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressUpdateOneWithoutCompanyInput' })
    t.field('contact', { type: 'ContactUpdateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformUpdateOneRequiredWithoutCompaniesInput',
    })
    t.field('products', { type: 'ProductUpdateManyWithoutCompanyInput' })
    t.field('customers', { type: 'CustomerUpdateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserUpdateOneWithoutCompaniesInput' })
    t.field('invoices', { type: 'InvoiceUpdateManyWithoutCompanyInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailUpdateOneRequiredWithoutCompanyInput',
    })
    t.field('categories', { type: 'CategoryUpdateManyWithoutCompaniesInput' })
  },
})

export const CompanyUpsertWithoutOrdersInput = inputObjectType({
  name: 'CompanyUpsertWithoutOrdersInput',
  definition(t) {
    t.field('update', {
      type: 'CompanyUpdateWithoutOrdersDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CompanyCreateWithoutOrdersInput',
      nullable: false,
    })
  },
})

export const CompanyUpdateOneWithoutOrdersInput = inputObjectType({
  name: 'CompanyUpdateOneWithoutOrdersInput',
  definition(t) {
    t.field('create', { type: 'CompanyCreateWithoutOrdersInput' })
    t.field('connect', { type: 'CompanyWhereUniqueInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('update', { type: 'CompanyUpdateWithoutOrdersDataInput' })
    t.field('upsert', { type: 'CompanyUpsertWithoutOrdersInput' })
  },
})

export const OrderUpdateWithoutDeliveryAdressDataInput = inputObjectType({
  name: 'OrderUpdateWithoutDeliveryAdressDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('reference', { type: 'String' })
    t.field('subtotal', { type: 'Float' })
    t.field('deliveryFees', { type: 'Float' })
    t.field('taxRate', { type: 'Float' })
    t.field('taxes', { type: 'Float' })
    t.field('total', { type: 'Float' })
    t.field('status', { type: 'String' })
    t.field('returned', { type: 'Boolean' })
    t.field('deliveryTime', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('paymentMethod', { type: 'String' })
    t.field('customer', { type: 'CustomerUpdateOneWithoutOrdersInput' })
    t.field('invoice', { type: 'InvoiceUpdateManyWithoutOrderInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutOrderInput' })
    t.field('orderItems', { type: 'OrderItemUpdateManyWithoutOrderInput' })
    t.field('company', { type: 'CompanyUpdateOneWithoutOrdersInput' })
    t.field('contact', { type: 'ContactUpdateOneWithoutOrdersInput' })
  },
})

export const OrderUpdateWithWhereUniqueWithoutDeliveryAdressInput = inputObjectType({
  name: 'OrderUpdateWithWhereUniqueWithoutDeliveryAdressInput',
  definition(t) {
    t.field('where', { type: 'OrderWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'OrderUpdateWithoutDeliveryAdressDataInput',
      nullable: false,
    })
  },
})

export const OrderUpsertWithWhereUniqueWithoutDeliveryAdressInput = inputObjectType({
  name: 'OrderUpsertWithWhereUniqueWithoutDeliveryAdressInput',
  definition(t) {
    t.field('where', { type: 'OrderWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'OrderUpdateWithoutDeliveryAdressDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'OrderCreateWithoutDeliveryAdressInput',
      nullable: false,
    })
  },
})

export const OrderUpdateManyWithoutDeliveryAdressInput = inputObjectType({
  name: 'OrderUpdateManyWithoutDeliveryAdressInput',
  definition(t) {
    t.field('create', {
      type: 'OrderCreateWithoutDeliveryAdressInput',
      list: true,
    })
    t.field('connect', { type: 'OrderWhereUniqueInput', list: true })
    t.field('set', { type: 'OrderWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'OrderWhereUniqueInput', list: true })
    t.field('delete', { type: 'OrderWhereUniqueInput', list: true })
    t.field('update', {
      type: 'OrderUpdateWithWhereUniqueWithoutDeliveryAdressInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'OrderUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'OrderScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'OrderUpsertWithWhereUniqueWithoutDeliveryAdressInput',
      list: true,
    })
  },
})

export const AddressUpdateWithoutUserDataInput = inputObjectType({
  name: 'AddressUpdateWithoutUserDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('json', { type: 'String' })
    t.field('info', { type: 'String' })
    t.field('companyId', { type: 'Int' })
    t.field('company', { type: 'CompanyUpdateOneWithoutAddressInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutDeliveryAdressInput' })
  },
})

export const AddressUpdateWithWhereUniqueWithoutUserInput = inputObjectType({
  name: 'AddressUpdateWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.field('where', { type: 'AddressWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'AddressUpdateWithoutUserDataInput',
      nullable: false,
    })
  },
})

export const AddressScalarWhereInput = inputObjectType({
  name: 'AddressScalarWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('type', { type: 'StringFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('json', { type: 'NullableStringFilter' })
    t.field('info', { type: 'StringFilter' })
    t.field('companyId', { type: 'NullableIntFilter' })
    t.field('userId', { type: 'NullableStringFilter' })
    t.field('orders', { type: 'OrderFilter' })
    t.field('AND', { type: 'AddressScalarWhereInput', list: true })
    t.field('OR', { type: 'AddressScalarWhereInput', list: true })
    t.field('NOT', { type: 'AddressScalarWhereInput', list: true })
  },
})

export const AddressUpdateManyDataInput = inputObjectType({
  name: 'AddressUpdateManyDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('json', { type: 'String' })
    t.field('info', { type: 'String' })
    t.field('companyId', { type: 'Int' })
  },
})

export const AddressUpdateManyWithWhereNestedInput = inputObjectType({
  name: 'AddressUpdateManyWithWhereNestedInput',
  definition(t) {
    t.field('where', { type: 'AddressScalarWhereInput', nullable: false })
    t.field('data', { type: 'AddressUpdateManyDataInput', nullable: false })
  },
})

export const AddressUpsertWithWhereUniqueWithoutUserInput = inputObjectType({
  name: 'AddressUpsertWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.field('where', { type: 'AddressWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'AddressUpdateWithoutUserDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'AddressCreateWithoutUserInput',
      nullable: false,
    })
  },
})

export const AddressUpdateManyWithoutUserInput = inputObjectType({
  name: 'AddressUpdateManyWithoutUserInput',
  definition(t) {
    t.field('create', { type: 'AddressCreateWithoutUserInput', list: true })
    t.field('connect', { type: 'AddressWhereUniqueInput', list: true })
    t.field('set', { type: 'AddressWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'AddressWhereUniqueInput', list: true })
    t.field('delete', { type: 'AddressWhereUniqueInput', list: true })
    t.field('update', {
      type: 'AddressUpdateWithWhereUniqueWithoutUserInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'AddressUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'AddressScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'AddressUpsertWithWhereUniqueWithoutUserInput',
      list: true,
    })
  },
})

export const UserUpdateWithoutPlatformsDataInput = inputObjectType({
  name: 'UserUpdateWithoutPlatformsDataInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('email', { type: 'String' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('token', { type: 'String' })
    t.field('googleId', { type: 'String' })
    t.field('walletId', { type: 'String' })
    t.field('income', { type: 'Float' })
    t.field('username', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('imagePublicId', { type: 'String' })
    t.field('coverImage', { type: 'String' })
    t.field('coverImagePublicId', { type: 'String' })
    t.field('isOnline', { type: 'Boolean' })
    t.field('companies', { type: 'CompanyUpdateManyWithoutOwnerInput' })
    t.field('addresses', { type: 'AddressUpdateManyWithoutUserInput' })
    t.field('cards', { type: 'CardUpdateManyWithoutUserInput' })
    t.field('contacts', { type: 'ContactUpdateManyWithoutUserInput' })
    t.field('customers', { type: 'CustomerUpdateManyWithoutUserInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutUserInput' })
  },
})

export const UserUpsertWithoutPlatformsInput = inputObjectType({
  name: 'UserUpsertWithoutPlatformsInput',
  definition(t) {
    t.field('update', {
      type: 'UserUpdateWithoutPlatformsDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'UserCreateWithoutPlatformsInput',
      nullable: false,
    })
  },
})

export const UserUpdateOneRequiredWithoutPlatformsInput = inputObjectType({
  name: 'UserUpdateOneRequiredWithoutPlatformsInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutPlatformsInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUpdateWithoutPlatformsDataInput' })
    t.field('upsert', { type: 'UserUpsertWithoutPlatformsInput' })
  },
})

export const CategoryUpdateWithoutPlatformDataInput = inputObjectType({
  name: 'CategoryUpdateWithoutPlatformDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('slug', { type: 'String' })
    t.field('type', { type: 'String' })
    t.field('icon', { type: 'String' })
    t.field('products', { type: 'ProductUpdateManyWithoutCategoriesInput' })
    t.field('parent', { type: 'CategoryUpdateOneWithoutChildrenInput' })
    t.field('children', { type: 'CategoryUpdateManyWithoutParentInput' })
    t.field('companies', { type: 'CompanyUpdateManyWithoutCategoriesInput' })
  },
})

export const CategoryUpdateWithWhereUniqueWithoutPlatformInput = inputObjectType({
  name: 'CategoryUpdateWithWhereUniqueWithoutPlatformInput',
  definition(t) {
    t.field('where', { type: 'CategoryWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'CategoryUpdateWithoutPlatformDataInput',
      nullable: false,
    })
  },
})

export const CategoryUpsertWithWhereUniqueWithoutPlatformInput = inputObjectType({
  name: 'CategoryUpsertWithWhereUniqueWithoutPlatformInput',
  definition(t) {
    t.field('where', { type: 'CategoryWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'CategoryUpdateWithoutPlatformDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CategoryCreateWithoutPlatformInput',
      nullable: false,
    })
  },
})

export const CategoryUpdateManyWithoutPlatformInput = inputObjectType({
  name: 'CategoryUpdateManyWithoutPlatformInput',
  definition(t) {
    t.field('create', {
      type: 'CategoryCreateWithoutPlatformInput',
      list: true,
    })
    t.field('connect', { type: 'CategoryWhereUniqueInput', list: true })
    t.field('set', { type: 'CategoryWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'CategoryWhereUniqueInput', list: true })
    t.field('delete', { type: 'CategoryWhereUniqueInput', list: true })
    t.field('update', {
      type: 'CategoryUpdateWithWhereUniqueWithoutPlatformInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'CategoryUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'CategoryScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'CategoryUpsertWithWhereUniqueWithoutPlatformInput',
      list: true,
    })
  },
})

export const PlatformUpdateWithoutCompaniesDataInput = inputObjectType({
  name: 'PlatformUpdateWithoutCompaniesDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('bannerImg', { type: 'String' })
    t.field('slug', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('platformType', { type: 'String' })
    t.field('taxRate', { type: 'Float' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('owner', { type: 'UserUpdateOneRequiredWithoutPlatformsInput' })
    t.field('categories', { type: 'CategoryUpdateManyWithoutPlatformInput' })
    t.field('country', { type: 'CountryUpdateOneWithoutPlatformsInput' })
  },
})

export const PlatformUpsertWithoutCompaniesInput = inputObjectType({
  name: 'PlatformUpsertWithoutCompaniesInput',
  definition(t) {
    t.field('update', {
      type: 'PlatformUpdateWithoutCompaniesDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'PlatformCreateWithoutCompaniesInput',
      nullable: false,
    })
  },
})

export const PlatformUpdateOneRequiredWithoutCompaniesInput = inputObjectType({
  name: 'PlatformUpdateOneRequiredWithoutCompaniesInput',
  definition(t) {
    t.field('create', { type: 'PlatformCreateWithoutCompaniesInput' })
    t.field('connect', { type: 'PlatformWhereUniqueInput' })
    t.field('update', { type: 'PlatformUpdateWithoutCompaniesDataInput' })
    t.field('upsert', { type: 'PlatformUpsertWithoutCompaniesInput' })
  },
})

export const CompanyUpdateWithoutProductsDataInput = inputObjectType({
  name: 'CompanyUpdateWithoutProductsDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('slug', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String' })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressUpdateOneWithoutCompanyInput' })
    t.field('contact', { type: 'ContactUpdateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformUpdateOneRequiredWithoutCompaniesInput',
    })
    t.field('customers', { type: 'CustomerUpdateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserUpdateOneWithoutCompaniesInput' })
    t.field('invoices', { type: 'InvoiceUpdateManyWithoutCompanyInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailUpdateOneRequiredWithoutCompanyInput',
    })
    t.field('categories', { type: 'CategoryUpdateManyWithoutCompaniesInput' })
  },
})

export const CompanyUpsertWithoutProductsInput = inputObjectType({
  name: 'CompanyUpsertWithoutProductsInput',
  definition(t) {
    t.field('update', {
      type: 'CompanyUpdateWithoutProductsDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CompanyCreateWithoutProductsInput',
      nullable: false,
    })
  },
})

export const CompanyUpdateOneWithoutProductsInput = inputObjectType({
  name: 'CompanyUpdateOneWithoutProductsInput',
  definition(t) {
    t.field('create', { type: 'CompanyCreateWithoutProductsInput' })
    t.field('connect', { type: 'CompanyWhereUniqueInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('update', { type: 'CompanyUpdateWithoutProductsDataInput' })
    t.field('upsert', { type: 'CompanyUpsertWithoutProductsInput' })
  },
})

export const CategoryUpdateWithoutProductsDataInput = inputObjectType({
  name: 'CategoryUpdateWithoutProductsDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('slug', { type: 'String' })
    t.field('type', { type: 'String' })
    t.field('icon', { type: 'String' })
    t.field('platform', {
      type: 'PlatformUpdateOneRequiredWithoutCategoriesInput',
    })
    t.field('parent', { type: 'CategoryUpdateOneWithoutChildrenInput' })
    t.field('children', { type: 'CategoryUpdateManyWithoutParentInput' })
    t.field('companies', { type: 'CompanyUpdateManyWithoutCategoriesInput' })
  },
})

export const CategoryUpdateWithWhereUniqueWithoutProductsInput = inputObjectType({
  name: 'CategoryUpdateWithWhereUniqueWithoutProductsInput',
  definition(t) {
    t.field('where', { type: 'CategoryWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'CategoryUpdateWithoutProductsDataInput',
      nullable: false,
    })
  },
})

export const CategoryUpsertWithWhereUniqueWithoutProductsInput = inputObjectType({
  name: 'CategoryUpsertWithWhereUniqueWithoutProductsInput',
  definition(t) {
    t.field('where', { type: 'CategoryWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'CategoryUpdateWithoutProductsDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CategoryCreateWithoutProductsInput',
      nullable: false,
    })
  },
})

export const CategoryUpdateManyWithoutProductsInput = inputObjectType({
  name: 'CategoryUpdateManyWithoutProductsInput',
  definition(t) {
    t.field('create', {
      type: 'CategoryCreateWithoutProductsInput',
      list: true,
    })
    t.field('connect', { type: 'CategoryWhereUniqueInput', list: true })
    t.field('set', { type: 'CategoryWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'CategoryWhereUniqueInput', list: true })
    t.field('delete', { type: 'CategoryWhereUniqueInput', list: true })
    t.field('update', {
      type: 'CategoryUpdateWithWhereUniqueWithoutProductsInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'CategoryUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'CategoryScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'CategoryUpsertWithWhereUniqueWithoutProductsInput',
      list: true,
    })
  },
})

export const ProductUpdateWithoutOrderItemsDataInput = inputObjectType({
  name: 'ProductUpdateWithoutOrderItemsDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('width', { type: 'Float' })
    t.field('height', { type: 'Float' })
    t.field('price', { type: 'Float' })
    t.field('thumbnail', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('stock', { type: 'Int' })
    t.field('sku', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('slug', { type: 'String' })
    t.field('salePrice', { type: 'Float' })
    t.field('discountInPercent', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('unit', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('gallery', { type: 'ProductUpdategalleryInput' })
    t.field('review', { type: 'ReviewUpdateManyWithoutProductInput' })
    t.field('company', { type: 'CompanyUpdateOneWithoutProductsInput' })
    t.field('categories', { type: 'CategoryUpdateManyWithoutProductsInput' })
  },
})

export const ProductUpsertWithoutOrderItemsInput = inputObjectType({
  name: 'ProductUpsertWithoutOrderItemsInput',
  definition(t) {
    t.field('update', {
      type: 'ProductUpdateWithoutOrderItemsDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'ProductCreateWithoutOrderItemsInput',
      nullable: false,
    })
  },
})

export const ProductUpdateOneRequiredWithoutOrderItemsInput = inputObjectType({
  name: 'ProductUpdateOneRequiredWithoutOrderItemsInput',
  definition(t) {
    t.field('create', { type: 'ProductCreateWithoutOrderItemsInput' })
    t.field('connect', { type: 'ProductWhereUniqueInput' })
    t.field('update', { type: 'ProductUpdateWithoutOrderItemsDataInput' })
    t.field('upsert', { type: 'ProductUpsertWithoutOrderItemsInput' })
  },
})

export const OrderItemUpdateWithoutOrderDataInput = inputObjectType({
  name: 'OrderItemUpdateWithoutOrderDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('quantity', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('weight', { type: 'String' })
    t.field('price', { type: 'Float' })
    t.field('image', { type: 'String' })
    t.field('product', {
      type: 'ProductUpdateOneRequiredWithoutOrderItemsInput',
    })
  },
})

export const OrderItemUpdateWithWhereUniqueWithoutOrderInput = inputObjectType({
  name: 'OrderItemUpdateWithWhereUniqueWithoutOrderInput',
  definition(t) {
    t.field('where', { type: 'OrderItemWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'OrderItemUpdateWithoutOrderDataInput',
      nullable: false,
    })
  },
})

export const OrderItemScalarWhereInput = inputObjectType({
  name: 'OrderItemScalarWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('orderId', { type: 'IntFilter' })
    t.field('quantity', { type: 'IntFilter' })
    t.field('name', { type: 'NullableStringFilter' })
    t.field('weight', { type: 'NullableStringFilter' })
    t.field('price', { type: 'FloatFilter' })
    t.field('productId', { type: 'IntFilter' })
    t.field('image', { type: 'NullableStringFilter' })
    t.field('AND', { type: 'OrderItemScalarWhereInput', list: true })
    t.field('OR', { type: 'OrderItemScalarWhereInput', list: true })
    t.field('NOT', { type: 'OrderItemScalarWhereInput', list: true })
  },
})

export const OrderItemUpdateManyDataInput = inputObjectType({
  name: 'OrderItemUpdateManyDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('quantity', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('weight', { type: 'String' })
    t.field('price', { type: 'Float' })
    t.field('image', { type: 'String' })
  },
})

export const OrderItemUpdateManyWithWhereNestedInput = inputObjectType({
  name: 'OrderItemUpdateManyWithWhereNestedInput',
  definition(t) {
    t.field('where', { type: 'OrderItemScalarWhereInput', nullable: false })
    t.field('data', { type: 'OrderItemUpdateManyDataInput', nullable: false })
  },
})

export const OrderItemUpsertWithWhereUniqueWithoutOrderInput = inputObjectType({
  name: 'OrderItemUpsertWithWhereUniqueWithoutOrderInput',
  definition(t) {
    t.field('where', { type: 'OrderItemWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'OrderItemUpdateWithoutOrderDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'OrderItemCreateWithoutOrderInput',
      nullable: false,
    })
  },
})

export const OrderItemUpdateManyWithoutOrderInput = inputObjectType({
  name: 'OrderItemUpdateManyWithoutOrderInput',
  definition(t) {
    t.field('create', { type: 'OrderItemCreateWithoutOrderInput', list: true })
    t.field('connect', { type: 'OrderItemWhereUniqueInput', list: true })
    t.field('set', { type: 'OrderItemWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'OrderItemWhereUniqueInput', list: true })
    t.field('delete', { type: 'OrderItemWhereUniqueInput', list: true })
    t.field('update', {
      type: 'OrderItemUpdateWithWhereUniqueWithoutOrderInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'OrderItemUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'OrderItemScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'OrderItemUpsertWithWhereUniqueWithoutOrderInput',
      list: true,
    })
  },
})

export const OrderUpdateWithoutInvoiceDataInput = inputObjectType({
  name: 'OrderUpdateWithoutInvoiceDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('reference', { type: 'String' })
    t.field('subtotal', { type: 'Float' })
    t.field('deliveryFees', { type: 'Float' })
    t.field('taxRate', { type: 'Float' })
    t.field('taxes', { type: 'Float' })
    t.field('total', { type: 'Float' })
    t.field('status', { type: 'String' })
    t.field('returned', { type: 'Boolean' })
    t.field('deliveryTime', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('paymentMethod', { type: 'String' })
    t.field('customer', { type: 'CustomerUpdateOneWithoutOrdersInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutOrderInput' })
    t.field('orderItems', { type: 'OrderItemUpdateManyWithoutOrderInput' })
    t.field('company', { type: 'CompanyUpdateOneWithoutOrdersInput' })
    t.field('deliveryAdress', {
      type: 'AddressUpdateOneRequiredWithoutOrdersInput',
    })
    t.field('contact', { type: 'ContactUpdateOneWithoutOrdersInput' })
  },
})

export const OrderUpsertWithoutInvoiceInput = inputObjectType({
  name: 'OrderUpsertWithoutInvoiceInput',
  definition(t) {
    t.field('update', {
      type: 'OrderUpdateWithoutInvoiceDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'OrderCreateWithoutInvoiceInput',
      nullable: false,
    })
  },
})

export const OrderUpdateOneRequiredWithoutInvoiceInput = inputObjectType({
  name: 'OrderUpdateOneRequiredWithoutInvoiceInput',
  definition(t) {
    t.field('create', { type: 'OrderCreateWithoutInvoiceInput' })
    t.field('connect', { type: 'OrderWhereUniqueInput' })
    t.field('update', { type: 'OrderUpdateWithoutInvoiceDataInput' })
    t.field('upsert', { type: 'OrderUpsertWithoutInvoiceInput' })
  },
})

export const CompanyUpdateWithoutInvoicesDataInput = inputObjectType({
  name: 'CompanyUpdateWithoutInvoicesDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('slug', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String' })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressUpdateOneWithoutCompanyInput' })
    t.field('contact', { type: 'ContactUpdateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformUpdateOneRequiredWithoutCompaniesInput',
    })
    t.field('products', { type: 'ProductUpdateManyWithoutCompanyInput' })
    t.field('customers', { type: 'CustomerUpdateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserUpdateOneWithoutCompaniesInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailUpdateOneRequiredWithoutCompanyInput',
    })
    t.field('categories', { type: 'CategoryUpdateManyWithoutCompaniesInput' })
  },
})

export const CompanyUpsertWithoutInvoicesInput = inputObjectType({
  name: 'CompanyUpsertWithoutInvoicesInput',
  definition(t) {
    t.field('update', {
      type: 'CompanyUpdateWithoutInvoicesDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CompanyCreateWithoutInvoicesInput',
      nullable: false,
    })
  },
})

export const CompanyUpdateOneWithoutInvoicesInput = inputObjectType({
  name: 'CompanyUpdateOneWithoutInvoicesInput',
  definition(t) {
    t.field('create', { type: 'CompanyCreateWithoutInvoicesInput' })
    t.field('connect', { type: 'CompanyWhereUniqueInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('update', { type: 'CompanyUpdateWithoutInvoicesDataInput' })
    t.field('upsert', { type: 'CompanyUpsertWithoutInvoicesInput' })
  },
})

export const InvoiceUpdateWithoutCustomerDataInput = inputObjectType({
  name: 'InvoiceUpdateWithoutCustomerDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('subtotal', { type: 'Float' })
    t.field('deliveryFees', { type: 'Float' })
    t.field('taxRate', { type: 'Float' })
    t.field('taxes', { type: 'Float' })
    t.field('total', { type: 'Float' })
    t.field('order', { type: 'OrderUpdateOneRequiredWithoutInvoiceInput' })
    t.field('company', { type: 'CompanyUpdateOneWithoutInvoicesInput' })
  },
})

export const InvoiceUpdateWithWhereUniqueWithoutCustomerInput = inputObjectType({
  name: 'InvoiceUpdateWithWhereUniqueWithoutCustomerInput',
  definition(t) {
    t.field('where', { type: 'InvoiceWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'InvoiceUpdateWithoutCustomerDataInput',
      nullable: false,
    })
  },
})

export const InvoiceUpsertWithWhereUniqueWithoutCustomerInput = inputObjectType({
  name: 'InvoiceUpsertWithWhereUniqueWithoutCustomerInput',
  definition(t) {
    t.field('where', { type: 'InvoiceWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'InvoiceUpdateWithoutCustomerDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'InvoiceCreateWithoutCustomerInput',
      nullable: false,
    })
  },
})

export const InvoiceUpdateManyWithoutCustomerInput = inputObjectType({
  name: 'InvoiceUpdateManyWithoutCustomerInput',
  definition(t) {
    t.field('create', { type: 'InvoiceCreateWithoutCustomerInput', list: true })
    t.field('connect', { type: 'InvoiceWhereUniqueInput', list: true })
    t.field('set', { type: 'InvoiceWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'InvoiceWhereUniqueInput', list: true })
    t.field('delete', { type: 'InvoiceWhereUniqueInput', list: true })
    t.field('update', {
      type: 'InvoiceUpdateWithWhereUniqueWithoutCustomerInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'InvoiceUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'InvoiceScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'InvoiceUpsertWithWhereUniqueWithoutCustomerInput',
      list: true,
    })
  },
})

export const CustomerUpdateWithoutReviewsDataInput = inputObjectType({
  name: 'CustomerUpdateWithoutReviewsDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('address', { type: 'String' })
    t.field('zipcode', { type: 'String' })
    t.field('city', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('firstSeen', { type: 'DateTime' })
    t.field('lastSeen', { type: 'DateTime' })
    t.field('hasOrdered', { type: 'Boolean' })
    t.field('latestPurchase', { type: 'DateTime' })
    t.field('hasNewsLetter', { type: 'Boolean' })
    t.field('nbOrders', { type: 'Int' })
    t.field('image', { type: 'String' })
    t.field('totalOrder', { type: 'Int' })
    t.field('totalSpent', { type: 'Float' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('groups', { type: 'CustomerUpdategroupsInput' })
    t.field('invoices', { type: 'InvoiceUpdateManyWithoutCustomerInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutCustomerInput' })
    t.field('company', { type: 'CompanyUpdateOneWithoutCustomersInput' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutCustomersInput' })
  },
})

export const CustomerUpsertWithoutReviewsInput = inputObjectType({
  name: 'CustomerUpsertWithoutReviewsInput',
  definition(t) {
    t.field('update', {
      type: 'CustomerUpdateWithoutReviewsDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CustomerCreateWithoutReviewsInput',
      nullable: false,
    })
  },
})

export const CustomerUpdateOneWithoutReviewsInput = inputObjectType({
  name: 'CustomerUpdateOneWithoutReviewsInput',
  definition(t) {
    t.field('create', { type: 'CustomerCreateWithoutReviewsInput' })
    t.field('connect', { type: 'CustomerWhereUniqueInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('update', { type: 'CustomerUpdateWithoutReviewsDataInput' })
    t.field('upsert', { type: 'CustomerUpsertWithoutReviewsInput' })
  },
})

export const CompanyUpdateWithoutReviewsDataInput = inputObjectType({
  name: 'CompanyUpdateWithoutReviewsDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('slug', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String' })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressUpdateOneWithoutCompanyInput' })
    t.field('contact', { type: 'ContactUpdateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformUpdateOneRequiredWithoutCompaniesInput',
    })
    t.field('products', { type: 'ProductUpdateManyWithoutCompanyInput' })
    t.field('customers', { type: 'CustomerUpdateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserUpdateOneWithoutCompaniesInput' })
    t.field('invoices', { type: 'InvoiceUpdateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailUpdateOneRequiredWithoutCompanyInput',
    })
    t.field('categories', { type: 'CategoryUpdateManyWithoutCompaniesInput' })
  },
})

export const CompanyUpsertWithoutReviewsInput = inputObjectType({
  name: 'CompanyUpsertWithoutReviewsInput',
  definition(t) {
    t.field('update', {
      type: 'CompanyUpdateWithoutReviewsDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CompanyCreateWithoutReviewsInput',
      nullable: false,
    })
  },
})

export const CompanyUpdateOneWithoutReviewsInput = inputObjectType({
  name: 'CompanyUpdateOneWithoutReviewsInput',
  definition(t) {
    t.field('create', { type: 'CompanyCreateWithoutReviewsInput' })
    t.field('connect', { type: 'CompanyWhereUniqueInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('update', { type: 'CompanyUpdateWithoutReviewsDataInput' })
    t.field('upsert', { type: 'CompanyUpsertWithoutReviewsInput' })
  },
})

export const ReviewUpdateWithoutOrderDataInput = inputObjectType({
  name: 'ReviewUpdateWithoutOrderDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('status', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.field('comment', { type: 'String' })
    t.field('product', { type: 'ProductUpdateOneWithoutReviewInput' })
    t.field('customer', { type: 'CustomerUpdateOneWithoutReviewsInput' })
    t.field('company', { type: 'CompanyUpdateOneWithoutReviewsInput' })
  },
})

export const ReviewUpdateWithWhereUniqueWithoutOrderInput = inputObjectType({
  name: 'ReviewUpdateWithWhereUniqueWithoutOrderInput',
  definition(t) {
    t.field('where', { type: 'ReviewWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'ReviewUpdateWithoutOrderDataInput',
      nullable: false,
    })
  },
})

export const ReviewUpsertWithWhereUniqueWithoutOrderInput = inputObjectType({
  name: 'ReviewUpsertWithWhereUniqueWithoutOrderInput',
  definition(t) {
    t.field('where', { type: 'ReviewWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'ReviewUpdateWithoutOrderDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'ReviewCreateWithoutOrderInput',
      nullable: false,
    })
  },
})

export const ReviewUpdateManyWithoutOrderInput = inputObjectType({
  name: 'ReviewUpdateManyWithoutOrderInput',
  definition(t) {
    t.field('create', { type: 'ReviewCreateWithoutOrderInput', list: true })
    t.field('connect', { type: 'ReviewWhereUniqueInput', list: true })
    t.field('set', { type: 'ReviewWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'ReviewWhereUniqueInput', list: true })
    t.field('delete', { type: 'ReviewWhereUniqueInput', list: true })
    t.field('update', {
      type: 'ReviewUpdateWithWhereUniqueWithoutOrderInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'ReviewUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'ReviewScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'ReviewUpsertWithWhereUniqueWithoutOrderInput',
      list: true,
    })
  },
})

export const OrderUpdateWithoutCustomerDataInput = inputObjectType({
  name: 'OrderUpdateWithoutCustomerDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('reference', { type: 'String' })
    t.field('subtotal', { type: 'Float' })
    t.field('deliveryFees', { type: 'Float' })
    t.field('taxRate', { type: 'Float' })
    t.field('taxes', { type: 'Float' })
    t.field('total', { type: 'Float' })
    t.field('status', { type: 'String' })
    t.field('returned', { type: 'Boolean' })
    t.field('deliveryTime', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('paymentMethod', { type: 'String' })
    t.field('invoice', { type: 'InvoiceUpdateManyWithoutOrderInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutOrderInput' })
    t.field('orderItems', { type: 'OrderItemUpdateManyWithoutOrderInput' })
    t.field('company', { type: 'CompanyUpdateOneWithoutOrdersInput' })
    t.field('deliveryAdress', {
      type: 'AddressUpdateOneRequiredWithoutOrdersInput',
    })
    t.field('contact', { type: 'ContactUpdateOneWithoutOrdersInput' })
  },
})

export const OrderUpdateWithWhereUniqueWithoutCustomerInput = inputObjectType({
  name: 'OrderUpdateWithWhereUniqueWithoutCustomerInput',
  definition(t) {
    t.field('where', { type: 'OrderWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'OrderUpdateWithoutCustomerDataInput',
      nullable: false,
    })
  },
})

export const OrderUpsertWithWhereUniqueWithoutCustomerInput = inputObjectType({
  name: 'OrderUpsertWithWhereUniqueWithoutCustomerInput',
  definition(t) {
    t.field('where', { type: 'OrderWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'OrderUpdateWithoutCustomerDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'OrderCreateWithoutCustomerInput',
      nullable: false,
    })
  },
})

export const OrderUpdateManyWithoutCustomerInput = inputObjectType({
  name: 'OrderUpdateManyWithoutCustomerInput',
  definition(t) {
    t.field('create', { type: 'OrderCreateWithoutCustomerInput', list: true })
    t.field('connect', { type: 'OrderWhereUniqueInput', list: true })
    t.field('set', { type: 'OrderWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'OrderWhereUniqueInput', list: true })
    t.field('delete', { type: 'OrderWhereUniqueInput', list: true })
    t.field('update', {
      type: 'OrderUpdateWithWhereUniqueWithoutCustomerInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'OrderUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'OrderScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'OrderUpsertWithWhereUniqueWithoutCustomerInput',
      list: true,
    })
  },
})

export const CustomerUpdateWithoutInvoicesDataInput = inputObjectType({
  name: 'CustomerUpdateWithoutInvoicesDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('address', { type: 'String' })
    t.field('zipcode', { type: 'String' })
    t.field('city', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('firstSeen', { type: 'DateTime' })
    t.field('lastSeen', { type: 'DateTime' })
    t.field('hasOrdered', { type: 'Boolean' })
    t.field('latestPurchase', { type: 'DateTime' })
    t.field('hasNewsLetter', { type: 'Boolean' })
    t.field('nbOrders', { type: 'Int' })
    t.field('image', { type: 'String' })
    t.field('totalOrder', { type: 'Int' })
    t.field('totalSpent', { type: 'Float' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('groups', { type: 'CustomerUpdategroupsInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutCustomerInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutCustomerInput' })
    t.field('company', { type: 'CompanyUpdateOneWithoutCustomersInput' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutCustomersInput' })
  },
})

export const CustomerUpsertWithoutInvoicesInput = inputObjectType({
  name: 'CustomerUpsertWithoutInvoicesInput',
  definition(t) {
    t.field('update', {
      type: 'CustomerUpdateWithoutInvoicesDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CustomerCreateWithoutInvoicesInput',
      nullable: false,
    })
  },
})

export const CustomerUpdateOneRequiredWithoutInvoicesInput = inputObjectType({
  name: 'CustomerUpdateOneRequiredWithoutInvoicesInput',
  definition(t) {
    t.field('create', { type: 'CustomerCreateWithoutInvoicesInput' })
    t.field('connect', { type: 'CustomerWhereUniqueInput' })
    t.field('update', { type: 'CustomerUpdateWithoutInvoicesDataInput' })
    t.field('upsert', { type: 'CustomerUpsertWithoutInvoicesInput' })
  },
})

export const InvoiceUpdateWithoutOrderDataInput = inputObjectType({
  name: 'InvoiceUpdateWithoutOrderDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('subtotal', { type: 'Float' })
    t.field('deliveryFees', { type: 'Float' })
    t.field('taxRate', { type: 'Float' })
    t.field('taxes', { type: 'Float' })
    t.field('total', { type: 'Float' })
    t.field('customer', {
      type: 'CustomerUpdateOneRequiredWithoutInvoicesInput',
    })
    t.field('company', { type: 'CompanyUpdateOneWithoutInvoicesInput' })
  },
})

export const InvoiceUpdateWithWhereUniqueWithoutOrderInput = inputObjectType({
  name: 'InvoiceUpdateWithWhereUniqueWithoutOrderInput',
  definition(t) {
    t.field('where', { type: 'InvoiceWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'InvoiceUpdateWithoutOrderDataInput',
      nullable: false,
    })
  },
})

export const InvoiceUpsertWithWhereUniqueWithoutOrderInput = inputObjectType({
  name: 'InvoiceUpsertWithWhereUniqueWithoutOrderInput',
  definition(t) {
    t.field('where', { type: 'InvoiceWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'InvoiceUpdateWithoutOrderDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'InvoiceCreateWithoutOrderInput',
      nullable: false,
    })
  },
})

export const InvoiceUpdateManyWithoutOrderInput = inputObjectType({
  name: 'InvoiceUpdateManyWithoutOrderInput',
  definition(t) {
    t.field('create', { type: 'InvoiceCreateWithoutOrderInput', list: true })
    t.field('connect', { type: 'InvoiceWhereUniqueInput', list: true })
    t.field('set', { type: 'InvoiceWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'InvoiceWhereUniqueInput', list: true })
    t.field('delete', { type: 'InvoiceWhereUniqueInput', list: true })
    t.field('update', {
      type: 'InvoiceUpdateWithWhereUniqueWithoutOrderInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'InvoiceUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'InvoiceScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'InvoiceUpsertWithWhereUniqueWithoutOrderInput',
      list: true,
    })
  },
})

export const OrderUpdateWithoutOrderItemsDataInput = inputObjectType({
  name: 'OrderUpdateWithoutOrderItemsDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('reference', { type: 'String' })
    t.field('subtotal', { type: 'Float' })
    t.field('deliveryFees', { type: 'Float' })
    t.field('taxRate', { type: 'Float' })
    t.field('taxes', { type: 'Float' })
    t.field('total', { type: 'Float' })
    t.field('status', { type: 'String' })
    t.field('returned', { type: 'Boolean' })
    t.field('deliveryTime', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('paymentMethod', { type: 'String' })
    t.field('customer', { type: 'CustomerUpdateOneWithoutOrdersInput' })
    t.field('invoice', { type: 'InvoiceUpdateManyWithoutOrderInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutOrderInput' })
    t.field('company', { type: 'CompanyUpdateOneWithoutOrdersInput' })
    t.field('deliveryAdress', {
      type: 'AddressUpdateOneRequiredWithoutOrdersInput',
    })
    t.field('contact', { type: 'ContactUpdateOneWithoutOrdersInput' })
  },
})

export const OrderUpsertWithoutOrderItemsInput = inputObjectType({
  name: 'OrderUpsertWithoutOrderItemsInput',
  definition(t) {
    t.field('update', {
      type: 'OrderUpdateWithoutOrderItemsDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'OrderCreateWithoutOrderItemsInput',
      nullable: false,
    })
  },
})

export const OrderUpdateOneRequiredWithoutOrderItemsInput = inputObjectType({
  name: 'OrderUpdateOneRequiredWithoutOrderItemsInput',
  definition(t) {
    t.field('create', { type: 'OrderCreateWithoutOrderItemsInput' })
    t.field('connect', { type: 'OrderWhereUniqueInput' })
    t.field('update', { type: 'OrderUpdateWithoutOrderItemsDataInput' })
    t.field('upsert', { type: 'OrderUpsertWithoutOrderItemsInput' })
  },
})

export const OrderItemUpdateWithoutProductDataInput = inputObjectType({
  name: 'OrderItemUpdateWithoutProductDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('quantity', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('weight', { type: 'String' })
    t.field('price', { type: 'Float' })
    t.field('image', { type: 'String' })
    t.field('order', { type: 'OrderUpdateOneRequiredWithoutOrderItemsInput' })
  },
})

export const OrderItemUpdateWithWhereUniqueWithoutProductInput = inputObjectType({
  name: 'OrderItemUpdateWithWhereUniqueWithoutProductInput',
  definition(t) {
    t.field('where', { type: 'OrderItemWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'OrderItemUpdateWithoutProductDataInput',
      nullable: false,
    })
  },
})

export const OrderItemUpsertWithWhereUniqueWithoutProductInput = inputObjectType({
  name: 'OrderItemUpsertWithWhereUniqueWithoutProductInput',
  definition(t) {
    t.field('where', { type: 'OrderItemWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'OrderItemUpdateWithoutProductDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'OrderItemCreateWithoutProductInput',
      nullable: false,
    })
  },
})

export const OrderItemUpdateManyWithoutProductInput = inputObjectType({
  name: 'OrderItemUpdateManyWithoutProductInput',
  definition(t) {
    t.field('create', {
      type: 'OrderItemCreateWithoutProductInput',
      list: true,
    })
    t.field('connect', { type: 'OrderItemWhereUniqueInput', list: true })
    t.field('set', { type: 'OrderItemWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'OrderItemWhereUniqueInput', list: true })
    t.field('delete', { type: 'OrderItemWhereUniqueInput', list: true })
    t.field('update', {
      type: 'OrderItemUpdateWithWhereUniqueWithoutProductInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'OrderItemUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'OrderItemScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'OrderItemUpsertWithWhereUniqueWithoutProductInput',
      list: true,
    })
  },
})

export const ProductUpdateWithoutReviewDataInput = inputObjectType({
  name: 'ProductUpdateWithoutReviewDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('width', { type: 'Float' })
    t.field('height', { type: 'Float' })
    t.field('price', { type: 'Float' })
    t.field('thumbnail', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('stock', { type: 'Int' })
    t.field('sku', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('slug', { type: 'String' })
    t.field('salePrice', { type: 'Float' })
    t.field('discountInPercent', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('unit', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('gallery', { type: 'ProductUpdategalleryInput' })
    t.field('orderItems', { type: 'OrderItemUpdateManyWithoutProductInput' })
    t.field('company', { type: 'CompanyUpdateOneWithoutProductsInput' })
    t.field('categories', { type: 'CategoryUpdateManyWithoutProductsInput' })
  },
})

export const ProductUpsertWithoutReviewInput = inputObjectType({
  name: 'ProductUpsertWithoutReviewInput',
  definition(t) {
    t.field('update', {
      type: 'ProductUpdateWithoutReviewDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'ProductCreateWithoutReviewInput',
      nullable: false,
    })
  },
})

export const ProductUpdateOneWithoutReviewInput = inputObjectType({
  name: 'ProductUpdateOneWithoutReviewInput',
  definition(t) {
    t.field('create', { type: 'ProductCreateWithoutReviewInput' })
    t.field('connect', { type: 'ProductWhereUniqueInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('update', { type: 'ProductUpdateWithoutReviewDataInput' })
    t.field('upsert', { type: 'ProductUpsertWithoutReviewInput' })
  },
})

export const ReviewUpdateWithoutCustomerDataInput = inputObjectType({
  name: 'ReviewUpdateWithoutCustomerDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('status', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.field('comment', { type: 'String' })
    t.field('order', { type: 'OrderUpdateOneWithoutReviewsInput' })
    t.field('product', { type: 'ProductUpdateOneWithoutReviewInput' })
    t.field('company', { type: 'CompanyUpdateOneWithoutReviewsInput' })
  },
})

export const ReviewUpdateWithWhereUniqueWithoutCustomerInput = inputObjectType({
  name: 'ReviewUpdateWithWhereUniqueWithoutCustomerInput',
  definition(t) {
    t.field('where', { type: 'ReviewWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'ReviewUpdateWithoutCustomerDataInput',
      nullable: false,
    })
  },
})

export const ReviewUpsertWithWhereUniqueWithoutCustomerInput = inputObjectType({
  name: 'ReviewUpsertWithWhereUniqueWithoutCustomerInput',
  definition(t) {
    t.field('where', { type: 'ReviewWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'ReviewUpdateWithoutCustomerDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'ReviewCreateWithoutCustomerInput',
      nullable: false,
    })
  },
})

export const ReviewUpdateManyWithoutCustomerInput = inputObjectType({
  name: 'ReviewUpdateManyWithoutCustomerInput',
  definition(t) {
    t.field('create', { type: 'ReviewCreateWithoutCustomerInput', list: true })
    t.field('connect', { type: 'ReviewWhereUniqueInput', list: true })
    t.field('set', { type: 'ReviewWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'ReviewWhereUniqueInput', list: true })
    t.field('delete', { type: 'ReviewWhereUniqueInput', list: true })
    t.field('update', {
      type: 'ReviewUpdateWithWhereUniqueWithoutCustomerInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'ReviewUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'ReviewScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'ReviewUpsertWithWhereUniqueWithoutCustomerInput',
      list: true,
    })
  },
})

export const CustomerUpdateWithoutOrdersDataInput = inputObjectType({
  name: 'CustomerUpdateWithoutOrdersDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('address', { type: 'String' })
    t.field('zipcode', { type: 'String' })
    t.field('city', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('firstSeen', { type: 'DateTime' })
    t.field('lastSeen', { type: 'DateTime' })
    t.field('hasOrdered', { type: 'Boolean' })
    t.field('latestPurchase', { type: 'DateTime' })
    t.field('hasNewsLetter', { type: 'Boolean' })
    t.field('nbOrders', { type: 'Int' })
    t.field('image', { type: 'String' })
    t.field('totalOrder', { type: 'Int' })
    t.field('totalSpent', { type: 'Float' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('groups', { type: 'CustomerUpdategroupsInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutCustomerInput' })
    t.field('invoices', { type: 'InvoiceUpdateManyWithoutCustomerInput' })
    t.field('company', { type: 'CompanyUpdateOneWithoutCustomersInput' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutCustomersInput' })
  },
})

export const CustomerUpsertWithoutOrdersInput = inputObjectType({
  name: 'CustomerUpsertWithoutOrdersInput',
  definition(t) {
    t.field('update', {
      type: 'CustomerUpdateWithoutOrdersDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CustomerCreateWithoutOrdersInput',
      nullable: false,
    })
  },
})

export const CustomerUpdateOneWithoutOrdersInput = inputObjectType({
  name: 'CustomerUpdateOneWithoutOrdersInput',
  definition(t) {
    t.field('create', { type: 'CustomerCreateWithoutOrdersInput' })
    t.field('connect', { type: 'CustomerWhereUniqueInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('update', { type: 'CustomerUpdateWithoutOrdersDataInput' })
    t.field('upsert', { type: 'CustomerUpsertWithoutOrdersInput' })
  },
})

export const OrderUpdateWithoutReviewsDataInput = inputObjectType({
  name: 'OrderUpdateWithoutReviewsDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('reference', { type: 'String' })
    t.field('subtotal', { type: 'Float' })
    t.field('deliveryFees', { type: 'Float' })
    t.field('taxRate', { type: 'Float' })
    t.field('taxes', { type: 'Float' })
    t.field('total', { type: 'Float' })
    t.field('status', { type: 'String' })
    t.field('returned', { type: 'Boolean' })
    t.field('deliveryTime', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('paymentMethod', { type: 'String' })
    t.field('customer', { type: 'CustomerUpdateOneWithoutOrdersInput' })
    t.field('invoice', { type: 'InvoiceUpdateManyWithoutOrderInput' })
    t.field('orderItems', { type: 'OrderItemUpdateManyWithoutOrderInput' })
    t.field('company', { type: 'CompanyUpdateOneWithoutOrdersInput' })
    t.field('deliveryAdress', {
      type: 'AddressUpdateOneRequiredWithoutOrdersInput',
    })
    t.field('contact', { type: 'ContactUpdateOneWithoutOrdersInput' })
  },
})

export const OrderUpsertWithoutReviewsInput = inputObjectType({
  name: 'OrderUpsertWithoutReviewsInput',
  definition(t) {
    t.field('update', {
      type: 'OrderUpdateWithoutReviewsDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'OrderCreateWithoutReviewsInput',
      nullable: false,
    })
  },
})

export const OrderUpdateOneWithoutReviewsInput = inputObjectType({
  name: 'OrderUpdateOneWithoutReviewsInput',
  definition(t) {
    t.field('create', { type: 'OrderCreateWithoutReviewsInput' })
    t.field('connect', { type: 'OrderWhereUniqueInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('update', { type: 'OrderUpdateWithoutReviewsDataInput' })
    t.field('upsert', { type: 'OrderUpsertWithoutReviewsInput' })
  },
})

export const ReviewUpdateWithoutProductDataInput = inputObjectType({
  name: 'ReviewUpdateWithoutProductDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('status', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.field('comment', { type: 'String' })
    t.field('order', { type: 'OrderUpdateOneWithoutReviewsInput' })
    t.field('customer', { type: 'CustomerUpdateOneWithoutReviewsInput' })
    t.field('company', { type: 'CompanyUpdateOneWithoutReviewsInput' })
  },
})

export const ReviewUpdateWithWhereUniqueWithoutProductInput = inputObjectType({
  name: 'ReviewUpdateWithWhereUniqueWithoutProductInput',
  definition(t) {
    t.field('where', { type: 'ReviewWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'ReviewUpdateWithoutProductDataInput',
      nullable: false,
    })
  },
})

export const ReviewUpsertWithWhereUniqueWithoutProductInput = inputObjectType({
  name: 'ReviewUpsertWithWhereUniqueWithoutProductInput',
  definition(t) {
    t.field('where', { type: 'ReviewWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'ReviewUpdateWithoutProductDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'ReviewCreateWithoutProductInput',
      nullable: false,
    })
  },
})

export const ReviewUpdateManyWithoutProductInput = inputObjectType({
  name: 'ReviewUpdateManyWithoutProductInput',
  definition(t) {
    t.field('create', { type: 'ReviewCreateWithoutProductInput', list: true })
    t.field('connect', { type: 'ReviewWhereUniqueInput', list: true })
    t.field('set', { type: 'ReviewWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'ReviewWhereUniqueInput', list: true })
    t.field('delete', { type: 'ReviewWhereUniqueInput', list: true })
    t.field('update', {
      type: 'ReviewUpdateWithWhereUniqueWithoutProductInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'ReviewUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'ReviewScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'ReviewUpsertWithWhereUniqueWithoutProductInput',
      list: true,
    })
  },
})

export const ProductUpdateWithoutCompanyDataInput = inputObjectType({
  name: 'ProductUpdateWithoutCompanyDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('width', { type: 'Float' })
    t.field('height', { type: 'Float' })
    t.field('price', { type: 'Float' })
    t.field('thumbnail', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('stock', { type: 'Int' })
    t.field('sku', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('slug', { type: 'String' })
    t.field('salePrice', { type: 'Float' })
    t.field('discountInPercent', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('unit', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('gallery', { type: 'ProductUpdategalleryInput' })
    t.field('review', { type: 'ReviewUpdateManyWithoutProductInput' })
    t.field('orderItems', { type: 'OrderItemUpdateManyWithoutProductInput' })
    t.field('categories', { type: 'CategoryUpdateManyWithoutProductsInput' })
  },
})

export const ProductUpdateWithWhereUniqueWithoutCompanyInput = inputObjectType({
  name: 'ProductUpdateWithWhereUniqueWithoutCompanyInput',
  definition(t) {
    t.field('where', { type: 'ProductWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'ProductUpdateWithoutCompanyDataInput',
      nullable: false,
    })
  },
})

export const ProductUpsertWithWhereUniqueWithoutCompanyInput = inputObjectType({
  name: 'ProductUpsertWithWhereUniqueWithoutCompanyInput',
  definition(t) {
    t.field('where', { type: 'ProductWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'ProductUpdateWithoutCompanyDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'ProductCreateWithoutCompanyInput',
      nullable: false,
    })
  },
})

export const ProductUpdateManyWithoutCompanyInput = inputObjectType({
  name: 'ProductUpdateManyWithoutCompanyInput',
  definition(t) {
    t.field('create', { type: 'ProductCreateWithoutCompanyInput', list: true })
    t.field('connect', { type: 'ProductWhereUniqueInput', list: true })
    t.field('set', { type: 'ProductWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'ProductWhereUniqueInput', list: true })
    t.field('delete', { type: 'ProductWhereUniqueInput', list: true })
    t.field('update', {
      type: 'ProductUpdateWithWhereUniqueWithoutCompanyInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'ProductUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'ProductScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'ProductUpsertWithWhereUniqueWithoutCompanyInput',
      list: true,
    })
  },
})

export const CompanyUpdateWithoutPlatformDataInput = inputObjectType({
  name: 'CompanyUpdateWithoutPlatformDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('slug', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String' })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressUpdateOneWithoutCompanyInput' })
    t.field('contact', { type: 'ContactUpdateOneWithoutCompanyInput' })
    t.field('products', { type: 'ProductUpdateManyWithoutCompanyInput' })
    t.field('customers', { type: 'CustomerUpdateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserUpdateOneWithoutCompaniesInput' })
    t.field('invoices', { type: 'InvoiceUpdateManyWithoutCompanyInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailUpdateOneRequiredWithoutCompanyInput',
    })
    t.field('categories', { type: 'CategoryUpdateManyWithoutCompaniesInput' })
  },
})

export const CompanyUpdateWithWhereUniqueWithoutPlatformInput = inputObjectType({
  name: 'CompanyUpdateWithWhereUniqueWithoutPlatformInput',
  definition(t) {
    t.field('where', { type: 'CompanyWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'CompanyUpdateWithoutPlatformDataInput',
      nullable: false,
    })
  },
})

export const CompanyUpsertWithWhereUniqueWithoutPlatformInput = inputObjectType({
  name: 'CompanyUpsertWithWhereUniqueWithoutPlatformInput',
  definition(t) {
    t.field('where', { type: 'CompanyWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'CompanyUpdateWithoutPlatformDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CompanyCreateWithoutPlatformInput',
      nullable: false,
    })
  },
})

export const CompanyUpdateManyWithoutPlatformInput = inputObjectType({
  name: 'CompanyUpdateManyWithoutPlatformInput',
  definition(t) {
    t.field('create', { type: 'CompanyCreateWithoutPlatformInput', list: true })
    t.field('connect', { type: 'CompanyWhereUniqueInput', list: true })
    t.field('set', { type: 'CompanyWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'CompanyWhereUniqueInput', list: true })
    t.field('delete', { type: 'CompanyWhereUniqueInput', list: true })
    t.field('update', {
      type: 'CompanyUpdateWithWhereUniqueWithoutPlatformInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'CompanyUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'CompanyScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'CompanyUpsertWithWhereUniqueWithoutPlatformInput',
      list: true,
    })
  },
})

export const PlatformUpdateWithoutOwnerDataInput = inputObjectType({
  name: 'PlatformUpdateWithoutOwnerDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('bannerImg', { type: 'String' })
    t.field('slug', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('platformType', { type: 'String' })
    t.field('taxRate', { type: 'Float' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('companies', { type: 'CompanyUpdateManyWithoutPlatformInput' })
    t.field('categories', { type: 'CategoryUpdateManyWithoutPlatformInput' })
    t.field('country', { type: 'CountryUpdateOneWithoutPlatformsInput' })
  },
})

export const PlatformUpdateWithWhereUniqueWithoutOwnerInput = inputObjectType({
  name: 'PlatformUpdateWithWhereUniqueWithoutOwnerInput',
  definition(t) {
    t.field('where', { type: 'PlatformWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'PlatformUpdateWithoutOwnerDataInput',
      nullable: false,
    })
  },
})

export const PlatformScalarWhereInput = inputObjectType({
  name: 'PlatformScalarWhereInput',
  definition(t) {
    t.field('id', { type: 'IntFilter' })
    t.field('name', { type: 'NullableStringFilter' })
    t.field('bannerImg', { type: 'NullableStringFilter' })
    t.field('slug', { type: 'StringFilter' })
    t.field('ownerId', { type: 'StringFilter' })
    t.field('description', { type: 'NullableStringFilter' })
    t.field('companies', { type: 'CompanyFilter' })
    t.field('categories', { type: 'CategoryFilter' })
    t.field('platformType', { type: 'NullableStringFilter' })
    t.field('countryId', { type: 'NullableIntFilter' })
    t.field('taxRate', { type: 'FloatFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('AND', { type: 'PlatformScalarWhereInput', list: true })
    t.field('OR', { type: 'PlatformScalarWhereInput', list: true })
    t.field('NOT', { type: 'PlatformScalarWhereInput', list: true })
  },
})

export const PlatformUpdateManyDataInput = inputObjectType({
  name: 'PlatformUpdateManyDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('bannerImg', { type: 'String' })
    t.field('slug', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('platformType', { type: 'String' })
    t.field('taxRate', { type: 'Float' })
    t.field('createdAt', { type: 'DateTime' })
  },
})

export const PlatformUpdateManyWithWhereNestedInput = inputObjectType({
  name: 'PlatformUpdateManyWithWhereNestedInput',
  definition(t) {
    t.field('where', { type: 'PlatformScalarWhereInput', nullable: false })
    t.field('data', { type: 'PlatformUpdateManyDataInput', nullable: false })
  },
})

export const PlatformUpsertWithWhereUniqueWithoutOwnerInput = inputObjectType({
  name: 'PlatformUpsertWithWhereUniqueWithoutOwnerInput',
  definition(t) {
    t.field('where', { type: 'PlatformWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'PlatformUpdateWithoutOwnerDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'PlatformCreateWithoutOwnerInput',
      nullable: false,
    })
  },
})

export const PlatformUpdateManyWithoutOwnerInput = inputObjectType({
  name: 'PlatformUpdateManyWithoutOwnerInput',
  definition(t) {
    t.field('create', { type: 'PlatformCreateWithoutOwnerInput', list: true })
    t.field('connect', { type: 'PlatformWhereUniqueInput', list: true })
    t.field('set', { type: 'PlatformWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'PlatformWhereUniqueInput', list: true })
    t.field('delete', { type: 'PlatformWhereUniqueInput', list: true })
    t.field('update', {
      type: 'PlatformUpdateWithWhereUniqueWithoutOwnerInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'PlatformUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'PlatformScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'PlatformUpsertWithWhereUniqueWithoutOwnerInput',
      list: true,
    })
  },
})

export const UserUpdateWithoutAddressesDataInput = inputObjectType({
  name: 'UserUpdateWithoutAddressesDataInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('email', { type: 'String' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('token', { type: 'String' })
    t.field('googleId', { type: 'String' })
    t.field('walletId', { type: 'String' })
    t.field('income', { type: 'Float' })
    t.field('username', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('imagePublicId', { type: 'String' })
    t.field('coverImage', { type: 'String' })
    t.field('coverImagePublicId', { type: 'String' })
    t.field('isOnline', { type: 'Boolean' })
    t.field('companies', { type: 'CompanyUpdateManyWithoutOwnerInput' })
    t.field('platforms', { type: 'PlatformUpdateManyWithoutOwnerInput' })
    t.field('cards', { type: 'CardUpdateManyWithoutUserInput' })
    t.field('contacts', { type: 'ContactUpdateManyWithoutUserInput' })
    t.field('customers', { type: 'CustomerUpdateManyWithoutUserInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutUserInput' })
  },
})

export const UserUpsertWithoutAddressesInput = inputObjectType({
  name: 'UserUpsertWithoutAddressesInput',
  definition(t) {
    t.field('update', {
      type: 'UserUpdateWithoutAddressesDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'UserCreateWithoutAddressesInput',
      nullable: false,
    })
  },
})

export const UserUpdateOneWithoutAddressesInput = inputObjectType({
  name: 'UserUpdateOneWithoutAddressesInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutAddressesInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('update', { type: 'UserUpdateWithoutAddressesDataInput' })
    t.field('upsert', { type: 'UserUpsertWithoutAddressesInput' })
  },
})

export const AddressUpdateWithoutCompanyDataInput = inputObjectType({
  name: 'AddressUpdateWithoutCompanyDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('json', { type: 'String' })
    t.field('info', { type: 'String' })
    t.field('companyId', { type: 'Int' })
    t.field('user', { type: 'UserUpdateOneWithoutAddressesInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutDeliveryAdressInput' })
  },
})

export const AddressUpsertWithoutCompanyInput = inputObjectType({
  name: 'AddressUpsertWithoutCompanyInput',
  definition(t) {
    t.field('update', {
      type: 'AddressUpdateWithoutCompanyDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'AddressCreateWithoutCompanyInput',
      nullable: false,
    })
  },
})

export const AddressUpdateOneWithoutCompanyInput = inputObjectType({
  name: 'AddressUpdateOneWithoutCompanyInput',
  definition(t) {
    t.field('create', { type: 'AddressCreateWithoutCompanyInput' })
    t.field('connect', { type: 'AddressWhereUniqueInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('update', { type: 'AddressUpdateWithoutCompanyDataInput' })
    t.field('upsert', { type: 'AddressUpsertWithoutCompanyInput' })
  },
})

export const CompanyUpdateWithoutOwnerDataInput = inputObjectType({
  name: 'CompanyUpdateWithoutOwnerDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('slug', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String' })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressUpdateOneWithoutCompanyInput' })
    t.field('contact', { type: 'ContactUpdateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformUpdateOneRequiredWithoutCompaniesInput',
    })
    t.field('products', { type: 'ProductUpdateManyWithoutCompanyInput' })
    t.field('customers', { type: 'CustomerUpdateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutCompanyInput' })
    t.field('invoices', { type: 'InvoiceUpdateManyWithoutCompanyInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailUpdateOneRequiredWithoutCompanyInput',
    })
    t.field('categories', { type: 'CategoryUpdateManyWithoutCompaniesInput' })
  },
})

export const CompanyUpdateWithWhereUniqueWithoutOwnerInput = inputObjectType({
  name: 'CompanyUpdateWithWhereUniqueWithoutOwnerInput',
  definition(t) {
    t.field('where', { type: 'CompanyWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'CompanyUpdateWithoutOwnerDataInput',
      nullable: false,
    })
  },
})

export const CompanyUpsertWithWhereUniqueWithoutOwnerInput = inputObjectType({
  name: 'CompanyUpsertWithWhereUniqueWithoutOwnerInput',
  definition(t) {
    t.field('where', { type: 'CompanyWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'CompanyUpdateWithoutOwnerDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CompanyCreateWithoutOwnerInput',
      nullable: false,
    })
  },
})

export const CompanyUpdateManyWithoutOwnerInput = inputObjectType({
  name: 'CompanyUpdateManyWithoutOwnerInput',
  definition(t) {
    t.field('create', { type: 'CompanyCreateWithoutOwnerInput', list: true })
    t.field('connect', { type: 'CompanyWhereUniqueInput', list: true })
    t.field('set', { type: 'CompanyWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'CompanyWhereUniqueInput', list: true })
    t.field('delete', { type: 'CompanyWhereUniqueInput', list: true })
    t.field('update', {
      type: 'CompanyUpdateWithWhereUniqueWithoutOwnerInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'CompanyUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'CompanyScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'CompanyUpsertWithWhereUniqueWithoutOwnerInput',
      list: true,
    })
  },
})

export const UserUpdateWithoutContactsDataInput = inputObjectType({
  name: 'UserUpdateWithoutContactsDataInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('email', { type: 'String' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('token', { type: 'String' })
    t.field('googleId', { type: 'String' })
    t.field('walletId', { type: 'String' })
    t.field('income', { type: 'Float' })
    t.field('username', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('imagePublicId', { type: 'String' })
    t.field('coverImage', { type: 'String' })
    t.field('coverImagePublicId', { type: 'String' })
    t.field('isOnline', { type: 'Boolean' })
    t.field('companies', { type: 'CompanyUpdateManyWithoutOwnerInput' })
    t.field('platforms', { type: 'PlatformUpdateManyWithoutOwnerInput' })
    t.field('addresses', { type: 'AddressUpdateManyWithoutUserInput' })
    t.field('cards', { type: 'CardUpdateManyWithoutUserInput' })
    t.field('customers', { type: 'CustomerUpdateManyWithoutUserInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutUserInput' })
  },
})

export const UserUpsertWithoutContactsInput = inputObjectType({
  name: 'UserUpsertWithoutContactsInput',
  definition(t) {
    t.field('update', {
      type: 'UserUpdateWithoutContactsDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'UserCreateWithoutContactsInput',
      nullable: false,
    })
  },
})

export const UserUpdateOneWithoutContactsInput = inputObjectType({
  name: 'UserUpdateOneWithoutContactsInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutContactsInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('update', { type: 'UserUpdateWithoutContactsDataInput' })
    t.field('upsert', { type: 'UserUpsertWithoutContactsInput' })
  },
})

export const ContactUpdateWithoutCompanyDataInput = inputObjectType({
  name: 'ContactUpdateWithoutCompanyDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('number', { type: 'String' })
    t.field('companyId', { type: 'Int' })
    t.field('user', { type: 'UserUpdateOneWithoutContactsInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutContactInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutContactInput' })
  },
})

export const ContactUpsertWithoutCompanyInput = inputObjectType({
  name: 'ContactUpsertWithoutCompanyInput',
  definition(t) {
    t.field('update', {
      type: 'ContactUpdateWithoutCompanyDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'ContactCreateWithoutCompanyInput',
      nullable: false,
    })
  },
})

export const ContactUpdateOneWithoutCompanyInput = inputObjectType({
  name: 'ContactUpdateOneWithoutCompanyInput',
  definition(t) {
    t.field('create', { type: 'ContactCreateWithoutCompanyInput' })
    t.field('connect', { type: 'ContactWhereUniqueInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('update', { type: 'ContactUpdateWithoutCompanyDataInput' })
    t.field('upsert', { type: 'ContactUpsertWithoutCompanyInput' })
  },
})

export const CompanyUpdateWithoutAddressDataInput = inputObjectType({
  name: 'CompanyUpdateWithoutAddressDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('slug', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String' })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('contact', { type: 'ContactUpdateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformUpdateOneRequiredWithoutCompaniesInput',
    })
    t.field('products', { type: 'ProductUpdateManyWithoutCompanyInput' })
    t.field('customers', { type: 'CustomerUpdateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserUpdateOneWithoutCompaniesInput' })
    t.field('invoices', { type: 'InvoiceUpdateManyWithoutCompanyInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailUpdateOneRequiredWithoutCompanyInput',
    })
    t.field('categories', { type: 'CategoryUpdateManyWithoutCompaniesInput' })
  },
})

export const CompanyUpsertWithoutAddressInput = inputObjectType({
  name: 'CompanyUpsertWithoutAddressInput',
  definition(t) {
    t.field('update', {
      type: 'CompanyUpdateWithoutAddressDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CompanyCreateWithoutAddressInput',
      nullable: false,
    })
  },
})

export const CompanyUpdateOneWithoutAddressInput = inputObjectType({
  name: 'CompanyUpdateOneWithoutAddressInput',
  definition(t) {
    t.field('create', { type: 'CompanyCreateWithoutAddressInput' })
    t.field('connect', { type: 'CompanyWhereUniqueInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('update', { type: 'CompanyUpdateWithoutAddressDataInput' })
    t.field('upsert', { type: 'CompanyUpsertWithoutAddressInput' })
  },
})

export const AddressUpdateInput = inputObjectType({
  name: 'AddressUpdateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('json', { type: 'String' })
    t.field('info', { type: 'String' })
    t.field('companyId', { type: 'Int' })
    t.field('company', { type: 'CompanyUpdateOneWithoutAddressInput' })
    t.field('user', { type: 'UserUpdateOneWithoutAddressesInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutDeliveryAdressInput' })
  },
})

export const AddressUpdateManyMutationInput = inputObjectType({
  name: 'AddressUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('json', { type: 'String' })
    t.field('info', { type: 'String' })
    t.field('companyId', { type: 'Int' })
  },
})

export const StaffCreateInput = inputObjectType({
  name: 'StaffCreateInput',
  definition(t) {
    t.field('role', { type: 'String', nullable: false })
    t.field('createdAt', { type: 'DateTime' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('user', {
      type: 'UserCreateOneWithoutStaffsInput',
      nullable: false,
    })
    t.field('company', {
      type: 'CompanyCreateOneWithoutStaffsInput',
      nullable: false,
    })
    t.field('contact', { type: 'ContactCreateOneWithoutStaffsInput' })
  },
})

export const StaffUpdateInput = inputObjectType({
  name: 'StaffUpdateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('role', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutStaffsInput' })
    t.field('company', { type: 'CompanyUpdateOneRequiredWithoutStaffsInput' })
    t.field('contact', { type: 'ContactUpdateOneWithoutStaffsInput' })
  },
})

export const StaffUpdateManyMutationInput = inputObjectType({
  name: 'StaffUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('role', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('email', { type: 'String' })
  },
})

export const UserCreateWithoutCardsInput = inputObjectType({
  name: 'UserCreateWithoutCardsInput',
  definition(t) {
    t.field('id', { type: 'String', nullable: false })
    t.field('createdAt', { type: 'DateTime' })
    t.field('email', { type: 'String', nullable: false })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('token', { type: 'String' })
    t.field('googleId', { type: 'String' })
    t.field('walletId', { type: 'String' })
    t.field('income', { type: 'Float' })
    t.field('username', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('imagePublicId', { type: 'String' })
    t.field('coverImage', { type: 'String' })
    t.field('coverImagePublicId', { type: 'String' })
    t.field('isOnline', { type: 'Boolean' })
    t.field('companies', { type: 'CompanyCreateManyWithoutOwnerInput' })
    t.field('platforms', { type: 'PlatformCreateManyWithoutOwnerInput' })
    t.field('addresses', { type: 'AddressCreateManyWithoutUserInput' })
    t.field('contacts', { type: 'ContactCreateManyWithoutUserInput' })
    t.field('customers', { type: 'CustomerCreateManyWithoutUserInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutUserInput' })
  },
})

export const UserCreateOneWithoutCardsInput = inputObjectType({
  name: 'UserCreateOneWithoutCardsInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutCardsInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const CardCreateInput = inputObjectType({
  name: 'CardCreateInput',
  definition(t) {
    t.field('type', { type: 'String', nullable: false })
    t.field('cardType', { type: 'String', nullable: false })
    t.field('name', { type: 'String', nullable: false })
    t.field('lastFourDigit', { type: 'Int', nullable: false })
    t.field('user', { type: 'UserCreateOneWithoutCardsInput' })
  },
})

export const UserUpdateWithoutCardsDataInput = inputObjectType({
  name: 'UserUpdateWithoutCardsDataInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('email', { type: 'String' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('token', { type: 'String' })
    t.field('googleId', { type: 'String' })
    t.field('walletId', { type: 'String' })
    t.field('income', { type: 'Float' })
    t.field('username', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('imagePublicId', { type: 'String' })
    t.field('coverImage', { type: 'String' })
    t.field('coverImagePublicId', { type: 'String' })
    t.field('isOnline', { type: 'Boolean' })
    t.field('companies', { type: 'CompanyUpdateManyWithoutOwnerInput' })
    t.field('platforms', { type: 'PlatformUpdateManyWithoutOwnerInput' })
    t.field('addresses', { type: 'AddressUpdateManyWithoutUserInput' })
    t.field('contacts', { type: 'ContactUpdateManyWithoutUserInput' })
    t.field('customers', { type: 'CustomerUpdateManyWithoutUserInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutUserInput' })
  },
})

export const UserUpsertWithoutCardsInput = inputObjectType({
  name: 'UserUpsertWithoutCardsInput',
  definition(t) {
    t.field('update', {
      type: 'UserUpdateWithoutCardsDataInput',
      nullable: false,
    })
    t.field('create', { type: 'UserCreateWithoutCardsInput', nullable: false })
  },
})

export const UserUpdateOneWithoutCardsInput = inputObjectType({
  name: 'UserUpdateOneWithoutCardsInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutCardsInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('update', { type: 'UserUpdateWithoutCardsDataInput' })
    t.field('upsert', { type: 'UserUpsertWithoutCardsInput' })
  },
})

export const CardUpdateInput = inputObjectType({
  name: 'CardUpdateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('cardType', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('lastFourDigit', { type: 'Int' })
    t.field('user', { type: 'UserUpdateOneWithoutCardsInput' })
  },
})

export const CardUpdateManyMutationInput = inputObjectType({
  name: 'CardUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('cardType', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('lastFourDigit', { type: 'Int' })
  },
})

export const ContactCreateInput = inputObjectType({
  name: 'ContactCreateInput',
  definition(t) {
    t.field('type', { type: 'String' })
    t.field('number', { type: 'String', nullable: false })
    t.field('companyId', { type: 'Int' })
    t.field('company', { type: 'CompanyCreateOneWithoutContactInput' })
    t.field('user', { type: 'UserCreateOneWithoutContactsInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutContactInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutContactInput' })
  },
})

export const ContactUpdateInput = inputObjectType({
  name: 'ContactUpdateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('number', { type: 'String' })
    t.field('companyId', { type: 'Int' })
    t.field('company', { type: 'CompanyUpdateOneWithoutContactInput' })
    t.field('user', { type: 'UserUpdateOneWithoutContactsInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutContactInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutContactInput' })
  },
})

export const ContactUpdateManyMutationInput = inputObjectType({
  name: 'ContactUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('number', { type: 'String' })
    t.field('companyId', { type: 'Int' })
  },
})

export const CompanyCreateInput = inputObjectType({
  name: 'CompanyCreateInput',
  definition(t) {
    t.field('slug', { type: 'String', nullable: false })
    t.field('name', { type: 'String', nullable: false })
    t.field('description', { type: 'String', nullable: false })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String', nullable: false })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressCreateOneWithoutCompanyInput' })
    t.field('contact', { type: 'ContactCreateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformCreateOneWithoutCompaniesInput',
      nullable: false,
    })
    t.field('products', { type: 'ProductCreateManyWithoutCompanyInput' })
    t.field('customers', { type: 'CustomerCreateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserCreateOneWithoutCompaniesInput' })
    t.field('invoices', { type: 'InvoiceCreateManyWithoutCompanyInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailCreateOneWithoutCompanyInput',
      nullable: false,
    })
    t.field('categories', { type: 'CategoryCreateManyWithoutCompaniesInput' })
  },
})

export const CompanyUpdateInput = inputObjectType({
  name: 'CompanyUpdateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('slug', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String' })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressUpdateOneWithoutCompanyInput' })
    t.field('contact', { type: 'ContactUpdateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformUpdateOneRequiredWithoutCompaniesInput',
    })
    t.field('products', { type: 'ProductUpdateManyWithoutCompanyInput' })
    t.field('customers', { type: 'CustomerUpdateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserUpdateOneWithoutCompaniesInput' })
    t.field('invoices', { type: 'InvoiceUpdateManyWithoutCompanyInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutCompanyInput' })
    t.field('deliveryDetail', {
      type: 'DeliveryDetailUpdateOneRequiredWithoutCompanyInput',
    })
    t.field('categories', { type: 'CategoryUpdateManyWithoutCompaniesInput' })
  },
})

export const CompanyUpdateManyMutationInput = inputObjectType({
  name: 'CompanyUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('slug', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String' })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const CompanyCreateWithoutDeliveryDetailInput = inputObjectType({
  name: 'CompanyCreateWithoutDeliveryDetailInput',
  definition(t) {
    t.field('slug', { type: 'String', nullable: false })
    t.field('name', { type: 'String', nullable: false })
    t.field('description', { type: 'String', nullable: false })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String', nullable: false })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressCreateOneWithoutCompanyInput' })
    t.field('contact', { type: 'ContactCreateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformCreateOneWithoutCompaniesInput',
      nullable: false,
    })
    t.field('products', { type: 'ProductCreateManyWithoutCompanyInput' })
    t.field('customers', { type: 'CustomerCreateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserCreateOneWithoutCompaniesInput' })
    t.field('invoices', { type: 'InvoiceCreateManyWithoutCompanyInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutCompanyInput' })
    t.field('categories', { type: 'CategoryCreateManyWithoutCompaniesInput' })
  },
})

export const CompanyCreateOneWithoutDeliveryDetailInput = inputObjectType({
  name: 'CompanyCreateOneWithoutDeliveryDetailInput',
  definition(t) {
    t.field('create', { type: 'CompanyCreateWithoutDeliveryDetailInput' })
    t.field('connect', { type: 'CompanyWhereUniqueInput' })
  },
})

export const DeliveryDetailCreateInput = inputObjectType({
  name: 'DeliveryDetailCreateInput',
  definition(t) {
    t.field('isFree', { type: 'Boolean', nullable: false })
    t.field('charge', { type: 'String', nullable: false })
    t.field('minimumOrder', { type: 'Float', nullable: false })
    t.field('companyId', { type: 'Int' })
    t.field('company', { type: 'CompanyCreateOneWithoutDeliveryDetailInput' })
  },
})

export const CompanyUpdateWithoutDeliveryDetailDataInput = inputObjectType({
  name: 'CompanyUpdateWithoutDeliveryDetailDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('slug', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('previewUrl', { type: 'String' })
    t.field('thumbnailUrl', { type: 'String' })
    t.field('platformSlug', { type: 'String' })
    t.field('promotion', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressUpdateOneWithoutCompanyInput' })
    t.field('contact', { type: 'ContactUpdateOneWithoutCompanyInput' })
    t.field('platform', {
      type: 'PlatformUpdateOneRequiredWithoutCompaniesInput',
    })
    t.field('products', { type: 'ProductUpdateManyWithoutCompanyInput' })
    t.field('customers', { type: 'CustomerUpdateManyWithoutCompanyInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutCompanyInput' })
    t.field('owner', { type: 'UserUpdateOneWithoutCompaniesInput' })
    t.field('invoices', { type: 'InvoiceUpdateManyWithoutCompanyInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutCompanyInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutCompanyInput' })
    t.field('categories', { type: 'CategoryUpdateManyWithoutCompaniesInput' })
  },
})

export const CompanyUpsertWithoutDeliveryDetailInput = inputObjectType({
  name: 'CompanyUpsertWithoutDeliveryDetailInput',
  definition(t) {
    t.field('update', {
      type: 'CompanyUpdateWithoutDeliveryDetailDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'CompanyCreateWithoutDeliveryDetailInput',
      nullable: false,
    })
  },
})

export const CompanyUpdateOneWithoutDeliveryDetailInput = inputObjectType({
  name: 'CompanyUpdateOneWithoutDeliveryDetailInput',
  definition(t) {
    t.field('create', { type: 'CompanyCreateWithoutDeliveryDetailInput' })
    t.field('connect', { type: 'CompanyWhereUniqueInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('update', { type: 'CompanyUpdateWithoutDeliveryDetailDataInput' })
    t.field('upsert', { type: 'CompanyUpsertWithoutDeliveryDetailInput' })
  },
})

export const DeliveryDetailUpdateInput = inputObjectType({
  name: 'DeliveryDetailUpdateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('isFree', { type: 'Boolean' })
    t.field('charge', { type: 'String' })
    t.field('minimumOrder', { type: 'Float' })
    t.field('companyId', { type: 'Int' })
    t.field('company', { type: 'CompanyUpdateOneWithoutDeliveryDetailInput' })
  },
})

export const DeliveryDetailUpdateManyMutationInput = inputObjectType({
  name: 'DeliveryDetailUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('isFree', { type: 'Boolean' })
    t.field('charge', { type: 'String' })
    t.field('minimumOrder', { type: 'Float' })
    t.field('companyId', { type: 'Int' })
  },
})

export const CouponCreateInput = inputObjectType({
  name: 'CouponCreateInput',
  definition(t) {
    t.field('name', { type: 'String', nullable: false })
    t.field('code', { type: 'String', nullable: false })
    t.field('image', { type: 'String', nullable: false })
    t.field('discountInPercent', { type: 'Int' })
    t.field('numberOfCoupon', { type: 'Int' })
    t.field('numberOfUsedCoupon', { type: 'Int' })
  },
})

export const CouponUpdateInput = inputObjectType({
  name: 'CouponUpdateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('code', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('discountInPercent', { type: 'Int' })
    t.field('numberOfCoupon', { type: 'Int' })
    t.field('numberOfUsedCoupon', { type: 'Int' })
  },
})

export const CouponUpdateManyMutationInput = inputObjectType({
  name: 'CouponUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('code', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('discountInPercent', { type: 'Int' })
    t.field('numberOfCoupon', { type: 'Int' })
    t.field('numberOfUsedCoupon', { type: 'Int' })
  },
})

export const PlatformCreateWithoutCountryInput = inputObjectType({
  name: 'PlatformCreateWithoutCountryInput',
  definition(t) {
    t.field('name', { type: 'String' })
    t.field('bannerImg', { type: 'String' })
    t.field('slug', { type: 'String', nullable: false })
    t.field('description', { type: 'String' })
    t.field('platformType', { type: 'String' })
    t.field('taxRate', { type: 'Float', nullable: false })
    t.field('createdAt', { type: 'DateTime' })
    t.field('owner', {
      type: 'UserCreateOneWithoutPlatformsInput',
      nullable: false,
    })
    t.field('companies', { type: 'CompanyCreateManyWithoutPlatformInput' })
    t.field('categories', { type: 'CategoryCreateManyWithoutPlatformInput' })
  },
})

export const PlatformCreateManyWithoutCountryInput = inputObjectType({
  name: 'PlatformCreateManyWithoutCountryInput',
  definition(t) {
    t.field('create', { type: 'PlatformCreateWithoutCountryInput', list: true })
    t.field('connect', { type: 'PlatformWhereUniqueInput', list: true })
  },
})

export const CountryCreateInput = inputObjectType({
  name: 'CountryCreateInput',
  definition(t) {
    t.field('code', { type: 'Int', nullable: false })
    t.field('name', { type: 'String', nullable: false })
    t.field('currency', { type: 'String', nullable: false })
    t.field('platforms', { type: 'PlatformCreateManyWithoutCountryInput' })
  },
})

export const PlatformUpdateWithoutCountryDataInput = inputObjectType({
  name: 'PlatformUpdateWithoutCountryDataInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('bannerImg', { type: 'String' })
    t.field('slug', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('platformType', { type: 'String' })
    t.field('taxRate', { type: 'Float' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('owner', { type: 'UserUpdateOneRequiredWithoutPlatformsInput' })
    t.field('companies', { type: 'CompanyUpdateManyWithoutPlatformInput' })
    t.field('categories', { type: 'CategoryUpdateManyWithoutPlatformInput' })
  },
})

export const PlatformUpdateWithWhereUniqueWithoutCountryInput = inputObjectType({
  name: 'PlatformUpdateWithWhereUniqueWithoutCountryInput',
  definition(t) {
    t.field('where', { type: 'PlatformWhereUniqueInput', nullable: false })
    t.field('data', {
      type: 'PlatformUpdateWithoutCountryDataInput',
      nullable: false,
    })
  },
})

export const PlatformUpsertWithWhereUniqueWithoutCountryInput = inputObjectType({
  name: 'PlatformUpsertWithWhereUniqueWithoutCountryInput',
  definition(t) {
    t.field('where', { type: 'PlatformWhereUniqueInput', nullable: false })
    t.field('update', {
      type: 'PlatformUpdateWithoutCountryDataInput',
      nullable: false,
    })
    t.field('create', {
      type: 'PlatformCreateWithoutCountryInput',
      nullable: false,
    })
  },
})

export const PlatformUpdateManyWithoutCountryInput = inputObjectType({
  name: 'PlatformUpdateManyWithoutCountryInput',
  definition(t) {
    t.field('create', { type: 'PlatformCreateWithoutCountryInput', list: true })
    t.field('connect', { type: 'PlatformWhereUniqueInput', list: true })
    t.field('set', { type: 'PlatformWhereUniqueInput', list: true })
    t.field('disconnect', { type: 'PlatformWhereUniqueInput', list: true })
    t.field('delete', { type: 'PlatformWhereUniqueInput', list: true })
    t.field('update', {
      type: 'PlatformUpdateWithWhereUniqueWithoutCountryInput',
      list: true,
    })
    t.field('updateMany', {
      type: 'PlatformUpdateManyWithWhereNestedInput',
      list: true,
    })
    t.field('deleteMany', { type: 'PlatformScalarWhereInput', list: true })
    t.field('upsert', {
      type: 'PlatformUpsertWithWhereUniqueWithoutCountryInput',
      list: true,
    })
  },
})

export const CountryUpdateInput = inputObjectType({
  name: 'CountryUpdateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('code', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('currency', { type: 'String' })
    t.field('platforms', { type: 'PlatformUpdateManyWithoutCountryInput' })
  },
})

export const CountryUpdateManyMutationInput = inputObjectType({
  name: 'CountryUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('code', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('currency', { type: 'String' })
  },
})

export const PlatformCreateInput = inputObjectType({
  name: 'PlatformCreateInput',
  definition(t) {
    t.field('name', { type: 'String' })
    t.field('bannerImg', { type: 'String' })
    t.field('slug', { type: 'String', nullable: false })
    t.field('description', { type: 'String' })
    t.field('platformType', { type: 'String' })
    t.field('taxRate', { type: 'Float', nullable: false })
    t.field('createdAt', { type: 'DateTime' })
    t.field('owner', {
      type: 'UserCreateOneWithoutPlatformsInput',
      nullable: false,
    })
    t.field('companies', { type: 'CompanyCreateManyWithoutPlatformInput' })
    t.field('categories', { type: 'CategoryCreateManyWithoutPlatformInput' })
    t.field('country', { type: 'CountryCreateOneWithoutPlatformsInput' })
  },
})

export const PlatformUpdateInput = inputObjectType({
  name: 'PlatformUpdateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('bannerImg', { type: 'String' })
    t.field('slug', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('platformType', { type: 'String' })
    t.field('taxRate', { type: 'Float' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('owner', { type: 'UserUpdateOneRequiredWithoutPlatformsInput' })
    t.field('companies', { type: 'CompanyUpdateManyWithoutPlatformInput' })
    t.field('categories', { type: 'CategoryUpdateManyWithoutPlatformInput' })
    t.field('country', { type: 'CountryUpdateOneWithoutPlatformsInput' })
  },
})

export const PlatformUpdateManyMutationInput = inputObjectType({
  name: 'PlatformUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('bannerImg', { type: 'String' })
    t.field('slug', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('platformType', { type: 'String' })
    t.field('taxRate', { type: 'Float' })
    t.field('createdAt', { type: 'DateTime' })
  },
})

export const UserCreateInput = inputObjectType({
  name: 'UserCreateInput',
  definition(t) {
    t.field('id', { type: 'String', nullable: false })
    t.field('createdAt', { type: 'DateTime' })
    t.field('email', { type: 'String', nullable: false })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('token', { type: 'String' })
    t.field('googleId', { type: 'String' })
    t.field('walletId', { type: 'String' })
    t.field('income', { type: 'Float' })
    t.field('username', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('imagePublicId', { type: 'String' })
    t.field('coverImage', { type: 'String' })
    t.field('coverImagePublicId', { type: 'String' })
    t.field('isOnline', { type: 'Boolean' })
    t.field('companies', { type: 'CompanyCreateManyWithoutOwnerInput' })
    t.field('platforms', { type: 'PlatformCreateManyWithoutOwnerInput' })
    t.field('addresses', { type: 'AddressCreateManyWithoutUserInput' })
    t.field('cards', { type: 'CardCreateManyWithoutUserInput' })
    t.field('contacts', { type: 'ContactCreateManyWithoutUserInput' })
    t.field('customers', { type: 'CustomerCreateManyWithoutUserInput' })
    t.field('staffs', { type: 'StaffCreateManyWithoutUserInput' })
  },
})

export const UserUpdateInput = inputObjectType({
  name: 'UserUpdateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('email', { type: 'String' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('token', { type: 'String' })
    t.field('googleId', { type: 'String' })
    t.field('walletId', { type: 'String' })
    t.field('income', { type: 'Float' })
    t.field('username', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('imagePublicId', { type: 'String' })
    t.field('coverImage', { type: 'String' })
    t.field('coverImagePublicId', { type: 'String' })
    t.field('isOnline', { type: 'Boolean' })
    t.field('companies', { type: 'CompanyUpdateManyWithoutOwnerInput' })
    t.field('platforms', { type: 'PlatformUpdateManyWithoutOwnerInput' })
    t.field('addresses', { type: 'AddressUpdateManyWithoutUserInput' })
    t.field('cards', { type: 'CardUpdateManyWithoutUserInput' })
    t.field('contacts', { type: 'ContactUpdateManyWithoutUserInput' })
    t.field('customers', { type: 'CustomerUpdateManyWithoutUserInput' })
    t.field('staffs', { type: 'StaffUpdateManyWithoutUserInput' })
  },
})

export const UserUpdateManyMutationInput = inputObjectType({
  name: 'UserUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('email', { type: 'String' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('token', { type: 'String' })
    t.field('googleId', { type: 'String' })
    t.field('walletId', { type: 'String' })
    t.field('income', { type: 'Float' })
    t.field('username', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('imagePublicId', { type: 'String' })
    t.field('coverImage', { type: 'String' })
    t.field('coverImagePublicId', { type: 'String' })
    t.field('isOnline', { type: 'Boolean' })
  },
})

export const CustomerCreateInput = inputObjectType({
  name: 'CustomerCreateInput',
  definition(t) {
    t.field('firstName', { type: 'String', nullable: false })
    t.field('lastName', { type: 'String', nullable: false })
    t.field('email', { type: 'String', nullable: false })
    t.field('address', { type: 'String' })
    t.field('zipcode', { type: 'String' })
    t.field('city', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('firstSeen', { type: 'DateTime' })
    t.field('lastSeen', { type: 'DateTime' })
    t.field('hasOrdered', { type: 'Boolean' })
    t.field('latestPurchase', { type: 'DateTime' })
    t.field('hasNewsLetter', { type: 'Boolean' })
    t.field('nbOrders', { type: 'Int' })
    t.field('image', { type: 'String' })
    t.field('totalOrder', { type: 'Int' })
    t.field('totalSpent', { type: 'Float' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('groups', { type: 'CustomerCreategroupsInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutCustomerInput' })
    t.field('invoices', { type: 'InvoiceCreateManyWithoutCustomerInput' })
    t.field('orders', { type: 'OrderCreateManyWithoutCustomerInput' })
    t.field('company', { type: 'CompanyCreateOneWithoutCustomersInput' })
    t.field('user', {
      type: 'UserCreateOneWithoutCustomersInput',
      nullable: false,
    })
  },
})

export const CustomerUpdateInput = inputObjectType({
  name: 'CustomerUpdateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('address', { type: 'String' })
    t.field('zipcode', { type: 'String' })
    t.field('city', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('firstSeen', { type: 'DateTime' })
    t.field('lastSeen', { type: 'DateTime' })
    t.field('hasOrdered', { type: 'Boolean' })
    t.field('latestPurchase', { type: 'DateTime' })
    t.field('hasNewsLetter', { type: 'Boolean' })
    t.field('nbOrders', { type: 'Int' })
    t.field('image', { type: 'String' })
    t.field('totalOrder', { type: 'Int' })
    t.field('totalSpent', { type: 'Float' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('groups', { type: 'CustomerUpdategroupsInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutCustomerInput' })
    t.field('invoices', { type: 'InvoiceUpdateManyWithoutCustomerInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutCustomerInput' })
    t.field('company', { type: 'CompanyUpdateOneWithoutCustomersInput' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutCustomersInput' })
  },
})

export const CustomerUpdateManyMutationInput = inputObjectType({
  name: 'CustomerUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('firstName', { type: 'String' })
    t.field('lastName', { type: 'String' })
    t.field('email', { type: 'String' })
    t.field('address', { type: 'String' })
    t.field('zipcode', { type: 'String' })
    t.field('city', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('firstSeen', { type: 'DateTime' })
    t.field('lastSeen', { type: 'DateTime' })
    t.field('hasOrdered', { type: 'Boolean' })
    t.field('latestPurchase', { type: 'DateTime' })
    t.field('hasNewsLetter', { type: 'Boolean' })
    t.field('nbOrders', { type: 'Int' })
    t.field('image', { type: 'String' })
    t.field('totalOrder', { type: 'Int' })
    t.field('totalSpent', { type: 'Float' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('groups', { type: 'CustomerUpdategroupsInput' })
  },
})

export const CategoryCreateInput = inputObjectType({
  name: 'CategoryCreateInput',
  definition(t) {
    t.field('name', { type: 'String', nullable: false })
    t.field('slug', { type: 'String', nullable: false })
    t.field('type', { type: 'String', nullable: false })
    t.field('icon', { type: 'String' })
    t.field('products', { type: 'ProductCreateManyWithoutCategoriesInput' })
    t.field('platform', {
      type: 'PlatformCreateOneWithoutCategoriesInput',
      nullable: false,
    })
    t.field('parent', { type: 'CategoryCreateOneWithoutChildrenInput' })
    t.field('children', { type: 'CategoryCreateManyWithoutParentInput' })
    t.field('companies', { type: 'CompanyCreateManyWithoutCategoriesInput' })
  },
})

export const CategoryUpdateInput = inputObjectType({
  name: 'CategoryUpdateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('slug', { type: 'String' })
    t.field('type', { type: 'String' })
    t.field('icon', { type: 'String' })
    t.field('products', { type: 'ProductUpdateManyWithoutCategoriesInput' })
    t.field('platform', {
      type: 'PlatformUpdateOneRequiredWithoutCategoriesInput',
    })
    t.field('parent', { type: 'CategoryUpdateOneWithoutChildrenInput' })
    t.field('children', { type: 'CategoryUpdateManyWithoutParentInput' })
    t.field('companies', { type: 'CompanyUpdateManyWithoutCategoriesInput' })
  },
})

export const CategoryUpdateManyMutationInput = inputObjectType({
  name: 'CategoryUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('slug', { type: 'String' })
    t.field('type', { type: 'String' })
    t.field('icon', { type: 'String' })
  },
})

export const ProductCreateInput = inputObjectType({
  name: 'ProductCreateInput',
  definition(t) {
    t.field('width', { type: 'Float' })
    t.field('height', { type: 'Float' })
    t.field('price', { type: 'Float' })
    t.field('thumbnail', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('stock', { type: 'Int' })
    t.field('sku', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('slug', { type: 'String', nullable: false })
    t.field('salePrice', { type: 'Float' })
    t.field('discountInPercent', { type: 'Int' })
    t.field('type', { type: 'String', nullable: false })
    t.field('unit', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('gallery', { type: 'ProductCreategalleryInput' })
    t.field('review', { type: 'ReviewCreateManyWithoutProductInput' })
    t.field('orderItems', { type: 'OrderItemCreateManyWithoutProductInput' })
    t.field('company', { type: 'CompanyCreateOneWithoutProductsInput' })
    t.field('categories', { type: 'CategoryCreateManyWithoutProductsInput' })
  },
})

export const ProductUpdateInput = inputObjectType({
  name: 'ProductUpdateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('width', { type: 'Float' })
    t.field('height', { type: 'Float' })
    t.field('price', { type: 'Float' })
    t.field('thumbnail', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('stock', { type: 'Int' })
    t.field('sku', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('slug', { type: 'String' })
    t.field('salePrice', { type: 'Float' })
    t.field('discountInPercent', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('unit', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('gallery', { type: 'ProductUpdategalleryInput' })
    t.field('review', { type: 'ReviewUpdateManyWithoutProductInput' })
    t.field('orderItems', { type: 'OrderItemUpdateManyWithoutProductInput' })
    t.field('company', { type: 'CompanyUpdateOneWithoutProductsInput' })
    t.field('categories', { type: 'CategoryUpdateManyWithoutProductsInput' })
  },
})

export const ProductUpdateManyMutationInput = inputObjectType({
  name: 'ProductUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('width', { type: 'Float' })
    t.field('height', { type: 'Float' })
    t.field('price', { type: 'Float' })
    t.field('thumbnail', { type: 'String' })
    t.field('image', { type: 'String' })
    t.field('description', { type: 'String' })
    t.field('stock', { type: 'Int' })
    t.field('sku', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('slug', { type: 'String' })
    t.field('salePrice', { type: 'Float' })
    t.field('discountInPercent', { type: 'Int' })
    t.field('type', { type: 'String' })
    t.field('unit', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('gallery', { type: 'ProductUpdategalleryInput' })
  },
})

export const OrderItemCreateInput = inputObjectType({
  name: 'OrderItemCreateInput',
  definition(t) {
    t.field('quantity', { type: 'Int', nullable: false })
    t.field('name', { type: 'String' })
    t.field('weight', { type: 'String' })
    t.field('price', { type: 'Float', nullable: false })
    t.field('image', { type: 'String' })
    t.field('order', {
      type: 'OrderCreateOneWithoutOrderItemsInput',
      nullable: false,
    })
    t.field('product', {
      type: 'ProductCreateOneWithoutOrderItemsInput',
      nullable: false,
    })
  },
})

export const OrderItemUpdateInput = inputObjectType({
  name: 'OrderItemUpdateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('quantity', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('weight', { type: 'String' })
    t.field('price', { type: 'Float' })
    t.field('image', { type: 'String' })
    t.field('order', { type: 'OrderUpdateOneRequiredWithoutOrderItemsInput' })
    t.field('product', {
      type: 'ProductUpdateOneRequiredWithoutOrderItemsInput',
    })
  },
})

export const OrderItemUpdateManyMutationInput = inputObjectType({
  name: 'OrderItemUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('quantity', { type: 'Int' })
    t.field('name', { type: 'String' })
    t.field('weight', { type: 'String' })
    t.field('price', { type: 'Float' })
    t.field('image', { type: 'String' })
  },
})

export const OrderCreateInput = inputObjectType({
  name: 'OrderCreateInput',
  definition(t) {
    t.field('reference', { type: 'String' })
    t.field('subtotal', { type: 'Float', nullable: false })
    t.field('deliveryFees', { type: 'Float', nullable: false })
    t.field('taxRate', { type: 'Float', nullable: false })
    t.field('taxes', { type: 'Float', nullable: false })
    t.field('total', { type: 'Float', nullable: false })
    t.field('status', { type: 'String' })
    t.field('returned', { type: 'Boolean' })
    t.field('deliveryTime', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('paymentMethod', { type: 'String', nullable: false })
    t.field('customer', { type: 'CustomerCreateOneWithoutOrdersInput' })
    t.field('invoice', { type: 'InvoiceCreateManyWithoutOrderInput' })
    t.field('reviews', { type: 'ReviewCreateManyWithoutOrderInput' })
    t.field('orderItems', { type: 'OrderItemCreateManyWithoutOrderInput' })
    t.field('company', { type: 'CompanyCreateOneWithoutOrdersInput' })
    t.field('deliveryAdress', {
      type: 'AddressCreateOneWithoutOrdersInput',
      nullable: false,
    })
    t.field('contact', { type: 'ContactCreateOneWithoutOrdersInput' })
  },
})

export const OrderUpdateInput = inputObjectType({
  name: 'OrderUpdateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('reference', { type: 'String' })
    t.field('subtotal', { type: 'Float' })
    t.field('deliveryFees', { type: 'Float' })
    t.field('taxRate', { type: 'Float' })
    t.field('taxes', { type: 'Float' })
    t.field('total', { type: 'Float' })
    t.field('status', { type: 'String' })
    t.field('returned', { type: 'Boolean' })
    t.field('deliveryTime', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('paymentMethod', { type: 'String' })
    t.field('customer', { type: 'CustomerUpdateOneWithoutOrdersInput' })
    t.field('invoice', { type: 'InvoiceUpdateManyWithoutOrderInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutOrderInput' })
    t.field('orderItems', { type: 'OrderItemUpdateManyWithoutOrderInput' })
    t.field('company', { type: 'CompanyUpdateOneWithoutOrdersInput' })
    t.field('deliveryAdress', {
      type: 'AddressUpdateOneRequiredWithoutOrdersInput',
    })
    t.field('contact', { type: 'ContactUpdateOneWithoutOrdersInput' })
  },
})

export const OrderUpdateManyMutationInput = inputObjectType({
  name: 'OrderUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('reference', { type: 'String' })
    t.field('subtotal', { type: 'Float' })
    t.field('deliveryFees', { type: 'Float' })
    t.field('taxRate', { type: 'Float' })
    t.field('taxes', { type: 'Float' })
    t.field('total', { type: 'Float' })
    t.field('status', { type: 'String' })
    t.field('returned', { type: 'Boolean' })
    t.field('deliveryTime', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('paymentMethod', { type: 'String' })
  },
})

export const InvoiceCreateInput = inputObjectType({
  name: 'InvoiceCreateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('subtotal', { type: 'Float' })
    t.field('deliveryFees', { type: 'Float' })
    t.field('taxRate', { type: 'Float' })
    t.field('taxes', { type: 'Float' })
    t.field('total', { type: 'Float' })
    t.field('order', {
      type: 'OrderCreateOneWithoutInvoiceInput',
      nullable: false,
    })
    t.field('customer', {
      type: 'CustomerCreateOneWithoutInvoicesInput',
      nullable: false,
    })
    t.field('company', { type: 'CompanyCreateOneWithoutInvoicesInput' })
  },
})

export const InvoiceUpdateInput = inputObjectType({
  name: 'InvoiceUpdateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('subtotal', { type: 'Float' })
    t.field('deliveryFees', { type: 'Float' })
    t.field('taxRate', { type: 'Float' })
    t.field('taxes', { type: 'Float' })
    t.field('total', { type: 'Float' })
    t.field('order', { type: 'OrderUpdateOneRequiredWithoutInvoiceInput' })
    t.field('customer', {
      type: 'CustomerUpdateOneRequiredWithoutInvoicesInput',
    })
    t.field('company', { type: 'CompanyUpdateOneWithoutInvoicesInput' })
  },
})

export const InvoiceUpdateManyMutationInput = inputObjectType({
  name: 'InvoiceUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('subtotal', { type: 'Float' })
    t.field('deliveryFees', { type: 'Float' })
    t.field('taxRate', { type: 'Float' })
    t.field('taxes', { type: 'Float' })
    t.field('total', { type: 'Float' })
  },
})

export const ReviewCreateInput = inputObjectType({
  name: 'ReviewCreateInput',
  definition(t) {
    t.field('createdAt', { type: 'DateTime' })
    t.field('status', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.field('comment', { type: 'String' })
    t.field('order', { type: 'OrderCreateOneWithoutReviewsInput' })
    t.field('product', { type: 'ProductCreateOneWithoutReviewInput' })
    t.field('customer', { type: 'CustomerCreateOneWithoutReviewsInput' })
    t.field('company', { type: 'CompanyCreateOneWithoutReviewsInput' })
  },
})

export const ReviewUpdateInput = inputObjectType({
  name: 'ReviewUpdateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('status', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.field('comment', { type: 'String' })
    t.field('order', { type: 'OrderUpdateOneWithoutReviewsInput' })
    t.field('product', { type: 'ProductUpdateOneWithoutReviewInput' })
    t.field('customer', { type: 'CustomerUpdateOneWithoutReviewsInput' })
    t.field('company', { type: 'CompanyUpdateOneWithoutReviewsInput' })
  },
})

export const ReviewUpdateManyMutationInput = inputObjectType({
  name: 'ReviewUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('status', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.field('comment', { type: 'String' })
  },
})

export const IntFilter = inputObjectType({
  name: 'IntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.field('not', { type: 'Int' })
    t.field('in', { type: 'Int', list: true })
    t.field('notIn', { type: 'Int', list: true })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
  },
})

export const DateTimeFilter = inputObjectType({
  name: 'DateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.field('not', { type: 'DateTime' })
    t.field('in', { type: 'DateTime', list: true })
    t.field('notIn', { type: 'DateTime', list: true })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
  },
})

export const NullableFloatFilter = inputObjectType({
  name: 'NullableFloatFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.field('not', { type: 'Float' })
    t.field('in', { type: 'Float', list: true })
    t.field('notIn', { type: 'Float', list: true })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
  },
})

export const NullableIntFilter = inputObjectType({
  name: 'NullableIntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.field('not', { type: 'Int' })
    t.field('in', { type: 'Int', list: true })
    t.field('notIn', { type: 'Int', list: true })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
  },
})

export const StringFilter = inputObjectType({
  name: 'StringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.field('not', { type: 'String' })
    t.field('in', { type: 'String', list: true })
    t.field('notIn', { type: 'String', list: true })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
  },
})

export const NullableStringFilter = inputObjectType({
  name: 'NullableStringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.field('not', { type: 'String' })
    t.field('in', { type: 'String', list: true })
    t.field('notIn', { type: 'String', list: true })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
  },
})

export const NullableDateTimeFilter = inputObjectType({
  name: 'NullableDateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.field('not', { type: 'DateTime' })
    t.field('in', { type: 'DateTime', list: true })
    t.field('notIn', { type: 'DateTime', list: true })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
  },
})

export const NullableBooleanFilter = inputObjectType({
  name: 'NullableBooleanFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'Boolean' })
  },
})

export const ReviewFilter = inputObjectType({
  name: 'ReviewFilter',
  definition(t) {
    t.field('every', { type: 'ReviewWhereInput' })
    t.field('some', { type: 'ReviewWhereInput' })
    t.field('none', { type: 'ReviewWhereInput' })
  },
})

export const InvoiceFilter = inputObjectType({
  name: 'InvoiceFilter',
  definition(t) {
    t.field('every', { type: 'InvoiceWhereInput' })
    t.field('some', { type: 'InvoiceWhereInput' })
    t.field('none', { type: 'InvoiceWhereInput' })
  },
})

export const OrderFilter = inputObjectType({
  name: 'OrderFilter',
  definition(t) {
    t.field('every', { type: 'OrderWhereInput' })
    t.field('some', { type: 'OrderWhereInput' })
    t.field('none', { type: 'OrderWhereInput' })
  },
})

export const FloatFilter = inputObjectType({
  name: 'FloatFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.field('not', { type: 'Float' })
    t.field('in', { type: 'Float', list: true })
    t.field('notIn', { type: 'Float', list: true })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
  },
})

export const BooleanFilter = inputObjectType({
  name: 'BooleanFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'Boolean' })
  },
})

export const OrderItemFilter = inputObjectType({
  name: 'OrderItemFilter',
  definition(t) {
    t.field('every', { type: 'OrderItemWhereInput' })
    t.field('some', { type: 'OrderItemWhereInput' })
    t.field('none', { type: 'OrderItemWhereInput' })
  },
})

export const CategoryFilter = inputObjectType({
  name: 'CategoryFilter',
  definition(t) {
    t.field('every', { type: 'CategoryWhereInput' })
    t.field('some', { type: 'CategoryWhereInput' })
    t.field('none', { type: 'CategoryWhereInput' })
  },
})

export const ProductFilter = inputObjectType({
  name: 'ProductFilter',
  definition(t) {
    t.field('every', { type: 'ProductWhereInput' })
    t.field('some', { type: 'ProductWhereInput' })
    t.field('none', { type: 'ProductWhereInput' })
  },
})

export const CompanyFilter = inputObjectType({
  name: 'CompanyFilter',
  definition(t) {
    t.field('every', { type: 'CompanyWhereInput' })
    t.field('some', { type: 'CompanyWhereInput' })
    t.field('none', { type: 'CompanyWhereInput' })
  },
})

export const PlatformFilter = inputObjectType({
  name: 'PlatformFilter',
  definition(t) {
    t.field('every', { type: 'PlatformWhereInput' })
    t.field('some', { type: 'PlatformWhereInput' })
    t.field('none', { type: 'PlatformWhereInput' })
  },
})

export const AddressFilter = inputObjectType({
  name: 'AddressFilter',
  definition(t) {
    t.field('every', { type: 'AddressWhereInput' })
    t.field('some', { type: 'AddressWhereInput' })
    t.field('none', { type: 'AddressWhereInput' })
  },
})

export const CardFilter = inputObjectType({
  name: 'CardFilter',
  definition(t) {
    t.field('every', { type: 'CardWhereInput' })
    t.field('some', { type: 'CardWhereInput' })
    t.field('none', { type: 'CardWhereInput' })
  },
})

export const ContactFilter = inputObjectType({
  name: 'ContactFilter',
  definition(t) {
    t.field('every', { type: 'ContactWhereInput' })
    t.field('some', { type: 'ContactWhereInput' })
    t.field('none', { type: 'ContactWhereInput' })
  },
})

export const CustomerFilter = inputObjectType({
  name: 'CustomerFilter',
  definition(t) {
    t.field('every', { type: 'CustomerWhereInput' })
    t.field('some', { type: 'CustomerWhereInput' })
    t.field('none', { type: 'CustomerWhereInput' })
  },
})

export const StaffFilter = inputObjectType({
  name: 'StaffFilter',
  definition(t) {
    t.field('every', { type: 'StaffWhereInput' })
    t.field('some', { type: 'StaffWhereInput' })
    t.field('none', { type: 'StaffWhereInput' })
  },
})

export const AddressOrderByInput = inputObjectType({
  name: 'AddressOrderByInput',
  definition(t) {
    t.field('id', { type: 'OrderByArg' })
    t.field('type', { type: 'OrderByArg' })
    t.field('name', { type: 'OrderByArg' })
    t.field('json', { type: 'OrderByArg' })
    t.field('info', { type: 'OrderByArg' })
    t.field('companyId', { type: 'OrderByArg' })
    t.field('userId', { type: 'OrderByArg' })
  },
})

export const CompanyOrderByInput = inputObjectType({
  name: 'CompanyOrderByInput',
  definition(t) {
    t.field('id', { type: 'OrderByArg' })
    t.field('slug', { type: 'OrderByArg' })
    t.field('name', { type: 'OrderByArg' })
    t.field('description', { type: 'OrderByArg' })
    t.field('previewUrl', { type: 'OrderByArg' })
    t.field('thumbnailUrl', { type: 'OrderByArg' })
    t.field('platformSlug', { type: 'OrderByArg' })
    t.field('addressId', { type: 'OrderByArg' })
    t.field('contactId', { type: 'OrderByArg' })
    t.field('platformId', { type: 'OrderByArg' })
    t.field('ownerId', { type: 'OrderByArg' })
    t.field('deliveryDetailId', { type: 'OrderByArg' })
    t.field('promotion', { type: 'OrderByArg' })
    t.field('createdAt', { type: 'OrderByArg' })
    t.field('updatedAt', { type: 'OrderByArg' })
  },
})

export const PlatformOrderByInput = inputObjectType({
  name: 'PlatformOrderByInput',
  definition(t) {
    t.field('id', { type: 'OrderByArg' })
    t.field('name', { type: 'OrderByArg' })
    t.field('bannerImg', { type: 'OrderByArg' })
    t.field('slug', { type: 'OrderByArg' })
    t.field('ownerId', { type: 'OrderByArg' })
    t.field('description', { type: 'OrderByArg' })
    t.field('platformType', { type: 'OrderByArg' })
    t.field('countryId', { type: 'OrderByArg' })
    t.field('taxRate', { type: 'OrderByArg' })
    t.field('createdAt', { type: 'OrderByArg' })
  },
})

export const CategoryOrderByInput = inputObjectType({
  name: 'CategoryOrderByInput',
  definition(t) {
    t.field('id', { type: 'OrderByArg' })
    t.field('name', { type: 'OrderByArg' })
    t.field('platformId', { type: 'OrderByArg' })
    t.field('slug', { type: 'OrderByArg' })
    t.field('type', { type: 'OrderByArg' })
    t.field('icon', { type: 'OrderByArg' })
    t.field('parentId', { type: 'OrderByArg' })
  },
})

export const ProductOrderByInput = inputObjectType({
  name: 'ProductOrderByInput',
  definition(t) {
    t.field('id', { type: 'OrderByArg' })
    t.field('width', { type: 'OrderByArg' })
    t.field('height', { type: 'OrderByArg' })
    t.field('price', { type: 'OrderByArg' })
    t.field('thumbnail', { type: 'OrderByArg' })
    t.field('image', { type: 'OrderByArg' })
    t.field('description', { type: 'OrderByArg' })
    t.field('stock', { type: 'OrderByArg' })
    t.field('companyId', { type: 'OrderByArg' })
    t.field('sku', { type: 'OrderByArg' })
    t.field('name', { type: 'OrderByArg' })
    t.field('slug', { type: 'OrderByArg' })
    t.field('salePrice', { type: 'OrderByArg' })
    t.field('discountInPercent', { type: 'OrderByArg' })
    t.field('type', { type: 'OrderByArg' })
    t.field('unit', { type: 'OrderByArg' })
    t.field('createdAt', { type: 'OrderByArg' })
  },
})

export const ReviewOrderByInput = inputObjectType({
  name: 'ReviewOrderByInput',
  definition(t) {
    t.field('id', { type: 'OrderByArg' })
    t.field('createdAt', { type: 'OrderByArg' })
    t.field('status', { type: 'OrderByArg' })
    t.field('orderId', { type: 'OrderByArg' })
    t.field('productId', { type: 'OrderByArg' })
    t.field('customerId', { type: 'OrderByArg' })
    t.field('rating', { type: 'OrderByArg' })
    t.field('comment', { type: 'OrderByArg' })
    t.field('companyId', { type: 'OrderByArg' })
  },
})

export const InvoiceOrderByInput = inputObjectType({
  name: 'InvoiceOrderByInput',
  definition(t) {
    t.field('id', { type: 'OrderByArg' })
    t.field('createdAt', { type: 'OrderByArg' })
    t.field('orderId', { type: 'OrderByArg' })
    t.field('customerId', { type: 'OrderByArg' })
    t.field('subtotal', { type: 'OrderByArg' })
    t.field('deliveryFees', { type: 'OrderByArg' })
    t.field('taxRate', { type: 'OrderByArg' })
    t.field('taxes', { type: 'OrderByArg' })
    t.field('total', { type: 'OrderByArg' })
    t.field('companyId', { type: 'OrderByArg' })
  },
})

export const OrderOrderByInput = inputObjectType({
  name: 'OrderOrderByInput',
  definition(t) {
    t.field('id', { type: 'OrderByArg' })
    t.field('reference', { type: 'OrderByArg' })
    t.field('customerId', { type: 'OrderByArg' })
    t.field('subtotal', { type: 'OrderByArg' })
    t.field('deliveryFees', { type: 'OrderByArg' })
    t.field('taxRate', { type: 'OrderByArg' })
    t.field('taxes', { type: 'OrderByArg' })
    t.field('total', { type: 'OrderByArg' })
    t.field('status', { type: 'OrderByArg' })
    t.field('returned', { type: 'OrderByArg' })
    t.field('companyId', { type: 'OrderByArg' })
    t.field('deliveryTime', { type: 'OrderByArg' })
    t.field('createdAt', { type: 'OrderByArg' })
    t.field('paymentMethod', { type: 'OrderByArg' })
    t.field('deliveryAddressId', { type: 'OrderByArg' })
    t.field('contactId', { type: 'OrderByArg' })
  },
})

export const OrderItemOrderByInput = inputObjectType({
  name: 'OrderItemOrderByInput',
  definition(t) {
    t.field('id', { type: 'OrderByArg' })
    t.field('orderId', { type: 'OrderByArg' })
    t.field('quantity', { type: 'OrderByArg' })
    t.field('name', { type: 'OrderByArg' })
    t.field('weight', { type: 'OrderByArg' })
    t.field('price', { type: 'OrderByArg' })
    t.field('productId', { type: 'OrderByArg' })
    t.field('image', { type: 'OrderByArg' })
  },
})

export const CardOrderByInput = inputObjectType({
  name: 'CardOrderByInput',
  definition(t) {
    t.field('id', { type: 'OrderByArg' })
    t.field('type', { type: 'OrderByArg' })
    t.field('cardType', { type: 'OrderByArg' })
    t.field('name', { type: 'OrderByArg' })
    t.field('lastFourDigit', { type: 'OrderByArg' })
    t.field('userId', { type: 'OrderByArg' })
  },
})

export const ContactOrderByInput = inputObjectType({
  name: 'ContactOrderByInput',
  definition(t) {
    t.field('id', { type: 'OrderByArg' })
    t.field('type', { type: 'OrderByArg' })
    t.field('number', { type: 'OrderByArg' })
    t.field('companyId', { type: 'OrderByArg' })
    t.field('userId', { type: 'OrderByArg' })
  },
})

export const CustomerOrderByInput = inputObjectType({
  name: 'CustomerOrderByInput',
  definition(t) {
    t.field('id', { type: 'OrderByArg' })
    t.field('firstName', { type: 'OrderByArg' })
    t.field('lastName', { type: 'OrderByArg' })
    t.field('email', { type: 'OrderByArg' })
    t.field('address', { type: 'OrderByArg' })
    t.field('zipcode', { type: 'OrderByArg' })
    t.field('city', { type: 'OrderByArg' })
    t.field('avatar', { type: 'OrderByArg' })
    t.field('birthday', { type: 'OrderByArg' })
    t.field('firstSeen', { type: 'OrderByArg' })
    t.field('lastSeen', { type: 'OrderByArg' })
    t.field('hasOrdered', { type: 'OrderByArg' })
    t.field('latestPurchase', { type: 'OrderByArg' })
    t.field('hasNewsLetter', { type: 'OrderByArg' })
    t.field('nbOrders', { type: 'OrderByArg' })
    t.field('companyId', { type: 'OrderByArg' })
    t.field('userId', { type: 'OrderByArg' })
    t.field('image', { type: 'OrderByArg' })
    t.field('totalOrder', { type: 'OrderByArg' })
    t.field('totalSpent', { type: 'OrderByArg' })
    t.field('createdAt', { type: 'OrderByArg' })
  },
})

export const StaffOrderByInput = inputObjectType({
  name: 'StaffOrderByInput',
  definition(t) {
    t.field('id', { type: 'OrderByArg' })
    t.field('userId', { type: 'OrderByArg' })
    t.field('companyId', { type: 'OrderByArg' })
    t.field('role', { type: 'OrderByArg' })
    t.field('createdAt', { type: 'OrderByArg' })
    t.field('firstName', { type: 'OrderByArg' })
    t.field('lastName', { type: 'OrderByArg' })
    t.field('contactId', { type: 'OrderByArg' })
    t.field('email', { type: 'OrderByArg' })
  },
})

export const DeliveryDetailOrderByInput = inputObjectType({
  name: 'DeliveryDetailOrderByInput',
  definition(t) {
    t.field('id', { type: 'OrderByArg' })
    t.field('isFree', { type: 'OrderByArg' })
    t.field('charge', { type: 'OrderByArg' })
    t.field('minimumOrder', { type: 'OrderByArg' })
    t.field('companyId', { type: 'OrderByArg' })
  },
})

export const CouponOrderByInput = inputObjectType({
  name: 'CouponOrderByInput',
  definition(t) {
    t.field('id', { type: 'OrderByArg' })
    t.field('name', { type: 'OrderByArg' })
    t.field('code', { type: 'OrderByArg' })
    t.field('image', { type: 'OrderByArg' })
    t.field('discountInPercent', { type: 'OrderByArg' })
    t.field('numberOfCoupon', { type: 'OrderByArg' })
    t.field('numberOfUsedCoupon', { type: 'OrderByArg' })
  },
})

export const CountryOrderByInput = inputObjectType({
  name: 'CountryOrderByInput',
  definition(t) {
    t.field('id', { type: 'OrderByArg' })
    t.field('code', { type: 'OrderByArg' })
    t.field('name', { type: 'OrderByArg' })
    t.field('currency', { type: 'OrderByArg' })
  },
})

export const UserOrderByInput = inputObjectType({
  name: 'UserOrderByInput',
  definition(t) {
    t.field('id', { type: 'OrderByArg' })
    t.field('createdAt', { type: 'OrderByArg' })
    t.field('email', { type: 'OrderByArg' })
    t.field('firstName', { type: 'OrderByArg' })
    t.field('lastName', { type: 'OrderByArg' })
    t.field('token', { type: 'OrderByArg' })
    t.field('googleId', { type: 'OrderByArg' })
    t.field('walletId', { type: 'OrderByArg' })
    t.field('income', { type: 'OrderByArg' })
    t.field('username', { type: 'OrderByArg' })
    t.field('image', { type: 'OrderByArg' })
    t.field('imagePublicId', { type: 'OrderByArg' })
    t.field('coverImage', { type: 'OrderByArg' })
    t.field('coverImagePublicId', { type: 'OrderByArg' })
    t.field('isOnline', { type: 'OrderByArg' })
  },
})
