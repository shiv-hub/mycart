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
const [emailError, setEmailError] = useState("")
const [pwdError, setPwdError] = useState("")
const [errorValidateEmail, setErrorValidateEmail] = useState(false);
const [errorValidatePwd, setErrorValidatePwd] = useState(false);



useEffect(() => {
 if(user.token){
 localStorage.setItem("token",user.token);
  window.location="/home";
 }

}, [user])

async function getUsersData(){
  let data = JSON.stringify({
  userName: email,
  pwd: pwd
});
  try {
     const response=await axios.post(
              'http://localhost:8090/ur/authenticate',
              data,{headers:{"Content-Type" : "application/json"}});

              console.log(response.data);
              console.log(response.status);
              setUser(response.data);
              console.log(user);
              console.log("working");
      
  } catch (error) {
    setErrorStatus(false);
    console.log(error.message);
  }
  
 
}
    
const validate=()=>{
    if(!email.includes("@") && pwd.length<4){
      setEmailError("Invalid username")
      setEmail("");
      setPwdError("password should be greater than 3");
      setPwd("");
    }
     else if(!email.includes("@")){
      setEmailError("Invalid username")
      setEmail("");
    }
     else if(pwd.length<4){
      setPwdError("password should be greater than 3");
      setPwd("");
    }
    else{
      return true;
    }

    
}

const formHandler=async (event)=>{
 event.preventDefault();
        console.log("Email : ",email);
        console.log("Password : ",pwd);

        if(validate())
        getUsersData();
      
        
}


const inputOneEvent=(event)=>{
  setEmail(event.target.value);
  setEmailError("");
}

const inputTwoEvent=(event)=>{
  setPwd(event.target.value);
  setPwdError("");
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

<div className="form-container">
  <CardContent >            
  <TextField
          id="standard-password-input"
          label="Email"
          type="email"
          value={email}
          error={errorValidateEmail}
          helperText={emailError}
          required
          onChange={inputOneEvent}
        />
        
       <TextField
          id="standard-password-input"
          required
          label="Password"
          type="password"
          value={pwd}
          error={errorValidatePwd}
          helperText={pwdError}
          onChange={inputTwoEvent}
          autoComplete="current-password"
        />
      

      </CardContent>
      <CardActions className="logInButton">
        <Button 
        type="submit"
        size="large"
        variant="contained" color="primary"
        >Log In</Button>
      </CardActions>
       <Button size="small" color="secondary">Forget password?</Button>
         </div>
      </form>
    
    </Card>
</div>
</div>

<div className="roleCardContainer">

<Card >
      <CardActions>
        <Button variant="contained" color="primary">
          Super User 
        </Button>

        <Button variant="contained" color="primary">
         Store Manager
        </Button>

        <Button variant="contained" color="primary">
         Store Owner
        </Button>
        
         

        <Button variant="contained" size="large" color="primary">
          Supplier
        </Button>

        <Button variant="contained" size="large" color="primary">
            Customer
        </Button>
      </CardActions>
    </Card>
</div>



        </>
    )
}

export default Login
