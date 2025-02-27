<script lang="ts">
  import TravelItinerary from '$lib/components/TravelItinerary.svelte';
  import type { PageData } from './$types';
  
  export let data: PageData;
</script>

<TravelItinerary {...data.itinerary} /> 