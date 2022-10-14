import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widgets from "../../components/Widgets/Widgets";
import "./Dashboard.scss";

const Dashboard = () => {
	return (
		<div className="dashboard">
			<Navbar />
			<div className="container">
				<Sidebar />
				<div className="main">
					<div className="widgets">
						<Widgets type="allUsers" />
						<Widgets type="activeUsers" />
						<Widgets type="loans" />
						<Widgets type="savings" />
					</div>
					<div className="tableContainer">
						<div className="tableTitle">Users</div>
						Table Data
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
