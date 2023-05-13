import { FocusStyleManager } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContextsProvider } from './contexts';
import { Error, Home, Jobs } from './pages';
import './App.scss';

// Accessibility
FocusStyleManager.onlyShowFocusOnTabs();

export function App() {
  return (
    <ContextsProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </ContextsProvider>
  );
}
