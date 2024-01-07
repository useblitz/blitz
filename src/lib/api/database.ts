import PocketBase from "pocketbase";
import { readable } from "svelte/store";

export const db = readable(new PocketBase("http://127.0.0.1:8090"));
