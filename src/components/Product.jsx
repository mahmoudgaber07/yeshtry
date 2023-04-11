import React, { useEffect, useState } from 'react'
import * as ApiDummy from "../services/ApiDummy";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import '../styles/Product.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faLongArrowAltLeft, faShare, faStar } from '@fortawesome/free-solid-svg-icons';
import { SliderImg } from './SliderImg';

export const Product = ({addToCart}) => {
    const productId = useParams().id;
    const [product,setProduct] = useState([]);
    const [error, setError] = useState("");

    useEffect(()=>{
     getProducts();
     console.log(product);
    },[])
  
    const getProducts = () => {
      ApiDummy.getProduct(productId)
        .then((res) => setProduct(res))
        .catch((err) => setError(err));
    }

  return (
<div className="container mt-5 mb-5">
  {error?(
        <h1>Data Recevied Error</h1>
        ):(
          <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <div className="card">
              <div className="row">
                <div className="col-md-6 my-4">
                  <div className="images p-3">
                    <div className="text-center py-4"> 
                    <img id="main-image" src={product.thumbnail} width={"100%"} alt='product'/>
                     </div>
                     <SliderImg images={product.images}/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product p-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to={"/"} className="d-flex align-items-center back-link"> 
                      <FontAwesomeIcon icon={faLongArrowAltLeft} className='pe-2'/>
                      <span className="ml-1">Back</span> 
                      </Link> 
                      <FontAwesomeIcon icon={faCartShopping}/>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo" className='pt-4'/>
                    <div className="d-flex flex-row pt-5">
                      <div className="ratings">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                    <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{product.brand}</span>
                      <h5 className="text-uppercase">{product.title}</h5>
                      <div className="price d-flex flex-row align-items-center"> <span className="act-price">{product.price}</span>
                        <div className="ml-2"> <small className="dis-price">$59</small> <span>40% OFF</span> </div>
                      </div>
                    </div>
                    <p className="about">{product.description}</p>
                    <div className="sizes mt-5">
                      <h6 className="text-uppercase">Size</h6> <label className="radio"> <input type="radio" name="size" defaultValue="S" defaultChecked /> <span>S</span> </label> <label className="radio"> <input type="radio" name="size" defaultValue="M" /> <span>M</span> </label> <label className="radio"> <input type="radio" name="size" defaultValue="L" /> <span>L</span> </label> <label className="radio"> <input type="radio" name="size" defaultValue="XL" /> <span>XL</span> </label> <label className="radio"> <input type="radio" name="size" defaultValue="XXL" /> <span>XXL</span> </label>
                    </div>
                    <div className="cart mt-4 align-items-center"> 
                    <button className="btn btn-danger text-uppercase mr-2 px-4" onClick={()=>addToCart(product)}>Add to cart</button><FontAwesomeIcon icon={faHeart} className='px-2' /><FontAwesomeIcon icon={faShare} className='px-2' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )}
</div>
  )
}
export default Product;