<script lang="ts">
  import { onMount } from 'svelte';

  export let features = [
    {
      image: '/images/featuresection/business-5475283_1280.jpg',
      icon: '🚀',
      title: 'Entrepreneurs & Business Owners',
      description: 'Looking to expand into new markets, meet potential partners, and gain insights into global industries.',
    },
    {
      image: '/images/featuresection/photo-1549403666-683c34342d9c.avif',
      icon: '👔',
      title: 'Corporate Executives & Decision Makers',
      description: 'Seeking industry-specific benchmarking, strategic collaborations, and leadership insights.',
    },
    {
      image: '/images/featuresection/photo-1497215728101-856f4ea42174.avif',
      icon: '📈',
      title: 'Investors & Venture Capitalists',
      description: 'Exploring high-value business ventures, start-up ecosystems, and emerging industries worldwide.',
    },
    {
      image: '/images/featuresection/building-4884852_640.jpg',
      icon: '⚖️',
      title: 'Policymakers & Government Officials',
      description: 'Studying economic models, trade policies, and regulatory frameworks from leading nations.',
    },
    {
      image: '/images/featuresection/photo-1431540015161-0bf868a2d407.avif',
      icon: '🔬',
      title: 'Industry Experts & Researchers',
      description: 'Gaining hands-on experience in specialized fields, from healthcare innovations to agricultural advancements.',
    },
    {
      image: '/images/featuresection/ai-generated-8715094_640.jpg',
      icon: '🤝',
      title: 'Business Councils & Trade Associations',
      description: 'Organizing exclusive industry missions, sector-based learning tours, and cross-border networking.',
    }
  ];

  const floatingImages = [
    '/images/featuresection/business-5475283_1280.jpg',
    '/images/featuresection/photo-1549403666-683c34342d9c.avif',
    '/images/featuresection/photo-1497215728101-856f4ea42174.avif',
    '/images/featuresection/road-trip-437413_640.jpg',
    '/images/featuresection/station-7946105_1280.jpg',
    '/images/featuresection/building-4884852_640.jpg'
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

<section class="relative py-16 sm:py-32 px-4 overflow-hidden bg-gradient-to-b from-white to-[#faf7f5]">
  <!-- Premium background effects -->
  <div class="absolute inset-0">
    <div class="absolute inset-0 opacity-10 bg-[url('/images/noise.png')] mix-blend-overlay"></div>
    <div class="absolute inset-0 bg-gradient-to-br from-[#b05535]/5 via-transparent to-[#e3a457]/5"></div>
  </div>

  <div class="container mx-auto max-w-7xl relative z-10">
    <!-- Premium Section Title -->
    <div class="text-center mb-12 sm:mb-24">
      <div class="inline-block">
        <span class="text-[#b05535] text-xs sm:text-sm font-medium tracking-wider uppercase mb-2 sm:mb-4 block">Exclusive Network</span>
        <h2 class="text-[#2c1810] text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">WHO IS THIS FOR?</h2>
        <p class="text-[#2c1810]/60 text-base sm:text-lg font-light">Experience luxury travel redefined</p>
        <div class="mt-4 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[#b05535] to-transparent"></div>
      </div>
    </div>

    <!-- Lifecycle Circle -->
    <div class="relative max-w-7xl mx-auto min-h-[500px] sm:min-h-[600px] h-auto lg:h-[1000px] flex items-start sm:items-center justify-center py-12 sm:py-20 lg:py-0">
      <!-- Floating Background Images -->
      {#each floatingImages.slice(0, 3) as image, i}
        <div 
          class="absolute floating-image opacity-0 transform hidden lg:block"
          style="--index: {i};"
        >
          <div class="relative w-full h-full overflow-hidden rounded-2xl shadow-xl">
            <img src={image} alt="" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-br from-[#b05535]/10 to-[#e3a457]/10"></div>
          </div>
        </div>
      {/each}

      <div class="relative w-full lg:w-[1000px] h-full lg:h-[1000px]">
        <!-- Orbital Particles -->
        <div class="absolute inset-0 orbital-particles hidden lg:block"></div>

        <!-- Center Image -->
        <div class="absolute top-0 lg:top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 w-32 sm:w-48 md:w-72 lg:w-96 h-32 sm:h-48 md:h-72 lg:h-96 z-10">
          <div class="relative w-full h-full">
            <!-- Pulsing Rings -->
            <div class="absolute inset-[-20px] pulse-ring hidden lg:block"></div>
            <div class="absolute inset-[-10px] pulse-ring hidden lg:block" style="animation-delay: -4s"></div>
            
            <div class="absolute inset-0 bg-gradient-to-br from-[#b05535] to-[#e3a457] rounded-full p-2 glow-effect">
              <div class="absolute inset-0 bg-white rounded-full"></div>
            </div>
            <div class="absolute inset-3 overflow-hidden rounded-full shadow-xl">
              <img src={features[0].image} alt="Center" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-br from-[#b05535]/10 to-[#e3a457]/10"></div>
            </div>
          </div>
        </div>

        <!-- Connecting Lines -->
        <div class="absolute inset-0 lifecycle-lines hidden lg:block"></div>
        <div class="absolute inset-0 sparkle-lines hidden lg:block"></div>

        <!-- Features List/Circle -->
        <div class="flex flex-col lg:block space-y-6 sm:space-y-8 lg:space-y-0 mt-40 sm:mt-64 md:mt-96 lg:mt-0 px-4 lg:px-0">
          {#each features as feature, i}
            <div 
              class="relative lg:absolute lifecycle-item group"
              style="--index: {i}; --total: {features.length};"
            >
              <div class="relative">
                <!-- Connection Line -->
                <div class="absolute inset-0 connection-line hidden lg:block"></div>
                
                <!-- Feature Content -->
                <div class="relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-white group-hover:ring-2 ring-[#b05535]/20 w-full max-w-[280px] xs:max-w-[320px] sm:max-w-sm mx-auto lg:mx-0">
                  <div class="lifecycle-icon-frame mb-3 sm:mb-4 group-hover:animate-bounce-subtle">
                    <span class="text-lg sm:text-xl">{feature.icon}</span>
                  </div>
                  <h3 class="text-[#2c1810] text-sm sm:text-base lg:text-lg font-medium mb-2 sm:mb-3 group-hover:text-[#b05535] transition-colors duration-300 line-clamp-2">
                    {feature.title}
                  </h3>
                  <p class="text-[#2c1810]/60 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {feature.description}
                  </p>
                  <!-- Hover Indicator -->
                  <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-[#b05535] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <!-- Feature Image Preview -->
                <div class="absolute -top-20 left-1/2 -translate-x-1/2 w-28 h-28 lifecycle-image opacity-0 group-hover:opacity-100 transition-all duration-500 hidden lg:block">
                  <div class="w-full h-full rounded-full overflow-hidden shadow-xl relative">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#b05535] to-[#e3a457] animate-spin-slow"></div>
                    <div class="absolute inset-0.5 rounded-full overflow-hidden">
                      <img src={feature.image} alt={feature.title} class="w-full h-full object-cover" />
                      <div class="absolute inset-0 bg-gradient-to-br from-[#b05535]/10 to-[#e3a457]/10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .lifecycle-lines {
    border: 2px dashed #e3a457;
    border-radius: 50%;
    animation: rotate 60s linear infinite;
    width: 900px;
    height: 900px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle at center, transparent 48%, rgba(227, 164, 87, 0.03) 50%);
  }

  .lifecycle-lines::before {
    content: '';
    position: absolute;
    inset: -40px;
    border: 2px dashed #b05535;
    border-radius: 50%;
    opacity: 0.3;
  }

  .lifecycle-item {
    --angle: calc(360deg / var(--total) * var(--index));
    --radius: 450px;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 280px;
    transform: 
      rotate(var(--angle))
      translateX(var(--radius))
      rotate(calc(-1 * var(--angle)));
    transform-origin: 0 0;
    opacity: 0;
    animation: fadeIn 0.5s ease-out forwards;
    animation-delay: calc(var(--index) * 0.2s);
  }

  .connection-line {
    position: absolute;
    width: 120px;
    height: 2px;
    background: repeating-linear-gradient(90deg, #e3a457, #e3a457 5px, transparent 5px, transparent 10px);
    top: 50%;
    right: 100%;
    transform-origin: right center;
    opacity: 0.3;
    transition: opacity 0.3s ease;
  }

  .lifecycle-icon-frame {
    width: 40px;
    height: 40px;
    margin: 0 auto;
    background: linear-gradient(45deg, #b05535, #e3a457);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transform: rotate(45deg);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 8px 30px rgba(176, 85, 53, 0.1);
  }

  .lifecycle-icon-frame:before {
    content: '';
    position: absolute;
    inset: 1px;
    background: white;
    border-radius: 15px;
  }

  .lifecycle-icon-frame span {
    transform: rotate(-45deg);
  }

  .group:hover .lifecycle-icon-frame {
    transform: rotate(225deg);
  }

  .group:hover .lifecycle-icon-frame span {
    transform: rotate(-225deg);
  }

  .group:hover .connection-line {
    opacity: 0.8;
    background: linear-gradient(90deg, #e3a457, #b05535);
  }

  .lifecycle-image {
    transform: translateY(20px);
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .group:hover .lifecycle-image {
    transform: translateY(0);
  }

  .floating-image {
    position: absolute;
    animation: float 6s ease-in-out infinite;
    animation-delay: calc(var(--index) * 2s);
    filter: drop-shadow(0 10px 20px rgba(176, 85, 53, 0.1));
  }

  .floating-image:nth-child(1) {
    top: 8%;
    left: 2%;
    width: 300px;
    height: 400px;
  }

  .floating-image:nth-child(2) {
    top: 12%;
    right: 2%;
    width: 320px;
    height: 240px;
  }

  .floating-image:nth-child(3) {
    bottom: 12%;
    left: 5%;
    width: 280px;
    height: 350px;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0) scale(1) rotate(0deg);
      opacity: 0.7;
    }
    50% {
      transform: translateY(-15px) scale(1.02) rotate(1deg);
      opacity: 0.9;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: 
        rotate(var(--angle))
        translateX(calc(var(--radius) + 30px))
        rotate(calc(-1 * var(--angle)))
        scale(0.9);
    }
    to {
      opacity: 1;
      transform: 
        rotate(var(--angle))
        translateX(var(--radius))
        rotate(calc(-1 * var(--angle)))
        scale(1);
    }
  }

  .orbital-particles {
    background-image: radial-gradient(circle at center, #b05535 1px, transparent 1px),
                     radial-gradient(circle at center, #e3a457 1px, transparent 1px);
    background-size: 40px 40px, 30px 30px;
    background-position: 0 0, 15px 15px;
    animation: particleMove 20s linear infinite;
    opacity: 0.1;
  }

  .pulse-ring {
    border: 2px solid #b05535;
    border-radius: 50%;
    animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    opacity: 0;
  }

  .sparkle-lines {
    border: 1px solid rgba(227, 164, 87, 0.1);
    border-radius: 50%;
    animation: sparkle 4s ease-in-out infinite;
    background: linear-gradient(45deg, transparent 45%, #e3a457 50%, transparent 55%);
    background-size: 200% 200%;
    background-position: 0 0;
  }

  .glow-effect {
    box-shadow: 0 0 30px rgba(176, 85, 53, 0.2);
    animation: glow 4s ease-in-out infinite;
  }

  @keyframes particleMove {
    0% {
      background-position: 0 0, 15px 15px;
    }
    100% {
      background-position: 40px 40px, 55px 55px;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      opacity: 0;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.2;
    }
    100% {
      transform: scale(1.15);
      opacity: 0;
    }
  }

  @keyframes sparkle {
    0%, 100% {
      background-position: 200% 200%;
      opacity: 0.1;
    }
    50% {
      background-position: 0% 0%;
      opacity: 0.3;
    }
  }

  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 30px rgba(176, 85, 53, 0.2);
    }
    50% {
      box-shadow: 0 0 50px rgba(176, 85, 53, 0.4);
    }
  }

  .animate-bounce-subtle {
    animation: bounce-subtle 2s ease-in-out infinite;
  }

  .animate-spin-slow {
    animation: spin 8s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 1024px) {
    .lifecycle-item {
      --radius: 0;
      position: relative;
      transform: none !important;
      opacity: 1;
      animation: fadeInMobile 0.5s ease-out forwards;
      animation-delay: calc(var(--index) * 0.2s);
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      max-width: 280px;
    }

    @keyframes fadeInMobile {
      from {
        opacity: 0;
        transform: translateY(20px) !important;
      }
      to {
        opacity: 1;
        transform: translateY(0) !important;
      }
    }
  }

  @media (min-width: 1024px) {
    .lifecycle-item {
      --angle: calc(360deg / var(--total) * var(--index));
      --radius: 450px;
      position: absolute;
      transform: 
        rotate(var(--angle))
        translateX(var(--radius))
        rotate(calc(-1 * var(--index) * (360deg / var(--total)))) !important;
      width: 280px;
      max-width: none;
    }
  }

  @media (max-width: 768px) {
    .floating-image:nth-child(1) {
      display: none;
    }
    .floating-image:nth-child(2) {
      display: none;
    }
    .floating-image:nth-child(3) {
      display: none;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

