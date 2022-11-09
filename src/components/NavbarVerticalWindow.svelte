<script>
  import { createEventDispatcher } from 'svelte'
  import { Link } from 'svelte-navigator'
  import { fly } from 'svelte/transition'
  import Socials from './Socials.svelte'
  import Logo from './Logo.svelte'

  const dispatch = createEventDispatcher()

  const closeWindow = () => {
    dispatch('close')
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeWindow()
    }
  })

  window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      closeWindow()
    }
  })

  export let currentPage = '/'
</script>

<div
  class="w-container"
  transition:fly={{ y: -window.innerHeight, duration: 400, opacity: 0.5 }}
>
  <div id="logo-div">
    <Link to="/">
      <!-- <span id="title" on:click={closeWindow}>Evelyna</span> -->
      <div on:click={closeWindow} on:keyup={closeWindow}>
        <Logo color="var(--evelyna-primary)" eyeColor="var(--evelyna-white)" />
      </div>
    </Link>

    <div id="x" on:click={closeWindow} on:keyup={closeWindow}>
      <i class="fa-solid fa-xmark fa-xl" />
    </div>
  </div>
  <nav>
    <Link to="/work" style="margin: 10px"
      ><span
        on:click={closeWindow}
        on:keyup={closeWindow}
        class:bold={currentPage === 'work'}>Work</span
      ></Link
    >
    <Link to="/about" style="margin: 10px"
      ><span
        on:click={closeWindow}
        on:keyup={closeWindow}
        class:bold={currentPage === 'about'}>About</span
      ></Link
    >
    <Link to="/contact" style="margin: 10px"
      ><span
        on:click={closeWindow}
        on:keyup={closeWindow}
        class:bold={currentPage === 'contact'}>Contact</span
      ></Link
    >
  </nav>
  <div id="socials-container" on:click={closeWindow} on:keyup={closeWindow}>
    <Socials size="xl" color="var(--evelyna-primary)" />
  </div>
</div>

<style>
  i {
    color: var(--evelyna-primary);
  }

  #logo-div {
    width: 100%;
    display: flex;
    padding: 32px;
    padding-top: 54px;
    padding-bottom: 50px;
    justify-content: space-between;
  }

  nav {
    /* position: absolute; */
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    /* bottom: 40%; */
    align-content: space-between;
  }

  #x {
    margin-top: auto;
    margin-bottom: auto;
    cursor: pointer;
  }

  .w-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--evelyna-white);
    z-index: 1;
  }

  nav {
    display: flex;
    flex-direction: column;
    text-align: center;
    /* padding: 60px; */
  }

  nav span {
    font-size: 40px;
    font-weight: 600;
    color: var(--evelyna-primary);
  }

  #socials-container {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    bottom: 6%;
    /* margin-top: 60vh; */
  }
</style>
