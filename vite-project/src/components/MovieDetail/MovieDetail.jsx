import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchAsyncMovieOrSeriesDetail, removeSelectedMovieOrShow } from '../../features/movies/movieSlice'
import './MovieDetail.scss'
import { FaRegStar } from 'react-icons/fa'


const MovieDetail = () => {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const { selectedMovieOrShow } = useSelector((state) => state.movies)
    console.log(selectedMovieOrShow)

    useEffect(() => {

        dispatch(fetchAsyncMovieOrSeriesDetail(imdbID))


        return () => {
            dispatch(removeSelectedMovieOrShow())
        }
    }, [dispatch, imdbID])


    const video = selectedMovieOrShow.imdbID === imdbID;
    // console.log(video);


    const SingleVideoView = ({ data }) => (

        <div className='movie-section'>
            {Object.keys(data).length === 0 ?
                (<div>...Loading</div>)
                :
                (
                    <>
                        <div className="section-left">
                            <div className="movie-title">
                                <h6>{data.Title}</h6>
                                <div className="movie-rating">
                                    <span>
                                        IMDB Rating <FaRegStar />: {data.imdbRating}
                                    </span>
                                    <span>
                                        IMDB Votes <i className="fa fa-thumbs-up"></i>: {data.imdbVotes}
                                    </span>
                                    <span>
                                        Runtime <i className="fa fa-film"></i>: {data.Runtime}
                                    </span>
                                    <span>
                                        Year <i className="fa fa-scalendartar"></i>: {data.Year}
                                    </span>
                                </div>

                                <div className="movie-plot">
                                    {data.Plot}
                                </div>
                                <div className="movie-info">
                                    <div>
                                        <span>Director</span>
                                        <span>{data.Director}</span>
                                    </div>
                                    <div>
                                        <span>Stars</span>
                                        <span>{data.Actors}</span>
                                    </div>
                                    <div>
                                        <span>Genres</span>
                                        <span>{data.Genre}</span>
                                    </div>
                                    <div>
                                        <span>Languages</span>
                                        <span>{data.Language}</span>
                                    </div>
                                    <div>
                                        <span>Awards</span>
                                        <span>{data.Award}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-right">
                            <img src={data.Poster} alt={data.Title} />
                        </div>
                    </>
                )}
        </div>
    )


    return (
        <div>
            {
                video && selectedMovieOrShow.Type === "movie" ? <SingleVideoView data={selectedMovieOrShow} /> :

                    selectedMovieOrShow.Type === "series" ? <SingleVideoView data={selectedMovieOrShow} /> : null
            }
        </div>
    )
}

export default MovieDetail