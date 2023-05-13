import { ReactNode } from 'react';
import { FilteredJobsProvider, FilterProvider, JobsProvider, SortProvider, ThemeProvider, UserProvider } from '.';

interface Props {
  children: ReactNode;
}

export function ContextsProvider({ children }: Props) {
  return (
    <ThemeProvider>
      <UserProvider>
        <JobsProvider>
          <FilterProvider>
            <FilteredJobsProvider>
              <SortProvider>{children}</SortProvider>
            </FilteredJobsProvider>
          </FilterProvider>
        </JobsProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
