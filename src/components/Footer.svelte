<script>
  import Socials from './Socials.svelte'
</script>

<footer class="footer-copyright-container">
  <div class="f-container">
    <h1>Evelyn Rosenfeld</h1>
    <h3>Very beautiful description</h3>
    <div id="socials">
      <Socials size="xl" color="var(--evelyna-primary)" />
    </div>
    <h1 id="copy">כל הזכויות שמורות לאוולין ואייל המלכים נודר &copy;</h1>
  </div>
</footer>

<style>
  .footer-copyright-container {
    bottom: 0;
    width: 100%;
    user-select: none;
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
    font-size: 34px;
    font-weight: 900;
    text-align: center;
    line-height: 0;
  }

  .f-container h3 {
    color: var(--evelyna-primary);
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    line-height: 2;
  }

  #socials {
    margin: auto;
    text-align: center;
    margin-bottom: 60px;
  }

  #copy {
    text-align: center;
    font-family: Ploni;
    font-size: 18px;
    /* color: var(--evelyna-white); */
  }
</style>
