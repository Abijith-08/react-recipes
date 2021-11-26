import React, { useEffect, useState } from 'react'
import './App.css';
import Recipe from './Recipe';

const App = () => {
const APP_ID = "1475a000";
const APP_KEY = "628f8482c4d55cdd67efa07af2806f71";
const [recipes, setRecipes] = useState([]);
const [calories, setCalories] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState("");
useEffect(() => {
	getRecipes();
}, [query])
const getRecipes = async () => {
	const response = await fetch
		(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
	const data = await response.json();
	setRecipes(data.hits);
	// console.log(data);

};
const updateSearch = e => {
	setSearch(e.target.value);
};
const getSearch = e => {
	e.preventDefault();
	setQuery(search);
	setSearch("");
}

return (
	<div className="App">
	<form className="search-form" onSubmit={getSearch} >
		<input className="search-bar" type="text" value={search}
			onChange={updateSearch} />
		<button className="search-button" type="submit" >
			Search
		</button>
	</form>

	<form className="calories-filter" onSubmit={getSearch} >
		<input className="filter-bar" type="text" value={search}
			onChange={updateSearch} />
		<button className="filter-button" type="submit" >
			Search
		</button>
	</form>

	<div className="recipes">
		{recipes.map(recipe => (
		<Recipe
			key={recipe.recipe.label}
			title={recipe.recipe.label}

				/*
				take calories as input from user
				if calories <= input then show
			 	input = 100 million by default 
				 */

			calories={recipe.recipe.calories}
			image={recipe.recipe.image}
			ingredients={recipe.recipe.ingredients}
		/>

		))}
	</div>

	</div>
);
}

export default App;
