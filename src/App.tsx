import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Todos from "./Todos";
import HockeyCards from "./HockerCards";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todo">Todo</Link>
              </li>
              <li>
                <Link to="/hockey-cards">Hockey cards</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
            <Route path="/todo">
              <Todos />
            </Route>

            <Route path="/hockey-cards">
              <HockeyCards teamId={30} />
            </Route>

            <Route>Pick some</Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
