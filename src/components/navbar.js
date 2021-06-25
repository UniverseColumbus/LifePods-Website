// import './styles/navbar.css';
import React, {Component} from 'react';

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
					<li><a href="#home" style={{paddingRight: 40}}>Home</a></li>
					<li><a href="#what" style={{paddingRight: 40}}>What We Do</a></li>
					<li><a href="#team">The Team</a></li>
					<li><a href="#whitepaper" style={{paddingLeft: 40}}>Business</a></li>
					<li><a href="#contact" style={{paddingLeft: 40}}>Contact Us</a></li>
				</ul>

			</div>
		);
	}
}

















