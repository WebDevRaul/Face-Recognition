import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Clarifai from 'clarifai';
import { CLARIFAI_API_KEY } from '../../config/key';


const Preview = ({ file }) => {
  const [box, setBox] = useState({ left: 0, top: 0, right: 0, bottom: 0 });
  const { left, top, right, bottom } = box;
  console.log(CLARIFAI_API_KEY, '1')
  const app = new Clarifai.App({ apiKey: CLARIFAI_API_KEY });


  useEffect(() => {
    setBox({ left: 0, top: 0, right: 0, bottom: 0 })
  },[file])

  // Update BOX CDU
  useEffect(() => {
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      file.base64
    )
    .then(res => {
      const data = res['outputs'][0]['data']['regions'][0]['region_info']['bounding_box'];
      const { left_col, top_row, right_col, bottom_row } = data;
      const image = document.querySelector('#image');
      const width = Number(image.width);
      const height = Number(image.height);
      setBox({ 
        left: left_col * width,
        top: top_row * height,
        right: width - (right_col * width),
        bottom: height - (bottom_row * height),
       })
    })
    .catch(err => console.log(err))
    // eslint-disable-next-line
  },[file]);

  return (
    <div className='photo' id='photo'>
      <img src={file.preview} id='image' style={{ maxWidth:'300px', maxHeight:'300px' }} alt='sample' />
      <div className='bounding-box' style={{ top, right, bottom, left }}></div>
    </div>
  )
}

Preview.propTypes = {
  file: PropTypes.object.isRequired
}

export default Preview;