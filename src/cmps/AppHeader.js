import React, { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"
import { Modal, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SearchInput } from './SearchInput';

export const AppHeader = () => {
    const [isHeaderScrolled, setIsHeaderScrolled] = useState(false)
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isHome, setIsHome] = useState('')
    const location = useLocation()

    const categories = [
        'Graphics & Design',
        'Digital Marketing',
        'Writing & Translation',
        'Video & Animation',
        'Music & Audio'
    ]

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true })
        return (() => { window.removeEventListener('scroll', onScroll) })
    }, [])

    useEffect(() => {
        if (location.pathname === '/') {
            setIsHome(true)
        } else {
            setIsHome(false)
        }
    }, [location.pathname])

    const onScroll = () => {
        const pos = window.pageYOffset
        if (pos === 0) {
            setIsCategoriesOpen(false)
            setIsHeaderScrolled(false)
        } else if (pos > 0 && pos < 135) {
            setIsHeaderScrolled(true)
            setIsCategoriesOpen(false)
        } else {
            setIsHeaderScrolled(true)
            setIsCategoriesOpen(true)
        }
    }

    const onCloseModal = () => {
        setIsModalOpen(false)
    }

    const onOpenModal = () => {
        setIsModalOpen(true)
    }

    return (
        <>
            <header className={`app-header ${isHome && 'is-home'}
                    ${isHeaderScrolled && 'header-scrolled'}`}
            >
                <Modal
                    open={isModalOpen}
                    onClose={onCloseModal}
                >
                    <div style={styles.modal}>
                        <div style={styles.modalLayout}>
                            <button style={styles.joinBtn}>Join Finderr</button>
                            <p style={styles.signIn}>Sign In</p>
                            <Accordion style={styles.modalSelect}>
                                <AccordionSummary
                                    style={styles.modalSelectInner}
                                    expandIcon={<ExpandMoreIcon />}
                                >
                                    <div>Browse Categories</div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul>
                                        {categories.map(category => {
                                            return (
                                                <li key={category}>{category}</li>
                                            )
                                        })}
                                    </ul>
                                </AccordionDetails>
                            </Accordion>
                            <p>Explore</p>
                        </div>
                    </div>
                </Modal >
                <div className='main-container'>
                    <div className='top-header flex align-center'>
                        <button className='modal-btn' onClick={onOpenModal}>
                            <MenuIcon fontSize='large' />
                        </button>
                        <Link to="/" className='logo flex'>
                            <h2 style={{ color: isHeaderScrolled && '#393939' }}>Finderr</h2>
                            <span>.</span>
                        </Link>
                        {isHome && isCategoriesOpen &&
                            <SearchInput isHero={false} />}
                        {!isHome &&
                            <SearchInput isHero={false} />}
                        <nav className='nav flex'>
                            <ul className='flex align-center'>
                                <li className='nol'><Link to="/explore">Explore</Link ></li>
                                <li className='nol' style={{ width: 160 }}><Link to="/start_selling">Become a Seller</Link></li>
                                <li className='nal' style={{ width: 90 }}><p>Sign in</p></li>
                                <li className='join-btn'><p>Join</p></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header >
            <div className={`categories-container main-container 
             ${isHome ? 'is-home' : ''}
             ${isCategoriesOpen && isHome && 'show-categories'} 
             ${!isHome && 'show-categories'}
             ${!isHome && isHeaderScrolled && 'relative'} `}
            >
                <ul className='categories flex align-center'>
                    <li>Graphics & Design</li>
                    <li>Digital Marketing</li>
                    <li>Writing & Translation</li>
                    <li>Video & Animation</li>
                    <li>Music & Audio</li>
                </ul>
                <div className='try'></div>
            </div>
        </>
    )
}

const styles = {
    modal: {
        backgroundColor: 'white', height: '100%', width: 270
    },
    modalLayout: {
        width: 260,
        marginLeft: 15
    },
    joinBtn: {
        marginBottom: 28, marginTop: 20, backgroundColor: '#1dbf73', border: '1px solid transparent', borderRadius: 4, fontSize: 16, fontWeight: 500, lineHeight: '100%', padding: '12px 22px', color: 'white'
    },
    signIn: {
        marginBottom: 8, color: '#95979d'
    },
    modalSelect: {
        boxShadow: 'none', marginBottom: 8, maxWidth: 255
    },
    modalSelectInner: {
        padding: 0, paddingRight: 15, color: '#95979d'
    },
}