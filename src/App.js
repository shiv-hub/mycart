
import './App.css';
import Login from "./components/Login/Login.js"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom" 
import Home from './components/Home/Home';
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
       <Route path="/" exact component={Login}/>
      <Route path="/home" exact component={Home}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
