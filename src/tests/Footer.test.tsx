import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../componentes/Footer';

test('Redezira o componete', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>,
  );

  const footerElement = getByTestId('footer');
  const drinksButton = getByTestId('drinks-bottom-btn');
  const mealsButton = getByTestId('meals-bottom-btn');

  expect(footerElement).toBeInTheDocument();
  expect(drinksButton).toBeInTheDocument();
  expect(mealsButton).toBeInTheDocument();
});

test('Cteste botao de naegação drinks', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>,
  );
  const drinksButton = getByTestId('drinks-bottom-btn');
  fireEvent.click(drinksButton);
});

test('teste botao de naegação meals', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>,
  );
  const mealsButton = getByTestId('meals-bottom-btn');
  fireEvent.click(mealsButton);
});
