<script>
  import { onMount } from 'svelte';

  let currentIndex = 0;
  let images = [
    { src: '/images/instagram/alex-azabache-hz4tKDvQHoo-unsplash-scaled.jpg', alt: 'Luxury Travel Experience' },
    { src: '/images/instagram/athens-315833_1920.jpg', alt: 'Athens Historical Site' },
    { src: '/images/instagram/bird-7237037_1920.jpg', alt: 'Exotic Wildlife' },
    { src: '/images/instagram/daniele-colucci-MchEBdctI24-unsplash-scaled.jpg', alt: 'Scenic Landscape' },
    { src: '/images/instagram/france-7370939_1920.jpg', alt: 'French Destination' },
    { src: '/images/instagram/gran-canaria-4360002_1920.jpg', alt: 'Gran Canaria Views' },
    { src: '/images/instagram/halong-bay-day-tour-7678473_1920.jpg', alt: 'Halong Bay Tour' },
    { src: '/images/instagram/hisham-zayadnh-hP9QlSnyX1A-unsplash-scaled.jpg', alt: 'Desert Adventure' },
    { src: '/images/instagram/savannah-8079856_1920.jpg', alt: 'Savannah Experience' },
    { src: '/images/instagram/zebra-7746719_1920.jpg', alt: 'African Wildlife' },
    {src: '/images/instagram/paris-967519_1920.jpg', alt: 'Paris'},
    {src: '/images/instagram/paris-4546007_1920.jpg', alt: 'Paris'},
  ];
  // Calculate number of slides needed (4 images per slide)
  $: totalSlides = Math.ceil(images.length / 4);
  $: imageGroups = Array.from({ length: totalSlides }, (_, i) => 
    images.slice(i * 4, (i * 4) + 4)
  );

  let autoplayInterval;

  onMount(() => {
    startAutoplay();
    return () => {
      if (autoplayInterval) clearInterval(autoplayInterval);
    };
  });

  function startAutoplay() {
    autoplayInterval = setInterval(() => {
      nextSlide();
    }, 5000);
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
  }

  function previousSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  }
</script>

<section class="instagram-section py-24 bg-gradient-to-b from-gray-50 to-white">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <p class="text-primary-600 font-medium mb-3 tracking-wider uppercase text-lg">Discover Our World</p>
      <div class="relative inline-block">
        <h2 class="text-6xl font-bold mb-6 font-serif relative z-10 drop-shadow-sm">
          <span class="relative px-4 inline-block">
            <span class="absolute inset-0 bg-[#b05535]/10 rounded-2xl transform rotate-1"></span>
            <span class="relative text-[#b05535]">Follow</span>
          </span>
          <span class="relative inline-block px-2">
            <span class="absolute inset-0 bg-primary-600/10 -skew-x-12 rounded-xl transform -rotate-1"></span>
            <span class="relative text-primary-700">@ziaraluxe</span>
          </span>
        </h2>
        <div class="absolute -inset-4 bg-white/50 blur-xl -z-10"></div>
      </div>
      <p class="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed mt-6">
        Experience the world through our lens — where luxury meets adventure
      </p>
    </div>

    <div class="relative">
      <div class="overflow-hidden rounded-2xl shadow-2xl">
        <div 
          class="flex transition-transform duration-700 ease-out"
          style="transform: translateX(-{currentIndex * 100}%)">
          {#each imageGroups as group}
            <div class="min-w-full px-4">
              <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                {#each group as img}
                  <div class="relative group overflow-hidden rounded-xl aspect-square">
                    <img 
                      src={img.src} 
                      alt={img.alt}
                      class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p class="text-white font-medium text-lg mb-3 line-clamp-2">
                          {img.alt}
                        </p>
                        <a 
                          href="https://instagram.com/ziaraluxe" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          class="text-primary-300 hover:text-white transition-colors duration-300"
                        >
                          <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Navigation buttons -->
      <button 
        class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 backdrop-blur-sm"
        on:click={previousSlide}
      >
        <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <button 
        class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 backdrop-blur-sm"
        on:click={nextSlide}
      >
        <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </button>

      <div class="flex justify-center mt-8">
        {#each Array(totalSlides) as _, i}
          <button
            class="w-3 h-3 mx-2 rounded-full transition-all duration-300 {currentIndex === i ? 'bg-primary-600 scale-150' : 'bg-gray-300 hover:bg-gray-400'}"
            on:click={() => currentIndex = i}
          ></button>
        {/each}
      </div>
    </div>

    <div class="text-center mt-16">
      <div class="relative inline-block group">
        <div class="absolute -inset-2 bg-gradient-to-r from-[#b05535] via-[#6b7c2d] to-[#b05535] rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
        <a
          href="https://instagram.com/ziaraluxe"
          target="_blank"
          rel="noopener noreferrer"
          class="relative inline-flex items-center space-x-4 bg-[#b05535] px-10 py-5 rounded-full text-xl font-bold hover:bg-[#6b7c2d] transform hover:scale-105 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-[#6b7c2d]"
        >
          <span class="tracking-wider uppercase text-white font-black">
            Join Our Journey
          </span>
          <div class="relative w-6 h-6">
            <div class="absolute inset-0 bg-white rounded-full opacity-30 animate-ping"></div>
            <svg class="relative w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
            </svg>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .instagram-section {
    overflow: hidden;
  }
  
  button {
    outline: none;
  }

  /* Add smooth scroll behavior */
  :global(html) {
    scroll-behavior: smooth;
  }

  @keyframes glow {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
</style>
