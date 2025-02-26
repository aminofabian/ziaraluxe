<script lang="ts">
  import { onMount } from 'svelte';
  
  export let videoSrc: string;
  let isLoaded = false;
  let isError = false;
  let streamableUrl: string;

  onMount(() => {
    if (!videoSrc) {
      isError = true;
      return;
    }

    streamableUrl = videoSrc;
  });
</script>

<div class="absolute inset-0 w-full h-full overflow-hidden video-container">
  {#if !isError && streamableUrl}
    <iframe
      title="Streamable video"
      class="absolute top-0 left-0 w-full h-full"
      src={streamableUrl}
      frameborder="0"
      allowfullscreen
      allow="autoplay"
      on:error={() => isError = true}
      on:load={(e) => {
        try {
          const iframeDoc = e.target.contentDocument || e.target.contentWindow.document;
          if (iframeDoc.title.includes('Oops') || iframeDoc.body.textContent.includes('find your video')) {
            isError = true;
          }
        } catch (err) {
          // Cannot access iframe content due to same-origin policy
          // This is expected and we can ignore this error
        }
        isLoaded = true;
      }}
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
  :global(.video-container video),
  :global(.video-container iframe) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
  }
</style>