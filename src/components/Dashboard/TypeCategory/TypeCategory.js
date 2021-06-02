import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../../component.module.css"

const TypeCategory = (props) => {

    const cardImageDisplay = props.typeObj.map(obj => {
        return <div className="col">
            <div className="card shadow p-0 mb-5 bg-body rounded">
                <Link to={`/product/prodType/${obj.Name}`}>
                    <img src={obj.img} className="card-img-top" alt={obj.Name}></img>
                </Link>
                <div className="card-body text-center">
                    <p className={`card-title fs-3 ${styles.bangers}`}>{obj.Name}</p>
                </div>
            </div>
        </div>
    })

    return (
        <>
            <div className={`display-1 my-4 mt-5 text-center fw-bold ${styles.architectDaughters} bg-warning`}>
                Shop By Category
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">

                {cardImageDisplay}
            </div>
        </>
    )
}

export default TypeCategory
