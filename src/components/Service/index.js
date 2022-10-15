import style from './Service.module.scss';
import classNames from 'classnames/bind';
import { service1 } from '~/assets/img';
const cx = classNames.bind(style);
function Service() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('outer-img')}>
                <div style={{ marginTop: '20px' }}>
                    <figure className={cx('wave')}>
                        <img
                            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1602040491414/RKBo8jy-u.jpeg"
                            alt="rajni"
                        ></img>
                        <figcaption>Rajinikanth</figcaption>
                    </figure>

                    <figure className={cx('wave')}>
                        <img
                            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1602040470953/tCodF_LJ9.png"
                            alt="chuck"
                        ></img>
                        <figcaption>Chuck Norris</figcaption>
                    </figure>

                    <figure className={cx('wave')}>
                        <img
                            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1602040482117/DU28C3ZZ1.png"
                            alt="chan"
                        ></img>
                        <figcaption>Jackie Chan</figcaption>
                    </figure>

                    <figure className={cx('wave')}>
                        <img
                            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1602040456162/jUM3UTpdS.png"
                            alt="bean"
                        ></img>
                        <figcaption>Mr. Bean</figcaption>
                    </figure>
                </div>
            </div>
            <div className={cx('outer-btn')}>
                <div className={cx('button')}>BOOKING NOW</div>
            </div>
        </div>
    );
}

export default Service;
