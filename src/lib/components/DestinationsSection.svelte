<script lang="ts">
  import { fade, fly, draw } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  
  const destinations = [
    {
      title: "Conscious Travel Kenya",
      tags: ["Impact", "Wildlife", "Conservation"],
      image: "/images/destinationsection/WhatsApp Image 2025-02-27 at 15.29.06_d10c06c5.jpg",
      location: "Nairobi, Maasai Mara & Lake Naivasha",
      impact: "Support wildlife conservation & community education"
    },
    {
      title: "Netherlands Craft Beer Industry",
      tags: ["Business", "Networking", "Culture"],
      image: "/images/destinationsection/WhatsApp Image 2025-02-27 at 15.29.16_947bba02.jpg",
      location: "Amsterdam, Haarlem, Utrecht & Rotterdam",
      impact: "Connect with 15+ brewery owners & investors"
    },
    {
      title: "AgTech Egypt & Israel",
      tags: ["Innovation", "Agriculture", "Tech"],
      image: "/images/destinationsection/WhatsApp Image 2025-02-27 at 15.29.16_fd521ae6.jpg",
      location: "Cairo, Tel Aviv & Jerusalem",
      impact: "Explore 8+ agricultural innovation hubs"
    },
    {
      title: "Creative Industry France",
      tags: ["Art", "Design", "Culture"],
      image: "/images/destinationsection/WhatsApp Image 2025-02-27 at 15.29.17_513d11ca.jpg",
      location: "Paris, Giverny & Saint-Germain",
      impact: "Access exclusive design studios & art venues"
    },
    {
      title: "Tanzania Impact Journey",
      tags: ["Education", "Community", "Conservation"],
      image: "/images/destinationsection/WhatsApp Image 2025-02-27 at 15.29.23_8e8e5a97.jpg",
      location: "Arusha, Ngorongoro & Kilimanjaro",
      impact: "Contribute to 5+ community development projects"
    }
  ];
</script>

<section class="py-24 relative bg-slate-100">
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
        Purpose-Driven Travel Experiences
        <svg class="absolute -right-12 top-0 w-24 h-24 text-[#b05535] opacity-20" viewBox="0 0 24 24" fill="none">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
          <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </h2>
      <p class="text-[#b05535]/70 text-lg">
        Discover our curated collection of transformative journeys designed for impact and innovation.
      </p>
    </div>

    <!-- Features Pills -->
    <div class="flex flex-wrap gap-3 justify-center mb-16">
      <div class="inline-flex items-center px-6 py-3 rounded-xl border border-[#b05535] bg-[#b05535]/5 shadow-sm hover:shadow-md transition-shadow duration-300">
        <span class="mr-2 text-xl">🌍</span>
        <span class="text-[#b05535] font-medium">CONSCIOUS TRAVEL</span>
      </div>
      <div class="inline-flex items-center px-6 py-3 rounded-xl border border-[#b05535] bg-[#b05535]/5 shadow-sm hover:shadow-md transition-shadow duration-300">
        <span class="mr-2 text-xl">💼</span>
        <span class="text-[#b05535] font-medium">BUSINESS NETWORKING</span>
      </div>
      <div class="inline-flex items-center px-6 py-3 rounded-xl border border-[#b05535] bg-[#b05535]/5 shadow-sm hover:shadow-md transition-shadow duration-300">
        <span class="mr-2 text-xl">🚀</span>
        <span class="text-[#b05535] font-medium">INNOVATION TOURS</span>
      </div>
      <div class="inline-flex items-center px-6 py-3 rounded-xl border border-[#b05535] bg-[#b05535]/5 shadow-sm hover:shadow-md transition-shadow duration-300">
        <span class="mr-2 text-xl">🤝</span>
        <span class="text-[#b05535] font-medium">COMMUNITY IMPACT</span>
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
            <!-- View Details Button -->
            <div class="absolute top-6 right-6">
              <a 
                href="/itineraries/{destination.title.toLowerCase().replace(/\s+/g, '-')}"
                class="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg hover:bg-[#b05535] hover:text-white transition-colors duration-300"
              >
                <span class="font-medium">View Details</span>
              </a>
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

            <!-- Title and Location -->
            <div>
              <h3 class="text-2xl font-serif text-[#b05535] mb-2 group-hover:opacity-80 transition-colors duration-300">
                {destination.title}
              </h3>
              <p class="text-[#b05535]/60 text-sm flex items-center mb-3">
                <svg class="w-4 h-4 mr-2 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {destination.location}
              </p>
              <p class="text-[#b05535]/80 text-sm flex items-center">
                <svg class="w-4 h-4 mr-2 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 7v5l3 3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {destination.impact}
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
      <a 
        href="/itineraries"
        class="inline-flex items-center px-8 py-4 bg-[#b05535] text-white rounded-xl hover:bg-[#b05535]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold text-lg tracking-wide group"
      >
        <span class="flex items-center justify-center gap-2">
          <span class="text-white">EXPLORE ALL ITINERARIES</span>
          <svg class="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </a>
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
