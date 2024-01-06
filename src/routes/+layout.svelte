<script lang="ts">
    import "@fontsource-variable/dm-sans";
    import "@unocss/reset/tailwind.css";
    import PocketBase from "pocketbase";
    import { onMount } from "svelte";

    import "$lib/globals.css";
    import Header from "$lib/components/web/Header.svelte";
    import { pageTitle } from "$lib/globals";
    import { pb } from "./stores";

    let pocketbase: PocketBase;

    pb.subscribe((v) => {
        pocketbase = v;
    });

    onMount(() => {
        fetch("/", { method: "GET" })
            .then((res) => res.json())
            .then((res) => {
                pocketbase.authStore.save(res.token);
            });
    });
</script>

<svelte:head>
    <title>{$pageTitle} \ Blitz</title>
</svelte:head>

<Header />
<slot />
