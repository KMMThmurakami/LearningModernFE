## 2023/12/01

とりあえずリポジトリを作成した。
本格的な学習はこれから

## 2023/12/05

---

udemy
【Discord クローン開発】React/Redux/Typescript/Firebase で作るアプリ開発実践講座

---

これをやってみようと思ったが、そもそも TypeScript の理解が浅い部分があるため、
まずは TypeScript を学ぶ所から始めようと思う
（JavaScript もまだ学ぶことはたくさんあるが一旦次に進む）

---

udemy
最速で学ぶ TypeScript

---

まずこれからやってみる
レビューはまちまちだが TypeScript の全体像をつかむにはよさそう
超初心者にはハードルが高いっぽい？（解説が省略してある？）みたいだがそこは問題ないだろうということで進む

セクション 2-4 の環境構築まで完了

```
npx create-react-app . --template typescript
```

このコードを打った際、ディレクトリ名に大文字が含まれているとエラーが出た

## 2023/12/06

mac での環境最適化とセクション 2-5 の設定変更
全然進められなかった

## 2023/12/07

セクション 2-7 まで
やってて思ったが、解説が薄いので以下も参考に見ている
https://typescriptbook.jp

## 2023/12/08

セクション 2-8 まで
TypeScript の判別可能なユニオン型
・ディスクリミネータを持つオブジェクトの型からなるユニオン型
・if/switch 分岐で型が絞り込みやすい

ディスクリミネータ

- 各オブジェクト共通のプロパティキー(しるし的なもの)
- 使える型は、リテラル型、null、undefined

## 2023/12/11

セクション 2-10 まで
やっぱりサバイバル TypeScript を見ながらの方がよさそうなので
じっくり見つつ進めている

## 2023/12/12

セクション 2-11 まで
typeof 型演算子、keyof 型演算子は型の再利用で使う

## 2023/12/13

セクション 2-12
enum 型から公称型と構造的部分型について学んだ
TypeScript は Java 等と違って構造的部分型
型が違っても同じプロパティを持っていれば互換性がある

## 2023/12/14

セクション 2-14 まで
ジェネリクスは奥が深い

## 2023/12/15

セクション 2-16 まで

<h1>{props.text}</h1>
javascript式として埋め込むことで変数を受け取れる

## 2023/12/18

セクション 2-17
useState の引数の型について
https://qiita.com/yamashin0616/items/43102dd617e2e0358183
関数名の最初は大文字にする

## 2023/12/19

セクション 2-18
Event handler データ型について
セクション 2-16 からいきなり React の話になったので他の資料で詳しく見ていきたい

## 2023/12/20

【Discord クローン開発】React/Redux/Typescript/Firebase で作るアプリ開発実践講座
これをやっていく
VSCode：インストール済み
Node.js：インストール済み
今日はシェルスクリプトについて時間を使ったので終わり
明日から細かく進めていく

## 2023/12/21

セクション 3-8
事前準備完了

## 2023/12/22

セクション 3-10
scss 導入、サイドバーの雛形準備

## 2023/12/25

サイドバー作成

## 2024/01/09

過去の日付が間違っていたので修正
Material UI をインストールした
インストール場所が間違っておりエラーが出ていた
→discord_clone 配下で npm install しなければいけなかった

## 2024/01/10

ヘッダー追加
まだ React っぽいのは出てこない(Material UI だけ)

## 2024/01/12

フッター追加
React っぽくなってきた

講座ではそのまま Sidebar.tsx に書いていたがコンポーネントを分けた
そのため画像パスを変える必要があった
https://zenn.dev/kiriyama/articles/20480ad223d36e
こちらを参考にした

## 2024/01/15

フロントエンド完成

## 2024/01/16

firebase 準備
npm install firebase
https://console.firebase.google.com/project/discord-clone-b4a40/overview?hl=ja

## 2024/01/17

Redux を導入

npm install @reduxjs/toolkit
npm install react-redux
npm install @types/react-redux

## 2024/01/18

Redux は、ReactJS が扱う UI の state(状態)を管理をするためのフレームワーク
https://redux-toolkit.js.org/api/configureStore
https://redux-toolkit.js.org/usage/usage-with-typescript#createslice

Slice とは？
https://qiita.com/ryocha12/items/76acbf02e9e73bb0c5ec

```
ActionCreatorとStateとReducerを3つ同時に作成していきます。3つ同時に作成するのは生のReduxだけだとできないですが、Redux Toolkitを使用することで可能になります。これをSliceと呼びます。

Stateとは初期化された値や更新された値が入っている今の状態です。
ReducerとはStateを更新するための裏側の仕組みのことです。
ActionCreatorとはStateを更新する具体的な処理のことです。
```

reducer（リデューサー）
action を受け取り、action の内容に対応した state への変更を行う関数

action
通常 action type と payload をもつオブジェクトのことを指す 1

action creator
action を返り値とする関数。

https://react-redux.js.org/api/provider
store にアクセスできるようになる

## 2024/01/19

ログインページ作成

## 2024/01/20

userSelector の使い方（ディスパッチ用の型指定）
https://redux.js.org/usage/usage-with-typescript

## 2024/01/21

よくわからなくなってきたので整理

discord_clone\src\App.tsx
user を useAppSelector で取得
↓
discord_clone\src\app\hooks.ts
TypedUseSelectorHook<RootState>

TypedUseSelectorHook は、useSelector フックの型を安全に定義するための型
<RootState> は、アプリケーション全体の Redux ストアのルート状態（RootState）の型を指定
この型安全なフックは、Redux のセレクター関数を使用する際に、適切な型情報を提供する役割を果たす
= useSelector;

実際に useAppSelector を useSelector に割り当てている
useSelector は、React Redux ライブラリで提供される状態選択のための標準的なフック

discord_clone\src\app\store.ts
RootState

export type RootState = ReturnType<typeof store.getState>;
現在の state を持っている？

export const store = configureStore({
reducer: userReducer,
});

userReducer
import userReducer from "../features/userSlice";
↓
Redux ToolKit で提供されている Slice を用いると、Redux を使う際、Action と Reducer を 1 つにまとめて記述できる

「今から始める Redux x React x TypeScript」
https://qiita.com/it_tsumugi/items/f6efefe8757fd0fa00d8

【React】Slice を用いた Redux の簡単な実装方法
https://tekrog.com/how-to-use-slice

## 2024/01/22

firebase を使って google ログイン機能を実装
ログイン後に画面が切り替わるように実装
ログアウト機能も実装
→ アイコン画像がなんか読み込まれない

## 2024/01/23

エラーを解決する
npm i react-error-boundary

エラー詳細を出すところまで
