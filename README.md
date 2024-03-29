
## アプリケーション名
「 ボディリメイクTodoリスト 」

---
## 概要
体重管理をしたい人やボディリメイクしたい人をサポートするToDoリストアプリです。
レスポンシブ対応しているのでスマートフォンからでも利用できます。

<img width="1417" alt="weightapp" src="https://user-images.githubusercontent.com/101165076/212466210-521a9912-7d71-49cf-a386-143950e53e00.png">

---
## このアプリを作った思い
* 格好良い体型になりたい、もっと理想の体型になりたい
* モチベーション維持して体作りをしたい

**これらの自分の体験を踏まえて、同じ境遇の人たちをサポートしたいと思い作成しました。**

---
## URL
https://www.todosweight.com/app/view/todo/

---
## 使用技術
【ローカル環境】
* JavaScript
* PHP 7.4.30
* MySQL 5.7
* Docker

### 選定理由
【PHP】
* 需要、将来性が高いから
* 情報量も多いので自己解決しやすいから
* オブジェクト指向の言語だから

【MySQL】
* 使い慣れていたから

【Docker】
* 今後のキャリアや開発を見据えて、少しでも知識を得たかったから

---
## 機能一覧
* 体重、日付 新規登録機能
* 体重、日付 削除機能 (fetch 非同期通信)
* ToDoリスト 新規登録機能
* ToDoリスト 編集機能
* ToDoリスト 完了/未完了 更新機能 (fetch 非同期通信)
* ToDoリスト 削除機能 (fetch 非同期通信)
* コメント 新規登録機能
* コメント 削除機能 (fetch 非同期通信)
* 画像アップロード機能
* 画像 削除機能 (fetch 非同期通信)

---
## 使い方
* 体重記入ページで目標体重、現在の体重、日付の新規登録ができます。登録後、自動的に目標体重と現在の体重の差がメインページに表示されます。また、体重リセットボタンで体重の全データの削除も可能です。

* 新規登録ページでToDoリスト(タイトル、詳細)を入力でき、また完了したものをチェックするとグレーの線が入り、完了したものと未完了のものを区別が可能です。

* 画像アップロード画面で画像の保存、一言メモを入力できます。何を食べたかを画像で残せたり、また一言メモを使ってカロリーを書くなど様々な用途に使えます。

* 一言メッセージ画面で1日の振り返りや気になった点などのコメントを投稿できます。

---
### 今後追加したい機能
* ログイン、ログアウト機能
* ページング機能

---
### こだわったこと
* 目標体重を意識して行動できるように「あと何kgで目標達成なのか」をすぐ分かるようにしたこと

* 体重履歴を削除したあとのスタイル

* バリデーションの表示する位置やパターンを複数個考えて表示したこと

---
### 苦労したこと
* 非同期通信(fetch)が思うようにデータベースに繋がらず、データの操作ができなかったこと。引数やカスタムデータ属性の関係性を考え直し解決しました。

* 画像アップロード機能でのファイルの大きさ、ファイルの形式のバリデーションが思うように返しれくれず苦労しました。

---
### ライセンス
* This TaijuList is under [MIT license](http://TomoakiTANAKA.mit-license.org).
* Copyright © 2022,higashi100

---
### 文責
* 作成者 : higashi1000