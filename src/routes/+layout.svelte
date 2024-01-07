<script lang="ts">
  import "@fontsource-variable/space-grotesk";
  import "@unocss/reset/tailwind.css";
  import "$lib/globals.css";

  import { pageTitle } from "$lib/globals";
  import Header from "$lib/components/Header.svelte";
</script>

<svelte:head>
  <title>{$pageTitle} \ Blitz</title>
</svelte:head>

<Header />
<slot />
