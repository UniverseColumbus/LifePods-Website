import React, {Component} from 'react';
import './styles/what.css';

export default class What extends Component{
	render(){
		return(
			<div className="what-style" id="what">
				<h1>What We Do</h1>
				<p className="what-p1">We help young alumni transition into adulthood in a 6-month peer mentorship pod program. 
				Peer mentors go through training vetted by Clinical Psychologist team at Duke Health, led by
				Dr. Scott Swartzwelder.</p>
				<p className="what-p2">The 12-session curriculum is influenced by Stanford Design Program, 
				Dr. Allison McWilliams @Wake Forest, and overseen by our advisor Grace Shin, Ed.M @ Harvard.</p>
				
				<h2>Curriculum Topics</h2>
				<ul>
					<li>Starting work/grad school on the right foot</li>
					<li>Getting settled in a new city</li>
					<li>Budgeting</li>
					<li>Mental health and wellness</li>
					<li>Meal prep and healthy eating</li>
					<li>Fitness routines</li>
					<li>Forging friendships</li>
					<li>Relationship advice</li>
					<li>Being a lifelong listener</li>
				</ul>

				<h2>2021 Partners</h2>
				<div className="partners">
					<img src="https://storage.googleapis.com/graphic-adapter-295701.appspot.com/Johns%20Hopkins.png"/>
					<img src="https://storage.googleapis.com/graphic-adapter-295701.appspot.com/Tulane.png"/>
					<img src="https://storage.googleapis.com/graphic-adapter-295701.appspot.com/Rochester%20black.png"/>
				</div>
			</div>
		);
	}
}