import { Route, Switch } from "react-router-dom";

import AllMeetupsPages from "./pages/AllMeetups";
import FavoritesPages from "./pages/Favorites";
import NewMeetupsPages from "./pages/NewMeetups";
import Layout from "./compnents/layouts/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPages />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupsPages />
        </Route>
        <Route path="/favorites">
          <FavoritesPages />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
