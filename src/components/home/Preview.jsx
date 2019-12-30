import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Clarifai from 'clarifai';
import { CLARIFAI_API_KEY } from '../../config/key';

const app = new Clarifai.App({ apiKey: CLARIFAI_API_KEY });

const Preview = ({ file }) => {
  const [box, setBox] = useState({ left: 0, top: 0, right: 0, bottom: 0 });
  const { left, top, right, bottom } = box;

  useEffect(() => {
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      file.base64
    )
    .then(res => {
      const data = res['outputs'][0]['data']['regions'][0]['region_info']['bounding_box'];
      const { left_col, top_row, right_col, bottom_row } = data;
      setBox({ 
        left: left_col * 300,
        top: top_row * 300,
        right: 300 - (right_col * 300),
        bottom: 300 - (bottom_row * 300),
       })
    })
    .catch(err => console.log(err))
    // eslint-disable-next-line
  },[file]);

  return (
    <div className='photo' id='photo'>
      <img src={file.preview} width='300px' height='300px' alt='sample' />
      <div className='bounding-box' style={{ top, right, bottom, left }}></div>
    </div>
  )
}

Preview.propTypes = {
  file: PropTypes.object.isRequired
}

export default Preview;