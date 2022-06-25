import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4rzf6pu1rrs01yw92cb8rlw/master",
  cache: new InMemoryCache(),
});
