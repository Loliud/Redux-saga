import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';
import ListItem from './components/ListItem/ListItem';
import TaskForm from './components/TaskForm/TaskForm';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      statusTaskForm: true
    }
  }

  toggleTaskForm = () =>{
    this.setState({
      statusTaskForm: !this.state.statusTaskForm
    });
    
  }

  onToggle = (param) =>{
    this.setState({
      statusTaskForm: param
    });
  }


  render() {
    const {statusTaskForm} = this.state;
    return (
      <div className="App" >
        <Button className="add" color="secondary" onClick={this.toggleTaskForm}><span>+</span> Thêm công việc</Button>
        <ListItem />
        <TaskForm statusTaskForm={statusTaskForm} onReceiveStatus={this.onToggle}/>

      </div>  
    );
  }

}

export default App;
