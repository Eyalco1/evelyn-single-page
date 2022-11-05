<script>
  import CollagePic from './CollagePic.svelte'
  import StillsSlideshow from './StillsSlideshow.svelte'

  const picsData = [
    {
      src: 'https://uploads-ssl.webflow.com/5d71994f994c3aab41b95759/628681824b5d120d3879c3dd_20210902-210902000000010002-2.jpg',
      alt: '',
      id: 0
    },
    {
      src: 'https://uploads-ssl.webflow.com/5d71994f994c3aab41b95759/628681354b1da92337d1c529_20210831-210831000000030003.jpg',
      alt: '',
      id: 1
    },
    {
      src: 'https://uploads-ssl.webflow.com/5d71994f994c3aab41b95759/6261686ffd8092a472ccb49c_20210831-210831000000040002.jpg',
      alt: '',
      id: 2
    },
    {
      src: 'https://uploads-ssl.webflow.com/5d71994f994c3aab41b95759/62616ab245a097f8751d6f97_20210902-210902000000010005.jpg',
      alt: '',
      id: 3
    },
    {
      src: 'https://uploads-ssl.webflow.com/5d71994f994c3aab41b95759/5ed6451ed9b81a5a0941b792_90353827_251451035883777_2164085926595527432_n.jpg',
      alt: '',
      id: 4
    },
    {
      src: 'https://uploads-ssl.webflow.com/5d71994f994c3aab41b95759/6266c32416f808767aa5030e_20200317-200317000000050021-2.jpg',
      alt: '',
      id: 5
    },
    {
      src: 'https://uploads-ssl.webflow.com/5d71994f994c3aab41b95759/5db858647cba6272c868fa09_FFF1.jpg',
      alt: '',
      id: 6
    },
    {
      src: 'https://uploads-ssl.webflow.com/5d71994f994c3aab41b95759/62616b13cde0428f0da753ac_20210831-210831000000020008.jpg',
      alt: '',
      id: 7
    },
    {
      src: 'https://uploads-ssl.webflow.com/5d71994f994c3aab41b95759/6266cc38b9fbc454d3536161_20210902-210902000000010003.jpg',
      alt: '',
      id: 8
    },
    {
      src: 'https://uploads-ssl.webflow.com/5d71994f994c3aab41b95759/5db85b119aa2d737b7ffa5f0_Young%20Fisherman%20-%20Mexico.jpg',
      alt: '',
      id: 9
    },
    {
      src: 'https://uploads-ssl.webflow.com/5d71994f994c3aab41b95759/5ed644f881818868d908af4c_90348670_570626850328089_727146915985085176_n.jpg',
      alt: '',
      id: 10
    },
    {
      src: 'https://uploads-ssl.webflow.com/5d71994f994c3aab41b95759/5ed645bf601842d2ee09d863_30602641_377211976021894_6141786955353948160_n.jpg',
      alt: '',
      id: 11
    }
  ]

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
          {#each picsData as { src, alt, id }}
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
    <StillsSlideshow {activePic} />
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

  .c-stills__ul {
    margin-bottom: 60px;
    grid-auto-flow: row dense;
    grid-auto-columns: 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(auto-fit, 1px);
  }

  .c-stills__ul.is--2-col {
    -webkit-column-count: 2;
    column-count: 2;
    -webkit-column-gap: 20px;
    column-gap: 20px;
  }

  @media screen and (max-width: 991px) {
    /* .c-stills__ul,
    img,
    .c-stills__li {
      padding: 0;
      margin: 0;
    } */

    /* .c-stills__ul {
      column-gap: 30px;
    } */

    /* .c-site {
      overflow: visible;
      margin-right: 0;
      margin-left: 0;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
    } */
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

    .c-stills__ul {
      -webkit-column-count: 2;
      column-count: 2;
      -webkit-column-gap: 18px;
      column-gap: 18px;
    }

    .c-stills__ul.is--2-col {
      -webkit-column-gap: 12px;
      column-gap: 12px;
    }
  }
</style>
