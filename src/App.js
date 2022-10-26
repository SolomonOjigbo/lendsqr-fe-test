import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import UserDetails from "./pages/UserDetails/UserDetails";

function App() {
	useEffect(() => {
		axios
			.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
			.then((res) => {
				const data = res.data.map((user) => ({
					...user,
					status: "pending",
				}));
				localStorage.setItem("users", JSON.stringify(data));
			});
	});

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Login />} />
						<Route path=":userId" element={<UserDetails />} />
						<Route path="users" element={<Dashboard />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
