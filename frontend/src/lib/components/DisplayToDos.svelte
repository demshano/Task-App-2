<script>
    import DeleteToDoTask from './DeleteToDoTask.svelte';
    import UpdateToDoForm from './UpdateToDoForm.svelte';
    import { queryStore, gql, getContextClient } from '@urql/svelte';
    import { showUpdateButton } from './store.js';
   





console.log("display todo: "+showUpdateButton)

  

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

 // State variable to store the ID of the task to update
 let taskToUpdate = null;

// Function to toggle the visibility of the UpdateTask component for a specific task
const toggleUpdateTask = (taskId) => {
  taskToUpdate = taskToUpdate === taskId ? null : taskId;
  // showUpdateButton.update(true)
  showUpdateButton.update(false)
  console.log("display: "+showUpdateButton)
};

// console.log("display: "+showBtnValue)

</script>

<style>
  .hidden {
    display: none;
  }
  .block {
    display: block;
  }
</style>

{#if $todosStore.fetching}
  <p>Loading...</p>
{:else if $todosStore.error}
  <p class="text-red-500">Error: {$todosStore.error.message}</p>
{:else}
  <!-- Display individual todo items -->
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each todosData.getTodos as todo}
      <div>
        <li class="bg-white rounded-lg shadow-md overflow-hidden {taskToUpdate === todo.ID ? 'col-span-1' : 'col-span-2 md:col-span-1 lg:col-span-1'}">
          <div class="p-4 space-y-2">
            <p class="text-lg font-semibold">ID: {todo.ID}</p>
            <p class="text-gray-600">Text: {todo.text}</p>
            <p class="text-gray-600">Done: {todo.done ? 'Yes' : 'No'}</p>
          </div>

          <!-- Button to open/close the UpdateTask component for the specific task -->
          <button on:click={() => {toggleUpdateTask(todo.ID); }} class="bg-blue-500 text-white px-4 py-2 rounded-b-md transition duration-300 ease-in-out hover:bg-blue-600 w-full">
            Update
          </button>

          <!-- Show the UpdateTask component for the specific task -->
          {#if taskToUpdate === todo.ID}
            <UpdateToDoForm ID={todo.ID} text={todo.text} done={todo.done} />
          {/if}

          <DeleteToDoTask ID={todo.ID} />
        </li>
      </div>
    {/each}
  </ul>
{/if}




