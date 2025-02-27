<script lang="ts">
  import { slide } from 'svelte/transition';

  const packages = [
    {
      title: 'COMMUNITY & CULTURAL IMMERSION EXPERIENCES',
      description: 'Because culture is best understood through experience. Travelers gain deep cultural insights by engaging with local traditions, customs, and ways of life.',
      image: '/travelpackages/athens-315833_1280.jpg',
      items: [
        'Indigenous Homestay Programs – Live with indigenous families, learn traditional crafts, and immerse yourself in local storytelling.',
        'Cultural Heritage Conservation – Support initiatives to preserve historic sites, traditional music, and endangered languages.',
        'Festival & Ritual Participation – Experience cultural festivals, sacred ceremonies, and spiritual journeys with local communities.',
        'Traditional Artisan & Handicraft Workshops – Learn from master artisans in weaving, pottery, and wood carving, ensuring heritage skills are passed on.'
      ]
    },
    {
      title: 'ENVIRONMENTAL & CONSERVATION TOURS',
      description: 'Because nature needs guardians, not just visitors. Support environmental sustainability while exploring the planet\'s most breathtaking landscapes.',
      image: '/travelpackages/waterfall-5050298_1920.jpg',
      items: [
        'Wildlife Conservation Expeditions – Work with conservationists to protect endangered species in Africa, South America, or Asia.',
        'Eco-Tourism & Sustainable Living – Visit eco-friendly resorts, learn about zero-waste living, and participate in green initiatives.',
        'Marine Conservation & Coral Restoration – Contribute to ocean cleanup projects, sea turtle conservation, and coral reef restoration efforts.',
        'Reforestation & Climate Change Missions – Plant trees, support carbon offset projects, and engage in environmental education programs.'
      ]
    },
    {
      title: 'VOLUNTEER & PHILANTHROPIC TOURISM',
      description: 'Because giving back makes every journey more fulfilling. Travel with a purpose by actively supporting communities through hands-on volunteer work.',
      image: '/travelpackages/savannah-8079856_1920 (1).jpg',
      items: [
        'Education & Youth Empowerment – Teach in underserved schools, mentor young leaders, and support educational programs.',
        'Medical Outreach & Public Health Missions – Join medical camps, assist in clinics, and support health initiatives in rural areas.',
        'Women & Girls Empowerment Programs – Engage in mentorship, skills training, and economic empowerment projects.',
        'Disaster Relief & Humanitarian Aid – Assist in post-disaster rebuilding efforts and emergency response programs.'
      ]
    },
    {
      title: 'PURPOSEFUL ADVENTURE CHALLENGES',
      description: 'Because adventure is more meaningful when it inspires change. Combine thrilling expeditions with social impact and fundraising initiatives.',
      image: '/travelpackages/mountains-6796162_1920.jpg',
      items: [
        'Climbing for a Cause – Scale Mount Kilimanjaro while fundraising for local hospitals and community projects.',
        'Cycling for Sustainability – Participate in bike tours that support clean energy and sustainable transportation programs.',
        'Marathon & Charity Races – Run marathons in different cities to raise funds for environmental, health, and education initiatives.',
        'Extreme Expeditions for Awareness – Trek through remote regions while advocating for climate change, conservation, or social justice.'
      ]
    },
    {
      title: 'RESPONSIBLE AGRI-TOURISM & FOOD SUSTAINABILITY',
      description: 'Because food is culture, community, and sustainability. Explore the world through sustainable food systems and ethical agriculture.',
      image: '/travelpackages/bridge-5249525_1920.jpg',
      items: [
        'Farm-to-Table Experiences – Work on organic farms, learn sustainable agriculture, and engage with local food movements.',
        'Ethical Coffee & Tea Tours – Visit fair-trade coffee farms in Ethiopia, Colombia, or Sri Lanka and engage with farmers.',
        'Slow Food & Indigenous Cuisine Exploration – Participate in cooking classes with traditional chefs and support local food preservation initiatives.',
        'Permaculture & Regenerative Agriculture Projects – Gain insights into eco-farming practices and food security solutions.'
      ]
    }
  ];

  let expandedCards: { [key: string]: boolean } = {};
  
  function toggleCard(title: string) {
    expandedCards[title] = !expandedCards[title];
    expandedCards = expandedCards; // trigger reactivity
  }
</script>

<section class="py-20 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-4">TRAVEL PACKAGES</h2>
    <p class="text-xl text-center text-gray-600 mb-12">
      We tailor every journey to align with purpose, passion, and positive impact.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each packages as pkg}
        <div class="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div class="relative h-64 overflow-hidden">
            <img 
              src={pkg.image} 
              alt={pkg.title}
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h3 class="absolute bottom-4 left-4 right-4 text-xl font-bold text-white leading-tight">
              {pkg.title}
            </h3>
          </div>
          
          <div class="p-6">
            <p class="text-gray-600 mb-4 line-clamp-2">
              {pkg.description}
            </p>
            
            <div class="space-y-3">
              {#if expandedCards[pkg.title]}
                <ul transition:slide class="space-y-3">
                  {#each pkg.items as item}
                    <li class="flex items-start">
                      <span class="text-primary mr-2">•</span>
                      <span class="text-gray-700">{item}</span>
                    </li>
                  {/each}
                </ul>
              {:else}
                <ul class="space-y-3">
                  {#each pkg.items.slice(0, 2) as item}
                    <li class="flex items-start">
                      <span class="text-primary mr-2">•</span>
                      <span class="text-gray-700 line-clamp-2">{item}</span>
                    </li>
                  {/each}
                </ul>
              {/if}
              
              <button 
                on:click={() => toggleCard(pkg.title)}
                class="mt-4 text-primary font-semibold hover:text-primary/80 transition-colors flex items-center gap-2"
              >
                {expandedCards[pkg.title] ? 'Show Less' : 'Show More'}
                <svg 
                  class="w-4 h-4 transform transition-transform {expandedCards[pkg.title] ? 'rotate-180' : ''}" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .text-primary {
    color: #9F8054;
  }
  
  /* Enable line clamping */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style> 