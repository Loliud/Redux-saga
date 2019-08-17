import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';
import ListItem from './components/ListItem/ListItem';
class App extends Component {


  render() {
    return (
      <div className="App" >
        <Button className="add" color="secondary"><span>+</span> Thêm công việc</Button>
        <ListItem />

      </div>  
    );
  }

}

export default App;
