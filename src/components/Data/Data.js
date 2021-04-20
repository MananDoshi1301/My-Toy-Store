import React from 'react';

//Images For TypeCategory-----------------------------------------------------------
import actionFigures from "../../imagesForDB/actionFigures.jpg"
import dolls from "../../imagesForDB/dolls.jpg"
import gamesAndPuzzles from "../../imagesForDB/gamesAndPuzzles.jpg"
import gifts from "../../imagesForDB/gifts.jpg"
import softToys from "../../imagesForDB/softToys.jpg"
import vehicleAndRemoteControl from "../../imagesForDB/vehicleAndRemoteControl.jpg"
// import BrandCategory from './BrandCategory/BrandCategory'
// =================================================================================

// Images for BrandCategory---------------------------------------------------------
import barbie from '../../imagesForDB/barbie.jpg'
import hotwheels from '../../imagesForDB/hotwheels.jpg'
import lego from '../../imagesForDB/lego.jpg'
import mattel from '../../imagesForDB/mattel.jpg'
import mothercare from '../../imagesForDB/mothercare.jpg'
import nerf from '../../imagesForDB/nerf.jpg'

// =================================================================================
const user = {
  name:"User",
  email:null,
  password:null,
  contact:null,
}

const colors = ["danger", "info", "primary", "success", "secondary"];

const category = {
  age: ["8", "13", "3 - 4", "5 - 6", "7 - 9", "10 - 12"],
  typeImgs: [
    { Name: "Action Figures", img: actionFigures, value:"Action Figures" },
    { Name: "Dolls", img: dolls, value:"Dolls" },
    { Name: "Games And Puzzles", img: gamesAndPuzzles, value:"Games and Puzzles" },
    { Name: "Gifts", img: gifts, value:"Gifts" },
    { Name: "Soft Toys", img: softToys, value:"Soft Toys" },
    { Name: "Vehicle and Remote Control", img: vehicleAndRemoteControl, value:"Vehicle and Remote Control" },
  ],
  brandImgs: [
    { Name: "Barbie", img: barbie, value:"Barbie" },
    { Name: "Hotwheels", img: hotwheels, value:"Hotwheels" },
    { Name: "Lego", img: lego, value:"Lego" },
    { Name: "Mattel", img: mattel, value:"Mattel" },
    { Name: "Mothercare", img: mothercare, value:"Mothercare" },
    { Name: "Nerf", img: nerf, value:"Nerf" },
  ],
  color: [ 
    {Name: "Black", value:"Black" },
    {Name: "Blue", value:"Blue" },
    {Name: "Gray", value:"Gray" },
    {Name: "Green", value:"Green" },
  ]
};

export {colors, category, user};