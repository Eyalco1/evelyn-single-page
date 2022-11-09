<script>
  import NavbarHorizontal from './NavbarHorizontal.svelte'
  import NavbarVerical from './NavbarVertical.svelte'
  import Logo from './Logo.svelte'
  import { curPage } from '../store'

  const setCurPage = (page) => {
    curPage.set(page)
    console.log(curPage)
  }

  export let currentPage = '/'
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

  <!-- <div id="navbar-horz">
    <NavbarHorizontal {currentPage} />
  </div>
  <div id="navbar-vert">
    <NavbarVerical {currentPage} />
  </div> -->
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

  #navbar-horz,
  #navbar-vert {
    margin-top: auto;
    margin-bottom: auto;
  }

  @media only screen and (max-width: 480px) {
    #navbar-vert {
      display: block;
    }

    #navbar-horz {
      display: none;
    }
  }

  @media only screen and (min-width: 481px) {
    #navbar-vert {
      display: block;
    }

    #navbar-horz {
      display: none;
    }
  }

  @media only screen and (min-width: 768px) {
    #navbar-horz {
      display: block;
    }

    #navbar-vert {
      display: none;
    }
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
    text-align: center;
  }

  nav span:hover,
  span:hover {
    background-size: 0 3px, 100% 3px;
    color: var(--evelyna-primary);
    user-select: none;
  }
</style>
