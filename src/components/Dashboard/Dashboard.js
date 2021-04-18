import React from 'react'
import Nav from '../Nav'
import AgeCategory from './AgeCategory/AgeCategory'
import Carousel from './Carousel/Carousel'
import TypeCategory from './TypeCategory/TypeCategory'


//Images For TypeCategory-----------------------------------------------------------
import actionFigures from "../../imagesForDB/actionFigures.jpg"
import dolls from "../../imagesForDB/dolls.jpg"
import gamesAndPuzzles from "../../imagesForDB/gamesAndPuzzles.jpg"
import gifts from "../../imagesForDB/gifts.jpg"
import softToys from "../../imagesForDB/softToys.jpg"
import vehicleAndRemoteControl from "../../imagesForDB/vehicleAndRemoteControl.jpg"
// =================================================================================

const Dashboard = () => {

    const colors = ['danger', 'info', 'primary', 'warning', 'success', 'secondary']

    const category = {
        age:['8', '13', '3 - 4', '5 - 6', '7 - 9', '10 - 12'],
        typeImgs:[
            {'Name':'Action Figures', 'img':actionFigures},
            {'Name':'Dolls', 'img':dolls},
            {'Name':'Games And Puzzles', 'img':gamesAndPuzzles},
            {'Name':'Gifts', 'img':gifts},
            {'Name':'Soft Toys', 'img':softToys},
            {'Name':'Vehicle and Remote Control', 'img':vehicleAndRemoteControl},
        ]
    };

    return (
        <>
            <Nav categories={category.typeImgs}></Nav>
            <Carousel></Carousel>
            <div className="container-fluid mb-5">
                <AgeCategory age={category.age} colors={colors}></AgeCategory>
                <TypeCategory typeObj={category.typeImgs}></TypeCategory>
            </div>
        </>
    )
}

export default Dashboard
