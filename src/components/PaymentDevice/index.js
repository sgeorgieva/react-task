import PropTypes from 'prop-types';
import './paymentDevice.css';

const PaymentDevice = ({ image, title }) => {
  const photo = require(`../../assets/images/payment-devices/${image}.png`)
    .default;

  return (
    <div className='payments-terminal-wrapper'>
      <div className='payment-device-image'>
        <img src={photo} alt={`${title} image`} className='img-fluid' />
      </div>
      <div className='payment-device-text'>{title}</div>
      <div className='euro-primary' />
    </div>
  );
};

PaymentDevice.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

PaymentDevice.defaultProps = {
  image: '',
  title: '',
};

export default PaymentDevice;
