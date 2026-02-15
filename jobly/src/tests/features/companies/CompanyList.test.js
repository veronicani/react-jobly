import { render, screen, waitFor } from 'src/tests/setup/testUtils';
import fetchMock from '@fetch-mock/jest';
import CompanyList from 'src/features/companies/CompanyList/CompanyList';
import { mockCompanies } from 'src/tests/setup/mockData';

describe('CompanyList', () => {
  beforeEach(() => {
    fetchMock.mockReset();
  });

  test('renders loading state initially', () => {
    fetchMock.get('path:/companies', {
      body: { companies: mockCompanies },
      status: 200
    });

    render(<CompanyList />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders list of companies after loading', async () => {
    fetchMock.get('path:/companies', {
      body: { companies: mockCompanies },
      status: 200
    });

    render(<CompanyList />);

    expect(await screen.findByText(mockCompanies[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockCompanies[1].name)).toBeInTheDocument();
  });

  test('renders search bar', async () => {
    fetchMock.get('path:/companies', {
      body: { companies: mockCompanies },
      status: 200
    });

    render(<CompanyList />);

    expect(await screen.findByPlaceholderText('Enter search term')).toBeInTheDocument();
  });
});
