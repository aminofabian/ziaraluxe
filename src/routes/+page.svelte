<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import VideoBackground from '$lib/components/VideoBackground.svelte';
  import HelloBar from '$lib/components/HelloBar.svelte';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import FeaturesSection from '$lib/components/FeaturesSection.svelte';
  import DestinationsSection from '$lib/components/DestinationsSection.svelte';
  import ToursSection from '$lib/components/ToursSection.svelte';
  import DiscoverSection from '$lib/components/DiscoverSection.svelte';
  import TestimonialsSection from '$lib/components/TestimonialsSection.svelte';
  import NewsletterSection from '$lib/components/NewsletterSection.svelte';
  import FAQSection from '$lib/components/FAQSection.svelte';
  import InstagramSection from '$lib/components/InstagramSection.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import WhatsAppChat from '$lib/components/WhatsAppChat.svelte';
  import TravelPackagesSection from '$lib/components/TravelPackagesSection.svelte';
</script>

<div class="relative min-h-screen">
  <!-- Hello Bar -->
  <HelloBar />

  <!-- Navbar -->
  <Navbar />

  <!-- Hero Section with Video Background -->
  <div class="relative h-screen">
    <VideoBackground videoSrc="https://streamable.com/e/q8y4b1" />
    <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 z-10"></div>
    <HeroSection />
  </div>
</div>

<!-- Main Content Sections -->
<FeaturesSection />
<ToursSection />
<TravelPackagesSection />
<DiscoverSection />
<DestinationsSection />
<FAQSection />
<TestimonialsSection />
<NewsletterSection />
<InstagramSection />
<Footer />
<WhatsAppChat />

<style>
  :global(body) {
    @apply bg-primary;
  }
</style>