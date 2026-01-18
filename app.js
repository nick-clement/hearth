const { useState } = React;

// Material Icon Component
const Icon = ({ name, className = "" }) => <span className={`material-icons ${className}`}>{name}</span>;

// Logo Component
const Logo = () => (
  <svg width="107" height="15" viewBox="0 0 428 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M-5.30481e-06 58.884V-2.38419e-07H7.30799V25.62H37.716V-2.38419e-07H45.024V58.884H37.716V32.34H7.30799V58.884H-5.30481e-06ZM81.6375 58.884V0.0839987H119.101V6.804H88.9455V25.62H114.061V32.34H88.9455V52.164H120.193V58.884H81.6375ZM156.367 58.884H148.807L171.235 0.0839987H179.887L202.231 58.884H194.419L188.203 43.008H162.583L156.367 58.884ZM175.351 8.064L164.767 36.372H186.019L175.351 8.064ZM234.084 0.0839987H256.596C268.272 0.0839987 276.168 7.224 276.168 18.144C276.168 26.292 271.296 32.76 263.652 34.86L276.84 58.884H268.608L256.428 36.288H241.392V58.884H234.084V0.0839987ZM241.392 6.804V29.568H256.008C263.736 29.568 268.692 25.116 268.692 18.144C268.692 11.34 263.736 6.804 256.092 6.804H241.392ZM303.825 6.804V0.0839987H349.269V6.804H330.201V58.884H322.893V6.804H303.825ZM382.266 58.884V-2.38419e-07H389.574V25.62H419.982V-2.38419e-07H427.29V58.884H419.982V32.34H389.574V58.884H382.266Z" fill="currentColor"/>
  </svg>
);

// My Profile Data
const myProfile = {
  name: "You",
  location: "Chipping Norton, Oxfordshire",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=You",
  email: "you@example.com",
  bio: "Love sharing my home and discovering new places through friends.",
  properties: 1,
  swaps: 5,
  reviews: 8,
  friends: 12
};

// Friends in your circle
const friends = [
  { id: 1, name: "Sarah Chen", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
  { id: 2, name: "Marcus Rodriguez", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus" },
  { id: 3, name: "Emma Thompson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma" },
  { id: 4, name: "David Kim", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David" },
  { id: 5, name: "Sophie Bennett", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie" },
  { id: 6, name: "James Wright", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James" }
];

// Properties with dates and connection info
const properties = [
  {
    id: 1,
    name: "Cornish Beach House",
    location: "St Ives, Cornwall",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
      "https://images.unsplash.com/photo-1502672260066-6bc51cb65ad4?w=800",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800"
    ],
    bedrooms: 4,
    description: "Stunning beachfront property with panoramic sea views. Wake up to the sound of waves and spend your days on the golden sands.",
    amenities: ["Sea views", "Beach access", "Terrace", "BBQ", "WiFi", "Parking"],
    availableDates: [
      { start: "2026-02-14", end: "2026-02-21" },
      { start: "2026-03-15", end: "2026-03-29" },
      { start: "2026-04-10", end: "2026-04-20" }
    ],
    neighborhood: {
      description: "St Ives is a picturesque seaside town with golden beaches, art galleries, and fresh seafood restaurants.",
      nearby: [
        { name: "Porthmeor Beach", distance: "2 min walk", icon: "beach_access" },
        { name: "Tate St Ives", distance: "5 min walk", icon: "museum" },
        { name: "The Sloop Inn", distance: "3 min walk", icon: "restaurant" },
        { name: "Co-op Supermarket", distance: "8 min walk", icon: "shopping_cart" }
      ]
    },
    owner: {
      name: "Sarah Chen",
      location: "St Ives, Cornwall",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      email: "sarah@example.com",
      bio: "Love coastal living and always looking for city breaks. Design enthusiast and avid cook.",
      connection: "friend"
    }
  },
  {
    id: 2,
    name: "Edinburgh Townhouse",
    location: "New Town, Edinburgh",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800"
    ],
    bedrooms: 3,
    description: "Georgian elegance in the heart of New Town. Beautifully restored with original features throughout.",
    amenities: ["Original features", "City centre", "Parking", "Office space", "WiFi", "Garden"],
    availableDates: [
      { start: "2026-02-17", end: "2026-02-24" },
      { start: "2026-03-20", end: "2026-04-05" },
      { start: "2026-12-20", end: "2026-12-28" }
    ],
    neighborhood: {
      description: "New Town Edinburgh is a UNESCO World Heritage Site with Georgian architecture and cultural attractions.",
      nearby: [
        { name: "Princes Street", distance: "10 min walk", icon: "shopping_bag" },
        { name: "Edinburgh Castle", distance: "15 min walk", icon: "castle" },
        { name: "The Printing Press", distance: "5 min walk", icon: "restaurant" },
        { name: "Waitrose", distance: "7 min walk", icon: "shopping_cart" }
      ]
    },
    owner: {
      name: "Marcus Rodriguez",
      location: "Edinburgh, Scotland",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
      email: "marcus@example.com",
      bio: "History buff based in Edinburgh. Love sharing the city's charm with visitors.",
      connection: "friend",
      mutualFriends: 1
    }
  },
  {
    id: 3,
    name: "Lake District Cabin",
    location: "Windermere, Cumbria",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800",
    images: [
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800"
    ],
    bedrooms: 2,
    description: "Secluded cabin nestled in ancient woodland with breathtaking views of the fells. Perfect base for hiking.",
    amenities: ["Mountain views", "Wood burner", "Hot tub", "Hiking trails", "WiFi", "Parking"],
    availableDates: [
      { start: "2026-01-20", end: "2026-02-15" },
      { start: "2026-03-01", end: "2026-03-20" },
      { start: "2026-04-15", end: "2026-04-28" }
    ],
    neighborhood: {
      description: "Windermere sits on England's largest lake in the heart of the Lake District National Park.",
      nearby: [
        { name: "Lake Windermere", distance: "5 min walk", icon: "water" },
        { name: "Village shops", distance: "10 min walk", icon: "store" },
        { name: "The Lamplighter", distance: "12 min walk", icon: "restaurant" },
        { name: "Hiking trails", distance: "At doorstep", icon: "hiking" }
      ]
    },
    owner: {
      name: "Emma Thompson",
      location: "Windermere, Cumbria",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      email: "emma@example.com",
      bio: "Nature lover and hiker. Our cabin is perfect for those seeking peace and mountain air.",
      connection: "friend of friend",
      mutualFriends: 2
    }
  },
  {
    id: 4,
    name: "Shoreditch Loft",
    location: "Shoreditch, London",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800",
      "https://images.unsplash.com/photo-1502672260066-6bc51cb65ad4?w=800",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"
    ],
    bedrooms: 2,
    description: "Industrial chic in creative East London. Converted warehouse with soaring ceilings and original features.",
    amenities: ["Exposed brick", "Open plan", "Roof terrace", "Workspace", "WiFi", "Gym"],
    availableDates: [
      { start: "2026-02-28", end: "2026-03-10" },
      { start: "2026-03-25", end: "2026-04-08" },
      { start: "2026-04-18", end: "2026-05-01" }
    ],
    neighborhood: {
      description: "Shoreditch is East London's creative hub with street art, independent shops, and vibrant nightlife.",
      nearby: [
        { name: "Boxpark Shoreditch", distance: "5 min walk", icon: "restaurant" },
        { name: "Old Street Station", distance: "8 min walk", icon: "train" },
        { name: "Brick Lane Market", distance: "10 min walk", icon: "store" },
        { name: "Tesco Express", distance: "3 min walk", icon: "shopping_cart" }
      ]
    },
    owner: {
      name: "David Kim",
      location: "London",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      email: "david@example.com",
      bio: "Creative professional who loves the energy of East London's art scene.",
      connection: "friend",
      mutualFriends: 1
    }
  },
  {
    id: 5,
    name: "Bath Georgian House",
    location: "Bath, Somerset",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800"
    ],
    bedrooms: 4,
    description: "Grade II listed townhouse near Roman Baths. Stunning period features and elegant proportions throughout.",
    amenities: ["Period features", "Garden", "City views", "Central location", "WiFi", "Parking"],
    availableDates: [
      { start: "2026-03-05", end: "2026-03-18" },
      { start: "2026-04-01", end: "2026-04-15" },
      { start: "2026-12-22", end: "2026-12-29" }
    ],
    neighborhood: {
      description: "Bath is a beautiful Georgian city with Roman baths, stunning architecture, and excellent shopping.",
      nearby: [
        { name: "Roman Baths", distance: "8 min walk", icon: "museum" },
        { name: "Thermae Bath Spa", distance: "10 min walk", icon: "spa" },
        { name: "Pulteney Bridge", distance: "5 min walk", icon: "bridge" },
        { name: "Waitrose", distance: "6 min walk", icon: "shopping_cart" }
      ]
    },
    owner: {
      name: "Sophie Bennett",
      location: "Bath, Somerset",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
      email: "sophie@example.com",
      bio: "Bath resident who loves history, architecture, and the natural thermal springs.",
      connection: "friend of friend",
      mutualFriends: 3
    }
  },
  {
    id: 6,
    name: "Brighton Marina Apartment",
    location: "Brighton, East Sussex",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800",
    images: [
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800",
      "https://images.unsplash.com/photo-1502672260066-6bc51cb65ad4?w=800",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800"
    ],
    bedrooms: 2,
    description: "Modern apartment overlooking Brighton Marina with floor-to-ceiling windows and private balcony.",
    amenities: ["Marina views", "Balcony", "Parking", "Gym access", "WiFi", "Beach nearby"],
    availableDates: [
      { start: "2026-02-10", end: "2026-02-25" },
      { start: "2026-03-10", end: "2026-03-25" },
      { start: "2026-04-05", end: "2026-04-22" }
    ],
    neighborhood: {
      description: "Brighton Marina offers waterfront dining, shopping, and easy access to the vibrant city center.",
      nearby: [
        { name: "Marina restaurants", distance: "2 min walk", icon: "restaurant" },
        { name: "Brighton Beach", distance: "15 min walk", icon: "beach_access" },
        { name: "Asda Supermarket", distance: "5 min walk", icon: "shopping_cart" },
        { name: "Cinema", distance: "3 min walk", icon: "local_movies" }
      ]
    },
    owner: {
      name: "James Wright",
      location: "Brighton",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      email: "james@example.com",
      bio: "Brighton local who enjoys the vibrant seafront and independent culture.",
      connection: "friend"
    }
  }
];

// Helper: Check if dates overlap
function datesOverlap(searchStart, searchEnd, availStart, availEnd) {
  const s1 = new Date(searchStart);
  const e1 = new Date(searchEnd);
  const s2 = new Date(availStart);
  const e2 = new Date(availEnd);
  return s1 <= e2 && e1 >= s2;
}

// Helper: Format date range
function formatDateRange(start, end) {
  const s = new Date(start);
  const e = new Date(end);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[s.getMonth()]} ${s.getDate()}-${e.getDate()}`;
}


function Hearth() {
  const [view, setView] = useState('home');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchDates, setSearchDates] = useState({ start: '2026-02-14', end: '2026-02-21' });
  const [showInvite, setShowInvite] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authTab, setAuthTab] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to false to show login state

  const handleSearch = () => {
    setView('results');
  };

  const openProperty = (property) => {
    setSelectedProperty(property);
    setView('detail');
  };

  const openUserPanel = (user) => {
    setSelectedUser(user);
  };

  const closeUserPanel = () => {
    setSelectedUser(null);
  };

  // Filter properties by search dates
  const getMatchingProperties = () => {
    if (!searchDates.start || !searchDates.end) return properties;
    
    return properties.map(prop => {
      const matchingDate = prop.availableDates.find(avail => 
        datesOverlap(searchDates.start, searchDates.end, avail.start, avail.end)
      );
      return {
        ...prop,
        matchingDate,
        isPerfectMatch: matchingDate && 
          matchingDate.start === searchDates.start && 
          matchingDate.end === searchDates.end
      };
    });
  };

  const matchingProperties = getMatchingProperties();

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo" onClick={() => setView('home')}>
            <Logo />
          </div>
          <nav className="nav">
            <a className="nav-link" onClick={() => setView('home')}>Home</a>
            <a className="nav-link" onClick={() => setView('results')}>Browse</a>
            {isLoggedIn ? (
              <>
                <a className="nav-link" onClick={() => setShowInvite(true)}>
                  <Icon name="person_add" /> Invite friends
                </a>
                <div className="user-avatar" onClick={() => openUserPanel(myProfile)}>
                  YO
                </div>
              </>
            ) : (
              <div className="nav-cta">
                <button className="login-btn" onClick={() => { setAuthTab('login'); setShowAuth(true); }}>
                  Log in
                </button>
                <button className="login-btn" style={{background: '#1a1a1a', color: '#fff', border: 'none'}} onClick={() => { setAuthTab('signup'); setShowAuth(true); }}>
                  Sign up
                </button>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* Home View */}
      {view === 'home' && (
        <div className="container">
          <div className="hero">
            <h1>Home swapping with friends</h1>
            <p>Stay in homes you trust, with people you know</p>
          </div>

          <div className="search-box">
            <div className="search-fields">
              <div className="search-field">
                <label>Check in</label>
                <input 
                  type="date" 
                  value={searchDates.start}
                  onChange={(e) => setSearchDates({...searchDates, start: e.target.value})}
                />
              </div>
              <div className="search-field">
                <label>Check out</label>
                <input 
                  type="date"
                  value={searchDates.end}
                  onChange={(e) => setSearchDates({...searchDates, end: e.target.value})}
                />
              </div>
            </div>
            <button className="search-button" onClick={handleSearch}>
              Search available homes
            </button>
          </div>

          <div className="about">
            <h2>How Hearth works</h2>
            <p>
              Hearth is a private home-swapping network for friends and their trusted connections. 
              List your home, browse properties from people in your circle, and swap simultaneously. 
              Only friends and friends-of-friends with 2+ mutual connections can see your listing.
            </p>
          </div>

          <h2 style={{marginBottom: '32px', fontSize: '24px', fontWeight: 400}}>
            Featured homes from your circle
          </h2>
          <div className="properties-grid">
            {properties.slice(0, 6).map(property => (
              <div 
                key={property.id} 
                className="property-card"
                onClick={() => openProperty(property)}
              >
                <img src={property.image} alt={property.name} className="property-image" />
                <div className="connection-badge">
                  {property.owner.connection === 'friend' ? (
                    <><Icon name="check_circle" /> Friend</>
                  ) : (
                    <><Icon name="people" /> {property.owner.mutualFriends} mutual friends</>
                  )}
                </div>
                <h3 className="property-title">{property.name}</h3>
                <p className="property-location">{property.location}</p>
                <p className="property-info">{property.bedrooms} bedrooms</p>
                <div className="card-owner">
                  <img src={property.owner.avatar} alt={property.owner.name} className="card-owner-avatar" />
                  <span className="card-owner-name">{property.owner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Results View with sticky search */}
      {view === 'results' && (
        <div>
          <div className="sticky-search">
            <div className="container" style={{padding: '20px 40px'}}>
              <div className="search-fields" style={{gridTemplateColumns: '1fr 1fr auto', maxWidth: '800px'}}>
                <div className="search-field">
                  <label>Check in</label>
                  <input 
                    type="date" 
                    value={searchDates.start}
                    onChange={(e) => setSearchDates({...searchDates, start: e.target.value})}
                  />
                </div>
                <div className="search-field">
                  <label>Check out</label>
                  <input 
                    type="date"
                    value={searchDates.end}
                    onChange={(e) => setSearchDates({...searchDates, end: e.target.value})}
                  />
                </div>
                <button className="search-button" style={{marginTop: '18px'}}>
                  Update
                </button>
              </div>
            </div>
          </div>

          <div className="container">
            <h2 style={{marginBottom: '32px', fontSize: '32px', fontWeight: 400}}>
              Available homes ({matchingProperties.filter(p => p.matchingDate).length} matches)
            </h2>
            <div className="properties-grid">
              {matchingProperties.map(property => (
                <div 
                  key={property.id} 
                  className="property-card"
                  onClick={() => openProperty(property)}
                >
                  <img src={property.image} alt={property.name} className="property-image" />
                  <div className="connection-badge">
                    {property.owner.connection === 'friend' ? (
                      <><Icon name="check_circle" /> Friend</>
                    ) : (
                      <><Icon name="people" /> {property.owner.mutualFriends} mutual friends</>
                    )}
                  </div>
                  {property.isPerfectMatch && (
                    <div className="perfect-match-badge">
                      <Icon name="star" /> Perfect match!
                    </div>
                  )}
                  <h3 className="property-title">{property.name}</h3>
                  <p className="property-location">{property.location}</p>
                  <p className="property-info">{property.bedrooms} bedrooms</p>
                  {property.matchingDate ? (
                    <div className="availability-tag">
                      <Icon name="event_available" /> 
                      Available {formatDateRange(property.matchingDate.start, property.matchingDate.end)}
                    </div>
                  ) : (
                    <div className="availability-tag no-match">
                      <Icon name="event_busy" /> Not available your dates
                    </div>
                  )}
                  <div className="card-owner">
                    <img src={property.owner.avatar} alt={property.owner.name} className="card-owner-avatar" />
                    <span className="card-owner-name">{property.owner.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Property Detail View with Calendar */}
      {view === 'detail' && selectedProperty && (
        <div className="container">
          <button 
            onClick={() => setView('results')}
            style={{marginBottom: '20px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '4px'}}
          >
            <Icon name="arrow_back" /> Back to results
          </button>
          
          <div className="property-detail">
            {/* Photo Grid */}
            {selectedProperty.images && selectedProperty.images.length > 1 ? (
              <div className="photo-grid" onClick={() => setShowGallery(true)}>
                <div className="photo-grid-item photo-grid-main">
                  <img src={selectedProperty.images[0]} alt={selectedProperty.name} />
                </div>
                <div className="photo-grid-item">
                  <img src={selectedProperty.images[1]} alt={selectedProperty.name} />
                </div>
                <div className="photo-grid-item">
                  <img src={selectedProperty.images[2]} alt={selectedProperty.name} />
                </div>
                <div className="photo-grid-item">
                  <img src={selectedProperty.images[3] || selectedProperty.images[1]} alt={selectedProperty.name} />
                </div>
                <div className="photo-grid-item">
                  <img src={selectedProperty.images[4] || selectedProperty.images[2]} alt={selectedProperty.name} />
                </div>
                <button className="show-all-photos-btn" onClick={(e) => { e.stopPropagation(); setShowGallery(true); }}>
                  <Icon name="grid_view" />
                  Show all photos
                </button>
              </div>
            ) : (
              <img src={selectedProperty.image} alt={selectedProperty.name} className="detail-image" />
            )}
            
            <div className="detail-header">
              <h1 className="detail-title">{selectedProperty.name}</h1>
              <p className="detail-location">
                <Icon name="place" /> {selectedProperty.location}
              </p>
              <div className="connection-badge" style={{marginTop: '12px', display: 'inline-flex'}}>
                {selectedProperty.owner.connection === 'friend' ? (
                  <><Icon name="check_circle" /> Friend</>
                ) : (
                  <><Icon name="people" /> {selectedProperty.owner.mutualFriends} mutual friends</>
                )}
              </div>
            </div>

            {/* Calendar Section */}
            <div className="detail-section calendar-section">
              <h3><Icon name="calendar_month" /> Availability</h3>
              <div className="availability-calendar">
                {searchDates.start && searchDates.end && (
                  <div className="your-dates">
                    <Icon name="event" />
                    <strong>Your dates:</strong> {formatDateRange(searchDates.start, searchDates.end)}
                  </div>
                )}
                <div className="available-dates-list">
                  {selectedProperty.availableDates.map((dates, i) => {
                    const overlaps = searchDates.start && searchDates.end && 
                      datesOverlap(searchDates.start, searchDates.end, dates.start, dates.end);
                    return (
                      <div key={i} className={`available-date-item ${overlaps ? 'match' : ''}`}>
                        <Icon name={overlaps ? "check_circle" : "event_available"} />
                        <span>{formatDateRange(dates.start, dates.end)}</span>
                        {overlaps && <span className="match-label">Matches your dates!</span>}
                      </div>
                    );
                  })}
                </div>
                <div className="calendar-note">
                  <Icon name="info" />
                  <span>Dates shown include Easter (Apr 18-21) and Christmas (Dec 22-29) availability</span>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h3>About this home</h3>
              <p>{selectedProperty.description}</p>
            </div>

            <div className="detail-section">
              <h3>Amenities</h3>
              <div className="amenities-list">
                {selectedProperty.amenities.map((amenity, i) => (
                  <div key={i} className="amenity-item">
                    <Icon name="check" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h3>Property details</h3>
              <p><Icon name="bed" /> {selectedProperty.bedrooms} bedrooms</p>
            </div>

            {/* Neighborhood */}
            {selectedProperty.neighborhood && (
              <div className="detail-section area-guide">
                <h3><Icon name="location_city" /> The Neighborhood</h3>
                <p>{selectedProperty.neighborhood.description}</p>
                <div className="nearby-places">
                  {selectedProperty.neighborhood.nearby.map((place, i) => (
                    <div key={i} className="nearby-item">
                      <Icon name={place.icon} />
                      <div className="nearby-info">
                        <h5>{place.name}</h5>
                        <p>{place.distance}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="map-placeholder">
                  <div className="map-content">
                    <Icon name="map" />
                    <p>{selectedProperty.location}</p>
                    <small>Exact address shared after booking confirmation</small>
                  </div>
                </div>
              </div>
            )}

            {/* Host */}
            <div className="detail-section">
              <h3>Your host</h3>
              <div className="owner-info" onClick={() => openUserPanel(selectedProperty.owner)}>
                <img src={selectedProperty.owner.avatar} alt={selectedProperty.owner.name} className="owner-avatar" />
                <div className="owner-details">
                  <h4>{selectedProperty.owner.name}</h4>
                  <p><Icon name="place" /> {selectedProperty.owner.location}</p>
                  {selectedProperty.owner.connection === 'friend' ? (
                    <span className="connection-label"><Icon name="check_circle" /> Friend</span>
                  ) : (
                    <span className="connection-label"><Icon name="people" /> {selectedProperty.owner.mutualFriends} mutual friends</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* User Panel */}
      {selectedUser && (
        <>
          <div className="panel-overlay" onClick={closeUserPanel}></div>
          <div className="user-panel">
            <button className="panel-close" onClick={closeUserPanel}>×</button>
            
            <div className="panel-header">
              <img src={selectedUser.avatar} alt={selectedUser.name} className="panel-avatar" />
              <h2 className="panel-name">{selectedUser.name}</h2>
              <p className="panel-location">
                <Icon name="place" /> {selectedUser.location}
              </p>
            </div>

            <div className="panel-content">
              {/* My Stats */}
              {selectedUser.properties && (
                <div className="my-profile-section">
                  <h4>Your Stats</h4>
                  <div className="my-profile-stats">
                    <div className="profile-stat">
                      <div className="profile-stat-number">{selectedUser.properties}</div>
                      <div className="profile-stat-label">Properties</div>
                    </div>
                    <div className="profile-stat">
                      <div className="profile-stat-number">{selectedUser.swaps}</div>
                      <div className="profile-stat-label">Swaps</div>
                    </div>
                    <div className="profile-stat">
                      <div className="profile-stat-number">{selectedUser.reviews}</div>
                      <div className="profile-stat-label">Reviews</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Friends Circle */}
              {selectedUser.friends && (
                <div className="panel-section">
                  <h3><Icon name="people" /> Your Circle ({selectedUser.friends} friends)</h3>
                  <div className="friends-grid">
                    {friends.map(friend => (
                      <div key={friend.id} className="friend-avatar-item">
                        <img src={friend.avatar} alt={friend.name} />
                        <span>{friend.name.split(' ')[0]}</span>
                      </div>
                    ))}
                  </div>
                  <button 
                    className="invite-friends-btn"
                    onClick={() => setShowInvite(true)}
                  >
                    <Icon name="person_add" /> Invite more friends
                  </button>
                </div>
              )}

              <div className="panel-section">
                <h3>About</h3>
                <p>{selectedUser.bio}</p>
              </div>

              <div className="panel-section">
                <h3>Contact</h3>
                <div className="contact-info">
                  <a href={`mailto:${selectedUser.email}`} className="contact-link">
                    <Icon name="email" /> {selectedUser.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Invite Modal */}
      {showInvite && (
        <>
          <div className="panel-overlay" onClick={() => setShowInvite(false)}></div>
          <div className="invite-modal">
            <button className="panel-close" onClick={() => setShowInvite(false)}>×</button>
            <h2><Icon name="person_add" /> Invite friends to Hearth</h2>
            <p>Invite friends to join your private circle. Only people you invite can see your listing.</p>
            <div className="invite-field">
              <label>Email addresses (comma separated)</label>
              <textarea placeholder="friend1@email.com, friend2@email.com"></textarea>
            </div>
            <div className="invite-link">
              <label>Or share this link</label>
              <input type="text" value="hearth-home.netlify.app/join/your-code" readOnly />
              <button className="copy-btn"><Icon name="content_copy" /> Copy</button>
            </div>
            <button className="search-button" style={{marginTop: '16px'}}>
              <Icon name="send" /> Send invites
            </button>
          </div>
        </>
      )}

      {/* Photo Gallery Modal */}
      {showGallery && selectedProperty && selectedProperty.images && (
        <div className="photo-gallery-modal">
          <div className="gallery-header">
            <button className="gallery-close-btn" onClick={() => setShowGallery(false)}>
              <Icon name="close" />
            </button>
            <div className="gallery-title">{selectedProperty.name}</div>
          </div>
          <div className="gallery-content">
            <div className="gallery-grid">
              {selectedProperty.images.map((img, i) => (
                <div key={i} className="gallery-image-item">
                  <img src={img} alt={`${selectedProperty.name} - Photo ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      {showAuth && (
        <>
          <div className="panel-overlay" onClick={() => setShowAuth(false)}></div>
          <div className="auth-modal">
            <button className="panel-close" onClick={() => setShowAuth(false)}>×</button>
            
            <h2>{authTab === 'login' ? 'Welcome back' : 'Join Hearth'}</h2>
            <p className="subtitle">
              {authTab === 'login' 
                ? 'Log in to access your private circle' 
                : 'Create an account to start swapping homes with friends'}
            </p>

            <div className="auth-tabs">
              <button 
                className={`auth-tab ${authTab === 'login' ? 'active' : ''}`}
                onClick={() => setAuthTab('login')}
              >
                Log in
              </button>
              <button 
                className={`auth-tab ${authTab === 'signup' ? 'active' : ''}`}
                onClick={() => setAuthTab('signup')}
              >
                Sign up
              </button>
            </div>

            <form className="auth-form" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); setShowAuth(false); }}>
              {authTab === 'signup' && (
                <div className="auth-field">
                  <label>Full name</label>
                  <input type="text" placeholder="Enter your full name" required />
                </div>
              )}
              
              <div className="auth-field">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              
              <div className="auth-field">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" required />
              </div>

              <button type="submit" className="auth-submit">
                {authTab === 'login' ? 'Log in' : 'Create account'}
              </button>
            </form>

            <div className="auth-divider">or continue with</div>

            <button className="social-auth-btn" onClick={() => { setIsLoggedIn(true); setShowAuth(false); }}>
              <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google
            </button>

            <button className="social-auth-btn" onClick={() => { setIsLoggedIn(true); setShowAuth(false); }}>
              <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </button>

            <div className="auth-footer">
              {authTab === 'login' ? (
                <>
                  Don't have an account? <a onClick={() => setAuthTab('signup')}>Sign up</a>
                </>
              ) : (
                <>
                  Already have an account? <a onClick={() => setAuthTab('login')}>Log in</a>
                </>
              )}
              <br />
              <br />
              By continuing, you agree to Hearth's Terms of Service and Privacy Policy.
            </div>
          </div>
        </>
      )}
    </div>
  );
}

ReactDOM.render(<Hearth />, document.getElementById('root'));
