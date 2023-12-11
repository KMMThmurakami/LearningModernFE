import React from "react";
import logo from "./logo.svg";
import "./App.css";

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

let array1: number[] = [1, 2, 3];
console.log(array1);
let array2: (number | string)[] = [1, 2, 3, "hello"];
console.log(array2);

interface NAME {
  first: string;
  last: string;
}

let nameObj: NAME = { first: "Yamada", last: "Taro" };
console.log(nameObj);

const func1 = (x: number, y: number): number => {
  return x + y;
};
console.log(func1(1, 2));

// =================================
// 2-7
// Intersection Types
// https://typescriptbook.jp/reference/values-types-variables/intersection
// =================================
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
};
console.log(userA);

// =================================
// 2-8
// Union Types
// https://typescriptbook.jp/reference/values-types-variables/union
// https://typescriptbook.jp/reference/values-types-variables/discriminated-union
// =================================
// boolean | number のどちらかだけを受け付ける
let value: boolean | number;
value = true;
value = 10;
console.log(value);

// number | number のどちらかだけを含んだ配列だけを受け付ける
let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "string"];
console.log(arrayUni);

// 判別可能なユニオン型
// 判別可能なユニオン型は次の特徴を持ったユニオン型です。

// 1.オブジェクトの型で構成されたユニオン型
// 2.各オブジェクトの型を判別するためのプロパティ(しるし)を持つ
//    このプロパティのことをディスクリミネータ(discriminator)と呼ぶ
// 3.ディスクリミネータの型はリテラル型などであること
// 4.ディスクリミネータさえ有れば、各オブジェクトの型は固有のプロパティを持ってもよい

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

// ※型エイリアス
// https://typescriptbook.jp/reference/values-types-variables/type-alias

// 型エイリアスの使用例
// プリミティブ型
type Str = string;
// リテラル型
type OK = 200;
// 配列型
type Numbers = number[];
// オブジェクト型
type UserObject = { id: number; name: string };
// ユニオン型
type NumberOrNull = number | null;
// 関数型
type CallbackFunction = (value: string) => boolean;

// =================================
// 2-9
// Literal Types
// https://typescriptbook.jp/reference/values-types-variables/literal-types
// =================================
// リテラル型はユニオン型と組み合わせることが多い
// "Facebook" | "Google" | "Amazon" のどれかしか入れられなくなる
let company: "Facebook" | "Google" | "Amazon";
company = "Amazon";
console.log(company);

// 256 | 512 のどれかしか入れられなくなる
let memory: 256 | 512;
memory = 256;
console.log(memory);

// プリミティブ型は自動ボックス化によりラッパーオブジェクトに変換される
// https://typescriptbook.jp/reference/values-types-variables/boxing

// interfaceとtypeの違い
// https://typescriptbook.jp/reference/object-oriented/interface/interface-vs-type-alias

// インターフェースは、インターフェースや型エイリアスを継承できる

interface Animal {
  name: string;
}
type Creature = {
  dna: string;
};
interface Dog extends Animal, Creature {
  dogType: string;
}

let dog1: Dog = {
  name: "inu",
  dna: "normal",
  dogType: "normal",
};

// 型エイリアスは継承はできない代わりに交差型(&)を使用することで継承と似たことを実現できる
type Animal2 = {
  name: string;
};
type Creature2 = {
  dna: string;
};
type Dog2 = Animal2 &
  Creature2 & {
    dogType: string;
  };

let dog2: Dog2 = {
  name: "inu",
  dna: "normal",
  dogType: "normal",
};

// プロパティのオーバーライド
// インターフェースで継承の際にプロパティをオーバーライドすると、継承元のプロパティの型が上書きされる
// オーバーライドするためには元の型に代入できるものでなければならない

// 一方、型エイリアスの場合は上書きにはならず、フィールドの型の交差型が計算される
// また、交差型で矛盾があって計算できない場合もコンパイルエラーにはならない
// ※交差型を作れない場合はコンパイルエラーではなくnever型になる

// 同名のものを宣言
// 型エイリアスは同名のものを複数定義できず、コンパイルエラーになる
// インターフェースの場合は、同名のインターフェースを定義でき、同名の定義をすべて合成したインターフェースになる
// ただし、同名のフィールドだが、型の定義が違っている場合はコンパイルエラーになる

// =================================
// 2-10
// typeof型演算子
// https://typescriptbook.jp/reference/type-reuse/typeof-type-operator

// JavaScriptのtypeof演算子
// https://typescriptbook.jp/reference/values-types-variables/typeof-operator
// =================================
// TypeScriptのtypeofは変数から型を抽出する型演算子
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "str";

let animal = {
  cat: "small cat",
};

let newanimal: typeof animal = {
  cat: "big cat",
};

// =================================

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
