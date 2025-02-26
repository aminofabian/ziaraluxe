<script lang="ts">
  const tours = [
    {
      id: 1,
      title: "African Safari Expedition",
      destination: "South Africa",
      image: "/images/tips/destinations/gran-canaria-1684745_1280.jpg",
      nights: 7,
      departure: "Cape Town, South Africa",
      arrival: "Johannesburg, South Africa",
      stops: 5,
      originalPrice: 4999,
      discountedPrice: 4299,
      date: "15 Mar 2025",
      promotion: "Early Bird Offer: Save £700 when you book before January",
      itinerary: [
        "Cape Town Cultural Tour",
        "Kruger National Park Safari",
        "Victoria Falls Experience",
        "Wine Country Retreat",
        "Johannesburg City Explorer"
      ]
    },
    {
      id: 2,
      title: "Mediterranean Luxury Cruise",
      destination: "Mediterranean",
      image: "/images/tips/destinations/roe-deer-9394840_1920.jpg",
      nights: 10,
      departure: "Barcelona, Spain",
      arrival: "Athens, Greece",
      stops: 6,
      originalPrice: 3999,
      discountedPrice: 3499,
      date: "22 Apr 2025",
      promotion: "Complimentary Premium Drinks Package worth £450",
      itinerary: [
        "Barcelona Arts Tour",
        "French Riviera Experience",
        "Rome Historical Journey",
        "Santorini Sunset Cruise",
        "Mykonos Beach Retreat",
        "Athens Cultural Finale"
      ]
    }
  ];
</script>

<section class="relative py-24 px-4 overflow-hidden bg-white">
  <!-- Remove this gradient div -->
  <div class="absolute inset-x-0 -top-32 h-32 bg-gradient-to-b from-black/90 to-transparent z-20"></div>
  
  <!-- Decorative elements -->
  <div class="absolute top-0 left-0 w-full h-32 bg-[url('/images/pattern.png')] opacity-5"></div>
  <div class="absolute bottom-0 right-0 w-full h-32 bg-[url('/images/pattern.png')] opacity-5 transform rotate-180"></div>
  
  <div class="container mx-auto max-w-7xl">
    <div class="text-center mb-16 relative">
      <h2 class="font-sans text-5xl font-bold mb-4 text-[#b05535]">Upcoming Luxury Tours</h2>
      <p class="text-xl text-gray-600 font-sans">Embark on extraordinary journeys crafted just for you</p>
    </div>

    <div class="space-y-12">
      {#each tours as tour (tour.id)}
        <div class="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group relative">
          <!-- Update corner accents to use single colors -->
          <div class="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#b05535]/20 rounded-tl-2xl"></div>
          <div class="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#b05535]/20 rounded-br-2xl"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Enhanced Tour Image Section -->
            <div class="relative h-64 md:h-full group overflow-hidden">
              <img src={tour.image} alt={tour.title} class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="absolute top-4 left-4 bg-[#b05535] text-white px-6 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                {tour.nights} NIGHTS
              </div>
              <!-- Floating highlights -->
              <div class="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                {#each tour.itinerary.slice(0, 3) as highlight}
                  <span class="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                    {highlight}
                  </span>
                {/each}
              </div>
            </div>

            <!-- Enhanced Tour Details -->
            <div class="p-8 md:col-span-2">
              <div class="flex items-start justify-between mb-6">
                <div>
                  <!-- Remove gradient hover effect -->
                  <h3 class="text-3xl font-bold text-[#b05535] mb-2">{tour.title}</h3>
                  <p class="text-lg text-gray-600">{tour.destination}</p>
                </div>
                <div class="text-right">
                  <div class="text-gray-400 line-through">£{tour.originalPrice}</div>
                  <div class="text-3xl font-bold text-[#b05535]">
                    £{tour.discountedPrice}
                  </div>
                  <div class="text-sm text-gray-500">per person</div>
                </div>
              </div>

              <!-- Enhanced Travel Details Grid -->
              <div class="grid grid-cols-2 gap-6 mb-8">
                {#each [
                  { label: 'Departure', value: tour.departure, icon: '✈️' },
                  { label: 'Arrival', value: tour.arrival, icon: '🏁' },
                  { label: 'Date', value: tour.date, icon: '📅' },
                  { label: 'Stops', value: `${tour.stops} destinations`, icon: '🗺️' }
                ] as detail}
                  <div class="group/item">
                    <div class="text-sm text-gray-500 flex items-center gap-2">
                      <span class="opacity-50 group-hover/item:opacity-100 transition-opacity duration-300">{detail.icon}</span>
                      {detail.label}
                    </div>
                    <div class="font-semibold">{detail.value}</div>
                  </div>
                {/each}
              </div>

              <div class="flex items-center justify-between flex-wrap gap-4">
                <div class="bg-[#b05535]/10 text-[#b05535] px-4 py-2 rounded-full text-sm">
                  {tour.promotion}
                </div>
                <button class="relative overflow-hidden bg-[#b05535] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4a5720] transition-colors duration-300">
                  <span class="relative z-10">Select Journey</span>
                </button>
              </div>

              <!-- Update itinerary button to use single color -->
              <div class="mt-6">
                <button class="flex items-center gap-2 text-[#b05535] hover:text-[#4a5720] transition-colors duration-300 group/itinerary">
                  <span>View detailed itinerary</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover/itinerary:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
</style>
