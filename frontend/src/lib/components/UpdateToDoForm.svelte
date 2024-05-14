<!-- UpdateTask.svelte -->
<script>
	
    import { mutationStore, gql, getContextClient } from '@urql/svelte';
    // import { showUpdateButton } from './store.js';
//     import { onDestroy } from 'svelte';

    
   
// let showBtnValue;

// const unsubscribe =  showUpdateButton.subscribe((value) => {
//   showBtnValue = value;
// });

// onDestroy(unsubscribe);

    export let showUpdateButton = true;

    
    export let text;
    export let done;
    export let ID;
    export let showTask;
  
    let result;
    let client = getContextClient();

  
   
 
  
    let showUpdateTask = true;
    // Function to toggle the visibility of the UpdateTask component
const toggleUpdateTask = () => {
  showUpdateTask = !showUpdateTask;
};
    const updateTask = async () => {
      result = await mutationStore({
        client,
        query: gql`
          mutation ($ID: ID!, $text: String!, $done: Boolean!) {
            updateTodo(ID: $ID, input: { text: $text, done: $done }) {
              ID
              text
              done
            }
          }
        `,
        variables: { ID, text, done },
      });

           // State variable to control the visibility of the UpdateTask component
      // toggleUpdateTask();
      showTask = false;
      showUpdateButton = true;
    
    };

     

// console.log(showBtnValue)
 

  </script>
  
  <!-- <div>
   
        {#if showUpdateTask}
        <input type="text" bind:value={text} />
        <input type="checkbox" bind:checked={done} />
        
        <button on:click={updateTask}>Update</button>
        {/if}
    
    </div>
     -->

     <div class=" bg-white rounded-lg shadow-md p-4">
        <input type="text" bind:value={text} class="border-gray-300 border rounded-md px-3 py-2 mb-3 w-full" />
        <label class="inline-flex items-center">
          <input type="checkbox" bind:checked={done} class="form-checkbox h-5 w-5 text-blue-600" />
          <span class="ml-2 text-gray-700">Done</span>
        </label>
        <button on:click={updateTask} class="bg-blue-500 ml-2 text-white px-4 py-2 rounded-md mt-4 transition duration-300 ease-in-out hover:bg-blue-600">
          Update
        </button>
      </div>
      
      
      
      

  