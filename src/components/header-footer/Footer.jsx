import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
  return (
    <footer className='bck_red'>
      <Fade>
         <div className='font_righteous footer_logo_venue'>The venue</div>
         <div className='header_copyright'>
            2022 all rights reserved.
         </div>
      </Fade>
    </footer>
  );
};

export default Footer;