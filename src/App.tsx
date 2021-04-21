import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import Todos from "./Todos";
import HockeyCards from "./HockeyCards";

import exercises from "exercises";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="App-nav">
            <ul>
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>

              {exercises.map((exercise) => (
                <li key={exercise.path}>
                  <NavLink to={exercise.path}>{exercise.label}</NavLink>
                </li>
              ))}

              <li>
                <NavLink to="/todo">Example - Todo app</NavLink>
              </li>

              <li>
                <NavLink to="/hockey-cards">Example - Hockey cards app</NavLink>
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

            <Route>
              <div style={{ textAlign: "center" }}>
                <h1>Welcome to React Training!</h1>
                <h2>Pick some exercise or example</h2>
              </div>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
