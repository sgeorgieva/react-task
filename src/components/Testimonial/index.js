import PropTypes from 'prop-types';
import './testimonial.css';

const Testimonial = ({
  image,
  altTextImage,
  name,
  title,
  firstText,
  secondText,
}) => {
  return (
    <div className='d-flex justify-content-center'>
      <div className='testimonial-wrapper'>
        <div className='testimonial-image-wrapper'>
          <img src={image} alt={altTextImage} className='img-fluid'></img>
          <span className='arrow'></span>
        </div>
        <div className='testimonial-text-wrapper'>
          <h3>{name}</h3>
          <h4>{title}</h4>
          <div className='testimonial-content'>
            <p>{firstText}</p>
            <p>{secondText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  image: PropTypes.string,
  altTextImage: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  firstText: PropTypes.string,
  secondText: PropTypes.string,
};

Testimonial.defaultProps = {
  image: '',
  altTextImage: '',
  name: '',
  title: '',
  firstText: '',
  secondText: '',
};

export default Testimonial;
