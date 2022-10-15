import React, { Component, Fragment } from "react"
import DatePickerComponent from '../DatePicker/DatePicker'
import './ForgotPassword.scss'
import Select from 'react-select';
import { Redirect } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";
import { toast } from 'react-toastify';


class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            OTP_Code: '',
            phoneNumber: '',
        }
    }

    toastSuccess = () => {

        toast.clearWaitingQueue()
        toast.success(`Xin kiểm tra mã OTP ${this.state.phoneNumber}`)
    }
    handleOnchangeInput = (event, name) => {

        
        if (event && name) {
            this.setState({
                [name]: event.target.value
            })
        }
    }
    handleCheckValid = () => {
        let isCheck = ["OTP_code", "phoneNumber"]
        let isValid = isCheck.find(item => !this.state[item])
        if (isValid) {
            toast.warning(`Xin hãy điền ${isValid}`)
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

                <div className="forgot_form">

                    <div className="wrapper  wrapper--w960">
                        <div className="card card-2">
                            <div className="card-body">
                                <h2 className="title">Quên mật khẩu</h2>
                                <form >
                                    <div className="input-group">
                                        <input
                                            onChange={(event) => this.handleOnchangeInput(event, "phoneNumber")}
                                            value={this.state.phoneNumber}
                                            className="input--style-2" type="text" placeholder="Số điện thoại" name="phoneNumber" />
                                    </div>
                                    <div className="input-group">
                                        <input
                                            onChange={(event) => this.handleOnchangeInput(event, "OTP_Code")}
                                            value={this.state.OTP_Code}
                                            className="input--style-2" type="text" placeholder="Mã OTP (6 số)" name="OTP_Code" />

                                    </div>

                                    <div className="input-group">

                                        <button
                                            onClick={(e) => this.handleSubmitForm(e)}
                                            className="btn btn--radius btn--green" type="submit">Đăng nhập !!!</button>

                                        <span className='confirm-input'>
                                            <Link
                                                onClick={() => this.toastSuccess()}
                                                className="forget_pass">
                                                Gửi lại mã code
                                            </Link>
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




export default ForgotPassword
