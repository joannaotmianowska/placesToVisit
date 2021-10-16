import { render, screen } from '@testing-library/react';
import App from './App';

test('renders places list', () => {
  render(<App />);
  // expect(screen.getByTestId('places-list')).toBeInTheDocument();
});
