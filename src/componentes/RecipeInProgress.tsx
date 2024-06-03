import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../utils/api';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

type RecipeInProgressProps = {
  title: string;
};

function RecipeInProgress({ title }: RecipeInProgressProps) {
  const { idDaReceita } = useParams();
  const mealsApi = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const drinksApi = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
  const [data, setData] = useState<any | null>(null);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [notification, setNotification] = useState('');
  const [inChecklist, setInChecklist] = useState<boolean[]>([]);
  const [allIngredientsChecked, setAllIngredientsChecked] = useState(false);
  const navigate = useNavigate();

  const linkToRecipe = `http://localhost:3000/${title.toLowerCase()}/${idDaReceita}`;

  async function handleFavoriteClick() {
    const alcoholic = (data?.strAlcoholic) ? data.strAlcoholic : '';
    const nationality = (data?.strArea) ? data.strArea : '';
    const Category = (data?.strCategory) ? data.strCategory : '';
    const recipeToFavorite = {
      id: idDaReceita,
      type: title === 'Meals' ? 'meal' : 'drink',
      nationality,
      category: Category,
      alcoholicOrNot: alcoholic,
      name: data?.strMeal || data?.strDrink || '',
      image: data?.strMealThumb || data?.strDrinkThumb || '',
    };
    const favoriteRecipesJSON = localStorage.getItem('favoriteRecipes');
    const favoriteRecipes = favoriteRecipesJSON ? JSON.parse(favoriteRecipesJSON) : [];
    const isRecipeFavorited = favoriteRecipes
      .some((favRecipe: any) => favRecipe.id === recipeToFavorite.id);

    if (isRecipeFavorited) {
      const updatedFavorites = favoriteRecipes
        .filter((favRecipe: any) => favRecipe.id !== idDaReceita);
      localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
    } else {
      favoriteRecipes.push(recipeToFavorite);
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    }
    setIsFavorite(!isFavorite);
  }

  async function handleFinishRecipe() {
    const allChecked = inChecklist.every((checked) => checked);
    function prepareCompletedRecipe() {
      const {
        strAlcoholic,
        strArea,
        strCategory,
        strMeal,
        strDrink,
        strMealThumb,
        strDrinkThumb,
        strTags,
      } = data || {};
      const completedRecipe = {
        id: idDaReceita,
        nationality: strArea || '',
        name: strMeal || strDrink || '',
        category: strCategory || '',
        image: strMealThumb || strDrinkThumb || '',
        tags: strTags ? strTags.split(',') : [],
        alcoholicOrNot: strAlcoholic || '',
        type: title === 'Meals' ? 'meal' : 'drink',
        doneDate: new Date().toISOString(),
      };
      return completedRecipe;
    }
    if (allChecked) {
      const doneRecipesJSON = localStorage.getItem('doneRecipes');
      const doneRecipes = doneRecipesJSON ? JSON.parse(doneRecipesJSON) : [];
      doneRecipes.push(await prepareCompletedRecipe());
      localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
      navigate('/done-recipes');
    }
  }

  useEffect(() => {
    const savedChecklist = localStorage.getItem('recipeChecklist');
    if (savedChecklist) {
      setInChecklist(JSON.parse(savedChecklist));
    }
  }, []);
  useEffect(() => {
    async function fetchData() {
      const apiURL = title === 'Meals' ? mealsApi : drinksApi;
      try {
        const response = await api(idDaReceita, apiURL, 'Filter');
        const recipeData: any = title === 'Meals' ? response
          .meals[0] : response.drinks[0];

        if (recipeData) {
          setData(recipeData);
          const parsedIngredients = parseIngredients(recipeData);
          setIngredients(parsedIngredients);
        }
      } catch (error) {
        console.error('Error fetching recipe data:', error);
      }
    }
    const parseIngredients = (recipeData: any) => {
      const parsedIngredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = recipeData[`strIngredient${i}`];
        const quantity = recipeData[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== '') {
          parsedIngredients.push(`${quantity} ${ingredient}`);
          inChecklist.push(false);
        }
      }
      return parsedIngredients;
    };
    fetchData();
  }, [idDaReceita, title]);

  const handleShareClick = () => {
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

  const handleCheckboxClick = (index: number) => {
    const updatedChecklist = [...inChecklist];
    updatedChecklist[index] = !updatedChecklist[index];
    setInChecklist(updatedChecklist);

    const areAllChecked = updatedChecklist.every((checked) => checked);
    setAllIngredientsChecked(areAllChecked);

    localStorage.setItem('recipeChecklist', JSON.stringify(updatedChecklist));
  };

  useEffect(() => {
    const favoriteRecipesJSON = localStorage.getItem('favoriteRecipes');
    const favoriteRecipes = favoriteRecipesJSON ? JSON.parse(favoriteRecipesJSON) : [];
    const isRecipeFavorited = favoriteRecipes
      .some((favRecipe: any) => favRecipe.id === idDaReceita);

    if (isRecipeFavorited) {
      setIsFavorite(true);
    }
  }, [title, idDaReceita]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 data-testid="recipe-title">{data.strMeal || data.strDrink}</h1>
      <img
        data-testid="recipe-photo"
        src={ title === 'Meals' ? data.strMealThumb : data.strDrinkThumb }
        alt=""
      />
      <h1 data-testid="recipe-category">
        {title === 'Meals' ? data.strCategory : data.strAlcoholic}
      </h1>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
            <label
              data-testid={ `${index}-ingredient-step` }
              style={ { textDecoration: inChecklist[index] ? 'line-through' : 'none' } }
            >
              <input
                type="checkbox"
                onClick={ () => handleCheckboxClick(index) }
                checked={ inChecklist[index] }
              />
              {ingredient}
            </label>
          </li>
        ))}
      </ul>
      <span data-testid="instructions">{data.strInstructions}</span>
      <button
        onClick={ handleFavoriteClick }
      >
        <img
          src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
          alt="Favorite"
          data-testid="favorite-btn"
        />
      </button>
      <button
        onClick={ handleFinishRecipe }
        data-testid="finish-recipe-btn"
        disabled={ !allIngredientsChecked }
      >
        Finalizar Receita
      </button>
      <button onClick={ handleShareClick } data-testid="share-btn">Compartilhar</button>
      {notification && <div>{notification}</div>}
    </div>
  );
}

export default RecipeInProgress;
