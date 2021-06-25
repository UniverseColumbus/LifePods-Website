// import './styles/team.css';
import React, {Component} from 'react';

export default class Team extends Component{
	render(){
		return(
			
			<div className="team-style" id="team">
				<h1>The Team</h1>

				<div className="team-box">
					<Member firstName="Judy" lastName="Zhu" title="Co-Founder" 
					info="Mechanical Engineering @ Duke '17'. Product Marketing Manager @ Edtech"
					pic="https://storage.googleapis.com/graphic-adapter-295701.appspot.com/Judy.jpg"/>
					
					<Member firstName="Michelle" lastName="Nie" title="Co-Founder" 
					info="Business Admin @ Berkeley '17'. Strategy & Design Consultant"
					pic="https://storage.googleapis.com/graphic-adapter-295701.appspot.com/Michelle.jpg"/>

					<Member firstName="Savannah" lastName="Erwin" title="Lead, Peer Mentorship Training Program" 
					info="Ph.D in Clinical Psychology @ Duke ’22"
					pic="https://storage.googleapis.com/graphic-adapter-295701.appspot.com/Savannah.jpg"/>

					<Member firstName="Willie" lastName="Green" title="Advisor, Alumni Engagement" 
					info="Corporate Relations @ UVA. Former Sr. Director @ Duke Alum Association"
					pic="https://storage.googleapis.com/graphic-adapter-295701.appspot.com/Willie.jpg"/>
					
					<Member firstName="Scott" lastName="Swartzwelder" title="Advisor, Peer Mentorship Training Program" 
					info="Professor in Psychiatry and Behavioral Sciences @ Duke"
					pic="https://storage.googleapis.com/graphic-adapter-295701.appspot.com/Scott.jpg"/>

					<Member firstName="Grace" lastName="Shin" title="Advisor, Curriculum" 
					info="Ed.M @ Harvard '17'. Ph.D in Higher Education @ UCLA"
					pic="https://storage.googleapis.com/graphic-adapter-295701.appspot.com/Grace.jpg"/>
					
					<Member firstName="David" lastName="Clifford" title="Advisor, Equity" 
					info="Founder @ DSX Co-Creator @ Liberatory Design"
					pic="https://storage.googleapis.com/graphic-adapter-295701.appspot.com/David.jpg"/>
					
					<Member firstName="Michael" lastName="Orr" title="Web & Software Development" 
					info="Computer Information Systems @ Okanagan College '21"
					pic="https://storage.googleapis.com/graphic-adapter-295701.appspot.com/Michael.jpg"/>
				</div>
			</div>
			
			
		);
	}
}


class Member extends Component{
	render(){
		return(
			<div className={this.props.firstName}>
				<div className="picture" style={{backgroundImage: `url(${this.props.pic})`}} />
					
				<div className="bio">
					<p style={{textDecoration: "underline", fontWeight: "bold"}}>{this.props.firstName} {this.props.lastName}</p>
					<p style={{fontWeight: "bold", marginTop: 10, fontSize: 14}}>{this.props.title}</p>
					<p style={{marginTop: 10, fontSize: 14, fontStyle: "italic"}}>{this.props.info}</p>
				</div>
			</div>
		);
	}
}















































