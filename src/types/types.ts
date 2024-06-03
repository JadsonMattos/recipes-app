export type RootState = {
  data: DataType[],
};

export type DataType = {
  id: string,
  strThumb?: string,
  strName?: string,
  strCategory: string,
  strInstructions: string,
  strYoutube: string,
};

export type RecipeDetailsProps = {
  strThumb: string,
  strName: string,
  strCategory: string,
  strIngredients: string[],
  strInstructions: string,
  strYoutube: string,
};

export type MealsType = {
  meals: RecipeMeals[];
};

export type DrinksType = {
  drinks: RecipeDrinks[];
};

export type MealsCategoryType = {
  meals: StrCategory[];
};

export type DrinksCategoryType = {
  drinks: StrCategory[];
};

export type StrCategory = {
  strCategory: string,
};

export type RecipeMeals = {
  id: string,
  strMealsThumb: string,
  strMeals: string,
  strCategory: string,
  strInstructions: string,
  strYoutube: string,
};

export type RecipeDrinks = {
  id: string,
  strDrinksThumb: string,
  strDrinks: string,
  strCategory: string,
  strInstructions: string,
  strYoutube: string,
};
