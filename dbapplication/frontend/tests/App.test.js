import { render, screen } from '@testing-library/react';
import App from './App';

test('renders User Management header', () => {
  render(<App />);

  // Check if the "User Management" header is rendered
  const headerElement = screen.getByText(/User Management/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders Add User button', () => {
  render(<App />);

  // Check if the "Add User" button is rendered
  const buttonElement = screen.getByText(/Add User/i);
  expect(buttonElement).toBeInTheDocument();
});
