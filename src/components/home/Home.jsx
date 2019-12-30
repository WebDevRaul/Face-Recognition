import React, { useState, useEffect } from 'react';
import DropZone from './DropZone';
import Preview from './Preview';
import Logo from './Logo';

const Home = () => {
  const [file, setFile] = useState([]);
  const [loading, setLoading] = useState(false);

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
        <Logo loading={loading} />
      </div>
      <div className='bottom'>
        {
          file && file.map((el, index) => <Preview setLoading={setLoading} key={index} file={el} /> )
        }
      </div>
    </>
  )
};

export default Home;