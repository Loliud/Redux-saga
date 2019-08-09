import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
class App extends Component {

  state = {
    status: false
  }

  onClick = () => {
    this.setState({
      status: !this.state.status
    })
  }



  render() {



    const { classes } = this.props;
    console.log(this.state.status);

    return (
      <Box className={classes.box}>
        <Grid container  style={{height: '100vh'}}>
          <Grid item md={8} className={classes.image}>

          </Grid>
          <Grid item md={4} className={classes.LoginForm}>
            <Box pr={10} pl={10} pt={20}>
              <LockOutlinedIcon />
              <h1>Sign in</h1>
              <div className={classes.input}>
                <TextField
                  id="outlined-email-input"
                  label="Email *"
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-password-input"
                  label="Password *"
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                />
                <div style={{ display: "inline" }}>
                  <Checkbox className={classes.checkbox}
                    checked={this.state.status}
                    onClick={this.onClick}
                    color={this.state.status === true ? 'primary' : ''}
                  />
                  <label >Remmember me</label>
                </div>
                <Button variant="contained" color="primary" >
                  Login
              </Button>
              <Box mt={3}>
                <a style={{float: 'left'}} href="#">Forgot password?</a>
                <a style={{float: 'right'}} href="#">Don't have an account? Sign Up</a>
              </Box>
              <p>Built with love by the Material-UI team.</p>
              </div>

            </Box>
          </Grid>
        </Grid>
      </Box>
    )
  }
}

export default withStyles(styles)(App);
