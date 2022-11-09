<script>
  export let size = '2xl'
  export let color = 'black'
</script>

<div id="socials">
  <a
    href="https://www.instagram.com/evelynafilm/"
    target="_blank"
    rel="noreferrer"
    ><i class="fa-brands fa-instagram fa-{size}" style="color: {color};" /></a
  >
  <a
    href="https://www.facebook.com/profile.php?id=100009474545957"
    target="_blank"
    rel="noreferrer"
    ><i class="fa-brands fa-facebook fa-{size}" style="color: {color};" /></a
  >
  <a
    href="https://www.youtube.com/EvelynRosenfeld"
    target="_blank"
    rel="noreferrer"
    ><i class="fa-brands fa-youtube fa-{size}" style="color: {color};" /></a
  >
</div>

<style>
  /* #socials {
    margin-top: auto;
    margin-bottom: auto;
    user-select: none;
    max-width: fit-content;
    float: right;
  } */

  #socials {
    max-width: fit-content;
    margin: auto;
    user-select: none;
  }

  a {
    padding: 0 4px;
  }

  #socials i {
    transition: opacity 0.3s ease;
  }

  #socials:hover i {
    opacity: 0.3;
  }

  i:hover {
    opacity: 1 !important;
  }
</style>
