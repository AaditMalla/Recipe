import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
	return (
		<div className="recipe-container">
			<h1 className="title">{title}</h1>

			<p className="calories">{calories}</p>
			<img className="images" src={image} alt="" />
			<ul className="ingedrient-list">
				{ingredients.map((ingredient) => (
					<li>{ingredient.text}</li>
				))}
			</ul>
		</div>
	);
};

export default Recipe;
