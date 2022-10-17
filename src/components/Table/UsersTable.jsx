import "./UsersTable.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridMoreVertIcon } from "@mui/x-data-grid";
import { userColumns } from "../../api/usersData";

const UsersTable = () => {
	const [users, setUsers] = useState([]);
	const [status, setStatus] = useState("pending");
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const usersData = () => {
			const data = axios
				.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
				.then((res) => {
					setUsers(res.data);
				});
		};
		usersData();
	}, []);

	const openActions = (id) => {
		setOpen(!open);
	};

	if (open) {
		return (
			<div>
				<div>View Details</div>
				<div>Blacklist User</div>
				<div>Activate User</div>
			</div>
		);
	}
	const actionColumn = [
		{
			field: "status",
			headerName: "Status",
			width: 200,
			renderCell: (params) => {
				return <div className={`cellWithStatus ${status}`}>{status}</div>;
			},
		},
		{
			field: "action",
			headerName: "",
			width: 30,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						<GridMoreVertIcon
							className="cellIcon"
							onClick={() => openActions(params.row.id)}
						/>
					</div>
				);
			},
		},
	];

	return (
		<div className="datatable">
			<DataGrid
				className="datagrid"
				rows={users}
				columns={userColumns.concat(actionColumn)}
				pageSize={20}
				rowsPerPageOptions={[20, 40, 100]}
			/>
		</div>
	);
};

export default UsersTable;
