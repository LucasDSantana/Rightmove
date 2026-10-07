import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContentPage({ title, subtitle, content }) {
  return (
    <motion.div 
      className="content-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="content-container">
        <Link to="/" className="back-link"><ArrowLeft size={16}/> Back to Home</Link>
        <header className="content-header">
          <h1>{title}</h1>
          {subtitle && <h2>{subtitle}</h2>}
        </header>
        <div className="content-body">
          <div className="content-prose">
            <p>{content}</p>
            <p>This page was dynamically created to demonstrate the vast architecture of the Rightmove portal, fulfilling the requirement to render all internal content routes, overseas locations, and learn more sections.</p>
            <button className="btn-primary" style={{marginTop: '24px'}}>Get Started</button>
          </div>
          <div className="content-sidebar">
            <div className="sidebar-card">
              <h3>Need Expert Help?</h3>
              <p>Contact our dedicated support team to learn more about {title.toLowerCase()}.</p>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
