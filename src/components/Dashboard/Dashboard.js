import React from 'react'
import Nav from '../Nav'
import AgeCategory from './AgeCategory/AgeCategory'
import Carousel from './Carousel/Carousel'
import TypeCategory from './TypeCategory/TypeCategory'
import BrandCategory from './BrandCategory/BrandCategory'
import { colors, category } from "../Data/Data";

const Dashboard = () => {
    return (
        <>
            <Nav categories={category.typeImgs}></Nav>
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
