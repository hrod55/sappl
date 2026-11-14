import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the flying pig', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /when pigs fly/i })).toBeInTheDocument();
  expect(
    screen.getByRole('img', { name: /pig with wings flying through the sky/i })
  ).toBeInTheDocument();
});
