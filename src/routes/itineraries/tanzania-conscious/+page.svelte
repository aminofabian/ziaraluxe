<script lang="ts">
  import TravelItinerary from '$lib/components/TravelItinerary.svelte';
  
  const itineraryData = {
    title: "Six Days Conscious Travelers' Tour - Tanzania",
    startDate: "September 1, 2024",
    endDate: "September 6, 2024",
    days: [
      {
        dayOfWeek: "Day One",
        date: "September 1, 2024",
        location: "Arusha, Tanzania",
        activities: [
          {
            time: "8:00 AM",
            description: "Arrival: Touch down in Arusha, Tanzania."
          },
          {
            time: "9:00 AM",
            description: "Stay at a sustainable hotel, Arusha Serena Hotel & Resort."
          },
          {
            time: "12:00 PM",
            description: "Lunch: At Arusha Serena Hotel & Resort."
          },
          {
            time: "14:00 PM",
            description: "Afternoon Brief: Afternoon till evening orientation on Tanzania's culture and the upcoming CSR initiatives."
          },
          {
            time: "19:00 PM",
            description: "Dinner: Welcome dinner at Arusha Serena Hotel & Resort."
          }
        ]
      },
      {
        dayOfWeek: "Day Two",
        date: "September 2, 2024",
        location: "Arusha Serena Hotel",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast."
          },
          {
            time: "9:00 AM",
            description: "Visit to rural areas around Arusha: visit local schools participating in educational enhancement programs. Participate in teaching sessions and donate educational materials."
          },
          {
            time: "12:00 PM",
            description: "Lunch: Enjoy a meal prepared by local schools."
          },
          {
            time: "14:00 PM",
            description: "Afternoon: Engage with community leaders to understand local needs and discuss potential long-term CSR projects. CSR Activity: Donate books, school supplies, or funds to local schools in rural Arusha."
          },
          {
            time: "19:00 PM",
            description: "Dinner: Farm-to-table dining experience at Arusha Serena Hotel."
          }
        ]
      },
      {
        dayOfWeek: "Day Three",
        date: "September 3, 2024",
        location: "Ngorongoro Conservation Area",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast."
          },
          {
            time: "9:00 AM",
            description: "Trip to Ngorongoro conservation area. Participate in an organized conservation project, possibly tree planting and wildlife monitoring with focus on community and environmental benefits."
          },
          {
            time: "12:00 PM",
            description: "Lunch: Organic, locally sourced meal at Ngorongoro Serena Safari Lodge."
          },
          {
            time: "14:00 PM",
            description: "Afternoon game drive to experience Tanzania's biodiversity at Tarangire National Park."
          },
          {
            time: "19:00 PM",
            description: "Evening: Sundowner and storytelling session with locals. Dinner: Traditional dinner at a local eco-friendly resort."
          }
        ]
      },
      {
        dayOfWeek: "Day Four",
        date: "September 4, 2024",
        location: "Ngorongoro Serena Safari Lodge",
        activities: [
          {
            time: "6:00 AM",
            description: "Morning: Breakfast."
          },
          {
            time: "7:00 AM",
            description: "Visit to a Maasai village: Participate with the locals in sustainable farming practices and also learn about local agricultural innovations aimed at reducing environmental impact."
          },
          {
            time: "12:00 PM",
            description: "Lunch: Lunch at a local women cooperative."
          },
          {
            time: "14:00 PM",
            description: "Afternoon: Visit a local women's cooperative to see how they're empowered through CSR initiatives, possibly contributing to workshops and skill sharing sessions."
          },
          {
            time: "19:00 PM",
            description: "Evening: Relax with the local women and children under a bonfire. Dinner: Organic, locally sourced meal at Arusha Serena Hotel."
          }
        ]
      },
      {
        dayOfWeek: "Day Five",
        date: "September 5, 2024",
        location: "Kilimanjaro International Airport",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast and a visit to local health clinics and community health projects. Spend a day aiding in health initiatives: by distributing medical supplies, supporting health education and even assist in community health screening."
          },
          {
            time: "12:00 PM",
            description: "Lunch: Dine with the community."
          },
          {
            time: "14:00 PM",
            description: "Afternoon: Spend the afternoon till evening with local artists and musicians, supporting local culture preservation."
          },
          {
            time: "19:00 PM",
            description: "Dinner: Cultural dinner experience with the community."
          }
        ]
      },
      {
        dayOfWeek: "Day Six",
        date: "September 6, 2024",
        location: "Departure Day",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast. Morning reflection session to discuss the impact of the visit and how to sustain and expand CSR efforts."
          },
          {
            time: "13:00 PM",
            description: "Lunch: At a local eatery. Optional visit to a local market for ethical shopping, possibly supporting local craftspeople."
          },
          {
            time: "18:00 PM",
            description: "Departure: Depart for Kilimanjaro Airport for your onward flight."
          }
        ]
      }
    ]
  };
</script>

<TravelItinerary {...itineraryData} /> 