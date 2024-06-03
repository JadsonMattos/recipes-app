import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './RecipeDetails.css'; // Import the CSS file
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

type RecipeDetailsType = {
  title: string;
};

type Carousel = {
  name: string;
  image: string;
};

function RecipeDetails({ title }: RecipeDetailsType) {
  const { idDaReceita } = useParams();
  const navigate = useNavigate();
  const mealsApi = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
  const drinksApi = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
  const recommendedDrink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const recommendedMeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const [data, setData] = useState<any | any>(null);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [meal, setMeal] = useState(false);
  const [carousel, setCarousel] = useState([]);
  const [recipe, setRecipe] = useState(false);
  const [notification, setNotification] = useState('');
  const [isFavorite, setIsFavorite] = useState(false); // Added for favorite state
  const titulo = title.toLowerCase();
  const linkToRecipe = `http://localhost:3000/${titulo}/${idDaReceita}`;

  async function apiFetchId(urlbase: string, idDaReceitan: string | undefined) {
    const response: any = await fetch(`${urlbase}${idDaReceitan}`);
    const dataApi = await response.json();
    return dataApi;
  }

  async function apiFetchRecomended(urlbase: string) {
    const response: any = await fetch(`${urlbase}`);
    const apiData = await response.json();
    return apiData;
  }
  useEffect(() => {
    async function getCarousel() {
      if (title === 'Drinks') {
        const fetchRecommendedMeals: any = await apiFetchRecomended(recommendedMeals);
        fetchCarousel(await fetchRecommendedMeals.meals, 'meals');
      } if (title === 'Meals') {
        const fetchRecommendedDrinks: any = await apiFetchRecomended(recommendedDrink);
        if (fetchRecommendedDrinks.drinks && fetchRecommendedDrinks.drinks.length > 0) {
          fetchCarousel(await fetchRecommendedDrinks.drinks, 'drinks');
        }
      }
    }
    getCarousel();
    async function fetchCarousel(dataCarousel: any, mealsOrDrink: string) {
      const items = dataCarousel.slice(0, 6).map((item: any) => ({
        name: mealsOrDrink === 'meals' ? item.strMeal : item.strDrink,
        image: mealsOrDrink === 'meals' ? item.strMealThumb : item.strDrinkThumb,
      }));
      setCarousel(items);
    }
  }, [title, drinksApi, mealsApi, idDaReceita, setCarousel]);

  useEffect(() => {
    async function getData() {
      if (title === 'Drinks') {
        const fetchApiDrinks: any = await apiFetchId(drinksApi, idDaReceita);
        setData(await fetchApiDrinks.drinks[0]);
        setIngredients(parseIngredients(await fetchApiDrinks.drinks[0]));
      }
      if (title === 'Meals') {
        setMeal(true);
        const fetchApiMeals: any = await apiFetchId(mealsApi, idDaReceita);
        if (fetchApiMeals.meals && fetchApiMeals.meals.length > 0) {
          setData(await fetchApiMeals.meals[0]);
          setIngredients(parseIngredients(await fetchApiMeals.meals[0]));
        }
      }
    }
    getData();
  }, [title, drinksApi, mealsApi, idDaReceita]);

  function parseIngredients(dataIng: any | undefined) {
    const dataingredients: string[] = [];
    if (dataIng) {
      for (let i = 1; i <= 20; i++) {
        const ingredient = dataIng[`strIngredient${i}`];
        if (ingredient && ingredient.trim() !== '') {
          const measurement = dataIng[`strMeasure${i}`] || '';
          dataingredients.push(`${measurement} ${ingredient}`);
        }
      }
    }
    return dataingredients;
  }

  function mapRecipeData(iten: any) {
    return {
      strThumb: iten?.strMealThumb || iten?.strDrinkThumb || '',
      strName: iten?.strMeal || iten?.strDrink || '',
      strCategory: iten?.strCategory || '',
      strAlcoholic: iten?.strAlcoholic || '',
      strArea: iten?.strArea || '',
      strInstructions: iten?.strInstructions,
      strYoutube: iten?.strYoutube,
    };
  }

  function btntrue() {
    setRecipe(!recipe);
    navigate(`/${titulo}/${idDaReceita}/in-progress`);
  }

  const handleShareClick = () => {
    navigator.clipboard.writeText(linkToRecipe)
      .then(() => {
        setNotification('Link copied!');
        setTimeout(() => {
          setNotification('');
        }, 3000);
      })
      .catch((err) => {
        console.error('Erro ao copiar o link: ', err);
      });
  };

  async function handleFavoriteClick() {
    const alcoholic = await mapRecipeData(data)
      .strAlcoholic ? mapRecipeData(data).strAlcoholic : '';
    const nationality = await mapRecipeData(data)
      .strArea ? mapRecipeData(data).strArea : '';
    const Category = await mapRecipeData(data)
      .strCategory ? mapRecipeData(data).strCategory : '';
    const recipeToFavorite = {
      id: idDaReceita,
      type: title === 'Meals' ? 'meal' : 'drink',
      nationality,
      category: Category,
      alcoholicOrNot: alcoholic,
      name: mapRecipeData(data).strName,
      image: mapRecipeData(data).strThumb,
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

  useEffect(() => {
    const favoriteRecipesJSON = localStorage.getItem('favoriteRecipes');
    const favoriteRecipes = favoriteRecipesJSON ? JSON.parse(favoriteRecipesJSON) : [];
    const isRecipeFavorited = favoriteRecipes
      .some((favRecipe: any) => favRecipe.id === idDaReceita);

    if (isRecipeFavorited) {
      setIsFavorite(true);
    }
  }, [title, idDaReceita]);

  return (
    <div>
      <h1>Recipe Details</h1>
      <br />
      <h1 data-testid="recipe-title">{mapRecipeData(data).strName}</h1>
      <img data-testid="recipe-photo" src={ mapRecipeData(data).strThumb } alt="" />
      {meal ? (
        <h1
          data-testid="recipe-category"
        >
          {data && data.length > 0 ? data.category : mapRecipeData(data).strCategory}
        </h1>
      ) : (
        <h1
          data-testid="recipe-category"
        >
          {data && data.length > 0 ? data.alcoholic : mapRecipeData(data).strAlcoholic}
        </h1>
      )}
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li
            data-testid={ `${index}-ingredient-name-and-measure` }
            key={ index }
          >
            { ingredient }
          </li>
        ))}
      </ul>
      <span data-testid="instructions">{mapRecipeData(data).strInstructions}</span>
      {meal && (
        <span
          data-testid="video"
        >
          {data && data.length > 0 ? data.strYoutube : ''}
        </span>
      )}
      <button onClick={ handleShareClick } data-testid="share-btn">Compartilhar</button>
      {notification && <div>{notification}</div>}
      <img src="src/images/shareIcon.svg" alt="" />
      <button
        onClick={ handleFavoriteClick }
      >
        <img
          src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
          alt="Favorite"
          data-testid="favorite-btn"
        />
      </button>
      {carousel.length > 1 && (
        <div className="divao">
          <div className="carousel-container">
            {carousel.slice(0, 6).map((item: Carousel, index) => (
              <div
                className="carousel-div"
                data-testid={ `${index}-recommendation-card` }
                key={ index }
              >
                <p data-testid={ `${index}-recommendation-title` }>{item.name}</p>
                <img src={ item.image } alt={ item.name } width="100%" />
              </div>
            ))}
          </div>
        </div>
      )}
      <button data-testid="start-recipe-btn" className="fixed-button" onClick={ btntrue }>
        {recipe === false ? 'Start Recipe' : 'Continue Recipe'}
      </button>
    </div>
  );
}

export default RecipeDetails;
