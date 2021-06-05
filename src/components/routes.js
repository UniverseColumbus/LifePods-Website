import React from 'react';
import Home from './home.js';
import What from './what.js';
import Team from './team.js';
import Contact from './contact.js';
import Whitepaper from './whitepaper.js';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './navbar.js';
import './styles/routes.css';


export default class Routes extends React.Component {
  
  render(){
    return (
      <div>

        <div className="container" >
          <Navbar className="nav"/>

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
























