import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Bath, Move } from 'lucide-react';

const mockProperties = [
  {
    id: 1,
    title: "4 Bedroom Detached House",
    address: "Oakwood Drive, London",
    price: "£850,000",
    beds: 4, baths: 3, sqft: "2,100",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    agent: "Rightmove Estates"
  },
  {
    id: 2,
    title: "2 Bedroom Luxury Apartment",
    address: "Riverside View, Manchester",
    price: "£320,000",
    beds: 2, baths: 2, sqft: "950",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    agent: "City Living"
  },
  {
    id: 3,
    title: "3 Bedroom Terraced House",
    address: "Maple Street, Edinburgh",
    price: "£450,000",
    beds: 3, baths: 1, sqft: "1,200",
    img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    agent: "Northern Properties"
  }
];

export default function PropertyListingPage({ title, listingType }) {
  return (
    <motion.div 
      className="listing-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="listing-container">
        <header className="listing-header">
          <h1>{title}</h1>
          <p>Showing top properties for {listingType}</p>
        </header>

        <div className="property-grid">
          {mockProperties.map((prop, i) => (
            <motion.div 
              key={prop.id} 
              className="property-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="property-image">
                <img src={prop.img} alt={prop.title} />
              </div>
              <div className="property-content">
                <h2 className="property-price">{listingType === 'rent' ? prop.price.replace('000', '50 pcm') : prop.price}</h2>
                <h3 className="property-title">{prop.title}</h3>
                <p className="property-address">{prop.address}</p>
                <div className="property-features">
                  <span><Bed size={16}/> {prop.beds} Beds</span>
                  <span><Bath size={16}/> {prop.baths} Baths</span>
                  <span><Move size={16}/> {prop.sqft} sqft</span>
                </div>
              </div>
              <div className="property-footer">
                <span className="agent-name">Listed by {prop.agent}</span>
                <button className="btn-primary">View Details</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
