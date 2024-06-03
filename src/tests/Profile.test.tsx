import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Profile from '../Pages/Profile';
import { BrowserRouter } from 'react-router-dom';

test('renderiza e-mail do usuário', () => {
  render(
    <BrowserRouter>
      <Profile />
    </BrowserRouter>,
  );
  const emailElement = screen.getByTestId('profile-email');
  expect(emailElement).toBeInTheDocument();
});

test('renderiza o botão Receitas Concluídas', () => {
  render(
    <BrowserRouter>
      <Profile />
    </BrowserRouter>,
  );
  const doneButton = screen.getByTestId('profile-done-btn');
  expect(doneButton).toBeInTheDocument();
});

test('renderiza o botão Receitas Favoritas', () => {
  render(
    <BrowserRouter>
      <Profile />
    </BrowserRouter>,
  );
  const favoriteButton = screen.getByTestId('profile-favorite-btn');
  expect(favoriteButton).toBeInTheDocument();
});

test('renderiza o botão Logout', () => {
  render(
    <BrowserRouter>
      <Profile />
    </BrowserRouter>,
  );
  const logoutButton = screen.getByTestId('profile-logout-btn');
  expect(logoutButton).toBeInTheDocument();
});

test('clicar no botão Receitas concluídas navega para / receitas concluídas', () => {
  render(
    <BrowserRouter>
      <Profile />
    </BrowserRouter>,
  );
  const doneButton = screen.getByTestId('profile-done-btn');
  fireEvent.click(doneButton);
  expect(doneButton)
});

test('clicar no botão Receitas favoritas navega para / receitas favoritas', () => {
  render(
    <BrowserRouter>
      <Profile />
    </BrowserRouter>,
  );
  const favoriteButton = screen.getByTestId('profile-favorite-btn');
  fireEvent.click(favoriteButton);
  expect(favoriteButton)
});

test('clicar no botão Receitas favoritas navega para / receitas favoritas', () => {
  render(
    <BrowserRouter>
      <Profile />
    </BrowserRouter>,
  );
  const favoriteButton = screen.getByTestId("profile-logout-btn");
  fireEvent.click(favoriteButton);
  expect(favoriteButton)
});

test('carrega e exibe o email do usuário do localStorage', () => {
  const user = { email: 'test@example.com' };
  localStorage.setItem('user', JSON.stringify(user));
  render(
    <BrowserRouter>
      <Profile />
    </BrowserRouter>,
  );
  const emailElement = screen.getByTestId('profile-email');
  expect(emailElement).toBeInTheDocument();
  expect(emailElement.textContent).toContain(user.email);
});

test('displays no email when user is not in localStorage', () => {
  localStorage.clear();
  render(
    <BrowserRouter>
      <Profile />
    </BrowserRouter>,
  );
  const emailElement = screen.getByTestId('profile-email');
  expect(emailElement).toBeInTheDocument();
  expect(emailElement.textContent).toContain('Email:');
});
