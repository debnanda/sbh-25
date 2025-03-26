import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UserInputPage from './components/UserInputPage';
import VivaPage from './components/VivaPage';
import ReportPage from './components/ReportPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/input" component={UserInputPage} />
        <Route path="/viva" component={VivaPage} />
        <Route path="/report" component={ReportPage} />
      </Switch>
    </Router>
  );
}

export default App;
