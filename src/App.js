import React from 'react';
import './index.css';
import pugImage from './images/pug.png';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">Production Zappy DevOps Web Application</header>
      <p className="app-subtext">Empowering your pug to ship and release the best code.</p>
      <img src={pugImage} alt="Zappy DevOps" className="app-image" />
      <footer className="app-footer">
        <p>© 2024 Zappy DevOps. All rights reserved.</p>
        <p>Notice: This is a development site use to demostrate devops processes and support the pug world. The pugs name is CJ.</p>
      </footer>
    </div>
  );
}

export default App;

