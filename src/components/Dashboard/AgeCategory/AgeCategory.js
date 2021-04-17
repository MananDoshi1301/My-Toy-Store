import React from 'react'

const AgeCategory = ({age, colors}) => {
    const btns = age.map(age=>
        <button className={`btn btn-lg btn-${colors[Math.floor(Math.random()*colors.length)]} rounded-pill fs-3`}>{age.length<=2?`${age} years and above`:`${age} years`}</button>
    );
    return (
        <>
        <div className={`display-4 my-4 mt-5`}>
          Shop By Age  
        </div>
        <div className={`d-flex justify-content-around`}>  
            {btns}          
        </div>
        </>
    )
}

export default AgeCategory
