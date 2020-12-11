
import './App.css';
import Login from "./components/Login/Login.js"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom" 
import Home from './components/Home/Home';
import {Redirect} from "react-router-dom"
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
       <Route path="/" exact component={Login}/>
      {(localStorage.getItem("token"))?<Route path="/home" exact component={Home}/>:<Redirect to={"/"}/>}
      </Switch>
    </div>
    </Router>
  );
}


export default App;
