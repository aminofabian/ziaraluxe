<script lang="ts">
  export let videoSrc: string;
</script>

<div class="absolute inset-0 w-full h-full overflow-hidden -z-10">
  <video
    class="absolute inset-0 w-full h-full object-cover"
    autoplay
    loop
    muted
    playsinline
    preload="auto"
    poster="/images/poster.jpg"
  >
    <source src={videoSrc} type="video/mp4" />
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
