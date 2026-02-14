import { render, screen } from '@testing-library/react';
import App from 'src/App';

test('renders without crashing', () => {
  render(<App />);
});

test('renders Jobly branding', () => {
  render(<App />);
  const joblyElements = screen.getAllByText(/jobly/i);
  expect(joblyElements.length).toBeGreaterThan(0);
});
