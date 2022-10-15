import React from "react";
import "./Widgets.scss";

import {
	faCoins,
	faPiggyBank,
	faUserGroup,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Widgets = ({ type }) => {
	let data;

	switch (type) {
		case "allUsers":
			data = {
				title: "USERS",
				counter: "2,453",
				icon: (
					<FontAwesomeIcon
						icon={faUserGroup}
						className="icon"
						style={{
							color: "#DF18FF",
							backgroundColor: "#e018ff46",
						}}
					/>
				),
			};
			break;
		case "activeUsers":
			data = {
				title: "ACTIVE USERS",
				counter: "2,453",
				icon: (
					<FontAwesomeIcon
						icon={faUsers}
						className="icon"
						style={{
							color: "#5718FF",
							backgroundColor: "#5618ff46",
						}}
					/>
				),
			};
			break;
		case "loans":
			data = {
				title: "USERS WITH LOANS",
				counter: "12,453",
				icon: (
					<FontAwesomeIcon
						icon={faCoins}
						className="icon"
						style={{
							color: "#F55F44",
							backgroundColor: "#f55f4446",
						}}
					/>
				),
			};
			break;
		case "savings":
			data = {
				title: "USERS WITH SAVINGS",
				counter: "102,453",
				icon: (
					<FontAwesomeIcon
						icon={faPiggyBank}
						className="icon"
						style={{
							color: "#FF3366",
							backgroundColor: "#ff336646",
						}}
					/>
				),
			};
			break;
		default:
			break;
	}
	return (
		<div className="widgets">
			{/* <p> USERS</p> */}
			<div className="widget">
				<div className="icon"> {data.icon}</div>
				<div className="title"> {data.title} </div>
				<span className="counter"> {data.counter}</span>
			</div>
		</div>
	);
};

export default Widgets;
