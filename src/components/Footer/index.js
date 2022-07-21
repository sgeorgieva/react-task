import FooterLogoImage from '../../assets/images/footer-logo.png';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='container'>
        <div className='row text-center'>
          <div className='col'>
            <img
              src={FooterLogoImage}
              alt='myPos logo image'
              className='img-fluid'
            />
          </div>
        </div>
        <div className='row mx-auto'>
          <div className='col'>
            <p className='transaction-fee-text'>
              *The transaction fee is displayed for indicative purposes and may
              vary depending on your business activity, geographical location
              and other factors. Please get in touch with us to get a
              tailor-made offer for your business needs.
            </p>
          </div>
        </div>
        <div className='row mx-auto'>
          <div className='col text-center customer-links'>
            <a href='#'>Legal</a>
            <a href='#'>Cookie Policy</a>
          </div>
        </div>
        <hr className='footer-horizontal-line' />
        <div className='row'>
          <div className='col'>
            <p className='footer-content-one'>
              © 2014-2018, myPOS World Ltd., London, United Kingdom and its
              affiliates. myPOS Shop is operated by myPOS Services Ltd,
              processing on-line orders, distribution, replacement and return of
              myPOS packages,&nbsp;
              <a href='#' className='support-link'>
                sales@mypos.com
              </a>
            </p>
            <p className='footer-last-content'>
              All e-money and payment services for customers from Bulgaria are
              provided by myPOS AD, Company Registration number: 205050564, in
              its capacity of agent of iCard AD registered in the Bulgarian
              National Bank. iCard AD, with registered address: blvd. 76A James
              Boucher, Sofia 1407, Bulgaria, Company registration number:
              175325806, is licensed and regulated by the Bulgarian National
              Bank as an e-money institution under the Directive 2009/110/EO for
              electronic money with license number 4703-5081/25.07.2011,
              SWIFT/BIC code: INTFSFBG,&nbsp;
              <a href='#' className='support-link'>
                help.bg@mypos.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
