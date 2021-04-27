import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

import { NavBar } from "./navBar.js";
import { Jumbotron } from "./Jumbotron.js";

//create your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<Jumbotron />
		</div>
	);
}
