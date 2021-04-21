import React from 'react'
import Nav from '../Nav'
import {category} from "../Data/Data";
import ProductCard from './ProductCard/ProductCard';

const ProductGrid = () => {
    
    return (
        <>
            <Nav categories={category.typeImgs}/>
            <div className={`container-fluid my-5`}>
                <ProductCard />
            </div>
        </>
    )
}

export default ProductGrid
