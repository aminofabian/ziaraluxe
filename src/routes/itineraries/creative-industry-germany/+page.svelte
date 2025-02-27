<script lang="ts">
  import TravelItinerary from '$lib/components/TravelItinerary.svelte';
  
  const itineraryData = {
    title: "Creative Industry Exploration Tour - Germany",
    startDate: "April 15, 2024",
    endDate: "April 20, 2024",
    days: [
      {
        dayOfWeek: "Day One",
        date: "April 15, 2024",
        location: "Berlin Brandenburg Airport (BER)",
        activities: [
          {
            time: "8:00 AM",
            description: "Arrival: Arrive at Berlin Brandenburg Airport (BER). Private transfer to hotel."
          },
          {
            time: "9:00 AM",
            description: "Morning: Settle in with a welcome breakfast at the hotel (fresh breads, smoked salmon, coffee/tea)."
          },
          {
            time: "12:00 PM",
            description: "Lunch: At 25hours Hotel Bikini Berlin"
          },
          {
            time: "14:00 PM",
            description: "Afternoon Activity: Visit the Pergamon Museum on Museum Island, exploring ancient art and architecture that inspire modern design. Follow with a walk along the nearby East Side Gallery, a preserved section of the Berlin Wall covered in murals—perfect for artists and content creators."
          },
          {
            time: "19:00 PM",
            description: "Evening: Welcome dinner at Katz Orange, a cozy spot with a creative twist on German cuisine."
          }
        ]
      },
      {
        dayOfWeek: "Day Two",
        date: "April 16, 2024",
        location: "Filmpark Babelsberg",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast: Hotel buffet with muesli, pretzels, and fresh juices."
          },
          {
            time: "9:00 AM",
            description: "Morning Activity: Day trip to Potsdam (45-minute drive). Tour Filmpark Babelsberg, Germany's oldest large-scale film studio, with sets from classics like Metropolis and modern blockbusters. Optional workshop: 'Cinematic Lighting Techniques' with a local cinematographer."
          },
          {
            time: "12:00 PM",
            description: "Lunch: At Restaurant Walhalla in Potsdam."
          },
          {
            time: "14:00 PM",
            description: "Afternoon Activity: Visit Sanssouci Palace for a dose of cinematic inspiration from its rococo architecture and gardens—ideal for filming or photography."
          },
          {
            time: "19:00 PM",
            description: "Evening: Return to Berlin. Dinner at Rutz, a Michelin-starred restaurant."
          }
        ]
      },
      {
        dayOfWeek: "Day Three",
        date: "April 17, 2024",
        location: "Bauhaus Archive",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast: Hotel buffet with artisan cheeses and Berliner doughnuts."
          },
          {
            time: "9:00 AM",
            description: "Morning Activity: Visit the Bauhaus Archive, celebrating Germany's iconic design movement. Explore exhibits on furniture, typography, and architecture."
          },
          {
            time: "12:00 PM",
            description: "Lunch: At Neni Berlin (inside 25hours Hotel)"
          },
          {
            time: "14:00 PM",
            description: "Afternoon Activity: Tour of Kraftwerk Berlin, a former power plant turned creative hub hosting design studios and exhibitions. Meet with local designers for a Q&A session."
          },
          {
            time: "19:00 PM",
            description: "Evening: Dinner at Zur Letzten Instanz, Berlin's oldest restaurant."
          }
        ]
      },
      {
        dayOfWeek: "Day Four",
        date: "April 18, 2024",
        location: "König Galerie",
        activities: [
          {
            time: "6:00 AM",
            description: "Morning: Breakfast."
          },
          {
            time: "7:00 AM",
            description: "Morning Activity: Explore König Galerie in Kreuzberg, showcasing avant-garde art with fashion crossover appeal. Then, visit Berlin's Mitte district for a curated tour of indie boutiques and concept stores (e.g., The Store, Voo Store)."
          },
          {
            time: "12:00 PM",
            description: "Lunch: At Doyum Grillhaus, a Turkish-German fusion spot."
          },
          {
            time: "14:00 PM",
            description: "Afternoon Activity: Private workshop with a Berlin-based fashion designer (e.g., sustainable textile dyeing or upcycling techniques), tailored for fashion executives and designers."
          },
          {
            time: "19:00 PM",
            description: "Evening: Dinner at Facil, a Michelin-starred gem."
          }
        ]
      },
      {
        dayOfWeek: "Day Five",
        date: "April 19, 2024",
        location: "Pinakothek der Moderne",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning Activity: High-speed train to Munich (approx. 5.5 hours round-trip). Visit the Pinakothek der Moderne, a museum of modern art, design, and architecture, showcasing works by Klimt and German Expressionists."
          },
          {
            time: "12:00 PM",
            description: "Lunch: At Augustiner-Keller, a historic beer hall."
          },
          {
            time: "14:00 PM",
            description: "Afternoon Activity: Tour BMW Welt, a futuristic showroom blending design and technology—ideal for designers and filmmakers. Free time in Marienplatz for sketching or content creation."
          },
          {
            time: "19:00 PM",
            description: "Evening: Return to Berlin. Late dinner at Prater Garten, Berlin's oldest beer garden."
          }
        ]
      },
      {
        dayOfWeek: "Day Six",
        date: "April 20, 2024",
        location: "Departure Day",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Optional visit to Flea Market at Mauerpark for vintage finds, art, and design books."
          },
          {
            time: "13:00 PM",
            description: "Lunch: At 25hours Hotel Bikini Berlin"
          },
          {
            time: "18:00 PM",
            description: "Departure: Depart from Berlin Brandenburg Airport (BER)."
          }
        ]
      }
    ]
  };
</script>

<TravelItinerary {...itineraryData} /> 