<script lang="ts">
  import TravelItinerary from '$lib/components/TravelItinerary.svelte';
  
  const itineraryData = {
    title: "Singapore Corporate Benchmark Tour",
    startDate: "May 15, 2024",
    endDate: "May 20, 2024",
    days: [
      {
        dayOfWeek: "Day One",
        date: "May 15, 2024",
        location: "Changi Airport, Singapore",
        activities: [
          {
            time: "8:00 AM",
            description: "Arrival: Land at Changi Airport, one of the world's best airports."
          },
          {
            time: "9:00 AM",
            description: "Private transfer to Marina Bay Sands, offering luxury accommodations with stunning city views."
          },
          {
            time: "12:00 PM",
            description: "Lunch: At L'Atelier de Joël Robuchon, a Michelin-starred spot for an exquisite start to your trip."
          },
          {
            time: "14:00 PM",
            description: "Orientation Meeting: Briefing on the week's agenda with a local business consultant."
          },
          {
            time: "19:00 PM",
            description: "Dinner: CUT by Wolfgang Puck for a high-end dining experience, ideal for networking with local business leaders."
          }
        ]
      },
      {
        dayOfWeek: "Day Two",
        date: "May 16, 2024",
        location: "Marina Bay Sands, Singapore",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast."
          },
          {
            time: "9:00 AM",
            description: "Visit to One Raffles Place: Engage with corporate governance at the Singapore Exchange (SGX)."
          },
          {
            time: "12:00 PM",
            description: "Lunch: The National Kitchen by Violet Oon for a taste of Singaporean heritage cuisine."
          },
          {
            time: "14:00 PM",
            description: "Networking: A roundtable discussion with executives from various sectors at the Singapore Institute of Directors (SID)."
          },
          {
            time: "19:00 PM",
            description: "Dinner: Les Amis, known for its French-Asian fusion, providing a sophisticated backdrop for further networking."
          }
        ]
      },
      {
        dayOfWeek: "Day Three",
        date: "May 17, 2024",
        location: "Block71, Singapore",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast."
          },
          {
            time: "9:00 AM",
            description: "Visit to Block71: Explore Singapore's startup ecosystem and tech innovation."
          },
          {
            time: "12:00 PM",
            description: "Lunch: The Coconut Club, where PM Lee Hsien Loong has entertained foreign dignitaries."
          },
          {
            time: "14:00 PM",
            description: "Touring NUS Enterprise: Understand how Singapore's leading university fosters innovation."
          },
          {
            time: "19:00 PM",
            description: "Dinner: The Tippling Club for innovative dining, a great conversation starter among peers."
          }
        ]
      },
      {
        dayOfWeek: "Day Four",
        date: "May 18, 2024",
        location: "Gardens By The Bay",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast."
          },
          {
            time: "9:00 AM",
            description: "Visit to Gardens by the Bay: Learn about sustainable urban development and green practices."
          },
          {
            time: "12:00 PM",
            description: "Lunch: At Gardens by the Bay, discussing sustainable urban development initiatives."
          },
          {
            time: "14:00 PM",
            description: "Workshop/Meeting: With CSR leaders at DBS Bank, discussing sustainability in business."
          },
          {
            time: "19:00 PM",
            description: "Dinner: Candlenut, Singapore's first Michelin-starred Peranakan restaurant, for a cultural dining experience."
          }
        ]
      },
      {
        dayOfWeek: "Day Five",
        date: "May 19, 2024",
        location: "Singapore Management University",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast and Seminar at Singapore Management University (SMU), Focus on business strategies in Asia."
          },
          {
            time: "12:00 PM",
            description: "Lunch: Majestic Restaurant, known for its Cantonese cuisine, in a historic setting."
          },
          {
            time: "14:00 PM",
            description: "Networking Event: Attend or organize a networking session with key corporate figures at the SIF (Singapore International Foundation) or through a business club."
          },
          {
            time: "19:00 PM",
            description: "Dinner: Jaan by Kirk Westaway, offering a modern British menu with panoramic views, perfect for a reflective evening."
          }
        ]
      },
      {
        dayOfWeek: "Day Six",
        date: "May 20, 2024",
        location: "Changi Airport",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast & Visit to the Asian Civilisations Museum: Reflect on cultural influences on business in Asia."
          },
          {
            time: "12:00 PM",
            description: "Lunch: A light, strategic lunch before departure."
          },
          {
            time: "16:00 PM",
            description: "Departure: From Changi Airport."
          }
        ]
      }
    ]
  };
</script>

<TravelItinerary {...itineraryData} /> 