import { writable } from 'svelte/store';

export const page = writable('core');
export const filterOpen = writable(false);
export const filter = writable('');
export const settingsOpen = writable(false);
export const expandEnabled = writable(true);
export const keyboardEnabled = writable(false);
