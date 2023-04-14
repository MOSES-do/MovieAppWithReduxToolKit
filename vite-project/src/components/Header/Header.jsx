import React from 'react'
import { Link } from "react-router-dom"
import Avatar from 'react-avatar'
import "./Header.scss"

const Header = () => {

    return (
        <div className="header">
            <Link to="/">
                <div className="header-logo">Movie App</div>
            </Link>
            <div className="header__user-image">
                <Avatar name="Moses Esumei" size="50" textSizeRatio={0.25} round="50%" />
            </div>
        </div>
    )
}

export default Header