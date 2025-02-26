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
      // For Streamable URLs, use the video directly
      return videoSrc;
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
      
      video.onerror = () => {
        isError = true;
      };

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
    isLoaded = true;
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
  iframe {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
</style>