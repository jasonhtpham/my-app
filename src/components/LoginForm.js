import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


const LoginForm = (props) => {
  let component = (
    <Container>

      <h3> {props.loginStatus ? "You are logged in!!!" : "Hit login button to login"} </h3>

      <Button onClick={props.login}>Login</Button>
    </Container>);
  return component;
}

export default LoginForm;