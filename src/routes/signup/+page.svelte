<script lang="ts">
  import type PocketBase from "pocketbase";

  import { db } from "$lib/api/database";
  import { register } from "$lib/api/auth";

  import { pageTitle } from "$lib/globals";
  import { goto } from "$app/navigation";

  let pocketbase: PocketBase;
  let feedback: string;

  db.subscribe((v) => {
    pocketbase = v;
  });

  const handleSubmit = async (e: SubmitEvent) => {
    const data = new FormData(e.target as HTMLFormElement);

    const { username, email, password, confirm } = {
      username: data.get("email"),
      email: data.get("email"),
      password: data.get("password"),
      confirm: data.get("confirm"),
    };

    const { success, msg } = await register(
      username as string,
      email as string,
      password as string,
      confirm as string,
      pocketbase
    );

    if (!success) {
      return (feedback = msg);
    }

    goto("/");
  };

  pageTitle.set("Create an Account");
</script>

<main>
  <form on:submit|preventDefault={handleSubmit}>
    <h2>Create an Account</h2>
    {#if feedback}
      <p>Unable to login: ${feedback}</p>
    {/if}
    <div>
      <label for="username">Your username:</label>
      <input
        type="text"
        name="username"
        placeholder="example123"
        minlength="3"
        required
      />
    </div>

    <div>
      <label for="email">Your email:</label>
      <input
        type="email"
        name="email"
        placeholder="email@domain.com"
        required
      />
    </div>

    <div>
      <label for="password">Your password:</label>
      <input
        type="password"
        name="password"
        placeholder="••••••••••••"
        minlength="8"
        required
      />
    </div>

    <div>
      <label for="confirm">Confirm password:</label>
      <input
        type="password"
        name="confirm"
        placeholder="••••••••••••"
        required
      />
    </div>

    <p>
      By creating an account & using our platform, you agree to the <a
        href="/legal/terms">Terms of Service</a
      >.
    </p>

    <button type="submit">Let's Go</button>
  </form>
</main>

<style>
  main {
    height: calc(100vh - 84px);
  }

  main > form {
    padding: 2rem;
    padding-top: 0rem;
    margin-bottom: 84px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.6rem;
  }

  main > form > h2 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 600;
  }

  main > form > div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  main > form > div > label {
    color: #d4d4d4;
  }

  main > form > div > input {
    padding: 0.2rem 0.4rem;
    outline: solid 1px #171717;
    border-radius: 0.125rem;
    background-color: #262626;
    transition: outline 0.2s;
  }

  main > form > div > input:hover,
  main > form > div > input:focus {
    outline: solid 1px #373737;
  }

  main > form > div > input::placeholder {
    color: #a3a3a3;
  }

  main > form > p {
    color: #d4d4d4;
  }

  main > form > button {
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 0.125rem;
    color: #171717;
    background-color: white;
  }

  @media (min-width: 768px) {
    main {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    main > form {
      max-width: 30rem;
      padding: 2rem;
      margin: 0rem;
      border-radius: 0.125rem;
      background-color: #171717;
    }
  }

  @media (min-width: 1536px) {
    main > form {
      margin-bottom: 84px;
    }
  }
</style>
