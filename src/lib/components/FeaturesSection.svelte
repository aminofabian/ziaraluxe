<script lang="ts">
  import { onMount } from 'svelte';

  export let features = [
    {
      image: '/images/tips/8F7A1154-2-scaled.jpg',
      icon: '💳',
      title: 'Payment plans',
      description: 'Our trips are designed to be affordable and convenient. You have the option to select a flexible payment schedule, allowing you to pay for your trip either in full or through monthly installments!',
    },
    {
      image: '/images/tips/alex-azabache-hz4tKDvQHoo-unsplash-scaled.jpg',
      icon: '🌟',
      title: 'Curated experiences',
      description: 'Each trip is meticulously planned by our team of travel experts! We curate experiences in destinations we deeply understand, ensuring meaningful and well-crafted experiences tailored specifically for you.',
    },
    {
      image: '/images/tips/hisham-zayadnh-hP9QlSnyX1A-unsplash-scaled.jpg',
      icon: '👥',
      title: 'A travel community',
      description: 'Ditch the flaky group chats! Our group trips bring likeminded professionals from all over the world. We are all about venturing beyond your comfort zone and forming new friendships.',
    },
    {
      image: '/images/tips/daniele-colucci-MchEBdctI24-unsplash-scaled.jpg',
      icon: '🤝',
      title: 'Giving back',
      description: 'In addition to collaborating with locals and small businesses in each destination, a portion of the proceeds from our trips goes towards enriching the local communities in the countries you explore.',
    }
  ];

  const floatingImages = [
    '/images/tips/8F7A1154-2-scaled.jpg',
    '/images/tips/8F7A1511.jpg',
    '/images/tips/130644843.jpg',
    '/images/tips/alex-azabache-hz4tKDvQHoo-unsplash-scaled.jpg',
    '/images/tips/daniele-colucci-MchEBdctI24-unsplash-scaled.jpg',
    '/images/tips/DSC04814.jpg'
  ];

  let isVisible = false;

  onMount(() => {
    isVisible = true;
  });

  const codeSteps = [
    { icon: '⚡', label: 'Initialize' },
    { icon: '🔄', label: 'Process' },
    { icon: '✨', label: 'Transform' },
    { icon: '🚀', label: 'Deploy' }
  ];
</script>

<section class="relative py-32 px-4 overflow-hidden">
  <!-- Decorative background elements -->
  <div class="absolute inset-0 bg-[#b05535]/5"></div>
  <div class="absolute inset-x-0 -top-32 h-32 bg-gradient-to-b from-black/90 to-transparent z-20"></div>
  
  <!-- Floating Images -->
  {#each floatingImages as image, i}
    <div 
      class="absolute hidden xl:block floating-image" 
      style="--delay: {i * 2}s; --duration: {8 + i}s; --scale: {0.95 + (i * 0.02)};"
    >
      <div class="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl transform rotate-{i * 45} hover:scale-105 transition-transform duration-500">
        <img src={image} alt="Travel moment" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#b05535]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  {/each}

  <div class="container mx-auto max-w-7xl relative z-10">
    <!-- Section Title -->
    <div class="text-center mb-20">
      <h2 class="font-sans text-5xl font-bold mb-4 text-[#b05535]">Why Travel With Us</h2>
      <p class="text-lg text-gray-600 font-sans">Experience luxury travel redefined</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative">
      <!-- Connecting lines in background -->
      <div class="absolute hidden md:block">
        <div class="w-full h-[2px] absolute top-1/2 left-0 bg-[#e3a457]/20"></div>
        <div class="w-[2px] h-full absolute top-0 left-1/2 bg-[#e3a457]/20"></div>
      </div>

      <!-- Left Features -->
      <div class="space-y-16">
        <!-- Payment Plans -->
        <div class="group text-center">
          <div class="mb-6 relative">
            <div class="w-20 h-20 mx-auto bg-[#e3a457] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <i class="text-3xl text-white">{features[0].icon}</i>
            </div>
          </div>
          <h3 class="font-sans text-2xl font-semibold mb-4 text-[#b05535]">{features[0].title}</h3>
          <p class="text-gray-600 font-sans">{features[0].description}</p>
        </div>
        
        <!-- Travel Community -->
        <div class="group text-center">
          <div class="mb-6 relative">
            <div class="w-20 h-20 mx-auto bg-[#e3a457] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <i class="text-3xl text-white">{features[2].icon}</i>
            </div>
          </div>
          <h3 class="font-sans text-2xl font-semibold mb-4 text-[#b05535]">{features[2].title}</h3>
          <p class="text-gray-600 font-sans">{features[2].description}</p>
        </div>
      </div>

      <!-- Center Image -->
      <div class="relative group">
        <div class="absolute -inset-4 bg-[#e3a457] rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
        <div class="aspect-square rounded-full overflow-hidden border-[12px] border-white shadow-xl relative">
          <div class="absolute inset-0 bg-[#b05535]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src="/images/tips/8F7A1154-2-scaled.jpg"
            alt="Luxurious travel experience"
            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      </div>

      <!-- Right Features -->
      <div class="space-y-16">
        <!-- Curated Experiences -->
        <div class="group text-center">
          <div class="mb-6 relative">
            <div class="w-20 h-20 mx-auto bg-[#e3a457] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <i class="text-3xl text-white">{features[1].icon}</i>
            </div>
          </div>
          <h3 class="font-sans text-2xl font-semibold mb-4 text-[#b05535]">{features[1].title}</h3>
          <p class="text-gray-600 font-sans">{features[1].description}</p>
        </div>

        <!-- Giving Back -->
        <div class="group text-center">
          <div class="mb-6 relative">
            <div class="w-20 h-20 mx-auto bg-[#e3a457] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <i class="text-3xl text-white">{features[3].icon}</i>
            </div>
          </div>
          <h3 class="font-sans text-2xl font-semibold mb-4 text-[#b05535]">{features[3].title}</h3>
          <p class="text-gray-600 font-sans">{features[3].description}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Decorative dots -->
  <div class="absolute top-12 left-12 grid grid-cols-3 gap-2 opacity-20">
    {#each Array(9) as _}
      <div class="w-2 h-2 rounded-full bg-[#e3a457]"></div>
    {/each}
  </div>
  <div class="absolute bottom-12 right-12 grid grid-cols-3 gap-2 opacity-20">
    {#each Array(9) as _}
      <div class="w-2 h-2 rounded-full bg-[#e3a457]"></div>
    {/each}
  </div>
</section>

<style>
  section {
    background-color: white;
  }

  .floating-image {
    animation: float var(--duration) ease-in-out infinite;
    animation-delay: var(--delay);
    transform: scale(var(--scale));
    z-index: 1;
    pointer-events: auto;
    transition: all 0.5s ease-in-out;
  }

  .floating-image:hover {
    z-index: 10;
  }

  .floating-image:nth-child(1) { top: 5%; left: -5%; }
  .floating-image:nth-child(2) { top: 60%; left: -8%; }
  .floating-image:nth-child(3) { top: 15%; right: -5%; }
  .floating-image:nth-child(4) { top: 70%; right: -8%; }
  .floating-image:nth-child(5) { top: 40%; left: -10%; }
  .floating-image:nth-child(6) { top: 30%; right: -10%; }

  @keyframes float {
    0%, 100% {
      transform: translateY(0) scale(var(--scale));
    }
    50% {
      transform: translateY(-40px) scale(var(--scale));
    }
  }

  /* Smooth scroll behavior for the entire page */
  :global(html) {
    scroll-behavior: smooth;
  }

  /* Update font to use Plus Jakarta Sans */
  :global(body) {
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
</style>
