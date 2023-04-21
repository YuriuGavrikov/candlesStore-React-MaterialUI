import React from "react";

import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from "@mui/material";

export default function CardsItem(props) {
	const card = props.card;
	const addBasket = props.addBasket;
	return (
		<Card elevation={3}>
			<CardMedia
				sx={{ height: { xs: 250, md: 250, lg: 300 } }}
				component="img"
				fit="contain"
				image={card[4]}
				alt="img"
			/>
			<CardContent sx={{ px: 2 }}>
				<Typography gutterBottom variant="h5" component="div">
					{card[1]}
				</Typography>
				<Typography gutterBottom variant="body2" color="text.secondary">
					{card[2]}
				</Typography>
				<Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
					Цена: {card[3]}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					onClick={() => addBasket(card)}
					size="small"
					color="textColor"
					sx={{ p: 1, mt: -2 }}
				>
					В корзину
				</Button>
			</CardActions>
		</Card>
	);
}
