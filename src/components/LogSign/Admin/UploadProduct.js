import React,{useEffect, useState} from 'react'
import {projectStorage} from "../../../Firebase/config";

const UploadProduct = (file) => {
    const [url, setUrl] = useState(null);
    const [progress, setProgress] = useState(null);

    useEffect(()=>{
        const storageRef = projectStorage.ref(file.name);
        console.log(file.name, file);
        storageRef.put(file).on('state_changed', snap=>{
            let percentage = (snap.bytesTransferred/snap.totalBytes) * 100;
        }, async ()=>{
            const ur = await storageRef.getDownloadURL();
            setUrl(ur);
        })
        // console.log("File Changed");    
    },[file])
    return {url, progress};
}

export default UploadProduct;
