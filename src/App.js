import React from 'react';
import Avtar from './components/Avtar';
import Avtardisplay from './components/Avtardisplay';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Menu from './components/Navbar';
function App() {
  return (
    <>
      <Router>
      <Menu /> 
        <Switch>
          <Route exact path="/" component={Avtar} />
          <Route exact path="/display" component={Avtardisplay} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
