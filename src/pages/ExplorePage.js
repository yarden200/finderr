import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router'

import { GigList } from '../cmps/GigList'
import { loadGigs } from '../store/actions/gigAction'

export const ExplorePage = (props) => {


    // const { search } = useLocation()
    // console.log(search);

    const { gigs } = useSelector(state => state.gigModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadGigs());
    }, [])

    return (
        <div className='explore-page'>
            <section className='main-container'>
                <GigList gigs={gigs} />
            </section>
        </div>
    )
}