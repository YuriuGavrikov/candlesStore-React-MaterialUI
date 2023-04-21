import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Cards from "./Cards";
import Hello from "./Hello";

export default function App() {
	const [basket, setBasket] = useState([]);
	const [cards, setCards] = useState(null);

	const addBasket = (el) => {
		setBasket([...basket, el]);
	};

	useEffect(() => {
		const apiUrl =
			"https://script.google.com/macros/s/AKfycbxV9vBqnj19lv8rrNP1CHq4Jz6UIv2ohHcj3KGLcKH_WhnhmiCI1SL6QIFhS16kMeXw/exec";
		axios.get(apiUrl).then((resp) => {
			const allProducts = resp.data;
			setCards(allProducts);
		});
	}, [setCards]);

	return (
		<>
			<Header basket={basket} />
			<Hello />
			<Cards cards={cards} addBasket={addBasket} />
		</>
	);
}
