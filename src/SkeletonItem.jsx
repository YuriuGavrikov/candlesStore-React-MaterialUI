import React from "react";
import { Skeleton } from "@mui/material";

export default function SkeletonItem() {
	return (
		<>
			<Skeleton variant="rectangular" height={300} />
			<Skeleton height={30} width={120} />
			<Skeleton height={25} />
			<Skeleton height={30} width={100} />
		</>
	);
}
