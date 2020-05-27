import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Kurse from './pages/Kurse/Kurse';

const App = () => (
    <Router>
      <Header/>
      <Route exact path="/" component={Home} />
      <Route exact path="/kurse" component={Kurse} />
      <Footer/>
    </Router>
)

export default App;
