<script>
  export let size = 40; // default size in pixels
</script>

<div class="logo-container inline-flex flex-col items-center">
  <!-- Main logo text -->
  <div class="logo-text-group flex items-baseline gap-6">
    <div class="english-text font-serif tracking-[0.25em] text-2xl uppercase">
      <span class="text-accent font-light">Ziara</span>
      <span class="text-white opacity-90 font-extralight">Luxe</span>
    </div>
    <div class="chinese-text text-2xl tracking-wider">
      <span class="text-white opacity-80 font-light">姿雅樂思</span>
    </div>
  </div>

  <!-- Decorative line -->
  <div class="decorative-line mt-2">
    <svg 
      width="240" 
      height="2" 
      viewBox="0 0 240 2" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M0 1H240" 
        class="stroke-accent opacity-30"
        stroke-width="0.5"
        stroke-dasharray="1 2"
      />
    </svg>
  </div>
</div>

<style>
  .logo-container {
    position: relative;
  }
  
  .logo-text-group {
    position: relative;
    padding: 0.5rem 0;
  }
  
  .english-text, .chinese-text {
    transition: opacity 0.3s ease;
  }
  
  .decorative-line {
    opacity: 0.6;
    transition: opacity 0.3s ease;
  }

  /* Hover effects */
  .logo-container:hover .english-text {
    opacity: 0.95;
  }

  .logo-container:hover .chinese-text {
    opacity: 0.95;
  }

  .logo-container:hover .decorative-line {
    opacity: 0.8;
  }
</style>