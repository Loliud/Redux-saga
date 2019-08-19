import React, { Component } from 'react';
import './style.css';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }
    componentWillReceiveProps() {
        this.setState({
            modal: !this.state.modal
        });
    }


    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));

        this.props.onReceiveStatus(this.state.modal);
    }

    render() {

        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Todos</ModalHeader>
                    <ModalBody>
                        <form id="form">
                            <div className="group-input">
                                <label>Title</label><input></input>
                            </div>
                            <div className="group-input">
                                <label>Description</label><input></input>
                            </div>

                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.toggle}>Save</Button>{' '}
                        <Button color="danger" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default TaskForm;