import PropTypes from 'prop-types';
import './paymentsTerminalText.css';

const PaymentsTerminalsText = ({ title, text }) => {
  return (
    <div className='payments-terminal-wrapper'>
      <div className='payment-terminal-title'>{title}</div>
      <div className='payment-terminal-text'>{text}</div>
    </div>
  );
};

PaymentsTerminalsText.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

PaymentsTerminalsText.defaultProps = {
  title: '',
  text: '',
};

export default PaymentsTerminalsText;
