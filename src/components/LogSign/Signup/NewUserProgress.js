import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { projectStorage, projectFirestore, timestamp } from "../../../Firebase/config";

const NewUserProgress = ({ file, setFile }) => {
    const history = useHistory();
    useEffect(() => {
        console.log(file);
        const userRef = projectFirestore.collection('userDetails');
        userRef.add({ ...file }).then(alert("User Registered!")).then(history.push('/'));
        // (setFile(false))
    }, [file])
    return (
        <div>
            { }
        </div>
    )
}

export default NewUserProgress
