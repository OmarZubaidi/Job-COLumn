import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../contexts/theme';
import { UserProvider } from '../contexts/user';
import Welcome from './welcome'
const Wrapper = ({ children }) => ( // TODO move into general file, we will need this in all components that include useNavigate
  <MemoryRouter>
    <UserProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </UserProvider>
  </MemoryRouter>
);

describe('Error component', () => {

  test('Welcome should render correctly', () => {
    render(
          <Welcome />
     , { wrapper: Wrapper });
     expect(screen.getByText('is a job board that considers the cost of living.')).toBeInTheDocument();
     expect(screen.getByRole('button', {name: /Start/i})).toBeInTheDocument();
     expect(screen.getByLabelText("Toggle Light Mode")).toBeInTheDocument();
     expect(screen.getByDisplayValue("20000")).toBeInTheDocument();
     expect(screen.getByText("London")).toBeInTheDocument();
  });

  // TODO
  // test('should render form children', () => {}
});