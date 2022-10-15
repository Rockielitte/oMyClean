import React, { Component, Fragment } from 'react';
import classNames from 'classnames/bind';
import style from './Header.module.scss'
// import FontAwesomeIcon from "@fortawesome/react-fontawesome"
const cx = classNames.bind(style)
class Header extends React.Component {
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
                                <li className={cx("items")}><a className={cx("items_link")}>
                                    <i class="fa-brands fa-facebook"></i>
                                </a></li>
                            </ul>
                        </div></div>
                </header>

            </Fragment>

        )

    }
}

export default Header;