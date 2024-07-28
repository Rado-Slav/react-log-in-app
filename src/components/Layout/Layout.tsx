import React from 'react';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode; // The content of the page to be rendered inside the layout
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="header">
        <h1>Log In My App</h1>
        {/* navigation links or a logo here */}
      </header>
      <main className="main-content">
        {children} {/* Render the page content */}
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Created by Radoslav Mitov. All rights reserved.</p>
        {/* footer links or additional information here */}
      </footer>
    </div>
  );
};

export default Layout;