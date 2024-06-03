import React, { useState, useEffect } from 'react';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

type Recipe = {
  name: string;
  image: string;
  category: string;
  nationality: string;
  isMeal: boolean;
  id: string;
  type: string;
};

function FavoriteRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    const favoriteRecipesData = JSON
      .parse(localStorage.getItem('favoriteRecipes') || '[]');
    setFavoriteRecipes(favoriteRecipesData);
    setFilteredRecipes(favoriteRecipesData);
  }, []);

  const handleShareClick = (id: string, type: string) => {
    const linkToRecipe = `http://localhost:3000/${type}/${id}`;
    navigator.clipboard.writeText(linkToRecipe)
      .then(() => {
        setNotification('Link copied!');
        setTimeout(() => {
          setNotification('');
        }, 3000);
      })
      .catch((err) => {
        console.error('Error copying the link: ', err);
      });
  };

  const handleFavoriteClick = (recipe: Recipe) => {
    const updatedFavorites = favoriteRecipes
      .filter((favRecipe) => favRecipe.id !== recipe.id);
    setFavoriteRecipes(updatedFavorites);
    localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
    setFilteredRecipes(updatedFavorites); // Após desfavoritar, atualize as receitas filtradas
  };

  const handleFilterByMeals = () => {
    const meals = favoriteRecipes
      .filter((recipe) => recipe.type === 'meal');
    setFilteredRecipes(meals);
  };

  const handleFilterByDrinks = () => {
    const drinks = favoriteRecipes
      .filter((recipe) => recipe.type === 'drink');
    setFilteredRecipes(drinks);
  };

  const handleRemoveFilters = () => {
    setFilteredRecipes(favoriteRecipes);
  };

  return (
    <div>
      <h1>Favorite Recipes</h1>
      <div>
        <button
          data-testid="filter-by-all-btn"
          onClick={ handleRemoveFilters }
        >
          All
        </button>
        <button
          data-testid="filter-by-meal-btn"
          onClick={ handleFilterByMeals }
        >
          Meals
        </button>
        <button
          data-testid="filter-by-drink-btn"
          onClick={ handleFilterByDrinks }
        >
          Drinks
        </button>
      </div>

      {filteredRecipes.map((recipe: Recipe, index) => (
        <div key={ index } className="recipe-card">
          <img
            src={ recipe.image }
            alt={ `${recipe.name} Recipe` }
            data-testid={ `${index}-horizontal-image` }
          />
          <p data-testid={ `${index}-horizontal-top-text` }>
            { filteredRecipes
            && filteredRecipes.length > 0
              ? `${recipe.nationality} - ${recipe.category}` : recipe.category }
          </p>
          <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
          <button
            onClick={ () => handleShareClick(recipe
              .id, (recipe.type === 'meal' ? 'meals' : 'drinks')) }
          >
            <img
              src={ shareIcon }
              alt="horizontal-share-btn"
              data-testid={ `${index}-horizontal-share-btn` }
            />
          </button>
          {notification && <div>{notification}</div>}
          <button
            onClick={ () => handleFavoriteClick(recipe) }
          >
            <img
              src={ blackHeartIcon }
              alt="Unfavorite Recipe"
              data-testid={ `${index}-horizontal-favorite-btn` }
            />
          </button>
        </div>
      ))}
    </div>
  );
}

export default FavoriteRecipes;
