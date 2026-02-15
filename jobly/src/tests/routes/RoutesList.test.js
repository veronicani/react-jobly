import { render, screen } from 'src/tests/setup/testUtils';
import RoutesList from 'src/routes/RoutesList';
import { mockUser } from 'src/tests/setup/mockData';
import fetchMock from '@fetch-mock/jest';
import { mockCompanies } from 'src/tests/setup/mockData';

describe('RoutesList', () => {
  const mockLogin = jest.fn();
  const mockSignUp = jest.fn();

  test('renders homepage at root path', () => {
    render(
        <RoutesList login={mockLogin} signUp={mockSignUp} />,
        { initialEntries: ['/'] }
    );

    expect(screen.getByText(/all the jobs/i)).toBeInTheDocument();
  });

  test('renders login form at /login when not logged in', () => {
    render(
        <RoutesList login={mockLogin} signUp={mockSignUp} />,
        { initialEntries: ['/login'] }
    );

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test('renders signup form at /signup when not logged in', () => {
    render(
        <RoutesList login={mockLogin} signUp={mockSignUp} />,
        { initialEntries: ['/signup'] }
    );

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
  });

  test('redirects to home for unknown routes', () => {
    render(
        <RoutesList login={mockLogin} signUp={mockSignUp} />,
        { initialEntries: ['/some/unknown/path'] }
    );

    expect(screen.getByText(/all the jobs/i)).toBeInTheDocument();
  });

  test('renders protected routes when logged in', async () => {
    fetchMock.get('path:/companies', {
    body: { companies: mockCompanies },
    status: 200
    });
    
  render(
        <RoutesList login={mockLogin} signUp={mockSignUp} />
        , { user: mockUser, initialEntries: ['/companies'] }
    );

    const firstCompany = await screen.findAllByText(new RegExp(mockCompanies[0].name, 'i'));
    expect(firstCompany[0]).toBeInTheDocument();
  });
});
