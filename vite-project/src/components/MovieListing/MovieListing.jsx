import React from 'react'
import Slider from "react-slick";
import { MovieCard } from "../index"
import { useSelector } from "react-redux"
import './MovieListing.scss'
import { settings } from "../../common/settings"


const MovieListing = () => {

    const { movies, series, loading, error } = useSelector((state) => state.movies)

    // console.log(series);

    let renderMovies = ""

    if (loading) {
        renderMovies = <div className="no-result" >Loading...</div>
    } else if (!loading && error) {
        renderMovies = <div>Error: {error}</div>
    } else if (!loading && movies.Response === 'True') {
        renderMovies = movies.Search.map((movie, index) => (
            <MovieCard key={index} data={movie} />
        ))
    } else if (!loading && movies.Response === 'False') {
        renderMovies = <div className="no-result" >Search query not found</div>
    }


    let renderSeries = ""
    if (loading) {
        renderSeries = <div className="no-result" >Loading...</div>
    }
    else if (!loading && series.Response === 'True') {
        renderSeries = series.Search.map((movie, index) => (
            <MovieCard key={index} data={movie} />
        ))
    } else if (!loading && series.Response === 'False') {
        renderSeries = <div className="no-result">Search query not found</div>
    }

    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    <Slider {...settings}>{renderMovies}</Slider>
                </div>
            </div>

            <div className="show-list">
                <h2>Series</h2>
                <div className="movie-container">
                    <Slider {...settings}>{renderSeries}</Slider>
                </div>
            </div>
        </div>
    )
}

export default MovieListing