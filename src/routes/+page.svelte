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
</script>

<div class="relative min-h-screen pt-[72px]">
  <!-- Video Background -->
  <VideoBackground videoSrc="https://ziaraluxe.com/videos/6034698_Business_Traveling_1920x1080.mp4" />
  
  <!-- Overlay gradient -->
  <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 z-10"></div>

  <!-- Hello Bar -->
  <HelloBar />

  <!-- Navbar -->
  <Navbar />

  <!-- Hero Section -->
  <HeroSection />
</div>

<!-- Main Content Sections -->
<FeaturesSection />
<ToursSection />
<DiscoverSection />
<DestinationsSection />
<FAQSection />
<TestimonialsSection />
<NewsletterSection />
<InstagramSection />
<Footer />

<WhatsAppChat phoneNumber="+1234567890" welcomeMessage="Hello! How can we help you plan your perfect tour?" />

<style>
  :global(body) {
    @apply bg-primary;
  }
</style>