import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { screen } from '@testing-library/dom';
import rootReducer from '../redux/Reduce';
import renderWithRouter from '../renderWithRouter';
import Login from '../componentes/Login';

test('Teste a página de Login com mais de 90% de coverage', async () => {
  const store = createStore(rootReducer);

  const { user } = renderWithRouter(
    <Provider store={ store }>
      <Login />
    </Provider>,
  );
  const email = screen.getByTestId('email-input');
  const password = screen.getByTestId('password-input');
  const button = screen.getByTestId('login-submit-btn');
  expect(button).toBeDisabled();
  await user.type(email, 'email@email.com');
  await user.type(password, '1234567');
  expect(button).toBeInTheDocument();
  await user.click(button);
});
