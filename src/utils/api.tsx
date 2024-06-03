import {
  DrinksCategoryType,
  DrinksType,
  MealsCategoryType,
  MealsType,
} from '../types/types';

async function api(
  params: string | undefined,
  baseUrl?: string,
  type?: string | null,
) {
  const startMealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const startDrinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const categoriasDrinkStar = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const categoriasMealStar = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

  try {
    if (params === 'startMealUrl') {
      const response: any = await fetch(`${startMealUrl}`);
      const data: MealsType | unknown = await response.json();
      return data;
    }
    if (params === 'startDrinkUrl') {
      const response: any = await fetch(`${startDrinkUrl}`);
      const data: DrinksType | unknown = await response.json();
      return data;
    }
    if (params === 'categoriasMealStar') {
      const response: any = await fetch(`${categoriasMealStar}`);
      const data: DrinksCategoryType = await response.json();
      return data;
    }
    if (params === 'categoriasDrinkStar') {
      const response: any = await fetch(`${categoriasDrinkStar}`);
      const data: MealsCategoryType = await response.json();
      return data;
    }
    if (type === 'Filter') {
      const response: any = await fetch(`${baseUrl}${params}`);
      const data = await response.json();
      return data;
    }
    if (type === 'Ingredient') {
      const response: any = await fetch(`${baseUrl}/filter.php?i=${params}`);
      const data = await response.json();
      return data;
    }
    if (type === 'Name') {
      const response: any = await fetch(`${baseUrl}/search.php?s=${params}`);
      const data = await response.json();
      return data;
    }
    if (type === 'First letter') {
      const response: any = await fetch(`${baseUrl}/search.php?f=${params}`);
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

export default api;
