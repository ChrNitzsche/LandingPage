import React, { useState } from 'react';
import Carrousel from './Carrousel';
import Countdown from './Countdown';


const Featured = () => {
    const [artist, setArtist] = useState('');

    const pos = (dim) => {
        if (artist) {
          if (dim === 0) return artist.offsetName[dim] 
          if (dim === 1) return artist.offsetName[dim]
          return '50%';
        }
    }


    // Prop Carrousel -> Get back the artist name
    const getArtist = (artist) => {
        setArtist(artist);
    }


    return (
      <div className='featured_container'>
        <Carrousel artistName={artist => getArtist(artist)} />
        <div className="artist_name" id="artistName" style={{ left: pos(0), top: pos(1) }}>
          <div className='wrapper'>{ artist.name }</div>
        </div>
        <Countdown />
      </div>
    );
};

export default Featured;