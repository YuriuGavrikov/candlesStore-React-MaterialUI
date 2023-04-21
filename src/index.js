import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
	palette: {
		primary: {
			main: grey[100],
		},
		textColor: {
			main: grey[600],
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
