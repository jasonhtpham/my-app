import React, { useState } from 'react';

import LoginForm from './LoginForm';
import Welcome from './WelcomeText';
import Container from '@mui/material/Container';

const Login = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  // let loginStatusVar = false;

  // const login = useCallback(()=>{setLoginStatus(true)},[]);

  const login = () => { setLoginStatus(true) };
  // const login = ()=>{loginStatusVar = true};

  // const view = (
  // <Container>
  //   {/* <h1> {loginStatusVar.toString()} </h1> */}
  //   <h1> {loginStatus.toString()} </h1>
  // <Button onClick={login}>Login</Button>
  // </Container>
  // );

  const view = (
    <Container>
      <Welcome />
      <LoginForm login={login} loginStatus={loginStatus} />
    </Container>
  );

  return view;
}



export default Login;
