import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.scss'
import { Cart } from './Cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faHeart,faUser,faCartShopping } from '@fortawesome/free-solid-svg-icons'
export const Header = ({cartItems,removeItemCart}) => {
  const cartItemsLength= cartItems.length + cartItems.filter(el=>el.quantity > 1).length;
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
      <div className="box">
        <input id="search-input" type="search" className="search-input" placeholder="Search"/>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon'/>
      </div>

        <div className="nav-item">
        <Link className="navbar-brand" to="/"><img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo" width="100" height="100"/></Link>
        </div>
        <div className='whislist'>
        <ul className='d-flex list-unstyled align-items-baseline'>
            <li className='pe-5'>
            <button className="btn btn-link cart-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><FontAwesomeIcon icon={faCartShopping} className='pe-2' />Cart<span className="badge text-bg-danger ms-2">{cartItemsLength}</span></button>
              </li>
            <li className='pe-5'>
            <FontAwesomeIcon icon={faHeart} className='pe-2' />
              Whishlist
              </li>
            <li className='pe-5'>
            <FontAwesomeIcon icon={faUser} className='pe-2' />
              Login
              </li>
        </ul>
        </div>
    </div>
  </div>
</nav>
<Cart cartItems={cartItems} removeItemCart={removeItemCart}/>
    </>
  )
}
