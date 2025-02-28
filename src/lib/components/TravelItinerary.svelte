<script lang="ts">
  import { fade, scale, slide } from 'svelte/transition';
  
  export let title: string;
  export let startDate: string;
  export let endDate: string;
  export let days: {
    date: string;
    dayOfWeek: string;
    location: string;
    activities: Array<{
      time: string;
      description: string;
    }>;
  }[];

  let showBookingForm = false;
  let selectedDay: number | null = null;
  let showPrintVersion = false;
  let filteredDays = days;

  type Feature = {
    icon: string;
    label: string;
    sublabel: string;
  };

  type TourFeatures = {
    [key: string]: Feature[];
  };

  // Dynamic features based on tour type
  const tourFeatures: TourFeatures = {
    "Healing Horizons Retreat": [
      { icon: '🌿', label: 'WELLNESS', sublabel: 'Accessible Healing' },
      { icon: '🏨', label: 'COMFORT', sublabel: 'ADA-Compliant Hotel' },
      { icon: '🎨', label: 'THERAPY', sublabel: 'Art & Music Sessions' },
      { icon: '🍷', label: 'CULTURE', sublabel: 'Wine Country Experience' }
    ],
    "Creative Industry Exploration Tour - Germany": [
      { icon: '🎬', label: 'FILM', sublabel: 'Studio Production' },
      { icon: '🎨', label: 'DESIGN', sublabel: 'Bauhaus Legacy' },
      { icon: '🏛️', label: 'CULTURE', sublabel: 'Museum Access' },
      { icon: '🤝', label: 'NETWORK', sublabel: 'Industry Leaders' }
    ],
    "Creative Industry Exploration Tour - France": [
      { icon: '🎭', label: 'ARTS', sublabel: 'Museum Tours' },
      { icon: '👗', label: 'FASHION', sublabel: 'Atelier Visits' },
      { icon: '🎥', label: 'CINEMA', sublabel: 'Film History' },
      { icon: '🎨', label: 'CREATE', sublabel: 'Artist Workshops' }
    ],
    "Singapore Corporate Benchmark Tour": [
      { icon: '📈', label: 'BUSINESS', sublabel: 'Corporate Access' },
      { icon: '🌆', label: 'INNOVATION', sublabel: 'Tech Ecosystem' },
      { icon: '🤝', label: 'NETWORK', sublabel: 'Industry Leaders' },
      { icon: '🌟', label: 'LUXURY', sublabel: 'Premium Experience' }
    ],
    "Six Days Conscious Travelers' Tour - Kenya": [
      { icon: '🌍', label: 'IMPACT', sublabel: 'Community Projects' },
      { icon: '🦁', label: 'WILDLIFE', sublabel: 'Conservation Focus' },
      { icon: '🏘️', label: 'CULTURE', sublabel: 'Local Immersion' },
      { icon: '♻️', label: 'ECO', sublabel: 'Sustainable Travel' }
    ],
    "Netherlands Business Travel - Craft Beer Industry": [
      { icon: '🍺', label: 'CRAFT', sublabel: 'Brewery Tours' },
      { icon: '🤝', label: 'NETWORK', sublabel: 'Industry Meetings' },
      { icon: '💼', label: 'BUSINESS', sublabel: 'Investment Opportunities' },
      { icon: '🌍', label: 'CULTURE', sublabel: 'Dutch Heritage' }
    ],
    "Agricultural Technology Travel - Egypt & Israel": [
      { icon: '🌾', label: 'AGTECH', sublabel: 'Innovation Hubs' },
      { icon: '🔬', label: 'RESEARCH', sublabel: 'Desert Agriculture' },
      { icon: '🤝', label: 'NETWORK', sublabel: 'Industry Leaders' },
      { icon: '🌍', label: 'GLOBAL', sublabel: 'Cross-Border Tech' }
    ],
    "Six Days Conscious Travelers' Tour - Tanzania": [
      { icon: '📚', label: 'EDUCATION', sublabel: 'School Support' },
      { icon: '🦁', label: 'WILDLIFE', sublabel: 'Conservation' },
      { icon: '👥', label: 'COMMUNITY', sublabel: 'Health & Empowerment' },
      { icon: '🌍', label: 'CULTURE', sublabel: 'Local Immersion' }
    ]
  };

  $: features = tourFeatures[title] || [];

  const locationImages: Record<string, string> = {
    'Cape Town & Franschhoek': '/images/tips/destinations/gran-canaria-4360002_1920.jpg',
    'Mont Rochelle Nature Reserve': '/images/tours/fertile-agricultural-farm-16-9-800x600.jpg',
    'Franschhoek Village': '/images/tips/destinations/france-7370939_1920.jpg',
    'Camelot Spa': '/images/tips/destinations/boat-7767575_1920.jpg',
    'Departure Day': '/images/tips/destinations/camping-7947055_1920.jpg',
    'Changi Airport, Singapore': '/images/singapore/singapore-airlines-4675695_640.jpg',
    'Marina Bay Sands, Singapore': '/images/singapore/skyline-4012151_640.jpg',
    'Block71, Singapore': '/images/singapore/singapore-2471492_640.jpg',
    'Gardens By The Bay': '/images/singapore/singapore-5653556_640.jpg',
    'Singapore Management University': '/images/singapore/singapore-1234646_640.jpg'
  };

  function getLocationImage(location: string): string {
    return locationImages[location] || '/images/tours/fertile-agricultural-farm-16-9-800x600.jpg';
  }

  function filterDays(index: number | null) {
    selectedDay = index;
    filteredDays = index === null ? days : days.filter((_, i) => i === index);
  }

  $: halfLength = Math.ceil(filteredDays.length / 2);
</script>

<div class="min-h-screen bg-white py-12">
  <!-- Floating Action Buttons -->
  <div class="fixed bottom-8 right-8 space-y-4 z-50">
    <button 
      class="w-14 h-14 bg-[#b05535] text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center group"
      on:click={() => showBookingForm = true}
    >
      <span class="text-2xl group-hover:scale-110 transition-transform">📅</span>
      <span class="absolute right-16 bg-white text-[#b05535] px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Book Now</span>
    </button>
    <button 
      class="w-14 h-14 bg-white text-[#b05535] rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center border-2 border-[#b05535] group"
      on:click={() => showPrintVersion = !showPrintVersion}
    >
      <span class="text-2xl group-hover:scale-110 transition-transform">{showPrintVersion ? '👁️' : '🖨️'}</span>
      <span class="absolute right-16 bg-white text-[#b05535] px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {showPrintVersion ? 'View Normal' : 'Print Version'}
      </span>
    </button>
  </div>

  <!-- Booking Form Modal -->
  {#if showBookingForm}
    <div 
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 w-full border-0"
      transition:fade
      on:click={() => showBookingForm = false}
    >
      <div 
        class="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl"
        on:click|stopPropagation
        role="dialog"
        aria-modal="true"
      >
        <h3 class="text-2xl font-bold text-[#b05535] mb-6">Book Your AgTech Journey</h3>
        <form class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-2">
              <label class="text-sm text-gray-600">First Name</label>
              <input type="text" class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#b05535] outline-none" />
            </div>
            <div class="space-y-2">
              <label class="text-sm text-gray-600">Last Name</label>
              <input type="text" class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#b05535] outline-none" />
            </div>
          </div>
          <div class="space-y-2">
            <label class="text-sm text-gray-600">Email</label>
            <input type="email" class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#b05535] outline-none" />
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-2">
              <label class="text-sm text-gray-600">Travel Date</label>
              <input type="date" class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#b05535] outline-none" />
            </div>
            <div class="space-y-2">
              <label class="text-sm text-gray-600">Number of Travelers</label>
              <input type="number" min="1" class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#b05535] outline-none" />
            </div>
          </div>
          <button class="w-full py-3 bg-[#b05535] text-white rounded-lg hover:bg-[#b05535]/90 transition-colors">
            Submit Booking Request
          </button>
        </form>
      </div>
    </div>
  {/if}

  <div class="container mx-auto px-4 max-w-6xl">
    <!-- Header Section -->
    <div class="relative rounded-2xl overflow-hidden mb-12 bg-[#b05535] text-white">
      <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
      <div class="relative z-10 p-8 md:p-12">
        <div class="grid lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p class="text-xl mb-6 text-white/90">{startDate} - {endDate}</p>
            
            <!-- Feature Grid -->
            <div class="grid grid-cols-2 gap-4 mb-8">
              {#each features as feature}
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <span class="text-2xl mb-2 inline-block">{feature.icon}</span>
                  <p class="font-medium">{feature.label}</p>
                  <p class="text-sm text-white/80">{feature.sublabel}</p>
                </div>
              {/each}
            </div>
          </div>

          <div class="relative">
            <img 
              src="/images/tips/destinations/gran-canaria-4360002_1920.jpg" 
              alt="Route Map" 
              class="w-full h-full object-cover rounded-xl shadow-lg"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <button 
                class="w-full py-3 bg-white text-[#b05535] rounded-lg font-medium hover:bg-white/90 transition-colors"
                on:click={() => showBookingForm = true}
              >
                Book This Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Navigation -->
    <div class="mb-8 -mx-4 px-4 md:mx-0">
      <div class="grid grid-cols-2 md:flex md:flex-wrap gap-3 py-4">
        <button 
          class="col-span-2 md:col-span-1 h-14 md:h-12 px-4 rounded-xl transition-all duration-300 text-center flex items-center justify-center {selectedDay === null ? 'bg-[#b05535] text-white shadow-lg' : 'bg-white text-[#b05535] hover:bg-[#b05535]/5 border-2 border-[#b05535] shadow-sm'}"
          on:click={() => filterDays(null)}
        >
          <span class="font-semibold text-base">All Days</span>
        </button>
        {#each days as day, i}
          <button 
            class="h-14 md:h-12 px-4 rounded-xl transition-all duration-300 text-center flex items-center justify-center {selectedDay === i ? 'bg-[#b05535] text-white shadow-lg' : 'bg-white text-[#b05535] hover:bg-[#b05535]/5 border-2 border-[#b05535] shadow-sm'}"
            on:click={() => filterDays(i)}
          >
            <span class="font-semibold text-base">Day {i + 1}</span>
          </button>
        {/each}
      </div>
    </div>

    <!-- Main Grid Layout -->
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Left Column -->
      <div class="space-y-8">
        {#each filteredDays.slice(0, halfLength) as day, i (day.date)}
          <div 
            class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
            class:ring-2={selectedDay === i}
            class:ring-[#b05535]={selectedDay === i}
          >
            <!-- Location Image -->
            <div class="aspect-video relative">
              <img 
                src={getLocationImage(day.location)} 
                alt={day.location}
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-xl font-bold">{day.dayOfWeek}</h3>
                <p class="text-white/90">{day.date}</p>
              </div>
            </div>

            <div class="p-6">
              <div class="flex items-center gap-2 mb-4 text-[#b05535]">
                <span class="text-xl">📍</span>
                <p class="font-medium">{day.location}</p>
              </div>

              <div class="space-y-4">
                {#each day.activities as activity}
                  <div class="flex gap-4 group">
                    <div class="w-24 text-center py-2 px-3 bg-[#b05535]/10 text-[#b05535] rounded-lg font-medium group-hover:bg-[#b05535] group-hover:text-white transition-colors">
                      {activity.time}
                    </div>
                    <div class="flex-1">
                      <p class="text-gray-700 group-hover:text-[#b05535] transition-colors">{activity.description}</p>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>

      <!-- Right Column -->
      <div class="space-y-8">
        {#each filteredDays.slice(halfLength) as day, i (day.date)}
          <div 
            class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
            class:ring-2={selectedDay === i + halfLength}
            class:ring-[#b05535]={selectedDay === i + halfLength}
          >
            <!-- Location Image -->
            <div class="aspect-video relative">
              <img 
                src={getLocationImage(day.location)} 
                alt={day.location}
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-xl font-bold">{day.dayOfWeek}</h3>
                <p class="text-white/90">{day.date}</p>
              </div>
            </div>

            <div class="p-6">
              <div class="flex items-center gap-2 mb-4 text-[#b05535]">
                <span class="text-xl">📍</span>
                <p class="font-medium">{day.location}</p>
              </div>

              <div class="space-y-4">
                {#each day.activities as activity}
                  <div class="flex gap-4 group">
                    <div class="w-24 text-center py-2 px-3 bg-[#b05535]/10 text-[#b05535] rounded-lg font-medium group-hover:bg-[#b05535] group-hover:text-white transition-colors">
                      {activity.time}
                    </div>
                    <div class="flex-1">
                      <p class="text-gray-700 group-hover:text-[#b05535] transition-colors">{activity.description}</p>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Bottom CTA -->
    <div class="mt-12 text-center">
      <button 
        class="inline-flex items-center gap-2 px-8 py-4 bg-[#b05535] text-white rounded-full font-medium hover:bg-[#b05535]/90 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
        on:click={() => showBookingForm = true}
      >
        <span>Reserve Your Spot</span>
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  </div>
</div>

<style>
  /* Print styles */
  @media print {
    .fixed {
      display: none !important;
    }
    
    .shadow-lg,
    .shadow-xl,
    .hover\:shadow-xl {
      box-shadow: none !important;
    }

    .transform,
    .transition-all,
    .hover\:scale-105 {
      transform: none !important;
    }

    .page-break-after {
      page-break-after: always;
    }
  }

  /* Hide scrollbar but keep functionality */
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Chrome, Safari and Opera */
  }
</style> 