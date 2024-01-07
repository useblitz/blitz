<script lang="ts">
    import PocketBase from "pocketbase";

    import { db } from "$lib/api/database";
    import { isLoggedIn } from "$lib/api/pb";
    import { isUserLoggedIn } from "$lib/globals";
    import { logout } from "$lib/api/auth";

    let pocketbase: PocketBase;

    db.subscribe((v) => {
        pocketbase = v;
        isLoggedIn(pocketbase);
    });
</script>

<header>
    <a href="/"><img alt="Blitz Logo" src="/favicon.png" /> blitz</a>
    {#if $isUserLoggedIn}
        <nav>
            <a href="/new">New Byte</a>
            <button on:click={() => logout(pocketbase)}>Logout</button>
            <a href="/notifications"
                ><svg
                    data-slot="icon"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z"
                    ></path>
                </svg></a
            >
            <a href="/profile"
                ><svg
                    data-slot="icon"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    ></path>
                </svg></a
            >
        </nav>
    {:else}
        <nav>
            <a href="/">Home</a>
            <a href="/#feature">Features</a>
            <a href="/about">About</a>
            <a href="/login">Login</a>
            <a href="/signup">Sign Up</a>
        </nav>
    {/if}
</header>

<style>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.5rem;
        user-select: none;
    }

    header > a {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        font-family: "Mackinac", system-ui, sans-serif;
        font-size: 1.5rem;
        font-weight: 600;
        color: white;
    }

    header > a:hover {
        text-decoration: none;
    }

    header > a > img {
        height: 2rem;
        object-fit: contain;
    }

    header > nav {
        display: none;
    }

    header > nav > a:hover {
        text-decoration: none;
    }

    @media (min-width: 1024px) {
        header {
            justify-content: space-between;
        }

        header > nav {
            display: flex;
            align-items: center;
            gap: 1.2rem;
        }

        header > nav > a {
            font-weight: 600;
            color: white;
        }

        header > nav > a:has(svg) {
            width: 1.8rem;
        }

        header > nav > a[href="/login"] {
            padding-left: 1.7rem;
            margin-left: 0.5rem;
            border-left: solid 1px #404040;
        }

        header > nav > a[href="/signup"],
        header > nav > a[href="/new"],
        button {
            padding: 0.2rem 0.8rem;
            border-radius: 0.375rem;
            color: #171717;
            background-color: white;
        }

        header > nav > a[href="/signup"],
        header > nav > a[href="/new"],
        button {
            text-decoration: none;
        }
    }
</style>
