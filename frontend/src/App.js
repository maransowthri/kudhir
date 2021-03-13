import Layout from "./components/Layout/Layout";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import FeedPage from "./pages/FeedPage/FeedPage";
import MembersPage from "./pages/MembersPage/MembersPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import ProjectDetailPage from "./pages/ProjectDetailPage/ProjectDetailPage";
import ReceivedFundsPage from "./pages/ReceivedFundsPage/ReceivedFundsPage";
import TargetedFundsPage from "./pages/TargetedFundsPage/TargetedFundsPage";
import DeliveredFundsPage from "./pages/DeliveredFundsPage/DeliveredFundsPage";

function App() {
  return (
    <div className="App">
      <Layout>
        <main className="Main">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/members" exact component={MembersPage} />
            <Route path="/feed" exact component={FeedPage} />
            <Route path="/signin" exact component={SignInPage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/projects/:slug" exact component={ProjectDetailPage} />
            <Route
              path="/projects/:slug/received"
              exact
              component={ReceivedFundsPage}
            />
            <Route
              path="/projects/:slug/targeted"
              exact
              component={TargetedFundsPage}
            />
            <Route
              path="/projects/:slug/delivered"
              exact
              component={DeliveredFundsPage}
            />
            <Route render={() => <h3>404 Page</h3>} />
          </Switch>
        </main>
      </Layout>
    </div>
  );
}

export default App;
