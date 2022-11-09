<script>
  import NavbarVerticalWindow from './NavbarVerticalWindow.svelte'

  let showWindow = false
  const openWindow = () => (showWindow = true)
  const closeWindow = () => (showWindow = false)

  export let currentPage = '/'
</script>

<div>
  <i
    class="fa-solid fa-bars fa-xl"
    on:click={openWindow}
    on:keyup={openWindow}
  />

  {#if showWindow}
    <NavbarVerticalWindow on:close={closeWindow} {currentPage} />
  {/if}
</div>

<style>
  i {
    cursor: pointer;
  }
</style>
