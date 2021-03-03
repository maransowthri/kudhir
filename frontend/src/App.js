import Layout from "./components/Layout/Layout";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import StoryPage from "./components/StoryPage/StoryPage";
import { Route, Switch } from "react-router-dom";
import MVCPage from "./components/MVCPage/MVCPage";
import AboutPage from "./components/AboutPage/AboutPage";
import SignInPage from "./components/SignInPage/SignInPage";

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
            <Route render={() => <h3>404 Page</h3>} />
          </Switch>
        </main>
      </Layout>
    </div>
  );
}

export default App;
