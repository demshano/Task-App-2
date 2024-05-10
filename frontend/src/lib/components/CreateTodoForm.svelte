<!-- CreateTodo.svelte -->
<script>
  import { mutationStore, gql, getContextClient } from "@urql/svelte";

  let text = "";

  let done = false;

  let result;
  let client = getContextClient();

  function generateRandomId(length = 8) {
    const characters =
      "465735438835834583854865";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    return result;
  }
  let ID = generateRandomId();
  // let id;

  const createTodo = async () => {
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

  console.log(createTodo);
</script>

<form on:submit|preventDefault={createTodo}>
  <input type="text" bind:value={text} />

  <button type="submit">Add Todo</button>
</form>

<button></button>

<!-- {#if result.fetching}
  <p>Creating todo...</p>
{:else if result.error}
  <p>Error creating todo: {result.error.message}</p>
{:else if result.data}
  <p>Todo created successfully!</p>
{/if} -->
