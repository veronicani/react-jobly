import fetchMock from '@fetch-mock/jest';
import JoblyApi from 'src/api';
import { mockCompanies, mockJobs, mockUser, mockToken } from 'src/tests/setup/mockData';

describe('JoblyApi', () => {
  beforeEach(() => {
    fetchMock.mockReset();
    JoblyApi.token = '';
  });

  describe('getCompanies', () => {
    test('fetches all companies', async () => {
      fetchMock.get('path:/companies', {
        body: { companies: mockCompanies },
        status: 200
      });

      const companies = await JoblyApi.getCompanies();
      expect(companies).toEqual(mockCompanies);
    });

    test('fetches companies with search term', async () => {
      const filteredCompanies = [mockCompanies[0]];
      fetchMock.get({ url: 'path:/companies', query: { nameLike: 'One' } }, {
        body: { companies: filteredCompanies },
        status: 200
      });

      const companies = await JoblyApi.getCompanies('One');
      expect(companies).toEqual(filteredCompanies);
    });
  });

  describe('getCompany', () => {
    test('fetches single company by handle', async () => {
      const company = { ...mockCompanies[0], jobs: [mockJobs[0]] };
      fetchMock.get('path:/companies/company1', {
        body: { company },
        status: 200
      });

      const result = await JoblyApi.getCompany('company1');
      expect(result).toEqual(company);
    });
    
    test('throws error for nonexistent company', async () => {
      fetchMock.get('path:/companies/nonexistent', {
        body: { error: { message: 'Company not found' } },
        status: 404
      });

      await expect(JoblyApi.getCompany('nonexistent')).rejects.toEqual(['Company not found']);
    });
  });

  describe('getJobs', () => {
    test('fetches all jobs', async () => {
      fetchMock.get('path:/jobs', {
        body: { jobs: mockJobs },
        status: 200
      });

      const jobs = await JoblyApi.getJobs();
      expect(jobs).toEqual(mockJobs);
    });

    test('fetches jobs with search term', async () => {
      const filteredJobs = [mockJobs[0]];
      fetchMock.get('path:/jobs', {
        body: { jobs: filteredJobs },
        status: 200
      });

      const jobs = await JoblyApi.getJobs('Engineer');
      expect(jobs).toEqual(filteredJobs);
    });
  });

  describe('registerUser', () => {
    test('registers new user and returns token', async () => {
      fetchMock.post('path:/auth/register', {
        body: { token: mockToken },
        status: 200
      });

      const token = await JoblyApi.registerUser(
        'newuser',
        'password',
        'New',
        'User',
        'new@test.com'
      );

      expect(token).toBe(mockToken);
      expect(JoblyApi.token).toBe(mockToken);
    });

    test('throws error on duplicate username', async () => {
      fetchMock.post('path:/auth/register', {
        body: { error: { message: 'Username already exists' } },
        status: 400
      });

      await expect(
        JoblyApi.registerUser('existing', 'pass123', 'John', 'Doe', 'john@test.com')
      ).rejects.toEqual(['Username already exists']);
    });

    test('throws error on invalid email', async () => {
      fetchMock.post('path:/auth/register', {
        body: { error: { message: 'Invalid email format' } },
        status: 400
      });

      await expect(
        JoblyApi.registerUser('newuser', 'pass123', 'John', 'Doe', 'invalid-email')
      ).rejects.toEqual(['Invalid email format']);
    });
    
    test('handles multiple errors', async () => {
      const err_msgs = ['Username already exists', 'Invalid email format'];
      fetchMock.post('path:/auth/register', {
        body: { error: { message: err_msgs } },
        status: 400
      });

      await expect(
        JoblyApi.registerUser('newuser', 'pass123', 'John', 'Doe', 'invalid-email')
      ).rejects.toEqual(err_msgs);
    });

    test('handles server error on registration', async () => {
      fetchMock.post('path:/auth/register', {
        body: { error: { message: 'Server error' } },
        status: 500
      });

      await expect(
        JoblyApi.registerUser('user', 'pass', 'John', 'Doe', 'john@test.com')
      ).rejects.toEqual(['Server error']);
    });
  });

  describe('loginUser', () => {
    test('logs in user and returns token', async () => {
      fetchMock.post('path:/auth/token', {
        body: { token: mockToken },
        status: 200
      });

      const token = await JoblyApi.loginUser('testuser', 'password');
      expect(token).toBe(mockToken);
      expect(JoblyApi.token).toBe(mockToken);
    });

    test('throws error on invalid credentials', async () => {
      fetchMock.post('path:/auth/token', {
        body: { error: { message: 'Invalid username/password' } },
        status: 401
      });

      await expect(JoblyApi.loginUser('baduser', 'wrongpass'))
        .rejects.toEqual(['Invalid username/password']);
    });

  });

  describe('getUser', () => {
    test('fetches user data', async () => {
      fetchMock.get('path:/users/testuser', {
        body: { user: mockUser },
        status: 200
      });

      const user = await JoblyApi.getUser('testuser');
      expect(user).toEqual(mockUser);
    });
  });
});
