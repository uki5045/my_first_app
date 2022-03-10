import React, {useState} from 'react';
import axios from "axios";

const PhotoScreen = () => {

    const [ photos, setPhotos] = useState([])

    const getData = async () => {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/photos")
        setPhotos(data)
    }


    return (
        <div>

           <button onClick={getData}> 데이터 불러오기 </button>
            {photos.map(photo => (
                <div key={photo.id}>
                    <h2>{photo.title}</h2>
                    <img alt="thumbnailUrl" src={photo.thumbnailUrl} />
                </div>
            ))}

        </div>
    );
};

export default PhotoScreen;