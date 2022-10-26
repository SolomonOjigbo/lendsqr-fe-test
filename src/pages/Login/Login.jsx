import React from "react";
import "./Login.scss";
import Union from "../../assests/union.jpeg";
import Logo from "../../assests/logo.png";
import LoginImg from "../../assests/login.png";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = React.useState(false);
	const handleClickShowPassword = () => setShowPassword(!showPassword);
	const handleMouseDownPassword = () => setShowPassword(!showPassword);

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/users");
	};
	return (
		<div className="login">
			<div className="left">
				<div className="logo">
					<img src={Union} alt="" className="union" />
					<img src={Logo} alt="" className="lendsqr" />
				</div>
				<img src={LoginImg} alt="Pablo Signin" className="loginImg" />
			</div>
			<div className="right">
				<div className="heading">
					<h1>Welcome!</h1>
					<p>Enter details to login</p>
				</div>

				<Box component="form" noValidate sx={{ width: 500, pl: 12 }}>
					<TextField
						margin="normal"
						fullWidth
						id="email"
						placeholder="Email Address"
						name="email"
						sx={{ pb: 1 }}
					/>
					<TextField
						margin="normal"
						fullWidth
						name="password"
						placeholder="Password"
						type={showPassword ? "text" : "password"}
						id="password"
						sx={{ pb: 1 }}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<Button
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
									>
										{showPassword ? "Hide" : "Show"}
									</Button>
								</InputAdornment>
							),
						}}
					/>
					<p className="pRecover">Forgot password?</p>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{
							mt: 3,
							mb: 2,
							height: 50,
							background: "#39CDCC",
							fontSize: 16,
							fontWeight: 500,
						}}
						onClick={handleSubmit}
					>
						Log In
					</Button>
				</Box>
			</div>
		</div>
	);
};

export default Login;
