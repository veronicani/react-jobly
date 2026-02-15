import { render, screen, fireEvent, waitFor } from 'src/tests/setup/testUtils';
import SignUpForm from 'src/features/auth/SignUpForm/SignUpForm';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('SignUpForm', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });
  test('renders signup form fields', () => {
    const mockSignUp = jest.fn();
    render(<SignUpForm signUp={mockSignUp} />);

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('user fills form and submits successfully, redirects to homepage', async () => {
    const mockSignUp = jest.fn().mockResolvedValue(undefined);
    render(<SignUpForm signUp={mockSignUp} />);

    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'newuser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });

    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    await waitFor(() => expect(mockSignUp).toHaveBeenCalledWith({
      username: 'newuser',
      password: 'password123',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com'
    }));
    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/'));
  });

  test('displays error message on signup failure', async () => {
    const mockSignUp = jest.fn().mockRejectedValue(['Username already taken']);
    render(<SignUpForm signUp={mockSignUp} />);

    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'existinguser' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });

    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    expect(await screen.findByText('Username already taken')).toBeInTheDocument();
  });
});
