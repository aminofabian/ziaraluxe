<script lang="ts">
  export let videoSrc: string;
  let isLoaded = false;
  let isError = false;

  // Convert Streamable URL to embed format
  $: embedUrl = videoSrc ? `https://streamable.com/e/${videoSrc.split('/').pop()}` : '';
</script>

<div class="fixed inset-0 w-screen h-screen overflow-hidden video-container z-[-1] bg-black">
  {#if embedUrl}
    <iframe
      title="Streamable video"
      class="absolute top-0 left-0 w-full h-full"
      src={embedUrl}
      frameborder="0"
      allowfullscreen
      allow="autoplay; fullscreen"
      on:load={() => isLoaded = true}
      on:error={() => isError = true}
    />
  {/if}
  {#if !isLoaded || isError}
    <div class="absolute inset-0 z-10 bg-black/50 flex items-center justify-center">
      {#if isError}
        <div class="text-white text-center p-4">
          <p class="text-xl mb-2">Video unavailable</p>
          <p class="text-sm opacity-75">The requested video could not be loaded</p>
        </div>
      {:else}
        <div class="animate-pulse">
          <div class="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  :global(.video-container iframe) {
    width: 100vw !important;
    height: 100vh !important;
    object-fit: cover !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    z-index: -1 !important;
    border: none !important;
    transform: scale(1.5) !important;
    pointer-events: none !important;
  }
</style>