import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Store.scss'
import * as ApiDummy from "../services/ApiDummy";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faStar } from '@fortawesome/free-solid-svg-icons';

export const Store = ({addToCart}) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  
  useEffect(() => {
    getProducts();
    console.log(products);
  }, [])

  const getProducts = () => {
    ApiDummy.getAllProducts()
      .then((res) => setProducts(res))
      .catch((err) => setError(err));
  }

  return (
    <div className="container min-vh-100 my-5">
      {error?(
        <h1>Data Recevied Error</h1>
      ):(
        <div className="row justify-content-center">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="card mb-4 m-1"
              style={{ textDecoration: "none", width: "20rem" }}
            >
                <div className="mt-2">
                  <Link to={`/store/${product.id}`} style={{ textDecoration: "none"}}>
                  <h4
                    className="text-uppercase text-nowrap overflow-hidden"
                    style={{ width: "15rem" }}
                  >
                    {product.title}
                  </h4>
                  <h6 className="main-heading mt-0 text-muted">{product.category}</h6>
                  <div className="mt-5 text-center overflow-hidden">
                    <div className="image">
                      <img
                        src={product.thumbnail}
                        style={{ height: "30vh", objectFit: "contain",objectPosition:"center" }}
                        alt="productimage"
                        className="img-fluid text-center"
                      />
                    </div>
                    
                    <div className="d-flex flex-row justify-content-center">
                      <div className="ratings">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                    <h6 className="text-muted ml-1 d-block">
                      <p>{product.rating.rate}</p>
                    </h6>
                    <h6 className="text-muted ml-1 text-center">
                      Quantity: {product.rating}
                    </h6>
                  </div>
                </Link>
                </div>

              <div className="d-flex justify-content-between align-items-center mt-2 mb-2">
                <span>Available colors</span>
                <div className="colors d-flex">
                  <span /> <span /> <span /> <span />
                </div>
              </div>
              <p> A great option weather you are at office or at home. </p>
            <div className="cart align-items-center"> 
              <button className="btn btn-danger text-uppercase mr-2 px-4" onClick={()=>addToCart(product)}><FontAwesomeIcon icon={faCartShopping}/></button>
              </div>
          </div>
          );
        })}
      </div>
      )}
     
    </div>
  )
}
