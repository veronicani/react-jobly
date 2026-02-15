import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserContext from 'src/context/UserContext';

const mockUser = {
  username: 'testuser',
  firstName: 'Test',
  lastName: 'User',
  email: 'test@test.com',
  isAdmin: false,
  applications: []
};

function AllProviders({ children, user = {}, initialEntries = ['/'] }) {
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <UserContext.Provider value={{ user }}>
        {children}
      </UserContext.Provider>
    </MemoryRouter>
  );
}

const customRender = (ui, options = {}) => {
  const { user, initialEntries, ...renderOptions } = options;
  return render(ui, {
    wrapper: ({ children }) => (
      <AllProviders user={user} initialEntries={initialEntries}>{children}</AllProviders>
    ),
    ...renderOptions
  });
};

export * from '@testing-library/react';
export { customRender as render, mockUser };
