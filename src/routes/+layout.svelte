<script lang="ts">
  import "@fontsource-variable/space-grotesk";
  import "@unocss/reset/tailwind.css";
  import "$lib/globals.css";

  import { pageTitle } from "$lib/globals";
  import { db } from "$lib/api/database";

  import Header from "$lib/components/Header.svelte";

  let pocketbase: PocketBase;

  db.subscribe((v) => {
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

<header />
<slot />
