import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupsPage from "./pages/NewMeetups";

const App = () => {
  //path is the portion after .com/
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact={true}>
            <AllMeetupsPage />
          </Route>
          <Route path="/new-meetup">
            <NewMeetupsPage />
          </Route>
          <Route path="/favourites">
            <FavouritesPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
