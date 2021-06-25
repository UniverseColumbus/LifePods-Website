// import './styles/home.css';
import React, {Component} from 'react';
import Navbar from './navbar.js';


export default class Home extends Component{
	
	componentDidMount(){
		let image = document.createElement('img')
		image.src = "https://storage.googleapis.com/graphic-adapter-295701.appspot.com/bg.jpg"
		
		image.onload = function(){
			document.getElementsByClassName("bg")[0].style.backgroundImage = `linear-gradient(to top, rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)), url(${this.src})`;
		}
	}
	

	render(){
		return(
			<>
				<div className="home-box">
				</div>

				<div id="home" className="bg box">
					<Navbar className="nav"/>
					<div style={{height: 100}}/>
					
					<h1 className="home-heading">Engaging Young Alumni Through Peer Mentorship</h1>

					<div className="explanation">
					<p>“Life Pods is on to something. 
					DAA has been looking at ways to provide value and better engage young alumni immediately after graduation for the entirety of my 10 working at Duke. 
					This will be another wonderful way to set up Duke alumni for success.”<br/>
					<strong>—Willie Green</strong>, former Sr. Director of Campus Engagement at Duke Alumni Association</p>
					</div>

					<a href="https://forms.gle/Fy7FdcU352zRfNTH9" target="_blank"><button className="form-button">FILL OUT THE INTEREST FORM</button></a>
				</div>
			
			</>
		);
	}
}



































