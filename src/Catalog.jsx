import React from "react";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function Catalog(props) {
	const card = props.card;
	const updateCurrentlyCategory = props.updateCurrentlyCategory;

	return (
		<Card
			elevation={3}
			onClick={(e) =>
				card[0] === "sashe" || "candles" || "candlesPlaster"
					? updateCurrentlyCategory(card[0])
					: console.log(card[0])
			}
		>
			<CardMedia
				sx={{ height: { xs: 300, md: 300, lg: 350 } }}
				component="img"
				fit="contain"
				image={card[4]}
				alt="img"
			/>
			<CardContent sx={{ py: 6 }}>
				<Typography
					sx={{ textAlign: "center" }}
					color="text.secondary"
					gutterBottom
					variant="h5"
					component="div"
				>
					{card[1]}
				</Typography>
			</CardContent>
		</Card>
	);
}
