import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../../component.module.css";


const BrandCategory = (props) => {

    const brandImgDisplay = props.brandObj.map(obj => {
        return <div className={`col-lg-4 col-md-4 col-sm-6 col-6 p-0`}>
            <Link to={`/product/prodType/${obj.Name}`}>
                <img className={`img-fluid`} src={obj.img} alt="" srcset="" />
            </Link>
        </div>
    })
    return (
        <>
            <div className={`display-1 my-4 mt-5 text-center fw-bold ${styles.architectDaughters} bg-danger`}>
                Shop By Brand
            </div>
            <div className="container-fluid p-0">
                <div className="row">
                    {brandImgDisplay}
                </div>
            </div>
        </>
    )
}

export default BrandCategory
