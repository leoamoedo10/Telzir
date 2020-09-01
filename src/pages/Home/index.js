import React from "react";
import { Link } from "react-router-dom";

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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
            <PlayArrowIcon style={{fontSize: 50}}/>
            Calcular
          </Link>

          <Link
            to="/informations"
            className="information"
          >
            <InfoOutlinedIcon style={{fontSize: 40}}/>
            Informações
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
