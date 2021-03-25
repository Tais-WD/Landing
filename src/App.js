import React from 'react-dom';
import Header from './components/Header.js';
import MainContent from "./components/sections/MainContent";
import Footer from './components/Footer';
import Conditions from './components/sections/Conditions'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/" render={(props) => <MainContent {...props} />} />
            <Route exact path="/conditions" render={(props) => <Conditions {...props} />} />
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
