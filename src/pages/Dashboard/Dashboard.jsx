import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import UsersTable from "../../components/Table/UsersTable";
import Widgets from "../../components/Widgets/Widgets";
import "./Dashboard.scss";

const Dashboard = () => {
	return (
		<div className="dashboard">
			<Navbar />
			<div className="container">
				<Sidebar />
				<div className="main">
					<p className="users">Users</p>
					<div className="widgets">
						<Widgets type="allUsers" />
						<Widgets type="activeUsers" />
						<Widgets type="loans" />
						<Widgets type="savings" />
					</div>
					<div className="tableContainer">
						<UsersTable />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
