import React,{useEffect} from 'react';

import { projectStorage,projectFirestore, timestamp } from "../../../Firebase/config";

const NewUserProgress = (file) => {
    useEffect(()=>{
        console.log(file);
        const userRef = projectFirestore.collection('userDetails');
        userRef.add({...file}).then(alert("User Registered!"))
    },[file])
    return (
        <div>
            {}
        </div>
    )
}

export default NewUserProgress
