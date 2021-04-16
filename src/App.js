import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <TodoList />
      </header>
    </div>
  );
};

export default App;
