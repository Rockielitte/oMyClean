import style from './Service.module.scss';
import classNames from 'classnames/bind';
import { service1 } from '~/assets/img';
import { Link } from 'react-router-dom';
import img1 from '../../assets/img/employee-cleaning-company-provides-chemical-steam-cleaning-service-sofa-steam-cleaner (1).jpg';
import img2 from '../../assets/img/furniture-upholstery-manufacture-fabric-renovation.jpg';
// import img6 from '../../assets/img/be9d110d-a285-499d-9485-19c67d74a992.jpg/';
import img6 from '../../assets/img/hhdhe.jpg';
import img4 from '../../assets/img/Steam-cleaner-couch-1024x683 (1).jpeg';
import React, { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
const cx = classNames.bind(style);
function Service() {
    const [show, setShow] = useState(localStorage.getItem('name'));
    let route = '/login';
    if (show) route = '/following';
    return (
        <div className={cx('wrapper')}>
            <div className={cx('outer-img')}>
                <div style={{ marginTop: '20px' }}>
                    <Tippy content="Coach Cleaning">
                        <figure className={cx('wave')}>
                            <img src={img1} alt="rajni"></img>
                            {/* <figcaption>Coach Cleaning</figcaption> */}
                        </figure>
                    </Tippy>

                    <Tippy content="Sofa Cleaning">
                        <figure className={cx('wave')}>
                            <img src={img4} alt="chuck"></img>
                            {/* <figcaption>Sofa Cleaning</figcaption> */}
                        </figure>
                    </Tippy>

                    <Tippy content="Wooden Cleaning">
                        <figure className={cx('wave')}>
                            <img src={img6} alt="chan"></img>
                            {/* <figcaption>Wooden Cleaning</figcaption> */}
                        </figure>
                    </Tippy>

                    <Tippy content="Rubber Cleaning">
                        <figure className={cx('wave')}>
                            <img src={img2} alt="bean"></img>
                            {/* <figcaption>Rubber Cleaning</figcaption> */}
                        </figure>
                    </Tippy>
                </div>
            </div>
            <div className={cx('outer-btn')}>
                {}
                <Link to={route}>
                    <div className={cx('button')}>BOOKING NOW</div>
                </Link>
            </div>
        </div>
    );
}

export default Service;
