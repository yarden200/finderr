import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchInput } from './SearchInput'

export const Hero = () => {

    const pTags = [
        'Website Design',
        'WordPress',
        'Logo Design',
        'NFT Art'
    ]

    const [activeBg, setActiveBg] = useState(1)

    useEffect(() => {
        const interval = setInterval(changeBackground, 1000 * 5)
        return (() => { clearInterval(interval) })
    }, [])

    const changeBackground = () => {
        setActiveBg(prevActiveBg => {
            if (prevActiveBg === null || prevActiveBg === 4) {
                return 1
            } else {
                return prevActiveBg + 1
            }
        })
    }

    return (
        <div className='hero-container main-container'>
            <div className='hero-backgrounds full'>
                <div className={`hero-background hero-1 ${activeBg === 1 && 'active'}`}>
                    <div className='seller-name main-container flex'>
                        <p className='flex'>abcd, <b>web developer</b></p>
                    </div>
                </div>
                <div className={`hero-background hero-2 ${activeBg === 2 && 'active'}`}>
                    <div className='seller-name main-container flex'>
                        <p className='flex'>123, <b>web developer</b></p>
                    </div>
                </div>
                <div className={`hero-background hero-3 ${activeBg === 3 && 'active'}`}>
                    <div className='seller-name main-container flex'>
                        <p className='flex'>jona, <b>web developer</b></p>
                    </div>
                </div>
                <div className={`hero-background hero-4 ${activeBg === 4 && 'active'}`}>
                    <div className='seller-name main-container flex'>
                        <p className='flex'>zoe, <b>web developer</b></p>
                    </div>
                </div>
                {/* <div className={`hero-background hero-${activeBg} active`}></div> */}
            </div>
            <div className='hero-content flex align-center'>
                <div className='hero-header'>
                    <h3>
                        Find the perfect <span>freelance</span> services for your business
                    </h3>
                    <SearchInput isHero={true} />
                    <div className='popular flex align-center'>
                        <p>Popular:</p>
                        <ul className='flex'>
                            {pTags.map(tag => <li key={tag}>
                                <Link to={`/explore?${tag}`}>
                                    {tag}
                                </Link>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
} 