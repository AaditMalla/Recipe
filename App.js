import React, { useEffect, useState } from "react";
import Recipe from "./componets/Recipes";
import "./App.css";

const App = () => {
	const APP_ID = "f4e48637";
	const APP_KEY = " ba352afd6c5a794b854ee870de1f1d79";

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("chicken");

	useEffect(() => {
		getRecipes();
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await response.json();
		setRecipes(data.hits);
		console.log(data.hits);
	};

	const searchHandler = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch("");
	};

	return (
		<div className="App">
			<form onSubmit={getSearch} className="search-form">
				<input
					className="search-bar"
					type="text"
					value={search}
					onChange={searchHandler}
				/>
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
			<div className="container">
				{recipes.map((recipe) => (
					<Recipe
						key={recipe.recipe.label}
						ingredients={recipe.recipe.ingredients}
						title={recipe.recipe.label}
						calories={recipe.recipe.calories}
						image={recipe.recipe.image}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
