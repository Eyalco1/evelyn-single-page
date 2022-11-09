<script>
  import { Link } from 'svelte-navigator'
  import { curPage } from '../store'

  let curPageValue

  curPage.subscribe((value) => {
    curPageValue = value
  })

  const setCurPage = (page) => {
    curPage.set(page)
    console.log(curPage)
  }

  function log() {
    console.log('HI!')
  }

  export let currentPage = '/'
</script>

<span>Evelyna</span>

<!-- <nav>
  <span
    on:click={() => setCurPage('work')}
    on:keyup={() => setCurPage('work')}
    class:bold={currentPage === 'work'}>Work</span
  >
  <span
    on:click={() => setCurPage('about')}
    on:keyup={() => setCurPage('about')}
    class:bold={currentPage === 'about'}>About</span
  >
  <span
    on:click={() => setCurPage('contact')}
    on:keyup={() => setCurPage('contact')}
    class:bold={currentPage === 'contact'}>Contact</span
  >
</nav> -->
<style>
  /* .link-wrap {
    display: inline;
  } */

  .bold {
    /* font-weight: 500; */
    color: var(--evelyna-primary);
  }

  nav {
    margin-top: auto;
    margin-bottom: auto;
  }

  nav span,
  span {
    font-family: Poppins;
    font-size: 30px;
    font-weight: 800;
    margin: 0 10px;
    color: var(--evelyna-primary);

    /* background: linear-gradient(
        to right,
        rgba(100, 200, 200, 1),
        rgba(100, 200, 200, 1)
      ),
      linear-gradient(
        to right,
        rgba(255, 0, 0, 1),
        rgba(255, 0, 180, 1),
        rgba(0, 100, 200, 1)
      );
    background-size: 0% 3px, 0 3px;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat; */

    transition: all 200ms;
  }

  nav span:hover,
  span:hover {
    background-size: 0 3px, 100% 3px;
    color: var(--evelyna-primary);
    user-select: none;
  }
</style>
