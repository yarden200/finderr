import React, { useEffect } from 'react'

import { Hero } from '../cmps/Hero'
import { TrustedBar } from '../cmps/TrustedBar'
import { HomeCarousel } from '../cmps/HomeCarousel'
import sellingImg from '../assets/imgs/selling.webp'

import programming from '../assets/imgs/home-icons/programming.svg'
import graphics from '../assets/imgs/home-icons/graphics-design.svg'
import business from '../assets/imgs/home-icons/business.jpg'
import data from '../assets/imgs/home-icons/data.jpg'
import digital from '../assets/imgs/home-icons/digital.jpg'
import lifestyle from '../assets/imgs/home-icons/lifestyle.jpg'
import music from '../assets/imgs/home-icons/music.jpg'
import video from '../assets/imgs/home-icons/video.jpg'
import writing from '../assets/imgs/home-icons/writing.jpg'

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])

    return (
        <div className='home-page'>
            <Hero />
            <TrustedBar />
            <HomeCarousel />
            <div className='selling-container main-container'>
                <div className='selling-content flex'>
                    <div className='selling-txt'>
                        <h2>A whole world of freelance talent at your fingertips</h2>
                        <ul>
                            <li>
                                <h6 className='flex'>
                                    <span><CheckCircleOutlineIcon /></span>The best for every budget
                                </h6>
                                <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                            </li>
                            <li>
                                <h6 className='flex'>
                                    <span><CheckCircleOutlineIcon /></span>Quality work done quickly
                                </h6>
                                <p>Find the right freelancer to begin working on your project within minutes.</p>
                            </li>
                            <li>
                                <h6 className='flex'>
                                    <span><CheckCircleOutlineIcon /></span>Protected payments, every time
                                </h6>
                                <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
                            </li>
                            <li>
                                <h6 className='flex'>
                                    <span><CheckCircleOutlineIcon /></span>24/7 support
                                </h6>
                                <p>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
                            </li>
                        </ul>
                    </div>
                    <div className='selling-img-container flex'>
                        <img src={sellingImg} />
                    </div>
                </div>
            </div>
            <div className="explore-marketplace-container">

                <div className='explore-marketplace main-container'>
                    <h2>Explore the marketplace</h2>
                    <div className="explore-icons flex">
                        <div className="icon flex column align-center">
                            <img src={graphics} />
                            <h3>Graphics & Design</h3>
                        </div>
                        <div className="icon flex column align-center">
                            <img src={digital} />
                            <h3>Digital Marketing</h3>
                        </div>
                        <div className="icon flex column align-center">
                            <img src={writing} />
                            <h3>Writing & Translation</h3>
                        </div>
                        <div className="icon flex column align-center">
                            <img src={video} />
                            <h3>Video & Animation</h3>
                        </div>
                        <div className="icon flex column align-center">
                            <img src={music} />
                            <h3>Music & Audio</h3>
                        </div>
                        <div className="icon flex column align-center">
                            <img src={programming} alt="8" />
                            <h3>Programming</h3>
                        </div>
                        <div className="icon flex column align-center">
                            <img src={business} />
                            <h3>Business</h3>
                        </div>
                        <div className="icon flex column align-center">
                            <img src={lifestyle} alt="8" />
                            <h3>Lifestyle</h3>
                        </div>
                        <div className="icon flex column align-center">
                            <img src={data} alt="9" />
                            <h3 >Data</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

