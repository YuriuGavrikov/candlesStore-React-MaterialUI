import * as React from "react";

import {
	Box,
	Divider,
	Typography,
	Card,
	Badge,
	Menu,
	Avatar,
	CardHeader,
	IconButton,
} from "@mui/material";

import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function DropBasket(props) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Badge badgeContent={props.basket.length} color="success">
				<IconButton
					onClick={handleClick}
					sx={{
						m: -1.5,
					}}
				>
					<ShoppingBasketOutlinedIcon
						sx={{
							fontSize: 30,
						}}
						color="textColor"
					/>
				</IconButton>
			</Badge>

			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
			>
				<Box sx={{ width: 300 }}>
					<Typography sx={{ textAlign: "center", p: 1 }}>
						Корзина
					</Typography>
					<Divider />
					{props.basket.length === 0 ? (
						<Typography sx={{ textAlign: "center", p: 1 }}>
							Корзина пуста
						</Typography>
					) : (
						<>
							{props.basket.map((item) => (
								<Card key={item[0]} sx={{ m: 1 }}>
									<CardHeader
										avatar={
											<Avatar
												sx={{ width: 54, height: 54 }}
												aria-label="recipe"
												src={item[4]}
											></Avatar>
										}
										action={
											<IconButton aria-label="settings">
												<MoreVertIcon />
											</IconButton>
										}
										title={item[1]}
										// subheader={item[2]}
									/>
								</Card>
							))}
						</>
					)}
				</Box>
			</Menu>
		</div>
	);
}
