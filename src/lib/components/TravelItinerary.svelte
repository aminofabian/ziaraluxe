<script lang="ts">
  import { fade, scale } from 'svelte/transition';
  
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

  let currentTab = 'itinerary';
  let showBookingForm = false;
  let selectedDay = 0;

  const features = [
    { icon: '✈️', label: '2 COUNTRIES', sublabel: 'Egypt & Israel' },
    { icon: '🌟', label: 'LUXURY HOTELS', sublabel: '5-star Accommodations' },
    { icon: '🔬', label: 'TECH VISITS', sublabel: 'Leading AgTech Centers' },
    { icon: '🤝', label: 'NETWORKING', sublabel: 'Industry Leaders' }
  ];
</script>

<div class="min-h-screen bg-gradient-to-br from-white via-[#b05535]/5 to-white">
  <!-- Decorative Elements -->
  <div class="fixed inset-0 pointer-events-none">
    <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-[#b05535]/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#e3a457]/5 rounded-full blur-3xl"></div>
  </div>

  <!-- Floating Booking Form -->
  {#if showBookingForm}
    <button class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 w-full" 
           on:click={() => showBookingForm = false}
           in:fade={{ duration: 200 }}
           out:fade={{ duration: 200 }}>
      <dialog 
           class="bg-white/95 backdrop-blur-xl rounded-2xl p-8 max-w-lg w-full shadow-2xl border border-white/20 text-left" 
           aria-modal="true"
           in:scale={{ duration: 300, start: 0.95 }}
           out:scale={{ duration: 200, start: 1 }}>
        <div on:click|stopPropagation role="presentation">
          <h3 class="text-2xl font-serif font-bold text-[#b05535] mb-6">Book Your AgTech Journey</h3>
          <form class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" class="px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-[#b05535] outline-none transition-all duration-300 hover:bg-white">
              <input type="text" placeholder="Last Name" class="px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-[#b05535] outline-none transition-all duration-300 hover:bg-white">
            </div>
            <input type="email" placeholder="Email Address" class="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-[#b05535] outline-none transition-all duration-300 hover:bg-white">
            <div class="grid grid-cols-2 gap-4">
              <input type="date" class="px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-[#b05535] outline-none transition-all duration-300 hover:bg-white">
              <input type="number" placeholder="Number of Travelers" class="px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-[#b05535] outline-none transition-all duration-300 hover:bg-white">
            </div>
            <textarea placeholder="Special Requirements" rows="3" class="w-full px-4 py-3 rounded-lg bg-white/50 border border-gray-200 focus:border-[#b05535] outline-none transition-all duration-300 hover:bg-white"></textarea>
            <button class="w-full py-4 bg-gradient-to-r from-[#b05535] to-[#9c5738] text-white rounded-lg hover:from-[#9c5738] hover:to-[#b05535] transition-all duration-500 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
              Submit Booking Request
            </button>
          </form>
        </div>
      </dialog>
    </button>
  {/if}

  <div class="max-w-8xl mx-auto px-4 py-8 relative">
    <!-- Top Section with Hero and CTA -->
    <div class="grid lg:grid-cols-3 gap-8 mb-12">
      <!-- Hero Content -->
      <div class="lg:col-span-2 relative rounded-2xl overflow-hidden group">
        <div class="absolute inset-0 bg-gradient-to-br from-[#b05535] to-[#9c5738]">
          <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div class="relative z-10 p-8 md:p-12">
          <h1 class="text-4xl md:text-5xl font-serif font-bold text-white mb-4 [text-shadow:_0_1px_10px_rgb(0_0_0_/_20%)]">{title}</h1>
          <p class="text-lg text-white/90 mb-8">{startDate} - {endDate}</p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {#each features as feature}
              <div class="group/feature inline-flex flex-col items-center px-4 py-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <span class="text-2xl mb-2 transform group-hover/feature:scale-110 transition-transform duration-300">{feature.icon}</span>
                <span class="text-white font-medium text-sm text-center">{feature.label}</span>
                <span class="text-white/70 text-xs text-center mt-1">{feature.sublabel}</span>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- CTA Card -->
      <div class="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 border border-gray-100">
        <div class="space-y-6">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#b05535] to-[#9c5738] flex items-center justify-center">
              <span class="text-2xl text-white">✨</span>
            </div>
            <h3 class="text-2xl font-serif font-bold text-[#b05535] mb-2">Secure Your Spot</h3>
            <p class="text-gray-600">Limited availability for this exclusive AgTech journey</p>
          </div>
          
          <div class="space-y-4">
            <div class="flex items-center gap-3 p-3 rounded-lg hover:bg-[#b05535]/5 transition-colors duration-300">
              <div class="w-12 h-12 rounded-full bg-[#b05535]/10 flex items-center justify-center">
                <span class="text-xl">🎯</span>
              </div>
              <div class="flex-1">
                <h4 class="font-medium text-gray-800">Targeted Networking</h4>
                <p class="text-sm text-gray-600">Connect with AgTech leaders</p>
              </div>
            </div>
            <div class="flex items-center gap-3 p-3 rounded-lg hover:bg-[#b05535]/5 transition-colors duration-300">
              <div class="w-12 h-12 rounded-full bg-[#b05535]/10 flex items-center justify-center">
                <span class="text-xl">🏨</span>
              </div>
              <div class="flex-1">
                <h4 class="font-medium text-gray-800">Luxury Accommodations</h4>
                <p class="text-sm text-gray-600">5-star hotels throughout</p>
              </div>
            </div>
            <div class="flex items-center gap-3 p-3 rounded-lg hover:bg-[#b05535]/5 transition-colors duration-300">
              <div class="w-12 h-12 rounded-full bg-[#b05535]/10 flex items-center justify-center">
                <span class="text-xl">📅</span>
              </div>
              <div class="flex-1">
                <h4 class="font-medium text-gray-800">6 Days, 2 Countries</h4>
                <p class="text-sm text-gray-600">Comprehensive tech tour</p>
              </div>
            </div>
          </div>

          <div class="space-y-3 pt-4">
            <button 
              class="w-full py-4 bg-gradient-to-r from-[#b05535] to-[#9c5738] text-white rounded-lg hover:from-[#9c5738] hover:to-[#b05535] transition-all duration-500 shadow-lg hover:shadow-xl transform hover:scale-105"
              on:click={() => showBookingForm = true}
            >
              Book Now
            </button>
            <button class="w-full py-4 border border-[#b05535] text-[#b05535] rounded-lg hover:bg-[#b05535]/5 transition-all duration-300 group">
              <span class="inline-flex items-center">
                Download Brochure
                <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Tabs -->
    <div class="flex justify-center mb-8 gap-4">
      <button 
        class="px-8 py-3 rounded-lg transition-all duration-300 {currentTab === 'itinerary' ? 'bg-gradient-to-r from-[#b05535] to-[#9c5738] text-white shadow-lg' : 'bg-[#b05535]/10 text-[#b05535] hover:bg-[#b05535]/20'}"
        on:click={() => currentTab = 'itinerary'}
      >
        Itinerary Details
      </button>
      <button 
        class="px-8 py-3 rounded-lg transition-all duration-300 {currentTab === 'map' ? 'bg-gradient-to-r from-[#b05535] to-[#9c5738] text-white shadow-lg' : 'bg-[#b05535]/10 text-[#b05535] hover:bg-[#b05535]/20'}"
        on:click={() => currentTab = 'map'}
      >
        View on Map
      </button>
    </div>

    {#if currentTab === 'itinerary'}
      <!-- Timeline View -->
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Left Column: Days 1-3 -->
        <div class="space-y-6">
          {#each days.slice(0, 3) as day, i}
            <div class="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                 in:fade={{ delay: i * 100 }}>
              <div class="bg-gradient-to-r from-[#b05535] to-[#9c5738] px-6 py-4 text-white relative overflow-hidden">
                <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
                <h3 class="font-serif text-xl font-semibold relative z-10">{day.dayOfWeek}</h3>
                <p class="text-white/90 relative z-10">{day.date}</p>
                <div class="flex items-center mt-2 relative z-10">
                  <span class="text-lg mr-2">📍</span>
                  <p class="font-medium">{day.location}</p>
                </div>
              </div>
              <div class="p-6 space-y-6">
                {#each day.activities as activity, j}
                  <div class="group"
                       in:fade={{ delay: (i * 100) + (j * 50) }}>
                    <div class="flex items-start space-x-4">
                      <div class="flex-shrink-0 w-20 h-20 rounded-lg bg-gradient-to-br from-[#b05535]/5 to-[#b05535]/10 flex items-center justify-center text-[#b05535] font-medium transform group-hover:scale-105 transition-all duration-300">
                        {activity.time}
                      </div>
                      <div class="flex-1">
                        <p class="text-gray-800 group-hover:text-[#b05535] transition-colors duration-300">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>

        <!-- Right Column: Days 4-6 -->
        <div class="space-y-6">
          {#each days.slice(3) as day, i}
            <div class="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                 in:fade={{ delay: (i + 3) * 100 }}>
              <div class="bg-gradient-to-r from-[#b05535] to-[#9c5738] px-6 py-4 text-white relative overflow-hidden">
                <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
                <h3 class="font-serif text-xl font-semibold relative z-10">{day.dayOfWeek}</h3>
                <p class="text-white/90 relative z-10">{day.date}</p>
                <div class="flex items-center mt-2 relative z-10">
                  <span class="text-lg mr-2">📍</span>
                  <p class="font-medium">{day.location}</p>
                </div>
              </div>
              <div class="p-6 space-y-6">
                {#each day.activities as activity, j}
                  <div class="group"
                       in:fade={{ delay: ((i + 3) * 100) + (j * 50) }}>
                    <div class="flex items-start space-x-4">
                      <div class="flex-shrink-0 w-20 h-20 rounded-lg bg-gradient-to-br from-[#b05535]/5 to-[#b05535]/10 flex items-center justify-center text-[#b05535] font-medium transform group-hover:scale-105 transition-all duration-300">
                        {activity.time}
                      </div>
                      <div class="flex-1">
                        <p class="text-gray-800 group-hover:text-[#b05535] transition-colors duration-300">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    {:else}
      <!-- Map View (Placeholder) -->
      <div class="bg-white/95 backdrop-blur-sm rounded-xl p-8 text-center shadow-lg border border-gray-100">
        <p class="text-gray-600">Interactive map view coming soon...</p>
      </div>
    {/if}
  </div>
</div> 