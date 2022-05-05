import React from 'react';
import { Footer } from '../components/index';
import './layout.css';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow shrink basis-auto ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
