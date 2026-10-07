import React from 'react';
import { Info } from 'lucide-react';

export default function DemoBanner() {
  return (
    <div className="demo-banner">
      <div className="demo-banner-content">
        <Info size={18} className="demo-icon" />
        <p>
          <strong>Demonstration Project:</strong> This website is a UI/UX clone created for portfolio purposes. 
          Developed by <strong>LSDev | Websites & Software</strong> (LSDev | Sites e Programas).
        </p>
      </div>
    </div>
  );
}
