import './App.css';
import React, { useState } from 'react';
import { AuthProvider } from './auth/AuthContext';
import AuthUI from './auth/AuthUI';
import Dashboard from './Dashboard';


function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthSuccess = (authenticatedUser) => {
    console.log('User authenticated:', authenticatedUser);
    setUser(authenticatedUser);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    console.log('User logged out');
  };

  return (
    <AuthProvider>
      {isAuthenticated ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <AuthUI onSuccess={handleAuthSuccess} />
      )}
    </AuthProvider>
  );
}

export default App;