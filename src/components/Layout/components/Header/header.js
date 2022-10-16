import { getAllData } from '../../../../connectDB/axios.js';

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
        this.state = {
            show: localStorage.getItem('name'),
        };
    }
    componentDidMount() {
        // let conmeo = getAllData();
        // console.log(conmeo);
    }
    render() {
        return (
            <Fragment>
                <header className={cx('header_wrapper')}>
                    <div className={cx('items_wrapper')}>
                        <Link to="/">
                            <div className={cx('logo')}></div>
                        </Link>
                        <div className={cx('services_wrapper')}>
                            <ul className={cx('service-items')}>
                                <Link className={cx('items')}>
                                    <a className={cx('items_link')}>Dịch vụ</a>
                                </Link>
                                <Link
                                    to="/price_table"
                                    className={cx('items')}>
                                    <a className={cx('items_link')}>Bảng giá</a>
                                </Link>
                                <Link to="/contact" className={cx('items')}>
                                    <a className={cx('items_link')}>Liên hệ</a>
                                </Link>
                                {!this.state.show ? (
                                    <span>
                                        <Link to="/register" className={cx('items')}>
                                            <a className={cx('items_link')}>đăng kí</a>
                                        </Link>
                                        <Link to="/login" className={cx('items')}>
                                            <a className={cx('items_link')}>đăng nhập</a>
                                        </Link>
                                    </span>
                                ) : (
                                    <span>
                                        <span
                                            style={{
                                                borderRadius: '50%',
                                                backgroundColor: 'blue',
                                                padding: '8px',
                                                color: 'white',
                                                border: '2px solid #fff',
                                            }}
                                        >
                                            {localStorage.getItem('name')}
                                        </span>
                                        <button
                                            style={{
                                                paddingLeft: '8px',
                                                backgroundColor: '#fff',
                                            }}
                                            onClick={() => {
                                                this.setState({ show: false });
                                                localStorage.removeItem('Token');
                                                localStorage.removeItem('name');
                                            }}
                                        >
                                            Đăng Xuất
                                        </button>
                                    </span>
                                )}

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
