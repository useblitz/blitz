<script lang="ts">
  import "@fontsource-variable/dm-sans";
  import "@unocss/reset/tailwind.css";
  import "$lib/globals.css";

  import Header from "$lib/components/web/Header.svelte";

  import { pageTitle } from "$lib/globals";
</script>

<svelte:head>
  <title>{$pageTitle} \ Blitz</title>
</svelte:head>

<Header />
<slot />
