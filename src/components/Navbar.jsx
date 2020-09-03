import React, { useState } from 'react';
import {useDarkMode} from '../hooks/UseDarkMode'

const Navbar = () => {
  const [darkMode, toggleMode] = useDarkMode("Dark Mode", false);

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
