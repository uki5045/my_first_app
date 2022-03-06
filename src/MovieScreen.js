import React, {useState} from 'react';
import axios from "axios";



const MovieScreen = () => {
    const [movies, setMovies] = useState([])

    const getDate = async () => {
        const {data, status } = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")
        console.log(data)
        setMovies(data.results)
    }
    return (
        <div>
            <button onClick={getDate}>데이터 블러오기</button>
            {movies.map(movie => (
                <div key={movie.id}>
                    <h1>{movie.original_title}</h1>
                </div>
            ))}
        </div>
    );
};

export default MovieScreen;