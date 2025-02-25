<script lang="ts">
  const faqs = [
    {
      question: "How do you ensure luxury standards across all experiences?",
      answer: "We partner exclusively with 5-star rated establishments and service providers, conduct regular quality assessments, and maintain strict standards for all our experiences. Our team personally vets each destination and service to ensure it meets our luxury criteria."
    },
    {
      question: "What makes your travel experiences unique?",
      answer: "Each journey is meticulously crafted with exclusive access to private venues, personalized itineraries, and unique cultural experiences. We combine luxury amenities with authentic local experiences that aren't available to the general public."
    },
    {
      question: "Can you accommodate special requests or dietary requirements?",
      answer: "Absolutely! We pride ourselves on attention to detail and personalization. Whether it's dietary restrictions, accessibility needs, or specific preferences, we ensure all aspects of your journey are tailored to your requirements."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We offer flexible cancellation policies that vary based on the type of booking and destination. Generally, full refunds are available up to 30 days before departure, with partial refunds available closer to the date. Each booking comes with clear cancellation terms."
    },
    {
      question: "Do you offer private or group experiences?",
      answer: "We offer both private and small-group luxury experiences. Private tours can be fully customized to your preferences, while our small-group experiences maintain an intimate atmosphere with never more than 12 guests."
    },
    {
      question: "How do you handle travel insurance and safety measures?",
      answer: "We partner with premium travel insurance providers and include comprehensive coverage in our packages. Our team monitors global safety conditions and implements extensive safety protocols for all experiences."
    }
  ];
</script>

<section class="relative py-24 px-4 overflow-hidden bg-white/80 backdrop-blur-lg">
  <!-- Glass panels background effect -->
  <div class="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.015]"></div>
  <!-- Background elements -->
  <div class="absolute inset-0 bg-[#b05535]/5"></div>
  
  <!-- Decorative elements -->
  <div class="absolute -right-40 -bottom-40 w-96 h-96 bg-[#e3a457]/10 rounded-full blur-3xl animate-float"></div>
  <div class="absolute -left-40 -top-40 w-96 h-96 bg-[#b05535]/10 rounded-full blur-3xl animate-float-delayed"></div>
  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/30 blur-2xl"></div>

  <div class="container mx-auto max-w-5xl relative">
    <div class="text-center mb-16 relative">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#b05535]"></div>
      <h2 class="font-sans text-5xl font-bold mb-4 text-[#b05535]">Frequently Asked Questions</h2>
      <p class="text-xl text-gray-600 font-sans">Everything you need to know about our luxury experiences</p>
    </div>

    <div class="grid gap-6 perspective-1000">
      {#each faqs as faq, i}
        <div 
          class="bg-white/70 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:translate-y-[-2px] hover:rotate-[0.5deg]"
          style="animation: fadeIn 0.5s ease-out forwards {i * 100}ms"
        >
          <details class="group/item">
            <summary class="flex items-center justify-between p-6 cursor-pointer list-none relative overflow-hidden before:absolute before:inset-0 before:bg-[#b05535]/5 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700">
              <h3 class="text-xl font-semibold text-[#b05535] group-hover:text-[#e3a457] transition-colors duration-300">
                {faq.question}
              </h3>
              <div class="relative ml-4">
                <div class="w-8 h-8 rounded-full bg-[#b05535]/20 backdrop-blur-sm flex items-center justify-center group-hover/item:[&:not([open])]:bg-[#b05535]/20 transition-colors duration-300">
                  <svg 
                    class="w-5 h-5 text-[#b05535] transform transition-transform duration-300 group-hover/item:[&:not([open])]:rotate-180" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </summary>
            <div class="px-6 pb-6">
              <p class="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </details>
        </div>
      {/each}
    </div>

    <!-- Contact CTA -->
    <div class="mt-16 text-center">
      <p class="text-gray-600 mb-6">Still have questions? We're here to help!</p>
      <a 
        href="/contact" 
        class="inline-flex items-center gap-2 px-8 py-4 bg-[#b05535] text-white rounded-full font-semibold hover:bg-[#e3a457] transition-all duration-300 transform hover:scale-105"
      >
        Contact Our Team
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </div>
</section>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
      filter: blur(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
      filter: blur(0);
    }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-20px) scale(1.1); }
  }

  @keyframes float-delayed {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(20px) scale(1.1); }
  }

  :global(.perspective-1000) {
    perspective: 1000px;
  }

  details[open] summary ~ div {
    animation: slideDown 0.3s ease-out;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  details summary::-webkit-details-marker {
    display: none;
  }
</style>
