import './App.css';
import React, {Component} from 'react';
import Routes from './components/routes.js';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


class App extends Component{
  
  render(){
    return (
      <div className="App">
        
        <Router>
        	
          	<Routes/>
          	
        </Router>
  
      </div>
    );
  }
  
}

export default App;











































