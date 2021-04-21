import React from 'react';
import {Link} from 'react-router-dom';

import styles from "../../component.module.css"

const AgeCategory = ({age, colors}) => {
    const btns = age.map(age=>
        <button className={`btn btn-lg btn-${colors[Math.floor(Math.random()*colors.length)]} rounded-pill border border-5 fs-3`}>{age.length<=2?`${age} years and above`:`${age} years`}</button>
    );
    
    return (
        <div className={``}>
            <div className={`display-1 my-4 text-center fw-bold ${styles.architectDaughters} bg-warning`}>
                Shop By Age
            </div>
            <div className={`d-flex justify-content-around`}>
                {btns}
            </div>
        </div>
    )
}

export default AgeCategory
