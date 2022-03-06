import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Card, Button, Container, Row, Col } from "react-bootstrap"



const MovieScreen = () => {
    const [movies, setMovies] = useState([])

    const getDate = async () => {
        const {data, status } = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")
        console.log(data)
        setMovies(data.results)
    }

    useEffect(() => {
        getDate()
    }, [])


    return (
        <Container>
            <Row>
                {/*<button onClick={getDate}>데이터 블러오기</button>*/}
                {movies.map(movie => (
                    <Col className={"mb-5 m-1"} >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                    {movie.overview.slice(0, 50)} ...
                                </Card.Text>
                                <Button variant="primary" className={"m-1"} >프로필</Button>
                                <Button variant="secondary">후기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default MovieScreen;