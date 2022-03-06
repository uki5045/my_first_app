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
import {posts} from "./posts";


//
const App = () => {

    // 상태, 함수, 변수, 상수

    // 브라우저 화면에서 보여지는 부분
    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <h2>{post.body}</h2>
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