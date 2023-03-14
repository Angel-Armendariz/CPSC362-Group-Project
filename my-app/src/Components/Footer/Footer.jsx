import './Footer.css';



const Footer = () => {
  return (
    <div className='footer'>
      <a href="https://www.example.com">
        <img
          src="/path/to/image.jpg"
          alt="linkedin"
          className='my-image-linkedin'
        />
      </a>

      <a href="https://www.example.com">
        <img
          src="/path/to/image.jpg"
          alt="instagram"
          className='my-image-instagram'
        />
      </a>

      <a href="https://www.example.com">
        <img
          src="/path/to/image.jpg"
          alt="facebook"
          className='my-image-facebook'
        />
      </a>
      <hr className="my-line" />
      <form className='foot-text'>
      <h4>non copyrighted </h4>
      </form>
      <div className='home-footer'>
        <h4>Home</h4>
      </div>
      <div className='about-footer'>
        <h4>About</h4>
      </div>
      <div className='terms-footer'>
        <h4>Terms</h4>
      </div>
      <div className='contact-footer'>
        <h4>Contact</h4>
      </div>
      <div className='faq-footer'>
        <h4>FAQ</h4>
      </div>
    </div>

  );
};

export default Footer;
