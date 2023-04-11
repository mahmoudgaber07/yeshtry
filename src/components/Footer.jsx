import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
    <footer className="bg-dark text-center text-white pt-3">
        {/* Grid container */}
        <div className="container p-4">
            {/* Section: Links */}
            <section>
                {/*Grid row*/}
                <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0 text-start">
                        {/* Section: Text */}
                        <h1 className="text-uppercase footer-header">Yashtry</h1>
                        <section className="mb-4">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                                repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                                eum harum corrupti dicta, aliquam sequi voluptate quas.
                            </p>
                        </section>
                    </div>
                    {/* Section: Text */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        {/* Section: Form */}
                        <section>
                            <form>
                                {/*Grid row*/}
                                <div className="row d-flex justify-content-center">                                    
                                    {/*Grid column*/}
                                    {/*Grid column*/}
                                    <div className="col-md-5 col-12">
                                        {/* Email input */}
                                        <div className="form-outline form-white mb-4">
                                            <label className="form-label" htmlFor="form5Example21">Sign up for our newsletter</label>
                                            <input type="email" id="form5Example21" className="form-control" />
                                        </div>
                                    </div>
                                    {/*Grid column*/}
                                    {/*Grid column*/}
                                </div>
                                {/*Grid row*/}
                            </form>
                        </section>
                        <div className="row">
                        {/* Section: Form */}
                        <div className="col-6 mb-4 mb-md-0 text-start">
                            <h5 className="text-uppercase">Links</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <Link to="#!" className="text-white">About us</Link>
                                </li>
                                <li>
                                    <Link to="#!" className="text-white">Contact us</Link>
                                </li>
                                <li>
                                    <Link to="#!" className="text-white">Track Order</Link>
                                </li>
                                <li>
                                    <Link to="#!" className="text-white">Terms & Condition</Link>
                                </li>
                            </ul>
                        </div>
                        {/*Grid column*/}
                        <div className="col-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Social Media</h5>
                            {/* Section: Social media */}
                            <section className="mb-4">
                                {/* Facebook */}
                                <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"><FontAwesomeIcon icon={faFacebook} /></Link>
                                {/* Twitter */}
                                <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"><FontAwesomeIcon icon={faTwitter} /></Link>
                                {/* Google */}
                                <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"><FontAwesomeIcon icon={faGoogle} /></Link>
                                {/* Instagram */}
                                <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"><FontAwesomeIcon icon={faInstagram} /></Link>
                                {/* Linkedin */}
                                <Link className="btn btn-outline-light btn-floating m-1" to="#!" role="button"><FontAwesomeIcon icon={faLinkedin} /></Link>
                            </section>
                            {/* Section: Social media */}
                        </div>
                        {/*Grid column*/}
                        </div>
                    </div>

                </div>
                {/*Grid row*/}
            </section>
            {/* Section: Links */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2023 Copyright:
            <Link className="text-white" to="https://Mahmoudgaber07.eb2a.com/">Mahmoudgaber07.eb2a.com</Link>
        </div>
        {/* Copyright */}
    </footer>
    )
}
