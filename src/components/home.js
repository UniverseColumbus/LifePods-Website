import React, {Component} from 'react';
import './styles/home.css';

export default class Home extends Component{
	render(){
		return(
			
			<div className="background box" id="home">
				
				<h1 className="home-heading">Engaging Young Alumni Through Peer Mentorship</h1>

				<div className="explanation">
				<p>“Life Pods is on to something. 
				DAA has been looking at ways to provide value and better engage young alumni immediately after graduation for the entirety of my 10 working at Duke. 
				This will be another wonderful way to set up Duke alumni for success.”<br/>
				<strong>—Willie Green</strong>, former Sr. Director of Campus Engagement at Duke Alumni Association</p>
				</div>

				<a href="https://forms.gle/Fy7FdcU352zRfNTH9" target="_blank"><button className="form-button">FILL OUT THE INTEREST FORM</button></a>

			</div>

		);
	}
}



































