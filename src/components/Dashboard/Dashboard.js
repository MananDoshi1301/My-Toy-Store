import React, { useState } from 'react'
import Nav from '../Nav'
import AgeCategory from './AgeCategory/AgeCategory'
import Carousel from './Carousel/Carousel'
import TypeCategory from './TypeCategory/TypeCategory'
import BrandCategory from './BrandCategory/BrandCategory'
import { colors, category } from "../Data/Data";

const Dashboard = ({cartItems,setCartItems}) => {
    // console.log(JSON.parse(JSON.stringify(localStorage.getItem("userCart"))));
    // console.log(JSON.parse(localStorage.getItem("userCart")));
    const [showCart, setShowCart] = useState(false);
    console.log(cartItems);
    return (
        <>              
            <Nav
                typeCategories={category.typeImgs}
                brandCategories={category.brandImgs}
                navShow={
                    {
                        typeCat: true,
                        brandCat: false,
                        cart: true
                    }} 
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                // showCart={showCart}
                // setShowCart={setShowCart}
                    />
            <Carousel></Carousel>
            <div className="container-fluid mb-5">
                <AgeCategory age={category.age} colors={colors}></AgeCategory>
                <TypeCategory typeObj={category.typeImgs}></TypeCategory>
                <BrandCategory brandObj={category.brandImgs}></BrandCategory>
            </div>
        </>
    )
}

export default Dashboard
