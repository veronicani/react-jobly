import { render, screen, waitFor } from 'src/tests/setup/testUtils';
import fetchMock from '@fetch-mock/jest';
import JobList from 'src/features/jobs/JobList/JobList';
import { mockJobs } from 'src/tests/setup/mockData';

describe('JobList', () => {
  beforeEach(() => {
    fetchMock.mockReset();
  });

  test('renders loading state initially', () => {
    fetchMock.get('path:/jobs', {
      body: { jobs: mockJobs },
      status: 200
    });

    render(<JobList />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders list of jobs after loading', async () => {
    fetchMock.get('path:/jobs', {
      body: { jobs: mockJobs },
      status: 200
    });

    render(<JobList />);

    expect(await screen.findByText(mockJobs[0].title)).toBeInTheDocument();
    expect(screen.getByText(mockJobs[1].title)).toBeInTheDocument();
    expect(screen.getByText(mockJobs[2].title)).toBeInTheDocument();
  });

  test('renders search bar', async () => {
    fetchMock.get('path:/jobs', {
      body: { jobs: mockJobs },
      status: 200
    });

    render(<JobList />);

    expect(await screen.findByPlaceholderText('Enter search term')).toBeInTheDocument();
  });
});
