import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  // This would typically fetch data from your database based on the slug
  const itineraryData = {
    title: "Healing Horizons Retreat - Franschhoek, South Africa",
    startDate: "March 15, 2024",
    endDate: "March 20, 2024",
    days: [
      {
        dayOfWeek: "Day One",
        date: "March 15, 2024",
        location: "Cape Town & Franschhoek",
        activities: [
          {
            time: "8:00 AM",
            description: "Arrival: Fly into Cape Town International Airport (CPT). Private, accessible shuttle (1-hour drive) to Franschhoek."
          },
          {
            time: "9:00 AM",
            description: "Morning: Check-in and light welcome breakfast at the hotel (porridge, fruit, rooibos tea—gentle on sensitive stomachs)."
          },
          {
            time: "12:00 PM",
            description: "Lunch: At Protea Hotel by Marriott Franschhoek"
          },
          {
            time: "14:00 PM",
            description: "Afternoon Activity: Orientation in the hotel's accessible conference room, followed by a short, guided stroll through the hotel gardens. Introduction to a local counselor for group bonding and intention-setting."
          },
          {
            time: "19:00 PM",
            description: "Evening: Dinner at the hotel restaurant, The Olive Tree, offering farm-to-table South African cuisine (e.g., grilled fish, vegetable stew, malva pudding). Customizable for dietary needs."
          }
        ]
      },
      {
        dayOfWeek: "Day Two",
        date: "March 16, 2024",
        location: "Mont Rochelle Nature Reserve",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast: Hotel buffet with accessible stations (boiled eggs, yogurt, fresh fruit)."
          },
          {
            time: "9:00 AM",
            description: "Morning Activity: Accessible shuttle to Mont Rochelle Nature Reserve. A short, paved trail offers stunning mountain views and fresh air. Wheelchair-friendly picnic spots available for reflection or quiet journaling."
          },
          {
            time: "12:00 PM",
            description: "Lunch: Picnic at the reserve, with portable seating and shade."
          },
          {
            time: "14:00 PM",
            description: "Afternoon Activity: Visit a nearby vineyard, La Motte Estate, with an accessible tasting room. Non-alcoholic juice tastings and a sensory experience of the vines for children and those avoiding alcohol."
          },
          {
            time: "19:00 PM",
            description: "Evening: Dinner at Foliage, a cozy, accessible eatery (e.g., bobotie, roasted veggies, melktert)."
          }
        ]
      },
      {
        dayOfWeek: "Day Three",
        date: "March 17, 2024",
        location: "Franschhoek Village",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast: Hotel buffet with oatmeal and pastries."
          },
          {
            time: "9:00 AM",
            description: "Morning Activity: Workshop at the hotel with a local art therapist. Adaptive activities like painting, clay molding, or collage, tailored to all abilities (tactile options for visually impaired participants)."
          },
          {
            time: "12:00 PM",
            description: "Lunch: At Café Franschhoek, an accessible café (e.g., quiche, salad, carrot cake)."
          },
          {
            time: "14:00 PM",
            description: "Afternoon Activity: Music therapy session in the hotel garden with a local musician. Participants can listen, play simple instruments (e.g., marimbas, shakers), or share meaningful songs."
          },
          {
            time: "19:00 PM",
            description: "Evening: Dinner at Le Bon Vivant, offering refined yet accessible dining (e.g., lamb shank, sweet potato mash, panna cotta)."
          }
        ]
      },
      {
        dayOfWeek: "Day Four",
        date: "March 18, 2024",
        location: "Franschhoek Village",
        activities: [
          {
            time: "6:00 AM",
            description: "Morning: Hotel buffet with soft-food options (e.g., scrambled eggs, bananas)."
          },
          {
            time: "7:00 AM",
            description: "Morning Activity: Guided tour of Franschhoek Village in accessible vans. Visit the Huguenot Memorial Museum (wheelchair-friendly) to explore the town's history of resilience, followed by a stop at the local market for crafts."
          },
          {
            time: "12:00 PM",
            description: "Lunch: At The French Connection, a relaxed bistro"
          },
          {
            time: "14:00 PM",
            description: "Afternoon Activity: Group reflection circle in the hotel's courtyard, facilitated by a counselor. Optional sharing of personal stories to deepen bonds."
          },
          {
            time: "19:00 PM",
            description: "Evening: Dinner at Reuben's, an accessible fine-dining spot (e.g., Cape Malay curry, roasted vegetables, chocolate fondant)."
          }
        ]
      },
      {
        dayOfWeek: "Day Five",
        date: "March 19, 2024",
        location: "Camelot Spa",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast: Hotel buffet with warm options (e.g., mieliepap, fruit smoothies)."
          },
          {
            time: "9:00 AM",
            description: "Morning Activity: Spa day at Camelot Spa (on-site at the hotel), offering accessible facilities. Gentle massages, aromatherapy, or warm towel treatments for those able to participate; quiet relaxation zones for others."
          },
          {
            time: "12:00 PM",
            description: "Lunch: Poolside at the hotel."
          },
          {
            time: "14:00 PM",
            description: "Afternoon Activity: Group activity: Planting a small indigenous tree in the hotel garden as a symbol of hope and renewal, with staff assistance for mobility needs."
          },
          {
            time: "19:00 PM",
            description: "Evening: Farewell dinner at La Petite Colombe, a celebrated accessible restaurant (e.g., beef fillet, creamy polenta, peppermint crisp tart). A fire pit gathering follows for storytelling or quiet reflection."
          }
        ]
      },
      {
        dayOfWeek: "Day Six",
        date: "March 20, 2024",
        location: "Departure Day",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast: Final hotel buffet with time for packing and farewells."
          },
          {
            time: "9:00 AM",
            description: "Morning Activity: Optional visit to Franschhoek Motor Museum (accessible) for a light outing, or free time to relax."
          },
          {
            time: "13:00 PM",
            description: "Departure: Flights home or onward travel, with a keepsake journal provided. Accessible shuttle to CPT airport."
          }
        ]
      }
    ]
  };

  return {
    itinerary: itineraryData
  };
}; 