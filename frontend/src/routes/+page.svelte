<script>
    import { Client, setContextClient, cacheExchange, fetchExchange } from '@urql/svelte';
    import CreateTodoForm from '../lib/components/CreateTodoForm.svelte';
    import DisplayToDos from '../lib/components/DisplayToDos.svelte';

const client = new Client({
  url: 'http://localhost:8080/query',
  exchanges: [cacheExchange, fetchExchange],
});

setContextClient(client);

let time = new Date().toLocaleTimeString();
  let intervalId;

  function updateTime() {
    time = new Date().toLocaleTimeString();
  }

  intervalId = setInterval(updateTime, 1000);

</script>
<p class="text-4xl font-bold flex justify-center mt-4 mb-8">TaskTracker Plus</p>
<p class="text-3xl flex sm:justify-end mr-4 justify-center mb-2">{time}</p>
<CreateTodoForm />

<DisplayToDos />