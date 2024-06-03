import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Dispatch, searchRecipes } from '../redux/Actions/action';
import api from '../utils/api';

type SearchBarType = {
  title: string;
};

function SearchBar({ title }: SearchBarType) {
  const navigate = useNavigate();
  const [product, setProduct] = useState('');
  const [baseUrl, setBaseUrl] = useState('');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dispatch: Dispatch = useDispatch();

  const mealUrl = 'https://www.themealdb.com/api/json/v1/1';
  const drinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

  useEffect(() => {
    if (title === 'Drinks') {
      setBaseUrl(drinkUrl);
    } if (title === 'Meals') {
      setBaseUrl(mealUrl);
    }
  }, [title]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (selectedOption === 'First letter' && product.length >= 2) {
      return window.alert('Your search must have only 1 (one) character');
    }
    const dataApi: any = await api(product, baseUrl, selectedOption);
    dispatch(searchRecipes(product, baseUrl, selectedOption));
    if (dataApi.meals?.length === 1) {
      const recipeId = dataApi.meals[0].idMeal;
      return navigate(`/meals/${recipeId}`);
    }
    if (dataApi.drinks?.length === 1) {
      const recipeId = dataApi.drinks[0].idDrink;
      return navigate(`/drinks/${recipeId}`);
    }
    if (dataApi.meals === null || dataApi.drinks === null) {
      return window.alert("Sorry, we haven't found any recipes for these filters.");
    }
  }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          data-testid="search-input"
          onChange={ (event) => setProduct(event.target.value) }
        />
        <label>
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            value="Ingredient"
            checked={ selectedOption === 'Ingredient' }
            onChange={ (event) => setSelectedOption(event.target.value) }
          />
          Ingrediente
        </label>
        <label>
          <input
            type="radio"
            data-testid="name-search-radio"
            value="Name"
            checked={ selectedOption === 'Name' }
            onChange={ (event) => setSelectedOption(event.target.value) }
          />
          Nome
        </label>
        <label
          htmlFor="first-letter-search"
        >
          <input
            type="radio"
            id="first-letter-search"
            data-testid="first-letter-search-radio"
            value="First letter"
            checked={ selectedOption === 'First letter' }
            onChange={ (event) => setSelectedOption(event.target.value) }
          />
          Primeira letra
        </label>
        <button
          type="submit"
          data-testid="exec-search-btn"
          className="Buscar"
          aria-label="Buscar"
        />
      </form>
    </div>
  );
}

export default SearchBar;
