import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="company-name">Company name</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/enterprise">Enterprise</Link>
        <Link to="/support">Support</Link>
      </nav>
    </header>
  );
}

export default Header;
