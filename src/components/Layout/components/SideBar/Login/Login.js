import React, { Component, Fragment } from "react"
import DatePickerComponent from '../DatePicker/DatePicker'
import './Login.scss'
import Select from 'react-select';
import { Redirect } from "react-router-dom"
import { Link } from "react-router-dom";




class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            phoneNumber: '',
        }
    }


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
        let isCheck = ["password", "phoneNumber"]
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

    render() {
        return (
            <>
                <div className="login_form">

                    <div className="wrapper  wrapper--w960">
                        <div className="card card-2">
                            <div className="card-body">
                                <h2 className="title">Đăng Nhập</h2>
                                <form >
                                    <div className="input-group">
                                        <input
                                            onChange={(event) => this.handleOnchangeInput(event, "phoneNumber")}
                                            value={this.state.phoneNumber}
                                            className="input--style-2" type="text" placeholder="Số điện thoại" name="phoneNumber" />
                                    </div>
                                    <div className="input-group">
                                        <input
                                            onChange={(event) => this.handleOnchangeInput(event, "password")}
                                            value={this.state.password}
                                            className="input--style-2" type="text" placeholder="Mật khẩu" name="password" />

                                    </div>

                                    <div className="input-group">

                                        <button
                                            onClick={(e) => this.handleSubmitForm(e)}
                                            className="btn btn--radius btn--green" type="submit">Đăng nhập !!!</button>

                                        <span className='confirm-input'>
                                            <a href='/login/forgot_password' className="forget_pass">
                                                Quên mật khẩu?
                                            </a>
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




export default Login
