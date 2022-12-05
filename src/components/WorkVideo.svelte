<script>
  import VideoThumbnail from './VideoThumbnail.svelte'
</script>

<div class="work-container">
  <ul class="media-grid media-grid--block">
    <li class="spotlight-placeholder spotlight-16:9 item">
      <a href="/work/montage" class="project-link mfp-iframe">
        <div class="placeholder ratio-16:9">
          <img
            src="https://i.ibb.co/j8b1BZw/image.png"
            class="lazyautosizes lazyloaded"
            alt="Montage"
            sizes="364px"
          />
        </div>
        <span class="overlay svelte-15pnq89"
          ><span><strong class="svelte-15pnq89">Montage</strong></span></span
        >
      </a>
    </li>
    <li class="spotlight-placeholder spotlight-16:9 item ">
      <a href="/work/idf-montage" class="project-link mfp-iframe">
        <div class="placeholder ratio-16:9">
          <img
            src="https://i.ibb.co/nfSqqF8/image.png"
            class="lazyautosizes lazyloaded"
            alt="IDF Montage"
            sizes="744px"
          />
        </div>
        <span class="overlay svelte-15pnq89"
          ><span><strong class="svelte-15pnq89">IDF Montage</strong></span
          ></span
        >
      </a>
    </li>
    <li class="spotlight-placeholder spotlight-16:9 item ">
      <a href="/work/hot-soup" class="project-link mfp-iframe">
        <div class="placeholder ratio-16:9">
          <img
            src="https://i.ibb.co/r0vm54m/image.png"
            class="lazyautosizes lazyloaded"
            alt="Hot Soup"
            sizes="364px"
          />
        </div>
        <span class="overlay svelte-15pnq89"
          ><span><strong class="svelte-15pnq89">Hot Soup</strong></span></span
        >
      </a>
    </li>
    <li class="spotlight-placeholder spotlight-16:9 item ">
      <a
        href="/work/the-secrets-of-the-universe"
        class="project-link mfp-iframe"
      >
        <div class="placeholder ratio-16:9">
          <img
            src="https://i.ibb.co/VJVWpP2/image.png"
            class="lazyautosizes lazyloaded"
            alt="The Secrets of The Universe"
            sizes="744px"
          />
        </div>
        <span class="overlay svelte-15pnq89"
          ><span
            ><strong class="svelte-15pnq89">The Secrets of The Universe</strong
            ></span
          ></span
        >
      </a>
    </li>
    <li class="spotlight-placeholder spotlight-16:9 item ">
      <a href="/work/a-breath" class="project-link mfp-iframe">
        <div class="placeholder ratio-16:9">
          <img
            src="https://i.ibb.co/sj4GRLN/image.png"
            class="lazyautosizes lazyloaded"
            alt="A Breath"
            sizes="744px"
          />
        </div>
        <span class="overlay svelte-15pnq89"
          ><span><strong class="svelte-15pnq89">A Breath</strong></span></span
        >
      </a>
    </li>
    <li class="spotlight-placeholder spotlight-16:9 item ">
      <a href="/work/coffee-and-cigarette" class="project-link mfp-iframe">
        <div class="placeholder ratio-16:9">
          <img
            src="https://i.ibb.co/D89RqbJ/2021.png"
            class="lazyautosizes ls-is-cached lazyloaded"
            alt="Coffee and Cigarette"
            sizes="744px"
          />
        </div>
        <span class="overlay svelte-15pnq89"
          ><span><strong class="svelte-15pnq89">Indinegev</strong></span></span
        >
      </a>
    </li>
    <li class="spotlight-placeholder spotlight-16:9 item ">
      <a href="/work/coffee-and-cigarette" class="project-link mfp-iframe">
        <div class="placeholder ratio-16:9">
          <img
            src="https://i.ibb.co/n7j5d3B/image.png"
            class="lazyautosizes ls-is-cached lazyloaded"
            alt="Coffee and Cigarette"
            sizes="744px"
          />
        </div>
        <span class="overlay svelte-15pnq89"
          ><span
            ><strong class="svelte-15pnq89">Coffee and Cigarette</strong></span
          ></span
        >
      </a>
    </li>
  </ul>
</div>

<style>
  :root {
    --evelyna-primary: #ef9ab2;
    --evelyna-black: #6d6d6d;
    --evelyna-white: #fff3f8;
  }

  .media-grid {
    padding: 0;
    list-style: none;
    margin: 0 0 2.4rem;
  }

  .media-grid li {
    width: 100%;
    position: relative;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 681px) {
    .media-grid {
      margin: -8px -8px 3.2rem;
    }

    .media-grid li {
      float: left;
      width: 50%;
      margin-bottom: 0;
    }

    .media-grid li a {
      margin: 8px;
    }
  }

  @media screen and (min-width: 681px) and (max-width: 1199px) {
    .media-grid.media-grid--block li {
      width: 100%;
    }

    .media-grid.media-grid--block li:nth-child(3n + 2),
    .media-grid.media-grid--block li:nth-child(3n + 3) {
      width: 50%;
    }
  }

  @media screen and (min-width: 992px) {
    .media-grid li {
      width: 33.333333333%;
      text-align: center;
      margin: 0;
    }
  }

  @media screen and (min-width: 1200px) {
    .media-grid.media-grid--block li {
      width: 33.333333333%;
    }

    .media-grid.media-grid--block li:nth-child(3n + 2),
    .media-grid.media-grid--block li:nth-child(3n + 3) {
      width: 33.333333333%;
    }

    .media-grid.media-grid--block li:nth-child(6n + 1),
    .media-grid.media-grid--block li:nth-child(6n + 4),
    .media-grid.media-grid--block li:nth-child(6n + 5) {
      clear: left;
    }

    .media-grid.media-grid--block li:nth-child(6n + 1),
    .media-grid.media-grid--block li:nth-child(6n + 6) {
      width: 66.666666667%;
    }
  }

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
    font-family: Poppins;
    font-weight: 600;
    font-size: 1.8rem;
    font-style: normal;
    line-height: 1.75;
    display: block;
    margin: 0;
    letter-spacing: 0;
    text-transform: none;
  }

  .overlay strong {
    font-style: normal;
    color: #000;
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
      background: rgba(239, 154, 178, 0.8);
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

    .overlay strong {
      color: var(--evelyna-white);
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

  .placeholder {
    display: block;
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-color: #fafafa;
    position: relative;
  }

  .placeholder img {
    display: block;
    max-width: 100%;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .placeholder:not(.ratio-0) img {
    position: absolute;
    top: 0;
    left: 0;
  }

  .placeholder:not(.ratio-0):before {
    display: block;
    content: '';
  }

  .ratio-16\:9:before {
    padding-top: 56.25%;
  }

  @media all and (min-width: 1200px) {
    .spotlight-placeholder {
      display: block;
      width: 100%;
      overflow: hidden;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }

    .spotlight-16\:9:before {
      padding-top: 56.25%;
    }
  }

  @media all and (min-width: 1200px) and (hover: hover) {
    .spotlight-placeholder:not(.spotlight-0) {
      position: relative;
    }

    .spotlight-placeholder:not(.spotlight-0):before {
      display: block;
      content: '';
    }

    .spotlight-placeholder:not(.spotlight-0) .placeholder {
      display: flex;
      width: 100%;
      height: 100%;
    }

    .spotlight-placeholder:not(.spotlight-0) .placeholder img {
      display: block;
      width: 100%;
      height: 100%;
      -moz-object-fit: cover;
      -webkit-object-fit: cover;
      -o-object-fit: cover;
      object-fit: cover;
    }

    .spotlight-placeholder:not(.spotlight-0) .project-link {
      margin: 0;
      position: absolute;
      top: 8px;
      right: 8px;
      bottom: 8px;
      left: 8px;
    }
  }

  @media all and (min-width: 992px) {
    .media-grid.media-grid--block {
      margin: 0 -8px 3.2rem;
    }
  }

  @media all and (min-width: 1200px) {
    .media-grid.media-grid--block:not(.masonry)
      li.spotlight-16\:9:nth-child(6n + 6) {
      margin-top: -18.75%;
    }
  }

  .project-link {
    display: block;
    overflow: hidden;
    position: relative;
  }

  @media (hover: hover) {
    .project-link:hover .overlay {
      opacity: 1;
    }
  }

  @media all and (min-width: 681px) {
    .project-link {
      text-align: center;
    }
  }
</style>
