<script lang="ts">
  export let videoSrc: string;
  let videoElement: HTMLVideoElement;
  let isLoading = true;
  let hasError = false;
  let isPlaying = false;
  let loadAttempts = 0;
  const MAX_ATTEMPTS = 3;

  function handleLoadedData() {
    isLoading = false;
    loadAttempts = 0;
    videoElement.play()
      .then(() => {
        console.log('Video started playing successfully:', videoSrc);
      })
      .catch((error) => {
        console.error('Error playing video:', error);
        handleError(error);
      });
  }

  function handlePlaying() {
    isLoading = false;
    isPlaying = true;
    console.log('Video is now playing:', videoSrc);
  }

  function handleError(error?: any) {
    console.error('Error with video:', videoSrc, error);
    isLoading = false;
    hasError = true;
    isPlaying = false;

    if (loadAttempts < MAX_ATTEMPTS) {
      loadAttempts++;
      console.log(`Attempting to reload video (${loadAttempts}/${MAX_ATTEMPTS})`);
      setTimeout(() => {
        if (videoElement) {
          isLoading = true;
          hasError = false;
          videoElement.load();
        }
      }, 1000 * loadAttempts); // Exponential backoff
    }
  }

  function handleStalled() {
    if (!isPlaying) {
      console.warn('Video playback stalled:', videoSrc);
      handleError(new Error('Video playback stalled'));
    }
  }

  function handleLoadStart() {
    console.log('Started loading video:', videoSrc);
    isLoading = true;
    hasError = false;
  }

  function handleCanPlayThrough() {
    console.log('Video can play through without buffering');
    isLoading = false;
  }
</script>

<div class="absolute inset-0 w-full h-full overflow-hidden -z-10">
  {#if isLoading || hasError}
    <div class="absolute inset-0 bg-black/90">
      <img
        src="/images/poster.jpg"
        alt="Loading background"
        class="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      {#if hasError}
        <div class="absolute inset-0 flex items-center justify-center text-white/70 text-sm">
          <p>Unable to load video. {loadAttempts < MAX_ATTEMPTS ? 'Retrying...' : 'Please refresh the page.'}</p>
        </div>
      {/if}
    </div>
  {/if}
  
  <video
    bind:this={videoElement}
    class="absolute inset-0 w-full h-full object-cover {isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000"
    autoplay
    loop
    muted
    playsinline
    preload="auto"
    poster="/images/poster.jpg"
    on:loadstart={handleLoadStart}
    on:loadeddata={handleLoadedData}
    on:playing={handlePlaying}
    on:error={handleError}
    on:stalled={handleStalled}
    on:canplaythrough={handleCanPlayThrough}
  >
    <source src={videoSrc} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
  
  <!-- Minimal overlay -->
  <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>

<style>
  video {
    will-change: transform;
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000;
    filter: brightness(0.9) saturate(1.1);
  }
</style>
