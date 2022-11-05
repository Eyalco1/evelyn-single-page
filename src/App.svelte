<script>
  import About from './components/About.svelte'
  import Work from './components/Work.svelte'
  import Contact from './components/Contact.svelte'
</script>

<main>
  <div id="about-cont">
    <About />
  </div>
  <div id="work-cont">
    <Work />
  </div>
  <div id="contact-cont">
    <Contact />
  </div>

  <!-- <h1>Vite + Svelte</h1>
  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p> -->
</main>

<style>
  main {
    height: 100vh;
    padding: 2rem;
    /* display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1.2fr 2.5fr 0.3fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      '.'
      '.'
      '.'; */
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
