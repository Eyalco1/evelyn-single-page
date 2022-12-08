<script>
  import About from './components/About.svelte'
  import Work from './components/Work.svelte'
  import Contact from './components/Contact.svelte'
  import Footer from './components/Footer.svelte'
  import Navbar from './components/Navbar.svelte'
</script>

<div class="all-wrap">
  <div id="nav-cont">
    <Navbar />
  </div>
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
  </main>

  <div id="footer-cont">
    <Footer />
  </div>
</div>

<style>
  .all-wrap {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    /* height: 100vh; */
    padding: 2rem;
    padding-top: 0;
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

  /* #about-cont {
    background-color: red;
  }

  #work-cont {
    background-color: blue;
  }

  #contact-cont {
    background-color: green;
  }

  #footer-cont {
    background-color: orange;
  } */

  #nav-cont {
    padding: 2rem;
    padding-bottom: 0;
  }

  /* .read-the-docs {
    color: #888;
  } */
</style>
