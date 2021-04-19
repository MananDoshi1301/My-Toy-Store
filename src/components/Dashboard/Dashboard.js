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
import BrandCategory from './BrandCategory/BrandCategory'
// =================================================================================

// Images for BrandCategory---------------------------------------------------------
import barbie from '../../imagesForDB/barbie.jpg'
import hotwheels from '../../imagesForDB/hotwheels.jpg'
import lego from '../../imagesForDB/lego.jpg'
import mattel from '../../imagesForDB/mattel.jpg'
import mothercare from '../../imagesForDB/mothercare.jpg'
import nerf from '../../imagesForDB/nerf.jpg'
// =================================================================================

const Dashboard = () => {

    const colors = ['danger', 'info', 'primary', 'success', 'secondary']

    const category = {
        age:['8', '13', '3 - 4', '5 - 6', '7 - 9', '10 - 12'],
        typeImgs:[
            {'Name':'Action Figures', 'img':actionFigures},
            {'Name':'Dolls', 'img':dolls},
            {'Name':'Games And Puzzles', 'img':gamesAndPuzzles},
            {'Name':'Gifts', 'img':gifts},
            {'Name':'Soft Toys', 'img':softToys},
            {'Name':'Vehicle and Remote Control', 'img':vehicleAndRemoteControl},
        ],
        brandImgs:[
            {'Name':'Barbie', 'img':barbie},
            {'Name':'Hotwheels', 'img':hotwheels},
            {'Name':'Lego', 'img':lego},
            {'Name':'Mattel', 'img':mattel},
            {'Name':'Mothercare', 'img':mothercare},
            {'Name':'Nerf', 'img':nerf}
        ]
    };

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
