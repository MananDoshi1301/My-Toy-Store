import React, {useState, useEffect} from "react";
import UploadProduct from "./UploadProduct";

import {category} from "../../Data/Data";

const Admin = () => {

  let [stateDetails, setStateDetails] = useState({
    prodImage:null,
    prodName:null,
    prodType:null,
    prodBrand:null,
    prodColor:null,
  });

  const handleNewProduct = (e) => {
    console.log(e.target.name, e.target.value);
    const {name, value} = e.target;
    setStateDetails({
      ...stateDetails,
      [name]:value
    });
    // console.log(stateDetails);
  };

  const sendData = () =>{
    console.log("Submit Clicked");
    const {url, progress} = UploadProduct(stateDetails);
    console.log(progress, url);
  } 

  return (
    <div className={`my-5`}>
      <div className="container-fluid">
        <h1 className={`display-1`}>Admin Page</h1>

        <div className="row mt-3">
          <div className="col-lg-5">

            <form>
              {/* Product Image */}
              <label className={`form-label fs-3 mt-3`} htmlFor="productImage">
                Product Image:
              </label>
              <input
                className={`form-control`}
                type="file"
                id="productImage"
                name="prodImage"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleNewProduct} required
              />

              {/* Product Name */}
              <label className={`form-label fs-3 mt-3`} htmlFor="productName">
                Product Name
              </label>
              <input
                className={`form-control`}
                type="text"
                id="productName"
                name="prodName"
                onChange={handleNewProduct} required
              />

              {/* Product Type */}
              <label className={`form-label fs-3 mt-3`} htmlFor="productType">
                Product Type
              </label>
              <select className={`form-control`} 
                id="productType"
                onChange={handleNewProduct} 
                name="prodType" //imp
                required
              >
                {category.typeImgs.map((obj)=>{
                  return <option value={obj.value}>{obj.Name}</option>
                })}
              </select>

              {/* Product Brand */}
              <label className={`form-label fs-3 mt-3`} htmlFor="productBrand">
                Product Brand
              </label>
              <select className={`form-control`} name="" id="productBrand"
                onChange={handleNewProduct} 
                name="prodBrand"
                required
              >
                {category.brandImgs.map(obj => {
                  return <option value={obj.value}>{obj.value}</option>
                })}
              </select>

              {/* Product Color */}
              <label className={`form-label fs-3 mt-3`} htmlFor="productColor">
                Product Color
              </label>
              <select className={`form-control`} 
                name="prodColor" 
                id="productColor"
                onChange={handleNewProduct} required
              >
                {category.color.map(obj => {
                  return <option value={obj.value}>{obj.value}</option>
                })}
              </select>

              <button
                // type="submit"
                className="mt-3 btn btn-primary"
                onClick={sendData}
              >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
