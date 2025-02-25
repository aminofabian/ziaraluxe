<script lang="ts">
  import { fade, fly, draw } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  
  const destinations = [
    {
      title: "Bali Boujee on a Budget",
      tags: ["Culture", "Islands", "Summer"],
      image: "/images/tips/bali/DSC03735.jpg",
      dates: "January 01st - December 31st",
      price: "from $1,999"
    },
    {
      title: "Dubai Luxe Getaway",
      tags: ["Culture", "Luxe Living", "Summer"],
      image: "/images/tips/bali/DSC04052.jpg",
      dates: "January 01st - December 31st",
      price: "from $2,499"
    },
    {
      title: "Bali Baccation",
      tags: ["Culture", "Adventure", "Summer"],
      image: "/images/tips/bali/IMG_7387-scaled.jpg",
      dates: "January 01st - December 31st",
      price: "from $1,799"
    }
  ];
</script>

<section class="py-24 relative bg-white">
  <!-- Decorative elements -->
  <div class="absolute inset-0 overflow-hidden">
    <svg class="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid-pattern)" opacity="0.03"></path>
    </svg>
    <div class="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#b05535] rounded-full blur-3xl opacity-10"></div>
    <div class="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#b05535] rounded-full blur-3xl opacity-10"></div>
  </div>

  <div class="container mx-auto px-4 relative">
    <div class="max-w-3xl mx-auto mb-16 text-center">
      <h2 class="text-5xl font-serif text-[#b05535] mb-4 relative">
        Bucket list vacations designed for your budget!
        <svg class="absolute -right-12 top-0 w-24 h-24 text-[#b05535] opacity-20" viewBox="0 0 24 24" fill="none">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
          <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </h2>
      <p class="text-[#b05535]/70 text-lg">
        Browse our travel packages or request a customized trip designed to match your travel style.
      </p>
    </div>

    <!-- Features Pills -->
    <div class="flex flex-wrap gap-3 justify-center mb-16">
      <div class="inline-flex items-center px-6 py-3 rounded-xl border border-[#b05535] bg-[#b05535]/5 shadow-sm hover:shadow-md transition-shadow duration-300">
        <span class="mr-2 text-xl">🌎</span>
        <span class="text-[#b05535] font-medium">OVER 100 DESTINATIONS</span>
      </div>
      <div class="inline-flex items-center px-6 py-3 rounded-xl border border-[#b05535] bg-[#b05535]/5 shadow-sm hover:shadow-md transition-shadow duration-300">
        <span class="mr-2 text-xl">💰</span>
        <span class="text-[#b05535] font-medium">FOR EVERY BUDGET</span>
      </div>
      <div class="inline-flex items-center px-6 py-3 rounded-xl border border-[#b05535] bg-[#b05535]/5 shadow-sm hover:shadow-md transition-shadow duration-300">
        <span class="mr-2 text-xl">💳</span>
        <span class="text-[#b05535] font-medium">FLEXIBLE PAYMENTS</span>
      </div>
      <div class="inline-flex items-center px-6 py-3 rounded-xl border border-[#b05535] bg-[#b05535]/5 shadow-sm hover:shadow-md transition-shadow duration-300">
        <span class="mr-2 text-xl">✨</span>
        <span class="text-[#b05535] font-medium">CURATED TRAVEL PLANS</span>
      </div>
    </div>

    <!-- Destinations Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each destinations as destination, i}
        <div 
          class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
          in:fly={{ y: 20, duration: 800, delay: i * 200 }}
        >
          <!-- Image -->
          <div class="aspect-[4/5] relative overflow-hidden rounded-t-3xl">
            <img 
              src={destination.image} 
              alt={destination.title}
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <!-- Price Tag -->
            <div class="absolute top-6 right-6">
              <div class="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                <span class="text-[#b05535] font-medium">{destination.price}</span>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 bg-white relative">
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              {#each destination.tags as tag}
                <span class="px-3 py-1 rounded-full text-xs font-medium bg-[#b05535]/5 text-[#b05535] border border-[#b05535]/20">
                  {tag}
                </span>
              {/each}
            </div>

            <!-- Title and Date -->
            <div>
              <h3 class="text-2xl font-serif text-[#b05535] mb-2 group-hover:opacity-80 transition-colors duration-300">
                {destination.title}
              </h3>
              <p class="text-[#b05535]/60 text-sm flex items-center">
                <svg class="w-4 h-4 mr-2 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {destination.dates}
              </p>
            </div>

            <!-- Hover line decoration -->
            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-[#b05535]/20 scale-x-100">
              <div class="absolute inset-0 bg-[#b05535] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Discover Button -->
    <div class="text-center mt-16">
      <button class="px-8 py-4 bg-[#b05535] rounded-xl text-white hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium tracking-wide group">
        <span class="flex items-center justify-center">
          DISCOVER ALL DESTINATIONS
          <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </button>
    </div>
  </div>

  <!-- SVG Definitions -->
  <svg width="0" height="0" class="hidden">
    <defs>
      <pattern id="grid-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5"/>
      </pattern>
    </defs>
  </svg>
</section>

<style>
  section {
    perspective: 1000px;
  }
</style>
