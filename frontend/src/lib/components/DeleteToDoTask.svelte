<!-- DeleteTask.svelte -->
<script>
    import { mutationStore, gql, getContextClient } from '@urql/svelte';
  
    export let ID;
  
    let result;
    let client = getContextClient();
  
    const deleteTask = async () => {
      result = await mutationStore({
        client,
        query: gql`
          mutation ($ID: ID!) {
            deleteTodo(ID: $ID) {
              ID
            }
          }
        `,
        variables: { ID },
      });
    };
  </script>
  
  <!-- <div>
    <button on:click={deleteTask}>Delete</button>
  </div>
   -->

   <div class="w-full mt-2">
    <button 
      on:click={deleteTask}
      class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-full">
      Delete
    </button>
  </div>
  
  