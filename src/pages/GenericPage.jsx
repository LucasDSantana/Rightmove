import React from 'react';
import { motion } from 'framer-motion';

export default function GenericPage({ title, type }) {
  return (
    <motion.div 
      className="generic-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="generic-container">
        <header className="generic-header">
          <h1>{title}</h1>
          <p>
            {type === 'search' 
              ? "Discover the perfect match for your requirements. Use our advanced filters to narrow down the options." 
              : "Find all the insights, calculators, and professional guidance you need for your next step."}
          </p>
        </header>
        
        <div className="generic-content">
          {type === 'search' ? (
            <div className="placeholder-grid">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="property-card-skeleton">
                  <div className="skeleton-img"></div>
                  <div className="skeleton-text short"></div>
                  <div className="skeleton-text long"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="placeholder-info">
              <div className="info-block"></div>
              <div className="info-block"></div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
