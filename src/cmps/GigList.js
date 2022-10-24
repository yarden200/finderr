import React from 'react'
import { GigPreview } from './GigPreview'

export const GigList = ({ gigs }) => {
    return (
        <section className="gig-list card-grid">
            {gigs.map(gig => <GigPreview key={gig._id}
                gig={gig}
            />)}
        </section>
    )
}