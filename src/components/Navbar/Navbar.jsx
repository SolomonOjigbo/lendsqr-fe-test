import React from "react";
import "./Navbar.scss";
import ProfileImg from "../../assests/profile1.jpg";
import Union from "../../assests/union.jpeg";
import Logo from "../../assests/logo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="logo">
					<Link to="/">
						<img src={Union} alt="" className="union" />
						<img src={Logo} alt="" className="lendsqr" />
					</Link>
				</div>
				<div className="search">
					<input type="text" placeholder="Search for anything" />
					<div className="iconContainer">
						<SearchOutlinedIcon className="icon" />
					</div>
				</div>
				<div className="items">
					<div className="item">
						<h2>Docs</h2>
					</div>
					<div className="item">
						<NotificationsNoneOutlinedIcon className="icon" />
					</div>
					<div className="item">
						<img src={ProfileImg} alt="" className="avatar" />
						<div className="username">Ayodeji</div>
						<KeyboardArrowDownIcon className="icon" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
