import React from 'react';
import logo from './logo.svg';
import './App.css';

// =================================
// 2-6
// 型指定（アノテーション）
// =================================
let username: string = "hello";
console.log(username);
let dummyNum: number = 1;
console.log(dummyNum);
let bool: boolean = true;
console.log(bool);


let array1: number[] = [1,2,3];
console.log(array1);
let array2: (number | string)[] = [1,2,3, "hello"];
console.log(array2);

interface NAME {
  first: string;
  last: string;
}

let nameObj: NAME = {first:"Yamada", last:"Taro"}
console.log(nameObj);

const func1 = (x: number, y: number): number => {
  return x + y;
}
console.log(func1(1, 2));

// =================================
// 2-6
// Intersection Types
// https://typescriptbook.jp/reference/values-types-variables/intersection
// =================================
type PROFILE = {
  age: number;
  city: string;
}

type LOGIN = {
  username: string;
  password: string;
}

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
}
console.log(userA);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
