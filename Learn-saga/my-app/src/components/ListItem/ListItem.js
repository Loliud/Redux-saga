import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import TaskItem from '../TaskItem/TaskItem';

const list = [
    {
        name: 'Play soccer',
        description: 'Go to the stadium',
        status: 'COMPLETED'
    },
    {
        name: 'Learn Japanese',
        description: 'Learn minna no nihongo',
        status: 'READY'
    },
    {
        name: 'Watch TV',
        description: 'Watch spiderman and batman',
        status: 'IN-PROGRESS'
    },
    {
        name: 'Do homework',
        description: 'Learn math, english',
        status: 'IN-PROGRESS'
    },
    {
        name: 'Go home',
        description: '17h30 go home',
        status: 'READY'
    }
]

class ListItem extends Component {

    constructor(props) {
        super(props);

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
        return (
            <Row>
                <Col md={4}>
                    <h2>READY</h2>
                    {this.filterTaskItem(list, 'READY')}
                </Col>
                <Col md={4}>
                    <h2>IN-PROGRESS</h2>
                    {this.filterTaskItem(list, 'IN-PROGRESS')}

                </Col>
                <Col md={4}>
                    <h2>COMPLETED</h2>
                    {this.filterTaskItem(list, 'COMPLETED')}
                </Col>
            </Row>
        )
    }
}

export default ListItem;