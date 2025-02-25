<script lang="ts">
  import { onMount } from 'svelte';
  
  export let videoSrc: string;
  let videoElement: HTMLVideoElement;
  let isLoaded = false;

  onMount(() => {
    if (videoElement) {
      // Ensure video plays
      const playVideo = () => {
        if (!isLoaded) return;
        videoElement.play().catch(error => {
          console.log('Video autoplay failed:', error);
        });
      };

      // Handle video loaded
      const handleLoaded = () => {
        isLoaded = true;
        playVideo();
      };

      // Try to play video when it's ready
      videoElement.addEventListener('loadedmetadata', handleLoaded);
      
      // Handle visibility change
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible' && isLoaded) {
          playVideo();
        }
      });

      // Cleanup
      return () => {
        videoElement.removeEventListener('loadedmetadata', handleLoaded);
      };
    }
  });
</script>

<div class="absolute inset-0 w-full h-full overflow-hidden">
  <video
    bind:this={videoElement}
    class="absolute top-0 left-0 w-full h-full object-cover"
    autoplay
    muted
    loop
    playsinline
    preload="auto"
    poster="/images/poster.jpg"
  >
    <source 
      src={videoSrc} 
      type="video/mp4"
    />
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
