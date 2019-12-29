import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import DropZone from './DropZone';

const Home = () => {
  const [file, setFile] = useState([]);

  // Clear URL CDU
   useEffect(() => {
    return () => {
      file.map(i => URL.revokeObjectURL(i.preview))
    }
  },[file]);
  
  return (
    <>
      <div className='top'>
        <Logo />
        <DropZone setFile={setFile} />
      </div>
      <div className='photo'>
        {
          file.map((photo, index) => <img key={index} src={photo.preview} width='300px' height='300px' /> )
        }
      </div>
    </>
  )
};

export default Home;