import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

export const SellerPage = () => {

    // useEffect(() => {
    //     console.log(gigToAdd);
    // }, [gigToAdd])

    return (
        <div className="seller-page main-container" style={{ marginTop: 40 }}>
            <h1>Seller Page</h1>
            <Link to="/gig/add/">
            <button>Add Gig</button>
        </Link>
        </div >
    )
}