import Layout from "./components/Layout/Layout";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import StoryPage from "./pages/StoryPage/StoryPage";
import MVCPage from "./pages/MVCPage/MVCPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import ProjectDetailPage from "./pages/ProjectDetailPage/ProjectDetailPage";

function App() {
  return (
    <div className="App">
      <Layout>
        <main className="Main">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/mvc" exact component={MVCPage} />
            <Route path="/story" exact component={StoryPage} />
            <Route path="/signin" exact component={SignInPage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/projects/:slug" component={ProjectDetailPage} />
            <Route render={() => <h3>404 Page</h3>} />
          </Switch>
        </main>
      </Layout>
    </div>
  );
}

export default App;
