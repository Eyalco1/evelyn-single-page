<script>
</script>

<main>
  <div id="about-cont" />
  <div id="work-cont" />
  <div id="contact-cont" />

  <!-- <h1>Vite + Svelte</h1>
  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p> -->
</main>

<style>
  main {
    /* width: 100%; */
    height: 100%;
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1.2fr 2.5fr 0.3fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      '.'
      '.'
      '.';
  }

  #about-cont {
    background-color: red;
  }

  #work-cont {
    background-color: blue;
  }

  #contact-cont {
    background-color: green;
  }

  /* .read-the-docs {
    color: #888;
  } */
</style>
