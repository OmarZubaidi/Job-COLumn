// TODO add README.md in root directory
// TODO convert to direct API call before deployment
// TODO environment variables for front-end. Reed and GMaps APIs.

// Package imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FocusStyleManager } from '@blueprintjs/core';

// Local imports
import Jobs from './components/jobs/jobs';
import Error from './components/small/error/error';
import Welcome from './components/welcome/welcome';
import { ThemeProvider } from './components/contexts/theme';
import { UserProvider } from './components/contexts/user';
import { JobsProvider } from './components/contexts/jobs';
import { FilterProvider } from './components/contexts/filter';
import { FilteredJobsProvider } from './components/contexts/filteredJobs';
import { SortProvider } from './components/contexts/sort';

// Styling
import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import './App.scss';

// Accessibility
FocusStyleManager.onlyShowFocusOnTabs();

function App () {
  return (
    <ThemeProvider>
      <UserProvider>
        <JobsProvider>
          <FilterProvider>
            <FilteredJobsProvider>
              <SortProvider>
                <Router>
                  <Routes>
                    <Route path='/' element={<Welcome />} />
                    <Route path='/jobs' element={<Jobs />} />
                    <Route path='/*' element={<Error />} />
                  </Routes>
                </Router>
              </SortProvider>
            </FilteredJobsProvider>
          </FilterProvider>
        </JobsProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
