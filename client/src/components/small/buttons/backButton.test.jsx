import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BackButton from './backButton';

const RouterWrapper = ({ children }) => ( // TODO move into general file, we will need this in all components that include useNavigate
  <MemoryRouter>
    {children}
  </MemoryRouter>
);

describe('Error component', () => {

  test('Button should render correctly', () => {
    render(<BackButton />, { wrapper: RouterWrapper });
    expect(screen.getByLabelText('Back button')).toBeInTheDocument();
  });

  // TODO
  // test('Click on button should take the user back to previous page', () => {
  //   render(<BackButton />, { wrapper: RouterWrapper });
  //   fireEvent.click(screen.getByLabelText('Back button'));
  // });
});