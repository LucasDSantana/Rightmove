import React from 'react';
import SearchHero from '../components/SearchHero';
import { ChevronRight, Home as HomeIcon, TrendingUp, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  { title: "Free home valuation", desc: "Find out how much your home's worth from an expert", icon: <HomeIcon size={24}/>, link: "/valuation" },
  { title: "Property News", desc: "Could the new first-time buyer scheme help you get on the ladder?", icon: <TrendingUp size={24}/>, link: "/news" },
  { title: "Overseas property", desc: "Search homes for sale overseas", icon: <MapPin size={24}/>, link: "/overseas" },
];

export default function Home() {
  return (
    <div className="home-page">
      <SearchHero />
      <section className="featured-section">
        <div className="featured-container">
          <h3 className="section-title">Explore more with Rightmove</h3>
          <div className="cards-grid">
            {cards.map((card, i) => (
              <motion.div 
                key={i} 
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="card-icon">{card.icon}</div>
                <h4 className="card-title">{card.title}</h4>
                <p className="card-desc">{card.desc}</p>
                <a href={card.link} className="card-link">
                  Learn more <ChevronRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
