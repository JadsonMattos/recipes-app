import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FavoriteRecipes from '../Pages/Favorite-Recipes';

test('redezira  titulo', () => {
  render(<FavoriteRecipes />);
  const titleElement = screen.getByText('Favorite Recipes');
  expect(titleElement).toBeInTheDocument();
});

test('redezida os botoes de filtro', () => {
  render(<FavoriteRecipes />);
  const allButton = screen.getByTestId('filter-by-all-btn');
  const mealButton = screen.getByTestId('filter-by-meal-btn');
  const drinkButton = screen.getByTestId('filter-by-drink-btn');
  expect(allButton).toBeInTheDocument();
  expect(mealButton).toBeInTheDocument();
  expect(drinkButton).toBeInTheDocument();
});

test('verificar se redezida as receitas', () => {
  // Mock favorite recipes data
  const favoriteRecipes = [
    {
      name: 'Recipe 1',
      image: 'recipe1.jpg',
      category: 'Category 1',
      nationality: 'Nationality 1',
      isMeal: true,
      id: '1',
      type: 'meal',
    },
    // Add more recipe objects as needed
  ];

  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));

  render(<FavoriteRecipes />);

  // Check if favorite recipes are displayed
  for (const recipe of favoriteRecipes) {
    const nameElement = screen.getByText(recipe.name);
    expect(nameElement).toBeInTheDocument();
  }
});

test('filtro por meals', () => {
  // Mock favorite recipes data
  const favoriteRecipes = [
    {
      name: 'Meal Recipe 1',
      image: 'meal1.jpg',
      category: 'Category 1',
      nationality: 'Nationality 1',
      isMeal: true,
      id: '1',
      type: 'meal',
    },
    // Add more meal recipe objects as needed
    {
      name: 'Drink Recipe 1',
      image: 'drink1.jpg',
      category: 'Category 2',
      nationality: 'Nationality 2',
      isMeal: false,
      id: '2',
      type: 'drink',
    },
    // Add more drink recipe objects as needed
  ];

  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));

  render(<FavoriteRecipes />);

  const mealButton = screen.getByTestId('filter-by-meal-btn');
  fireEvent.click(mealButton);

  for (const recipe of favoriteRecipes) {
    if (recipe.type === 'meal') {
      const nameElement = screen.getByText(recipe.name);
      expect(nameElement).toBeInTheDocument();
    } else {
      const nameElement = screen.queryByText(recipe.name);
      expect(nameElement).not.toBeInTheDocument();
    }
  }
});

test('filters recipes by meals', async () => {
  render(<FavoriteRecipes />);
  const favoriteRecipes = [
    { name: 'Meal 1', type: 'meal' },
    { name: 'Drink 1', type: 'drink' },
    { name: 'Meal 2', type: 'meal' },
  ];

  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  for (const recipe of favoriteRecipes) {
    const nameElement = await screen.findByText('Meal Recipe 1');
    expect(nameElement).toBeInTheDocument();
  }
  const mealsFilterButton = screen.getByTestId('filter-by-meal-btn');
  fireEvent.click(mealsFilterButton);
  const mealRecipes = favoriteRecipes.filter((recipe) => recipe.type === 'meal');
  for (const recipe of mealRecipes) {
    const nameElement = await screen.findByText('Meal Recipe 1');
    expect(nameElement).toBeInTheDocument();
  }
});

test('filters recipes by drinks', () => {
  render(<FavoriteRecipes />);
  const favoriteRecipes = [
    { name: 'Meal 1', type: 'meal' },
    { name: 'Drink 1', type: 'drink' },
    { name: 'Meal 2', type: 'meal' },
  ];
  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  for (const recipe of favoriteRecipes) {
    const nameElement = screen.getByText(recipe.name);
    expect(nameElement).toBeInTheDocument();
  }
  const drinksFilterButton = screen.getByTestId('filter-by-drink-btn');
  fireEvent.click(drinksFilterButton);
  const drinkRecipes = favoriteRecipes.filter((recipe) => recipe.type === 'drink');
  for (const recipe of drinkRecipes) {
    const nameElement = screen.getByText(recipe.name);
    expect(nameElement).toBeInTheDocument();
  }
  const mealRecipes = favoriteRecipes.filter((recipe) => recipe.type === 'meal');
  for (const recipe of mealRecipes) {
    const nameElement = screen.queryByText(recipe.name);
    expect(nameElement).not.toBeInTheDocument();
  }
});

test('removes all filters and displays all recipes', () => {
  render(<FavoriteRecipes />);
  const favoriteRecipes = [
    { name: 'Meal 1', type: 'meal' },
    { name: 'Drink 1', type: 'drink' },
    { name: 'Meal 2', type: 'meal' },
  ];
  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  for (const recipe of favoriteRecipes) {
    const nameElement = screen.getByText(recipe.name);
    expect(nameElement).toBeInTheDocument();
  }
  const mealsFilterButton = screen.getByTestId('filter-by-meal-btn');
  fireEvent.click(mealsFilterButton);
  const mealRecipes = favoriteRecipes.filter((recipe) => recipe.type === 'meal');
  for (const recipe of mealRecipes) {
    const nameElement = screen.getByText(recipe.name);
    expect(nameElement).toBeInTheDocument();
  }
  const allFilterButton = screen.getByTestId('filter-by-all-btn');
  fireEvent.click(allFilterButton);
  for (const recipe of favoriteRecipes) {
    const nameElement = screen.getByText(recipe.name);
    expect(nameElement).toBeInTheDocument();
  }
});
