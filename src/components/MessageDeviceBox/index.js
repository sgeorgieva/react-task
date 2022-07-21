import PropTypes from 'prop-types';
import './messageDeviceBox.css';

const MessageDeviceBox = ({ title, content }) => {
  return (
    <div className='message-device-wrapper'>
      <p className='message-title'>{title}</p>
      <p className='message-content'>{content}</p>
    </div>
  );
};

MessageDeviceBox.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

MessageDeviceBox.defaultProps = {
  title: '',
  content: '',
};

export default MessageDeviceBox;
