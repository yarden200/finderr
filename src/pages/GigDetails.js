import { useCallback, useEffect } from "react"
import { useLocation, useNavigate, useParams } from "react-router"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { getGigById, removeGig } from '../store/actions/gigAction'


export const GigDetails = () => {
    const { gigId } = useParams()
    const gig = useSelector(state => state.gigModule.currGig)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        loadGig()
        return (() => {
            dispatch(getGigById(null))
        })
    }, [])

    const loadGig = () => {
        dispatch(getGigById(gigId))
    }

    const onRemoveGig = async (gigId) => {
        dispatch(removeGig(gigId))
        navigate('/')
    }

    return (
        <div style={{ marginTop: 40 }}>
            <h1>Details</h1>
            {!gig && <h1>Loading...</h1>}
            {gig && <div>
                <h3>{gig._id}</h3>
                <h1>{gig.title}</h1>
                <h3>price:{gig.price}</h3>
                <button onClick={() => onRemoveGig(gigId)}
                    style={{ width: 50, height: 35, background: 'green', padding: 5, margin: 3, color: 'whitesmoke', }}>
                    Delete
                </button>
                <Link to={`/gig/add/${gig._id}`}>
                    <button style={{ width: 50, height: 35, background: 'green', padding: 5, margin: 3, color: 'whitesmoke', }}>
                        Edit
                    </button>
                </Link>
            </div>}
        </div>
    )
}