import { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import "./UsersTable.scss";

import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faUserCheck, faUserXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	GridActionsCellItem,
	GridToolbarContainer,
	GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { useCallback, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const UsersTable = () => {
	const [usersData, setUsersData] = useState([]);

	useEffect(() => {
		const usersRows = async () => {
			await axios
				.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
				.then((res) => {
					const users = res.data.map((user) => ({
						...user,
						status: "pending",
					}));
					localStorage.setItem("users", JSON.stringify(users));
					setUsersData(users);
				});
		};
		usersRows();
	}, []);

	const navigate = useNavigate();

	const viewUser = useCallback(
		(id) => (e) => {
			e.preventDefault();
			navigate(`/${id}`);
		},
		[]
	);

	const blacklistHandler = useCallback(
		(id) => () => {
			setUsersData((prevUsers) =>
				prevUsers.map((user) =>
					user.id === id ? { ...user, status: "blacklisted" } : user
				)
			);
		},
		[]
	);

	const activateHandler = useCallback(
		(id) => () => {
			setUsersData((prevUsers) =>
				prevUsers.map((user) =>
					user.id === id ? { ...user, status: "active" } : user
				)
			);
		},
		[]
	);

	useEffect(() => {
		localStorage.setItem("users", JSON.stringify(usersData));
	});

	useEffect((id) => {
		setUsersData(JSON.parse(localStorage.getItem("users")));
	}, []);

	const userColumns = useMemo(() => [
		{
			field: "orgName",
			headerName: "Organisation",
			width: 200,
			renderHeader: () => {
				return (
					<div className="columnHeader">
						Organisation
						<GridToolbarContainer>
							{" "}
							<GridToolbarFilterButton />{" "}
						</GridToolbarContainer>
					</div>
				);
			},
		},
		{
			field: "userName",
			headerName: "USERNAME",
			width: 170,
			renderHeader: () => {
				return (
					<div className="columnHeader">
						Username
						<GridToolbarContainer>
							{" "}
							<GridToolbarFilterButton />{" "}
						</GridToolbarContainer>
					</div>
				);
			},
		},
		{
			field: "email",
			headerName: "Email",
			width: 220,
			renderHeader: () => {
				return (
					<div className="columnHeader">
						Email
						<GridToolbarContainer>
							{" "}
							<GridToolbarFilterButton />{" "}
						</GridToolbarContainer>
					</div>
				);
			},
		},

		{
			field: "phoneNumber",
			headerName: "Phone Number",
			width: 200,
			renderHeader: () => {
				return (
					<div className="columnHeader">
						Phone Number
						<GridToolbarContainer>
							{" "}
							<GridToolbarFilterButton />{" "}
						</GridToolbarContainer>
					</div>
				);
			},
		},

		{
			field: "createdAt",
			headerName: "Date Joined",
			width: 200,
			renderCell: (params) => {
				const dateObj = params.row.date;
				const newDate = Intl.DateTimeFormat("en", {
					dateStyle: "long",
					timeStyle: "short",
				}).format(dateObj);
				return <>{newDate}</>;
			},
			renderHeader: () => {
				return (
					<div className="columnHeader">
						Date Joined
						<GridToolbarContainer>
							{" "}
							<GridToolbarFilterButton />{" "}
						</GridToolbarContainer>
					</div>
				);
			},
		},
		{
			field: "status",
			headerName: "Status",
			width: 100,
			renderHeader: () => {
				return (
					<div className="columnHeader">
						Status
						<GridToolbarContainer>
							{" "}
							<GridToolbarFilterButton />{" "}
						</GridToolbarContainer>
					</div>
				);
			},
			renderCell: (params) => {
				return (
					<div className={`cellWithStatus ${params.row.status}`}>
						{params.row.status}
					</div>
				);
			},
		},
		{
			field: "action",
			headerName: "",
			type: "actions",
			width: 30,
			getActions: (params) => [
				<GridActionsCellItem
					icon={<FontAwesomeIcon icon={faEye} />}
					label="View"
					onClick={viewUser(params.id)}
					showInMenu
				/>,
				<GridActionsCellItem
					icon={<FontAwesomeIcon icon={faUserXmark} />}
					label="Blacklist User"
					onClick={blacklistHandler(params.id)}
					showInMenu
				/>,
				<GridActionsCellItem
					icon={<FontAwesomeIcon icon={faUserCheck} />}
					label="Activate User"
					onClick={activateHandler(params.id)}
					showInMenu
				/>,
			],
		},
	]);

	return (
		<div className="datatable">
			<DataGrid
				rows={usersData}
				columns={userColumns}
				pageSize={20}
				rowsPerPageOptions={[20, 40, 100]}
				disableColumnMenu={true}
				localeText={{
					toolbarFilters: "",
				}}
			/>
		</div>
	);
};

export default UsersTable;
