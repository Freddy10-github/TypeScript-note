# 型別推論 (Type Inference) 和註記 (Annotation)
###### tags: `TypeScript`
>紀錄學習TypeScript，更多更詳細的內容可以到[Day 02. 前線維護・型別推論 X 註記 - Type Inference & Annotation](https://ithelp.ithome.com.tw/articles/10214719)閱讀。

## 型別種類
### 原始型別 Primitive Types
Primitive Types 包含的有幾種：
* number
* string
* boolean
* undefined
* null
* symbol
* void

### 物件型別 Object Types
* 基礎物件型別
  * JSON物件
  * 陣列
  * Class
* TypeScript 擴充型別
    * Enum
    * Tumple
* Function Types 
### 明文型別 Literal Type
一個值本身也可以成為一個型別，比如字串 "Hello world"若成為某變數的型別的話，它只能存剛好等於 "Hello world"。

## 原始型別 Primitive Types
### 型別推論在原始型別的運作
我們建立一個TypeScript專案的資料夾，並且新增 `index.js` 後輸入下列程式：
```typescript=
let myName = 'Maxwell';
let age = 20;
let hasPet = false;
let nothing = undefined;
let nothingLiterally = null;
```
這時若是再接下來輸入 `myName` ：

![](https://i.imgur.com/CXoYpnZ.png)

可以看到 `myName` 被標記成 string ，這個就是 TypeScript 的型別推論，也可以試試看其他的變數，但是到了 `nothing` 以及 `nothingLiterally` 就有點不一樣了：

![](https://i.imgur.com/CBhyM4Z.png)

可以看到變成 any 了，這種 null undefined 類型的被稱為 `NullsbleTypes`，會被定義成 any 。

## TypeScript 型別推論的用意
所以看了這些後，型別推論的用意到底是什麼?
>如果設法指派其他型別的值到被推論後的變數的話，TypeScript 會提醒你並顯示警告。
>[renference](https://ithelp.ithome.com.tw/articles/10214719)

若是我們將剛剛定義好的 age 換成 string 時就會跳出錯誤。

![](https://i.imgur.com/Lqxd7bl.png)

但是這個時候剛剛發生特例的 any 又開始搞特殊了。

![](https://i.imgur.com/zBT6QDb.png)

在這種情況下完全不會報錯，因為他的型別推論是 any。
但是我用 TypeScript 主要的原因之一就是因為要解決 JavaScript 的弱型別特性，因此在使用 TypeScript 時我們要盡量避免讓變數型別被視為 any 。

另外在只宣告不賦值的狀況下，得出的變數型態也會是 any

![](https://i.imgur.com/5dF9mEP.png)

而為了避免型別推導所產生 Nullable Types 的變數我們就可以使用型別註記 (Type Annotation) 來處理。

![](https://i.imgur.com/nUHSdpt.png)

這樣子就不會讓他為所欲為啦~



## Reference
[Day 02. 前線維護・型別推論 X 註記 - Type Inference & Annotation](https://ithelp.ithome.com.tw/articles/10214719)
[型別推論 - TypeScript 新手指南](https://willh.gitbook.io/typescript-tutorial/basics/type-inference)