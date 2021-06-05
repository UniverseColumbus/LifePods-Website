import React, {Component} from 'react';
import './styles/team.css';

export default class Team extends Component{
	render(){
		return(
			<div className="team-style" id="team">
				<h1>The Team</h1>

				<div className="team-box">
					<Member firstName="Judy" lastName="Zhu" title="Co-Founder" 
					info="Mechanical Engineering @ Duke '17'. Product Marketing Manager @ Edtech"/>
					
					<Member firstName="Michelle" lastName="Nie" title="Co-Founder" 
					info="Business Admin @ Berkeley '17'. Strategy & Design Consultant"/>

					<Member firstName="Savannah" lastName="Erwin" title="Lead, Peer Mentorship Training Program" 
					info="Ph.D in Clinical Psychology @ Duke ’22"/>

					<Member firstName="Willie" lastName="Green" title="Advisor, Alumni Engagement" 
					info="Corporate Relations @ UVA. Former Sr. Director @ Duke Alum Association"/>
					
					<Member firstName="Scott" lastName="Swartzwelder" title="Advisor, Peer Mentorship Training Program" 
					info="Professor in Psychiatry and Behavioral Sciences @ Duke"/>

					<Member firstName="Grace" lastName="Shin" title="Advisor, Curriculum" 
					info="Ed.M @ Harvard '17'. Ph.D in Higher Education @ UCLA"/>
					
					<Member firstName="David" lastName="Clifford" title="Advisor, Equity" 
					info="Founder @ DSX Co-Creator @ Liberatory Design"/>
					
					<Member firstName="Michael" lastName="Orr" title="Web & Software Development" 
					info="Computer Information Systems @ Okanagan College '21"/>
				</div>
			</div>
		);
	}
}


class Member extends Component{
	render(){
		return(
			<div className={this.props.firstName}>
				<div className="picture"/>
				<div className="bio">
					<p style={{textDecoration: "underline", fontWeight: "bold"}}>{this.props.firstName} {this.props.lastName}</p>
					<p style={{fontWeight: "bold", marginTop: 10, fontSize: 14}}>{this.props.title}</p>
					<p style={{marginTop: 10, fontSize: 14, fontStyle: "italic"}}>{this.props.info}</p>
				</div>
			</div>
		);
	}
}















































