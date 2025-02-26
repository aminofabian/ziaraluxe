<script lang="ts">
  import { onMount } from 'svelte';
  
  export let videoSrc: string;
  export let posterSrc: string = '/images/poster.jpg';
  let videoElement: HTMLVideoElement;
  let isLoaded = false;
  let hasError = false;
  let isPlaying = false;
  let retryCount = 0;
  const MAX_RETRIES = 3;
  let isSafari = false;

  let resolvedVideoSrc = videoSrc;

  // Ensure video source is properly resolved
  const resolveVideoSrc = () => {
    // Handle both development and production environments
    if (videoSrc.startsWith('http')) {
      resolvedVideoSrc = videoSrc;
    } else {
      // Ensure the path starts with a forward slash and is relative to base URL
      const normalizedPath = videoSrc.startsWith('/') ? videoSrc : `/${videoSrc}`;
      // Use import.meta.env.BASE_URL for proper path resolution in both dev and prod
      const baseUrl = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL.slice(0, -1) : import.meta.env.BASE_URL;
      resolvedVideoSrc = `${window.location.origin}${baseUrl}${normalizedPath}`;
    }
  };

  onMount(() => {
    // Resolve video source on client side
    resolveVideoSrc();
    
    // Detect Safari browser
    isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (videoElement) {
      // Ensure video plays
      const playVideo = async () => {
        if (!isLoaded || hasError) return;
        try {
          // Reset video if it's ended
          if (videoElement.ended) {
            videoElement.currentTime = 0;
          }
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
        console.error('Video loading error:', {
          error,
          videoSrc: resolvedVideoSrc,
          networkState: videoElement.networkState,
          readyState: videoElement.readyState,
          currentSrc: videoElement.currentSrc,
          error: videoElement.error ? {
            code: videoElement.error.code,
            message: videoElement.error.message
          } : null
        });

        // Check if video source is accessible
        try {
          const response = await fetch(resolvedVideoSrc, { 
            method: 'HEAD',
            credentials: 'same-origin'
          });
          if (!response.ok) {
            console.error(`Video source not accessible: ${response.status} ${response.statusText}`);
            hasError = true;
            return;
          }
        } catch (fetchError) {
          console.error('Network error while checking video source:', fetchError);
          hasError = true;
          return;
        }

        if (retryCount < MAX_RETRIES) {
          retryCount++;
          console.log(`Retrying video load attempt ${retryCount} of ${MAX_RETRIES}`);
          // Clear source and reload
          videoElement.src = resolvedVideoSrc;
          videoElement.load();
        } else {
          hasError = true;
        }
      };

      // Handle video ended
      const handleEnded = () => {
        if (!hasError) {
          videoElement.currentTime = 0;
          playVideo();
        }
      };

      // Try to play video when it's ready
      videoElement.addEventListener('loadedmetadata', handleLoaded);
      videoElement.addEventListener('error', handleError);
      videoElement.addEventListener('ended', handleEnded);
      
      // Handle visibility change
      const handleVisibilityChange = () => {
        if (document.visibilityState === 'visible' && isLoaded && !isPlaying) {
          playVideo();
        }
      };
      document.addEventListener('visibilitychange', handleVisibilityChange);

      // Cleanup
      return () => {
        videoElement.removeEventListener('loadedmetadata', handleLoaded);
        videoElement.removeEventListener('error', handleError);
        videoElement.removeEventListener('ended', handleEnded);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
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
      src={resolvedVideoSrc}
      poster={posterSrc}
      class="absolute top-0 left-0 w-full h-full object-cover svelte-nve97m"
      playsinline
      muted
      loop
      preload={isSafari ? 'metadata' : 'auto'}
      crossorigin="anonymous"
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