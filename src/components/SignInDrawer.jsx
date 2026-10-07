import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function SignInDrawer({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="signin-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="drawer-header">
              <span className="drawer-logo">Oasis Homes</span>
              <button className="btn-close" onClick={onClose}><X size={24} /></button>
            </div>
            <div className="drawer-body">
              <h2>Sign in or create an account</h2>
              <form className="signin-form" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" className="email-input" />
                <button type="submit" className="btn-continue">Continue</button>
              </form>
            </div>
            <div className="drawer-footer">
              <img src="https://images.unsplash.com/photo-1549187774-b4e9b0445b41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cat on couch" className="cat-illustration" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
