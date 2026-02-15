import { render, screen } from '../../setup/testUtils';
import Alert from 'src/components/common/Alert/Alert';

describe('Alert', () => {
  test('renders alert message', () => {
    render(<Alert message="Test error message" />);
    expect(screen.getByText('Test error message')).toBeInTheDocument();
  });

  test('applies danger styling', () => {
    render(<Alert message="Error!" />);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('alert-danger');
  });
});
