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
  let isStreamable = false;
  let streamableId = '';

  function resolveVideoSrc() {
    // Check if the video source is a Streamable URL
    const streamableRegex = /streamable\.com\/([a-zA-Z0-9]+)/;
    const streamableMatch = videoSrc.match(streamableRegex);
    
    if (streamableMatch) {
      isStreamable = true;
      streamableId = streamableMatch[1];
      return;
    }

    // Handle other video sources
    const isExternalUrl = videoSrc.startsWith('http://') || videoSrc.startsWith('https://');
    resolvedVideoSrc = isExternalUrl ? videoSrc : (videoSrc.startsWith('/') ? videoSrc : `/${videoSrc}`);
  }

  async function playVideo() {
    if (!isLoaded || hasError || isStreamable) return;
    try {
      if (videoElement.ended) {
        videoElement.currentTime = 0;
      }
      const playPromise = videoElement.play();
      if (playPromise !== undefined) {
        await playPromise;
        isPlaying = true;
        console.log('Video playing successfully');
      }
    } catch (error) {
      console.error('Video autoplay failed:', error);
      if (error.name !== 'NotAllowedError') {
        hasError = true;
      } else {
        console.log('Autoplay restricted - waiting for user interaction');
        const handleUserInteraction = () => {
          playVideo();
          document.removeEventListener('click', handleUserInteraction);
          document.removeEventListener('touchstart', handleUserInteraction);
        };
        document.addEventListener('click', handleUserInteraction);
        document.addEventListener('touchstart', handleUserInteraction);
      }
    }
  }

  onMount(() => {
    resolveVideoSrc();
    
    if (isStreamable) {
      isLoaded = true;
      return;
    }

    isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (videoElement) {
      videoElement.muted = true;
      videoElement.playsInline = true;
      videoElement.load();

      const handleLoaded = () => {
        console.log('Video loaded successfully');
        isLoaded = true;
        playVideo();
      };

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
          videoElement.src = '';
          videoElement.load();
          videoElement.src = resolvedVideoSrc;
          videoElement.load();
        } else {
          hasError = true;
        }
      };

      const handleEnded = () => {
        if (!hasError) {
          videoElement.currentTime = 0;
          playVideo();
        }
      };

      videoElement.addEventListener('loadedmetadata', handleLoaded);
      videoElement.addEventListener('error', handleError);
      videoElement.addEventListener('ended', handleEnded);
      
      const handleVisibilityChange = () => {
        if (document.visibilityState === 'visible' && isLoaded && !isPlaying) {
          playVideo();
        }
      };
      document.addEventListener('visibilitychange', handleVisibilityChange);

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
    <div class="absolute inset-0 bg-black" />
  {:else if isStreamable}
    <iframe
      title="Streamable video"
      class="absolute top-0 left-0 w-full h-full"
      src={`https://streamable.com/e/${streamableId}?autoplay=1&muted=1`}
      frameborder="0"
      allowfullscreen
      allow="autoplay"
    ></iframe>
  {:else}
    <video
      bind:this={videoElement}
      src={resolvedVideoSrc}
      poster={posterSrc}
      class="absolute top-0 left-0 w-full h-full object-cover"
      playsinline
      muted
      loop
      preload="auto"
      on:loadeddata={() => {
        console.log('Video data loaded');
        isLoaded = true;
        playVideo();
      }}
      on:playing={() => {
        console.log('Video is now playing');
        isPlaying = true;
      }}
      on:error={() => {
        console.error('Video error occurred');
        hasError = true;
      }}
    />
    {#if !isLoaded}
      <div class="absolute inset-0 z-10"></div>
    {/if}
  {/if}
</div>

<style>
  video {
    will-change: transform;
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
</style>