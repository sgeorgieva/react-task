import PropTypes from 'prop-types';
import './oneLineText.css';

const OneLineText = ({ text, color }) => {
  return <div className={`line-text ${color}`}>{text}</div>;
};

OneLineText.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

OneLineText.defaultProps = {
  text: '',
  color: '',
};

export default OneLineText;
