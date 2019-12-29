import React from 'react';

const Footer = () => (
  <div className='footer'>
    <div className='footer-text'>
      <span>Copyright &copy; {new Date().getFullYear()}</span>
    </div>
    <div className='footer-text'>
      <span>Made with Gatsby by Savin Raul-Calin</span>
    </div>
  </div>
)

export default Footer;