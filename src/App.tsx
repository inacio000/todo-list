import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { RootState } from './store';
import ToDoPage from './pages/ToDoPage';

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <LoginPage /> : <Navigate to="/todo" />} />
        <Route path="/todo/*" element={isAuthenticated ? <ToDoPage /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={isAuthenticated ? "/todo" : "/login"} />} />
      </Routes>
    </Router>
  );
};

export default App;
