import React, {Component} from 'react';
import styles from './styles';
import {withStyles} from '@material-ui/styles';

class App extends Component{
  constructor(props){
    super(props);

  }


  render(){

    const {classes} = this.props;
    return (
      
      <div>
        <h1>Learn Material UI</h1>
        <div  className={classes.box}>
          <div className={classes.text}>ReactJs</div>
          <div className={classes.text}>AngularJS</div>
          <div className={classes.text}>Redux</div>
          <div className={classes.text}>Saga</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);