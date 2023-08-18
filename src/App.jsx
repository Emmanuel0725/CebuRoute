import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DetailPage from './pages/DetailPage';
import DetailsData from './detailsData';

export default function App() {
  return (
    <div>
      <DetailPage />
    </div>
  );
}