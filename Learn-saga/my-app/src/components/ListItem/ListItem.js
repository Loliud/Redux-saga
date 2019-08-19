import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import TaskItem from '../TaskItem/TaskItem';
import {connect} from 'react-redux';
import *as taskActions from '../../actions/task';




class ListItem extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount(){
        this.props.getList();
    }

    filterTaskItem = (list, status) => {
       
            let newList = list.filter((item) =>{
                return item.status === status;
            });
            return newList.map((item, index) =>{
                return (
                    <TaskItem  key={index} name={item.name} description={item.description} status={item.status}/>
                ) ;
            });
      
      

     
    }

    render() {

        const {task} = this.props;
        return (
            <Row>
                <Col md={4}>
                    <h2>READY</h2>
                    {this.filterTaskItem(task, 'READY')}
                </Col>
                <Col md={4}>
                    <h2>IN-PROGRESS</h2>
                    {this.filterTaskItem(task, 'IN-PROGRESS')}

                </Col>
                <Col md={4}>
                    <h2>COMPLETED</h2>
                    {this.filterTaskItem(task, 'COMPLETED')}
                </Col>
            </Row>
        );
    }
}

let mapStateToProps = state =>{
    return {
        task: state.task
    };
};

let mapDispatchToProps = (dispatch, props) =>{
    return {
        getList: () => dispatch(taskActions.fetchListApi())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);