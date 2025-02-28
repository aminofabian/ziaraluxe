<script lang="ts">
  const experiences = [
    {
      statement: "You don't just visit",
      outcome: "you experience",
      image: "/images/beyondTravel/pexels-gustavo-fring-4173217.jpg",
      gradient: "from-black/60 to-black/40"
    },
    {
      statement: "You don't just meet people",
      outcome: "you build powerful connections",
      image: "/images/beyondTravel/pexels-mikhail-nilov-7821315.jpg",
      gradient: "from-black/60 to-black/40"
    },
    {
      statement: "You don't just learn",
      outcome: "you strategize for success",
      image: "/images/beyondTravel/pexels-liliana-drew-8554364.jpg",
      gradient: "from-black/60 to-black/40"
    },
    {
      statement: "You don't just travel",
      outcome: "you travel in style",
      image: "/images/beyondTravel/pexels-rdne-5778597.jpg",
      gradient: "from-black/60 to-black/40"
    }
  ];
</script>

<section class="relative py-24 sm:py-32 overflow-hidden">
  <!-- Premium Background Pattern -->
  <div class="absolute inset-0 bg-[#faf7f5]">
    <div class="absolute inset-0 opacity-10 bg-[url('/images/noise.png')] mix-blend-overlay"></div>
    <div class="absolute inset-0 bg-gradient-to-br from-[#b05535]/5 via-transparent to-[#b05535]/5"></div>
  </div>

  <div class="container mx-auto max-w-7xl px-4 relative z-10">
    <!-- Section Header -->
    <div class="max-w-3xl mx-auto text-center mb-20">
      <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2c1810] mb-6 tracking-tight">
        Business Beyond Boardrooms
      </h2>
      <p class="text-[#2c1810]/70 text-lg sm:text-xl font-light leading-relaxed">
        Business isn't just about meetings—it's about experiencing the industries you want to be part of. At Ziara Luxe, we take you beyond conference halls into the heart of global innovation, where:
      </p>
    </div>

    <!-- Experience Cards -->
    <div class="grid gap-8 lg:gap-12">
      {#each experiences as experience, i}
        <div 
          class="group relative rounded-3xl overflow-hidden bg-white shadow-xl"
          style="animation: fadeInScale 0.6s ease-out forwards {i * 0.2}s"
        >
          <!-- Background Image with Parallax -->
          <div class="absolute inset-0 transform group-hover:scale-105 transition-transform duration-700 ease-out">
            <img 
              src={experience.image} 
              alt="" 
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-r {experience.gradient} mix-blend-multiply opacity-90"></div>
          </div>

          <!-- Content -->
          <div class="relative grid md:grid-cols-2 min-h-[400px] items-center">
            <!-- Statement -->
            <div class="p-8 sm:p-12 md:p-16 text-white/90">
              <p class="text-xl sm:text-2xl font-light mb-2 transform group-hover:-translate-y-1 transition-transform duration-500">
                {experience.statement}
              </p>
            </div>

            <!-- Outcome -->
            <div class="p-8 sm:p-12 md:p-16 bg-black/20 backdrop-blur-lg text-white">
              <p class="text-2xl sm:text-3xl lg:text-4xl font-medium transform group-hover:translate-y-1 transition-transform duration-500">
                {experience.outcome}
              </p>
              <!-- Decorative Line -->
              <div class="mt-4 h-0.5 w-24 bg-[#b05535] group-hover:w-32 transition-all duration-500"></div>
            </div>
          </div>

          <!-- Hover Effects -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="absolute inset-0 bg-gradient-to-r from-black/10 to-black/20 mix-blend-overlay"></div>
            <div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
</style> 