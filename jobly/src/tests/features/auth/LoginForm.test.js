import { render, screen, fireEvent, waitFor } from 'src/tests/setup/testUtils';
import LoginForm from 'src/features/auth/LoginForm/LoginForm';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('LoginForm', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });
  test('renders login form fields', () => {
    const mockLogin = jest.fn();
    render(<LoginForm login={mockLogin} />);

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('user fills form and submits successfully, redirects to homepage', async () => {
    const mockLogin = jest.fn().mockResolvedValue(undefined);
    render(<LoginForm login={mockLogin} />);

    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => expect(mockLogin).toHaveBeenCalledWith({
      username: 'testuser',
      password: 'password123'
    }));
    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/'));
  });

  test('displays error message on login failure', async () => {
    const mockLogin = jest.fn().mockRejectedValue(['Invalid credentials']);
    render(<LoginForm login={mockLogin} />);

    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(usernameInput, { target: { value: 'baduser' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpass' } });
    fireEvent.click(submitButton);

    expect(await screen.findByText('Invalid credentials')).toBeInTheDocument();
  });
});
