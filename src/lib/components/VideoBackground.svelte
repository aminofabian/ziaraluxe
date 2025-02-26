<script lang="ts">
  import { onMount } from 'svelte';
  
  export let videoSrc: string;
  let videoElement: HTMLVideoElement;
  let isLoaded = false;
  let hasError = false;
  let isPlaying = false;

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

      // Handle video error
      const handleError = (error) => {
        console.error('Video loading error:', error);
        hasError = true;
      };

      // Try to play video when it's ready
      videoElement.addEventListener('loadedmetadata', handleLoaded);
      videoElement.addEventListener('error', handleError);
      
      // Handle visibility change
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible' && isLoaded && !hasError) {
          playVideo();
        }
      });

      // Cleanup
      return () => {
        videoElement.removeEventListener('loadedmetadata', handleLoaded);
        videoElement.removeEventListener('error', handleError);
      };
    }
  });
</script>

<div class="absolute inset-0 w-full h-full overflow-hidden">
  {#if !hasError}
    <video
      bind:this={videoElement}
      class="absolute top-0 left-0 w-full h-full object-cover"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      poster="/images/poster.jpg"
      src={videoSrc}
    >
      <track kind="captions" />
    </video>
  {:else}
    <!-- Fallback for video error -->
    <div 
      class="absolute top-0 left-0 w-full h-full bg-cover bg-center" 
      style="background-image: url('/images/poster.jpg')"
    ></div>
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