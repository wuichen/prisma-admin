import { objectType } from '@nexus/schema'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id', { nullable: false })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.string('email', { nullable: false })
    t.string('firstName', { nullable: true })
    t.string('lastName', { nullable: true })
    t.string('token', { nullable: true })
    t.string('googleId', { nullable: true })
    t.string('walletId', { nullable: true })
    t.float('income', { nullable: true })
    t.string('username', { nullable: true })
    t.string('image', { nullable: true })
    t.string('imagePublicId', { nullable: true })
    t.string('coverImage', { nullable: true })
    t.string('coverImagePublicId', { nullable: true })
    t.boolean('isOnline', { nullable: false })
    t.field('companies', {
      nullable: false,
      list: [true],
      type: 'Company',
      args: {
        where: 'CompanyWhereInput',
        orderBy: 'CompanyOrderByInput',
        cursor: 'CompanyWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
      },
      resolve(parent: any) {
        return parent['companies']
      },
    })
    t.field('platforms', {
      nullable: false,
      list: [true],
      type: 'Platform',
      args: {
        where: 'PlatformWhereInput',
        orderBy: 'PlatformOrderByInput',
        cursor: 'PlatformWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
      },
      resolve(parent: any) {
        return parent['platforms']
      },
    })
    t.field('addresses', {
      nullable: false,
      list: [true],
      type: 'Address',
      args: {
        where: 'AddressWhereInput',
        orderBy: 'AddressOrderByInput',
        cursor: 'AddressWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
      },
      resolve(parent: any) {
        return parent['addresses']
      },
    })
    t.field('cards', {
      nullable: false,
      list: [true],
      type: 'Card',
      args: {
        where: 'CardWhereInput',
        orderBy: 'CardOrderByInput',
        cursor: 'CardWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
      },
      resolve(parent: any) {
        return parent['cards']
      },
    })
    t.field('contacts', {
      nullable: false,
      list: [true],
      type: 'Contact',
      args: {
        where: 'ContactWhereInput',
        orderBy: 'ContactOrderByInput',
        cursor: 'ContactWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
      },
      resolve(parent: any) {
        return parent['contacts']
      },
    })
    t.field('customers', {
      nullable: false,
      list: [true],
      type: 'Customer',
      args: {
        where: 'CustomerWhereInput',
        orderBy: 'CustomerOrderByInput',
        cursor: 'CustomerWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
      },
      resolve(parent: any) {
        return parent['customers']
      },
    })
    t.field('staffs', {
      nullable: false,
      list: [true],
      type: 'Staff',
      args: {
        where: 'StaffWhereInput',
        orderBy: 'StaffOrderByInput',
        cursor: 'StaffWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
      },
      resolve(parent: any) {
        return parent['staffs']
      },
    })
  },
})
