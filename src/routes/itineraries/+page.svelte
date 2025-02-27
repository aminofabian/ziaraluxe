<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  
  const itineraries = [
    {
      slug: "creative-industry-germany",
      title: "Creative Industry Exploration Tour - Germany",
      description: "Immerse yourself in Germany's vibrant creative scene, from Berlin's cutting-edge galleries to Bavaria's design innovation. Experience film studios, art museums, and design workshops while networking with industry leaders.",
      image: "/images/tips/destinations/germany-creative.jpg",
      duration: "6 Days",
      location: "Berlin, Potsdam & Munich",
      category: "Creative Industry",
      price: "€4,999",
      startDates: ["Apr 15, 2024", "May 20, 2024", "Jun 10, 2024"],
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
      image: "/images/tips/destinations/france-7370939_1920.jpg",
      duration: "6 Days",
      location: "Paris & Giverny",
      category: "Creative Industry",
      price: "€5,299",
      startDates: ["May 1, 2024", "Jun 5, 2024", "Jul 3, 2024"],
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
      image: "/images/tips/destinations/gran-canaria-4360002_1920.jpg",
      duration: "6 Days",
      location: "Franschhoek, South Africa",
      category: "Wellness",
      price: "€3,999",
      startDates: ["Mar 15, 2024", "Apr 12, 2024", "May 17, 2024"],
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
      image: "/images/tips/destinations/singapore-skyline.jpg",
      duration: "6 Days",
      location: "Singapore",
      category: "Corporate",
      price: "€6,499",
      startDates: ["May 15, 2024", "Jun 12, 2024", "Jul 17, 2024"],
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
      image: "/images/tips/destinations/kenya-safari.jpg",
      duration: "6 Days",
      location: "Nairobi, Maasai Mara & Lake Naivasha",
      category: "Conscious Travel",
      price: "€4,499",
      startDates: ["Jun 1, 2024", "Jul 15, 2024", "Aug 10, 2024"],
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
      image: "/images/tips/destinations/netherlands-brewery.jpg",
      duration: "6 Days",
      location: "Amsterdam, Haarlem, Utrecht & Rotterdam",
      category: "Business",
      price: "€5,999",
      startDates: ["Jul 1, 2024", "Aug 5, 2024", "Sep 2, 2024"],
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
      image: "/images/tips/destinations/egypt-israel-agtech.jpg",
      duration: "4 Days",
      location: "Cairo & Tel Aviv",
      category: "AgTech",
      price: "€5,999",
      startDates: ["Aug 1, 2024", "Sep 5, 2024", "Oct 3, 2024"],
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
      image: "/images/tips/destinations/tanzania-safari.jpg",
      duration: "6 Days",
      location: "Arusha, Ngorongoro & Kilimanjaro",
      category: "Conscious Travel",
      price: "€4,299",
      startDates: ["Sep 1, 2024", "Oct 5, 2024", "Nov 2, 2024"],
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
  
  $: filteredItineraries = itineraries
    .filter(item => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      if (sortBy === "price-high") return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
      if (sortBy === "duration") return parseInt(a.duration) - parseInt(b.duration);
      return 0;
    });

  const categories = ["all", ...new Set(itineraries.map(item => item.category))];
</script>

<div class="min-h-screen bg-gradient-to-b from-white to-gray-50">
  <!-- Hero Section -->
  <div class="relative bg-[#b05535] text-white py-20 mb-12">
    <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
    <div class="container mx-auto px-4 max-w-7xl relative z-10">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-6xl font-bold mb-6" in:fly="{{ y: 50, duration: 1000 }}">
          Curated Itineraries
        </h1>
        <p class="text-xl text-white/90 mb-8" in:fly="{{ y: 50, duration: 1000, delay: 200 }}">
          Discover our carefully crafted journeys that blend luxury, purpose, and transformation. Each itinerary is designed to provide unique insights and experiences in the world's most inspiring destinations.
        </p>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-4 max-w-7xl">
    <!-- Filters Section -->
    <div class="mb-12 space-y-6" in:fly="{{ y: 50, duration: 1000, delay: 400 }}">
      <!-- Search and Sort -->
      <div class="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
        <div class="relative flex-1">
          <input
            type="text"
            bind:value={searchQuery}
            placeholder="Search itineraries..."
            class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#b05535] outline-none"
          />
          <svg class="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <div class="flex gap-4">
          <select
            bind:value={sortBy}
            class="px-4 py-3 rounded-lg border border-gray-200 focus:border-[#b05535] outline-none bg-white"
          >
            <option value="default">Sort by</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="duration">Duration</option>
          </select>
        </div>
      </div>

      <!-- Category Pills -->
      <div class="flex flex-wrap gap-2">
        {#each categories as category}
          <button
            class="px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium
              {selectedCategory === category
                ? 'bg-[#b05535] text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
            on:click={() => selectedCategory = category}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        {/each}
      </div>
    </div>

    <!-- Itineraries Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each filteredItineraries as itinerary (itinerary.slug)}
        <a 
          href="/itineraries/{itinerary.slug}" 
          class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
          in:fade={{ duration: 300 }}
        >
          <!-- Image -->
          <div class="relative aspect-[4/3] overflow-hidden">
            <img 
              src={itinerary.image} 
              alt={itinerary.title}
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute top-4 right-4">
              <span class="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[#b05535] font-bold shadow-lg">
                {itinerary.price}
              </span>
            </div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="flex flex-wrap items-center gap-2 text-white/90 text-sm mb-2">
                <span class="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{itinerary.duration}</span>
                <span class="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{itinerary.location}</span>
                <span class="bg-[#b05535]/80 backdrop-blur-sm px-3 py-1 rounded-full">{itinerary.category}</span>
              </div>
              <h2 class="text-xl font-bold text-white leading-tight">{itinerary.title}</h2>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 flex-1 flex flex-col">
            <p class="text-gray-600 mb-6 flex-1">{itinerary.description}</p>
            
            <!-- Start Dates -->
            <div class="mb-6">
              <h3 class="font-medium text-[#b05535] mb-3">Upcoming Dates:</h3>
              <div class="flex flex-wrap gap-2">
                {#each itinerary.startDates.slice(0, 2) as date}
                  <span class="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">{date}</span>
                {/each}
                {#if itinerary.startDates.length > 2}
                  <span class="text-sm text-gray-500">+{itinerary.startDates.length - 2} more dates</span>
                {/if}
              </div>
            </div>
            
            <!-- Highlights -->
            <div class="space-y-2">
              <h3 class="font-medium text-[#b05535] mb-3">Highlights:</h3>
              <ul class="space-y-2">
                {#each itinerary.highlights as highlight}
                  <li class="flex items-start gap-2 text-gray-700">
                    <span class="text-[#b05535] mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                {/each}
              </ul>
            </div>

            <!-- View Details Button -->
            <div class="mt-6">
              <div class="group-hover:bg-[#b05535]/5 border border-[#b05535] rounded-lg p-4 transition-all duration-300">
                <span class="inline-flex items-center justify-center w-full gap-2 text-[#b05535] font-medium group-hover:text-[#b05535] transition-colors">
                  View Details
                  <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>

    <!-- No Results Message -->
    {#if filteredItineraries.length === 0}
      <div class="text-center py-12" in:fade>
        <div class="text-4xl mb-4">🔍</div>
        <h3 class="text-xl font-medium text-gray-900 mb-2">No itineraries found</h3>
        <p class="text-gray-600">Try adjusting your search or filters</p>
      </div>
    {/if}

    <!-- Bottom CTA -->
    <div class="mt-16 text-center" in:fly="{{ y: 50, duration: 1000 }}">
      <div class="bg-[#b05535]/5 rounded-2xl p-8 md:p-12">
        <h2 class="text-2xl md:text-3xl font-bold text-[#b05535] mb-4">Can't find what you're looking for?</h2>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
          Let us create a personalized itinerary tailored to your specific interests and preferences.
        </p>
        <a 
          href="/contact" 
          class="inline-flex items-center gap-2 px-8 py-4 bg-[#b05535] text-white rounded-full font-medium hover:bg-[#b05535]/90 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
        >
          <span>Request Custom Itinerary</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  /* Add smooth hover transitions */
  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }

  /* Enhance card hover effects */
  .group:hover {
    transform: translateY(-2px);
  }

  /* Smooth animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
</style> 