import PropTypes from 'prop-types';
import './multilineText.css';

const MultilineText = ({ text, smallText }) => {
  return (
    <div className='multiline-text-wrapper'>
      <p>{text}</p>
      <p>{smallText}</p>
    </div>
  );
};

MultilineText.propTypes = {
  text: PropTypes.string,
  smallText: PropTypes.string,
};

MultilineText.defaultProps = {
  text: '',
  smallText: '',
};

export default MultilineText;
