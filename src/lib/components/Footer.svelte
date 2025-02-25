<script lang="ts">
  import Logo from './Logo.svelte';
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    'Discover us': [
      { label: 'Guests Reviews', href: '/reviews' },
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/team' },
      { label: 'Tour Managers', href: '/tour-managers' },
      { label: 'Sales Partners', href: '/partners' },
      { label: 'Careers', href: '/careers' },
      { label: 'CSR Policy', href: '/csr' },
      { label: 'Create Your Travel Portfolio', href: '/create-portfolio' }
    ],
    'Support': [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Leave Your Feedback', href: '/feedback' },
      { label: 'How To Book', href: '/how-to-book' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Travel Deals', href: '/deals' },
      { label: 'COVID-19 Public Notice', href: '/covid-notice' },
      { label: 'Singapore Visa', href: '/singapore-visa' },
      { label: 'Annual Return', href: '/annual-return' }
    ],
    'Resources': [
      { label: 'Tour Status', href: '/tour-status' },
      { label: 'Blog', href: '/blog' },
      { label: 'Podcasts', href: '/podcasts' },
      { label: 'Video Blogs', href: '/vlogs' },
      { label: 'Articles By Veena Patil', href: '/articles/veena-patil' },
      { label: 'Articles By Sunila Patil', href: '/articles/sunila-patil' },
      { label: 'Articles By Neil Patil', href: '/articles/neil-patil' },
      { label: 'Travel Planner', href: '/planner' },
      { label: 'Customized Travel Planner', href: '/custom-planner' }
    ]
  };

  const socialLinks = [
    { icon: 'facebook', href: 'https://facebook.com' },
    { icon: 'youtube', href: 'https://youtube.com' },
    { icon: 'linkedin', href: 'https://linkedin.com' },
    { icon: 'instagram', href: 'https://instagram.com' }
  ];
</script>

<footer class="bg-gradient-to-br from-[#b05535] to-[#9c5738] text-white py-8 md:py-12 relative overflow-hidden">
  <div class="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
  <div class="container mx-auto px-4 relative z-10">
    <!-- Top Section with Contact Info -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pb-8 border-b border-white/20">
      <div class="text-center sm:text-left backdrop-blur-sm bg-white/5 rounded-lg p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
        <h3 class="text-base md:text-lg font-semibold mb-2 text-[#e2e8c0]">Our Offices</h3>
        <p class="text-xs md:text-sm text-white/90">Located across the country, ready to assist in planning & booking your perfect vacation.</p>
        <a href="/locate-us" class="inline-block mt-3 md:mt-4 text-xs md:text-sm text-[#ffd700] hover:text-[#fff5b8] transition-colors font-medium">Locate Us →</a>
      </div>
      
      <div class="text-center sm:text-left backdrop-blur-sm bg-white/5 rounded-lg p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
        <h3 class="text-base md:text-lg font-semibold mb-2 text-[#e2e8c0]">Call us</h3>
        <p class="text-xs md:text-sm text-white/90">Request a quote, or just chat about your next vacation. We're always happy to help!</p>
        <a href="tel:18002279" class="inline-block mt-3 md:mt-4 text-xs md:text-sm text-[#ffd700] hover:text-[#fff5b8] transition-colors font-medium">1800 22 7979 →</a>
      </div>
      
      <div class="text-center sm:text-left backdrop-blur-sm bg-white/5 rounded-lg p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
        <h3 class="text-base md:text-lg font-semibold mb-2 text-[#e2e8c0]">Write to us</h3>
        <p class="text-xs md:text-sm text-white/90">Be it an enquiry, feedback or a simple suggestion, write to us.</p>
        <a href="mailto:travel@ziaraluxe.com" class="inline-block mt-3 md:mt-4 text-xs md:text-sm text-[#ffd700] hover:text-[#fff5b8] transition-colors font-medium">travel@ziaraluxe.com →</a>
      </div>
      
      <div class="text-center sm:text-left backdrop-blur-sm bg-white/5 rounded-lg p-4 md:p-6 transform hover:scale-105 transition-all duration-300">
        <h3 class="text-base md:text-lg font-semibold mb-2 text-[#e2e8c0]">Connect with us</h3>
        <p class="text-xs md:text-sm text-white/90">Reviews, podcasts, blogs and more...</p>
        <div class="flex justify-center sm:justify-start gap-3 md:gap-4 mt-3 md:mt-4">
          {#each socialLinks as { icon, href }}
            <a 
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              class="text-white/80 hover:text-[#ffd700] transition-all duration-300 transform hover:scale-110"
            >
              <span class="sr-only">{icon}</span>
              <svg class="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                {#if icon === 'facebook'}
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                {:else if icon === 'youtube'}
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                {:else if icon === 'linkedin'}
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                {:else if icon === 'instagram'}
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.979 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                {/if}
              </svg>
            </a>
          {/each}
        </div>
      </div>
    </div>

    <!-- Newsletter Section -->
    <div class="py-6 md:py-8 border-b border-white/20">
      <div class="max-w-xl mx-auto text-center backdrop-blur-sm bg-white/5 rounded-lg p-4 md:p-8 transform hover:scale-105 transition-all duration-300">
        <h2 class="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-[#e2e8c0]">Keep travelling all year round!</h2>
        <p class="text-sm md:text-base text-white/90 mb-4 md:mb-6">Subscribe to our newsletter to find travel inspiration in your inbox.</p>
        <form class="flex flex-col gap-3 md:gap-4 max-w-md mx-auto">
          <div class="flex flex-col sm:flex-row gap-3">
            <input 
              type="text" 
              placeholder="Full Name*" 
              class="flex-1 px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffd700] text-white placeholder-white/50 transition-all duration-300 text-sm"
            />
            <input 
              type="email" 
              placeholder="Email ID*" 
              class="flex-1 px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffd700] text-white placeholder-white/50 transition-all duration-300 text-sm"
            />
          </div>
          <button 
            type="submit" 
            class="px-6 py-2 bg-[#ffd700] text-[#9c5738] rounded-lg hover:bg-[#fff5b8] transition-all duration-300 font-medium transform hover:scale-105 text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <!-- Navigation Links -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 py-6 md:py-8">
      {#each Object.entries(footerLinks) as [section, links]}
        <div class="backdrop-blur-sm bg-white/5 rounded-lg p-4 md:p-6">
          <h3 class="text-base md:text-lg font-semibold mb-3 md:mb-4 text-[#e2e8c0]">{section}</h3>
          <ul class="grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-2">
            {#each links as link}
              <li>
                <a 
                  href={link.href}
                  class="text-white/90 hover:text-[#ffd700] transition-colors text-xs md:text-sm flex items-center group"
                >
                  <span class="transform group-hover:translate-x-1 transition-transform inline-block">{link.label}</span>
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <!-- Logo and Copyright -->
    <div class="pt-6 md:pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
      <div class="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <Logo />
        <div class="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 text-xs md:text-sm text-white/80">
          <a href="/privacy" class="hover:text-[#ffd700] transition-colors">Privacy Policy</a>
          <span class="text-white/60 hidden md:inline">|</span>
          <a href="/terms" class="hover:text-[#ffd700] transition-colors">Terms & Conditions</a>
          <span class="text-white/60 hidden md:inline">|</span>
          <a href="/sitemap" class="hover:text-[#ffd700] transition-colors">Site Map</a>
        </div>
      </div>
      <p class="text-xs md:text-sm text-white/80 text-center md:text-right">&copy; {currentYear} Ziara Pvt Ltd. All Rights Reserved.</p>
    </div>
  </div>
</footer>
