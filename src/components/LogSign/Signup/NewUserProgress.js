import React,{useEffect} from 'react';

import { projectStorage,projectFirestore, timestamp } from "../../../Firebase/config";

const NewUserProgress = ({file, setFile}) => {
    useEffect(()=>{
        console.log(file);
        const userRef = projectFirestore.collection('userDetails');
        userRef.add({...file}).then(alert("User Registered!"));
        // (setFile(false))
    },[file])
    return (
        <div>
            {}
        </div>
    )
}

export default NewUserProgress
