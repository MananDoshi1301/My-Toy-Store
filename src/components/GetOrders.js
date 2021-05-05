import React from 'react'
import { useParams } from "react-router-dom";
import FetchData from './FetchData';
import Nav from './Nav';

const GetOrders = () => {
    const userOrders = FetchData('userOrders').docs;
    let docs = FetchData("products").docs;
    console.log(userOrders);
    // console.log(docs)
    let { userId } = useParams(); //Fetch params from links

    const or = () => {
        let dispOrder = userOrders.filter((order)=>{
            return userOrders["userId"]==userId;
        })
        return dispOrder
    }
    
    return (
        <>
            <Nav
                typeCategories={[]}
                brandCategories={[]}
                navShow={{
                    typeCat: false,
                    brandCat: false,
                    user: false,
                    cart: false,
                }}
                cartItems={[]}
            />

            <div className="">
                <div className="container">
                    <div className="order">
                        {userOrders && or()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetOrders
