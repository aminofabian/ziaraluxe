<script lang="ts">
  import TravelItinerary from '$lib/components/TravelItinerary.svelte';
  
  const itineraryData = {
    title: "Agricultural Technology Travel - Egypt & Israel",
    startDate: "August 1, 2024",
    endDate: "August 6, 2024",
    days: [
      {
        dayOfWeek: "Day One",
        date: "August 1, 2024",
        location: "Cairo, Egypt",
        activities: [
          {
            time: "8:00 AM",
            description: "Arrival: Touch Down at Cairo International Airport."
          },
          {
            time: "9:00 AM",
            description: "Private transfer to Four Seasons Hotel, Cairo at Nile Plaza, offering luxurious Nile Views."
          },
          {
            time: "12:00 PM",
            description: "Lunch: Traditional Egypt Cuisine at Zitouni Restaurant."
          },
          {
            time: "14:00 PM",
            description: "Intro Meeting: Briefing with a local expert on Egypt's agriculture tech landscape."
          },
          {
            time: "19:00 PM",
            description: "Dinner: Abou El Sid, known for its authentic Egyptian flavors, an excellent spot for initial networking."
          }
        ]
      },
      {
        dayOfWeek: "Day Two",
        date: "August 2, 2024",
        location: "Desert Research Center, Cairo",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast."
          },
          {
            time: "9:00 AM",
            description: "Visit to the Desert Research Center: Learn about desert agriculture and water management technologies."
          },
          {
            time: "12:00 PM",
            description: "Lunch: Felfela Restaurant, a local favorite for Koshari."
          },
          {
            time: "14:00 PM",
            description: "Networking Event: Attend an organized roundtable with local AgTech startups and investors at a co-working space."
          },
          {
            time: "19:00 PM",
            description: "Dinner: Sequoia, a modern setting by the Nile for discussing potential partnerships."
          }
        ]
      },
      {
        dayOfWeek: "Day Three",
        date: "August 3, 2024",
        location: "Tel Aviv, Israel",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast & Early flight to Tel Aviv."
          },
          {
            time: "9:00 AM",
            description: "Transfer To The Jaffa, a Luxury Collection Hotel, combining luxury with historical charm."
          },
          {
            time: "12:00 PM",
            description: "Lunch: Hakosem, for a taste of Israeli street food."
          },
          {
            time: "14:00 PM",
            description: "Visit to Start-Up Nation Central: Gain insights into Israel's innovation ecosystem with a focus on AgTech."
          },
          {
            time: "19:00 PM",
            description: "Dinner: Manta Ray, enjoy Mediterranean cuisine with a view of the sea, ideal for networking."
          }
        ]
      },
      {
        dayOfWeek: "Day Four",
        date: "August 4, 2024",
        location: "Volcani Center, Israel",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast."
          },
          {
            time: "9:00 AM",
            description: "Visit to Volcani Center: Explore cutting-edge agricultural research, including precision agriculture and robotics."
          },
          {
            time: "12:00 PM",
            description: "Lunch: At Dizengoff Center, offering various dining options for casual discussions."
          },
          {
            time: "14:00 PM",
            description: "Field Visit: To Kibbutz Yizre'el or a similar tech farm, experiencing high-tech agriculture firsthand."
          },
          {
            time: "19:00 PM",
            description: "Networking Dinner: HaSalon, a place for high-level networking with key industry leaders."
          }
        ]
      },
      {
        dayOfWeek: "Day Five",
        date: "August 5, 2024",
        location: "Ben Gurion University, Jerusalem",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast and Drive to Be'er Sheva: Visit to Ben-Gurion University: Learn how they're leading in desert agriculture and water technology."
          },
          {
            time: "12:00 PM",
            description: "Lunch: The Bakery, enjoying local flavors in Be'er Sheva."
          },
          {
            time: "14:00 PM",
            description: "Desert Agriculture Tour: In the Negev, visiting innovative projects like the Arava Research and Development."
          },
          {
            time: "19:00 PM",
            description: "Dinner: North Abraxas, a high-end restaurant for a final networking meal in Tel Aviv."
          }
        ]
      },
      {
        dayOfWeek: "Day Six",
        date: "August 6, 2024",
        location: "Tel Aviv, Israel",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast & Visit to Agritech Israel: If timing aligns with their exhibition schedule, otherwise, a visit to an alternative AgTech hub."
          },
          {
            time: "12:00 PM",
            description: "Lunch: At the Airport: Before departure, enjoy a quick meal at Ben Gurion Airport."
          },
          {
            time: "14:00 PM",
            description: "Departure: Flight back home from Tel Aviv."
          }
        ]
      }
    ]
  };
</script>

<TravelItinerary {...itineraryData} /> 