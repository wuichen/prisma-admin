import { extendType, stringArg, objectType } from '@nexus/schema'
// import { compare, hash } from 'bcryptjs'
// import { sign } from 'jsonwebtoken'
// import { JWT_SECRET } from '../utils'
// import cookie from 'cookie'
// import { UserInputError } from 'apollo-server-micro'
import firebaseAdmin from '../../../lib/firebase/admin'
import firebase from '../../../lib/firebase/client'
import { EXPIRES_IN } from '../../../constants/cookie'

// export const AuthPayload = objectType({
//   name: 'AuthPayload',
//   definition(t) {
//     t.string('token')
//     t.field('user', { type: 'User' })
//   },
// })

export const AuthQueries = extendType({
  type: 'Query',
  definition(t) {
    t.field('me', {
      type: 'User',
      nullable: true,
      resolve: async (_, __, { prisma, select, user }) => {
        if (!user) return null
        return prisma.user.findOne({
          where: {
            id: user.sub,
          },
          ...select,
        })
      },
    })
  },
})

export const AuthMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('signup', {
      type: 'User',
      args: {
        idToken: stringArg({ nullable: false }),
      },
      resolve: async (_parent, { idToken }, ctx) => {
        let result

        try {
          result = await firebaseAdmin.auth().verifyIdToken(idToken)
        } catch (error) {
          throw new Error(error)
        }

        if (!result) {
          throw new Error('No user found.')
        }

        const dbUser = await ctx.prisma.user.create({
          data: {
            id: result.user_id,
            email: result.email,
          },
        })

        const token = await firebaseAdmin.auth().createSessionCookie(idToken, { expiresIn: EXPIRES_IN })

        if (!token) {
          throw new Error('Not able to create a session cookie.')
        }

        ctx.res.setHeader('Set-Cookie', `session=${token}`)

        // We manage the session ourselves.
        await firebase.auth().signOut()

        return dbUser
      },
    })
    t.field('login', {
      type: 'User',
      nullable: true,
      args: {
        idToken: stringArg({ nullable: false }),
      },
      resolve: async (_parent, { idToken }, ctx) => {
        let result

        try {
          result = await firebaseAdmin.auth().verifyIdToken(idToken)
        } catch (error) {
          throw new Error(error)
        }

        if (!result) {
          throw new Error('No user found.')
        }

        const dbUser = await ctx.prisma.user.findOne({
          where: {
            id: result.user_id,
          },
        })

        const token = await firebaseAdmin.auth().createSessionCookie(idToken, {
          expiresIn: EXPIRES_IN,
        })

        if (!token) {
          throw new Error('Not able to create a session cookie.')
        }

        // We manage the session ourselves.
        await firebase.auth().signOut()
        ctx.res.setHeader('Set-Cookie', `session=${token}`)

        return dbUser
      },
    })
    t.field('logout', {
      type: 'Boolean',
      resolve(_parent, _args, ctx) {
        ctx.res.setHeader('Set-Cookie', `session=`)
        return true
      },
    })
    // t.field('updatePassword', {
    //   type: 'Boolean',
    //   args: {
    //     currentPassword: stringArg({ nullable: false }),
    //     password: stringArg({ nullable: false }),
    //   },
    //   resolve: async (_, { currentPassword, password }, ctx) => {
    //     if (currentPassword && password) {
    //       // get current user and verify currentPassword before changing;
    //       const user = await ctx.prisma.user.findOne({
    //         where: { id: ctx.userId },
    //         select: { password: true },
    //       })
    //       if (!user) {
    //         return false
    //       }
    //       const validPass = await compare(currentPassword, user.password)
    //       if (!validPass) throw new UserInputError('Incorrect Current Password, Error: 1015')
    //       const hashPassword = await hash(password, 10)

    //       await ctx.prisma.user.update({
    //         data: { password: hashPassword },
    //         where: { id: ctx.userId },
    //       })
    //       return true
    //     }
    //     return false
    //   },
    // })
  },
})
