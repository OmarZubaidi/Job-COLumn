import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import { ThemeProvider } from '../contexts/theme';
import { FilterProvider } from '../contexts/filter';
import { FilteredJobsProvider } from '../contexts/filteredJobs';
import { JobsProvider } from '../contexts/jobs';
import { SortProvider } from '../contexts/sort';
import { UserProvider } from '../contexts/user';
import Sidebar from './sidebar';

const MockWrapper = ({ children }) => (
  <MemoryRouter>
    <ThemeProvider>
      <UserProvider>
        <JobsProvider>
          <FilterProvider>
            <FilteredJobsProvider>
              <SortProvider>
                {children}
              </SortProvider>
            </FilteredJobsProvider>
          </FilterProvider>
        </JobsProvider>
      </UserProvider>
    </ThemeProvider>
  </MemoryRouter>
);

describe('Dark mode button component', () => {

  test('Should render itself and children correctly', () => {
    render(<Sidebar/>, { wrapper: MockWrapper });

    expect(screen.getByText('logo.svg')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Toggle navbar button' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Toggle Dark Mode' })).toBeInTheDocument();
    expect(screen.getByText('Current Location')).toBeInTheDocument();
    expect(screen.getByText('Filter')).toBeInTheDocument();
    expect(screen.getByText('Sort by')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Back button' })).toBeInTheDocument();
  });

  test('Toggle navbar button hides navbar component', () => {
    render(<Sidebar/>, { wrapper: MockWrapper });
    const toggleButton = screen.getByRole('button', { name: 'Toggle navbar button' });

    expect(screen.getByText('Current Location')).toBeInTheDocument();
    userEvent.click(toggleButton);
    expect(screen.queryByText('Current Location')).not.toBeInTheDocument();
    userEvent.click(toggleButton);
    expect(screen.getByText('Current Location')).toBeInTheDocument();
  });
});