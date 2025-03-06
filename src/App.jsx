import {Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import NavigateRoutes from './routes/NavigateRoutes';


export const App = () => {
  return (
      <Routes>
        <Route path="/*" element={<NavigateRoutes/>} />
        <Route path="/" element={<Navigate to="/welcome" />} />
      </Routes>
  );
};
