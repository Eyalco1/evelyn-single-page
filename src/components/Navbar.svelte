<script>
  import Logo from './Logo.svelte'
  import { curPage } from '../store'

  const setCurPage = (page) => {
    curPage.set(page)
    console.log(curPage)
  }

  // export let currentPage = '/'
</script>

<div id="header-container">
  <div
    class="logo"
    on:click={() => setCurPage('/')}
    on:keyup={() => setCurPage('/')}
  >
    <Logo />
  </div>

  <div id="navbar-horz">
    <span>Evelyna</span>
  </div>
</div>

<style>
  .logo:hover {
    cursor: pointer;
  }

  #header-container {
    display: flex;
    justify-content: space-between;
    user-select: none;
    padding-bottom: 10px;
  }

  #navbar-horz {
    margin-top: auto;
    margin-bottom: auto;
  }

  span {
    font-family: Poppins;
    font-size: 30px;
    font-weight: 800;
    margin: 0 10px;
    color: var(--evelyna-primary);
    transition: all 200ms;
    text-align: center;
  }
</style>
