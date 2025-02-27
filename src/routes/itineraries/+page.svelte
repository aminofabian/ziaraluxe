<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  
  const itineraries = [
    {
      slug: "creative-industry-germany",
      title: "Creative Industry Exploration Tour - Germany",
      description: "Immerse yourself in Germany's vibrant creative scene, from Berlin's cutting-edge galleries to Bavaria's design innovation. Experience film studios, art museums, and design workshops while networking with industry leaders.",
      image: "/images/featuresection/building-4884852_640.jpg",
      duration: "6 Days",
      location: "Berlin, Potsdam & Munich",
      category: "Creative Industry",
      highlights: [
        "Film production at Babelsberg Studios",
        "Bauhaus Archive exploration",
        "Contemporary art at König Galerie",
        "BMW Welt design innovation"
      ]
    },
    {
      slug: "creative-industry-france",
      title: "Creative Industry Exploration Tour - France",
      description: "Discover the intersection of art, fashion, and film in the heart of Paris. From iconic museums to exclusive ateliers, experience the rich cultural heritage that shapes global creative industries.",
      image: "/images/featuresection/photo-1549403666-683c34342d9c.avif",
      duration: "6 Days",
      location: "Paris & Giverny",
      category: "Creative Industry",
      highlights: [
        "Private Louvre masterpiece tour",
        "French New Wave cinema history",
        "Fashion workshops with artisans",
        "Monet's Gardens creative retreat"
      ]
    },
    {
      slug: "healing-horizons",
      title: "Healing Horizons Retreat - South Africa",
      description: "Experience transformative wellness in the heart of South Africa's wine country. This accessible retreat combines therapeutic activities, cultural experiences, and natural beauty in the historic town of Franschhoek.",
      image: "/images/featuresection/photo-1431540015161-0bf868a2d407.avif",
      duration: "6 Days",
      location: "Franschhoek, South Africa",
      category: "Wellness",
      highlights: [
        "Art & music therapy sessions",
        "Accessible nature experiences",
        "Cultural wellness activities",
        "Farm-to-table dining"
      ]
    },
    {
      slug: "singapore-corporate",
      title: "Singapore Corporate Benchmark Tour",
      description: "An exclusive six-day corporate tour designed for business leaders to explore Singapore's thriving business ecosystem. Experience world-class facilities, engage with industry leaders, and discover the city-state's innovative approach to business and sustainability.",
      image: "/images/featuresection/business-5475283_1280.jpg",
      duration: "6 Days",
      location: "Singapore",
      category: "Corporate",
      highlights: [
        "Exclusive access to SGX and business districts",
        "Networking with local industry leaders",
        "Innovation hub visits (Block71, NUS Enterprise)",
        "Luxury dining experiences at Michelin-starred venues"
      ]
    },
    {
      slug: "kenya-conscious",
      title: "Six Days Conscious Travelers' Tour - Kenya",
      description: "Embark on a transformative journey through Kenya that combines wildlife conservation, community empowerment, and sustainable tourism. Experience the magic of the Maasai Mara, engage with local communities, and contribute to meaningful CSR initiatives.",
      image: "/images/featuresection/road-trip-437413_640.jpg",
      duration: "6 Days",
      location: "Nairobi, Maasai Mara & Lake Naivasha",
      category: "Conscious Travel",
      highlights: [
        "Community projects in Kibera",
        "Wildlife conservation activities",
        "Maasai cultural immersion",
        "Sustainable eco-lodges"
      ]
    },
    {
      slug: "netherlands-business",
      title: "Netherlands Business Travel - Craft Beer Industry",
      description: "Explore the thriving Dutch craft beer industry through an immersive business tour. Connect with brewery owners, investors, and industry experts while experiencing the rich brewing heritage of the Netherlands.",
      image: "/images/featuresection/photo-1497215728101-856f4ea42174.avif",
      duration: "6 Days",
      location: "Amsterdam, Haarlem, Utrecht & Rotterdam",
      category: "Business",
      highlights: [
        "Exclusive brewery tours and tastings",
        "Networking with industry leaders",
        "Investment opportunity meetings",
        "Cultural heritage exploration"
      ]
    },
    {
      slug: "egypt-israel-agtech",
      title: "Agricultural Technology Travel - Egypt & Israel",
      description: "Explore the intersection of ancient agricultural wisdom and modern innovation across Egypt and Israel. Connect with AgTech pioneers, visit research centers, and experience the future of desert agriculture.",
      image: "/images/featuresection/ai-generated-8715094_640.jpg",
      duration: "4 Days",
      location: "Cairo & Tel Aviv",
      category: "AgTech",
      highlights: [
        "Desert Research Center exploration",
        "Israeli AgTech innovation hub visits",
        "Networking with industry leaders",
        "High-tech agriculture demonstrations"
      ]
    },
    {
      slug: "tanzania-conscious",
      title: "Six Days Conscious Travelers' Tour - Tanzania",
      description: "Experience the heart of Tanzania through meaningful community engagement, conservation efforts, and cultural immersion. From educational initiatives to wildlife preservation, make a lasting positive impact while exploring this beautiful country.",
      image: "/images/featuresection/station-7946105_1280.jpg",
      duration: "6 Days",
      location: "Arusha, Ngorongoro & Kilimanjaro",
      category: "Conscious Travel",
      highlights: [
        "Educational support initiatives",
        "Wildlife conservation projects",
        "Women's empowerment programs",
        "Community health initiatives"
      ]
    }
  ];

  let selectedCategory = "all";
  let searchQuery = "";
  let sortBy = "default";
  let hoveredCard: string | null = null;
  
  $: filteredItineraries = itineraries
    .filter(item => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "duration") return parseInt(a.duration) - parseInt(b.duration);
      return 0;
    });

  const categories = ["all", ...new Set(itineraries.map(item => item.category))];
</script>

<div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
  <!-- Hero Section -->
  <div class="relative h-[70vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-black">
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>
      <img 
        src="/images/featuresection/photo-1431540015161-0bf868a2d407.avif" 
        alt="Hero background" 
        class="w-full h-full object-cover opacity-60"
      />
    </div>
    <div class="container mx-auto px-4 max-w-7xl relative z-20">
      <div class="max-w-3xl">
        <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white leading-tight tracking-tight" in:fly="{{ y: 50, duration: 1000 }}">
          Journey Beyond <br class="hidden sm:block"/>Boundaries
        </h1>
        <p class="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed font-light max-w-2xl" in:fly="{{ y: 50, duration: 1000, delay: 200 }}">
          Discover our carefully crafted journeys that blend luxury, purpose, and transformation. Each itinerary is designed to provide unique insights and experiences in the world's most inspiring destinations.
        </p>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-4 max-w-7xl -mt-20 relative z-10">
    <!-- Filters Section -->
    <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-12" in:fly="{{ y: 50, duration: 1000, delay: 400 }}">
      <div class="flex flex-col md:flex-row gap-6 items-stretch md:items-center">
        <div class="relative flex-1 group">
          <input
            type="text"
            bind:value={searchQuery}
            placeholder="Search..."
            class="w-full px-6 py-4 rounded-xl border-2 border-gray-100 focus:border-[#b05535] outline-none text-base sm:text-xs transition-all bg-gray-50/50 placeholder:text-gray-400 group-hover:bg-white group-hover:border-gray-200"
          />
          <div class="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <div class="flex flex-wrap gap-2 sm:gap-3">
          {#each categories as category}
            <button
              class="px-4 sm:px-6 py-3 rounded-xl transition-all duration-300 text-sm sm:text-base font-medium
                {selectedCategory === category
                  ? 'bg-[#b05535] text-white shadow-lg scale-105'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900'}"
              on:click={() => selectedCategory = category}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          {/each}
        </div>
      </div>
    </div>

    <!-- Itineraries Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {#each filteredItineraries as itinerary (itinerary.slug)}
        <a 
          href="/itineraries/{itinerary.slug}" 
          class="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          in:fade={{ duration: 300 }}
          on:mouseenter={() => hoveredCard = itinerary.slug}
          on:mouseleave={() => hoveredCard = null}
        >
          <div class="relative aspect-[3/4] overflow-hidden">
            <img 
              src={itinerary.image} 
              alt={itinerary.title}
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90"></div>
            
            <div class="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white">
              <div class="transform transition-all duration-500 group-hover:translate-y-0 {hoveredCard === itinerary.slug ? 'translate-y-0' : 'translate-y-20'}">
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-medium">{itinerary.duration}</span>
                  <span class="bg-[#b05535]/80 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-medium">{itinerary.category}</span>
                </div>
                
                <h2 class="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 leading-tight">{itinerary.title}</h2>
                <p class="text-white/90 text-sm sm:text-base mb-4 line-clamp-3 font-light leading-relaxed">{itinerary.description}</p>
                
                <div class="flex items-center gap-2 text-white font-medium group/btn">
                  <span class="group-hover/btn:text-[#b05535] transition-colors">Explore Journey</span>
                  <svg class="w-5 h-5 transform group-hover:translate-x-2 transition-transform text-[#b05535]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>

    <!-- No Results Message -->
    {#if filteredItineraries.length === 0}
      <div class="text-center py-16 sm:py-20" in:fade>
        <div class="text-5xl sm:text-6xl mb-6">🌍</div>
        <h3 class="text-xl sm:text-2xl font-medium text-gray-900 mb-3">No journeys found</h3>
        <p class="text-gray-600 text-base sm:text-lg">Try adjusting your search or explore different categories</p>
      </div>
    {/if}

    <!-- Bottom CTA -->
    <div class="mt-20 sm:mt-24 mb-16" in:fly="{{ y: 50, duration: 1000 }}">
      <div class="relative rounded-2xl overflow-hidden">
        <div class="absolute inset-0">
          <img 
            src="/images/featuresection/business-5475283_1280.jpg" 
            alt="CTA background" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>
        </div>
        <div class="relative z-10 p-8 sm:p-12 md:p-20">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 max-w-2xl leading-tight">Ready to Create Your Perfect Journey?</h2>
          <p class="text-white/90 mb-6 sm:mb-8 max-w-2xl text-base sm:text-lg font-light">
            Let us craft a personalized itinerary that matches your interests and aspirations.
          </p>
          <a 
            href="/contact" 
            class="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#b05535] rounded-xl font-medium hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-base sm:text-lg group"
          >
            <span>Start Planning</span>
            <svg class="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  /* Smooth transitions */
  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 500ms;
  }

  /* Card hover effects */
  .group:hover {
    transform: translateY(-8px);
  }

  /* Text gradient */
  .text-gradient {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(to right, #b05535, #d97706);
  }

  /* Line clamp */
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #b05535;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #8b4229;
  }

  /* Responsive font sizes */
  @media (max-width: 640px) {
    .text-gradient {
      font-size: 90%;
    }
  }
</style> 