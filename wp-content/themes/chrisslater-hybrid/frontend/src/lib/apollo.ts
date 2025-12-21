import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const client = new ApolloClient({
    link: new HttpLink({
        uri: (window as any).wpData?.graphqlUrl || 'https://secure.allcleardigital.com/graphql',
    }),
    cache: new InMemoryCache(),
});
