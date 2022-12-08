<script>
  import Socials from './Socials.svelte'
</script>

<footer class="footer-copyright-container">
  <div class="content-cont">
    <div class="left-cont">
      <div class="f-container">
        <h1>Let's Talk!</h1>
        <a href="mailto:rosenfeldevelyn@gmail.com">
          <h3>rosenfeldevelyn@gmail.com</h3>
        </a>
        <h3>050-4620816</h3>
        <div id="socials">
          <Socials size="xl" color="var(--evelyna-white)" />
        </div>
      </div>
    </div>
    <div class="right-cont">
      <div class="f-container">
        <div class="img-cont">
          <img src="/src/assets/img/Jorge.jpeg" alt="Jorge" />
        </div>
      </div>
    </div>
  </div>
  <h1 id="copy">&copy; 2022 All Rights Reserved</h1>
</footer>

<style>
  .footer-copyright-container {
    bottom: 0;
    width: 100%;
    user-select: none;
    background-color: var(--evelyna-primary);
  }

  .content-cont {
    display: flex;
    justify-content: space-between;
  }

  .f-container {
    /* position: absolute;
    bottom: 0;
    right: 0; */
    /* padding: 30px; */
    /* height: 150px; */
    line-height: 0.5;
  }

  .f-container h1 {
    color: var(--evelyna-white);
    font-size: 40px;
    font-weight: 900;
    text-align: center;
    line-height: 0;
  }

  .f-container h3 {
    color: var(--evelyna-white);
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    line-height: 1;
  }

  .left-cont {
    padding-left: 70px;
    margin: auto 0;
    /* position: relative; */
    /* top: 30px; */
  }

  .right-cont {
    padding-right: 70px;
  }

  #socials {
    margin: auto;
    text-align: center;
    /* margin-bottom: 60px; */
  }

  img {
    border-radius: 100%;
    width: 200px;
    padding: 30px;
  }

  #copy {
    text-align: center;
    font-family: Ploni;
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 20px;
    /* color: var(--evelyna-white); */
  }
</style>
