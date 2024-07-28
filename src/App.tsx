import React from 'react';
import { AuthProvider } from './hooks/AuthContext';
import './App.css';
import Layout from './components/Layout/Layout';
import { AppRoutes } from './components/AppRoutes/AppRoutes';

function App() {
  return (
    <AuthProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </AuthProvider>);
}

export default App;
