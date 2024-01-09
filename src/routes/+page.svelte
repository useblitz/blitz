<script lang="ts">
    import { pageTitle } from "$lib/globals";

    pageTitle.set("Learn Concepts Visually");
</script>

<main>
    <h1>Learn & teach concepts visually</h1>
    <p>
        Blitz is the platform where you can easily create and view educational
        animations
    </p>
    <div>
        <a id="accent" href="/signup">Let's Go &rarr;</a>
        <a href="/#feature">Learn More</a>
    </div>
</main>

<style>
    main {
        padding: 2rem;
        padding-top: 0rem;
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 0.8rem;
    }

    main > h1 {
        font-size: 3rem;
        line-height: 1;
    }

    main > h1::after {
        content: ".";
    }

    main > p {
        font-size: 1.3rem;
        line-height: 1.8rem;
    }

    main > p::after {
        content: ".";
    }

    main > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        font-weight: 600;
    }

    main > div > a#accent {
        padding: 0.5rem 1rem;
        border-radius: 0.375rem;
        color: #171717;
        background-color: white;
    }

    main > div > a {
        color: white;
    }

    main > div > a:hover {
        text-decoration: none;
    }

    @media (min-width: 768px) {
        main {
            padding: 3rem;
            text-align: left;
        }

        main > h1::after {
            content: ", faster than ever before.";
        }

        main > div {
            justify-content: flex-start;
        }
    }

    @media (min-width: 1024px) {
        main {
            padding: 5rem 10rem;
        }

        main > p::after {
            content: " for concepts about anything from Computer Science to Design to Biology.";
        }
    }

    @media (min-width: 1280px) {
        main {
            padding: 6rem 12rem;
        }

        main > h1 {
            font-size: 3.75rem;
        }

        main > p {
            font-size: 1.5rem;
            line-height: 2rem;
        }

        main > div > a {
            font-size: 1.125rem;
            line-height: 1.75rem;
        }
    }

    @media (min-width: 1536px) {
        main {
            padding: 7rem 14rem;
        }

        main > h1::after {
            content: " while staying enagaged, faster than ever before.";
        }

        main > p::after {
            content: " for concepts about anything from Computer Science to Human-Centered Design to Biological Psychology.";
        }
    }
</style>
