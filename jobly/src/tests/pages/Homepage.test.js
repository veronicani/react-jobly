import { render, screen, fireEvent } from 'src/tests/setup/testUtils';
import Homepage from 'src/pages/Homepage/Homepage';
import { mockUser } from 'src/tests/setup/mockData';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Homepage', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test('shows login and signup buttons when not logged in', () => {
    render(<Homepage />);

    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
  });

  test('navigates to login when login button clicked', () => {
    render(<Homepage />);

    const loginButton = screen.getByRole('button', { name: /login/i });
    fireEvent.click(loginButton);

    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });

  test('navigates to signup when signup button clicked', () => {
    render(<Homepage />);

    const signupButton = screen.getByRole('button', { name: /sign up/i });
    fireEvent.click(signupButton);

    expect(mockNavigate).toHaveBeenCalledWith('/signup');
  });

  test('shows personalized welcome when logged in', () => {
    render(<Homepage />, { user: mockUser });

    expect(screen.getByText(new RegExp(mockUser.username, 'i'))).toBeInTheDocument();
  });

  test('does not show login/signup buttons when logged in', () => {
    render(<Homepage />, { user: mockUser });

    expect(screen.queryByRole('button', { name: /login/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /sign up/i })).not.toBeInTheDocument();
  });
});
