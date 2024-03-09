import React from 'react';

function Navigation() {
  return (
    <nav style={{ backgroundColor: '#0066cc', padding: '1em', textAlign: 'center', whiteSpace: 'nowrap' }}>
      <a href="/" className="nav-link" style={{ display: 'inline-block' }}>Home</a>
      <a href="/about" className="nav-link" style={{ display: 'inline-block' }}>About Us</a>
      <a href="/Questionaire" className="nav-link" style={{ display: 'inline-block' }}>Questionaire</a>
    </nav>
  );
}

export default Navigation;