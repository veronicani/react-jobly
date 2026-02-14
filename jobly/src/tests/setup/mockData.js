export const mockCompanies = [
  {
    handle: 'company1',
    name: 'Company One',
    description: 'Description for Company One',
    numEmployees: 100,
    logoUrl: '/logos/company1.png'
  },
  {
    handle: 'company2',
    name: 'Company Two',
    description: 'Description for Company Two',
    numEmployees: 200,
    logoUrl: '/logos/company2.png'
  }
];

export const mockJobs = [
  {
    id: 1,
    title: 'Software Engineer',
    salary: 100000,
    equity: '0.1',
    companyHandle: 'company1',
    companyName: 'Company One'
  },
  {
    id: 2,
    title: 'Product Manager',
    salary: 120000,
    equity: '0',
    companyHandle: 'company2',
    companyName: 'Company Two'
  },
  {
    id: 3,
    title: 'Designer',
    salary: 90000,
    equity: '0.05',
    companyHandle: 'company1',
    companyName: 'Company One'
  }
];

export const mockUser = {
  username: 'testuser',
  firstName: 'Test',
  lastName: 'User',
  email: 'test@test.com',
  isAdmin: false,
  applications: [1]
};

export const mockToken = 'mock-jwt-token-12345';
