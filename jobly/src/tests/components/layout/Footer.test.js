import { render, screen } from 'src/tests/setup/testUtils';
import Footer from 'src/components/layout/Footer/Footer';

describe('Footer', () => {
  test('renders footer content', () => {
    render(<Footer />);

    expect(screen.getByText(/Hero image from Adobe Stock/i)).toBeInTheDocument();
    expect(screen.getByText(/Background image from Vecteezy/i)).toBeInTheDocument();
  });

  test('renders GitHub link', () => {
    render(<Footer />);

    const githubLink = screen.getByRole('link');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/veronicani/react-jobly');
  });
});
