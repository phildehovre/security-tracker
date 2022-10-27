import React from 'react'
import './Nav.scss'
import SignInButton from './SignInButton'

function Nav() {
    return (
        <div className='nav'>
            <div className='logo'>MyFi</div>
            <ul>
                <li>Home</li>
                <li>Watchlist</li>
                <SignInButton />
            </ul>
        </div>
    )
}

export default Nav