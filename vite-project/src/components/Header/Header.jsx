import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from "react-router-dom"
import Avatar from 'react-avatar'
import { useDispatch } from "react-redux"
import "./Header.scss"
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice'

const Header = () => {
    const dispatch = useDispatch();
    const [term, setTerm] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();

        if (term === "") return alert("Please enter search term")
        dispatch(fetchAsyncMovies(term))
        dispatch(fetchAsyncSeries(term))

        setTerm("")
    }

    return (
        <div className="header">

            <div className="header-logo">
                <Link to="/"> Movie App</Link>
            </div>

            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input type="text" value={term} placeholder="Search Movies or Shows" onChange={(e) => setTerm(e.target.value)} />
                    <button type="submit"><FaSearch /></button>
                </form>
            </div>

            <div className="header__user-image">
                <Avatar name="Moses Esumei" size="50" textSizeRatio={0.25} round="50%" />
            </div>
        </div>
    )
}

export default Header