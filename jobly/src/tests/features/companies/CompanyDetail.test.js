import { render, screen, waitFor } from 'src/tests/setup/testUtils';
import fetchMock from '@fetch-mock/jest';
import CompanyDetail from 'src/features/companies/CompanyDetail/CompanyDetail';
import { mockCompanies, mockJobs } from 'src/tests/setup/mockData';

// Mock useParams to provide company handle
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ handle: 'company1' })
}));

describe('CompanyDetail', () => {
  beforeEach(() => {
    fetchMock.mockReset();
  });

  test('renders company details and jobs after loading', async () => {
    const companyWithJobs = { ...mockCompanies[0], jobs: [mockJobs[0]] };
    fetchMock.get('path:/companies/company1', {
      body: { company: companyWithJobs },
      status: 200
    });

    render(<CompanyDetail />);

    const mainHeading = await screen.findByRole('heading', { 
      level: 2, 
      name: new RegExp(companyWithJobs.name, 'i') 
    });

    expect(mainHeading).toBeInTheDocument();
    expect(screen.getByText(new RegExp(companyWithJobs.description, 'i'))).toBeInTheDocument();
    expect(screen.getByText(mockJobs[0].title)).toBeInTheDocument();
  });
});
