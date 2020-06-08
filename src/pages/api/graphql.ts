import { ApolloServer } from 'apollo-server-micro';
import { schema } from 'Api/schema';
import { createContext } from 'Api/context';
import meMiddleware from 'Api/middleware/me';
const apolloServer = new ApolloServer({
  schema,
  context: createContext,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default meMiddleware(apolloServer.createHandler({ path: '/api/graphql' }));
