<script>
  import Socials from './Socials.svelte'
</script>

<footer class="footer-copyright-container">
  <div class="f-container">
    <h1>Let's Talk!</h1>
    <a href="mailto:whatisyouremail@evelyn.com">
      <h3>whatisyouremail@evelyn.com</h3>
    </a>
    <div id="socials">
      <Socials size="xl" color="var(--evelyna-primary)" />
    </div>
    <h1 id="copy">&copy; 2022 Evelyn Rosenfled. All rights reserved.</h1>
  </div>
</footer>

<style>
  .footer-copyright-container {
    bottom: 0;
    width: 100%;
    user-select: none;
    font-family: Ploni;
  }

  .f-container {
    /* position: absolute;
    bottom: 0;
    right: 0; */
    padding: 30px;
    /* height: 150px; */
    background-color: var(--evelyna-white);
    line-height: 0.5;
  }

  .f-container h1 {
    color: var(--evelyna-primary);
    font-size: 40px;
    font-weight: 900;
    text-align: center;
    line-height: 0;
  }

  .f-container h3 {
    color: var(--evelyna-primary);
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    line-height: 1;
  }

  #socials {
    margin: auto;
    text-align: center;
    margin-bottom: 60px;
  }

  #copy {
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    /* color: var(--evelyna-white); */
  }
</style>
