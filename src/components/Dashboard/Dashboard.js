import React from 'react'
import Nav from '../Nav'
import AgeCategory from './AgeCategory/AgeCategory'
import Carousel from './Carousel/Carousel'

const Dashboard = () => {

    const colors = ['danger', 'info', 'primary', 'warning', 'success', 'secondary']
    const category = {
        age:['8', '13', '3 - 4', '5 - 6', '7 - 9', '10 - 12']
    };

    return (
        <>
            <Nav></Nav>
            <Carousel></Carousel>
            <div className="container-fluid">
                <AgeCategory age={category.age} colors={colors}></AgeCategory>

            </div>
        </>
    )
}

export default Dashboard
