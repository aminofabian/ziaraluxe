<script lang="ts">
  let email = '';
  let subscribed = false;

  function handleSubmit() {
    // TODO: Implement newsletter subscription
    subscribed = true;
    email = '';
  }
</script>

<section class="relative py-24 px-4 bg-[#b05535] overflow-hidden">
  <!-- Background Image with Overlay -->
  <div class="absolute inset-0">
    <img 
      src="/images/tips/destinations/bird-7237037_1920.jpg" 
      alt="Luxury Travel"
      class="w-full h-full object-cover opacity-20"
    />
    <div class="absolute inset-0 bg-[#b05535]/80"></div>
  </div>

  <div class="container mx-auto max-w-4xl relative">
    <div class="text-center">
      <h2 class="font-sans text-5xl font-bold mb-6 text-white">Join Our Journey</h2>
      <p class="text-xl text-white/90 font-sans mb-12 max-w-2xl mx-auto">
        Subscribe to receive exclusive travel insights, luxury destinations, and special offers crafted for discerning travelers.
      </p>

      <form 
        on:submit|preventDefault={handleSubmit}
        class="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
      >
        <input
          type="email"
          bind:value={email}
          placeholder="Enter your email"
          class="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#e3a457] focus:border-transparent"
          required
        />
        <button
          type="submit"
          class="px-8 py-4 rounded-full bg-[#e3a457] hover:bg-[#d89442] text-white font-semibold transition-colors duration-300"
        >
          Subscribe
        </button>
      </form>

      {#if subscribed}
        <p class="mt-4 text-white/90 animate-fade-in">
          Thank you for subscribing! Welcome to our luxury travel community.
        </p>
      {/if}

      <!-- Privacy Note -->
      <p class="mt-6 text-sm text-white/60">
        By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
      </p>

      <!-- Benefits -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-12 h-12 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
            <span class="text-2xl">✨</span>
          </div>
          <h3 class="text-white font-semibold mb-2">Exclusive Offers</h3>
          <p class="text-white/80">First access to limited-time luxury deals</p>
        </div>
        <div class="text-center">
          <div class="w-12 h-12 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
            <span class="text-2xl">🎯</span>
          </div>
          <h3 class="text-white font-semibold mb-2">Personalized Content</h3>
          <p class="text-white/80">Travel recommendations tailored to you</p>
        </div>
        <div class="text-center">
          <div class="w-12 h-12 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
            <span class="text-2xl">🎁</span>
          </div>
          <h3 class="text-white font-semibold mb-2">Member Perks</h3>
          <p class="text-white/80">Special benefits for subscribers only</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .animate-fade-in {
    animation: fadeIn 0.5s ease-in;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  /* Smooth scroll behavior for the entire page */
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
