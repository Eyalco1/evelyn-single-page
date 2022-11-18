<script>
  import { videosData } from '../data'
</script>

<div class="work-container">
  <ul class="media-grid media-grid--block">
    {#each videosData as { link, size, thumbnailAlt, thumbnailSrc, title }}
      <li class="spotlight-placeholder spotlight-16:9 item">
        <a href={link} class="project-link mfp-iframe">
          <div class="placeholder ratio-16:9">
            <img
              src={thumbnailSrc}
              class="lazyautosizes lazyloaded"
              alt={thumbnailAlt}
              sizes={`${size}px`}
            />
          </div>
          <span class="overlay">
            <span>
              <strong>
                {title}
              </strong>
            </span>
          </span>
        </a>
      </li>
    {/each}
  </ul>
</div>

<style>
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
