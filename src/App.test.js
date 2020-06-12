import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders heading', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Cat Index/i);
  expect(linkElement).toBeInTheDocument();
});
