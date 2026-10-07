import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignInDrawer from './SignInDrawer';

const navData = [
  {
    title: 'Buy',
    path: '/buy',
    columns: 1,
    links: [
      { label: 'Property for sale', path: '/buy' },
      { label: 'New homes for sale', path: '/buy/new-homes' },
      { label: 'Property valuation', path: '/valuation' },
      { label: 'Investors', path: '/investors' }
    ]
  },
  {
    title: 'Rent',
    path: '/rent',
    columns: 1,
    links: [
      { label: 'Property to rent', path: '/rent' },
      { label: 'Student property to rent', path: '/rent/student' }
    ]
  },
  {
    title: 'House Prices',
    path: '/prices',
    columns: 1,
    links: [
      { label: 'Sold house prices', path: '/prices/sold' },
      { label: 'Instant online valuation', path: '/valuation/instant' }
    ]
  },
  {
    title: 'Mortgages',
    path: '/mortgages',
    columns: 1,
    links: [
      { label: 'Get a Mortgage in Principle', path: '/mortgages/in-principle' },
      { label: 'Mortgage Calculator', path: '/mortgages/calculator' }
    ]
  },
  {
    title: 'Find Agent',
    path: '/agents',
    columns: 1,
    links: [
      { label: 'Find estate agent', path: '/agents' }
    ]
  },
  {
    title: 'Commercial',
    path: '/commercial',
    columns: 1,
    links: [
      { label: 'Commercial property to rent', path: '/commercial/rent' },
      { label: 'Commercial property for sale', path: '/commercial/buy' },
      { label: 'Advertise commercial property', path: '/commercial/advertise' }
    ]
  },
  {
    title: 'Inspire',
    path: '/inspire',
    columns: 3,
    links: [
      { label: 'Moving stories', path: '/inspire/stories' },
      { label: 'Property guides', path: '/guides' },
      { label: 'Overseas blog', path: '/overseas/blog' },
      { label: 'Property news', path: '/news' },
      { label: 'Housing trends', path: '/news/trends' },
      { label: 'Country guides', path: '/overseas/guides' },
      { label: 'Energy efficiency', path: '/guides/energy' },
      { label: 'Mortgage guides', path: '/mortgages/guides' }
    ]
  },
  {
    title: 'Overseas',
    path: '/overseas',
    columns: 3,
    links: [
      { label: 'All countries', path: '/overseas' },
      { label: 'Portugal', path: '/overseas/portugal' },
      { label: 'Currency', path: '/overseas/currency' },
      { label: 'Spain', path: '/overseas/spain' },
      { label: 'Italy', path: '/overseas/italy' },
      { label: 'Sell overseas property', path: '/overseas/sell' },
      { label: 'France', path: '/overseas/france' },
      { label: 'Greece', path: '/overseas/greece' }
    ]
  }
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <div className="logo">
            <Link to="/" className="logo-link">Oasis Homes</Link>
          </div>
          <nav className="main-nav">
            <ul>
              {navData.map((item, index) => (
                <li 
                  key={index} 
                  className="nav-item"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link to={item.path} className="nav-link">{item.title}</Link>
                  {activeDropdown === index && (
                    <div className={`dropdown-menu cols-${item.columns}`}>
                      <ul>
                        {item.links.map((sub, i) => (
                          <li key={i}>
                            <Link to={sub.path}>{sub.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-actions">
            <button className="btn-signin-outline" onClick={() => setDrawerOpen(true)}>
              Sign in
            </button>
          </div>
        </div>
      </header>
      
      <SignInDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
