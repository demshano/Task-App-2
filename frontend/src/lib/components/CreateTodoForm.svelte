<!-- CreateTodo.svelte -->
<script>
  import { mutationStore, gql, getContextClient } from "@urql/svelte";

  let text = "";

  let done = false;

  let result;
  let client = getContextClient();

  function generateRandomId(length = 8) {
    const characters =
      "465735438835834583854865frfueryguqrfyg";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    return result;
  }
  
  
  const createTodo = async () => {
    let ID = generateRandomId();
    result = await mutationStore({
      client,
      query: gql`
        mutation ($text: String!, $done: Boolean!, $ID: ID!) {
          createTodo(text: $text, done: $done, ID: $ID) {
            text
            done
            ID
          }
        }
      `,
      variables: { text, done, ID}
    });
  };

  // console.log(createTodo);
</script>

<!-- <form on:submit|preventDefault={createTodo}>
  <input type="text" bind:value={text} />

  <button type="submit" >Add Todo</button>
</form> -->

<form class="flex flex-col items-center" on:submit|preventDefault={createTodo}>
  <input type="text" class="w-64 px-4 py-2 mb-4 border rounded-md" placeholder="Enter your todo" bind:value={text} />

  <button type="submit" class="px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out">
    Add Todo
  </button>
</form>






