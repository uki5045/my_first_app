import React, {useState} from 'react';
import axios from "axios";

const Comments = () => {

    const [comments, setComment] = useState([])

    const getData = async () => {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/comments")
        setComment(data)
    }

    return (
        <div>
            <button onClick={getData}>데이터 불러오</button>
            {comments.map(comment => (
                <div key={comment.id}>
                    <h3>{comment.email}</h3>
                    <h3>{comment.body}</h3>
                </div>
            ))}
        </div>
    );
};

export default Comments;
