import React, {Component} from 'react';
import Home from './home.js';
import What from './what.js';
import Team from './team.js';
import Contact from './contact.js';
import Whitepaper from './whitepaper.js';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './styles/routes.css';

export default class Routes extends Component {
  
  render(){
    return (
      <div>

        <div className="container" >
          

          <Switch>

            <Route exact path="/">
              
              <Home />
              <What />
              <Team />
              <Whitepaper />
              <Contact />
            </Route>

            {/*<Route path="/what">
              <What />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/whitepaper">
              <Whitepaper />
            </Route>*/}
          
          </Switch>
      
        </div>

      
      </div>
    );
  }
  
};
























