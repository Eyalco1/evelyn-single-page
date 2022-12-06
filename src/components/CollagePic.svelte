<script>
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
  class="collage-pic-cont c-stills__li c-stills__lightbox-link"
  on:click={() => openSlideShow()}
  on:keyup={() => openSlideShow()}
>
  <img {src} {alt} class="c-stills__img-thumb" />
  <span class="overlay">
    <span>
      <strong> {id} </strong>
    </span>
  </span>
</div>

<style>
  .collage-pic-cont {
    position: relative;
    width: 50%;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

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

  /* ================================= */

  .overlay {
    opacity: 1;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 1.2rem 3.2rem 2.4rem;
    display: block;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: left;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    /* -webkit-transform: translateZ(0) scale(1, 1); */
  }

  .overlay strong {
    /* font-family: Lato, Helvetica Neue, Helvetica, Arial, Verdana, sans-serif; */
    font-weight: 500;
    font-size: 1.6rem;
    font-style: normal;
    line-height: 1.75;
    display: block;
    margin: 0;
    letter-spacing: 0;
    text-transform: none;
    font-style: normal;
    color: var(--title-color);
  }

  @media (hover: hover) {
    .overlay {
      opacity: 0;
      width: auto;
      text-align: center;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 1.6rem;
      position: absolute;
      background: var(--evelyna-primary-faded);
      -moz-transition: opacity 0.25s ease-in-out;
      -webkit-transition: opacity 0.25s ease-in-out;
      -o-transition: opacity 0.25s ease-in-out;
      transition: opacity 0.25s ease-in-out;
      font-size: 0;
    }

    .overlay:before {
      display: inline-block;
      height: 100%;
      content: '';
      vertical-align: middle;
    }

    .overlay > span {
      display: inline-block;
      vertical-align: middle;
      width: 100%;
      font-size: 1.8rem;
      line-height: 1.75;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }
  }

  .media-grid--small .overlay span {
    font-size: 1.5rem;
    line-height: 1.3;
  }

  @media all and (min-width: 680px) {
    .overlay {
      padding-left: 1.2rem;
      padding-right: 1.2rem;
    }
  }

  @media (hover: hover) {
    .collage-pic-cont:hover .overlay {
      opacity: 1;
      cursor: pointer;
    }
  }
</style>
