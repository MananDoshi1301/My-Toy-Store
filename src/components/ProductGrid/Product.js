import React,{useState} from 'react'
import {Link, useParams} from 'react-router-dom';
import Nav from "../Nav";
import FetchData from '../FetchData';
import Footer from "../Footer";
import Alert from "../Alert";

const Product = ({cartItems, setCartItems}) => {
    const {categoryType, itemType, id} = useParams();
    const docs = FetchData('products').docs;
    const [error, setError] = useState({
        title: "",
        text: "",
        state: "",
        showError: false,
      });

    const prodDisplay = () => {
        console.log(docs)
        const prod = docs.filter((obj)=>{
            return id === obj["id"]
        }).map((obj)=>{
            let date = obj["createdAt"].toDate();
            date = date.toString();
            date = date.split(" ");
            console.log(date);
            return <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-5 d-flex justify-content-center align-items-center"><img src={obj["url"]} className={`img-fluid`} alt={obj["file"]["prodName"]} srcset="" /></div>
                    <div className="col-lg-7 p-5">

                        <div className="header"><span className="display-2">{obj["file"]["prodName"]}</span></div>

                        <div className="productdetails mt-5">
                            <div className="fs-3 fw-bolder">About this item</div>
                            <ul className="detailList fs-5">
                                <li className="my-2 fw-bold text-danger"><span className={`fw-bold text-secondary`}>Brand:</span> {obj["file"]["prodBrand"]}</li>
                                <li className="my-2 fw-bold text-danger"><span className={`fw-bold text-secondary`}>Color:</span> {obj["file"]["prodColor"]}</li>
                                <li className="my-2 fw-bold text-danger"><span className={`fw-bold text-secondary`}>MRP:</span> {obj["file"]["prodPrice"]}/-</li>
                            </ul>
                            <div className="lastUpdated lead">Last Updated On: {date[1]+"-"+date[2]+" "+date[3]}</div>
                        </div>
                        <div class="d-grid gap-2 mt-4">
                            {<button 
                            class="btn btn-success btn-lg" 
                            type="button" 
                            disabled={localStorage.getItem("userName") == 'User'?true:false}
                            onClick={()=>{
                                setCartItems([...cartItems, id]);                                
                                setError({
                                    ...error,          
                                    showError:true,
                                    title:"Success!",
                                    text:"Product Added To Cart!",
                                    state:"success",
                                  });
                            }}>Add To Cart</button>}
                            <Link to={`/product/${categoryType}/${itemType}`} class="btn btn-secondary btn-lg" type="button">Back To Products</Link>
                        </div>
                    </div>
                </div>
            </div>
        })
        return prod;
    }
    return (
        <>
            {error["showError"] && <Alert error={error} setError={setError} />}
            <Nav
                typeCategories={[]}
                brandCategories={[]}
                navShow={{
                    typeCat: false,
                    brandCat: false,
                    user: false,
                    cart: false,
                }}
                cartItems={[]}
            />

            {docs && prodDisplay()}

            <Footer />
        </>
    )
}

export default Product
