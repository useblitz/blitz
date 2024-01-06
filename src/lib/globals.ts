import PocketBase from "pocketbase";
import { writable } from "svelte/store";

export const pageTitle = writable("");
export const pb = new PocketBase(process.env.POCKETBASE);
