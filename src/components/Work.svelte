<script>
  import WorkVideo from './WorkVideo.svelte'
  import WorkStills from './WorkStills.svelte'

  let workType = 'video'
</script>

<div>
  <nav>
    <span
      class:active-span={workType === 'video'}
      on:click={() => (workType = 'video')}
      on:keyup={() => (workType = 'video')}>Video</span
    >
    <span
      class:active-span={workType === 'stills'}
      on:click={() => (workType = 'stills')}
      on:keyup={() => (workType = 'video')}>Stills</span
    >
  </nav>

  {#if workType === 'stills'}
    <WorkStills />
  {:else}
    <WorkVideo />
  {/if}
</div>

<style>
  span {
    font-family: Poppins;
    font-size: 24px;
    font-weight: 600;
    user-select: none;
    text-transform: uppercase;
    margin: 0 20px;
  }

  .active-span {
    color: var(--evelyna-primary);
  }

  span:hover {
    cursor: pointer;
  }
</style>
