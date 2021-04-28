import React from "react";

//create your first component
export function Jumbotron() {
	return (
		<div className="jumbotron ">
			<h1 className="display-3">A Warm Welcome!</h1>
			<p className="lead">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Adipisci dolorum placeat culpa sapiente mollitia, esse atque id
				optio repellendus molestiae blanditiis cum illum tenetur
				voluptatum laudantium eveniet! Ad, culpa error.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#!" role="button">
					Call to action!
				</a>
			</p>
		</div>
	);
}
