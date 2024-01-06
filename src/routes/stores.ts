import { readable } from "svelte/store";
import PocketBase from "pocketbase";

export let pb = readable(new PocketBase("http://127.0.0.1:8090"));