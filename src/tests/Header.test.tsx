import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { screen } from '@testing-library/react';
import rootReducer from '../redux/Reduce';
import renderWithRouter from '../renderWithRouter';
import Header from '../componentes/Header';

test('Testa o componente Header', async () => {
  const store = createStore(rootReducer);

  const { user } = renderWithRouter(
    <Provider store={ store }>
      <Header title="Meals" search />
    </Provider>,
  );
  const profileButton = screen.getByTestId('profile-top-btn');
  expect(profileButton).toBeInTheDocument();

  const pageTitle = screen.getByTestId('page-title');
  expect(pageTitle).toBeInTheDocument();

  const searchIcon = screen.getByTestId('search-top-btn');
  expect(searchIcon).toBeInTheDocument();
  await user.click(searchIcon);

  const searchInput = screen.getByTestId('search-input');
  expect(searchInput).toBeInTheDocument();
  await user.click(profileButton);
});
