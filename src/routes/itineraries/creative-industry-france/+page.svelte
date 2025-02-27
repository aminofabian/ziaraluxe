<script lang="ts">
  import TravelItinerary from '$lib/components/TravelItinerary.svelte';
  
  const itineraryData = {
    title: "Creative Industry Exploration Tour - France",
    startDate: "May 1, 2024",
    endDate: "May 6, 2024",
    days: [
      {
        dayOfWeek: "Day One",
        date: "May 1, 2024",
        location: "Paris Charles de Gaulle Airport (CDG)",
        activities: [
          {
            time: "8:00 AM",
            description: "Arrival: Arrive at Paris Charles de Gaulle Airport (CDG). Private transfer to hotel."
          },
          {
            time: "9:00 AM",
            description: "Morning: Settle in and enjoy a light welcome breakfast at the hotel (croissants, fresh fruit, coffee/tea)."
          },
          {
            time: "12:00 PM",
            description: "Lunch: At Hôtel de Nell (9th Arrondissement)."
          },
          {
            time: "14:00 PM",
            description: "Afternoon Activity: Visit the Louvre Museum with a private guide focusing on masterpieces that inspired modern art and design (e.g., Mona Lisa, Venus de Milo). Follow with a stroll through the Tuileries Garden for sketching or photography inspiration."
          },
          {
            time: "19:00 PM",
            description: "Evening: Welcome dinner at Le Consulat in Montmartre, a historic café once frequented by Picasso and Van Gogh. Menu: French onion soup, coq au vin, crème brûlée. Creative Takeaway: Montmartre's bohemian vibe offers content creators and filmmakers a glimpse into Paris's artistic past."
          }
        ]
      },
      {
        dayOfWeek: "Day Two",
        date: "May 2, 2024",
        location: "Hotel De Nell",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast; Hotel buffet with artisanal pastries, cheeses, and fresh juices."
          },
          {
            time: "9:00 AM",
            description: "Morning Activity: Guided tour of Cinémathèque Française, a museum dedicated to cinema history, showcasing props, costumes, and screenings of French New Wave classics (e.g., Truffaut, Godard). Optional workshop: Storyboarding techniques with a local filmmaker."
          },
          {
            time: "12:00 PM",
            description: "Lunch: At Café de Flore, a Saint-Germain-des-Prés haunt of existentialists and filmmakers."
          },
          {
            time: "14:00 PM",
            description: "Afternoon Activity: Walking tour of iconic film locations in Paris (e.g., Pont Neuf from Amélie, Canal Saint-Martin from Hôtel du Nord). Bring cameras for content creation."
          },
          {
            time: "19:00 PM",
            description: "Evening: Dinner at Le Relais de l'Entrecôte – Famous for steak frites and a secret sauce. Post-dinner drinks at a nearby jazz bar for networking. Creative Takeaway: Filmmakers gain insight into French cinema's storytelling legacy, while content creators capture cinematic Parisian aesthetics."
          }
        ]
      },
      {
        dayOfWeek: "Day Three",
        date: "May 3, 2024",
        location: "Centre Pompidou",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Breakfast; Hotel buffet with seasonal specialties."
          },
          {
            time: "9:00 AM",
            description: "Morning Activity: Visit the Centre Pompidou, home to Europe's largest modern art collection and innovative architecture. Focus on design exhibits (e.g., Bauhaus, contemporary installations). Optional: Sketching session on the rooftop with skyline views."
          },
          {
            time: "12:00 PM",
            description: "Lunch: At Le Georges (rooftop of Centre Pompidou) – Panoramic views"
          },
          {
            time: "14:00 PM",
            description: "Afternoon Activity: Tour of Les Docks – Cité de la Mode et du Design, exploring cutting-edge fashion and design studios. Workshop: 'Design Thinking' with a Parisian designer."
          },
          {
            time: "19:00 PM",
            description: "Evening: Dinner at Septime, a Michelin-starred spot blending rustic and modern cuisine."
          }
        ]
      },
      {
        dayOfWeek: "Day Four",
        date: "May 4, 2024",
        location: "Musée Yves Saint Laurent Paris",
        activities: [
          {
            time: "6:00 AM",
            description: "Morning: Breakfast."
          },
          {
            time: "7:00 AM",
            description: "Morning Activity: Private tour of the Musée Yves Saint Laurent Paris, delving into the legacy of a fashion icon. Follow with a visit to the Golden Triangle (Avenue Montaigne) to observe flagship boutiques of Chanel, Dior, and Louis Vuitton."
          },
          {
            time: "12:00 PM",
            description: "Lunch: At Café Marly, overlooking the Louvre Pyramid."
          },
          {
            time: "14:00 PM",
            description: "Afternoon Activity: Exclusive workshop at a Parisian atelier (e.g., embroidery or fabric dyeing) with a fashion artisan, tailored for fashion executives and designers."
          },
          {
            time: "19:00 PM",
            description: "Evening: Dinner at L'Ambroisie, a 3-Michelin-star restaurant in Place des Vosges."
          }
        ]
      },
      {
        dayOfWeek: "Day Five",
        date: "May 5, 2024",
        location: "Claude Monet's House and Gardens",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning Activity: Private coach to Giverny (1-hour drive from Paris). Tour Claude Monet's House and Gardens, the birthplace of Impressionism. Artists can sketch, filmmakers can shoot, and content creators can capture the vibrant landscapes."
          },
          {
            time: "12:00 PM",
            description: "Lunch: At Le Jardin des Plumes in Giverny – A creative menu featuring duck terrine, cod with herb sauce, and apple tart."
          },
          {
            time: "14:00 PM",
            description: "Afternoon Activity: Return to Paris. Free time to explore local markets (e.g., Marché Bastille) or relax at a café for reflection and brainstorming."
          },
          {
            time: "19:00 PM",
            description: "Evening: Farewell dinner at Le Train Bleu in Gare de Lyon, a Belle Époque masterpiece."
          }
        ]
      },
      {
        dayOfWeek: "Day Six",
        date: "May 6, 2024",
        location: "Departure Day",
        activities: [
          {
            time: "7:00 AM",
            description: "Morning: Optional visit to Librairie Galignani, Paris's oldest English-language bookstore, for art, film, and design books. Private transfer to CDG airport."
          },
          {
            time: "13:00 PM",
            description: "Lunch: At Hotel De Nell & Check-out from Hôtel de Nell."
          },
          {
            time: "18:00 PM",
            description: "Departure: Depart from Paris Charles de Gaulle Airport (CDG)"
          }
        ]
      }
    ]
  };
</script>

<TravelItinerary {...itineraryData} /> 