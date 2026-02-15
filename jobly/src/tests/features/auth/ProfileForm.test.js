import { render, screen } from 'src/tests/setup/testUtils';
import ProfileForm from 'src/features/auth/ProfileForm/ProfileForm';
import { mockUser } from 'src/tests/setup/mockData';

describe('ProfileForm', () => {
  test('renders profile form with user data', () => {
    render(<ProfileForm />, { user: mockUser });

    expect(screen.getByDisplayValue(mockUser.username)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockUser.firstName)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockUser.lastName)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockUser.email)).toBeInTheDocument();
  });

  test('username field is disabled', () => {
    render(<ProfileForm />, { user: mockUser });

    const usernameInput = screen.getByDisplayValue(mockUser.username);
    expect(usernameInput).toBeDisabled();
  });

  test('renders save button', () => {
    render(<ProfileForm />, { user: mockUser });

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();
  });
});
