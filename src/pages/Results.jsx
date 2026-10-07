import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { properties } from '../data';
import { motion, useReducedMotion } from 'framer-motion';
import { BedDouble, Bath, Home as HomeIcon } from 'lucide-react';

export function Results({ type: transactionType = 'buy' }) {
  const navigate = useNavigate();
  const [beds, setBeds] = useState('any');
  const [propertyType, setPropertyType] = useState('any');
  const shouldReduceMotion = useReducedMotion();

  const filtered = properties.filter(p => {
    if (beds !== 'any' && p.bedrooms < parseInt(beds)) return false;
    if (propertyType !== 'any' && p.type !== propertyType) return false;
    // Mocking transaction type filtering (all mock data is considered 'buy' or 'rent' depending on page context for demo)
    return true;
  });

  const pageTitle = transactionType === 'buy' ? 'Properties for Sale' : transactionType === 'rent' ? 'Properties to Rent' : 'Search Results';

  return (
    <div className="page-container container">
      <motion.h1 
        className="section-title"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {pageTitle}
      </motion.h1>
      
      <div className="results-layout">
        <motion.aside 
          className="filters-sidebar"
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 style={{ marginBottom: '1.5rem' }}>Filters</h3>
          
          <div className="filter-group">
            <label>Minimum Bedrooms</label>
            <select value={beds} onChange={(e) => setBeds(e.target.value)}>
              <option value="any">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label>Property Type</label>
            <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
              <option value="any">Any</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Penthouse">Penthouse</option>
            </select>
          </div>
        </motion.aside>

        <main>
          <div className="grid-cols-2">
            {filtered.map((p, i) => (
              <motion.article 
                key={p.id} 
                className="property-card" 
                onClick={() => navigate(`/property/${p.id}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/property/${p.id}`); }}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <img src={p.image} alt={p.title} className="property-card-img" loading="lazy" />
                <div className="property-card-content">
                  <div className="property-card-price">{p.price}</div>
                  <h3 className="property-card-title">{p.title}</h3>
                  <p className="property-card-loc">{p.location}</p>
                  <div className="property-card-features">
                    <span className="feature-item"><BedDouble size={16} /> {p.bedrooms} Beds</span>
                    <span className="feature-item"><Bath size={16} /> {p.bathrooms} Baths</span>
                    <span className="feature-item"><HomeIcon size={16} /> {p.type}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          {filtered.length === 0 && (
            <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--color-text-muted)' }}>
              No properties match your filters.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
