<script>
  import StillsSlideshow from './StillsSlideshow.svelte'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let src = ''
  export let alt = ''
  export let id

  function openSlideShow() {
    dispatch('openSlideShow', {
      id: id
    })
  }
</script>

<div
  role="listitem"
  class="c-stills__li w-dyn-item"
  on:click={() => openSlideShow()}
  on:keyup={() => openSlideShow()}
>
  <div class="c-stills__lightbox-link w-inline-block w-lightbox">
    <img
      {src}
      {alt}
      sizes="(max-width: 479px) 45vw, (max-width: 767px) 46vw, (max-width: 991px) 35vw, 372px"
      class="c-stills__img-thumb"
    />
  </div>
</div>

<style>
  .c-stills__li {
    position: relative;
    display: inline-block;
    margin-bottom: 20px;
  }

  .c-stills__img-thumb {
    width: 100%;
  }

  .c-stills__lightbox-link {
    display: block;
    width: 100%;
  }

  @media screen and (max-width: 479px) {
    .c-stills__li {
      margin-bottom: 12px;
    }
  }
</style>
