<script lang="ts">
  export let videoSrc: string;
  let videoElement: HTMLVideoElement;
  let isLoading = true;
  let hasError = false;

  function handleLoadedData() {
    isLoading = false;
  }

  function handleError() {
    isLoading = false;
    hasError = true;
    console.error('Error loading video:', videoSrc);
  }
</script>

<div class="absolute inset-0 w-full h-full overflow-hidden -z-10">
  {#if isLoading}
    <div class="absolute inset-0 bg-black/90">
      <img
        src="/images/poster.jpg"
        alt="Loading background"
        class="absolute inset-0 w-full h-full object-cover opacity-50"
      />
    </div>
  {/if}
  
  <video
    bind:this={videoElement}
    class="absolute inset-0 w-full h-full object-cover {isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000"
    autoplay
    loop
    muted
    playsinline
    preload="auto"
    poster="/images/poster.jpg"
    on:loadeddata={handleLoadedData}
    on:error={handleError}
  >
    <source src={videoSrc} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  
  <!-- Minimal overlay -->
  <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
</div>

<style>
  video {
    will-change: transform;
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000;
    filter: brightness(0.9) saturate(1.1);
  }
</style>
