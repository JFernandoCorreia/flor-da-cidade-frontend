import { render, screen, fireEvent } from '@testing-library/react';
import RegisterPage from './RegisterPage';

test('displays error message when CPF is invalid', () => {
  render(<RegisterPage />);
  const cpfInput = screen.getByPlaceholderText('CPF');
  fireEvent.change(cpfInput, { target: { value: '12345678900' } });
  fireEvent.submit(screen.getByText('Cadastrar'));
  expect(screen.getByText(/erro ao cadastrar/i)).toBeInTheDocument();
});
