import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

const App = () => (
    <Router>
      <Header/>
      <Route exact path="/" component={Home} />
      <Footer/>
    </Router>
)

export default App;
