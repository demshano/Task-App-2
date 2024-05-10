<script>
    import { Client, setContextClient, cacheExchange, fetchExchange } from '@urql/svelte';
    import CreateTodoForm from '../lib/components/CreateTodoForm.svelte';
    import DisplayToDos from '../lib/components/DisplayToDos.svelte';

const client = new Client({
  url: 'http://localhost:8080/query',
  exchanges: [cacheExchange, fetchExchange],
});

setContextClient(client);
</script>

<CreateTodoForm />
<p>display todos</p>
<DisplayToDos />