import React, {useState} from 'react';
import axios from "axios";

const ComScreen = () => {

    const [ comments, setComments ] = useState([])

    const getData = async() => {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/comments")
        setComments(data)
    }



    return (
        <div>
            <button onClick={getData}>데이터 불러오기</button>
            {comments.map(comment => (
                <div>
                    <h3>{comment.name}</h3>
                    <h4>{comment.email}</h4>
                </div>
            ))}
       </div>
    );
};

export default ComScreen;