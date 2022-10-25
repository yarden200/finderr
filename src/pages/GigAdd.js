import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"

import { onAddGig, getGigById, onEditGig } from '../store/actions/gigAction'


export const GigAdd = () => {

    const { gigId } = useParams()
    const gig = useSelector(state => state.gigModule.currGig)
    const dispatch = useDispatch()

    const [gigToAdd, setGigToAdd] = useState({
        title: 'I will',
        category: '',
        tags: '',
        price: '',
        description: '',
        deliveryIn: '',
        rate: '',
        rateCount: 0,
        reviews: [],
        imgUrls: ''
    })


    useEffect(() => {
        if (gigId) {
            loadGig()
            setGigToAdd(gig)
        }
    }, [])

    const loadGig = () => {
        dispatch(getGigById(gigId))
    }

    const onChange = (ev) => {
        const field = ev.target.name;
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;
        setGigToAdd(prevGigToAdd => ({ ...prevGigToAdd, [field]: value }))
    }

    const onPublishGig = (ev) => {
        ev.preventDefault()
        if (gigToAdd._id) {
            dispatch(onEditGig(gigToAdd))
        } else {
            dispatch(onAddGig(gigToAdd))
        }
        setGigToAdd({
            title: 'I will',
            category: '',
            tags: '',
            price: '',
            description: '',
            deliveryIn: '',
            rate: '',
            rateCount: 0,
            reviews: [],
            imgUrls: ''
        })
    }


    return (
        <div className="gig-add" style={{ marginTop: 40 }}>
            {gig ? <h2>Edit gig</h2> : <h2>Add gig</h2>}
            <form
                style={{ display: 'flex', flexDirection: 'column', width: 300, gap: 15 }} >
                <input
                    name='title'
                    value={gigToAdd.title}
                    type='text'
                    onChange={onChange}
                    style={{ border: '1px solid black' }}
                >
                </input>

                <select name="category" id="ctg-select" onChange={onChange}  >
                    <option value="" hidden>Select Category</option>
                    <option value="graphics-and-design">Graphics & Design</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="writing-and-translation">Writing & Translation</option>
                    <option value="video-and-animation">Video & Animation</option>
                    <option value="music-and-audio">Music & Audio</option>
                    <option value="programming-and-tech">Programming & Tech</option>
                    <option value="data">Data</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="sitemap">Sitemap</option>
                </select>

                <input
                    name="price"
                    type="numeric"
                    value={gigToAdd.price}
                    placeholder="Enter Gig Price"
                    onChange={onChange}
                    style={{ border: '1px solid black' }}
                >
                </input>

                <input
                    name='tags'
                    value={gigToAdd.tags}
                    type='text'
                    placeholder='tags'
                    onChange={onChange}
                    style={{ border: '1px solid black' }}
                >
                </input>

                <button
                    type='submit'
                    style={{ border: '1px solid black', backgroundColor: 'lightgreen' }}
                    onClick={onPublishGig}
                >
                    Add gig
                </button>

            </form>
        </div>
    )
}