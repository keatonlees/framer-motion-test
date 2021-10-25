import React from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/HomePage";
import NewPage from "./pages/NewPage";

function App() {
  const imageSize = {
    width: 524,
    height: 650,
  };

  return (
    <Route
      render={({ location }) => (
        <AnimatePresence initial={false} exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route
              exact
              path="/"
              render={() => <HomePage imageSize={imageSize} />}
            />
            <Route
              exact
              path="/new"
              render={() => <NewPage imageSize={imageSize} />}
            />
          </Switch>
        </AnimatePresence>
      )}
    />
  );
}

export default App;
