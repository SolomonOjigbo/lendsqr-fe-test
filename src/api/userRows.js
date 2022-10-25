import axios from "axios";

export const usersRows = async () => {
	await axios
		.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
		.then((res) => {
			const data = res.data.map((user) => ({
				...user,
				status: "pending",
			}));
			localStorage.setItem("data", JSON.stringify(data));
		});
	// return data;
};
