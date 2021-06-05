import React, {Component} from 'react';
import './styles/whitepaper.css';

export default class Whitepaper extends Component{
	render(){
		return(
			<div className="whitepaper-style" id="whitepaper">
				<h1>Whitepaper</h1>
				<img className="whitepaper-picture" src="https://storage.googleapis.com/graphic-adapter-295701.appspot.com/whitepaper.jpg"/>
				<p>Click <a style={{textDecoration: "underline"}} target="_blank" href="https://storage.googleapis.com/graphic-adapter-295701.appspot.com/Life%20Pods%20Whitepaper_%20Lessons%20Learned%20from%20Peer%20Mentorship%20Models.pdf">here </a> 
				to view our whitepaper, <br/>"Life Pods: Lessons Learned from Peer Mentorship Models."</p>
			</div>
		);
	}
}