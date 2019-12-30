import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Clarifai from 'clarifai';
import { CLARIFAI_API_KEY } from '../../config/key';


const Preview = ({ file }) => {
  const [data, setData] = useState([]);
  const [box, setBox] = useState([{ left: 0, top: 0, right: 0, bottom: 0 }]);
  const app = new Clarifai.App({ apiKey: CLARIFAI_API_KEY });

  useEffect(() => {
    setBox([{ left: 0, top: 0, right: 0, bottom: 0 }]);
  },[file])
  
  useEffect(() => {
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      file.base64
      ).then(res => {
        const data = res['outputs'][0]['data']['regions'];
        setData([ ...data ])
      }).catch(e => console.log(e))
      // eslint-disable-next-line
    },[file])
    
    useEffect(() => {
      if(data.length > 0) {
        let arr = [];
        data.map(({ region_info: { bounding_box } }) => {
          const { left_col, top_row, right_col, bottom_row } = bounding_box;
          const image = document.querySelector('#image');
          const width = Number(image.width);
          const height = Number(image.height);
          arr.push({
            left: left_col * width,
            top: top_row * height,
            right: width - (right_col * width),
            bottom: height - (bottom_row * height)
          })
        })
        setBox([...arr])
      }
      // eslint-disable-next-line
    },[data]);
    
    return (
    <div className='photo' id='photo'>
      <img src={file.preview} id='image' style={{ maxWidth:'300px', maxHeight:'300px' }} alt='sample' />
      { 
        box.map(({ top, right, left, bottom },index) => <div key={index} className='bounding-box' style={{ top, right, bottom, left }}></div>)
      }
    </div>
  )
}

Preview.propTypes = {
  file: PropTypes.object.isRequired
}

export default Preview;