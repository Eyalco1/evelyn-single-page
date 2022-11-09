<script>
  import { Link } from 'svelte-navigator'
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
  <Link to="/">
    <div on:click={() => setCurPage('/')} on:keyup={() => setCurPage('/')}>
      <Logo />
    </div>
  </Link>

  <div id="navbar-horz">
    <NavbarHorizontal {currentPage} />
  </div>
  <div id="navbar-vert">
    <NavbarVerical {currentPage} />
  </div>
</div>

<style>
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
</style>
