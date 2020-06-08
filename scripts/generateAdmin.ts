// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { buildSettingsSchema, generatePages, generateGraphql } from '@prisma-tools/admin/dist/generateAdmin';

buildSettingsSchema('./prisma/');

generatePages({ outPut: 'src/pages/admin/models/' });

generateGraphql({ graphqlOutput: 'src/graphql/generated' });
