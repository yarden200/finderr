import React from 'react'

import animatedExplainer from '../assets/imgs/home-carousel/animated-explainer.webp'
import bookCovers from '../assets/imgs/home-carousel/book-covers.webp'
import dataEntry from '../assets/imgs/home-carousel/data-entry.webp'
import illustration from '../assets/imgs/home-carousel/illustration.webp'
import logoDesign from '../assets/imgs/home-carousel/logo-design.webp'
import seo from '../assets/imgs/home-carousel/seo.webp'
import social from '../assets/imgs/home-carousel/social.webp'
import translation from '../assets/imgs/home-carousel/translation.webp'
import voiceover from '../assets/imgs/home-carousel/voiceover.webp'
import wordpress from '../assets/imgs/home-carousel/wordpress.webp'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


export const HomeCarousel = () => {


    return (
        <div className='carousel-wrapper'>
            <div className='main-container'>
                <h2>Popular professional services</h2>
                <div className='carousel-container'>
                    <div className='arrow-container back-arrow flex align-center justify-center'>
                        <ArrowBackIosNewIcon style={{ color: '#62646a' }} />
                    </div>
                    <div className='carousel' style={{ display: 'flex' }}>
                        <div>
                            <img src={logoDesign} />
                        </div>
                        <div>
                            <img src={wordpress} />
                        </div>
                        <div>
                            <img src={voiceover} />
                        </div>
                        <div>
                            <img src={animatedExplainer} />
                        </div>
                        <div>
                            <img src={social} />
                        </div>
                        <div>
                            <img src={seo} />
                        </div>
                        <div>
                            <img src={illustration} />
                        </div>
                        <div>
                            <img src={translation} />
                        </div>
                        <div>
                            <img src={dataEntry} />
                        </div>
                        <div>
                            <img src={bookCovers} />
                        </div>
                    </div>
                    <div className='arrow-container forward-arrow flex align-center justify-center'>
                        <ArrowBackIosNewIcon style={{ color: '#62646a' }} />
                    </div>
                </div>
            </div>
        </div>

    )

}