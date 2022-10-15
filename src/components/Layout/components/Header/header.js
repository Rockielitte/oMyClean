import React, { Component, Fragment } from 'react';
import classNames from 'classnames/bind';
import style from './Header.module.scss'
// import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";
import Register from '../SideBar/Register/Register'
const cx = classNames.bind(style)
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toRegister: false
        };

    }
    toRegister = () => {
        this.setState({
            toRegister: !this.state.toRegister
        })
    }
    render() {

        return (
            <Fragment>
                <header className={cx("header_wrapper")}>
                    <div className={cx("items_wrapper")}>
                        <div className={cx("logo")}></div>
                        <div className={cx("services_wrapper")}>
                            <ul className={cx("service-items")}>
                                <li className={cx("items")}><a className={cx("items_link")}>
                                    Dịch vụ
                                </a ></li>
                                <li className={cx("items")}><a className={cx("items_link")}>
                                    Bảng giá
                                </a></li>
                                <li className={cx("items")}><a className={cx("items_link")}>
                                    Liên hệ
                                </a></li>

                                <li
                                    onClick={() => this.toRegister()}
                                    className={cx("items")}><a className={cx("items_link")}>
                                        đăng kí
                                    </a>
                                </li>
                                <li className={cx("items")}><a className={cx("items_link")}>
                                    đăng nhập
                                </a></li>
                                <li className={cx("items")}><a className={cx("items_link")}>
                                    <i className="fa-brands fa-facebook"></i>
                                </a></li>
                            </ul>
                        </div></div>
                </header>
                <Register
                    toRegister={this.state.toRegister}
                    handleToRegister={this.toRegister}
                />
            </Fragment>

        )

    }
}

export default Header;