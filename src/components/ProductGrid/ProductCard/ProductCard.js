import React from 'react'

const ProductCard = ({ products }) => {

    const items = products.map(
        product => {
            return <div class="col">
                <div class="card h-100">
                    <img src={product.url} class="card-img-top" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">{product.name}</h5>
                        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                    </div>
                </div>
            </div>
        }
    )
    return (
        <>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                {/* Repeat -------------------------------------- */}
                <div class="col">
                    <div class="card h-100">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                {/* ============================================= */}
            </div>
        </>
    )
}

export default ProductCard
