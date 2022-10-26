import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./UserDetails.scss";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserDetails = () => {
	const params = useParams();
	const [user, setUser] = useState({});

	const userInfo = () => {};

	const userData = JSON.parse(localStorage.getItem("users"));
	useEffect(() => {
		if (userData) {
			setUser(
				userData.find((currentUser) => String(currentUser.id) === params.userId)
			);
		} else {
			return alert("User is not available");
		}
	}, []);

	return (
		<div className="userDetails">
			<Navbar />
			<div className="container">
				<Sidebar />
				<div className="main">
					<div className="back_link">
						<Link to="/users">
							<FontAwesomeIcon icon={faArrowLeftLong} className="arrow" />
						</Link>
						<span>Back to Users</span>
					</div>
					<div className="user_header">
						<p className="users">User Details</p>
						<div className="statusButtons">
							<button className="blacklist"> Blacklist User </button>
							<button className="activate"> Activate User </button>
						</div>
					</div>

					<div className="profile_header">
						<div className="top">
							<div className="user">
								<img src={user?.profile?.avatar} alt={user?.userName} />
								<span>
									<ul>
										<li className="username">
											{user.profile?.firstName} {user.profile?.lastName}
										</li>
										<li className="account_id">{user?.userName}</li>
									</ul>
								</span>
							</div>
							<div className="divider"></div>
							<div className="tier">
								<ul>
									<li className="user_tier">User's Tier</li>
									<li className="rating">
										<span>
											<StarIcon fontSize="small" />
										</span>
										<span>
											<StarBorderIcon fontSize="small" />
										</span>
										<span>
											<StarBorderIcon fontSize="small" />
										</span>
									</li>
								</ul>
							</div>
							<div className="divider"></div>
							<ul className="account_info">
								<li className="balance">₦{user?.accountBalance}</li>
								<li className="account_no">
									Account Number: {user?.accountNumber}
								</li>
							</ul>
						</div>
						<div className="bottom">
							<ul>
								<li>General Details</li>
								<li>Documents</li>
								<li>Bank Details</li>
								<li>Loans</li>
								<li>Savings</li>
								<li>App and System</li>
							</ul>
						</div>
					</div>
					<div className="general_details">
						<div className="profile_info">
							<h3>Profile Information</h3>
							<div className="top">
								<ul>
									<li className="field">FULL NAME</li>
									<li className="value">
										{user.profile?.firstName} {user.profile?.lastName}
									</li>
								</ul>

								<ul>
									<li className="field">Phone Number</li>
									<li className="value">{user.profile?.phoneNumber}</li>
								</ul>
								<ul>
									<li className="field">Email Address</li>
									<li className="value">{user?.email}</li>
								</ul>
								<ul>
									<li className="field">BVN</li>
									<li className="value">{user.profile?.bvn}</li>
								</ul>
							</div>
							<div className="bottom">
								<ul>
									<li className="field">Contact Address</li>
									<li className="value">{user.profile?.address}</li>
								</ul>

								<ul>
									<li className="field">Gender</li>
									<li className="value">{user.profile?.gender}</li>
								</ul>
								<ul>
									<li className="field">Company</li>
									<li className="value">{user?.orgName}</li>
								</ul>
							</div>
							<div className="seperator"></div>
							<div className="profile_info">
								<h3>Education and Employment</h3>
								<div className="top">
									<ul>
										<li className="field">Level of Education</li>
										<li className="value">{user.education?.level}</li>
									</ul>
									<ul>
										<li className="field">Employment Status</li>
										<li className="value">
											{" "}
											{user.education?.employmentStatus}{" "}
										</li>
									</ul>
									<ul>
										<li className="field">SECTOR OF EMPLOYMENT</li>
										<li className="value">{user.education?.sector}</li>
									</ul>
									<ul>
										<li className="field">DURATION OF EMPLOYMENT</li>
										<li className="value">{user.education?.duration}</li>
									</ul>
								</div>
								<div className="bottom">
									<ul>
										<li className="field">MONTHLY INCOME</li>
										<li className="value">
											{user.education?.monthlyIncome[0]}
											{", "}
											{user.education?.monthlyIncome[1]}
										</li>
									</ul>
									<ul>
										<li className="field">LOAN REPAYMENT</li>
										<li className="value">{user.education?.loanRepayment}</li>
									</ul>
									<ul>
										<li className="field">OFFICE EMAIL</li>
										<li className="value">{user.education?.officeEmail}</li>
									</ul>
								</div>
								<div className="seperator"></div>
							</div>
							<div className="profile_info">
								<h3>Socials</h3>
								<div className="top">
									<ul>
										<li className="field">TWITTER</li>
										<li className="value"> {user.socials?.twitter} </li>
									</ul>
									<ul>
										<li className="field">FACEBOOK</li>
										<li className="value">{user.socials?.facebook} </li>
									</ul>
									<ul>
										<li className="field">INSTAGRAM</li>
										<li className="value"> {user.socials?.instagram} </li>
									</ul>
								</div>
								<div className="seperator"></div>
							</div>
							<div className="profile_info">
								<h3>Guarantor</h3>
								<div className="top">
									<ul>
										<li className="field">FULL NAME</li>
										<li className="value">
											{user.guarantor?.firstName} {user.guarantor?.lastName}
										</li>
									</ul>
									<ul>
										<li className="field"> PHONE NUMBER</li>
										<li className="value">{user.guarantor?.phoneNumber}</li>
									</ul>
									<ul>
										<li className="field">EMAIL ADDRESS</li>
										<li className="value">{user?.email}</li>
									</ul>
									<ul>
										<li className="field">ADDRESS</li>
										<li className="value">{user.guarantor?.address}</li>
									</ul>
								</div>

								<div className="seperator"></div>
								<div className="guarantor2">
									<ul>
										<li className="field">FULL NAME</li>
										<li className="value">
											{user.guarantor?.firstName} {user.guarantor?.lastName}
										</li>
									</ul>
									<ul>
										<li className="field"> PHONE NUMBER</li>
										<li className="value">{user.guarantor?.phoneNumber}</li>
									</ul>
									<ul>
										<li className="field">EMAIL ADDRESS</li>
										<li className="value">{user?.email}</li>
									</ul>
									<ul>
										<li className="field">ADDRESS</li>
										<li className="value">{user.guarantor?.address}</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDetails;
