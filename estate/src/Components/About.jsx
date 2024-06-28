import { useState } from 'react'
import React, { useEffect } from 'react';
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.jpg'
import img6 from '../assets/images/img6.jpg'
import roadman from '../assets/images/roadmap.jpg'
import img8 from '../assets/images/estste.jpg'
import img9 from '../assets/images/reales.jpg'
import img10 from '../assets/images/img10.jpg'
import img11 from '../assets/images/img11.jpg'
import img12 from '../assets/images/img12.jpg'
import img13 from '../assets/images/img13.jpg'
import img14 from '../assets/images/img14.jpg'
import img15 from '../assets/images/img15.jpg'
import img16 from '../assets/images/img16.jpg'
import img17 from '../assets/images/img17.jpg'
import img18 from '../assets/images/img19.jpg'
import img19 from '../assets/images/img19.jpg'
import img20 from '../assets/images/img20.jpg'
import img21 from '../assets/images/img21.jpg'
import img22 from '../assets/images/img22.jpg'
import img23 from '../assets/images/img23.jpg'
import Footer from './Footer';
import Scroll from './Scroll';
import logo from '../assets/images/estate.png'
export default function About() {
    const [active, setActive] = useState(false)
    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);
    const [isZoomed, setIsZoomed] = useState(false);
    let gotoTop = (secID) => {
        const element = document.getElementById(secID);
        const navbarElement = document.querySelector('.navbar>.container-fluid');

        if (navbarElement) {
            var navHeight = navbarElement.clientHeight;
            // Use navHeight as needed
        }
        console.log(element)
        if (element) {
            const topPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: topPosition - navHeight, behavior: 'smooth' });

        }

    }
    const handleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    gotoTop();
    return (
        <div>

            <section className='' id='home'>
                <nav class="navbar navbar-expand-lg nav-banner" id=''>
                    <div class="container-fluid">
                        <a class="navbar-brand " href="index.html">
                            <img src={logo} alt="logo" class="logo1" /></a>                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-4  p-4 mb-lg-0 text-center ">

                                <li class="nav-item heading5">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('home')} >Home</a>
                                </li>

                                <li class="nav-item heading5 ">
                                    <a class="nav-link active px-3 " aria-current="page" id='name-nav' onClick={() => gotoTop('our Services')}>Services</a>
                                </li>

                                <li class="nav-item heading5">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('our Amenities')} >Amenities</a>
                                </li>

                                <li class="nav-item heading5">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('Gallery')}>Photo Gallery</a>
                                </li>

                                <li class="nav-item heading5">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('floor plan')}>Plan</a>
                                </li>
                                <li class="nav-item heading5 border-end">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('Contact')}>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>

            {/* <div className='buy-now d-flex justify-content-center align-items-center rounded-2'>
                <a href="https://axesstechnology.in/contact" target='_blank'>
                <button className='buy-now-bt'>BuyNow</button></a>
            </div> */}

            <section className='container-fluid' >
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={img1} class="d-block carousel-img " alt="..." />
                        </div>
                        <div class="carousel-item active">
                            <img src={img23} class="d-block carousel-img " alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={img2} class="d-block carousel-img" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={img3} class="d-block  carousel-img " alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <section id=''>
                <div data-aos="zoom-in" data-aos-duration="1000" >
                    <h4 className='heading10 mt-5 text-center' style={{ color: "black" }}> Welcome to Elite Estates</h4>
                    <p className='primary-title heading4 text-center mt-4' >Your Dream Home Awaits</p>
                </div>
                <div className="container">
                    <div className="col-md-12 row justify-content-center align-items-center mt-4">
                        <div className="col-lg-4 col-md-6 cardish" data-aos="fade-down-right" data-aos-duration="1000">
                            <div className='card1'>
                                <div class="card zoom-out mt-2 " style={{ border: "none" }}>
                                    <img src={img4} class="card-img-top img10" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title heading10 text-center mt-3">Renting</h5>
                                        <p class="card-text primary-title heading4 mt-4" style={{ color: "black" }}>Find the perfect rental home with us. Affordable options, flexible terms, and personalized support for a
                                            seamless renting experience.</p>

                                    </div>
                                </div>

                            </div>


                        </div>
                        <div className="col-lg-4 col-md-6 cardish" data-aos="flip-up" data-aos-duration="1000">
                            <div className='card1'>
                                <div class="card zoom-out mt-2 " style={{ border: "none" }}>
                                    <img src={img5} class="card-img-top img10" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title heading10 text-center mt-3">Buying</h5>
                                        <p class="card-text mt-4 primary-title heading4 mt-4" style={{ color: "black" }}>Discover your dream home with our expert guidance. Wide selection, competitive prices, and dedicated
                                            support for a smooth buying process.</p>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 cardish" data-aos="fade-down-left" data-aos-duration="1000">
                            <div className='card1'>
                                <div class="card zoom-out mt-2" style={{ border: "none" }}>
                                    <img src={img6} class="card-img-top img10" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title heading10 text-center mt-3">Selling</h5>
                                        <p class="card-text primary-title heading4 mt-4" style={{ color: "black" }}>Maximize your property's value with our selling expertise. Professional marketing, extensive network, and
                                            personalized service for quick, profitable sales.</p>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section id='our Services'>
                <div class="container">
                    <div class="row justify-content-center g-3 about mt-4 boxing">
                        <h4 className='heading10 mt-5 text-center' style={{ color: "black" }}> Our Services</h4>

                        <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 aos-init aos-animate">
                            <div class="card " data-aos="zoom-in" data-aos-duration="1000">
                                <div class="card-body" >
                                    <h4 class="card-title primary-header card1-header mb-3 ">200 +</h4>
                                    <p class="secondary-color card-text1 heading6"> Consultations</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 aos-init aos-animate">
                            <div class="card" data-aos="zoom-in" data-aos-duration="1000">
                                <div class="card-body">
                                    <h4 class="card-title primary-header card1-header mb-3">95 %</h4>
                                    <p class="secondary-color card-text1 heading6"> Client satisfaction</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2" >
                            <div class="card" data-aos="zoom-in" data-aos-duration="1000">
                                <div class="card-body text-center">
                                    <h4 class="card-title primary-header card1-header mb-3">10 +</h4>
                                    <p class="secondary-color card-text1 heading6"> Years of legal consultation</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 aos-init aos-animate">
                            <div class="card" data-aos="zoom-in" data-aos-duration="1000">
                                <div class="card-body">
                                    <h4 class="card-title primary-header card1-header mb-3">50 +</h4>
                                    <p class="secondary-color card-text1 heading6"> Cases won</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 aos-init aos-animate">
                            <div class="card" data-aos="zoom-in" data-aos-duration="1000">
                                <div class="card-body">
                                    <h4 class="card-title primary-header card1-header mb-3">50 +</h4>
                                    <p class="secondary-color card-text1 heading6"> Legal matters</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id='our Amenities'>
                <h4 className='heading10 mt-5 text-center' style={{ color: "black" }}> Amenities</h4>
                <p className='primary-title heading4 text-center mt-4' >Complete List of Amenities and Features </p>
                <div className="container ">
                    <div className="row justify-content-space-between align-items-center mt-3 px-5 gy-5 ">
                        <div className="col-md-3 listing">
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> 24/7 Security </p>
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> Power Backup</p>
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> Swimming Pool</p>
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> Gymnasium</p>
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> Clubhouse </p>
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> Children's Play Area</p>
                        </div>
                        <div className="col-md-3 listing">
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> Jogging Track </p>
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> Indoor Games Room</p>
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> Landscaped Gardens</p>
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> Community Hall</p>
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> Intercom Facility</p>
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> Lift</p>
                        </div>
                        <div className="col-md-3 listing">
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> Parking Space </p>
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> Rainwater Harvesting</p>
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> Fire Safety Systems</p>
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> Wi-Fi Connectivity</p>
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"> <span>✔</span> Multipurpose Court</p>
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> Senior Citizen Zone</p>
                        </div>
                        <div className="col-md-3 listing">
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> Yoga and Meditation Area </p>
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> Amphitheater</p>
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> Shopping Center</p>
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> CCTV Surveillance</p>
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> Maintenance Staff</p>
                            <p className='heading6' data-aos="fade-up" data-aos-duration="600"><span>✔</span> Waste Disposal System</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Floor plans */}
            <section id='floor plan'>
                <h4 className='heading10 mt-5 text-center' style={{ color: "black" }}> Floor Plans</h4>
                <p className='primary-title heading4 text-center mt-4' >Thoughtfully designed layouts for maximum space and comfort.</p>
                <div className='text-center' data-aos="zoom-in-up" data-aos-duration="1000">
                    <img src={roadman} alt="" className='img-fluid ' />
                </div>

            </section>

            <section >
                <section class="common-padding pb-0" id="legal-services">
                    <div class="container">
                        <div class="text-center">
                            <h4 className='heading10 mt-5 text-center' style={{ color: "black" }}> Our Expertise</h4>
                            <p class="primary-title heading4 text-center mt-4" data-aos="fade-up" data-aos-duration="700">
                                Providing exceptional real estate services with years of industry experience</p>
                        </div>
                        <div class="row gy-5 gy-md-0 text-center">
                            <div class="col-lg-12 col-12">
                                <div class="row align-items-center g-3">
                                    <div class="col-md-6 order-2 order-md-1" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-sine"
                                        data-aos-anchor-placement="bottom-bottom">
                                        <h1 className='heading10 mt-5 text-center'>PROFESSIONAL
                                            REAL ESTATE AGENTS</h1>
                                        <p class="primary-title heading4 text-center mt-4">Established in 1980, we are now a locally owned, third-generation real estate brokerage firm. Our
                                            company is revolutionizing commercial real estate finance in India, empowering and enriching our clients.</p>
                                    </div>
                                    <div class="col-md-6 p-md-0 order-1 order-md-2" data-aos="fade-up" data-aos-duration="500"
                                        data-aos-easing="ease-in-sine">
                                        <img class="w-100 img-fluid"
                                            src={img8}
                                            style={{ objectFit: "cover" }}
                                            alt="assets/imagesandvectors/legal-areas/legal1.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-12">
                                <div class="row align-items-center g-3">
                                    <div class="col-md-6 p-md-0" data-aos="fade-up" data-aos-duration="500"
                                        data-aos-easing="ease-in-sine">
                                        <img class="Legal-Services-img rounded-1 w-100"
                                            src={img9}
                                            className="img-fluid"
                                            style={{ objectFit: "cover" }}
                                            alt="assets/imagesandvectors/legal-areas/legal6.jpg" />
                                    </div>
                                    <div class="col-md-6" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-sine"
                                        data-aos-anchor-placement="bottom-bottom">
                                        <h1 class="heading10 mt-5 text-center">TOP SERVICES
                                            IN CHENNAI</h1>
                                        <p class="primary-title heading4 text-center mt-4">With decades of experience in Commercial Real Estate, our founders recognized that
                                            commissions shouldn't burden mortgages. They dedicated themselves to liberating the people
                                            of Chennai from the inflated commissions typically paid on each loan.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section id='Gallery'>
                <div className="">
                    <h4 className='heading10 mt-5 text-center' style={{ color: "black" }}> Photo Gallery</h4>
                    <p className='primary-title heading4 text-center mt-4' >Explore our captivating photo gallery showcasing our premier real estate listings.</p>
                    <div className="row mt-5 g-0 imagish">
                        <div className="col-md-3" data-aos="zoom-in" data-aos-duration="700">
                            <img src={img10} alt="" className='img-fluid ' style={{ objectFit: "cover" }} />
                        </div>
                        <div className="col-md-3" data-aos="zoom-in" data-aos-duration="700">
                            <img src={img11} alt="" className='img-fluid' style={{ objectFit: "cover" }} />

                        </div>
                        <div className="col-md-3" data-aos="zoom-in" data-aos-duration="700">
                            <img src={img12} alt="" className='img-fluid' style={{ objectFit: "cover" }} />

                        </div>
                        <div className="col-md-3" data-aos="zoom-in" data-aos-duration="700">
                            <img src={img13} alt="" className='img-fluid' style={{ objectFit: "cover" }} />

                        </div>

                        <div className="col-md-3" data-aos="zoom-in" data-aos-duration="700">
                            <img src={img14} alt="" className='img-fluid' style={{ objectFit: "cover" }} />
                        </div>
                        <div className="col-md-3" data-aos="zoom-in" data-aos-duration="700">
                            <img src={img15} alt="" className='img-fluid' style={{ objectFit: "cover" }} />

                        </div>
                        <div className="col-md-3" data-aos="zoom-in" data-aos-duration="700">
                            <img src={img16} alt="" className='img-fluid' style={{ objectFit: "cover" }} />

                        </div>
                        <div className="col-md-3" data-aos="zoom-in" data-aos-duration="700">
                            <img src={img17} alt="" className='img-fluid' style={{ objectFit: "cover" }} />

                        </div>

                        <div className="col-md-3" data-aos="zoom-in" data-aos-duration="700">
                            <img src={img19} alt="" className='img-fluid' style={{ objectFit: "cover" }} />

                        </div>
                        <div className="col-md-3" data-aos="zoom-in" data-aos-duration="700">
                            <img src={img20} alt="" className='img-fluid' style={{ objectFit: "cover " }} />

                        </div>
                        <div className="col-md-3" data-aos="zoom-in" data-aos-duration="700">
                            <img src={img21} alt="" className='img-fluid' style={{ objectFit: "cover" }} />

                        </div>
                        <div className="col-md-3" data-aos="zoom-in" data-aos-duration="700">
                            <img src={img22} alt="" className='img-fluid' style={{ objectFit: "cover" }} />

                        </div>
                    </div>
                </div>
            </section>

            <section id='Contact'>
                <section class="common-padding" id="location">
                    <div class="container">
                        <div class="text-center">
                            <h4 className='heading10 mt-5 text-center' style={{ color: "black" }}> Maps & Directions</h4>
                            {/* <p className='primary-title heading4 text-center mt-4' >Lorem ipsum dolor sit amet, conse tetur </p> */}
                        </div>
                        <div class="row align-items-center g-5">
                            <div class="col-md-7">
                                <div class="map text-center" data-aos="zoom-in" data-aos-duration="600"
                                    data-aos-anchor-placement="bottom-bottom">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.16339710412!2d80.2605652!3d12.98522505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d5b9b3bfc6f%3A0x6959f97669f90baa!2sThiruvanmiyur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1719557938405!5m2!1sen!2sin"
                                        width="600"
                                        height="450"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div data-aos="fade-up" data-aos-duration="600" data-aos-anchor-placement="bottom-bottom">
                                    <div class="card  border-0 justify-content-center align-items-center align-items-md-center">
                                        <div class="d-inline-block py-3 px-5 shadow-1 text-center col-10">
                                            <h4 class="new-header text-dark mb-2">Visit Us</h4>
                                            <p class="primary-text text-dark">
                                                <br />
                                                No:123 Big cross st,

                                                Chennai - 600113.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <Footer />

            <Scroll />

        </div>

    )
}
