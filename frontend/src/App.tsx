import Layout from "./components/Layout/Layout";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "pages/HomePage/HomePage";
import FeedPage from "pages/FeedPage/FeedPage";
import MembersPage from "pages/MembersPage/MembersPage";
import AboutPage from "pages/AboutPage/AboutPage";
import SignInPage from "pages/SignInPage/SignInPage";
import ProjectDetailPage from "pages/ProjectDetailPage/ProjectDetailPage";
import ReceivedFundsPage from "pages/FundsPage/ReceivedFundsPage/ReceivedFundsPage";
import TargetedFundsPage from "pages/FundsPage/TargetedFundsPage/TargetedFundsPage";
import DeliveredFundsPage from "pages/FundsPage/DeliveredFundsPage/DeliveredFundsPage";
import Error404Page from "components/UI/Error404Page/Error404Page";

const App: React.FC = () => {
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
            <Route component={Error404Page} />
          </Switch>
        </main>
      </Layout>
    </div>
  );
};

export default App;
