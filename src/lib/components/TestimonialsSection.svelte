<script lang="ts">
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Executive Director",
      image: "/images/tips/destinations/women-5534478_1920.jpg",
      quote: "The attention to detail and personalized service exceeded all expectations. Every moment was curated to perfection.",
      location: "Santorini Retreat",
      rating: 5
    },
    {
      name: "James Anderson",
      role: "Tech Entrepreneur",
      image: "/images/tips/destinations/camping-7947055_1920.jpg",
      quote: "An unforgettable journey that combined luxury with authentic local experiences. The private guides were exceptional.",
      location: "Alpine Expedition",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Art Curator",
      image: "/images/tips/destinations/france-7370939_1920.jpg",
      quote: "From the boutique hotels to the exclusive cultural experiences, every aspect was thoughtfully crafted.",
      location: "Mediterranean Tour",
      rating: 5
    }
  ];
</script>

<section class="relative py-24 px-4 bg-white overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-[#b05535]/5 via-white to-[#e3a457]/5"></div>
  
  <!-- Enhanced Decorative Elements -->
  <div class="absolute -left-40 -bottom-40 w-96 h-96 bg-[#e3a457]/10 rounded-full blur-3xl animate-pulse"></div>
  <div class="absolute -right-40 -top-40 w-96 h-96 bg-[#b05535]/10 rounded-full blur-3xl animate-pulse"></div>
  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#b05535]/5 rounded-full blur-3xl animate-[spin_30s_linear_infinite]"></div>

  <div class="container mx-auto max-w-7xl relative">
    <div class="text-center mb-16 relative">
      <span class="absolute -top-10 left-1/2 -translate-x-1/2 text-9xl text-[#e3a457]/10 font-serif">"</span>
      <h2 class="font-sans text-5xl font-bold mb-4 text-[#b05535] relative">Guest Stories</h2>
      <p class="text-xl text-gray-600 font-sans">Experiences that last a lifetime</p>
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#b05535] to-[#e3a457]"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each testimonials as testimonial, i}
        <div class="bg-white backdrop-blur-lg bg-opacity-70 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative group">
          <!-- Decorative Corner -->
          <div class="absolute top-0 right-0 w-20 h-20 overflow-hidden">
            <div class="absolute top-0 right-0 w-[141%] h-[141%] bg-gradient-to-br from-[#b05535] to-[#e3a457] -rotate-45 transform origin-top-right opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
          
          <!-- Quote -->
          <div class="relative mb-8">
            <div class="absolute -top-4 -left-2 text-6xl text-[#e3a457]/20 font-serif select-none">"</div>
            <p class="text-gray-600 italic relative z-10 leading-relaxed">{testimonial.quote}</p>
          </div>

          <!-- Profile with enhanced layout -->
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-full overflow-hidden ring-4 ring-[#b05535]/10 group-hover:ring-[#e3a457]/20 transition-all duration-300">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div>
              <h4 class="font-bold text-[#b05535] group-hover:text-[#e3a457] transition-colors duration-300">{testimonial.name}</h4>
              <p class="text-sm text-gray-500">{testimonial.role}</p>
              <div class="flex items-center mt-1">
                {#each Array(testimonial.rating) as _, j}
                  <span class="text-[#e3a457] animate-[pulse_3s_ease-in-out_infinite]" style="animation-delay: {(j*200)}ms">★</span>
                {/each}
              </div>
            </div>
          </div>

          <!-- Location Tag with enhanced design -->
          <div class="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-[#b05535]/10 to-[#e3a457]/10 text-[#b05535] px-4 py-2 rounded-full text-sm group-hover:from-[#b05535]/20 group-hover:to-[#e3a457]/20 transition-all duration-300">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
            {testimonial.location}
          </div>
        </div>
      {/each}
    </div>

    <!-- Enhanced Stats with animations -->
    <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
      {#each [
        { value: '98%', label: 'Guest Satisfaction', delay: 0 },
        { value: '50+', label: 'Luxury Destinations', delay: 100 },
        { value: '1000+', label: 'Happy Travelers', delay: 200 },
        { value: '12', label: 'Years of Excellence', delay: 300 }
      ] as stat, i}
        <div class="text-center relative group">
          <div class="absolute inset-0 bg-gradient-to-br from-[#b05535]/5 to-[#e3a457]/5 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b05535] to-[#e3a457] mb-2">{stat.value}</div>
          <div class="text-gray-600">{stat.label}</div>
        </div>
      {/each}
    </div>

    <!-- Enhanced Trust Badges -->
    <div class="mt-16 flex flex-wrap justify-center items-center gap-8">
      {#each [
        { emoji: '🏆', label: 'Best Luxury Travel 2024' },
        { emoji: '🌟', label: '5-Star Excellence' },
        { emoji: '🤝', label: 'Certified Partner' },
        { emoji: '🌍', label: 'Sustainable Tourism' }
      ] as badge}
        <div class="text-center px-6 group">
          <div class="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-[#b05535]/10 to-[#e3a457]/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <span class="text-2xl group-hover:animate-bounce">{badge.emoji}</span>
          </div>
          <div class="text-sm text-gray-600 group-hover:text-[#b05535] transition-colors duration-300">{badge.label}</div>
        </div>
      {/each}
    </div>
  </div>
</section>
