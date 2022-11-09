import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avarta')}
                src="https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/6457a23ee3d4695c9eeef269b315efbf~c5_100x100.jpeg?x-expires=1668146400&x-signature=0XXlyVvNEbvk5Zh0USICRzRf%2BDk%3D"
                alt="alvin"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Alvin Lee</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>alvinlee</span>
            </div>
        </div>
    );
}
export default AccountItem;
