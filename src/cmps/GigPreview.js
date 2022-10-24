import React from 'react'
import { Link } from "react-router-dom";

import gig1 from '../assets/imgs/gigs/gig1.webp'
import userImg from '../assets/imgs/dummy-user-img.png'
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const GigPreview = ({ gig }) => {
    return (
        <div className='gig-preview'>
            <Link to={`/gig_details/${gig._id}`}>
                <div className='gig-img'>
                    <img src={gig1} />
                </div>
                <div className='seller-info flex align-center'>
                    <div className='seller-img'>
                        <img src={userImg} />
                    </div>
                    <div className='seller-details'>
                        <p className='seller-name'>{gig.seller.fullname}</p>
                        {gig.seller.sellerLevel && <p className='seller-level'>{`Level ${gig.seller.sellerLevel} Seller`}</p>}
                    </div>
                </div>
                <h3>
                    {gig.title}
                </h3>
                <div className='content-info'>
                    <p className='flex align-center'>
                        <StarIcon />
                        <span className='rate'>{gig.rate}</span>
                        <span className='rate-count'>{`(${gig.rateCount})`}</span>
                    </p>
                </div>
                <footer className='flex space-between align-center'>
                    <span><FavoriteIcon /></span>
                    <div className='gig-price flex column justify-center'>
                        <span className='starting-at'>Starting At</span>
                        <span className='price'>{`$ ${gig.price}`}</span>
                    </div>
                </footer>
            </Link>
        </div>
    )
}