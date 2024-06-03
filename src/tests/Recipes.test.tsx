import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import renderWithRouter from '../renderWithRouter';
import Recipes from '../componentes/Recipes';

describe('Testando fetch', () => {
  afterEach(() => vi.clearAllMocks());

  it('fetches recipe details Meals', async () => {
    const MOCK_RECIPE_DETAILS = {
      refeições: [
        {
          idMeal: '52977',
          strMeal: 'Corba',
          strCategory: 'Lado',
          strArea: 'Turco',
          strInstructions: 'Procure qualquer resíduo estranho em suas lentilhas, enxágue-as 2 ou 3 vezes, escorra e reserve. Aviso justo, isso provavelmente transformará suas lentilhas em um bloco sólido que você terá que quebrar mais tarde...',
          strMealThumb: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
        },
      ],
    };

    const mockFetchRecipeDetails = vi.fn(() => Promise.resolve({
      json: () => Promise.resolve(MOCK_RECIPE_DETAILS),
    } as Response));

    global.fetch = mockFetchRecipeDetails;

    renderWithRouter(
      <Recipes title="Meals" data={ null } />,
    );

    const Recipetxt = await screen.findByText('Receitas: Meals');
    const botaoRecipe = await screen.findByText('All');
    expect(Recipetxt).toBeInTheDocument();
    expect(botaoRecipe).toBeInTheDocument();

    expect(mockFetchRecipeDetails).toHaveBeenCalledTimes(1);
  });
  it('fetches recipe details Drinks', async () => {
    const MOCK_RECIPE_DETAILS = {
      refeições: [
        {
          idMeal: '52977',
          strMeal: 'Corba',
          strCategory: 'Lado',
          strArea: 'Turco',
          strInstructions: 'Procure qualquer resíduo estranho em suas lentilhas, enxágue-as 2 ou 3 vezes, escorra e reserve. Aviso justo, isso provavelmente transformará suas lentilhas em um bloco sólido que você terá que quebrar mais tarde...',
          strMealThumb: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
        },
      ],
    };

    const mockFetchRecipeDetails = vi.fn(() => Promise.resolve({
      json: () => Promise.resolve(MOCK_RECIPE_DETAILS),
    } as Response));

    global.fetch = mockFetchRecipeDetails;

    renderWithRouter(
      <Recipes title="Drinks" data={ null } />,
    );

    const Recipetxt = await screen.findByText('Receitas: Drinks');
    const botaoRecipe = await screen.findByText('All');
    expect(Recipetxt).toBeInTheDocument();
    expect(botaoRecipe).toBeInTheDocument();

    expect(mockFetchRecipeDetails).toHaveBeenCalledTimes(1);
  });
});
