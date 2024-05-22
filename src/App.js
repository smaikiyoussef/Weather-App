import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
