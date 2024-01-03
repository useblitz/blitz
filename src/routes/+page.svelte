<script lang="ts">
  import { pageTitle } from "$lib/globals";

  pageTitle.set("Learn Concepts Faster");
</script>

<main>
  <h1>Learn complex concepts visually, faster than ever before.</h1>
  <p>
    Blitz is a platform where you can teach & learn anything with beatiful yet
    concise visual animations.
  </p>
  <div>
    <a href="/signup">Let's Go &rarr;</a>
    <a href="/#feature">Learn More</a>
  </div>
</main>

<style>
  main {
    padding: 8rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  main > h1 {
    font-size: 3.75rem;
    line-height: 1;
    font-family: "Mackinac", system-ui, sans-serif;
  }

  main > p {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 500;
  }

  main > div {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-weight: 600;
  }

  div > a:nth-of-type(1) {
    padding: 0.5rem 1rem;
    border-radius: 100rem;
    color: #171717;
    background-color: white;
  }

  div > a:hover {
    text-decoration: none;
  }
</style>
