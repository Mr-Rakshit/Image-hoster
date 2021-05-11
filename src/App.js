import React, { useState } from "react";
import { render } from "react-dom";
import Uploads from "./Uploads"
import Home from "./Home"
import Cards from "./comps/Cards"  
import Navbars from './comps/Navbar'
import { BrowserRouter as Router , Switch , Route, Link} from 'react-router-dom'

function App (url) {
  return (
    <Router>
    <div className="App">
    <Navbars />
    <Switch>
      <Route path='/uploads' exact component={Uploads} />
      <Route path='/home' exact component={Home} />
    </Switch>
    </div>
    </Router>
  )
};


export default App;