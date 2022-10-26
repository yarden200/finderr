import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router'

import { GigList } from '../cmps/GigList'
import { loadGigs } from '../store/actions/gigAction'

const queryString = require('query-string')

export const ExplorePage = () => {
    const parsed = queryString.parse(useLocation().search)

    const { gigs } = useSelector(state => state.gigModule)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(parsed);
        dispatch(loadGigs(parsed));
    }, [])

    return (
        <div className='explore-page'>
            <section className='main-container'>
                <GigList gigs={gigs} />
            </section>
        </div>
    )
}