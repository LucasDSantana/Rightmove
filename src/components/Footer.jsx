import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="/guides">Property guides</a></li>
              <li><a href="/news">Property news</a></li>
              <li><a href="/calculator">Mortgage Calculator</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Search</h4>
            <ul>
              <li><a href="/buy">Homes for sale</a></li>
              <li><a href="/rent">Homes for rent</a></li>
              <li><a href="/prices">Sold prices</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Locations</h4>
            <ul>
              <li><a href="/loc/london">London</a></li>
              <li><a href="/loc/edinburgh">Edinburgh</a></li>
              <li><a href="/overseas">Overseas</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Rightmove</h4>
            <ul>
              <li><a href="/about">About us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="social-links">
            <a href="#facebook" aria-label="Facebook">FB</a>
            <a href="#twitter" aria-label="Twitter">TW</a>
            <a href="#instagram" aria-label="Instagram">IG</a>
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} Rightmove. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
