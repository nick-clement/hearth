const { useState } = React;

// Simple SVG icons as components
const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const StarIcon = ({ fill }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill={fill ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

function Hearth() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedDates, setSelectedDates] = useState({ start: '2026-02-14', end: '2026-02-21' });
  const [bookmarked, setBookmarked] = useState(new Set([2]));
  const [selectedUser, setSelectedUser] = useState(null);

  const myProperty = {
    id: 0,
    name: "Cotswold Cottage",
    location: "Chipping Norton, Oxfordshire",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
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

  const matches = [
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
      description: "Light-filled coastal retreat with direct beach access"
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
      description: "Georgian elegance in the heart of New Town"
    }
  ];

  const allProperties = [
    ...matches,
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
      description: "Mountain views and woodland walks"
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
      description: "Industrial chic in creative East London"
    }
  ];

  const toggleBookmark = (id) => {
    const newBookmarked = new Set(bookmarked);
    if (newBookmarked.has(id)) {
      newBookmarked.delete(id);
    } else {
      newBookmarked.add(id);
    }
    setBookmarked(newBookmarked);
  };

  const MatchCard = ({ match, isMatch = true }) => (
    <article className="match-card" style={{ animationDelay: `${match.id * 100}ms` }}>
      <div className="card-image-container">
        <img src={match.image} alt={match.property} className="card-image" />
        <button
          onClick={() => toggleBookmark(match.id)}
          className={`bookmark-btn ${bookmarked.has(match.id) ? 'active' : ''}`}
        >
          <StarIcon fill={bookmarked.has(match.id)} />
        </button>
        {isMatch && (
          <div className="match-badge">
            <CheckIcon />
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
              onClick={() => setSelectedUser(match.userId)}
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
          
          <button className="view-btn">
            {isMatch ? 'Propose Swap' : 'View Details'}
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

  return (
    <div className="app-wrapper">
      <header className="site-header">
        <div className="header-inner">
          <div className="brand">
            <HomeIcon />
            <h1 className="brand-name">Hearth</h1>
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
          <div>
            <div className="page-header">
              <h2 className="page-title">Your Property</h2>
              <p className="page-subtitle">Welcome guide</p>
            </div>
            <p style={{textAlign: 'center', color: '#666'}}>Property details coming soon...</p>
          </div>
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
    </div>
  );
}

ReactDOM.render(<Hearth />, document.getElementById('root'));
