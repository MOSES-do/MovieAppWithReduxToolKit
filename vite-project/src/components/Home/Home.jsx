import React, { useEffect } from 'react'
import { MovieListing } from '../index'
import { useDispatch } from "react-redux"
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice'

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        let mount = true;

        if (mount) {
            dispatch(fetchAsyncMovies())
            dispatch(fetchAsyncSeries())
        }

        return () => {
            mount = false;
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