# 安裝 TypeScript 以及 Hello World
###### tags: `TypeScript`
>紀錄學習TypeScript，更多更詳細的內容可以到[Day 01. 遠征 TypeScript・行前準備](https://ithelp.ithome.com.tw/articles/10214714)閱讀。
## 安裝 TypeScript
將 TypeScript 安裝在全域。
`npm install -g typescript`

## 初始化 TypeScript
在專案資料夾下開啟終端機輸入：
`tsc --init`

完成後可以看見會建立一個 `tsconfig.json` 的設定檔。

## 開始 Hello World
建立一個 `index.ts` 檔案，並輸入下列程式：
```typescript=
const message = 'Hello World';
function say (someting: string): void {
  console.log(someting)
}

say(message)
```
好了之後在終端機輸入 `tsc` 後會建立一個 `index.js` 的檔案，接著終端機輸入 `node index.js` 。
![](https://i.imgur.com/xUVkpBY.png)

## TypeScript V.S. 原生 JS
建立一個 `_index.js` 檔案，並填入程式碼：
```typescript=
const message = 'Hello World';
console.log(message.touppercase());
```
這邊將 `message.toUpperCase()` 故意打錯，但是在 `_index.js` 中這樣 VS code 是不會報錯的。
![](https://i.imgur.com/Im2A9NK.png)

但是如果將這段程式複製到 `index.ts` 就會被報錯，甚至將滑鼠移至報錯的地方還會有提示。
![](https://i.imgur.com/rTe0YeB.png)


## Reference
[Day 01. 遠征 TypeScript・行前準備](https://ithelp.ithome.com.tw/articles/10214714)