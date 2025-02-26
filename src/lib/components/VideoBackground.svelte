<script lang="ts">
  import { onMount } from 'svelte';
  
  export let videoSrc: string;
  export let posterSrc: string = '/images/poster.jpg';
  let isLoaded = false;
  let streamableId = '';

  function resolveVideoSrc() {
    const streamableRegex = /streamable\.com\/([a-zA-Z0-9]+)/;
    const streamableMatch = videoSrc.match(streamableRegex);
    
    if (streamableMatch) {
      streamableId = streamableMatch[1];
    } else {
      // If not a streamable URL, extract ID from the last part of the URL or use as-is
      streamableId = videoSrc.split('/').pop() || videoSrc;
    }
  }

  onMount(() => {
    resolveVideoSrc();
    isLoaded = true;
  });
</script>

<div class="absolute inset-0 w-full h-full overflow-hidden">
  <iframe
    title="Streamable video"
    class="absolute top-0 left-0 w-full h-full"
    src={`https://streamable.com/e/${streamableId}?autoplay=1&muted=1`}
    frameborder="0"
    allowfullscreen
    allow="autoplay"
  ></iframe>
  {#if !isLoaded}
    <div class="absolute inset-0 z-10"></div>
  {/if}
</div>

<style>
  iframe {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
</style>