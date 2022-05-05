import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-4 bg-gray-300">
      <p className="text-center"> &copy; Increasio, {new Date().getFullYear()}</p>
    </footer>
  );
};
