import React, { Component, Fragment } from "react"
import DatePickerComponent from '../DatePicker/DatePicker'
import './Register.scss'
import Select from 'react-select';
import { Redirect } from "react-router-dom"
import { Link } from "react-router-dom";

const options = [
    { value: 'Male', label: 'Nam' },
    { value: 'Female', label: 'Nữ' },
    { value: 'Other', label: 'Khác' },
];



class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gender: null,
            password: '',
            firstName: '',
            lastName: '',
            password_again: '',
            phoneNumber: '',
            confirm: false,
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
    handleCheckValid = (e) => {
        let isCheck = ["gender", "password", "firstName", "lastName",
            "password_again", "phoneNumber", "confirm"]
        let isValid = isCheck.find(item => !this.state[item])
        if (isValid) {
            alert(isValid)
        }
        return isValid
    }


    handleSubmitForm = async (e) => {
        e.preventDefault()

        let isValid = !this.handleCheckValid(e)

    }

    render() {
        const { gender } = this.state;
        return (
            <>
                <div className="register_form">
                    <div className="wrapper wrapper--w960">
                        <div className="card card-2">
                            <div className="card-heading"></div>
                            <div className="card-body">
                                <h2 className="title">đăng kí tài khoản</h2>
                                <form >
                                    <div className="input-group">

                                        <input
                                            required
                                            onChange={(event) => this.handleOnchangeInput(event, "firstName")}
                                            value={this.state.firstName}
                                            className="input--style-2" type="text" placeholder="Tên: " name="firstName" />
                                        <input
                                            required
                                            onChange={(event) => this.handleOnchangeInput(event, "lastName")}
                                            value={this.state.lastName}
                                            className="input--style-2" type="text" placeholder="Họ và tên đệm:" name="lastName" />
                                    </div>
                                    <div className="row row-space">
                                        <div className="col-2"></div>
                                        <div className="col-2">
                                            <div className="input-group">
                                                <div className="rs-select2 js-select-simple select--no-search">
                                                    <Select
                                                        required
                                                        value={gender}
                                                        onChange={this.handleChange}
                                                        options={options}
                                                        placeholder={'Giới tính'}
                                                    />
                                                    <div className="select-dropdown"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <input
                                            required
                                            onChange={(event) => this.handleOnchangeInput(event, "phoneNumber")}
                                            value={this.state.phoneNumber}
                                            className="input--style-2" type="text" placeholder="Số điện thoại:" name="phoneNumber" />
                                    </div>
                                    <div className="input-group">
                                        <input
                                            required
                                            onChange={(event) => this.handleOnchangeInput(event, "password")}
                                            value={this.state.password}
                                            className="input--style-2" type="text" placeholder="Mật khẩu:" name="password" />
                                        <input
                                            required
                                            onChange={(event) => this.handleOnchangeInput(event, "password_again")}
                                            value={this.state.password_again}
                                            className="input--style-2" type="text" placeholder="Nhập lại mật khẩu:" name="password_again" />
                                    </div>

                                    <div className="input-group">

                                        <button
                                            onClick={(e) => this.handleSubmitForm(e)}
                                            className="btn btn--radius btn--green" type="submit">Đăng Kí !!!</button>

                                        <span className='confirm-input'>
                                            <input
                                                onChange={(event) => this.handleOnchangeInput(event, "confirm")}
                                                className="input--style-2" type='checkbox' id='confirm' name="confirm" checked={this.state.confirm} />
                                            <label for="confirm" >Tôi đồng ý với các điều khoản của Oh My Clean</label>
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




export default Register
