import React from 'react'
import { Link } from 'react-router-dom'
import './MovieCard.scss'


const MovieCard = ({ data: { Poster, Title, Year, imdbID } }) => {

    return (
        <div className='card-item'>
            <Link to={`/movie/${imdbID}`}>
                <div className="card-item--inner">
                    <div className="card-item--inner_top">
                        <img src={Poster} alt={Title} />
                    </div>

                    <div className="card-bottom">
                        <div className="card-bottom-info">
                            <h4>{Title}</h4>
                            <p>{Year}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard