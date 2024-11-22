import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Recipe from './recipe';

test('renders the Recipe component with provided props', () => {
  const mockProps = {
    title: 'Test Recipe',
    calories: 250,
    image: 'test-image.jpg',
    ingredients: [
      { text: '1 cup flour' },
      { text: '2 eggs' },
      { text: '1/2 cup sugar' },
    ],
  };

  render(
    <Recipe
      title={mockProps.title}
      calories={mockProps.calories}
      image={mockProps.image}
      ingredients={mockProps.ingredients}
    />
  );

  // Check if the title is rendered
  const titleElement = screen.getByText(/test recipe/i);
  expect(titleElement).toBeInTheDocument();

  // Check if all ingredients are rendered
  const ingredientElements = screen.getAllByRole('listitem');
  expect(ingredientElements).toHaveLength(mockProps.ingredients.length);
  expect(screen.getByText('1 cup flour')).toBeInTheDocument();
  expect(screen.getByText('2 eggs')).toBeInTheDocument();
  expect(screen.getByText('1/2 cup sugar')).toBeInTheDocument();

  // Check if the calories are rendered
  const caloriesElement = screen.getByText(/calories : 250/i);
  expect(caloriesElement).toBeInTheDocument();

  // Check if the image is rendered with the correct source and alt text
//   const imageElement = screen.getByRole('img');
//   expect(imageElement).toHaveAttribute('src', 'test-image.jpg');
//   expect(imageElement).toHaveAttribute('alt', '');
});
