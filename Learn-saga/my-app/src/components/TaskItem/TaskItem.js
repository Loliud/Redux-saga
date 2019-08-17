import React, { Component } from 'react';
import './style.css';

class TaskItem extends Component {

    constructor(props){
        super(props);
    }


    render() {

        const {name, description, status} = this.props;
        return (
            <div className="task-item">
                <h6>{name}</h6>
                <p>{description}</p>
                <h6 className="status">{status}</h6>
                <div className="action">
                    <i className="fas fa-pen"></i>
                    <i className="fas fa-trash-alt"></i>
                </div>
            </div>
        );
    }
}

export default TaskItem;