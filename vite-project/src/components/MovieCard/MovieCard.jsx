import React from 'react'
import './MovieCard.scss'


const MovieCard = ({ data: { Poster, Title, Year } }) => {

    return (
        <div className='card-item'>
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
        </div>
    )
}

export default MovieCard