import React, { useState } from "react";
import { Link } from 'react-router-dom';
import UploadProgress from './UploadProgress'
import { category } from "../../Data/Data";

const Admin = () => {

  let [stateDetails, setStateDetails] = useState({
    prodImage: null,
    prodName: null,
    prodPrice: 0,
    prodType: 'Action Figures',
    prodBrand: 'Barbie',
    prodColor: 'Black',
  });
  let [pokeProgress, setPokeProgress] = useState(false);
  const handleNewProduct = (e) => {

    let { name, value } = e.target;
    if (name === 'prodImage') {
      value = e.target.files[0];
    }
    setStateDetails({
      ...stateDetails,
      [name]: value
    });
  };



  const sendData = (file) => {
    console.log(file);
    setPokeProgress(true);
  }

  return (
    <div className={`my-5`}>
      <div className="container-fluid">
        <h1 className={`display-1`}>Admin Page</h1>
        {pokeProgress &&
          <UploadProgress
            file={stateDetails}
            setFile={setStateDetails}
            imgName={stateDetails.prodImage.name}
            setprogress={setPokeProgress}
          ></UploadProgress>}

        <div className="row mt-3">
          <div className="col-lg-5">

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

            <label className={`form-label fs-3 mt-3`} htmlFor="productName">
              Product Price
            </label>
            <input
              className={`form-control`}
              type="number"
              min="0"
              id="productPrice"
              name="prodPrice"
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
              {category.typeImgs.map((obj) => {
                return <option value={obj.value}>{obj.Name}</option>
              })}
            </select>

            {/* Product Brand */}
            <label className={`form-label fs-3 mt-3`} htmlFor="productBrand">
              Product Brand
            </label>
            <select className={`form-control`} id="productBrand"
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
            <div className="d-flex justify-content-between">
              <button
                className="mt-3 btn btn-primary"
                onClick={() => {
                  console.log(stateDetails);
                  sendData(stateDetails)
                }}
              >Submit</button>
              <Link to="/">
                <button className="mt-3 btn btn-primary">
                  Back To Dashboard
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
