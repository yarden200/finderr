import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router';


export const SearchInput = ({ isHero }) => {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const onChange = (ev) => {
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;
        setQuery(value)
    }

    const onSubmit = (ev) => {
        ev.preventDefault()
        navigate(`/explore?query=${query}`)
    }

    return (
        <form className='input-container flex'
            onSubmit={(ev) => onSubmit(ev)}>
            <div className='input-wrapper'>
                {isHero && <span className='flex align-center justify-center'><SearchOutlinedIcon /></span>}
                <input
                    onChange={onChange}
                    placeholder={isHero ? 'Try "building mobile app"' : 'What service are you looking for today?'}
                >
                </input>
            </div>
            <button className='flex align-center justify-center'

            >
                {isHero ? 'serach' : <SearchOutlinedIcon />}
            </button>
        </form>
    )
}