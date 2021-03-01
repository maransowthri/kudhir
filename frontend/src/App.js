import Layout from "./components/Layout/Layout";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Layout>
        <main className="Main">
          <HomePage />
        </main>
      </Layout>
    </div>
  );
}

export default App;
