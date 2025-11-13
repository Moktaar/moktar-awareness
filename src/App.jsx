import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Admin = lazy(() => import('./pages/Admin'));
const Docs = lazy(() => import('./pages/Docs'));
const Awareness = lazy(() => import('./pages/Awareness'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={
        <div style={{
          padding: '2rem',
          fontFamily: 'monospace',
          color: '#ffffff',
          background: '#1a1a1a',
          textAlign: 'center'
        }}>
          <h2>🔄 Loading mythic component...</h2>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;