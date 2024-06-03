import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import RecipeDetails from '../componentes/RecipeDetails';
import renderWithRouter from '../renderWithRouter';

describe('Testando fetch', () => {
  afterEach(() => vi.clearAllMocks());

  it('fetches recipe details', async () => {
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
      <RecipeDetails title="Meals" />,
      { route: '/recipe/52977' },
    );
    const renderedRecipe = await screen.findByText('Start Recipe');
    expect(renderedRecipe).toBeInTheDocument();
  });
});
