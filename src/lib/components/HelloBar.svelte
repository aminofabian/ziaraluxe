<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { currentLanguage } from '../stores/translations';
  import { onMount } from 'svelte';

  let showBar = false;
  let currentMessageIndex = 0;

  const messages = {
    en: [
      "Experience luxury like never before",
      "Your journey begins here",
      "Exclusive destinations await"
    ],
    fr: [
      "Vivez le luxe comme jamais auparavant",
      "Votre voyage commence ici",
      "Des destinations exclusives vous attendent"
    ],
    zh: [
      "体验前所未有的奢华",
      "您的旅程从这里开始",
      "专属目的地等待着您"
    ],
    ar: [
      "اختبر الفخامة كما لم تختبرها من قبل",
      "رحلتك تبدأ هنا",
      "وجهات حصرية في انتظارك"
    ]
  };

  $: currentMessages = messages[$currentLanguage] || messages.en;

  export let phone: string = "+1 (234) 567-8900";
  export let email: string = "contact@ziaraluxe.com";

  onMount(() => {
    showBar = true;
    setInterval(() => {
      currentMessageIndex = (currentMessageIndex + 1) % currentMessages.length;
    }, 5000);
  });
</script>

<div class="fixed top-0 left-0 right-0 z-40 pointer-events-none">
  {#if showBar}
    <div 
      in:fly="{{ y: -100, duration: 1000 }}"
      out:fade
      class="w-full bg-gradient-to-r from-black/10 via-white/5 to-black/10 backdrop-blur-[2px] border-b border-white/5"
    >
      <div class="container mx-auto px-4">
        <div class="py-2 flex items-center justify-center relative overflow-hidden">
          <!-- Animated background elements -->
          <div class="absolute inset-0 flex justify-around items-center opacity-10">
            {#each Array(5) as _, i}
              <div 
                class="w-40 h-40 rounded-full bg-accent/30 blur-3xl transform"
                style="animation: float {3 + i * 0.5}s infinite ease-in-out alternate"
              ></div>
            {/each}
          </div>

          <!-- Message -->
          {#key currentMessageIndex}
            <p 
              in:fly="{{ x: 50, duration: 500 }}"
              out:fly="{{ x: -50, duration: 500 }}"
              class="text-white/70 text-sm font-light tracking-wider uppercase relative"
            >
              {currentMessages[currentMessageIndex]}
            </p>
          {/key}

          <!-- Decorative elements -->
          <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/10 to-transparent"></div>
          <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/10 to-transparent"></div>
        </div>
      </div>
    </div>
  {/if}
</div>

<div class="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md h-[40px] flex items-center">
  <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    <div class="flex items-center gap-6 text-sm">
      <a href={`tel:${phone}`} class="flex items-center gap-2 hover:text-accent transition-colors text-white">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span>{phone}</span>
      </a>
      <a href={`mailto:${email}`} class="hidden sm:flex items-center gap-2 hover:text-accent transition-colors text-white">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>{email}</span>
      </a>
    </div>
    <div class="flex items-center gap-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="text-white hover:text-accent transition-colors">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
        </svg>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="text-white hover:text-accent transition-colors">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="text-white hover:text-accent transition-colors">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-1.379-.896-.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
        </svg>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-white hover:text-accent transition-colors">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
    </div>
  </div>
</div>

<style>
  @keyframes float {
    0% {
      transform: translateY(-5px) scale(1);
    }
    100% {
      transform: translateY(5px) scale(1.1);
    }
  }

  :global([dir="rtl"]) .text-gradient {
    direction: ltr;
  }
</style>
