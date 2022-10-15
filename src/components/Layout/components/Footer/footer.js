import Map from "./Map";
import React, { Component, Fragment } from 'react';
import classNames from 'classnames/bind';
import style from './Footer.module.scss'
// import FontAwesomeIcon from "@fortawesome/react-fontawesome"
const cx = classNames.bind(style)
class Footer extends React.Component {
    render() {
        return (

            <Fragment>
                <footer className={cx("footer_wrapper")}>
                    <div className={cx("items_wrapper")}>
                        <div className={cx("logo")}></div>
                        <div className={cx("gg_map")}>
                           
                        </div></div>
                </footer>

            </Fragment>

        )

    }
}

export default Footer;