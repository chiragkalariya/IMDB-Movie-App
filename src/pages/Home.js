import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './home.css'

const Home = () => {
    const [popularMovie, setPopularMovie] = useState([]);
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
        .then(res => res.json())
        .then(data => setPopularMovie(data.results))        
    }, [])
    console.log(popularMovie);
    return (
        <>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
            >
                {
                    popularMovie.map((movie) =>(
                        <div className='movieposter'>
                            <div className="posterimage">
                                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
                            </div>
                            <div className="posterimage_overlay">
                                <h2>{movie.original_title}</h2>
                                <div className="posterimage_runtime">
                                    {movie.release_date}
                                    <span className='rating'>
                                        {movie.vote_average}
                                        <span><i class="fa-solid fa-star" style={{color:"red"}}></i></span>
                                    </span>
                                </div>
                                <div className="posterimage_description">
                                    {movie.overview}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </>
    )
}

export default Home
