<script lang="ts">
  export let videoSrc: string;
  let isLoaded = false;
  let isError = false;
  let iframeElement: HTMLIFrameElement;

  // Convert Streamable URL to embed URL with proper format
  $: embedUrl = videoSrc.includes('streamable.com')
    ? `https://streamable.com/e/${videoSrc.split('/').pop()}?autoplay=1&muted=1&loop=1&background=1`
    : videoSrc;

  // Handle iframe load success
  const handleLoadSuccess = () => {
    isLoaded = true;
    isError = false;
  };

  // Handle iframe load error
  const handleLoadError = () => {
    isError = true;
    isLoaded = false;
    console.error('Video loading error:', embedUrl);
  };
</script>

<div class="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none">
  <div class="relative w-full h-full">
    <iframe
      title="Background Video"
      src={videoSrc}
      frameborder="0"
      class="absolute inset-0 w-full h-full object-cover scale-150"
      allow="autoplay"
    />
  </div>
</div>

<style>
  :global(.video-container iframe) {
    width: 100vw !important;
    height: 100vh !important;
    pointer-events: none;
  }
</style>