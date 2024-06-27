import React from 'react'
import fb from '../assets/images/fb.png'
import insta from '../assets/images/insta.png'
import twitter from '../assets/images/twitter.png'
import whatsapp from '../assets/images/whatsapp.png'
import youtube from '../assets/images/youtube.png'

export default function Footer() {
    return (
        <div>



            <footer className='bg1'>
                <div className='row  text-light'>
                    <div className='col-md-4 d-flex flex-column justify-content-center align-items-center'>
                        <h1 className='text-danger heading7'>Social Media</h1>
                        <div className=' text-center'>

                            <img src={fb} alt="" className='img-fluid footer-icon' />

                            <img src={insta} alt="" className='img-fluid footer-icon' />

                            <img src={twitter} alt="" className='img-fluid footer-icon' />

                            <img src={whatsapp} alt="" className='img-fluid footer-icon' />

                            <img src={youtube} alt="" className='img-fluid footer-icon' />

                        </div>

                    </div>
                    <div className='col-md-2'>
                        <div className='linkish'>
                            <h4 className='text-danger heading7 '>Quick Links</h4>
                            <p className='heading6'>Rentals</p>
                            <p className='heading6'>Sales</p>
                            <p className='heading6'>Contact</p>
                            <p className='heading6'>Terms Conditions</p>
                            <p className='heading6'>Our blog</p>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className=' linkish'>
                            <h4 className='text-danger heading7'>Company</h4>
                            <p className='heading6'>About</p>
                            <p className='heading6'>Site Map</p>
                            <p className='heading6'>Support Center</p>
                            <p className='heading6'>Terms Conditions</p>
                            <p className='heading6'>Submit Listing</p>
                        </div>
                    </div>
                    <div className='col-md-4 d-flex justify-content-center align-items-center'>
                        <div className='text-center '>
                            <h4 className='text-danger heading7 '>About Us</h4>
                            <div className=' pt-4 heading6'>
                                <p>We are the top real estate agency in Chennai, with agents available to answer any question 24/7.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h5 className='text-center pb-2 mt-3 text-danger heading6'>eliteEstate © 2021. All rights reserved</h5>
            </footer>

        </div>
    )
}
