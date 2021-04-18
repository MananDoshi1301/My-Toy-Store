import React from 'react'

const AgeCategory = ({age, colors}) => {
    const btns = age.map(age=>
        <button className={`btn btn-lg btn-${colors[Math.floor(Math.random()*colors.length)]} rounded-pill border border-5 fs-3`}>{age.length<=2?`${age} years and above`:`${age} years`}</button>
    );
    
    return (
        <>
        <div className={`display-1 my-4 mt-5 text-center`}>
          Shop By Age  
        </div>
        <div className={`d-flex justify-content-around`}>  
            {btns}          
        </div>
        </>
    )
}

export default AgeCategory
