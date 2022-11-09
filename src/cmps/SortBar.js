import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

export const SortBar = () => {

    const [activeMenu, setActiveMenu] = useState(null)
    const [isSticky, setIsSticky] = useState(false)
    const [filterBy, setFilterBy] = useState({
        minPrice: '',
        maxPrice: ''
    })

    let [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true })
        return (() => { window.removeEventListener('scroll', onScroll) })
    }, [])


    const onScroll = () => {
        const pos = window.pageYOffset
        if (pos < 140) {
            setIsSticky(false)
        } else if (pos >= 140) {
            setIsSticky(true)
        }
    }

    const selectMenu = (val) => {
        setActiveMenu(prevActiveMenu => {
            if (prevActiveMenu === val) {
                return null
            }
            return val
        })
    }

    const onChange = ({ target }) => {
        var field = target.name
        const value = (target.type === 'number') ? +target.value : target.value;
        setFilterBy(filterBy => ({ ...filterBy, [field]: value }))
    }

    const onSetFilter = () => {
        if (filterBy.maxPrice != '') {
            if (!searchParams.has('maxPrice')) {
                searchParams.append('maxPrice', filterBy.maxPrice)
            } else if (searchParams.get('maxPrice') != filterBy.maxPrice) {
                searchParams.delete('maxPrice')
                searchParams.append('maxPrice', filterBy.maxPrice)
            }
        }
        if (filterBy.minPrice != '') {
            if (!searchParams.has('minPrice')) {
                searchParams.append('minPrice', filterBy.minPrice)
            } else if (searchParams.get('minPrice') != filterBy.minPrice) {
                searchParams.delete('minPrice')
                searchParams.append('minPrice', filterBy.minPrice)
            }
        }
        navigate({
            pathname: `/explore`,
            search: searchParams.toString()
        })
        setActiveMenu(null)
    }

    return (
        <div className={`sort-bar full flex align-center ${isSticky && 'is-sticky box-shadow'}`}>
            <div className='main-container'>
                <div className="sort-bar-menu">
                    <div className='menu-title budget flex align-center'
                        onClick={() => { selectMenu('budget') }}
                    >
                        <p>Budget</p>
                        <span className='arrow-container'><KeyboardArrowDownIcon fontSize='small' /></span>
                    </div>
                    <div className={`menu-content ${activeMenu === 'budget' && 'active'}`}>
                        <div className='budget-filter flex'>
                            <div className='input-wrapper'>
                                <label>
                                    MIN.
                                    <div className='input-container flex'>
                                        <input
                                            name='minPrice'
                                            type='number'
                                            value={filterBy.minPrice}
                                            min={0}
                                            max={50000}
                                            placeholder='Any'
                                            onChange={(e) => onChange(e)}
                                        >
                                        </input>
                                        <span>$</span>
                                    </div>
                                </label>
                            </div>
                            <div className='input-wrapper'>
                                <label>
                                    MAX.
                                    <div className='input-container flex'>
                                        <input
                                            name='maxPrice'
                                            type='number'
                                            value={filterBy.maxPrice}
                                            min={0}
                                            max={50000}
                                            placeholder='Any'
                                            onChange={(e) => onChange(e)}
                                        >
                                        </input>
                                        <span>$</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className='btns-row flex space-between'>
                            <button className='clear-all'>Clear All</button>
                            <button className='apply' onClick={onSetFilter}>Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}