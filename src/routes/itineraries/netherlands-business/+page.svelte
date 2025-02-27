<script lang="ts">
  import TravelItinerary from '$lib/components/TravelItinerary.svelte';
  
  const itineraryData = {
    title: "Netherlands Business Travel - Craft Beer Industry",
    startDate: "July 1, 2024",
    endDate: "July 6, 2024",
    days: [
      {
        dayOfWeek: "Day One",
        date: "July 1, 2024",
        location: "Amsterdam, Netherlands",
        activities: [
          {
            time: "8:00 AM",
            description: "Arrival: Touch Down at Amsterdam Schiphol Airport."
          },
          {
            time: "9:00 AM",
            description: "Private transfer to your hotel, Hotel Estherea."
          },
          {
            time: "12:00 PM",
            description: "Lunch: Traditional Dutch lunch at De Kas."
          },
          {
            time: "14:00 PM",
            description: "Visit Brouwerij 't IJ: Tour this iconic brewery under the De Gooyer windmill. Sample their beers and learn about their brewing process and history."
          },
          {
            time: "19:00 PM",
            description: "Dinner: Dine at Proeflokaal Arendsnest, a bar specializing in Dutch craft beers, where you can network informally with local beer enthusiasts and possibly investors."
          }
        ]
      },
      {
        dayOfWeek: "Day Two",
        date: "July 2, 2024",
        location: "Haarlem, Netherlands",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast & Short train trip to Haarlem"
          },
          {
            time: "9:00 AM",
            description: "Take a tour of Jopen Brewery located in the historic Jopenkerk, learning about their revival of old Dutch beer recipes."
          },
          {
            time: "12:00 PM",
            description: "Lunch: Brasserie Buitengewoon for a creative Dutch lunch."
          },
          {
            time: "14:00 PM",
            description: "Attend a lunch meeting with local brewery investors at Jopenkerk, organized through the Netherlands Investment Network."
          },
          {
            time: "19:00 PM",
            description: "Return to Amsterdam & Dinner: Restaurant de Struisvogel for a fine dining experience with Dutch cuisine, paired with local beers."
          }
        ]
      },
      {
        dayOfWeek: "Day Three",
        date: "July 3, 2024",
        location: "Utrecht, Netherlands",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast & Train to Utrecht."
          },
          {
            time: "9:00 AM",
            description: "Visit De Leckere: A microbrewery known for its unique, award-winning beers. Participate in a brewing workshop or tasting session."
          },
          {
            time: "12:00 PM",
            description: "Lunch: Have lunch at WT Urban Kitchen"
          },
          {
            time: "14:00 PM",
            description: "Explore Utrecht: A guided walking tour to appreciate Utrecht's culture and history, possibly visiting more local beer spots."
          },
          {
            time: "19:00 PM",
            description: "Dinner: Stan&Co - A modern, urban food hall in Utrecht where you can sample various Dutch cuisines. Enjoy a selection of local beers."
          }
        ]
      },
      {
        dayOfWeek: "Day Four",
        date: "July 4, 2024",
        location: "Rotterdam, Netherlands",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast & Train to Rotterdam."
          },
          {
            time: "9:00 AM",
            description: "Kaapse Brouwers: Visit this innovative brewery in the Fenix Food Factory. Learn about their business model and craft beer scene in Rotterdam."
          },
          {
            time: "12:00 PM",
            description: "Lunch: Fenix Food Factory - Sample foods from various stalls, all using local products."
          },
          {
            time: "14:00 PM",
            description: "Networking Event: Attend an afternoon session at the brewery, connecting with local investors or brewery owners."
          },
          {
            time: "19:00 PM",
            description: "Return to Amsterdam & Dinner: The Seafood Bar for a selection of Dutch seafood paired with craft beers."
          }
        ]
      },
      {
        dayOfWeek: "Day Five",
        date: "July 5, 2024",
        location: "Amsterdam Noord, Netherlands",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast & Visit Oedipus Brewing In Amsterdam-Noord, explore their creative brewing process and sustainability practices."
          },
          {
            time: "12:00 PM",
            description: "Lunch: Pllek, known for its industrial-chic vibe and great food, offering a chance for more informal networking."
          },
          {
            time: "14:00 PM",
            description: "Brewery Investor Meetup: Organized through a local business or investment platform, focusing on discussing investment opportunities in the Dutch beer industry."
          },
          {
            time: "19:00 PM",
            description: "Dinner: At Brouwerij Troost, where you can enjoy dinner with their own brewed beers, offering an opportunity for further networking."
          }
        ]
      },
      {
        dayOfWeek: "Day Six",
        date: "July 6, 2024",
        location: "Amsterdam, Netherlands",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast & Visit Brouwerij De Prael: A brewery with a social mission, employing people with disabilities, offering insights into social entrepreneurship in brewing."
          },
          {
            time: "12:00 PM",
            description: "Lunch: At De Prael. Try their beers paired with a light lunch."
          },
          {
            time: "14:00 PM",
            description: "Afternoon: Last-minute shopping or visiting any missed spots & site seeing."
          },
          {
            time: "18:00 PM",
            description: "Transfer to Airport: Departure from Schiphol Airport."
          }
        ]
      }
    ]
  };
</script>

<TravelItinerary {...itineraryData} /> 