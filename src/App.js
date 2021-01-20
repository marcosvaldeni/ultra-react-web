import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Navbar from './components/Navbar/Navbar';


const App = () => {
  return (
    <Router>
      <Navbar />
      <GlobalStyle />
    </Router>
  );
}

export default App;
