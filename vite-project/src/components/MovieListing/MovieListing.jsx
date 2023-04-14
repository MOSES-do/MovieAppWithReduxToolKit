import React from 'react'
import { MovieCard } from "../index"
import { useSelector } from "react-redux"
import './MovieListing.scss'


const MovieListing = () => {
    const { movies, series, loading, error } = useSelector((state) => state.movies)
    // console.log(series);

    const MovieView = () => {
        if (loading) {
            return <div>Loading...</div>
        } else if (!loading & error) {
            return <div>Error: {error}</div>
        } else if (!loading && movies.Response === 'True') {
            return movies.Search.map((movie, index) => (
                <MovieCard key={index} data={movie} />
            ))
        }
    }

    const SeriesView = () => {
        if (!loading && series.Response === 'True') {
            return series.Search.map((movie, index) => (
                <MovieCard key={index} data={movie} />
            ))
        }
    }

    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">{<MovieView />}</div>
            </div>

            <div className="show-list">
                <h2>Series</h2>
                <div className="movie-container">{<SeriesView />}</div>
            </div>
        </div>
    )
}

export default MovieListing