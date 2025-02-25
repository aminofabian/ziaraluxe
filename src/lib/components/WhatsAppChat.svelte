<script>
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';
  // You can customize these values
  export let phoneNumber = "+1234567890"; // Replace with your actual WhatsApp number
  export let welcomeMessage = "Hello! How can we help you?";
  let isOpen = false;
  let isMobile = false;

  // Check if device is mobile on mount and window resize
  function checkMobile() {
    isMobile = window.innerWidth < 768;
  }

  onMount(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  });

  function toggleChat() {
    isOpen = !isOpen;
  }

  function openWhatsApp() {
    const message = encodeURIComponent(welcomeMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }
</script>

<div class="whatsapp-container">
  {#if !isOpen}
    <button class="speak-button" on:click={toggleChat}>
      {#if !isMobile}
        <span>SPEAK TO AN EXPERT</span>
      {/if}
      <div class="icon-container">
        <svg xmlns="http://www.w3.org/2000/svg" class="wa-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </div>
    </button>
  {:else}
    <div class="chat-box" transition:slide>
      <div class="chat-header">
        <span>Chat with an Expert</span>
        <button class="close-btn" on:click={toggleChat}>&times;</button>
      </div>
      <div class="chat-body">
        <p>{welcomeMessage}</p>
        <button class="start-chat-btn" on:click={openWhatsApp}>
          Start Chat
        </button>
      </div>
    </div>
  {/if}
</div>

<style>
  .whatsapp-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
  }

  .speak-button {
    display: flex;
    align-items: center;
    gap: 12px;
    background-color: #b05535;
    border: none;
    border-radius: 4px;
    padding: 12px 20px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  .speak-button:hover {
    background-color: #4a561f;
  }

  .icon-container {
    background-color: #6d7e2e;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .wa-icon {
    width: 20px;
    height: 20px;
  }

  .chat-box {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 300px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
  }

  /* Mobile styles */
  @media (max-width: 767px) {
    .whatsapp-container {
      bottom: 16px;
      right: 16px;
    }

    .speak-button {
      padding: 12px;
    }

    .icon-container {
      width: 40px;
      height: 40px;
    }

    .wa-icon {
      width: 24px;
      height: 24px;
    }

    .chat-box {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      width: 100%;
      max-width: 100%;
      border-radius: 8px 8px 0 0;
    }
  }

  /* Tablet styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    .chat-box {
      width: 360px;
    }
  }

  .chat-header {
    background-color: #b05535;
    color: white;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
  }

  .close-btn {
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    padding: 0 8px;
  }

  .chat-body {
    padding: 20px;
  }

  .chat-body p {
    margin: 0 0 15px 0;
    color: #4a4a4a;
    line-height: 1.5;
  }

  .start-chat-btn {
    width: 100%;
    padding: 12px;
    background-color: #6d7e2e;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s ease;
  }

  .start-chat-btn:hover {
    background-color: #b05535;
  }

  /* Safe area inset for modern mobile browsers */
  @supports (padding: max(0px)) {
    @media (max-width: 767px) {
      .whatsapp-container {
        padding-bottom: env(safe-area-inset-bottom, 0px);
        padding-right: env(safe-area-inset-right, 16px);
      }

      .chat-box {
        padding-bottom: env(safe-area-inset-bottom, 0px);
      }
    }
  }
</style> 