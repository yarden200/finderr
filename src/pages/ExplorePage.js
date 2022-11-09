import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router'

import { GigList } from '../cmps/GigList'
import { SortBar } from '../cmps/SortBar'
import { loadGigs } from '../store/actions/gigAction'

const queryString = require('query-string')

export const ExplorePage = () => {
    const location = useLocation()
    const parsed = queryString.parse(location.search)

    const { gigs } = useSelector(state => state.gigModule)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('use effect run', parsed);
        dispatch(loadGigs(parsed));
    }, [location])

    return (
        <div className='explore-page'>
            <section className='main-container'>
                <SortBar />
                <GigList gigs={gigs} />
                <div style={{ height: 400, background: 'red' }}>DEVELOMPNET</div>
            </section>
        </div>
    )
}