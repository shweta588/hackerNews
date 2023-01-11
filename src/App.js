import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import Page from "./pages/common/Page";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div className="main">
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Page action="top" />
        </Route>
        <Route path="/top">
          <Page action="top" />
        </Route>
        <Route path="/best">
          <Page action="best" />
        </Route>
        <Route path="/new">
          <Page action="new" />
        </Route>
        <Route path="/ask">
          <Page action="ask" />
        </Route>
        <Route path="/job">
          <Page action="job" />
        </Route>
        <Route path="/show">
          <Page action="show" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
