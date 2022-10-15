import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Conmeo from './Conmeo'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toRegister: false
        };

        this.toggle = this.toggle.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.toRegister != this.props.toRegister) {
            this.setState({
                toRegister: this.props.toRegister,
            });
        }
    }
    toggle() {
        this.props.handleToRegister()
    }
    render() {
        return (
            <div>
                <Conmeo />
            </div>
        );
    }
}

export default Register;