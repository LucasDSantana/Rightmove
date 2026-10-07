import { useParams, useNavigate } from 'react-router-dom';
import { properties } from '../data';
import { ArrowLeft, Phone, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export function Property() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find(p => p.id === id);
  const shouldReduceMotion = useReducedMotion();

  if (!property) return <div className="container page-container">Property not found</div>;

  return (
    <motion.div 
      className="page-container container"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button onClick={() => navigate(-1)} className="btn-outline" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <ArrowLeft size={16} /> Back to results
      </button>

      <div className="property-header">
        <h1 className="section-title" style={{ marginBottom: '0.5rem' }}>{property.title}</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>{property.location}</p>
      </div>

      <motion.div 
        className="property-gallery"
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <img src={property.image} alt={property.title} />
      </motion.div>

      <div className="property-content-layout">
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>{property.price}</h2>
          
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', padding: '1.5rem', background: 'var(--color-bg-elevated)', borderRadius: '8px' }}>
            <div>
              <div style={{ fontWeight: 600 }}>Bedrooms</div>
              <div style={{ color: 'var(--color-text-muted)' }}>{property.bedrooms}</div>
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>Bathrooms</div>
              <div style={{ color: 'var(--color-text-muted)' }}>{property.bathrooms}</div>
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>Property Type</div>
              <div style={{ color: 'var(--color-text-muted)' }}>{property.type}</div>
            </div>
          </div>

          <h3 style={{ marginBottom: '1rem' }}>Description</h3>
          <p style={{ lineHeight: '1.8', color: 'var(--color-text-muted)' }}>
            {property.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="contact-card">
            <h3 style={{ marginBottom: '1.5rem' }}>Listed by {property.agent}</h3>
            <button className="btn-primary" style={{ width: '100%', marginBottom: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={18} /> Call Agent
            </button>
            <button className="btn-outline" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={18} /> Request Details
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
