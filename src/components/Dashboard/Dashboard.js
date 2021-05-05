import React, { useState } from "react";
import Nav from "../Nav";
import AgeCategory from "./AgeCategory/AgeCategory";
import Carousel from "./Carousel/Carousel";
import TypeCategory from "./TypeCategory/TypeCategory";
import BrandCategory from "./BrandCategory/BrandCategory";
import Footer from "../Footer";
import { colors, category } from "../Data/Data";
import { motion } from "framer-motion";

const Dashboard = ({ cartItems, setCartItems }) => {
  // console.log(JSON.parse(JSON.stringify(localStorage.getItem("userCart"))));
  // console.log(JSON.parse(localStorage.getItem("userCart")));
  const [showCart, setShowCart] = useState(false);
  console.log(cartItems);
  return (
    <>
      <Nav
        typeCategories={category.typeImgs}
        brandCategories={category.brandImgs}
        navShow={{
          typeCat: false,
          brandCat: false,
          user: true,
          cart: true,
        }}
        cartItems={cartItems}
        setCartItems={setCartItems}
      // showCart={showCart}
      // setShowCart={setShowCart}
      />
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          delay: 0.3,
          duration: 1,
          stiffness: 130,
        }}
      >
        <Carousel></Carousel>
        <div className="container-fluid mb-0">
          {/* <AgeCategory age={category.age} colors={colors}></AgeCategory> */}
          <TypeCategory typeObj={category.typeImgs}></TypeCategory>
          <BrandCategory brandObj={category.brandImgs}></BrandCategory>
        </div>

        <Footer />
      </motion.div>
    </>
  );
};

export default Dashboard;
