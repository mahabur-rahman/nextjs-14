// src/utils/apollo-client.ts
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Create Apollo Client
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8000/graphql', // Your GraphQL endpoint
  }),
  cache: new InMemoryCache(),
});

// Export client instance
export default client;
