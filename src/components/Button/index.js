import PropTypes from 'prop-types';
import './button.css';

const Button = ({ text, onPress }) => {
  return (
    <button type='button' className='primary-button' onClick={onPress}>
      <span>{text}</span>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  text: '',
  onPress: () => {},
};

export default Button;
