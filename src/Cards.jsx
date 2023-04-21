import React, { useState, useEffect } from "react";
import CardsItem from "./CardsItem";
import SkeletonItem from "./SkeletonItem";
import Catalog from "./Catalog";

import { Button, Container, Grid } from "@mui/material";

export default function Cards(props) {
	const cards = props.cards;
	const [currentlyCategory, setCurrentlyCategory] = useState(null);

	useEffect(() => {
		if (cards !== null) {
			setCurrentlyCategory(cards.result.catalog);
		}
	}, [cards]);

	const currentlyCategoryCatalog = () => {
		setCurrentlyCategory(cards.result.catalog);
	};

	const updateCurrentlyCategory = (value) => {
		setCurrentlyCategory(cards.result[value]);
	};

	return (
		<Container maxWidth="xl">
			<Button
				onClick={() => currentlyCategoryCatalog()}
				variant="h2"
				color="text.secondary"
				sx={{ my: 2, display: "block", width: "100%", height: 80 }}
			>
				Каталог
			</Button>
			<Grid
				spacing={4}
				container
				direction="row"
				justifyContent="center"
				alignItems="stretch"
			>
				{currentlyCategory === null ? (
					<>
						{[1, 2, 3].map((item) => (
							<Grid item key={item} xs={4.5} md={3.5} lg={3}>
								<SkeletonItem />
							</Grid>
						))}
					</>
				) : (
					<>
						{currentlyCategory.map((card) => (
							<Grid item key={card[0]} xs={5} md={3.5} lg={3}>
								{currentlyCategory === cards.result.catalog ? (
									<Catalog
										card={card}
										updateCurrentlyCategory={updateCurrentlyCategory}
									/>
								) : (
									<CardsItem card={card} addBasket={props.addBasket} />
								)}
							</Grid>
						))}
					</>
				)}
			</Grid>
		</Container>
	);
}
