import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useDropzone } from 'react-dropzone';

const DropZone = ({ setFile }) => {
  
  const onDrop = useCallback(acceptedFiles => {
    setFile(acceptedFiles.map(file => Object.assign(file, { 
      preview: URL.createObjectURL(file)
     })))
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