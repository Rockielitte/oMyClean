import DatePickerComponent from '../SideBar/DatePicker/DatePicker';
import Select from 'react-select';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.scss'
const options = [
    {
        value: '1',
        label: '1',
    },
    {
        value: '2',
        label: '2',
    },
];
const dataForm = {};
dataForm['current'] = {};

dataForm.current['fname'] = '';
dataForm.current['lname'] = '';
dataForm.current['time'] = '';
dataForm.current['date'] = '';
dataForm.current['service'] = '';
dataForm.current['address'] = '';
dataForm.current['email'] = '';
dataForm.current['phone'] = '';
function Form() {
    const notify = () => toast('Booking successfull!');
    const navigate = useNavigate();
    const formRef = useRef();
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [service, setService] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const handleSubmit = (e) => {
        let check = true;
        Object.keys(dataForm.current).forEach((key, index) => {
            if (!dataForm.current[key]) {
                check = false;
            }
        });
        // console.log(check, 'hah');
        if (check) {
            e.preventDefault();
            notify();
            console.log(dataForm.current);
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } else {
            // e.preventDefault();
            // alert('Fail');
        }
    };
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(dataForm.current);
    // };
    const handleSetInput = (name, value, fnc) => {
        fnc(value);
        dataForm.current[name] = value;
    };
    const handleDate = (value) => {
        setDate(value);
        dataForm.current['date'] = value;
    };
    const handleService = (data) => {
        let { value } = data;
        setService(data);
        dataForm.current['service'] = value;
    };

    return (
        <div className="container-page">

            <div className="wrapper wrapper--w960">
                <div className="card card-2">
                    <div className="card-body">
                        <h2 className="title">BOOKING HERE</h2>
                        <form ref={formRef} onsubmit="return false">
                            <div className="input-group">
                                <input
                                    value={fname}
                                    onChange={(e) => {
                                        handleSetInput('fname', e.target.value, setFName);
                                    }}
                                    className="input--style-2"
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    required
                                />
                                <input
                                    value={lname}
                                    onChange={(e) => {
                                        handleSetInput('lname', e.target.value, setLName);
                                    }}
                                    className="input--style-2"
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    required
                                />
                            </div>
                            <div className="row row-space">
                                <div className="col-2">
                                    <div className="input-group">
                                        <div className="rs-select2 js-select-simple select--no-search">
                                            <input
                                                value={time}
                                                onChange={(e) => {
                                                    handleSetInput('time', e.target.value, setTime);
                                                }}
                                                className="input--email"
                                                type="text"
                                                placeholder="Time"
                                                name="Time"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="input-group">
                                        <DatePickerComponent placeholder="Day" value={date} onChange={handleDate} />
                                        <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="input-group">
                                        <div className="rs-select2 js-select-simple select--no-search">
                                            <Select
                                                placeholder={'Services'}
                                                options={options}
                                                required
                                                value={service}
                                                onChange={handleService}
                                            />
                                            <div className="select-dropdown"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="input-group">
                                <div className="rs-select2 js-select-simple select--no-search">
                                    <input
                                        value={address}
                                        onChange={(e) => {
                                            handleSetInput('address', e.target.value, setAddress);
                                        }}
                                        className="input--email"
                                        type="text"
                                        placeholder="Address"
                                        name="address"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="rs-select2 js-select-simple select--no-search">
                                    <input
                                        className="input--email"
                                        value={email}
                                        onChange={(e) => {
                                            handleSetInput('email', e.target.value, setEmail);
                                        }}
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <input
                                    className="input--style-2"
                                    type="text"
                                    value={phone}
                                    onChange={(e) => {
                                        handleSetInput('phone', e.target.value, setPhone);
                                    }}
                                    placeholder="Phone number"
                                    name="phoneNumber"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <button className="btn btn--radius btn--green" onClick={handleSubmit} type="submit">
                                    BOOK NOW!
                                </button>
                                {/* <ToastContainer /> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
