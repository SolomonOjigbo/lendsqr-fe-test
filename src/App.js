import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import UserDetails from "./pages/UserDetails/UserDetails";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Dashboard />} />
						<Route path="login" element={<Login />} />
						<Route path="users/:userId" element={<UserDetails />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
