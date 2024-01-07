<script lang="ts">
    import "@fontsource-variable/space-grotesk";
    import "@unocss/reset/tailwind.css";
    import { onMount } from "svelte";
    import PocketBase from "pocketbase";

    import { pageTitle } from "$lib/globals";
    import { db } from "$lib/api/database";
    import "$lib/globals.css";

    import Header from "$lib/components/Header.svelte";

    let pocketbase: PocketBase;

    db.subscribe((v) => {
        pocketbase = v;
    });

    export let data;

    onMount(() => {
        pocketbase.authStore.save(data.pb_auth as string);
    });
</script>

<svelte:head>
    <title>{$pageTitle} \ Blitz</title>
</svelte:head>

<Header />
<slot />
