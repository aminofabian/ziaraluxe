<script lang="ts">
  export let videoSrc: string;
  let isLoaded = false;
  let isError = false;
  let iframeElement: HTMLIFrameElement;
  let isLocalVideo = videoSrc.startsWith('/videos/') || videoSrc.includes('\\videos\\');

  // Convert video URL to embed URL with proper format
  $: embedUrl = !isLocalVideo ? (
    videoSrc.includes('streamable.com')
      ? `https://streamable.com/e/${videoSrc.split('/').pop()}?autoplay=1&muted=1&loop=1&background=1`
      : videoSrc.includes('vimeo.com')
        ? `https://player.vimeo.com/video/${videoSrc.split('/')[3]}/${videoSrc.split('/')[4]}?autoplay=1&loop=1&background=1&muted=1`
        : videoSrc
  ) : '/videos/hero.mp4';

  // Handle media load success
  const handleLoadSuccess = () => {
    isLoaded = true;
    isError = false;
  };

  // Handle media load error
  const handleLoadError = () => {
    isError = true;
    isLoaded = false;
    console.error('Media loading error:', embedUrl);
  };
</script>

<div class="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
  <div class="relative w-full h-full">
    {#if isLocalVideo}
      <video
        autoplay
        loop
        muted
        playsinline
        class="absolute inset-0 w-full h-full object-cover scale-150"
        on:loadeddata={handleLoadSuccess}
        on:error={handleLoadError}
      >
        <source src={embedUrl} type="video/mp4">
      </video>
    {:else}
      <iframe
        bind:this={iframeElement}
        title="Background Video"
        src={embedUrl}
        frameborder="0"
        class="absolute inset-0 w-full h-full object-cover scale-150"
        allow="autoplay; fullscreen"
        on:load={handleLoadSuccess}
        on:error={handleLoadError}
      />
    {/if}
  </div>
</div>

<style>
  :global(.video-container iframe) {
    width: 100vw !important;
    height: 100vh !important;
    pointer-events: none;
  }
</style>