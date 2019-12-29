import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Clarifai from 'clarifai';
import { CLARIFAI_API_KEY } from '../../config/key';

const app = new Clarifai.App({ apiKey: CLARIFAI_API_KEY });

const Preview = ({ file }) => {
  const [box, setBox] = useState({});

  useEffect(() => {
    console.log(file)
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      file.preview
    )
    .then(res => {
      // const data = res['outputs'][0]['data']['regions'][0]['region_info']['bounding_box'];
      // const box = {
      //   left_col: data.left_col * 300,
      //   top_row: data.top_row * 300,
      //   right_col: 300 - (data.right_col * 300),
      //   bottom_row: 300 - (data.bottom_row * 300),
      // }
      // setBox(box);
      console.log(res)
    })
    .catch(err => console.log(err))
    // eslint-disable-next-line
  },[file]);

  return (
    <div className='photo' id='photo'>
      <img  src={file.preview} width='300px' height='300px' alt='sample' />
      {/* <div 
        className='bounding-box' 
        style={{ top:box.top_row, right: box.right_col, bottom: box.bottom_row, left:box.left_col }}>
      </div> */}
    </div>
  )
}

Preview.propTypes = {
  file: PropTypes.object.isRequired
}

export default Preview;