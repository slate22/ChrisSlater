import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: (window as any).wpData?.graphqlUrl || 'http://localhost:8000/graphql', // Fallback for local dev
    cache: new InMemoryCache(),
});
