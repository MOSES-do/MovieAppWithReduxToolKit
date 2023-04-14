import React, { useEffect } from 'react'
import { MovieListing } from '../index'
import { useDispatch } from "react-redux"
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice'
import './Home.scss'


const Home = () => {

    const dispatch = useDispatch();

    const movieQuery = "Harry";
    const seriresQuery = "Friends"

    useEffect(() => {

        dispatch(fetchAsyncMovies(movieQuery))
        dispatch(fetchAsyncSeries(seriresQuery))


        return () => {
        }
    }, [dispatch])


    return (
        <div >
            <div className="banner-img">Home</div>
            <MovieListing />
        </div>
    )
}

export default Home