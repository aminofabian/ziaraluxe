<script lang="ts">
  const destinations = [
    {
      id: 1,
      title: "Conscious Travel Kenya",
      image: "/images/discoversection/WhatsApp Image 2025-02-27 at 15.22.48_363e2bc8.jpg",
      description: "Community impact and wildlife conservation",
      slug: "kenya-conscious"
    },
    {
      id: 2,
      title: "Dutch Craft Beer Experience",
      image: "/images/discoversection/WhatsApp Image 2025-02-27 at 15.22.48_5062c640.jpg",
      description: "Business networking in brewery culture",
      slug: "netherlands-brewery"
    },
    {
      id: 3,
      title: "AgTech Egypt & Israel",
      image: "/images/discoversection/WhatsApp Image 2025-02-27 at 15.29.23_62167d14.jpg",
      description: "Innovation in desert agriculture",
      slug: "egypt-israel-agtech"
    },
    {
      id: 4,
      title: "Creative France",
      image: "/images/discoversection/WhatsApp Image 2025-02-27 at 15.29.25_5909dd99.jpg",
      description: "Art, cinema, and design exploration",
      slug: "creative-industry-france"
    },
    {
      id: 5,
      title: "Tanzania Impact Journey",
      image: "/images/discoversection/WhatsApp Image 2025-02-27 at 15.29.25_f01dcd61.jpg",
      description: "Education and community development",
      slug: "tanzania-conscious"
    }
  ];
</script>

<section class="relative py-24 px-4 overflow-hidden bg-white">
  <div class="absolute inset-x-0 -top-32 h-32 bg-gradient-to-b from-black/90 to-transparent z-20"></div>
  
  <div class="container mx-auto max-w-7xl">
    <div class="text-center mb-16">
      <h2 class="font-sans text-5xl font-bold mb-4 text-[#b05535]">Discover your next destination</h2>
      <p class="text-xl text-gray-600 font-sans">Explore handpicked destinations around the world</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each destinations as destination (destination.id)}
        <a 
          href="/itineraries/{destination.slug}" 
          class="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer block"
        >
          <!-- Background Image -->
          <img 
            src={destination.image} 
            alt={destination.title}
            class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          
          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 group-hover:to-black/70 transition-colors duration-300"></div>
          
          <!-- Content -->
          <div class="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 class="text-2xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{destination.title}</h3>
            <p class="text-white/90 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              {destination.description}
            </p>
          </div>

          <!-- Hover Effect Border -->
          <div class="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-2xl transition-colors duration-300"></div>
        </a>
      {/each}
    </div>
  </div>

  <!-- Decorative Elements -->
  <div class="absolute -right-40 -bottom-40 w-96 h-96 bg-[#e3a457]/5 rounded-full blur-3xl"></div>
  <div class="absolute -left-40 -top-40 w-96 h-96 bg-[#b05535]/5 rounded-full blur-3xl"></div>
</section>

<style>
  /* Add any additional styles here */
</style>
