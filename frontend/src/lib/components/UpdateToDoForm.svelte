<!-- UpdateTask.svelte -->
<script>
    import { mutationStore, gql, getContextClient } from '@urql/svelte';
  
    export let text;
    export let done;
    export let id;
  
    let result;
    let client = getContextClient();
    const updateTask = async () => {
      result = await mutationStore({
        client,
        query: gql`
         mutation ($id: ID!, $text: String!, $done: Boolean!) {
         updateTodo(id: $ID, input: { text: $text, done: $done }) {
          id
          text
          done
        }
      }
        `,
        variables: { id, done, text },
      });
    };
  </script>
  
  <button on:click={updateTask}>Update</button>
  