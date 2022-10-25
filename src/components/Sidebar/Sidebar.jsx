import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileClipboard } from "@fortawesome/free-regular-svg-icons";
import {
	faBriefcase,
	faBuildingColumns,
	faChartColumn,
	faCoins,
	faFan,
	faFileInvoice,
	faHandHoldingDollar,
	faHandshake,
	faHouseChimney,
	faMoneyBillTransfer,
	faPiggyBank,
	faSackDollar,
	faScroll,
	faSliders,
	faUserCheck,
	faUserGear,
	faUserGroup,
	faUsers,
	faUserXmark,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="top">
				<div className="organisation">
					<BusinessCenterIcon fontSize="small" />
					<h2>Switch Organization</h2>
					<KeyboardArrowDownIcon />
				</div>
				<div className="mainDash">
					<FontAwesomeIcon icon={faHouseChimney} className="icon" />

					<p> Dashboard</p>
				</div>
			</div>

			<div className="menu">
				<ul>
					<p className="title">CUSTOMERS</p>
					<Link to="/" style={{ textDecoration: "none" }}>
						<li>
							<FontAwesomeIcon icon={faUserGroup} className="icon" />
							<span>Users</span>
						</li>
					</Link>
					<li>
						<FontAwesomeIcon icon={faUsers} className="icon" />
						<span>Guarantors</span>
					</li>

					<li>
						<FontAwesomeIcon icon={faSackDollar} className="icon" />
						<span>Loans</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faHandshake} className="icon" />
						<span>Decision Models</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faPiggyBank} className="icon" />
						<span>Savings</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faHandHoldingDollar} className="icon" />
						<span>Loan Requests</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faUserCheck} className="icon" />
						<span>Whitelist</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faUserXmark} className="icon" />
						<span>Karma</span>
					</li>
					<p className="title">BUSINESSES</p>
					<li>
						<FontAwesomeIcon icon={faBriefcase} className="icon" />
						<span>Organisation</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faHandHoldingDollar} className="icon" />
						<span>Loan Products</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faBuildingColumns} className="icon" />
						<span>Savings Products</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faCoins} className="icon" />
						<span>Fees and Charges</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faMoneyBillTransfer} className="icon" />
						<span>Transactions</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faFan} className="icon" />
						<span>Services</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faUserGear} className="icon" />
						<span>Service Account</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faScroll} className="icon" />
						<span>Settlements</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faChartColumn} className="icon" />
						<span>Reports</span>
					</li>
					<p className="title">SETTINGS</p>
					<li>
						<FontAwesomeIcon icon={faSliders} className="icon" />
						<span>Preferences</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faFileInvoice} className="icon" />
						<span>Fees and Pricing</span>
					</li>
					<li>
						<FontAwesomeIcon icon={faFileClipboard} className="icon" />
						<span>Audit Logs</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
