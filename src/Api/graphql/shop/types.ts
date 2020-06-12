import { objectType, stringArg, intArg, enumType, scalarType, extendType } from '@nexus/schema'
import { Product, Address, User, Card, Company, Category, Order, Coupon } from '../models'
import { ProductWhereInput } from 'generated'
// const Address = objectType({
//   name: "Address",
//   definition(t) {
//     t.string("id")
//     t.string("type")
//     t.string("name")
//     t.string("info")
//   }
// })
// const Author = objectType({
//   name: "Author",
//   definition(t) {
//     t.id("id")
//     t.string("name")
//     t.string("avatar")
//     t.string("bio")
//     t.string("email")
//     t.string("website")
//     t.list.field("socials", { type: Social })
//   }
// })
// const Card = objectType({
//   name: "Card",
//   definition(t) {
//     t.string("id")
//     t.string("type")
//     t.string("name")
//     t.string("cardType")
//     t.float("lastFourDigit")
//   }
// })
// const Category = objectType({
//   name: "Category",
//   definition(t) {
//     t.int("id")
//     t.string("title")
//     t.list.field("children", {
//       type: Category,
//       nullable: true,
//     })
//     t.string("type")
//     t.string("icon", { nullable: true })
//     t.string("slug")
//     t.int("itemCount", { nullable: true })
//   }
// })
// const Contact = objectType({
//   name: "Contact",
//   definition(t) {
//     t.string("id")
//     t.string("type")
//     t.string("number")
//   }
// })
// const Coupon = objectType({
//   name: "Coupon",
//   definition(t) {
//     t.float("id")
//     t.string("code")
//     t.string("image", { nullable: true })
//     t.float("discountInPercent")
//   }
// })
// const DeliveryDetails = objectType({
//   name: "DeliveryDetails",
//   definition(t) {
//     t.string("charge")
//     t.string("maximumDistance", { nullable: true })
//     t.int("minimumOrder", { nullable: true })
//     t.boolean("isFree", { nullable: true })
//   }
// })
const Gallery = objectType({
  name: 'Gallery',
  definition(t) {
    t.string('url')
  },
})
const Meta = objectType({
  name: 'Meta',
  definition(t) {
    t.string('publisher')
    t.string('isbn')
    t.string('edition')
    t.string('country')
    t.list.string('languages')
    t.string('numberOfReader')
    t.string('numberOfPage')
    t.string('samplePDF')
  },
})
export const Mutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('updateMe', {
      type: User,
      args: {
        meInput: stringArg({ required: true }),
      },
    })
    t.field('updateAddress', {
      type: User,
      args: {
        addressInput: stringArg({ required: true }),
      },
    })
    t.field('updateContact', {
      type: User,
      args: {
        contactInput: stringArg({ required: true }),
      },
    })
    t.field('deleteAddress', {
      type: User,
      args: {
        addressId: stringArg({ required: true }),
      },
    })
    t.field('deleteContact', {
      type: User,
      args: {
        contactId: stringArg({ required: true }),
      },
    })
    t.field('addPaymentCard', {
      type: User,
      args: {
        cardInput: stringArg({ required: true }),
      },
    })
    t.field('deletePaymentCard', {
      type: User,
      args: {
        cardId: stringArg({ required: true }),
      },
    })
    t.field('charge', {
      type: Payment,
      args: {
        paymentInput: stringArg({ required: true }),
      },
    })
    t.field('addOrder', {
      type: Order,
      args: {
        orderInput: stringArg({ required: true }),
      },
    })
    t.field('applyCoupon', {
      type: Coupon,
      args: {
        code: stringArg({ required: true }),
      },
    })
  },
})
// const Order = objectType({
//   name: "Order",
//   definition(t) {
//     t.float("id")
//     t.float("userId")
//     t.list.field("products", { type: OrderProduct })
//     t.string("status")
//     t.string("deliveryTime")
//     t.string("amount")
//     t.string("subtotal")
//     t.string("discount")
//     t.string("deliveryFee")
//     t.string("deliveryAddress")
//     t.string("date")
//   }
// })
// const OrderProduct = objectType({
//   name: "OrderProduct",
//   definition(t) {
//     t.float("id")
//     t.string("title")
//     t.string("image")
//     t.list.field("categories", { type: Category })
//     t.float("price")
//     t.string("weight")
//     t.float("quantity")
//     t.float("total")
//     t.string("type")
//   }
// })
const Payment = objectType({
  name: 'Payment',
  definition(t) {
    t.string('status')
  },
})
// const Product = objectType({
//   name: "Product",
//   definition(t) {
//     t.float("id")
//     t.string("slug")
//     t.string("title")
//     t.string("type")
//     // t.field("type", { type: ProductType })

//     t.list.field("categories", { type: Category })
//     t.string("unit")
//     t.string("image")
//     t.list.field("gallery", { type: Gallery })
//     t.string("description")
//     t.float("price")
//     t.float("salePrice")
//     t.float("discountInPercent")
//     t.field("author", {
//       type: Author,
//       nullable: true,
//     })
//     t.field("meta", {
//       type: Meta,
//       nullable: true,
//     })
//     t.field("createdAt", { type: DateTime })
//   }
// })
const ProductResponse = objectType({
  name: 'ProductResponse',
  definition(t) {
    t.list.field('items', { type: Product })
    t.int('total')
    t.boolean('hasMore')
  },
})
export const Query = extendType({
  type: 'Query',
  definition(t) {
    t.field('products', {
      type: ProductResponse,
      args: {
        category: stringArg(),
        text: stringArg(),
        type: stringArg(),
        offset: intArg({ default: 0 }),
        limit: intArg({ default: 10 }),
      },
      resolve: async (_, { category, text, type, offset, limit }, { prisma, user }) => {
        const where: ProductWhereInput = {}
        if (type) {
          where.type = {
            equals: type,
          }
        }
        if (category) {
          where.categories = {
            some: {
              slug: {
                startsWith: category,
              },
            },
          }
        }

        if (text) {
          where.name = {
            contains: text,
          }
        }
        const products = await prisma.product.findMany({
          where,
          include: {
            categories: true,
          },
          take: limit,
          skip: offset,
        })
        const count = await prisma.product.count({
          where: {
            type: {
              equals: type,
            },
          },
        })
        return {
          items: products,
          total: count,
          hasMore: limit + offset > count ? false : true,
        }
      },
    })
    t.field('product', {
      type: Product,
      args: {
        slug: stringArg({ required: true }),
      },
      resolve: async (_, { slug }, { prisma }) => {
        const product = await prisma.product.findOne({
          where: {
            slug,
          },
          include: {
            categories: true,
          },
        })
        return product
      },
    })
    t.list.field('relatedProducts', {
      type: Product,
      args: {
        type: stringArg(),
        slug: stringArg({ required: true }),
      },
      resolve: async (_, { slug, type }, { prisma }) => {
        const products = await prisma.product.findMany({
          where: {
            type: {
              equals: type,
            },
          },
        })
        return products
      },
    })
    t.list.field('orders', {
      type: Order,
      args: {
        limit: intArg({ default: 7 }),
        // text: stringArg(),
        // user: intArg({ required: true }),
      },
      resolve: async (_, { limit }, { prisma, user }) => {
        const orders = await prisma.order.findMany({
          where: {
            customer: {
              user: {
                id: user.user_id,
              },
            },
          },
          take: limit,
        })
        return orders
      },
    })
    t.field('order', {
      type: Order,
      args: {
        id: intArg({ required: true }),
      },
      resolve: async (_, { id }, { prisma, userId }) => {
        const order = await prisma.order.findOne({
          where: {
            id,
          },
          include: {
            customer: true,
          },
        })
        if (order.customer.userId === userId) {
          return order
        } else {
          throw new Error('The order doesnt belong to the calling persons id')
        }
      },
    })
    t.list.field('coupons', { type: Coupon })
    t.list.field('categories', {
      type: Category,
      args: {
        type: stringArg({ required: true }),
      },
      resolve: async (_, { type }, { prisma }) => {
        const categories = await prisma.category.findMany({
          where: {
            type: {
              equals: type,
            },
            children: {
              every: {},
            },
          },
          include: {
            children: true,
          },
        })
        console.log(categories)
        const topLevelCategories = []
        for (let index = 0; index < categories.length; index++) {
          const element = categories[index]
          if (!element.parentId) {
            topLevelCategories.push(element)
          }
        }
        return topLevelCategories
      },
    })
    t.field('category', {
      type: Category,
      args: {
        id: intArg({ required: true }),
      },
      resolve: async (_, { id }, { prisma }) => {
        const category = await prisma.category.findOne({
          where: {
            id,
          },
        })
        return category
      },
    })
    t.field('vendors', {
      type: Vendors,
      args: {
        limit: intArg({ default: 10 }),
        offset: intArg({ default: 0 }),
        type: stringArg(),
        text: stringArg(),
        category: stringArg(),
      },
      resolve: async (_, { limit, offset, type, text, category }, { prisma }) => {
        const companies = await prisma.company.findMany({
          where: {
            platform: {
              slug: type,
            },
            categories: {
              some: {
                slug: {
                  equals: category,
                },
              },
            },
            name: {
              contains: text,
            },
          },
          include: {
            categories: true,
            deliveryDetail: true,
          },
          take: limit,
          skip: offset,
        })
        const count = await prisma.company.count({
          where: {
            platform: {
              slug: type,
            },
          },
        })
        return { items: companies, hasMore: limit + offset > count ? false : true, totalCount: count }
      },
    })
    t.field('vendor', {
      type: Company,
      args: {
        slug: stringArg({ required: true }),
      },
      resolve: async (_, { slug }, { prisma }) => {
        const company = await prisma.company.findOne({
          where: {
            slug,
          },
          include: {
            categories: true,
            deliveryDetail: true,
            products: true,
          },
        })
        return company
      },
    })
  },
})
const Social = objectType({
  name: 'Social',
  definition(t) {
    t.id('id')
    t.string('media')
    t.string('profileLink')
  },
})
// const User = objectType({
//   name: "User",
//   definition(t) {
//     t.int("id")
//     t.string("name")
//     t.string("email")
//     t.list.field("address", { type: Address })
//     t.list.field("contact", { type: Contact })
//     t.list.field("card", { type: Card })
//   }
// })
// const Vendor = objectType({
//   name: "Vendor",
//   definition(t) {
//     t.id("id")
//     t.string("slug")
//     t.string("type")
//     t.list.string("categories")
//     t.string("name")
//     t.string("logoUrl", { nullable: true })
//     t.string("thumbnailUrl")
//     t.string("previewUrl")
//     t.string("slogan", { nullable: true })
//     t.string("description")
//     t.string("address", { nullable: true })
//     t.field("deliveryDetails", { type: DeliveryDetails })
//     t.string("promotion", { nullable: true })
//     t.list.string("owners", { nullable: true })
//     t.list.field("products", {
//       type: VendorProduct,
//       nullable: true,
//     })
//     t.field("createdAt", { type: DateTime })
//     t.field("updatedAt", { type: DateTime })
//   }
// })
// const VendorProduct = objectType({
//   name: "VendorProduct",
//   definition(t) {
//     t.id("id")
//     t.id("vendorId", { nullable: true })
//     t.string("name")
//     t.string("type")
//     t.string("categories", { nullable: true })
//     t.string("description", { nullable: true })
//     t.int("price")
//     t.field("createdAt", {
//       type: DateTime,
//       nullable: true,
//     })
//     t.field("updatedAt", {
//       type: DateTime,
//       nullable: true,
//     })
//   }
// })
const Vendors = objectType({
  name: 'Vendors',
  definition(t) {
    t.list.field('items', {
      type: Company,
      nullable: true,
    })
    t.int('totalCount', { nullable: true })
    t.boolean('hasMore')
  },
})

// const ProductType = enumType({
//   name: "ProductType",
//   members: ['BOOK', 'BAGS', 'GROCERY', 'MEDICINE', 'CLOTH', 'CLOTHING', 'FURNITURE', 'MAKEUP'],
// });

// const DateTime = scalarType({
//   name: "DateTime",
//   serialize() { /* Todo */ },
//   parseValue() { /* Todo */ },
//   parseLiteral() { /* Todo */ }
// });
