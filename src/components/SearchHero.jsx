import React, { useState } from 'react';

export default function SearchHero() {
  const [activeTab, setActiveTab] = useState('buy');

  return (
    <section className="search-hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <strong>Believe</strong> in finding it
        </h1>
        <h2 className="hero-subtitle">With the largest choice of homes</h2>
        
        <div className="search-box">
          <div className="search-tabs" role="tablist">
            <button 
              role="tab" 
              aria-selected={activeTab === 'buy'} 
              className={activeTab === 'buy' ? 'active' : ''}
              onClick={() => setActiveTab('buy')}
            >
              Buy
            </button>
            <button 
              role="tab" 
              aria-selected={activeTab === 'rent'} 
              className={activeTab === 'rent' ? 'active' : ''}
              onClick={() => setActiveTab('rent')}
            >
              Rent
            </button>
            <button 
              role="tab" 
              aria-selected={activeTab === 'sold'} 
              className={activeTab === 'sold' ? 'active' : ''}
              onClick={() => setActiveTab('sold')}
            >
              Sold
            </button>
          </div>
          <div className="search-input-group">
            <input 
              type="text" 
              placeholder={`Search properties to ${activeTab}...`} 
              className="search-input"
              aria-label="Search location"
            />
            <button className="btn-search">Search</button>
          </div>
        </div>
      </div>
    </section>
  );
}
