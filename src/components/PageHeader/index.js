import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function PageHeader() {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <h1>Telzir</h1>
        <Link to="/" className="button-home">Início</Link>
      </div>
    </header>
  );
}

export default PageHeader;