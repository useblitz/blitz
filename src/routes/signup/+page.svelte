<script>
  import { pageTitle } from "$lib/globals";

  pageTitle.set("Create an Account");
</script>

<main>
  <form method="POST">
    <h2>Create an Account</h2>
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
      By creating an account, you agree to our <a href="/legal/terms"
        >Terms of Service</a
      >.
    </p>

    <button type="submit">Let's Go</button>
  </form>
</main>

<style>
  main {
    height: calc(100vh - 84px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  main > form {
    width: 28%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.6rem;
    border-radius: 0.375rem;
    background-color: #171717;
  }

  form > h2 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 600;
  }

  form > div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  div > label {
    color: #d4d4d4;
  }

  div > input {
    padding: 0.2rem 0.4rem;
    outline: solid 1px #171717;
    border-radius: 0.375rem;
    background-color: #262626;
    transition: outline 0.2s;
  }

  div > input:hover,
  div > input:focus {
    outline: solid 1px #373737;
  }

  div > input::placeholder {
    color: #a3a3a3;
  }

  form > p {
    color: #d4d4d4;
  }

  form > button {
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    color: #171717;
    background-color: white;
  }
</style>