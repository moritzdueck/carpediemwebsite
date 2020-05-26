import React, { useCallback, useEffect, useRef } from 'react'
import './Header.css'
import logo from '../../assets/logo.svg'

const Header = () => {
    const ref = useRef(null)
    const clickListener = useCallback(
        (event) => {
            if (!(ref.current).contains(event.target)) {
                collapseMenu()
            }
        },
        [ref],
    )
    useEffect(() => {
        document.addEventListener('click', clickListener)
        return () => {
            document.removeEventListener('click', clickListener)
        }
    }, [clickListener])

    return (
        <React.Fragment>
            <header id='cd_header'>
                <img src={logo} alt='logo' id='cd_header_logo' />
            </header>
            <nav ref={ref}>
                <span id='cd_header_l' />
                <button id='cd_header_toggle' onClick={toggleMenu}>&#9776; Menu</button>
                <div id='cd_header_links' className='hidden'>
                    <a href='#cd_header'>Home</a>
                    <a href='#cd_header'>Kurse</a>
                    <a href='#cd_header'>Gesundheit</a>
                    <a href='#cd_header'>Training</a>
                    <a href='#cd_header'>Wellness</a>
                    <a href='#cd_header'>Reha-Sport</a>
                </div>
                <div id='cd_header_r'>
                    <div id='cd_header_color0' />
                    <div id='cd_header_color1' />
                    <div id='cd_header_color2' />
                    <div id='cd_header_color3' />
                    <div id='cd_header_color4' />
                </div>
            </nav>
        </React.Fragment>
    );
}

function toggleMenu() {
    document.getElementById("cd_header_links").classList.toggle('hidden');
}
function collapseMenu() {
    document.getElementById("cd_header_links").classList.add('hidden')
}

export default Header;