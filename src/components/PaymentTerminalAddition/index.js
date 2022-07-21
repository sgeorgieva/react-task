import PropTypes from 'prop-types';
import './paymentTerminalAddition.css';

const PaymentTerminalAddition = ({ icon, addition, type }) => {
  return (
    <div className='payment-wrapper'>
      <div className={`${icon} icon`}></div>
      <div className='payment-text'>
        <div className='payment-addition'>{addition}</div>
        <div className='payment-type'>{type}</div>
      </div>
    </div>
  );
};

PaymentTerminalAddition.propTypes = {
  icon: PropTypes.string,
  addition: PropTypes.string,
  type: PropTypes.string,
};

PaymentTerminalAddition.defaultProps = {
  icon: '',
  addition: '',
  type: '',
};

export default PaymentTerminalAddition;
