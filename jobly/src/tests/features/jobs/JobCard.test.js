import { render, screen } from 'src/tests/setup/testUtils';
import JobCard from 'src/features/jobs/JobCard/JobCard';
import { mockJobs } from 'src/tests/setup/mockData';

describe('JobCard', () => {
  test('renders job information', () => {
    const job = mockJobs[0];
    render(<JobCard job={job} />);

    expect(screen.getByText(job.title)).toBeInTheDocument();
    expect(screen.getByText(`Company: ${job.companyName}`)).toBeInTheDocument();
    expect(screen.getByText(`Salary: ${job.salary}`)).toBeInTheDocument();
    expect(screen.getByText(`Equity: ${job.equity}`)).toBeInTheDocument();
  });
});
