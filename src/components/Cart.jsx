import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export const Cart = ({ cartItems,removeItemCart }) => {
    const initialValue = 0;
    const total = cartItems.reduce((accumulator,current) => accumulator + current.price * current.quantity, initialValue)
    return (
        <>
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Cart</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10">
                            {cartItems.length >= 1 ? (
                                <>
                                    {cartItems.map((product) => (
                                        <div className="card mt-3 p-3" key={product.id}>
                                            <div className="conatiner">
                                                <div className='d-flex justify-content-between align-items-center'>
                                                <img id="main-image" className='img-fluid' src={product.thumbnail} alt='product' style={{width:'100px',height:'100px'}}/>
                                                <h6 className="text-uppercase">{product.title}</h6>
                                                </div>
                                                <div className='pt-1'>
                                                <p>{product.description}</p>
                                                </div>
                                                <div className='d-flex justify-content-between align-items-center pt-2'>
                                                <strong>Price: {product.price} $</strong>
                                                <strong>Quantity: {product.quantity}</strong>
                                                </div>
                                                <div className='d-flex justify-content-between align-items-center pt-2'>
                                                <button className='btn btn-danger' onClick={()=>removeItemCart(product.id)}>
                                                    <FontAwesomeIcon icon={faTrash}/>
                                                </button>
                                                <button className='btn btn-danger'>
                                                    Complete Checkout
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <h5>Total:{total}</h5>
                                </>
                            ) : (
                                <div className='text-center'>
                                <h4 className='text-muted'>Your Cart is Empty</h4>
                                <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" className="img-fluid mb-4 mr-3" alt='cart'/>                                    
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
