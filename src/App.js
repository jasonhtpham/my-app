import React from 'react';

import Login from './components/Login';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Counter from './components/Counter';
import Posts from './components/Posts';
import { Grid, AppBar, Button, Toolbar, Typography } from '@mui/material';
import Welcome from './components/WelcomeText';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography variant="h6"> My Basic App </Typography>
              </Grid>

              <Grid item>
                <Link to="/" style={{ textDecoration: 'none' }} > <Button style={{ color: "white" }}> Home </Button></Link>
                <Link to="/counter" style={{ textDecoration: 'none' }} > <Button style={{ color: "white" }}> Counter </Button></Link>
                <Link to="/posts" style={{ textDecoration: 'none' }}> <Button style={{ color: "white" }}> Posts </Button></Link>
                <Link to="/login" style={{ textDecoration: 'none' }}> <Button style={{ color: "white" }}> Login </Button></Link>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path={['/login']}> <Login /> </Route>
          <Route path={['/counter']}> <Counter /> </Route>
          <Route path={['/posts']}> <Posts /> </Route>
          <Route path={'/'}> <Welcome /> </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}



export default App;
