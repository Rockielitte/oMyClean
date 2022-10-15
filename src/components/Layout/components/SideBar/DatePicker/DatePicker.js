// import "react-datepicker/dist/react-datepicker.css";
import React, { Component, Fragment } from 'react';
import './DatePicker.scss';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
class DatePickerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidUpdate(prevProps) {}

    onChange = (value, dateString) => {
        let OnchangeDateFromParent = this.props.onChange;
        if (OnchangeDateFromParent && value) {
            console.log(value._d, 'hha');

            OnchangeDateFromParent(value._d);
        }
    };

    render() {
        return (
            <Fragment>
                <DatePicker
                    placeholder={this.props.placeholder || 'Anytime...'}
                    onChange={this.onChange}
                    bordered
                    value={this.props.value && moment(this.props.value)}
                />
            </Fragment>
        );
    }
}

export default DatePickerComponent;
