import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Youtube, Compass, Gamepad2 } from 'lucide-react';

// --- Data for your mods ---
const portfolioData = {
  beamng: {
    cars: [
      { title: 'Honda Civic Street/Drag Build', img: 'https://i.imgur.com/1O0PPKV.jpeg' },
      { title: 'Civic Engine Swaps', img: 'https://i.imgur.com/X1d8Jkh.png' },
      { title: 'Customizable Civic', img: 'https://i.imgur.com/zGqcyLt.png' },
      { title: 'Civic Tuning Options', img: 'https://i.imgur.com/cXRln0l.png' },
      { title: 'Detailed Civic Model', img: 'https://i.imgur.com/D3xO0LF.png' },
      { title: 'Civic Drag Setup', img: 'https://i.imgur.com/OLwJWCY.png' },
      { title: 'Civic Interior', img: 'https://i.imgur.com/B78ZAnl.png' },
      { title: 'Civic Widebody', img: 'https://i.imgur.com/axNUiy2.png' },
      { title: 'Honda Showcase', img: 'https://i.imgur.com/QzxHmHh.png' },
    ],
    tracks: [
      { title: 'Mountain Pass', img: 'https://i.imgur.com/lCeeMFt.jpeg' },
      { title: 'Coastal Highway', img: 'https://i.imgur.com/Pf9zrO3.jpeg' },
      { title: 'Industrial Racetrack', img: 'https://i.imgur.com/oWQ456J.jpeg' },
      { title: 'Forest Rally', img: 'https://i.imgur.com/1hzD8dZ.jpeg' },
      { title: 'City Circuit', img: 'https://i.imgur.com/Z2Vkl7x.jpeg' },
    ],
  },
  assettocorsa: {
    cars: [
      { title: 'Race Car 1', img: 'https://i.imgur.com/aOdwvtf.jpeg' },
      { title: 'Race Car 2', img: 'https://i.imgur.com/A6rfsAf.jpeg' },
      { title: 'Race Car 3', img: 'https://i.imgur.com/fubGsxS.jpeg' },
      { title: 'Race Car 4', img: 'https://i.imgur.com/hlrWIJa.jpeg' },
      { title: 'Race Car 5', img: 'https://i.imgur.com/iVRtxLs.jpeg' },
      { title: 'Race Car 6', img: 'https://i.imgur.com/hhz1XiE.jpeg' },
    ],
    tracks: [
      { title: 'Orlando Speedworld', img: 'https://i.imgur.com/7EQWX4J.jpeg' },
      { title: 'Salinas Speedway PR', img: 'https://i.imgur.com/bJFsug0.jpeg' },
      { title: 'Rio Drag Park (Sand Drag)', img: 'https://i.imgur.com/zMgndYy.jpeg' },
      { title: 'Rio Drag Park Perspective', img: 'https://i.imgur.com/y3z4fCM.png' },
      { title: 'Rio Drag Park Action', img: 'https://i.imgur.com/dYbhn55.jpeg' },
      { title: 'Arecibo Motorsport', img: 'https://i.imgur.com/l7A91VG.jpeg' },
      { title: 'Arecibo Motorsport Pits', img: 'https://i.imgur.com/PXtZg0I.jpeg' },
      { title: 'Aibonito, Puerto Rico', img: 'https://i.imgur.com/7p6azAe.jpeg' },
      { title: 'Aibonito Hill Climb', img: 'https://i.imgur.com/vLBcJKy.jpeg' },
    ],
  },
};


// --- Main App Component ---
export default function App() {
  const [activeGame, setActiveGame] = useState('beamng');
  const [activeCategory, setActiveCategory] = useState('cars');

  const content = portfolioData[activeGame]?.[activeCategory] || [];

  return (
    <div className="bg-[#101010] text-gray-300 font-sans leading-relaxed">
      <Header />
      <main>
        <HeroSection />
        
        <section id="portfolio" className="py-20 md:py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Featured Builds</h2>

            {/* --- Game and Category Navigation --- */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 mb-12">
              <div className="flex items-center gap-6 p-2 bg-[#181818] rounded-full">
                <TabButton name="BeamNG" icon={<Gamepad2 size={20}/>} isActive={activeGame === 'beamng'} onClick={() => { setActiveGame('beamng'); setActiveCategory('cars'); }} />
                <TabButton name="Assetto Corsa" icon={<Gamepad2 size={20}/>} isActive={activeGame === 'assettocorsa'} onClick={() => { setActiveGame('assettocorsa'); setActiveCategory('cars'); }} />
              </div>
               <div className="w-24 h-px md:w-px md:h-8 bg-gray-700"></div>
              <div className="flex items-center gap-6 p-2 bg-[#181818] rounded-full">
                <TabButton name="Cars" icon={<Compass size={20}/>} isActive={activeCategory === 'cars'} onClick={() => setActiveCategory('cars')} />
                <TabButton name="Tracks" icon={<Compass size={20}/>} isActive={activeCategory === 'tracks'} onClick={() => setActiveCategory('tracks')} />
              </div>
            </div>

            {/* --- Portfolio Grid --- */}
            <PortfolioGrid items={content} />
          </div>
        </section>

        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}


// --- Component: Header ---
const Header = () => (
  <header className="fixed top-0 left-0 w-full z-50 p-6 md:p-8">
    <nav className="max-w-7xl mx-auto flex justify-between items-center">
      <a href="#home">
        <img src="https://i.imgur.com/BlhVawC.png" alt="D&O Racing Logo" className="h-10 md:h-12 w-auto" />
      </a>
      <div className="hidden md:flex items-center gap-8">
        <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Mods</a>
        <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
        <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
      </div>
    </nav>
  </header>
);

// --- Component: Hero Section ---
const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden bg-grid">
    <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent"></div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="z-10 px-4"
    >
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
        Driving Passion,<br />One Mod at a Time.
      </h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
        High-quality, customizable vehicle and track mods for BeamNG & Assetto Corsa.
      </p>
    </motion.div>
  </section>
);


// --- Component: Tab Button ---
const TabButton = ({ name, icon, isActive, onClick }) => (
  <button onClick={onClick} className={`relative px-4 py-2 text-sm md:text-base font-medium transition-colors rounded-full flex items-center gap-2 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
    {icon}
    <span>{name}</span>
    {isActive && <motion.div layoutId="activePill" className="absolute inset-0 bg-white/10 rounded-full" style={{ borderRadius: 9999 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} />}
  </button>
);


// --- Component: Portfolio Grid ---
const PortfolioGrid = ({ items }) => (
  <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
    <AnimatePresence>
      {items.map((item, index) => (
        <motion.a
          key={`${item.title}-${index}`}
          href={item.img}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block aspect-square w-full h-full overflow-hidden rounded-lg"
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
        >
          <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x600/181818/333333?text=Image+Not+Found'; }}/>
          <div className="absolute inset-0 bg-black/70 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
          </div>
        </motion.a>
      ))}
    </AnimatePresence>
  </motion.div>
);

// --- Component: About Section ---
const AboutSection = () => (
    <section id="about" className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Creator</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
                I'm Orlando, a passionate modder dedicated to creating immersive and highly-detailed content for the sim racing community. With a focus on quality and customization, I bring virtual driving experiences to life in BeamNG and Assetto Corsa.
            </p>
            <a href="https://www.patreon.com/OrlandoEdits" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors">
                Support on Patreon
            </a>
        </div>
    </section>
);


// --- Component: Contact Section ---
const ContactSection = () => (
    <section id="contact" className="py-20 md:py-32 text-center bg-grid-light">
         <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
                Join the community, follow for updates, or reach out with a project idea.
            </p>
            <div className="flex justify-center items-center gap-4 md:gap-6">
                 <SocialLink href="https://www.patreon.com/OrlandoEdits" icon={<svg role="img" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Patreon</title><path d="M15.22,6.23c-1.1,0-2,.9-2,2s.9,2,2,2,2-.9,2-2-.9-2-2-2m-3.7,15.27H8.32V8.5H11.52v13Z"/></svg>} name="Patreon" />
                <SocialLink href="https://discord.gg/efQbWaKC" icon={<svg role="img" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317,4.369a19.789,19.789,0,0,0-4.885-1.515.074.074,0,0,0-.079.037,13.8,13.8,0,0,0-3.3,4.636,11.833,11.833,0,0,0-2.224,0,13.68,13.68,0,0,0-3.3-4.636.074.074,0,0,0-.079-.037A19.786,19.786,0,0,0,3.683,4.369a.076.076,0,0,0-.041.066,18.044,18.044,0,0,0-1.021,5.65,16.2,16.2,0,0,0,4.985,9.45.076.076,0,0,0,.087.015,19.82,19.82,0,0,0,7.048,0,.076.076,0,0,0,.087-.015,16.2,16.2,0,0,0,4.985-9.45,18.044,18.044,0,0,0-1.021-5.65.076.076,0,0,0-.041-.066Zm-9.13,11.332a2.312,2.312,0,0,1-2.315-2.312,2.312,2.312,0,0,1,2.315-2.312,2.315,2.315,0,0,1,0,4.624Zm4.918,0a2.312,2.312,0,0,1-2.315-2.312,2.312,2.312,0,0,1,2.315-2.312,2.315,2.315,0,0,1,0,4.624Z"/></svg>} name="Discord" />
                <SocialLink href="https://www.instagram.com/domods21/" icon={<Instagram size={24}/>} name="Instagram" />
                <SocialLink href="https://www.youtube.com/@xOrlandoPrVLTx/" icon={<Youtube size={24}/>} name="YouTube" />
            </div>
        </div>
    </section>
);


const SocialLink = ({ href, icon, name }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" title={name} className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300">
        {icon}
    </a>
)

// --- Component: Footer ---
const Footer = () => (
    <footer className="text-center py-8 px-4">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} D&O Racing. All Rights Reserved.</p>
    </footer>
);
