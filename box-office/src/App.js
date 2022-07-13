import React from "react";
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route  path="/starred">
        This is home page.
        </Route>

        <Route path="/">
          Page is 404 not found
        </Route>
    </Switch>
  );
}

export default App;
