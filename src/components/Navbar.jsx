import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.scss'
export const Navbar = () => {
  return (
      <ul className="navbar-nav flex-md-row justify-content-center mt-3">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Men</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Women</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Unisex</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">Kids</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">Best Sellers</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">New Arrivals</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">Offers</Link>
        </li>
      </ul>
  )
}
