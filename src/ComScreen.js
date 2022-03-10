import React, {useEffect, useState} from 'react';
import axios from "axios";

const ComScreen = () => {

    const [ comments, setComments ] = useState([])

    const getData = async () => {
       const { data } = await axios.get("https://jsonplaceholder.typicode.com/comments")
        setComments(data)

    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <button onClick={getData}>데이터 불러오기</button>
            {comments.map(comment => (
                <div key={comment.id}>
                    <h4>{comment.name}</h4>
                </div>
            ))}
        </div>
    );
};

export default ComScreen;