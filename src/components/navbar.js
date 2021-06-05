import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './styles/navbar.css';
import What from './what.js';
import {useRef, useLayoutEffect} from 'react';
let lastScrollY = 0;


export default class Navbar extends Component{

	componentDidMount(){
		window.addEventListener('scroll', this.handleScroll, true);
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		lastScrollY = window.scrollY;
		if (lastScrollY >= window.innerHeight) {
			document.getElementById("myNav").className = "navbox2";
			document.getElementById("logo").className = "logo2";
		}
		else {
			document.getElementById("myNav").className = "navbox1";
			document.getElementById("logo").className = "logo1";
		}
	}

	render(){
		return(
			<div className="navbox1" id="myNav">
				<img id="logo" className="logo1" src="https://storage.googleapis.com/graphic-adapter-295701.appspot.com/logo.png"/>
				<ul className="navbar">
					<li><a href="#home" style={{paddingRight: 30}}>Home</a></li>
					<li><a href="#what" style={{paddingRight: 30}}>What We Do</a></li>
					<li><a href="#team">The Team</a></li>
					<li><a href="#whitepaper" style={{paddingLeft: 30}}>Whitepaper</a></li>
					<li><a href="#contact" style={{paddingLeft: 30}}>Contact Us</a></li>
				</ul>

			</div>
		);
	}
}

















