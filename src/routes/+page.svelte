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
    <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50 z-10"></div>
    <HeroSection />
  </div>
</div>

<!-- Main Content Sections -->
<div class="bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
  <div class="absolute inset-0 bg-[url('/images/tips/destinations/athens-315833_1920.jpg')] opacity-5 bg-cover bg-center"></div>
  <FeaturesSection />
</div>

<div class="bg-white relative overflow-hidden">
  <div class="absolute inset-0 bg-[url('/images/tips/destinations/france-7370939_1920.jpg')] opacity-5 bg-cover bg-fixed bg-center"></div>
  <ToursSection />
</div>

<div class="bg-gray-50 relative overflow-hidden">
  <div class="absolute inset-0 bg-[url('/images/tips/destinations/boat-7767575_1920.jpg')] opacity-5 bg-cover bg-center"></div>
  <TravelPackagesSection />
</div>

<div class="bg-white relative overflow-hidden">
  <div class="absolute inset-0 bg-[url('/images/tips/destinations/camping-7947055_1920.jpg')] opacity-5 bg-cover bg-fixed bg-center"></div>
  <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
  <DiscoverSection />
</div>

<div class="bg-gray-50 relative overflow-hidden">
  <div class="absolute inset-0 bg-[url('/images/tips/destinations/gran-canaria-4360002_1920.jpg')] opacity-5 bg-cover bg-center"></div>
  <DestinationsSection />
</div>

<div class="bg-white relative overflow-hidden">
  <div class="absolute inset-0 bg-[url('/images/tips/destinations/women-5534478_1920.jpg')] opacity-5 bg-cover bg-fixed bg-center"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent"></div>
  <FAQSection />
</div>

<div class="bg-gray-50 relative overflow-hidden">
  <div class="absolute inset-0 bg-[url('/images/tips/destinations/roe-deer-9394840_1920.jpg')] opacity-5 bg-cover bg-center"></div>
  <TestimonialsSection />
</div>

<div class="bg-[#9F8054] text-white relative overflow-hidden">
  <div class="absolute inset-0 bg-[url('/images/tips/destinations/bird-7237037_1920.jpg')] opacity-20 bg-cover bg-fixed bg-center"></div>
  <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
  <div class="absolute inset-0 bg-gradient-to-br from-[#9F8054]/90 to-[#9F8054]/70"></div>
  <NewsletterSection />
</div>

<div class="bg-white relative overflow-hidden">
  <div class="absolute inset-0 bg-[url('/images/tips/destinations/gran-canaria-1684745_1280.jpg')] opacity-5 bg-cover bg-center"></div>
  <InstagramSection />
</div>

<div class="relative">
  <div class="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
  <Footer />
</div>
<WhatsAppChat />

<style>
  :global(body) {
    background-color: white;
  }

  /* Add smooth parallax effect */
  .bg-fixed {
    background-attachment: fixed;
  }
</style>