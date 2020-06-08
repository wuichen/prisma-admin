export * from './models'
export * from './auth/index'
export * from './inputTypes'
// export * from './Auth'

import { adminNexusSettings } from '@prisma-tools/nexus/dist/adminSettings'
export const adminSettings = adminNexusSettings()
