import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Hidden } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

export const SortBar = () => {

    const [activeMenu, setActiveMenu] = useState(null)
    const [isSticky, setIsSticky] = useState(false)
    const [filterBy, setFilterBy] = useState({
        minPrice: '',
        maxPrice: '',
        deliveryTime: 4
    })

    let [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true })
        return (() => { window.removeEventListener('scroll', onScroll) })
    }, [])

    useEffect(() => {
        console.log('filterBy changed', filterBy, typeof filterBy.deliveryTime);
    }, [filterBy])


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
        console.log('onChange:', target.value);
        var field = target.name
        const value = (target.type === 'number') ? +target.value : target.value;
        setFilterBy(filterBy => ({ ...filterBy, [field]: value }))
    }

    const onSetFilter = () => {
        if (filterBy.maxPrice !== '') {
            if (!searchParams.has('maxPrice')) {
                searchParams.append('maxPrice', filterBy.maxPrice)
            } else if (searchParams.get('maxPrice') != filterBy.maxPrice) {
                searchParams.delete('maxPrice')
                searchParams.append('maxPrice', filterBy.maxPrice)
            }
        }
        if (filterBy.minPrice !== '') {
            console.log('onSetFilter', filterBy.minPrice);
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

    const onClearFilter = () => {

    }

    return (
        <div className={`sort-bar full flex align-center ${isSticky && 'is-sticky box-shadow'}`}>
            <div className='main-container'>
                <div className="sort-bar-menu flex">
                    <div className='menu-item'>
                        <div className='menu-title budget flex align-center'
                            onClick={() => { selectMenu('budget') }} >
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
                                <button className='clear-all' onClick={onClearFilter}>Clear All</button>
                                <button className='apply' onClick={onSetFilter}>Apply</button>
                            </div>
                        </div>
                    </div>
                    <div className='menu-item'>
                        <div className='menu-title delivery-time flex align-center'
                            onClick={() => { selectMenu('deliveryTime') }}
                        >
                            <p>Delivery Time</p>
                            <span className='arrow-container'><KeyboardArrowDownIcon fontSize='small' /></span>
                        </div>
                        <div className={`menu-content ${activeMenu === 'deliveryTime' && 'active'}`}>
                            <div className='delivery-time-filter'>
                                <div className='radio-list'>
                                    <div className='radio-item-wrapper'>
                                        <label className='flex align-center'>
                                            <input type='radio' name='deliveryTime' value={'1'} onChange={(e) => { onChange(e) }}></input>
                                            <span className={`${filterBy.deliveryTime === '1' && 'checked'}`}></span>
                                            Express 24H
                                        </label>
                                    </div>
                                    <div className='radio-item-wrapper'>
                                        <label className='flex align-center'>
                                            <input type='radio' name='deliveryTime' value={'2'} onChange={(e) => { onChange(e) }}></input>
                                            <span className={`${filterBy.deliveryTime === '2' && 'checked'}`}></span>
                                            Up to 3 days
                                        </label>
                                    </div>
                                    <div className='radio-item-wrapper'>
                                        <label className='flex align-center'>
                                            <input type='radio' name='deliveryTime' value={'3'} onChange={(e) => { onChange(e) }}></input>
                                            <span className={`${filterBy.deliveryTime === '3' && 'checked'}`}></span>
                                            Up to 7 days
                                        </label>
                                    </div>
                                    <div className='radio-item-wrapper'>
                                        <label className='flex align-center'>
                                            <input type='radio' name='deliveryTime' value={'4'} onChange={(e) => { onChange(e) }}></input>
                                            <span className={`${filterBy.deliveryTime === '4' && 'checked'}`}></span>
                                            Anytime
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='btns-row flex space-between'>
                                <button className='clear-all' onClick={onClearFilter}>Clear All</button>
                                <button className='apply' onClick={onSetFilter}>Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}