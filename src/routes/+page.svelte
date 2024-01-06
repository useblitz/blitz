<script lang="ts">
    import { pageTitle } from "$lib/globals";

    pageTitle.set("Learn Concepts Faster");
</script>

<main>
    <h1>Learn & teach complex concepts visually</h1>
    <p>
        Blitz is a platform where you can teach & learn anything with beatiful
        visual animations.
    </p>
    <div>
        <a href="/signup">Let's Go &rarr;</a>
        <a href="/#feature">Learn More</a>
    </div>
</main>

<style>
    main {
        padding: 2rem;
        padding-top: 0rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    main > h1 {
        font-size: 3.75rem;
        line-height: 1;
        font-family: "Mackinac", system-ui, sans-serif;
    }

    main > h1:after {
        content: ".";
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
        border-radius: 0.375rem;
        color: #171717;
        background-color: white;
    }

    div > a {
        color: white;
    }

    div > a:hover {
        text-decoration: none;
    }

    @media (min-width: 768px) {
        main {
            padding: 4rem;
        }

        main > h1:after {
            content: ", faster than ever before.";
        }

        main > p:after {
            content: " There's no skills required to create - just drag, drop and type to create engaging, interactive content that anyone can learn from.";
        }
    }

    @media (min-width: 1280px) {
        main {
            padding: 8rem;
        }
    }

    @media (min-width: 1536px) {
        main {
            padding: 16rem;
        }
    }
</style>
