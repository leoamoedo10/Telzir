import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Calculate from './pages/Calculate';
import Informations from './pages/Informations';

function Routes () {
  return(
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      {/* <Route path="/calculate" component={Calculate} />
      <Route path="/informations" component={Informations} /> */}
    </BrowserRouter>
  );
}

export default Routes;