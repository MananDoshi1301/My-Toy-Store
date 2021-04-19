import React, {useState} from "react";

import {category} from "../../Data/Data";

const Admin = () => {

  const productDetail = {
    prodImage:null,
    prodName:null,
    prodType:null,
    prodBrand:null,
    prodColor:null,
  }

  let [stateDetails, setStateDetails] = useState(productDetail);

  const handleNewProduct = (e) => {
    const {name, value} = e.target;
    setStateDetails({
      ...stateDetails,
      [name]:value
    });
    console.log(stateDetails);
  };


  const typeCategory = category.typeImgs.map((obj)=>{
    return <option value={obj.Name}>{obj.Name}</option>
  })
  const brandCategory = category.brandImgs.map( obj=>{
    return <option value={obj.Name}>{obj.Name}</option>
  })
  const colorCategory = category.color.map( obj=>{
    return <option value={obj.Name}>{obj.Name}</option>
  })

  return (
    <div className={`my-5`}>
      <div className="container-fluid">
        <h1 className={`display-1`}>Admin Page</h1>

        <div className="row mt-3">
          <div className="col-lg-5">

            <form>
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

              <label className={`form-label fs-3 mt-3`} htmlFor="productType">
                Product Type
              </label>
              <select className={`form-control`} name="" id="productType"
                onChange={handleNewProduct} required
              >
                {typeCategory}
              </select>


              <label className={`form-label fs-3 mt-3`} htmlFor="productBrand">
                Product Brand
              </label>
              <select className={`form-control`} name="" id="productBrand"
                onChange={handleNewProduct} required
                value={value}
              >
                {brandCategory}
              </select>

              <label className={`form-label fs-3 mt-3`} htmlFor="productColor">
                Product Color
              </label>
              <select className={`form-control`} name="" id="productColor"
                onChange={handleNewProduct} required
              >
                {colorCategory}
              </select>

              <button type="submit" className="mt-3 btn btn-primary" >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
