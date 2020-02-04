import React from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
        <Header />
        <Main />
    </BrowserRouter>
  );
}