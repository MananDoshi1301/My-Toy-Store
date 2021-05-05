import React from 'react'
import { useParams } from "react-router-dom";
import FetchData from './FetchData';

const GetOrders = () => {
    const {docs} = FetchData('userOrders');
    console.log(docs)
    let { userId } = useParams(); //Fetch params from links
    return (
        <>           
        </>
    )
}

export default GetOrders
