import React, { useEffect } from 'react'
import { MovieListing } from '../index'
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux"
import { addMovies } from '../../features/movies/movieSlice'

const Home = () => {
    const movieTerm = 'Harry'
    const dispatch = useDispatch();
    let mount = true;
    useEffect(() => {
        if (mount) {
            const fetchMovies = async () => {
                const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieTerm}&type=movie`)
                    .catch((err) => {
                        console.log("Err :", err)
                    });
                dispatch(addMovies(response.data));
            }
            fetchMovies();
        }

        return () => {
            mount = false;
        }
    }, [])

    return (
        <div >
            <div className="banner-img">Home</div>
            <MovieListing />
        </div>
    )
}

export default Home