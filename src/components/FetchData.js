import React,{useState, useEffect} from 'react';
import {projectFirestore} from '../Firebase/config'

const CheckUser = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore.collection(collection)      
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });

    return () => unsub();
}, [collection]);

return { docs };
}

export default CheckUser;