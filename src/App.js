// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <h1>asdf</h1>
//     </div>
//   );
// }
//
// export default App;

import React from 'react';


//
const App = () => {

    // 상태, 함수, 변수, 상수

    const name = ""
    const number = 0
     const jinwooks = {
         name : "hanjinwook",
         age : 33,
         address : "inchoen",
         hobby : "programming"
     }

    // array(배열) 데이터
    const movies = [
        {
            title: "Matrix",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg"
        },
        {
            title: "Full Metal Jacket",
            poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
        },
        {
            title: "Oldboy",
            poster: "https://upload.wikimedia.org/wikipedia/en/b/bb/Oldboy_2013_film_poster.jpg"
        },
        {
            title: "Star Wars",
            poster: "https://i.pinimg.com/736x/a1/61/c7/a161c7034917936f8bd53ca65bc6f0d0--star-wars-stuff-art-illustrations.jpg"
        },
        {
            title: "Trainspotting",
            poster: "https://resizing.flixster.com/OUEArjor-MbyCV6GqLU85Hk9jQI=/300x300/v1.bjs1NTQ3OTM7ajsxNzQ2NjsxMjAwOzIwMDA7MTMzMQ"
        }
    ]


    // 브라우저 화면에서 보여지는 부분
    return (
        <div>
            <h1>{jinwooks.name}</h1>
            <span>{jinwooks.address}</span>
            {/*{foodILike.map(food => (*/}
            {/*    <div>*/}
            {/*        <h1>{food.name}</h1>*/}
            {/*        <img src={food.image} alt={food.image} />*/}
            {/*    </div>*/}
            {/*))}*/}
            {movies.map(a => (
                <div>
                    <h1>{a.title}</h1>
                    <img src={a.poster} alt={a.title} />
                </div>
            ))}


        </div>
    );
};

export default App;




// 코드 빌드순서
// 컴퓨터는 0부터 시작
// 1. 위에서 아래로 분석
// 2. =을 기준으로 오른쪽에서 왼쪽으로 치환
// 3. .은 하위 메소드나 데이터를 호출하는 명령어
// 4. [], {}, "", 0 이부분은 데이터 자료형