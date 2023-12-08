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

// =================================
// 2-7
// Union Types
// https://typescriptbook.jp/reference/values-types-variables/union
// https://typescriptbook.jp/reference/values-types-variables/discriminated-union
// =================================
let value: boolean | number;
value = true;
value = 10;
console.log(value);

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "string"];
console.log(arrayUni);

type UploadStatus = InProgress | Success | Failure;
type InProgress = { type: "InProgress"; progress: number };
type Success = { type: "Success" };
type Failure = { type: "Failure"; error: Error };

function printStatus(status: UploadStatus) {
  if (status.type === "InProgress") {
    console.log(`アップロード中:${status.progress}%`);
  } else if (status.type === "Success") {
    console.log("アップロード成功", status);
  } else if (status.type === "Failure") {
    console.log(`アップロード失敗:${status.error.message}`);
  } else {
    console.log("不正なステータス: ", status);
  }
}

// 使用例
const successStatus: UploadStatus = { type: "Success" };
printStatus(successStatus);

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
