import React from 'react'




const BrandCategory = (props) => {

    const brandImgDisplay = props.brandObj.map(obj=>{
        return <div className={`col-lg-4 col-md-4 col-sm-6 col-6 p-0`}>
            <img className={`img-fluid`} src={obj.img} alt="" srcset="" />
        </div>
    })
    return (
        <>
            <div className={`display-1 my-4 mt-5 text-center`}>
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
