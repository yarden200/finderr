import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


export const SearchInput = ({ isHero }) => {

    return (
        <div className='input-container flex'>
            <div className='input-wrapper'>
                {isHero && <span className='flex align-center justify-center'><SearchOutlinedIcon /></span>}
                <input
                    placeholder={isHero ? 'Try "building mobile app"' : 'What service are you looking for today?'}
                ></input>
            </div>
            <button className='flex align-center justify-center'>
                {isHero ? 'serach' : <SearchOutlinedIcon />}
            </button>
        </div>
    )
}