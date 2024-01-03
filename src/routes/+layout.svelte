<script lang="ts">
  import "@fontsource-variable/dm-sans";
  import "@fontsource/dm-serif-display";
  import "$lib/globals.css";

  import { pageTitle } from "$lib/globals";
</script>

<svelte:head>
  <title>{$pageTitle} \ Blitz</title>
</svelte:head>

<slot />
