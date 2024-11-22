import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders the search button', () => {
  render(<App />);
  const searchButton = screen.getByText(/search/i); // Finds the Search button
  expect(searchButton).toBeInTheDocument();
});

test('updates the search input value', () => {
  render(<App />);
  
  const searchInput = screen.getByRole('textbox'); 
  fireEvent.change(searchInput, { target: { value: 'banana' } }); 
  
  expect(searchInput.value).toBe('banana'); // Checks if the input value updates
});
