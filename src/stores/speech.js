import { writable } from 'svelte/store';

// the initialized speech object
export const speechStore = writable({});

// the word to speak
export const speak = writable('');