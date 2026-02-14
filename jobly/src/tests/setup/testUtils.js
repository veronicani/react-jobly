import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserContext from 'src/context/UserContext';

const mockUser = {
  username: 'testuser',
  firstName: 'Test',
  lastName: 'User',
  email: 'test@test.com',
  isAdmin: false,
  applications: []
};

function AllProviders({ children, user = null }) {
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user }}>
        {children}
      </UserContext.Provider>
    </BrowserRouter>
  );
}

const customRender = (ui, options = {}) => {
  const { user, ...renderOptions } = options;
  return render(ui, {
    wrapper: ({ children }) => (
      <AllProviders user={user}>{children}</AllProviders>
    ),
    ...renderOptions
  });
};

export * from '@testing-library/react';
export { customRender as render, mockUser };
