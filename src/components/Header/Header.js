import React, { useCallback, useEffect, useRef } from 'react'
import './Header.css'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'


const Header = () => {
    const ref = useRef(null)
    const clickListener = useCallback(
        (event) => {
            if (!(ref.current).contains(event.target)) {
                collapseMenu()
            }
        },
        [],
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
                <a href='/' id='cd_header_logo'><img src={logo} alt='logo' /></a>
            </header>
            <nav>
                <span id='cd_header_l' />
                <button id='cd_header_toggle' onClick={toggleMenu} ref={ref}>&#9776; Menu</button>
                <div id='cd_header_links' className='hidden'>
                    <NavLink to='/' exact activeClassName="cd_selected_link">Home</NavLink>
                    <NavLink to='/kurse' exact activeClassName="cd_selected_link">Kursplan</NavLink>
                    <NavLink to='/training' exact activeClassName="cd_selected_link">Training</NavLink>
                    <NavLink to='/gesundheit' exact activeClassName="cd_selected_link">Gesundheit</NavLink>
                    <NavLink to='/rehasport' exact activeClassName="cd_selected_link">Reha-Sport</NavLink>
                    <NavLink to='/wellness' exact activeClassName="cd_selected_link">Wellness</NavLink>
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