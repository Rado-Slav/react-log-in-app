import React from "react";
import { AuthProvider } from "./hooks/AuthContext";
import { LanguageProvider } from "./hooks/ChangeLanguage";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { AppRoutes } from "./components/AppRoutes/AppRoutes";

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
