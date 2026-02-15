import { render, screen } from 'src/tests/setup/testUtils';
import CompanyCard from 'src/features/companies/CompanyCard/CompanyCard';
import { mockCompanies } from 'src/tests/setup/mockData';

describe('CompanyCard', () => {
  test('renders company information', () => {
    const company = mockCompanies[0];
    render(<CompanyCard company={company} />);

    expect(screen.getByText(company.name)).toBeInTheDocument();
    expect(screen.getByText(company.description)).toBeInTheDocument();
  });

  test('links to company detail page', () => {
    const company = mockCompanies[0];
    render(<CompanyCard company={company} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/companies/${company.handle}`);
  });

  test('renders company logo if provided', () => {
    const company = mockCompanies[0];
    render(<CompanyCard company={company} />);

    const logo = screen.getByAltText(`${company.name} logo`);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', expect.stringContaining(company.logoUrl));
  });
});
