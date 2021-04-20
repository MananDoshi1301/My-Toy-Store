import React, { useState, useEffect } from 'react';
import { projectStorage,projectFirestore, timestamp } from "../../../Firebase/config";

const UploadProduct = (file, imgName) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    
    useEffect(() => {
        console.log(file.prodImage);
        const storageRef = projectStorage.ref(imgName);
        const collectionRef = projectFirestore.collection('products');

        storageRef.put(file.prodImage).on('state_changed', snap => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();                        
            const createdAt = timestamp();
            delete file.prodImage;
            await collectionRef.add({ file, url, createdAt });                        
            setUrl(url);            
        })
    }, [file]);

    return { progress, url, error };
    
}

export default UploadProduct;