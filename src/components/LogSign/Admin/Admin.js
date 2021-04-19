import React from "react";

import {category} from "../../Data/Data";

const Admin = () => {

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
            <label className={`form-label fs-3 mt-3`} htmlFor="productImage">
              Product Image:
            </label>
            <input
              className={`form-control`}
              type="file"
              id="productImage"
              name="prodImage"
              accept="image/png, image/jpeg, image/jpg"
            />

            <label className={`form-label fs-3 mt-3`} htmlFor="productName">
              Product Name
            </label>
            <input
              className={`form-control`}
              type="text"
              id="productName"
              name="prodName"
            />

            <label className={`form-label fs-3 mt-3`} htmlFor="productType">
              Product Type
            </label>
            <select className={`form-control`} name="" id="productType">
              {typeCategory}
            </select>


            <label className={`form-label fs-3 mt-3`} htmlFor="productBrand">
              Product Brand
            </label>
            <select className={`form-control`} name="" id="productBrand">
              {brandCategory}
            </select>

            <label className={`form-label fs-3 mt-3`} htmlFor="productColor">
              Product Color
            </label>
            <select className={`form-control`} name="" id="productColor">
              {colorCategory}
            </select>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
