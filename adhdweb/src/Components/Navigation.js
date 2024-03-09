import React from 'react';

function Navigation() {
  return (
    <nav style={{ backgroundColor: '#0066cc', padding: '1em', textAlign: 'left', whiteSpace: 'nowrap', width: '100%' }}>
      <a href="/" className="nav-link" style={{ color: 'white', display: 'inline-block', padding: '5px' }}>Home</a>
      <a href="/about" className="nav-link" style={{ color: 'white', display: 'inline-block', padding:'5px' }}>About Us</a>
      <a href="/Questionaire" className="nav-link" style={{ color:'white', display: 'inline-block', padding:'5px' }}>Questionaire</a>
    </nav>
  );
}

export default Navigation;