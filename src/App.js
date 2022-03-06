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

    const foodILike = [
        {
            id: 1,
            name: "Kimchi",
            image:
                "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
        },
        {
            id: 2,
            name: "Samgyeopsal",
            image:
                "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
        },
        {
            id: 3,
            name: "Bibimbap",
            image:
                "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
        },
        {
            id: 4,
            name: "Doncasu",
            image:
                "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
        },
        {
            id: 5,
            name: "Kimbap",
            image:
                "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
        }
    ]; // array(배열) 데이터


    // 브라우저 화면에서 보여지는 부분
    return (
        <div>
            <h1>{jinwooks.name}</h1>
            <span>{jinwooks.address}</span>
            {foodILike.map(food => (
                <div>
                <h1>{food.name}</h1>
                <img src={food.image} alt={food.image} />
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