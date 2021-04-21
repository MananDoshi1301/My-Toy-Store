import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../../component.module.css"

const TypeCategory = (props) => {

    const cardImageDisplay = props.typeObj.map(obj => {
        return <div class="col">
            <div class="card shadow p-0 mb-5 bg-body rounded">
                <Link to={`/product/${obj.Name}`}>
                    <img src={obj.img} class="card-img-top" alt={obj.Name}></img>
                    <div class="card-body text-center ">
                        <p class={`card-title fs-3 ${styles.bangers}`}>{obj.Name}</p>
                    </div>
                </Link>
            </div>
        </div>
    })

    return (
        <>
            <div className={`display-1 my-4 mt-5 text-center fw-bold ${styles.architectDaughters} bg-success`}>
                Shop By Category
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">

                {cardImageDisplay}
            </div>
        </>
    )
}

export default TypeCategory
