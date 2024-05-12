import { writable } from 'svelte/store';

// Create a writable store to manage the visibility state of the "Update" button
export let showUpdateButton = writable(true);
