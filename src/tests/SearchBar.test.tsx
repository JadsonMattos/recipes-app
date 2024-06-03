import { fireEvent, screen } from '@testing-library/react';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../redux/Reduce';
import renderWithRouter from '../renderWithRouter';
import SearchBar from '../componentes/SearchBar';

test('test de busca', async () => {
  const store = createStore(rootReducer);

  const { user } = renderWithRouter(
    <Provider store={ store }>
      <SearchBar title="Meals" />
    </Provider>,
  );
  const inputElement = screen.getByTestId('search-input') as HTMLInputElement;
  expect(inputElement).toBeInTheDocument();
  fireEvent.change(inputElement, { target: { value: 'chicken' } });
  expect(inputElement.value).toBe('chicken');

  const FirstLetterOptio = screen.getByTestId('first-letter-search-radio') as HTMLInputElement;
  expect(FirstLetterOptio).toBeInTheDocument();
  expect(screen.getByText('Primeira letra'));
  await user.click(FirstLetterOptio);
  expect(FirstLetterOptio).toBeChecked();
  const IngredientOption = screen.getByTestId('ingredient-search-radio');
  expect(IngredientOption).toBeInTheDocument();
  expect(screen.getByText('Ingrediente'));
  await user.click(IngredientOption);
  expect(IngredientOption).toBeChecked();
  const nameOptio = screen.getByTestId('name-search-radio');
  expect(nameOptio).toBeInTheDocument();
  expect(screen.getByText('Nome'));
  await user.click(nameOptio);
  expect(nameOptio).toBeChecked();
  const bunttonBuscar = screen.getByRole('button', { name: /Buscar/i });
  expect(bunttonBuscar).toBeInTheDocument();
});
