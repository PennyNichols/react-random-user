import React from "react";
import mailSvg from "../assets/mail.svg";
import manSvg from "../assets/man.svg";
import womanSvg from "../assets/woman.svg";
import manAgeSvg from "../assets/growing-up-man.svg";
import womanAgeSvg from "../assets/growing-up-woman.svg";
import mapSvg from "../assets/map.svg";
import phoneSvg from "../assets/phone.svg";
import padlockSvg from "../assets/padlock.svg";
import cwSvg from "../assets/cw.svg";

const UserCard = ({ person }) => {
	
	return (
		<div className="container">
			<img src={person.picture?.large} alt="random user" className="user-img" />
			<p className="user-title">
				My Name is : {person.name?.title}. {person.name?.first}{" "}
				{person.name?.last}
			</p>
			<p className="user-value"></p>
			<div className="values-list">
				<button className="icon" data-label="name">
					<img src={womanSvg} alt="user" id="iconImg" />
				</button>
				<button className="icon" data-label="email">
					<img src={mailSvg} alt="mail" id="iconImg" />
				</button>
				<button className="icon" data-label="age">
					<img src={womanAgeSvg} alt="age" id="iconImg" />
				</button>
				<button className="icon" data-label="street">
					<img src={mapSvg} alt="map" id="iconImg" />
				</button>
				<button className="icon" data-label="phone">
					<img src={phoneSvg} alt="phone" id="iconImg" />
				</button>
				<button className="icon" data-label="password">
					<img src={padlockSvg} alt="lock" id="iconImg" />
				</button>
			</div>
		</div>
	);
};

export default UserCard;
