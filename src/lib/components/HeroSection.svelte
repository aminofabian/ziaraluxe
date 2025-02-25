<script lang="ts">
  import { currentLanguage, translations } from '$lib/stores/translations';

  let aiMessage = '';
  let userInput = '';
  let isLoading = false;
  const aiName = "Aria";
  const aiRole = "Luxury Travel Concierge";

  // Get translations based on current language
  $: content = translations[$currentLanguage]?.hero || translations.en.hero;

  const handleAiInteraction = async () => {
    if (!userInput.trim()) return;
    
    isLoading = true;
    // Simulate AI response
    await new Promise(resolve => setTimeout(resolve, 1000));
    aiMessage = `I'd be happy to help you discover luxury experiences tailored to your preferences. Would you like to explore our curated collections or plan a personalized experience?`;
    isLoading = false;
    userInput = '';
  };
</script>

<div class="relative z-20 min-h-screen flex items-end pb-16 md:pb-32">
  <!-- Video Background -->
  <video
    class="absolute inset-0 w-full h-full object-cover -z-10"
    autoplay
    loop
    muted
    playsinline
  >
    <source src="./videos/6034698_Business_Traveling_1920x1080.mp4" type="video/mp4" />
  </video>

  <div class="container mx-auto px-4">
    <!-- Content grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-end">
      <div class="text-left backdrop-blur-sm bg-black/5 p-4 md:p-8 rounded-xl">
        <h1 class="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl mb-4 md:mb-8 leading-tight">
          <span class="block text-white">Discover</span>
          <span class="block text-[#e3a457] font-bold mt-1 md:mt-2">Extraordinary</span>
          <span class="block text-white mt-1 md:mt-2">Experiences</span>
        </h1>
        <p class="text-lg sm:text-xl md:text-2xl xl:text-3xl mb-6 md:mb-12 text-white leading-relaxed max-w-2xl">
          Let our AI concierge guide you through a world of exclusive offerings and bespoke adventures
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 md:gap-6">
          <a 
            href="/collections" 
            class="btn-primary px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium bg-[#b05535] hover:bg-[#b05535]/90 text-white transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-xl shadow-lg"
          >
            <span>Explore Collections</span>
            <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a 
            href="/contact" 
            class="btn-secondary px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium bg-white/5 hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 group text-[#e3a457] rounded-xl border border-[#e3a457]/20"
          >
            <span>Contact Concierge</span>
            <svg class="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Right side AI chat -->
      <div class="w-full">
        <!-- AI Agent Interface -->
        <div class="glass-effect p-4 md:p-8 shadow-2xl backdrop-blur-sm border border-white/5 bg-black/5 rounded-lg">
          <div class="mb-4 md:mb-6 min-h-[120px] text-left">
            {#if aiMessage}
              <div class="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                <div class="relative">
                  <div class="w-10 h-10 md:w-14 md:h-14 overflow-hidden ai-avatar">
                    <img 
                      src="/images/Screenshot_2025-02-20_004831-removebg-preview.png" 
                      alt="Aria - AI Luxury Concierge"
                      class="w-full h-full object-cover"
                    />
                    <div class="absolute bottom-0 right-0 w-2 h-2 md:w-3 md:h-3 bg-green-400 border-2 border-white"></div>
                  </div>
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-2 md:mb-3">
                    <span class="font-medium text-accent text-lg md:text-xl">{aiName}</span>
                    <span class="text-white/70 text-xs md:text-sm">{aiRole}</span>
                  </div>
                  <p class="text-white text-base md:text-xl leading-relaxed">{aiMessage}</p>
                </div>
              </div>
            {:else}
              <div class="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                <div class="w-10 h-10 md:w-14 md:h-14 overflow-hidden ai-avatar">
                  <img 
                    src="/images/Screenshot_2025-02-20_004831-removebg-preview.png" 
                    alt="Aria - AI Luxury Concierge"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div class="flex items-center gap-2 mb-2 md:mb-3">
                    <span class="font-medium text-accent text-lg md:text-xl">{aiName}</span>
                    <span class="text-white/70 text-xs md:text-sm">{aiRole}</span>
                  </div>
                  <p class="text-white text-base md:text-xl leading-relaxed">How may I assist you with your luxury experience today?</p>
                </div>
              </div>
            {/if}
          </div>

          <!-- Suggested Prompts -->
          {#if !aiMessage}
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
              {#each ['Plan a luxury Iceland adventure', 'Find exclusive resorts in Dubai', 'Organize a private yacht tour', 'Book a helicopter transfer'] as prompt}
                <button 
                  on:click={() => { userInput = prompt; handleAiInteraction(); }}
                  class="text-left p-2 md:p-3 bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-102 text-sm md:text-lg text-white rounded"
                >
                  {prompt}
                </button>
              {/each}
            </div>
          {/if}

          <div class="flex gap-2">
            <input
              type="text"
              bind:value={userInput}
              placeholder="Ask about our luxury experiences..."
              class="flex-1 bg-white/5 border border-white/10 px-4 md:px-6 py-3 md:py-4 text-sm md:text-lg text-white placeholder-white/40 focus:outline-none focus:border-accent transition-all duration-300 hover:bg-white/10 min-h-[50px] md:min-h-[60px] rounded"
              on:keydown={(e) => e.key === 'Enter' && handleAiInteraction()}
            />
            <button
              on:click={handleAiInteraction}
              class="bg-accent/90 hover:bg-accent text-white px-6 md:px-8 py-3 md:py-4 transition-all duration-300 flex items-center gap-2 hover:scale-105 min-h-[50px] md:min-h-[60px] rounded"
              disabled={isLoading}
            >
              {#if isLoading}
                <svg class="animate-spin h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              {:else}
                <span class="text-sm md:text-base">Ask</span>
                <svg class="w-4 h-4 md:w-5 md:h-5 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              {/if}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>