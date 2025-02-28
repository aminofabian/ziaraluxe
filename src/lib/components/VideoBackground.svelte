<script lang="ts">
  export let videoSrc: string;
  let isLoaded = false;
  let isError = false;
  let videoElement: HTMLVideoElement;

  const handleLoadSuccess = () => {
    isLoaded = true;
    isError = false;
  };

  const handleLoadError = () => {
    isError = true;
    isLoaded = false;
    console.error('Video loading error:', videoSrc);
  };
</script>

<div class="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
  <div class="relative w-full h-full">
    <video
      bind:this={videoElement}
      src={videoSrc}
      class="absolute inset-0 w-full h-full object-cover"
      autoplay
      muted
      loop
      playsinline
      on:loadeddata={handleLoadSuccess}
      on:error={handleLoadError}
    />
  </div>
</div>

<style>
  video {
    width: 100vw !important;
    height: 100vh !important;
    pointer-events: none;
  }
</style>