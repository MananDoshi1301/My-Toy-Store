import React from 'react'
import { useParams } from 'react-router-dom';
import Nav from '../Nav'
import FetchData from '../FetchData';
import { category } from "../Data/Data";
import ProductCard from './ProductCard/ProductCard';

const ProductGrid = () => {
    const { docs } = FetchData('products');
    let { itemType } = useParams();
    // console.log(itemType);
    // console.log(docs);
    return (
        <>
            <Nav categories={category.typeImgs} />
            <div className={`container-fluid my-5`}>
                <ProductCard />
            </div>
        </>
    )
}

export default ProductGrid