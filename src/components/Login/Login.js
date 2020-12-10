import {React,useEffect,useState} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent,CardActions, TextField,Button } from '@material-ui/core';
import "./Login.css";

import axios from "axios";



const Login = () => {

const [email, setEmail] = useState("");
const [pwd, setPwd] = useState("");
const [user, setUser] = useState({});
const [errorStatus, setErrorStatus] = useState(true)

useEffect(() => {
 localStorage.setItem("token",user.token);
 if(user.token)
window.location="/home";
}, [user])

async function getUsersData(){
   
  let data = JSON.stringify({
  userName: email,
  pwd: pwd
});
  try {
     const response=await axios.post(
              'http://localhost:8090/api/authenticate',
              data,{headers:{"Content-Type" : "application/json"}});

              console.log(response.data);
              console.log(response.status);
              setUser(response.data);
              console.log(user);
      
  } catch (error) {
    setErrorStatus(false);
    console.log(error.message);
  }
  
 
}
    
const formHandler=async (event)=>{
 event.preventDefault();
        console.log("Email : ",email);
        console.log("Password : ",pwd);

      getUsersData();
      
        
}


const inputOneEvent=(event)=>{
  setEmail(event.target.value);
}

const inputTwoEvent=(event)=>{
  setPwd(event.target.value);
}

    return (
        <>
        
          <AppBar position="static">
  <Toolbar variant="dense">
    <Typography variant="h6" color="inherit">
      Welcome to Login 
    </Typography>
  </Toolbar>
</AppBar>  

{/* form */}

    <h1>{user.email}</h1>

<div hidden={errorStatus} >
  <h4>Inavalid Credentials</h4>
</div>
<div className="cardContainer">
    <div>
<Card className="cardForm">
  <form 
  className="loginForm" 
  noValidate
  onSubmit={formHandler}
   autoComplete="off">

  <CardContent>            
  <TextField
          id="standard-password-input"
          label="Email"
          type="email"
          value={email}
          required
          onChange={inputOneEvent}
        />
       <TextField
          id="standard-password-input"
          required
          label="Password"
          type="password"
          value={pwd}
          onChange={inputTwoEvent}
          autoComplete="current-password"
        />

      </CardContent>
      <CardActions>
        <Button 
        type="submit"
        variant="contained" color="primary"
        >Log In</Button>
        
        <Button variant="outlined" color="secondary">Forget password?</Button>
      </CardActions>
      </form>
    </Card>
</div>
</div>
        </>
    )
}

export default Login
