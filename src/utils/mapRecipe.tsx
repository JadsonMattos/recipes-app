function mapRecipeData(recipe: any) {
  return {
    id: recipe.idMeal || recipe.idDrink,
    strThumb: recipe.strMealThumb || recipe.strDrinkThumb,
    strName: recipe.strMeal || recipe.strDrink,
  };
}

export default mapRecipeData;
