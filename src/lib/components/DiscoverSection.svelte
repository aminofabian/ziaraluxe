<script lang="ts">
  const destinations = [
    {
      id: 1,
      title: "Greece Getaways",
      image: "/images/tips/destinations/athens-315833_1920.jpg",
      description: "Ancient wonders and Mediterranean charm"
    },
    {
      id: 2,
      title: "Island Paradise",
      image: "/images/tips/destinations/boat-7767575_1920.jpg",
      description: "Crystal waters and pristine beaches"
    },
    {
      id: 3,
      title: "Mountain Escapes",
      image: "/images/tips/destinations/camping-7947055_1920.jpg",
      description: "Adventure in nature's grandeur"
    },
    {
      id: 4,
      title: "French Romance",
      image: "/images/tips/destinations/france-7370939_1920.jpg",
      description: "Culture, cuisine, and timeless elegance"
    },
    {
      id: 5,
      title: "Desert Dreams",
      image: "/images/tips/destinations/women-5534478_1920.jpg",
      description: "Mystical journeys through golden sands"
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
        <div class="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer">
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
        </div>
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
