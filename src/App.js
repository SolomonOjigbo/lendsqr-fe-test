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
