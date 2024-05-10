<script>
    import UpdateToDoForm from './UpdateToDoForm.svelte';
    import { queryStore, gql, getContextClient } from '@urql/svelte';



  // Define the GraphQL query
  const GET_TODOS = gql`
          query {
  getTodos{
    ID
    text
    done
  }
}
  `;

  // Fetch data using the queryStore
  const todosStore = queryStore({
    client: getContextClient(),
    query: GET_TODOS,
  });

  // Access the data property of the todos store
  $: todosData = $todosStore.data;

  // 
</script>

{#if $todosStore.fetching}
  <p>Loading...</p>
{:else if $todosStore.error}
  <p>Error: {$todosStore.error.message}</p>
{:else}
  <!-- Display the JSON data -->
  <!-- <pre>{JSON.stringify(todosData, null, 2)}</pre> -->

  <!-- Display individual todo items -->
  <ul>
    {#each todosData.getTodos as todo}
      <li>
        <p>ID: {todo.ID}</p>
        <p>Text: {todo.text}</p>
        <p>Done: {todo.done ? 'Yes' : 'No'}</p>
      </li>
      <UpdateToDoForm text={todo.text} done={todo.done} />
    {/each}
  </ul>
{/if}
