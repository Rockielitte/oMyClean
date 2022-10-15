import React, { Component, Fragment } from 'react';
import classNames from 'classnames/bind';
import style from './Header.module.scss';
// import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom';
import Register from '../SideBar/Register/Register';
import Login from '../SideBar/Login/Login';
const cx = classNames.bind(style);
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <header className={cx('header_wrapper')}>
                    <div className={cx('items_wrapper')}>
                        <div className={cx('logo')}></div>
                        <div className={cx('services_wrapper')}>
                            <ul className={cx('service-items')}>
                                <Link className={cx('items')}>
                                    <a className={cx('items_link')}>Dịch vụ</a>
                                </Link>
                                <Link className={cx('items')}>
                                    <a className={cx('items_link')}>Bảng giá</a>
                                </Link>
                                <Link className={cx('items')}>
                                    <a className={cx('items_link')}>Liên hệ</a>
                                </Link>

                                <Link to="/register" className={cx('items')}>
                                    <a className={cx('items_link')}>đăng kí</a>
                                </Link>
                                <Link to="/login" className={cx('items')}>
                                    <a className={cx('items_link')}>đăng nhập</a>
                                </Link>
                                <Link className={cx('items')}>
                                    <a className={cx('items_link')}>
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </header>
            </Fragment>
        );
    }
}

export default Header;
