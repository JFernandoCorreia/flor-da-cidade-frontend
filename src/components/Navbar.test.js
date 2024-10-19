import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

test('renders Navbar links correctly', () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );
  expect(screen.getByText(/homepage/i)).toBeInTheDocument();
});

test('toggle menu works in mobile view', () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );
  const toggleButton = screen.getByRole('button');
  fireEvent.click(toggleButton);
  expect(screen.getByText(/login de funcionário/i)).toBeVisible();
});
