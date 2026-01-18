const { useState } = React;

// Logo SVG Component
const HearthLogo = () => (
  <svg width="107" height="15" viewBox="0 0 428 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M-5.30481e-06 58.884V-2.38419e-07H7.30799V25.62H37.716V-2.38419e-07H45.024V58.884H37.716V32.34H7.30799V58.884H-5.30481e-06ZM81.6375 58.884V0.0839987H119.101V6.804H88.9455V25.62H114.061V32.34H88.9455V52.164H120.193V58.884H81.6375ZM156.367 58.884H148.807L171.235 0.0839987H179.887L202.231 58.884H194.419L188.203 43.008H162.583L156.367 58.884ZM175.351 8.064L164.767 36.372H186.019L175.351 8.064ZM234.084 0.0839987H256.596C268.272 0.0839987 276.168 7.224 276.168 18.144C276.168 26.292 271.296 32.76 263.652 34.86L276.84 58.884H268.608L256.428 36.288H241.392V58.884H234.084V0.0839987ZM241.392 6.804V29.568H256.008C263.736 29.568 268.692 25.116 268.692 18.144C268.692 11.34 263.736 6.804 256.092 6.804H241.392ZM303.825 6.804V0.0839987H349.269V6.804H330.201V58.884H322.893V6.804H303.825ZM382.266 58.884V-2.38419e-07H389.574V25.62H419.982V-2.38419e-07H427.29V58.884H419.982V32.34H389.574V58.884H382.266Z" fill="currentColor"/>
  </svg>
);

// Material Icon Component  
const MaterialIcon = ({ name, size = "24" }) => (
  <span className="material-icons" style={{ fontSize: `${size}px` }}>{name}</span>
);

function Hearth() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedDates, setSelectedDates] = useState({ start: '2026-02-14', end: '2026-02-21' });
  const [bookmarked, setBookmarked] = useState(new Set([2]));
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const toggleBookmark = (id) => {
    const newBookmarked = new Set(bookmarked);
    if (newBookmarked.has(id)) {
      newBookmarked.delete(id);
    } else {
      newBookmarked.add(id);
    }
    setBookmarked(newBookmarked);
  };

  const userProfiles = {
    1: {
      id: 1,
      name: "Sarah Chen",
      avatar: "https://i.pravatar.cc/150?img=5",
      location: "St Ives, Cornwall",
      joinedDate: "March 2024",
      bio: "Love coastal living and always looking for city breaks. Design enthusiast and avid cook.",
      email: "sarah.chen@email.com",
      phone: "+44 7700 900123",
      swapHistory: [
        { property: "London Flat", owner: "David Kim", date: "December 2025", location: "Shoreditch" },
        { property: "Paris Apartment", owner: "Marie Laurent", date: "September 2025", location: "Le Marais" }
      ],
      wishlist: ["Edinburgh", "Copenhagen", "Lake District", "Cotswolds"]
    },
    2: {
      id: 2,
      name: "Marcus Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=12",
      location: "Edinburgh, Scotland",
      joinedDate: "January 2024",
      bio: "Architect who loves exploring period properties. Always up for a countryside escape.",
      email: "marcus.r@email.com",
      phone: "+44 7700 900456",
      swapHistory: [
        { property: "Cotswold Cottage", owner: "You", date: "November 2025", location: "Chipping Norton" },
        { property: "Brighton House", owner: "Emma Thompson", date: "August 2025", location: "Brighton" }
      ],
      wishlist: ["Cornwall", "Bath", "York", "Scottish Highlands"]
    },
    3: {
      id: 3,
      name: "Emma Thompson",
      avatar: "https://i.pravatar.cc/150?img=9",
      location: "Windermere, Cumbria",
      joinedDate: "May 2024",
      bio: "Nature lover and keen hiker. Looking for cultural city experiences to balance mountain life.",
      email: "emma.t@email.com",
      phone: "+44 7700 900789",
      swapHistory: [
        { property: "Barcelona Loft", owner: "Antonio Garcia", date: "July 2025", location: "Barcelona" }
      ],
      wishlist: ["London", "Manchester", "Glasgow", "Bristol"]
    },
    4: {
      id: 4,
      name: "David Kim",
      avatar: "https://i.pravatar.cc/150?img=15",
      location: "Shoreditch, London",
      joinedDate: "February 2024",
      bio: "Tech professional who loves art galleries and coffee culture. Always seeking peaceful countryside retreats.",
      email: "david.kim@email.com",
      phone: "+44 7700 900321",
      swapHistory: [
        { property: "Cornish Beach House", owner: "Sarah Chen", date: "June 2025", location: "St Ives" },
        { property: "Devon Farmhouse", owner: "Oliver Green", date: "April 2025", location: "Devon" }
      ],
      wishlist: ["Peak District", "Norfolk", "Suffolk Coast", "Wales"]
    }
  };

  const myProperty = {
    id: 0,
    name: "Cotswold Cottage",
    location: "Chipping Norton, Oxfordshire",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800"
    ],
    wifi: "CottageLiving2024",
    rules: ["No shoes indoors", "Eco dishwasher mode", "Feed neighbor's cat"],
    bedrooms: 3,
    bathrooms: 2,
    sqFootage: 1450,
    amenities: ["Garden", "Wood burner", "Parking", "Kitchen", "WiFi", "Washer/Dryer", "Workspace", "BBQ"],
    essentials: {
      parking: "2 spaces on driveway",
      heating: "Central heating + wood burner",
      kitchen: "Fully equipped with Aga",
      internet: "Fiber broadband (100Mbps)",
      bedConfiguration: "1 King, 1 Queen, 1 Twin",
      bathrooms: "1 ensuite, 1 family bathroom",
      outdoorSpace: "Walled garden with patio"
    },
    fullDescription: "Charming 18th-century cottage with exposed beams and a beautiful walled garden. Perfect for a peaceful countryside escape. Recently renovated while maintaining original character.",
    reviews: [
      {
        name: "Emma Thompson",
        avatar: "https://i.pravatar.cc/150?img=9",
        date: "November 2025",
        rating: 5,
        comment: "Absolutely magical stay! The cottage is even more beautiful in person. The garden was perfect for morning coffee and the wood burner made cozy evenings. Chipping Norton has lovely independent shops and great pubs.",
        helpful: 12
      },
      {
        name: "Marcus Rodriguez",
        avatar: "https://i.pravatar.cc/150?img=12",
        date: "September 2025",
        rating: 5,
        comment: "Perfect Cotswolds retreat. The house is beautifully maintained with thoughtful touches everywhere. Great base for exploring the area - Soho Farmhouse is 10 minutes away! The welcome hamper was a lovely surprise.",
        helpful: 8
      },
      {
        name: "David Kim",
        avatar: "https://i.pravatar.cc/150?img=15",
        date: "July 2025",
        rating: 5,
        comment: "Stunning property in a perfect location. The Aga was a highlight (instructions were super clear!). Walked to several nearby villages. The hosts left detailed recommendations that were spot on.",
        helpful: 15
      }
    ],
    neighborhood: {
      description: "Chipping Norton is a historic market town in the Cotswolds, known for its beautiful honey-colored stone buildings and vibrant community. The town offers independent shops, excellent restaurants, and is surrounded by stunning countryside.",
      walkScore: 75,
      nearby: [
        { name: "Town Centre", distance: "8 min walk", type: "shopping" },
        { name: "Co-op Supermarket", distance: "5 min walk", type: "grocery" },
        { name: "The Fox Inn", distance: "10 min walk", type: "dining" },
        { name: "Chipping Norton Theatre", distance: "12 min walk", type: "culture" }
      ],
      thingsToDo: [
        { name: "Blenheim Palace", distance: "6 miles", description: "Winston Churchill's birthplace, stunning palace and gardens" },
        { name: "Soho Farmhouse", distance: "4 miles", description: "Exclusive country retreat with spa and restaurants" },
        { name: "Daylesford Organic Farm", distance: "5 miles", description: "Farm shop, cafe, and beautiful grounds" },
        { name: "The Rollright Stones", distance: "3 miles", description: "Ancient stone circle older than Stonehenge" },
        { name: "Cotswold Wildlife Park", distance: "8 miles", description: "Beautiful zoo and gardens" }
      ]
    },
    mapCoordinates: {
      lat: 51.9426,
      lng: -1.5483
    }
  };

  const allProperties = [
    {
      id: 1,
      userId: 1,
      owner: "Sarah Chen",
      property: "Cornish Beach House",
      location: "St Ives, Cornwall",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      matchScore: 95,
      overlap: "14–21 February",
      mutualFriends: 2,
      description: "Light-filled coastal retreat with direct beach access",
      bedrooms: 4,
      amenities: ["Sea views", "Beach access", "Terrace", "BBQ"],
      wifi: "CoastalLife2024",
      rules: ["Rinse sandy feet outside", "Close windows when out", "No parties"],
      fullDescription: "Stunning beachfront property with panoramic sea views. Wake up to the sound of waves and spend your days on the golden sands of Porthmeor Beach. The house features floor-to-ceiling windows, a large terrace perfect for sunset drinks, and a fully equipped kitchen."
    },
    {
      id: 2,
      userId: 2,
      owner: "Marcus Rodriguez",
      property: "Edinburgh Townhouse",
      location: "New Town, Edinburgh",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
      matchScore: 88,
      overlap: "17–21 February",
      mutualFriends: 1,
      description: "Georgian elegance in the heart of New Town",
      bedrooms: 3,
      amenities: ["Original features", "City centre", "Parking", "Office space"],
      wifi: "EdinburghStays",
      rules: ["Respect neighbours - quiet after 10pm", "No smoking", "Shoes off upstairs"],
      fullDescription: "Beautifully restored Georgian townhouse with original cornicing, sash windows, and working shutters. Located on a prestigious crescent, you're a 10-minute walk from Princes Street and surrounded by excellent restaurants and cafes."
    },
    {
      id: 3,
      userId: 3,
      owner: "Emma Thompson",
      property: "Lake District Cabin",
      location: "Windermere, Cumbria",
      image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800",
      matchScore: 0,
      available: "1–15 March",
      mutualFriends: 2,
      description: "Mountain views and woodland walks",
      bedrooms: 2,
      amenities: ["Mountain views", "Wood burner", "Hot tub", "Hiking trails"],
      wifi: "LakesRetreat",
      rules: ["Wood burner instructions in folder", "Hot tub cover when not in use", "Boots in porch"],
      fullDescription: "Secluded cabin nestled in ancient woodland with breathtaking views of the fells. The perfect base for hiking, with trails starting from the door. After a day exploring, relax in the wood-fired hot tub under the stars."
    },
    {
      id: 4,
      userId: 4,
      owner: "David Kim",
      property: "Shoreditch Loft",
      location: "Shoreditch, London",
      image: "https://images.unsplash.com/photo-1502672260066-6bc51cb65ad4?w=800",
      matchScore: 0,
      available: "28 February–7 March",
      mutualFriends: 1,
      description: "Industrial chic in creative East London",
      bedrooms: 2,
      amenities: ["Exposed brick", "Open plan", "Roof terrace", "Workspace"],
      wifi: "ShoreditchLoft24",
      rules: ["Recycle properly", "Water plants weekly", "Lock roof terrace door"],
      fullDescription: "Converted warehouse loft with soaring ceilings and original industrial features. Located in the heart of Shoreditch's vibrant art scene, surrounded by galleries, independent shops, and some of London's best restaurants and nightlife."
    },
    {
      id: 5,
      userId: 1,
      owner: "Sarah Chen",
      property: "Brighton Marina Apartment",
      location: "Brighton, East Sussex",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      matchScore: 0,
      available: "10–20 March",
      mutualFriends: 2,
      description: "Modern apartment with marina views",
      bedrooms: 2,
      amenities: ["Marina views", "Balcony", "Parking", "Gym access"],
      wifi: "BrightonMarina",
      rules: ["Secure balcony door", "Parking pass in drawer", "Guest passes for gym"],
      fullDescription: "Contemporary apartment overlooking Brighton Marina with floor-to-ceiling windows and a private balcony. Walking distance to the vibrant seafront, The Lanes, and endless independent shops and eateries."
    },
    {
      id: 6,
      userId: 2,
      owner: "Marcus Rodriguez",
      property: "Bath Georgian House",
      location: "Bath, Somerset",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
      matchScore: 0,
      available: "5–15 March",
      mutualFriends: 1,
      description: "Grade II listed townhouse near Roman Baths",
      bedrooms: 4,
      amenities: ["Period features", "Garden", "City views", "Walking distance to centre"],
      wifi: "BathHouse24",
      rules: ["Heritage property - take care", "Garden gate must stay closed", "Alarm code in welcome pack"],
      fullDescription: "Stunning Grade II listed Georgian house with original features throughout. Located in a prestigious area with beautiful views over the city. Short walk to the Roman Baths, Thermae Spa, and excellent restaurants."
    },
    {
      id: 7,
      userId: 3,
      owner: "Emma Thompson",
      property: "Peak District Farmhouse",
      location: "Bakewell, Derbyshire",
      image: "https://images.unsplash.com/photo-1505916349660-8d91a99c3e23?w=800",
      matchScore: 0,
      available: "20–30 March",
      mutualFriends: 2,
      description: "Historic farmhouse with rolling hills",
      bedrooms: 5,
      amenities: ["Countryside views", "Large garden", "Aga cooker", "Parking for 4"],
      wifi: "PeakFarmhouse",
      rules: ["Close all gates", "Aga instructions in kitchen", "Wellingtons in boot room"],
      fullDescription: "Beautiful 17th-century farmhouse set in stunning Peak District countryside. Features include original stone walls, an Aga in the farmhouse kitchen, and acres of private land. Ideal for families or groups."
    },
    {
      id: 8,
      userId: 4,
      owner: "David Kim",
      property: "Cambridge Riverside Cottage",
      location: "Cambridge, Cambridgeshire",
      image: "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=800",
      matchScore: 0,
      available: "1–10 April",
      mutualFriends: 1,
      description: "Charming cottage by the River Cam",
      bedrooms: 2,
      amenities: ["River views", "Garden to water", "Bikes included", "Central location"],
      wifi: "RiversideCam",
      rules: ["Bikes in shed", "Garden needs watering", "Spare keys with neighbour"],
      fullDescription: "Picturesque cottage on the banks of the River Cam with a beautiful garden leading down to the water. Two bikes included for exploring the city and surrounding countryside. Walking distance to the colleges and city centre."
    },
    {
      id: 9,
      userId: 1,
      owner: "Sarah Chen",
      property: "York City Apartment",
      location: "York, North Yorkshire",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      matchScore: 0,
      available: "15–25 April",
      mutualFriends: 2,
      description: "Medieval charm meets modern comfort",
      bedrooms: 2,
      amenities: ["Historic building", "City walls view", "Central", "Original beams"],
      wifi: "YorkApartment",
      rules: ["Steep stairs - take care", "No parking on street", "Use nearby car park"],
      fullDescription: "Unique apartment in a medieval building with views of the city walls. Original timber beams and stone walls combine with contemporary furnishings. In the heart of York, steps from the Minster and Shambles."
    },
    {
      id: 10,
      userId: 2,
      owner: "Marcus Rodriguez",
      property: "Scottish Highlands Lodge",
      location: "Fort William, Highlands",
      image: "https://images.unsplash.com/photo-1520608421741-68228b76b6df?w=800",
      matchScore: 0,
      available: "5–20 May",
      mutualFriends: 1,
      description: "Remote lodge with mountain and loch views",
      bedrooms: 3,
      amenities: ["Loch views", "Log fire", "Complete privacy", "Wildlife watching"],
      wifi: "HighlandsLodge",
      rules: ["Close shutters at night", "Log basket instructions", "4x4 recommended in winter"],
      fullDescription: "Spectacular lodge in the Scottish Highlands with panoramic views of Ben Nevis and a nearby loch. Complete peace and tranquility with abundant wildlife. Perfect for stargazing, hiking, and disconnecting from city life."
    },
    {
      id: 11,
      userId: 3,
      owner: "Emma Thompson",
      property: "Norfolk Coastal Cottage",
      location: "Wells-next-the-Sea, Norfolk",
      image: "https://images.unsplash.com/photo-1609766975875-e5d0b3545838?w=800",
      matchScore: 0,
      available: "1–15 June",
      mutualFriends: 2,
      description: "Traditional flint cottage near beach",
      bedrooms: 3,
      amenities: ["Beach 5min walk", "Garden", "Wood burner", "Coastal path"],
      wifi: "NorfolkCoast",
      rules: ["Sandy boots in porch", "Close garden gate - dog friendly area", "Tide times on fridge"],
      fullDescription: "Charming flint cottage in a picturesque coastal village. Short walk to endless sandy beaches and harbour. Explore the North Norfolk coastal path, visit seal colonies at Blakeney, or simply relax in the peaceful garden."
    },
    {
      id: 12,
      userId: 4,
      owner: "David Kim",
      property: "Bristol Harbourside Loft",
      location: "Bristol, Avon",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      matchScore: 0,
      available: "10–25 June",
      mutualFriends: 1,
      description: "Converted warehouse on the waterfront",
      bedrooms: 2,
      amenities: ["Harbour views", "Balcony", "Open plan", "City centre"],
      wifi: "BristolHarbour",
      rules: ["Balcony furniture in during storms", "Secure bike storage in basement", "Recycling day Thursday"],
      fullDescription: "Stunning warehouse conversion with exposed brickwork and huge windows overlooking the harbour. Watch boats come and go from your balcony. Walking distance to Clifton, the SS Great Britain, and Bristol's thriving food scene."
    },
    {
      id: 13,
      userId: 1,
      owner: "Sarah Chen",
      property: "Devon Coastal Retreat",
      location: "Salcombe, Devon",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      matchScore: 0,
      available: "1–15 July",
      mutualFriends: 2,
      description: "Contemporary house overlooking estuary",
      bedrooms: 4,
      amenities: ["Estuary views", "Garden terrace", "Parking", "Beach 10min walk"],
      wifi: "DevonCoastal",
      rules: ["Check tide times before beach walks", "Garden furniture in shed if windy", "Bins Thursday morning"],
      fullDescription: "Modern coastal house with floor-to-ceiling windows framing spectacular estuary views. Large terrace perfect for alfresco dining. Salcombe offers world-class sailing, beautiful beaches, and excellent restaurants."
    },
    {
      id: 14,
      userId: 2,
      owner: "Marcus Rodriguez",
      property: "Manchester City Penthouse",
      location: "Manchester, Greater Manchester",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
      matchScore: 0,
      available: "20 July–5 August",
      mutualFriends: 1,
      description: "Luxury penthouse with city skyline views",
      bedrooms: 3,
      amenities: ["Roof terrace", "Parking", "Gym access", "Concierge"],
      wifi: "ManchesterPenthouse",
      rules: ["Concierge can help with anything", "Roof terrace closes at 10pm", "Guest parking passes available"],
      fullDescription: "Luxurious penthouse in a landmark building with stunning 360-degree city views. Roof terrace perfect for entertaining. In the heart of the city with easy access to the Northern Quarter, Spinningfields, and both train stations."
    },
    {
      id: 15,
      userId: 3,
      owner: "Emma Thompson",
      property: "Cotswolds Manor House",
      location: "Burford, Oxfordshire",
      image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800",
      matchScore: 0,
      available: "10–25 August",
      mutualFriends: 2,
      description: "Historic manor house with formal gardens",
      bedrooms: 6,
      amenities: ["Historic house", "Gardens", "Tennis court", "Original features"],
      wifi: "CotswoldsManor",
      rules: ["Garden watering schedule on board", "Alarm code in welcome book", "Please respect historic features"],
      fullDescription: "Magnificent 16th-century manor house set in landscaped gardens. Features include mullioned windows, inglenook fireplaces, and a private tennis court. Perfect for family gatherings in the heart of the Cotswolds."
    },
    {
      id: 16,
      userId: 4,
      owner: "David Kim",
      property: "Liverpool Waterfront Apartment",
      location: "Liverpool, Merseyside",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      matchScore: 0,
      available: "1–15 September",
      mutualFriends: 1,
      description: "Modern apartment overlooking Albert Dock",
      bedrooms: 2,
      amenities: ["Waterfront views", "City centre", "Parking", "Balcony"],
      wifi: "LiverpoolDock",
      rules: ["Parking permit in drawer", "Bins collected Tuesday", "Balcony door must be locked"],
      fullDescription: "Contemporary apartment with stunning views over the historic Albert Dock and Liverpool waterfront. Walking distance to The Beatles Story, Tate Liverpool, and the city's vibrant nightlife and restaurant scene."
    },
    {
      id: 17,
      userId: 1,
      owner: "Sarah Chen",
      property: "Isle of Wight Beach House",
      location: "Ventnor, Isle of Wight",
      image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=800",
      matchScore: 0,
      available: "15–30 September",
      mutualFriends: 2,
      description: "Victorian villa steps from beach",
      bedrooms: 4,
      amenities: ["Sea views", "Garden", "Beach access", "Period features"],
      wifi: "IOWBeachHouse",
      rules: ["Rinse sandy feet", "Garden gate secured", "Ferry times on notice board"],
      fullDescription: "Elegant Victorian villa with wraparound veranda and uninterrupted sea views. Direct access to sandy beach. The perfect island escape with charming cafes, coastal walks, and a slower pace of life."
    },
    {
      id: 18,
      userId: 2,
      owner: "Marcus Rodriguez",
      property: "Durham Cathedral Quarter",
      location: "Durham, County Durham",
      image: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800",
      matchScore: 0,
      available: "1–15 October",
      mutualFriends: 1,
      description: "Historic house with cathedral views",
      bedrooms: 3,
      amenities: ["Cathedral views", "Period house", "Garden", "Central"],
      wifi: "DurhamCathedral",
      rules: ["Heating timer instructions", "Bins Monday evening", "Steep stairs"],
      fullDescription: "Beautiful period house in the shadow of Durham Cathedral. Original features throughout including sash windows and ornate cornicing. Riverside walks, castle visits, and excellent restaurants all within walking distance."
    },
    {
      id: 19,
      userId: 3,
      owner: "Emma Thompson",
      property: "Snowdonia Mountain Cabin",
      location: "Betws-y-Coed, Gwynedd",
      image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800",
      matchScore: 0,
      available: "20 October–5 November",
      mutualFriends: 2,
      description: "Remote cabin in Snowdonia National Park",
      bedrooms: 2,
      amenities: ["Mountain views", "Wood burner", "Hot tub", "Hiking from door"],
      wifi: "SnowdoniaCabin",
      rules: ["Wood burner guide in folder", "Hot tub maintenance schedule", "4x4 recommended"],
      fullDescription: "Secluded mountain cabin with incredible views of Snowdonia peaks. Wood burner for cozy evenings, hot tub for stargazing. Multiple hiking trails start from the door. True wilderness experience with modern comforts."
    },
    {
      id: 20,
      userId: 4,
      owner: "David Kim",
      property: "Oxford Jericho Townhouse",
      location: "Oxford, Oxfordshire",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
      matchScore: 0,
      available: "10–25 November",
      mutualFriends: 1,
      description: "Victorian townhouse in trendy Jericho",
      bedrooms: 3,
      amenities: ["City centre", "Garden", "Original features", "Parking"],
      wifi: "OxfordJericho",
      rules: ["Parking permit required", "Garden very private - enjoy it", "Heating instructions"],
      fullDescription: "Charming Victorian townhouse in the vibrant Jericho neighborhood. Original fireplaces and high ceilings. Walking distance to the colleges, Ashmolean Museum, and Port Meadow. Surrounded by independent cafes and gastropubs."
    },
    {
      id: 21,
      userId: 1,
      owner: "Sarah Chen",
      property: "Pembrokeshire Coastal Cottage",
      location: "St Davids, Pembrokeshire",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
      matchScore: 0,
      available: "1–15 December",
      mutualFriends: 2,
      description: "Stone cottage near coastal path",
      bedrooms: 2,
      amenities: ["Coastal views", "Wood burner", "Garden", "Coastal path access"],
      wifi: "PembrokeshireCoast",
      rules: ["Close shutters in storms", "Wood delivery info on board", "Boots in porch"],
      fullDescription: "Traditional stone cottage with breathtaking coastal views. Part of the Pembrokeshire Coast National Park with direct access to the coastal path. Nearby beaches, St Davids Cathedral, and excellent local seafood."
    },
    {
      id: 22,
      userId: 2,
      owner: "Marcus Rodriguez",
      property: "Newcastle Quayside Loft",
      location: "Newcastle, Tyne and Wear",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800",
      matchScore: 0,
      available: "15–30 December",
      mutualFriends: 1,
      description: "Industrial loft by the Tyne",
      bedrooms: 2,
      amenities: ["River views", "Open plan", "City centre", "Secure parking"],
      wifi: "NewcastleQuay",
      rules: ["Parking barrier code in folder", "Heating on timer", "Bins Tuesday"],
      fullDescription: "Stunning warehouse conversion overlooking the iconic Tyne bridges. Exposed beams, brick walls, and industrial features. Steps from the Quayside bars and restaurants, BALTIC art gallery, and Sage Gateshead."
    },
    {
      id: 23,
      userId: 3,
      owner: "Emma Thompson",
      property: "Canterbury Medieval House",
      location: "Canterbury, Kent",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
      matchScore: 0,
      available: "1–15 January",
      mutualFriends: 2,
      description: "Medieval house near cathedral",
      bedrooms: 3,
      amenities: ["Historic property", "Cathedral close", "Period features", "Garden"],
      wifi: "CanterburyMedieval",
      rules: ["Listed building - please take care", "Cathedral bells ring regularly", "Guest parking pass available"],
      fullDescription: "Rare medieval house in the cathedral precincts with original timber frames and inglenook fireplace. Steeped in history with modern comforts. Walking distance to the cathedral, pilgrims' way, and charming independent shops."
    },
    {
      id: 24,
      userId: 4,
      owner: "David Kim",
      property: "Stratford-upon-Avon Tudor House",
      location: "Stratford-upon-Avon, Warwickshire",
      image: "https://images.unsplash.com/photo-1601084881623-cde1354b6cbc?w=800",
      matchScore: 0,
      available: "20 January–5 February",
      mutualFriends: 1,
      description: "Historic Tudor house in Shakespeare's town",
      bedrooms: 4,
      amenities: ["Tudor features", "Town centre", "Garden", "Original beams"],
      wifi: "StratfordTudor",
      rules: ["Low beams - watch your head!", "Garden private and peaceful", "Theatre walking distance"],
      fullDescription: "Authentic Tudor house with exposed timber beams and period features throughout. Located in the heart of Shakespeare's birthplace. Walking distance to the RSC, Anne Hathaway's cottage, and riverside walks."
    },
    {
      id: 25,
      userId: 1,
      owner: "Sarah Chen",
      property: "Suffolk Village Farmhouse",
      location: "Lavenham, Suffolk",
      image: "https://images.unsplash.com/photo-1599619351208-3e6906cf18b9?w=800",
      matchScore: 0,
      available: "10–25 February",
      mutualFriends: 2,
      description: "Medieval farmhouse in picture-perfect village",
      bedrooms: 4,
      amenities: ["Medieval features", "Large garden", "Village location", "Original fireplaces"],
      wifi: "SuffolkFarmhouse",
      rules: ["Crooked floors - it's 500 years old!", "Aga instructions in kitchen", "Close all windows when out"],
      fullDescription: "Stunning medieval farmhouse in one of England's best-preserved villages. Wonky floors, huge inglenook fireplace, and exposed timbers. Surrounded by rolling countryside, antique shops, and traditional pubs."
    },
    {
      id: 26,
      userId: 2,
      owner: "Marcus Rodriguez",
      property: "Leeds City Centre Penthouse",
      location: "Leeds, West Yorkshire",
      image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800",
      matchScore: 0,
      available: "1–15 March",
      mutualFriends: 1,
      description: "Modern penthouse with panoramic views",
      bedrooms: 3,
      amenities: ["City views", "Roof terrace", "Parking", "Concierge"],
      wifi: "LeedsPenthouse",
      rules: ["Concierge 24/7", "Roof terrace furniture stored in winter", "Parking space 47"],
      fullDescription: "Luxurious penthouse with floor-to-ceiling windows and private roof terrace. Panoramic views over Leeds. Walking distance to Victoria Quarter, Harvey Nichols, and the vibrant restaurant scene of Greek Street."
    },
    {
      id: 27,
      userId: 3,
      owner: "Emma Thompson",
      property: "Exmoor Farmhouse",
      location: "Dulverton, Somerset",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800",
      matchScore: 0,
      available: "15–30 March",
      mutualFriends: 2,
      description: "Remote farmhouse on Exmoor",
      bedrooms: 5,
      amenities: ["Moorland views", "Acres of land", "Wood burner", "Complete privacy"],
      wifi: "ExmoorFarm",
      rules: ["Close all gates", "Wood burner only heat source", "4x4 essential in winter"],
      fullDescription: "Traditional Exmoor farmhouse surrounded by wild moorland and ancient woodland. Red deer often spotted in the fields. Perfect for families wanting to disconnect and immerse in nature. Dark sky reserve for stargazing."
    },
    {
      id: 28,
      userId: 4,
      owner: "David Kim",
      property: "Whitby Harbour House",
      location: "Whitby, North Yorkshire",
      image: "https://images.unsplash.com/photo-1587821986552-3a91eb49e32e?w=800",
      matchScore: 0,
      available: "1–15 April",
      mutualFriends: 1,
      description: "Victorian house overlooking harbour",
      bedrooms: 3,
      amenities: ["Harbour views", "Period features", "Garden", "Central location"],
      wifi: "WhitbyHarbour",
      rules: ["Very steep stairs", "Seagulls are noisy!", "Parking pass included"],
      fullDescription: "Characterful Victorian house with stunning views over Whitby harbour and the famous 199 steps to the abbey. Watch fishing boats come and go. Walking distance to the beach, fish and chip shops, and Dracula connections."
    },
    {
      id: 29,
      userId: 1,
      owner: "Sarah Chen",
      property: "Cheltenham Regency Apartment",
      location: "Cheltenham, Gloucestershire",
      image: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?w=800",
      matchScore: 0,
      available: "20 April–5 May",
      mutualFriends: 2,
      description: "Elegant apartment in spa town",
      bedrooms: 2,
      amenities: ["Regency features", "Town centre", "Spa nearby", "High ceilings"],
      wifi: "CheltenhamRegency",
      rules: ["Period windows - please close carefully", "Parking difficult - use nearby car park", "Communal garden access"],
      fullDescription: "Beautiful Regency apartment in the elegant spa town of Cheltenham. High ceilings, large windows, and period details. Perfect base for visiting the Cotswolds, Cheltenham Racecourse, and the town's excellent restaurants and shops."
    },
    {
      id: 30,
      userId: 2,
      owner: "Marcus Rodriguez",
      property: "Dorset Coastal Barn",
      location: "Lyme Regis, Dorset",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
      matchScore: 0,
      available: "10–25 May",
      mutualFriends: 1,
      description: "Converted barn with sea views",
      bedrooms: 3,
      amenities: ["Sea views", "Garden", "Coastal path", "Modern conversion"],
      wifi: "DorsetBarn",
      rules: ["Garden furniture in shed if storms forecast", "Fossil hunting on beach!", "Bins Thursday"],
      fullDescription: "Stunning barn conversion with panoramic sea views across Lyme Bay. Modern interior with exposed beams and stone walls. Walking distance to the Cobb, fossil beaches, and the Jurassic Coast World Heritage Site."
    }
  ];

  const matches = allProperties.filter(p => p.matchScore > 0);

  const MatchCard = ({ match, isMatch = true }) => (
    <article className="match-card" style={{ animationDelay: `${match.id * 100}ms` }}>
      <div 
        className="card-image-container"
        onClick={() => setSelectedProperty(match)}
      >
        <img src={match.image} alt={match.property} className="card-image" />
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleBookmark(match.id);
          }}
          className={`bookmark-btn ${bookmarked.has(match.id) ? 'active' : ''}`}
        >
          <MaterialIcon name={bookmarked.has(match.id) ? "star" : "star_border"} size="18" />
        </button>
        {isMatch && (
          <div className="match-badge">
            <MaterialIcon name="check" size="14" />
            {match.matchScore}% Match
          </div>
        )}
      </div>
      
      <div className="card-content">
        {isMatch && <div className="match-dates-tag">{match.overlap}</div>}
        
        <h3 className="property-title">{match.property}</h3>
        <p className="property-location">{match.location}</p>
        <p className="property-description">{match.description}</p>
        
        <div className="card-footer">
          <div className="property-meta">
            <button 
              className="owner-profile-btn"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedUser(match.userId);
              }}
            >
              <img 
                src={userProfiles[match.userId].avatar} 
                alt={match.owner}
                className="owner-avatar"
              />
              <span className="owner-name">{match.owner}</span>
            </button>
            <span className="meta-dot">·</span>
            <span className="mutuals">{match.mutualFriends} mutual friend{match.mutualFriends > 1 ? 's' : ''}</span>
          </div>
          
          <button 
            className="view-btn"
            onClick={() => setSelectedProperty(match)}
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );

  const HeroLanding = () => {
    const handleSearch = () => {
      setCurrentView('matches');
    };

    return (
      <div className="hero-landing">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600"
            alt="Beautiful home interior"
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Share your hearth with friends</h1>
            <p className="hero-subtitle">
              Swap homes within your trusted circle. Spend time in beautiful places while friends enjoy yours.
            </p>
          </div>
          
          <div className="hero-search-card">
            <div className="search-card-inner">
              <h3 className="search-card-title">Find your next swap</h3>
              
              <div className="search-fields">
                <div className="search-field">
                  <label className="search-label">From</label>
                  <input
                    type="date"
                    value={selectedDates.start}
                    onChange={(e) => setSelectedDates({...selectedDates, start: e.target.value})}
                    className="search-input"
                  />
                </div>
                
                <div className="search-field">
                  <label className="search-label">To</label>
                  <input
                    type="date"
                    value={selectedDates.end}
                    onChange={(e) => setSelectedDates({...selectedDates, end: e.target.value})}
                    className="search-input"
                  />
                </div>
              </div>
              
              <button onClick={handleSearch} className="search-button">
                Search Available Homes
              </button>
            </div>
          </div>
          
          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-number">12</div>
              <div className="feature-label">Friends in your circle</div>
            </div>
            <div className="feature-item">
              <div className="feature-number">{matches.length}</div>
              <div className="feature-label">Perfect matches this month</div>
            </div>
            <div className="feature-item">
              <div className="feature-number">100%</div>
              <div className="feature-label">Trust & privacy guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MyPlace = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    
    return (
      <div className="my-place-container">
        <div className="my-place-header">
          <h2 className="page-title">{myProperty.name}</h2>
          <p className="page-subtitle">{myProperty.location}</p>
        </div>

        {/* Image Gallery */}
        <div className="property-gallery">
          <div className="gallery-main">
            <img 
              src={myProperty.images[selectedImage]} 
              alt={myProperty.name}
              className="gallery-main-image"
            />
          </div>
          <div className="gallery-grid">
            {myProperty.images.slice(1).map((img, idx) => (
              <div 
                key={idx} 
                className={`gallery-thumb ${selectedImage === idx + 1 ? 'active' : ''}`}
                onClick={() => setSelectedImage(idx + 1)}
              >
                <img src={img} alt={`View ${idx + 2}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Essential Details */}
        <div className="property-essentials">
          <h3 className="section-title">Property Details</h3>
          <div className="essentials-grid">
            <div className="essential-item">
              <div className="essential-icon">🛏️</div>
              <div className="essential-content">
                <div className="essential-label">Bedrooms</div>
                <div className="essential-value">{myProperty.bedrooms}</div>
              </div>
            </div>
            <div className="essential-item">
              <div className="essential-icon">🚿</div>
              <div className="essential-content">
                <div className="essential-label">Bathrooms</div>
                <div className="essential-value">{myProperty.bathrooms}</div>
              </div>
            </div>
            <div className="essential-item">
              <div className="essential-icon">📏</div>
              <div className="essential-content">
                <div className="essential-label">Square Feet</div>
                <div className="essential-value">{myProperty.sqFootage} sq ft</div>
              </div>
            </div>
            <div className="essential-item">
              <div className="essential-icon">🚗</div>
              <div className="essential-content">
                <div className="essential-label">Parking</div>
                <div className="essential-value">{myProperty.essentials.parking}</div>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="property-about">
          <h3 className="section-title">About this home</h3>
          <p className="about-text">{myProperty.fullDescription}</p>
        </div>

        {/* Amenities */}
        <div className="property-amenities-section">
          <h3 className="section-title">What this place offers</h3>
          <div className="amenities-list">
            {myProperty.amenities.map((amenity, idx) => (
              <div key={idx} className="amenity-item-my">
                <span className="amenity-check">✓</span>
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Essentials */}
        <div className="property-details-section">
          <h3 className="section-title">Additional Details</h3>
          <div className="details-list">
            <div className="detail-row">
              <span className="detail-label">Bed Configuration</span>
              <span className="detail-value">{myProperty.essentials.bedConfiguration}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Heating</span>
              <span className="detail-value">{myProperty.essentials.heating}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Kitchen</span>
              <span className="detail-value">{myProperty.essentials.kitchen}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Internet</span>
              <span className="detail-value">{myProperty.essentials.internet}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Outdoor Space</span>
              <span className="detail-value">{myProperty.essentials.outdoorSpace}</span>
            </div>
          </div>
        </div>

        {/* House Rules */}
        <div className="property-rules-section">
          <h3 className="section-title">House Rules</h3>
          <ul className="house-rules-list">
            {myProperty.rules.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ul>
        </div>

        {/* Reviews */}
        <div className="property-reviews-section">
          <h3 className="section-title">
            Reviews from friends
            <span className="reviews-rating">
              {Array(5).fill(0).map((_, i) => (
                <MaterialIcon name="star" size="16" key={i} />
              ))}
              <span className="rating-text">5.0 · {myProperty.reviews.length} reviews</span>
            </span>
          </h3>
          <div className="reviews-grid">
            {myProperty.reviews.map((review, idx) => (
              <div key={idx} className="review-card">
                <div className="review-header">
                  <img src={review.avatar} alt={review.name} className="review-avatar" />
                  <div className="review-info">
                    <div className="review-name">{review.name}</div>
                    <div className="review-date">{review.date}</div>
                  </div>
                  <div className="review-stars">
                    {Array(review.rating).fill(0).map((_, i) => (
                      <MaterialIcon name="star" size="16" key={i} />
                    ))}
                  </div>
                </div>
                <p className="review-comment">{review.comment}</p>
                <div className="review-helpful">{review.helpful} people found this helpful</div>
              </div>
            ))}
          </div>
        </div>

        {/* Neighborhood */}
        <div className="property-neighborhood-section">
          <h3 className="section-title">The Neighborhood</h3>
          <p className="neighborhood-description">{myProperty.neighborhood.description}</p>
          
          <div className="neighborhood-score">
            <div className="score-badge">Walk Score: {myProperty.neighborhood.walkScore}/100</div>
            <span className="score-description">Very Walkable</span>
          </div>

          <h4 className="subsection-title">Nearby</h4>
          <div className="nearby-grid">
            {myProperty.neighborhood.nearby.map((place, idx) => (
              <div key={idx} className="nearby-item">
                <div className="nearby-name">{place.name}</div>
                <div className="nearby-distance">{place.distance}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Things to Do */}
        <div className="property-activities-section">
          <h3 className="section-title">Things to do nearby</h3>
          <div className="activities-list">
            {myProperty.neighborhood.thingsToDo.map((activity, idx) => (
              <div key={idx} className="activity-card">
                <div className="activity-header">
                  <h4 className="activity-name">{activity.name}</h4>
                  <span className="activity-distance">{activity.distance}</span>
                </div>
                <p className="activity-description">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="property-map-section">
          <h3 className="section-title">Location</h3>
          <div className="map-placeholder">
            <div className="map-marker">📍</div>
            <div className="map-address">{myProperty.location}</div>
            <p className="map-note">Exact location provided after swap confirmation</p>
          </div>
        </div>
      </div>
    );
  };

  const UserProfilePanel = ({ userId, onClose }) => {
    if (!userId || !userProfiles[userId]) return null;
    
    const user = userProfiles[userId];
    
    return (
      <>
        <div className="profile-overlay" onClick={onClose}></div>
        <div className="profile-panel">
          <button className="profile-close" onClick={onClose}>×</button>
          
          <div className="profile-header">
            <img src={user.avatar} alt={user.name} className="profile-avatar" />
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-location">{user.location}</p>
            <p className="profile-joined">Member since {user.joinedDate}</p>
          </div>

          <div className="profile-section">
            <p className="profile-bio">{user.bio}</p>
          </div>

          <div className="profile-section">
            <h3 className="profile-section-title">Contact</h3>
            <div className="profile-contact">
              <a href={`mailto:${user.email}`} className="contact-item">
                <span className="contact-icon">✉</span>
                <span>{user.email}</span>
              </a>
              <a href={`tel:${user.phone}`} className="contact-item">
                <span className="contact-icon">📞</span>
                <span>{user.phone}</span>
              </a>
            </div>
          </div>

          <div className="profile-section">
            <h3 className="profile-section-title">Swap History</h3>
            <div className="swap-history">
              {user.swapHistory.map((swap, idx) => (
                <div key={idx} className="swap-item">
                  <div className="swap-property">{swap.property}</div>
                  <div className="swap-details">
                    {swap.location} · {swap.date}
                  </div>
                  <div className="swap-owner">with {swap.owner}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-section">
            <h3 className="profile-section-title">Wishlist</h3>
            <div className="wishlist">
              {user.wishlist.map((place, idx) => (
                <span key={idx} className="wishlist-tag">{place}</span>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  const PropertyDetailPanel = ({ property, onClose }) => {
    if (!property) return null;

    // Find similar properties (same owner or similar location type)
    const similarProperties = allProperties
      .filter(p => p.id !== property.id && (
        p.userId === property.userId || 
        p.location.includes(property.location.split(',')[1]?.trim() || 'none')
      ))
      .slice(0, 3);

    return (
      <div className="property-detail-view">
        <div className="detail-view-overlay" onClick={onClose}></div>
        
        <div className="detail-view-panel">
          <button className="detail-close" onClick={onClose}>×</button>
          
          <div className="detail-hero-image">
            <img src={property.image} alt={property.property} />
          </div>
          
          <div className="detail-content-wrapper">
            <div className="detail-header">
              {property.matchScore > 0 && (
                <div className="detail-match-tag">
                  <MaterialIcon name="check" size="14" /> {property.matchScore}% Match · {property.overlap}
                </div>
              )}
              <h1 className="detail-title">{property.property}</h1>
              <p className="detail-location">{property.location}</p>
              <div className="detail-meta">
                <span>{property.bedrooms} bedrooms</span>
                <span className="meta-dot">·</span>
                <button 
                  className="detail-owner-btn"
                  onClick={() => {
                    onClose();
                    setSelectedUser(property.userId);
                  }}
                >
                  Hosted by {property.owner}
                </button>
              </div>
            </div>

            <div className="detail-description">
              <h3 className="detail-section-heading">About this home</h3>
              <p>{property.fullDescription}</p>
            </div>

            <div className="detail-amenities">
              <h3 className="detail-section-heading">What this place offers</h3>
              <div className="amenities-grid">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="amenity-item">
                    <span className="amenity-icon">✓</span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-house-info">
              <h3 className="detail-section-heading">House Information</h3>
              <div className="info-block">
                <h4>WiFi Network</h4>
                <p className="wifi-detail">{property.wifi}</p>
              </div>
              <div className="info-block">
                <h4>House Rules</h4>
                <ul className="rules-list">
                  {property.rules.map((rule, idx) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>
              </div>
            </div>

            {similarProperties.length > 0 && (
              <div className="similar-properties">
                <h3 className="detail-section-heading">Similar properties available</h3>
                <div className="similar-grid">
                  {similarProperties.map(similar => (
                    <div 
                      key={similar.id} 
                      className="similar-card"
                      onClick={() => setSelectedProperty(similar)}
                    >
                      <img src={similar.image} alt={similar.property} className="similar-image" />
                      <div className="similar-info">
                        <h4 className="similar-title">{similar.property}</h4>
                        <p className="similar-location">{similar.location}</p>
                        {similar.matchScore > 0 && (
                          <span className="similar-match">{similar.matchScore}% Match</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="detail-actions">
              <button className="action-btn primary">
                {property.matchScore > 0 ? 'Propose Swap' : 'Request Dates'}
              </button>
              <button 
                className="action-btn secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleBookmark(property.id);
                }}
              >
                {bookmarked.has(property.id) ? 'Bookmarked' : 'Save for Later'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app-wrapper">
      <header className="site-header">
        <div className="header-inner">
          <div className="brand">
            <HearthLogo />
          </div>
          <div className="header-actions">
            <span className="network-info">12 friends</span>
            <div className="user-badge">JD</div>
          </div>
        </div>
      </header>

      <nav className="site-nav">
        <div className="nav-inner">
          <button onClick={() => setCurrentView('home')} className={`nav-link ${currentView === 'home' ? 'active' : ''}`}>
            Home
          </button>
          <button onClick={() => setCurrentView('matches')} className={`nav-link ${currentView === 'matches' ? 'active' : ''}`}>
            Matches
          </button>
          <button onClick={() => setCurrentView('browse')} className={`nav-link ${currentView === 'browse' ? 'active' : ''}`}>
            Browse All
          </button>
          <button onClick={() => setCurrentView('myplace')} className={`nav-link ${currentView === 'myplace' ? 'active' : ''}`}>
            My Place
          </button>
        </div>
      </nav>

      <main className="main-container">
        {currentView === 'home' && <HeroLanding />}

        {currentView === 'matches' && (
          <div>
            <div className="page-header">
              <h2 className="page-title">Perfect Matches</h2>
              <p className="page-subtitle">Friends available during your dates</p>
            </div>
            <div className="cards-grid">
              {matches.map(match => (
                <MatchCard key={match.id} match={match} isMatch={true} />
              ))}
            </div>
          </div>
        )}

        {currentView === 'browse' && (
          <div>
            <div className="page-header">
              <h2 className="page-title">All Homes</h2>
              <p className="page-subtitle">Explore your circle</p>
            </div>
            <div className="cards-grid">
              {allProperties.map(property => (
                <MatchCard key={property.id} match={property} isMatch={property.matchScore > 0} />
              ))}
            </div>
          </div>
        )}

        {currentView === 'myplace' && (
          <MyPlace />
        )}
      </main>

      <div className="footer-notice">
        <div className="notice-title">Private Circle</div>
        <p className="notice-text">
          Only friends and friends-of-friends with 2+ mutual connections can see your listing
        </p>
      </div>

      {selectedUser && (
        <UserProfilePanel 
          userId={selectedUser} 
          onClose={() => setSelectedUser(null)} 
        />
      )}

      {selectedProperty && (
        <PropertyDetailPanel 
          property={selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
        />
      )}
    </div>
  );
}

ReactDOM.render(<Hearth />, document.getElementById('root'));
