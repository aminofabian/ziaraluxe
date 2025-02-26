<script lang="ts">
  import { onMount } from 'svelte';
  
  export let videoSrc: string;
  let videoElement: HTMLVideoElement;
  let isLoaded = false;
  let hasError = false;
  let isPlaying = false;
  let retryCount = 0;
  const MAX_RETRIES = 3;

  onMount(() => {
    if (videoElement) {
      // Ensure video plays
      const playVideo = async () => {
        if (!isLoaded || hasError) return;
        try {
          await videoElement.play();
          isPlaying = true;
        } catch (error) {
          console.error('Video autoplay failed:', error);
          hasError = true;
        }
      };

      // Handle video loaded
      const handleLoaded = () => {
        isLoaded = true;
        playVideo();
      };

      // Handle video error with retry logic
      const handleError = async (error) => {
        console.error('Video loading error:', error);
        if (retryCount < MAX_RETRIES) {
          retryCount++;
          console.log(`Retrying video load attempt ${retryCount} of ${MAX_RETRIES}`);
          videoElement.load(); // Reload the video
        } else {
          hasError = true;
        }
      };

      // Try to play video when it's ready
      videoElement.addEventListener('loadedmetadata', handleLoaded);
      videoElement.addEventListener('error', handleError);
      
      // Handle visibility change
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible' && isLoaded && !isPlaying) {
          playVideo();
        }
      });

      // Cleanup
      return () => {
        videoElement.removeEventListener('loadedmetadata', handleLoaded);
        videoElement.removeEventListener('error', handleError);
        document.removeEventListener('visibilitychange', () => {});
      };
    }
  });
</script>

<div class="absolute inset-0 w-full h-full overflow-hidden">
  {#if hasError}
    <div class="absolute inset-0 bg-black/50" />
  {:else}
    <video
      bind:this={videoElement}
      src={videoSrc}
      class="absolute top-0 left-0 w-full h-full object-cover svelte-nve97m"
      playsinline
      muted
      loop
      preload="auto"
    />
    {#if !isLoaded}
      <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div class="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
      </div>
    {/if}
  {/if}
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