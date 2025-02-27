<script lang="ts">
  import TravelItinerary from '$lib/components/TravelItinerary.svelte';
  
  const itineraryData = {
    title: "Six Days Conscious Travelers' Tour - Kenya",
    startDate: "June 1, 2024",
    endDate: "June 6, 2024",
    days: [
      {
        dayOfWeek: "Day One",
        date: "June 1, 2024",
        location: "Nairobi, Kenya",
        activities: [
          {
            time: "8:00 AM",
            description: "Arrival: Touch down at Jomo Kenyatta International Airport, Nairobi"
          },
          {
            time: "9:00 AM",
            description: "Eco-friendly transfer to The Emakoko."
          },
          {
            time: "12:00 PM",
            description: "Lunch: At The Emakoko eco-lodge overlooking Nairobi National Park"
          },
          {
            time: "14:00 PM",
            description: "CSR Activity: Visit The David Sheldrick Wildlife Trust to learn about elephant conservation and adopt an orphaned elephant as part of your CSR initiative."
          },
          {
            time: "19:00 PM",
            description: "Dinner: Welcome dinner at Ole Sereni, featuring organic, locally sourced ingredients."
          }
        ]
      },
      {
        dayOfWeek: "Day Two",
        date: "June 2, 2024",
        location: "Kibera Slum, Nairobi",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast."
          },
          {
            time: "9:00 AM",
            description: "Visit Kibera, one of Africa's largest informal settlements, and participate in a community-led project with Kibera Hamlets, focusing on education, clean water, or sustainable livelihoods."
          },
          {
            time: "12:00 PM",
            description: "Lunch: Enjoy a meal prepared by local women's groups, supporting their economic empowerment."
          },
          {
            time: "14:00 PM",
            description: "Afternoon: Explore the Nairobi National Museum and Karen Blixen Museum to learn about Kenya's history and culture. CSR Activity: Donate books, school supplies, or funds to a local school in Kibera."
          },
          {
            time: "19:00 PM",
            description: "Dinner: Farm-to-table dining experience at The Talisman restaurant."
          }
        ]
      },
      {
        dayOfWeek: "Day Three",
        date: "June 3, 2024",
        location: "Maasai Mara Game Reserve",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast."
          },
          {
            time: "9:00 AM",
            description: "Fly to the Maasai Mara, a world-renowned wildlife conservancy. Transfer to Basecamp Explorer Mara (eco-friendly camp supporting local Maasai communities)."
          },
          {
            time: "12:00 PM",
            description: "Lunch: Organic, locally sourced meal at Basecamp Explorer Mara."
          },
          {
            time: "14:00 PM",
            description: "Visit Maasai village to learn about their culture and participate in a beadwork workshop, supporting women's economic empowerment. CSR Activity: Contribute to a community-led conservation project, such as tree planting or wildlife protection initiatives."
          },
          {
            time: "19:00 PM",
            description: "Evening: Sundowner and storytelling session with Maasai elders. Dinner: Traditional Maasai-inspired meal at the camp."
          }
        ]
      },
      {
        dayOfWeek: "Day Four",
        date: "June 4, 2024",
        location: "Maasai Village, Mara",
        activities: [
          {
            time: "6:00 AM",
            description: "Morning: Breakfast."
          },
          {
            time: "7:00 AM",
            description: "Guided game drive in the Maasai Mara National Reserve, focusing on sustainable tourism practices."
          },
          {
            time: "12:00 PM",
            description: "Lunch: Picnic in the bush with eco-friendly packaging."
          },
          {
            time: "14:00 PM",
            description: "Afternoon: Visit the Mara Elephant Project to learn about elephant conservation and anti-poaching efforts. CSR Activity: Sponsor a wildlife tracker or contribute to anti-poaching initiatives."
          },
          {
            time: "19:00 PM",
            description: "Evening: Relax at the camp with a bonfire under the stars. Dinner: Organic, locally sourced meal at the camp."
          }
        ]
      },
      {
        dayOfWeek: "Day Five",
        date: "June 5, 2024",
        location: "Loldia House, Naivasha",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast and Early flight to Lake Naivasha, a freshwater lake known for its biodiversity. Transfer to Loldia House - a sustainable farmhouse on the shores of Lake Naivasha."
          },
          {
            time: "12:00 PM",
            description: "Lunch: Farm-to-table meal using ingredients from the Loldia House organic garden."
          },
          {
            time: "14:00 PM",
            description: "Afternoon: Participate in a tree-planting initiative with local schools or community groups to combat deforestation. CSR Activity: Donate to a local environmental conservation project or sponsor a student's education."
          },
          {
            time: "19:00 PM",
            description: "Evening: Boat ride on Lake Naivasha to spot hippos and birdlife. Dinner: Organic, locally sourced meal"
          }
        ]
      },
      {
        dayOfWeek: "Day Six",
        date: "June 6, 2024",
        location: "Departure Day",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast and Return flight to Nairobi. Visit: Giraffe Centre or Nairobi National Park for a final wildlife experience."
          },
          {
            time: "13:00 PM",
            description: "Lunch: Farewell lunch at Cultiva, a farm-to-table restaurant supporting local farmers. CSR Activity: Reflect on the impact of your journey and discuss ways to continue supporting the initiatives you've engaged with."
          },
          {
            time: "18:00 PM",
            description: "Departure: Depart for Jomo Kenyatta International Airport for your onward flight."
          }
        ]
      }
    ]
  };
</script>

<TravelItinerary {...itineraryData} /> 