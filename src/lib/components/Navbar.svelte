<script lang="ts">
  import Logo from './Logo.svelte';
  import { fade } from 'svelte/transition';
  import { currentLanguage } from '../stores/translations';
  
  let isMenuOpen = false;
  let isTranslated = false;
  let showLanguageMenu = false;
  let selectedLanguage = 'English';

  const languages = [
    { code: 'en', name: 'English', label: 'English' },
    { code: 'fr', name: 'French', label: 'Français' },
    { code: 'zh', name: 'Chinese', label: '中文' },
    { code: 'ar', name: 'Arabic', label: 'العربية' }
  ];

  function selectLanguage(lang) {
    selectedLanguage = lang.name;
    currentLanguage.set(lang.code);
    showLanguageMenu = false;
  }

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };
</script>

<nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/10 border-b border-white/5 transition-all duration-300 hover:bg-black/15">
  <div class="container mx-auto px-6 py-4">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="flex items-center">
        <Logo size={32} />
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center space-x-12">
        <a href="/" class="nav-link text-white/90 hover:text-white transition-all duration-300">Home</a>
        <a href="/collections" class="nav-link text-white/90 hover:text-white transition-all duration-300">Collections</a>
        <a href="/experiences" class="nav-link text-white/90 hover:text-white transition-all duration-300">Experiences</a>
        <a href="/about" class="nav-link text-white/90 hover:text-white transition-all duration-300">About</a>
        <button class="px-8 py-3 bg-white text-black hover:bg-white/90 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 group">
          <span>Connect</span>
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        <div class="relative">
          <button 
            class="nav-btn text-white/80 hover:text-white transition-all duration-300"
            on:click={() => showLanguageMenu = !showLanguageMenu}
          >
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" />
                <path d="M3 12H21" />
                <path d="M12 3C14.5 5.5 15.5 8.5 15.5 12C15.5 15.5 14.5 18.5 12 21" />
                <path d="M12 3C9.5 5.5 8.5 8.5 8.5 12C8.5 15.5 9.5 18.5 12 21" />
              </svg>
              {selectedLanguage}
              <svg class="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M6 9L12 15L18 9" />
              </svg>
            </span>
          </button>

          {#if showLanguageMenu}
            <div 
              class="absolute right-0 mt-2 py-2 w-48 bg-black/90 backdrop-blur-lg rounded-sm shadow-xl border border-white/10"
              transition:fade={{ duration: 200 }}
            >
              {#each languages as language}
                <button
                  class="w-full px-4 py-2 text-left text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm"
                  on:click={() => selectLanguage(language)}
                >
                  <span class="flex items-center gap-2">
                    <span class="font-normal">{language.label}</span>
                    <span class="text-white/40 text-xs">({language.name})</span>
                  </span>
                </button>
              {/each}
            </div>
          {/if}
        </div>
        <button 
          class="nav-btn text-white/80 hover:text-white transition-all duration-300"
        >
          <span class="flex items-center gap-2">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" />
              <path d="M10 17L15 12L10 7" />
              <path d="M15 12H3" />
            </svg>
            Login
          </span>
        </button>
        <button 
          class="signup-btn px-6 py-2 bg-accent/90 hover:bg-accent text-white rounded-sm transition-all duration-300 flex items-center gap-2"
        >
          <span class="flex items-center gap-2">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" />
              <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" />
              <path d="M20 8V14" />
              <path d="M23 11H17" />
            </svg>
            Sign Up
          </span>
        </button>
      </div>

      <!-- Mobile menu button -->
      <button class="lg:hidden text-white hover:text-accent transition-colors" on:click={toggleMenu}>
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if !isMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
          {/if}
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    {#if isMenuOpen}
      <div class="lg:hidden mt-4 glass-effect border border-white/10 p-6 animate-fade-in">
        <div class="flex flex-col space-y-6">
          <a href="/" class="text-lg text-white/90 hover:text-white transition-all duration-300">Home</a>
          <a href="/collections" class="text-lg text-white/90 hover:text-white transition-all duration-300">Collections</a>
          <a href="/experiences" class="text-lg text-white/90 hover:text-white transition-all duration-300">Experiences</a>
          <a href="/about" class="text-lg text-white/90 hover:text-white transition-all duration-300">About</a>
          <button class="w-full px-8 py-3 bg-white text-black hover:bg-white/90 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 group">
            <span>Connect</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <div class="relative">
            <button 
              class="nav-btn text-white/80 hover:text-white transition-all duration-300"
              on:click={() => showLanguageMenu = !showLanguageMenu}
            >
              <span class="flex items-center gap-2">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" />
                  <path d="M3 12H21" />
                  <path d="M12 3C14.5 5.5 15.5 8.5 15.5 12C15.5 15.5 14.5 18.5 12 21" />
                  <path d="M12 3C9.5 5.5 8.5 8.5 8.5 12C8.5 15.5 9.5 18.5 12 21" />
                </svg>
                {selectedLanguage}
                <svg class="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M6 9L12 15L18 9" />
                </svg>
              </span>
            </button>

            {#if showLanguageMenu}
              <div 
                class="absolute right-0 mt-2 py-2 w-48 bg-black/90 backdrop-blur-lg rounded-sm shadow-xl border border-white/10"
                transition:fade={{ duration: 200 }}
              >
                {#each languages as language}
                  <button
                    class="w-full px-4 py-2 text-left text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 text-sm"
                    on:click={() => selectLanguage(language)}
                  >
                    <span class="flex items-center gap-2">
                      <span class="font-normal">{language.label}</span>
                      <span class="text-white/40 text-xs">({language.name})</span>
                    </span>
                  </button>
                {/each}
              </div>
            {/if}
          </div>
          <button 
            class="nav-btn text-white/80 hover:text-white transition-all duration-300"
          >
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" />
                <path d="M10 17L15 12L10 7" />
                <path d="M15 12H3" />
              </svg>
              Login
            </span>
          </button>
          <button 
            class="signup-btn px-6 py-2 bg-accent/90 hover:bg-accent text-white rounded-sm transition-all duration-300 flex items-center gap-2"
          >
            <span class="flex items-center gap-2">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" />
                <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" />
                <path d="M20 8V14" />
                <path d="M23 11H17" />
              </svg>
              Sign Up
            </span>
          </button>
        </div>
      </div>
    {/if}
  </div>
</nav>

<style>
  .nav-link {
    position: relative;
    font-weight: 400;
    letter-spacing: 0.02em;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    width: 0;
    height: 1px;
    background-color: theme(colors.accent);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .nav-btn {
    font-size: 0.9rem;
    letter-spacing: 0.05em;
    padding: 0.5rem;
    border-radius: 3px;
    background: transparent;
    transition: all 0.3s ease;
    border: 1px solid transparent;
  }

  .nav-btn:hover {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.1);
  }

  .signup-btn {
    font-size: 0.9rem;
    letter-spacing: 0.05em;
    box-shadow: 0 2px 8px rgba(247, 179, 43, 0.15);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(247, 179, 43, 0.2);
  }

  .signup-btn:hover {
    box-shadow: 0 4px 12px rgba(247, 179, 43, 0.25);
    transform: translateY(-1px);
    background: theme(colors.accent);
    border-color: transparent;
  }

  :global(.glass-effect) {
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }
</style>
