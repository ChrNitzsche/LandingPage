import React, { useEffect } from 'react';
import Slider from 'react-slick'; // Doc -> https://react-slick.neostack.com/docs/api/#methods

import img1 from '../../ressources/img/1_LisaBatiashvili.jpg';
import img2 from '../../ressources/img/2_HilaryHahn.jpg';
import img3 from '../../ressources/img/3_JuliaFischer.jpg';
import img4 from '../../ressources/img/4_HilaryHahn.webp';

const artists = [
  { id: 0, name: 'Lisa Batiasvhili', img: img1, offsetName: ['30%', '70%'] },
  { id: 1, name: 'Hilary Hahn',      img: img2, offsetName: ['25%', '35%'] },
  { id: 2, name: 'Maria Fischer',    img: img3, offsetName: ['50%', '50%'] },
  { id: 3, name: 'Hilary Hahn',      img: img4, offsetName: ['50%', '65%'] }
];



const Carrousel = (props) => {

    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 50,
      arrows: true,
      beforeChange: (current, next) => onChangeArtist(next)
    };

    useEffect(() => {
      onChangeArtist(0);
    }, []);

    const onChangeArtist = (index) => {
      props.artistName(artists[index]);
    }

    return (
      <div className='carrousel_wrapper' 
           style={{ height: `${window.innerHeight}px` }}>

          <Slider {...settings}>
            <div>
              <div className='carrousel_image'
                   style={{ background: `url(${artists[0].img})`, 
                            height: `${window.innerHeight}px` }}>
              </div>
            </div>
            <div>
              <div className='carrousel_image'
                   style={{ background: `url('${artists[1].img}')`, 
                            height: `${window.innerHeight}px` }}>
              </div>
            </div>
              <div>
                <div className='carrousel_image'
                     style={{ background: `url(${artists[2].img})`, 
                              height: `${window.innerHeight}px` }}>
              </div>
            </div>
              <div>
                <div className='carrousel_image'
                     style={{ background: `url(${artists[3].img})`, 
                              height: `${window.innerHeight}px` }}>
              </div>
            </div>
            
          </Slider>
      </div>
    );
  };

export default Carrousel;