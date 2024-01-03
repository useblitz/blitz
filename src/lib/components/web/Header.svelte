<header>
  <a href="/"><img alt="Blitz Logo" src="/favicon.png" /> blitz</a>
  <nav>
    <a href="/">Home</a>
    <a href="/#feature">Features</a>
    <a href="/about">About</a>
    <a href="/login">Login</a>
    <a href="/signup">Sign Up</a>
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
  }

  header > a {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-family: "Mackinac", system-ui, sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
  }

  header > a:hover {
    text-decoration: none;
  }

  a > img {
    height: 2rem;
    object-fit: contain;
  }

  header > nav {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  nav > a {
    font-weight: 600;
  }

  nav > a:nth-of-type(4) {
    padding-left: 1.7rem;
    margin-left: 0.5rem;
    border-left: solid 1px #404040;
  }

  nav > a:last-of-type {
    padding: 0.2rem 0.8rem;
    border-radius: 100rem;
    color: #171717;
    background-color: white;
  }

  nav > a:last-of-type:hover {
    text-decoration: none;
  }
</style>
