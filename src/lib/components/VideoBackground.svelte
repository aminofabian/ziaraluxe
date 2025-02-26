<script lang="ts">
  import { onMount } from 'svelte';
  
  export let videoSrc: string;
  export let posterSrc: string = '/images/poster.jpg';
  let isLoaded = false;
  let isError = false;

  function resolveVideoSrc() {
    if (!videoSrc) {
      isError = true;
      return;
    }

    if (videoSrc.includes('streamable.com')) {
      // Extract video ID from Streamable URL and format it correctly
      const videoId = videoSrc.split('/').pop();
      // Use Streamable's player API with autoplay and muted parameters
      return `https://streamable.com/e/${videoId}?autoplay=1&muted=1`;
    } else {
      // For local videos, create a video element
      const video = document.createElement('video');
      video.src = videoSrc;
      video.muted = true;
      video.autoplay = true;
      video.loop = true;
      video.playsInline = true;
      video.poster = posterSrc;
      video.className = 'absolute top-0 left-0 w-full h-full object-cover';
      
      // Force video to play after loading
      video.load();
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Video playback failed:', error);
          isError = true;
        });
      
      video.addEventListener('error', (e) => {
        console.error('Video loading error:', e.target.error);
        isError = true;
      });

      video.addEventListener('loadeddata', () => {
        isLoaded = true;
        // Try to play the video again after it's loaded
        video.play().catch(error => {
          console.error('Video playback failed after load:', error);
          isError = true;
        });
      });

      video.addEventListener('canplaythrough', () => {
        isLoaded = true;
        video.play().catch(error => {
          console.error('Video playback failed on canplaythrough:', error);
          isError = true;
        });
      });

      return video;
    }
  }

  let videoElement: HTMLVideoElement | string;

  onMount(() => {
    videoElement = resolveVideoSrc();
    if (typeof videoElement === 'object') {
      const container = document.querySelector('.video-container');
      container?.appendChild(videoElement);
    }
  });
</script>

<div class="absolute inset-0 w-full h-full overflow-hidden video-container">
  {#if !isError}
    {#if typeof videoElement === 'string'}
      <iframe
        title="Streamable video"
        class="absolute top-0 left-0 w-full h-full"
        src={videoElement}
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