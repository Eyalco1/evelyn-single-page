<script>
  import CollagePic from './CollagePic.svelte'
  import StillsSlideshow from './StillsSlideshow.svelte'
  import { picsData } from '../data'
  import { reorderPicsArray } from '../utils'

  const reorderedPicsData = reorderPicsArray(picsData)
  // console.log(reorderedPicsData)

  let isSlideshowOpen = false
  let activePic = null

  function showSlideshow(id) {
    isSlideshowOpen = true
    activePic = id
  }
</script>

<div class="c-site">
  <div class="c-main">
    <div style="opacity: 1;" class="c-container">
      <div class="c-stills">
        <div role="list" class="c-stills__ul is--2-col w-dyn-items">
          {#each reorderedPicsData as { src, alt, id }}
            <CollagePic
              {src}
              {alt}
              {id}
              on:openSlideShow={() => showSlideshow(id)}
            />
          {/each}
        </div>
      </div>
    </div>
  </div>

  {#if isSlideshowOpen}
    <StillsSlideshow
      {activePic}
      on:close={() => {
        isSlideshowOpen = false
      }}
    />
  {/if}
</div>

<style>
  .c-main {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 764px;
    padding-top: 6vw;
    padding-bottom: 6vw;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
  }

  .c-site {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: visible;
    margin-right: auto;
    margin-left: auto;
    padding-right: 20px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .c-container {
    position: relative;
    overflow: visible;
    padding-top: 16px;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  /* .c-stills__ul {
    margin-bottom: 60px;
    grid-auto-flow: row dense;
    grid-auto-columns: 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(auto-fit, 1px);
  } */

  .c-stills__ul.is--2-col {
    -webkit-column-count: 2;
    column-count: 3;
    -webkit-column-gap: 20px;
    column-gap: 20px;
  }

  @media screen and (max-width: 1000px) {
    .c-main {
      width: auto;
      margin-top: 60px;
      padding: 16px 18px 60px;
      -webkit-box-flex: 0;
      -webkit-flex: 0 auto;
      -ms-flex: 0 auto;
      flex: 0 auto;
    }

    .c-site {
      position: relative;
      display: block;
      padding-right: 0;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .c-container {
      padding-top: 0;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }
  }

  @media screen and (max-width: 479px) {
    .c-main {
      -webkit-box-flex: 0;
      -webkit-flex: 0 auto;
      -ms-flex: 0 auto;
      flex: 0 auto;
    }

    /* .c-stills__ul {
      -webkit-column-count: 2;
      column-count: 2;
      -webkit-column-gap: 18px;
      column-gap: 18px;
    } */

    .c-stills__ul.is--2-col {
      -webkit-column-gap: 12px;
      column-gap: 12px;
    }
  }
</style>
