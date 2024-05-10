import { Client, cacheExchange, fetchExchange } from '@urql/svelte';

const client = new Client({
  url: 'http://localhost:8080/query',
  exchanges: [cacheExchange, fetchExchange],
});

export default client