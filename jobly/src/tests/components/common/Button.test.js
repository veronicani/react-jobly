import { render, screen } from '../../setup/testUtils';
import Button from 'src/components/common/Button/Button';

describe('Button', () => {
  test('renders button with label', () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('calls handleClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" handleClick={handleClick} />);

    const button = screen.getByText('Click Me');
    button.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies custom classes', () => {
    render(<Button label="Custom" classes="custom-class" />);
    const button = screen.getByText('Custom');
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveClass('btn');
  });
});
