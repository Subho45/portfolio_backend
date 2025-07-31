import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://your-backend.onrender.com/graphql', // 🔁 Replace with your Render backend URL
  cache: new InMemoryCache(),
});

export default client;
