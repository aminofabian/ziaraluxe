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

  function resolveVideoSrc() {
    // In both development and production, videos are served from the static directory
    resolvedVideoSrc = videoSrc.startsWith('/') ? videoSrc : `/${videoSrc}`;
  }

  async function playVideo() {
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
  }

  onMount(async () => {
    // Resolve video source on client side
    resolveVideoSrc();
    
    // Detect Safari browser
    isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    // Check if video file exists before attempting to play
    try {
      const response = await fetch(resolvedVideoSrc, { method: 'HEAD' });
      if (!response.ok) {
        console.error('Video file not found:', resolvedVideoSrc);
        hasError = true;
        return;
      }
    } catch (error) {
      console.error('Error checking video file:', error);
      hasError = true;
      return;
    }

    if (videoElement) {
      // Set video element properties
      videoElement.muted = true;
      videoElement.playsInline = true;
      videoElement.load(); // Force reload of video element

      // Handle video loaded
      const handleLoaded = () => {
        console.log('Video loaded successfully');
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
          } : null,
          userAgent: navigator.userAgent
        });

        // Check if video source is accessible with proper headers
        try {
          const response = await fetch(resolvedVideoSrc, { 
            method: 'HEAD',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Accept': 'video/mp4,video/webm,video/*;q=0.9,*/*;q=0.8',
              'Range': 'bytes=0-0'
            }
          });
          if (!response.ok) {
            console.error(`Video source not accessible: ${response.status} ${response.statusText}`);
            hasError = true;
            return;
          }
          console.log('Video source is accessible:', response.status);
        } catch (fetchError) {
          console.error('Network error while checking video source:', fetchError);
          hasError = true;
          return;
        }

        if (retryCount < MAX_RETRIES) {
          retryCount++;
          console.log(`Retrying video load attempt ${retryCount} of ${MAX_RETRIES}`);
          // Clear source and reload
          videoElement.src = '';
          videoElement.load();
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
      preload="auto"
      crossorigin="anonymous"
      on:loadeddata={() => {
        console.log('Video data loaded');
        isLoaded = true;
      }}
      on:canplay={() => {
        console.log('Video can play');
        playVideo();
      }}
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