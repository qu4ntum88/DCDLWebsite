import React, { useState, useEffect } from 'react';

// Main App component
const App = () => {
  // State for mobile navigation visibility
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Toggle mobile navigation
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-inter">
      {/* Navbar Component */}
      <Navbar isNavOpen={isNavOpen} toggleNav={toggleNav} />

      {/* Main content area */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Game Features Section */}
        <GameFeaturesSection />

        {/* Hero Grid Section - NEW */}
        <HeroGridSection />

        {/* Team Section */}
        <TeamSection />

        {/* News Section */}
        <NewsSection />
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

// Navbar Component
const Navbar = ({ isNavOpen, toggleNav }) => {
  return (
    <nav className="fixed w-full bg-gray-950 bg-opacity-80 backdrop-blur-sm z-50 shadow-lg py-4 px-6 md:px-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Site Title */}
        <a href="#" className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition-colors duration-300">
          Mystic Mayhem
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="#home" text="Home" />
          <NavLink href="#about" text="About" />
          <NavLink href="#features" text="Features" />
          <NavLink href="#heroes" text="Heroes" /> {/* Added Heroes link */}
          <NavLink href="#team" text="Team" />
          <NavLink href="#news" text="News" />
          <NavLink href="#contact" text="Contact" />
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleNav} className="md:hidden text-gray-100 focus:outline-none">
          {isNavOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isNavOpen ? 'block' : 'hidden'} mt-4`}>
        <div className="flex flex-col space-y-4">
          <NavLink href="#home" text="Home" onClick={toggleNav} />
          <NavLink href="#about" text="About" onClick={toggleNav} />
          <NavLink href="#features" text="Features" onClick={toggleNav} />
          <NavLink href="#heroes" text="Heroes" onClick={toggleNav} /> {/* Added Heroes link */}
          <NavLink href="#team" text="Team" onClick={toggleNav} />
          <NavLink href="#news" text="News" onClick={toggleNav} />
          <NavLink href="#contact" text="Contact" onClick={toggleNav} />
        </div>
      </div>
    </nav>
  );
};

// Reusable Navigation Link Component
const NavLink = ({ href, text, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-lg font-medium rounded-md px-3 py-2"
  >
    {text}
  </a>
);

// Hero Section Component
const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-30"
          src="https://assets.mixkit.co/videos/preview/mixkit-fire-explosion-in-slow-motion-1191-large.mp4" // Placeholder video
          poster="https://placehold.co/1920x1080/1a202c/ffffff?text=Hero+Background" // Placeholder image
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1920x1080/1a202c/ffffff?text=Hero+Background"; }}
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg animate-fade-in-up">
          Unleash the Mayhem
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 animate-fade-in-up delay-200">
          Dive into a world of epic battles, mystical powers, and endless adventure.
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in-up delay-400">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Play Now
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-12">About Mystic Mayhem</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Mystic Mayhem is a groundbreaking multiplayer online battle arena (MOBA) game that combines fast-paced action with deep strategic gameplay. Choose from a diverse roster of heroes, each with unique abilities and playstyles, and join forces with your teammates to dominate the battlefield.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Experience stunning graphics, immersive sound design, and a vibrant community. Whether you're a seasoned MOBA veteran or new to the genre, Mystic Mayhem offers an unparalleled gaming experience.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://placehold.co/600x400/2d3748/ffffff?text=Game+Screenshot"
              alt="Game Screenshot"
              className="w-full h-auto rounded-lg"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/2d3748/ffffff?text=Game+Screenshot"; }}
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Game Features Section Component
const GameFeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-purple-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "Dynamic Combat",
      description: "Engage in thrilling, real-time battles with intuitive controls and impactful abilities.",
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857M9 20v-2m3 2v-2m-3 2H9m3 0h3"></path>
        </svg>
      ),
      title: "Diverse Heroes",
      description: "Choose from a growing roster of unique heroes, each with distinct powers and lore.",
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
      ),
      title: "Strategic Depth",
      description: "Master complex strategies, coordinate with your team, and outwit your opponents.",
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      ),
      title: "Stunning Graphics",
      description: "Immerse yourself in beautifully rendered environments and detailed character models.",
    },
  ];

  return (
    <section id="features" className="py-20 px-6 md:px-12 bg-gray-950">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-12">Game Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              {feature.icon}
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// NEW: Hero Grid Section Component
const HeroGridSection = () => {
  const initialHeroes = [
    {
      id: 1,
      name: "Aethelred",
      role: "Tank",
      attribute: "Strength",
      difficulty: "Easy",
      description: "A stoic guardian, Aethelred leads the charge, absorbing damage and protecting allies with his impenetrable shield.",
      image: "https://placehold.co/200x250/2d3748/ffffff?text=Hero+1",
    },
    {
      id: 2,
      name: "Lyra",
      role: "Mage",
      attribute: "Intelligence",
      difficulty: "Medium",
      description: "Lyra weaves arcane energies, unleashing devastating spells and controlling the battlefield with her mystical prowess.",
      image: "https://placehold.co/200x250/2d3748/ffffff?text=Hero+2",
    },
    {
      id: 3,
      name: "Kaelen",
      role: "Assassin",
      attribute: "Agility",
      difficulty: "Hard",
      description: "A shadowy blade in the night, Kaelen strikes from stealth, eliminating key targets before vanishing into the darkness.",
      image: "https://placehold.co/200x250/2d3748/ffffff?text=Hero+3",
    },
    {
      id: 4,
      name: "Seraphina",
      role: "Support",
      attribute: "Intelligence",
      difficulty: "Medium",
      description: "Seraphina's blessings heal and empower her allies, turning the tide of battle with her divine interventions.",
      image: "https://placehold.co/200x250/2d3748/ffffff?text=Hero+4",
    },
    {
      id: 5,
      name: "Ragnar",
      role: "Fighter",
      attribute: "Strength",
      difficulty: "Medium",
      description: "A berserker of the northern wastes, Ragnar charges into the fray, cleaving through enemies with raw power.",
      image: "https://placehold.co/200x250/2d3748/ffffff?text=Hero+5",
    },
    {
      id: 6,
      name: "Zephyr",
      role: "Marksman",
      attribute: "Agility",
      difficulty: "Hard",
      description: "With unparalleled precision, Zephyr rains down arrows from afar, a deadly force on the battlefield.",
      image: "https://placehold.co/200x250/2d3748/ffffff?text=Hero+6",
    },
    {
      id: 7,
      name: "Morgoth",
      role: "Tank",
      attribute: "Strength",
      difficulty: "Medium",
      description: "A monstrous entity of the deep, Morgoth crushes foes with his immense size and dark magic.",
      image: "https://placehold.co/200x250/2d3748/ffffff?text=Hero+7",
    },
    {
      id: 8,
      name: "Elara",
      role: "Mage",
      attribute: "Intelligence",
      difficulty: "Easy",
      description: "Elara commands the elements, conjuring storms and blizzards to control and devastate her enemies.",
      image: "https://placehold.co/200x250/2d3748/ffffff?text=Hero+8",
    },
  ];

  const [heroes, setHeroes] = useState(initialHeroes);
  const [sortBy, setSortBy] = useState('name'); // Default sort by name
  const [hoveredHero, setHoveredHero] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Function to sort heroes
  useEffect(() => {
    const sortedHeroes = [...initialHeroes].sort((a, b) => {
      if (sortBy === 'name' || sortBy === 'role' || sortBy === 'attribute') {
        return a[sortBy].localeCompare(b[sortBy]);
      } else if (sortBy === 'difficulty') {
        const difficultyOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      }
      return 0;
    });
    setHeroes(sortedHeroes);
  }, [sortBy]); // Re-sort when sortBy changes

  const handleMouseEnter = (hero, e) => {
    setHoveredHero(hero);
    // Position tooltip near the cursor
    setTooltipPosition({ x: e.clientX + 15, y: e.clientY + 15 });
  };

  const handleMouseLeave = () => {
    setHoveredHero(null);
  };

  return (
    <section id="heroes" className="py-20 px-6 md:px-12 bg-gray-900 relative">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-12">Our Heroes</h2>

        {/* Sort Controls */}
        <div className="mb-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <label htmlFor="sort-select" className="text-gray-300 text-lg">Sort by:</label>
          <select
            id="sort-select"
            className="bg-gray-800 border border-purple-600 text-gray-100 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="role">Role</option>
            <option value="attribute">Attribute</option>
            <option value="difficulty">Difficulty</option>
          </select>
        </div>

        {/* Heroes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {heroes.map((hero) => (
            <div
              key={hero.id}
              className="relative bg-gray-800 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden"
              onMouseEnter={(e) => handleMouseEnter(hero, e)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={hero.image}
                alt={hero.name}
                className="w-full h-64 object-cover rounded-md mb-4 border-2 border-purple-600"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x250/2d3748/ffffff?text=Hero"; }}
              />
              <h3 className="text-2xl font-semibold text-white mb-2">{hero.name}</h3>
              <p className="text-purple-300 text-lg">{hero.role}</p>
              <p className="text-gray-400 text-sm mt-2">Attribute: {hero.attribute} | Difficulty: {hero.difficulty}</p>

              {/* Tooltip */}
              {hoveredHero && hoveredHero.id === hero.id && (
                <div
                  className="absolute z-50 bg-gray-700 text-white p-4 rounded-lg shadow-2xl border border-purple-500 max-w-xs text-left"
                  style={{ left: tooltipPosition.x, top: tooltipPosition.y, transform: 'translate(-50%, -100%)' }}
                >
                  <h4 className="font-bold text-purple-300 mb-2">{hoveredHero.name} ({hoveredHero.role})</h4>
                  <p className="text-sm text-gray-200 mb-2">{hoveredHero.description}</p>
                  <p className="text-xs text-gray-400">Attribute: {hoveredHero.attribute} | Difficulty: {hoveredHero.difficulty}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// Team Section Component
const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "Lead Developer",
      image: "https://placehold.co/150x150/4a5568/ffffff?text=Alice",
    },
    {
      name: "Bob Williams",
      role: "Game Designer",
      image: "https://placehold.co/150x150/4a5568/ffffff?text=Bob",
    },
    {
      name: "Charlie Brown",
      role: "Art Director",
      image: "https://placehold.co/150x150/4a5568/ffffff?text=Charlie",
    },
    {
      name: "Diana Prince",
      role: "Community Manager",
      image: "https://placehold.co/150x150/4a5568/ffffff?text=Diana",
    },
  ];

  return (
    <section id="team" className="py-20 px-6 md:px-12 bg-gray-950">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-purple-500"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/4a5568/ffffff?text=Team"; }}
              />
              <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-purple-300 text-lg">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// News Section Component
const NewsSection = () => {
  const newsPosts = [
    {
      title: "Major Content Update Announced!",
      date: "July 25, 2025",
      summary: "Get ready for new heroes, maps, and game modes coming next month!",
      image: "https://placehold.co/300x200/2d3748/ffffff?text=News+1",
    },
    {
      title: "Esports Tournament Kicks Off",
      date: "July 20, 2025",
      summary: "Watch the best teams compete for glory and massive prizes.",
      image: "https://placehold.co/300x200/2d3748/ffffff?text=News+2",
    },
    {
      title: "Patch Notes v1.2 Released",
      date: "July 15, 2025",
      summary: "Balance changes, bug fixes, and quality-of-life improvements are here.",
      image: "https://placehold.co/300x200/2d3748/ffffff?text=News+3",
    },
  ];

  return (
    <section id="news" className="py-20 px-6 md:px-12 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-400 mb-12">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsPosts.map((post, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x200/2d3748/ffffff?text=News"; }}
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-white mb-2">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{post.date}</p>
                <p className="text-gray-300">{post.summary}</p>
                <a href="#" className="mt-4 inline-block text-purple-400 hover:text-purple-300 font-semibold">
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 py-10 px-6 md:px-12 text-center text-gray-400">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition-colors duration-300">
              Mystic Mayhem
            </a>
            <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Mystic Mayhem. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <SocialLink href="#" iconPath="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> {/* Facebook */}
            <SocialLink href="#" iconPath="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /> {/* Twitter */}
            <SocialLink href="#" iconPath="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM19.5 8.25V5.75A2.25 2.25 0 0017.25 3.5h-10.5A2.25 2.25 0 004.5 5.75v10.5A2.25 2.25 0 006.75 18.5h10.5A2.25 2.25 0 0019.5 16.25V13.75" /> {/* Instagram */}
            <SocialLink href="#" iconPath="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /> {/* Discord */}
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6">
          <p className="text-sm">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a> |
            <a href="#" className="ml-2 hover:text-white transition-colors duration-300">Terms of Service</a> |
            <a href="#" className="ml-2 hover:text-white transition-colors duration-300">Cookie Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

// Reusable Social Link Component
const SocialLink = ({ href, iconPath }) => (
  <a href={href} className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d={iconPath}></path>
    </svg>
  </a>
);

export default App;

