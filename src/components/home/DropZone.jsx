import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useDropzone } from 'react-dropzone';

const DropZone = ({ setFile }) => {
  
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.map((file) => {
      const reader = new FileReader()
 
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = e => {
        const base64 = e.target.result.replace(/^data:image\/[a-z]+;base64,/, "");
        setFile([ Object.assign(file, { preview: URL.createObjectURL(file), base64 }) ]);
      }
      reader.readAsDataURL(file)
    })
    // eslint-disable-next-line
  },[]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: false, accept: 'image/*' })

  return (
    <div className={classnames('dropzone', { 'is-active':isDragActive })} {...getRootProps()}>
      <input {...getInputProps()} />
      <h5>Drag 'n' drop photo here, or click to select photo</h5>
    </div>
  )
}

DropZone.propTypes = {
  setFile: PropTypes.func.isRequired
}

export default DropZone;