import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/whitepaper.css';

export default class Whitepaper extends Component{
	render(){
		return(
			
			<div className="business-style" id="whitepaper">
				<h1>Business</h1>
				<div className="business-box">
					
					<div className="whitepaper">
						<h2>Whitepaper</h2>
						<img className="whitepaper-picture" src="https://storage.googleapis.com/graphic-adapter-295701.appspot.com/whitepaper.jpg"/>
						<p>Click <a style={{textDecoration: "underline"}} target="_blank" href="https://storage.googleapis.com/graphic-adapter-295701.appspot.com/Life%20Pods%20Whitepaper_%20Lessons%20Learned%20from%20Peer%20Mentorship%20Models.pdf">here </a> 
						to view our whitepaper, <br/>"Life Pods: Lessons Learned from Peer Mentorship Models."</p>
					</div>

					
					<div className="partners">
						<h2>2021 Partners</h2>
						<img src="https://storage.googleapis.com/graphic-adapter-295701.appspot.com/Johns%20Hopkins.png"/>
						<img src="https://storage.googleapis.com/graphic-adapter-295701.appspot.com/Tulane.png"/>
						<img src="https://storage.googleapis.com/graphic-adapter-295701.appspot.com/Rochester%20black.png"/>
						<img src="https://storage.googleapis.com/graphic-adapter-295701.appspot.com/Duke.png"/>
					</div>

				</div>
			</div>
			
		);
	}
}