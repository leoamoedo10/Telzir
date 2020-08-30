import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function Home() {
  return (
    <div id="page-home">
      <div id="page-home-container">
        <div className="title-container">
          <h1>Telzir</h1>
        </div>

        <div className="buttons-container">
          <Link 
            to="/calculate" 
            className="calculate"
          >
            Calcular
          </Link>

          <Link 
            to="/informations" 
            className="information"
          >
            Informações
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
