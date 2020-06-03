import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Kurse from './pages/Kurse/Kurse';
import Training from './pages/Training/Training';
import Gesundheit from './pages/Gesundheit/Gesundheit';
import RehaSport from './pages/RehaSport/RehaSport';
import Wellness from './pages/Wellness/Wellness';

const App = () => (
    <Router>
      <Header/>
      <Route exact path="/" component={Home} />
      <Route exact path="/kurse" component={Kurse} />
      <Route exact path="/training" component={Training} />
      <Route exact path="/gesundheit" component={Gesundheit} />
      <Route exact path="/rehasport" component={RehaSport} />
      <Route exact path="/wellness" component={Wellness} />
      <Footer/>
    </Router>
)

export default App;
