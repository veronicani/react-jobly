import { render, screen } from 'src/tests/setup/testUtils';
import Navbar from 'src/components/layout/Navbar/Navbar';
import { mockUser } from 'src/tests/setup/mockData';

describe('Navbar', () => {
  test('shows login/signup links when not logged in', () => {
    const mockLogout = jest.fn();
    render(<Navbar logout={mockLogout} />);

    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Signup')).toBeInTheDocument();
    expect(screen.queryByText('Companies')).not.toBeInTheDocument();
    expect(screen.queryByText('Jobs')).not.toBeInTheDocument();
  });

  test('shows navigation links when logged in', () => {
    const mockLogout = jest.fn();
    render(<Navbar logout={mockLogout} />, { user: mockUser });

    expect(screen.getByText('Companies')).toBeInTheDocument();
    expect(screen.getByText('Jobs')).toBeInTheDocument();
    expect(screen.getByText(`${mockUser.username}'s Profile`)).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
    expect(screen.queryByText('Login')).not.toBeInTheDocument();
    expect(screen.queryByText('Signup')).not.toBeInTheDocument();
  });

  test('calls logout function when logout clicked', () => {
    const mockLogout = jest.fn();
    render(<Navbar logout={mockLogout} />, { user: mockUser });

    const logoutLink = screen.getByText('Logout');
    logoutLink.click();

    expect(mockLogout).toHaveBeenCalledTimes(1);
  });

  test('renders Jobly branding', () => {
    const mockLogout = jest.fn();
    render(<Navbar logout={mockLogout} />);

    expect(screen.getByText('Jobly')).toBeInTheDocument();
  });
});
