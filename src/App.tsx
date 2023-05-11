import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FocusStyleManager } from "@blueprintjs/core";
// import { ThemeProvider } from "./components/contexts/theme";
// import { UserProvider } from "./components/contexts/user";
// import { JobsProvider } from "./components/contexts/jobs";
// import { FilterProvider } from "./components/contexts/filter";
// import { FilteredJobsProvider } from "./components/contexts/filteredJobs";
// import { SortProvider } from "./components/contexts/sort";
import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Error, Home } from "./pages";
import "./App.scss";

// Accessibility
FocusStyleManager.onlyShowFocusOnTabs();

export function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/jobs" element={<Jobs />} /> */}
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
      {/* TODO bring back contexts */}
      {/* <ThemeProvider>
        <UserProvider>
          <JobsProvider>
            <FilterProvider>
              <FilteredJobsProvider>
                <SortProvider>
                  {/* ROUTER STUFF GOES HERE *}
                </SortProvider>
              </FilteredJobsProvider>
            </FilterProvider>
          </JobsProvider>
        </UserProvider>
      </ThemeProvider> */}
    </>
  );
}
