import React, { useState, useEffect } from 'react';
import DropZone from './DropZone';
import Preview from './Preview';

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
        <DropZone setFile={setFile} />
      </div>
      <div className='bottom'>
        {
          file && file.map((el, index) => <Preview key={index} file={el} /> )
        }
      </div>
    </>
  )
};

export default Home;