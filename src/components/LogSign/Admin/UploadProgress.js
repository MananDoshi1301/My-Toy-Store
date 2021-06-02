import React, { useEffect } from 'react';
import UploadProduct from "./UploadProduct";



const UploadProgress = ({ file, setFile, imgName, setprogress }) => {
  const { progress, url } = UploadProduct(file, imgName);

  useEffect(() => {
    if (url) {
      setFile(file.prodImage = null);
      Object.keys(file).forEach(key => file[key] = null);
      console.log(file);
      setprogress(false);
    }
    console.log(url);
  }, [file, setFile, imgName, setprogress]);
  console.log(progress);


  return (
    url && <div className={`fs-4 fw-bold text-success`}>Product Added!</div>
  )
}

export default UploadProgress;