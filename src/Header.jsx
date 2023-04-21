import React from "react";
import DropBasket from "./DropBasket";
import {
	Button,
	ButtonGroup,
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Главная", "Каталог", "О Нас"];

export default function Header(props) {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<div>
			<AppBar position="static" sx={{ mb: 2 }} elevation={4}>
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Box
							sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
						>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}
							>
								{pages.map((page) => (
									<MenuItem key={page} onClick={handleCloseNavMenu}>
										<Typography textAlign="center">{page}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>

						<Box sx={{ flexGrow: { xs: "none", md: "1" } }}>
							<img src="logo.svg" alt="logo" />
						</Box>
						<ButtonGroup
							sx={{ display: { xs: "none", md: "flex" }, mr: 5 }}
							color="textColor"
							variant="text"
							aria-label="text button group"
						>
							{pages.map((page) => (
								<Button key={page} onClick={handleCloseNavMenu}>
									{page}
								</Button>
							))}
						</ButtonGroup>
						<DropBasket basket={props.basket} />
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
}
