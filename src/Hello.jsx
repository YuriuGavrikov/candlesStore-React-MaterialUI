import React from "react";
import { Paper } from "@mui/material";

export default function Hello() {
	return (
		<Paper
			sx={{
				backgroundImage: `url('hello.JPG')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: { xs: 400, md: 600 },
				mb: 4,
			}}
			elevation={12}
			square
		></Paper>
	);
}
