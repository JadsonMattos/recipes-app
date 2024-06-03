import { useEffect, useState } from 'react';
import {
  DataType,
  DrinksCategoryType,
  DrinksType,
  MealsCategoryType,
} from '../types/types';
import RecipeCard from './RecipeCard';
import api from '../utils/api';
import mapRecipeData from '../utils/mapRecipe';

type ResultType = {
  title: string;
  data: any;
};

function Recipes({ title, data }: ResultType) {
  const [recipeData, setRecipeData] = useState<DataType[] | null>(null);
  const [Result, setResult] = useState<any[] | null>(null);
  const [categoriaData, setCategoriaData] = useState<any[] | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const baseUrlMeals = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  const baseUrlDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

  async function fetchDrinks(urlbase: string) {
    const response: any = await fetch(`${urlbase}`);
    const dataApi = await response.json();
    return dataApi;
  }

  useEffect(() => {
    async function callApi() {
      if (title === 'Drinks') {
        const fetchApiDrinks: DrinksType = await api('startDrinkUrl');
        const categoriasDrink: DrinksCategoryType = await api('categoriasDrinkStar');
        setRecipeData(fetchApiDrinks.drinks);
        setCategoriaData(categoriasDrink.drinks);
        setResult(fetchApiDrinks.drinks);
      } if (title === 'Meals') {
        const fetchApiMeals: any = await fetchDrinks('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const categoriasMeal: MealsCategoryType = await api('categoriasMealStar');
        if (fetchApiMeals.meals && fetchApiMeals.meals.length > 0) {
          setRecipeData(fetchApiMeals.meals);
          setCategoriaData(categoriasMeal.meals);
          setResult(fetchApiMeals.meals);
        }
      }
    } callApi();
  }, [title, data]);
  useEffect(() => {
    async function name() {
      if (selectedOption !== null) {
        if (title === 'Drinks') {
          const categoriasDrink: any = await api(selectedOption, baseUrlDrinks, 'Filter');
          setRecipeData(categoriasDrink.drinks);
        }
        if (title === 'Meals') {
          const categoriasMeal: any = await api(selectedOption, baseUrlMeals, 'Filter');
          setRecipeData(categoriasMeal.meals);
        }
      }
    } name();
  }, [selectedOption, title]);

  return (
    <div>
      <h1>{`Receitas: ${title}`}</h1>
      {categoriaData && categoriaData.slice(0, 5).map((categoria: any) => (
        <button
          data-testid={ `${categoria.strCategory}-category-filter` }
          key={ categoria.strCategory }
          value={ categoria.strCategory }
          onClick={ () => {
            if (categoria.strCategory === null) {
              setSelectedOption(null);
            } else {
              setSelectedOption(categoria.strCategory);
              setRecipeData(Result);
            }
          } }
        >
          Nome:
          {categoria.strCategory}
        </button>
      ))}
      <button
        data-testid="All-category-filter"
        onClick={ () => { setRecipeData(Result); } }
      >
        All
      </button>
      {(data && data.length > 0 ? data : recipeData)
        && (data && data.length > 0 ? data : recipeData).slice(0, 12)
          .map((recipe: DataType, index: any) => {
            const mappedRecipe = mapRecipeData(recipe);
            return (
              <RecipeCard
                key={ `${mappedRecipe.id}-${title}` }
                photo={ mappedRecipe.strThumb }
                name={ mappedRecipe.strName }
                id={ `${mappedRecipe.id}` }
                title={ title }
                index={ index }
              />
            );
          })}
    </div>
  );
}

export default Recipes;
