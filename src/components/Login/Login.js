import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent,CardActions, TextField,Button } from '@material-ui/core';
import "./Login.css";

const Login = () => {
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

<div className="cardContainer">
    <div>
<Card className="cardForm">
      <CardContent>
            <form className="loginForm" noValidate autoComplete="off">
  <TextField
          id="standard-password-input"
          label="Email"
          type="email"
          required
        />
       <TextField
          id="standard-password-input"
          required
          label="Password"
          type="password"
          autoComplete="current-password"
        />
</form>
      </CardContent>
      <CardActions>
        <Button 
        variant="contained" color="primary" href="#contained-buttons"
        >Log In</Button>
        
        <Button variant="outlined" color="secondary">Forget password?</Button>
      </CardActions>
    </Card>

</div>
</div>
        </>
    )
}

export default Login
