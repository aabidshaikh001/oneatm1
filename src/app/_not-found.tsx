'use client';

import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8 text-lg text-center">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link to="/" className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
