import React, {Component} from 'react';
import './styles/contact.css';

export default class Contact extends Component{
	render(){
		return(
			<div className="contact-style" id="contact">
				<h1>Contact Us</h1>
				<p>Interested in bringing Life Pods to your young alums? Drop us a line!</p>
				<p><a style={{textDecoration: "underline"}} target="_blank" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=hello@lifepods.academy">
				hello@lifepods.academy</a></p>
			</div>
		);
	}
}