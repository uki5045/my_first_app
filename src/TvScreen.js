import React, {useState} from 'react';
import axios from "axios";

const TvScreen = () => {
    //1
    const [tvs, setTv] = useState([])

    // 네트워크 2
    const getData = async () => {
        const { data } = await axios.get("https://api.themoviedb.org/3/tv/on_the_air?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")

        setTv(data.results)

    }

    return (
        <div>
            <button onClick={getData}>데이터 불러오기</button>
            {tvs.map(tv => (
                <div key={tv.id}>
                    <h1>{tv.original_name}</h1>
                    <h4>{tv.overview}</h4>
                </div>
            ))}
        </div>
    );
};

export default TvScreen;