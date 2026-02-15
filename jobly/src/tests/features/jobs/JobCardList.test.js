import { getByRole, render, screen } from 'src/tests/setup/testUtils';
import JobCardList from 'src/features/jobs/JobCardList/JobCardList';
import { mockJobs } from 'src/tests/setup/mockData';

describe('JobCardList', () => {
  test('renders list of job cards', () => {
    render(<JobCardList filteredJobs={mockJobs} />);

    expect(screen.getByText(mockJobs[0].title)).toBeInTheDocument();
    expect(screen.getByText(mockJobs[1].title)).toBeInTheDocument();
    expect(screen.getByText(mockJobs[2].title)).toBeInTheDocument();
  });

  test('renders empty list', () => {
    render(<JobCardList filteredJobs={[]} />);

    const jobCards = screen.queryAllByRole('article', { name: 'Job Card' });
    expect(jobCards.length).toBe(0);
  });
});
