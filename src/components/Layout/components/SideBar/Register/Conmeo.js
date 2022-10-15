import React, { Component, Fragment } from "react"
import DatePickerComponent from '../DatePicker/DatePicker'
import './Conmeo.scss'
import Select from 'react-select';
import { Redirect } from "react-router-dom"

const options = [
    { value: 'Female', label: 'Female' },
    { value: 'Male', label: 'Male' },
    { value: 'Other', label: 'Other' },
];



class Conmeo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gender: null,
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            password_again: '',
            phoneNumber: '',
            confirm: false,
            birthday: '',
        }
    }

    handleChange = (gender) => {
        this.setState({ gender });
    };
    handleOnchangeInput = (event, name) => {

        if (name === 'confirm') {
            this.setState({
                confirm: event.target.checked
            })
            return;
        }
        if (event && name) {
            this.setState({
                [name]: event.target.value
            })
        }
    }
    handleCheckValid = () => {
        let isCheck = ["gender", "email", "password", "firstName", "lastName",
            "address", "password_again", "phoneNumber", "confirm", "birthday",]
        let isValid = isCheck.find(item => !this.state[item])
        if (isValid) {
            alert(isValid)
        }
        return isValid
    }


    handleSubmitForm = async (e) => {
        e.preventDefault()
        let isValid = !this.handleCheckValid()

    }
    OnchangeDateFromParent = (date) => {
        if (date) {
            this.setState({
                birthday: date
            })
        }
    }
    render() {
        const { gender } = this.state;
        return (
            <>
                <div className="register_form">
                    <div className="wrapper wrapper--w960">
                        <div className="card card-2">
                            <div className="card-body">
                                <h2 className="title">Registration Info</h2>
                                <form >
                                    <div className="input-group">

                                        <input
                                            onChange={(event) => this.handleOnchangeInput(event, "firstName")}
                                            value={this.state.firstName}
                                            className="input--style-2" type="text" placeholder="First Name" name="firstName" />
                                        <input
                                            onChange={(event) => this.handleOnchangeInput(event, "lastName")}
                                            value={this.state.lastName}
                                            className="input--style-2" type="text" placeholder="Last Name" name="lastName" />
                                    </div>
                                    <div className="row row-space">
                                        <div className="col-2">
                                            <div className="input-group">
                                                <DatePickerComponent
                                                    placeholder="Birthday"
                                                    OnchangeDateFromParent={this.OnchangeDateFromParent}
                                                    value={this.state.birthday}
                                                />
                                                <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="input-group">
                                                <div className="rs-select2 js-select-simple select--no-search">
                                                    <Select
                                                        value={gender}
                                                        onChange={this.handleChange}
                                                        options={options}
                                                        placeholder={'Gender'}
                                                    />
                                                    <div className="select-dropdown"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <div className="rs-select2 js-select-simple select--no-search">
                                            <input
                                                onChange={(event) => this.handleOnchangeInput(event, "address")}
                                                value={this.state.address}
                                                className="input--email" type="text" placeholder="Address" name="address" />
                                        </div>

                                    </div>
                                    <div className="input-group">
                                        <div className="rs-select2 js-select-simple select--no-search">
                                            <input
                                                onChange={(event) => this.handleOnchangeInput(event, "email")}
                                                value={this.state.email}
                                                className="input--email" type="text" placeholder="Email" name="email" />
                                        </div>

                                    </div>
                                    <div className="input-group">
                                        <input
                                            onChange={(event) => this.handleOnchangeInput(event, "password")}
                                            value={this.state.password}
                                            className="input--style-2" type="text" placeholder="Password" name="password" />
                                        <input
                                            onChange={(event) => this.handleOnchangeInput(event, "password_again")}
                                            value={this.state.password_again}
                                            className="input--style-2" type="text" placeholder="Confirm password" name="password_again" />
                                    </div>
                                    <div className="input-group">
                                        <input
                                            onChange={(event) => this.handleOnchangeInput(event, "phoneNumber")}
                                            value={this.state.phoneNumber}
                                            className="input--style-2" type="text" placeholder="Phone number" name="phoneNumber" />
                                    </div>
                                    <div className="input-group">

                                        <button
                                            onClick={(e) => this.handleSubmitForm(e)}
                                            className="btn btn--radius btn--green" type="submit">Conmeo now!!</button>

                                        <span className='confirm-input'>
                                            <input
                                                onChange={(event) => this.handleOnchangeInput(event, "confirm")}
                                                className="input--style-2" type='checkbox' id='confirm' name="confirm" checked={this.state.confirm} />
                                            <label for="confirm" >I agree with the Mygame terms</label>
                                        </span>


                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}




export default Conmeo
