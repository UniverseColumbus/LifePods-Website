// import './styles/what.css';
import React, {Component} from 'react';

export default class What extends Component{
	render(){
		return(
			
			<div className="what-style" id="what">
				<h1>What We Do</h1>
				<p className="what-p1">We help young alumni transition into post-grad life through a 6-month peer mentorship program. Influenced by clinical psychology research, our program will help you get set up for your next chapter while making lifelong connections and friends.</p>
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
			</div>
			
			
		);
	}
}