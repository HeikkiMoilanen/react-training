import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Todos from "./Todos";
import HockeyCards from "./HockerCards";

import exercises from "exercises";

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

              {exercises.map((exercise) => (
                <li key={exercise.path}>
                  <Link to={exercise.path}>{exercise.label}</Link>
                </li>
              ))}

              <li>
                <Link to="/todo">Example Todo app</Link>
              </li>

              <li>
                <Link to="/hockey-cards">Example Hockey cards app</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
            <Route path="/todo">
              <Todos />
            </Route>

            {exercises.map((exercise) => (
              <Route
                key={exercise.path}
                path={exercise.path}
                component={exercise.component}
              />
            ))}

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
