# 物件型別 - Object Types Basics
###### tags: `TypeScript`
>紀錄學習TypeScript，更多更詳細的內容可以到[Day 03. 前線維護・物件型別 X 完整性理論 - Object Types Basics](https://ithelp.ithome.com.tw/articles/10214840) 閱讀。

## 物件型別分類
* 基礎物件
* TypeScript 擴充型別
* 函式型別 Function Types

### 基礎物件 JSON
先來測試一下純 JSON 的型別推論會是什麼：
```typescript=
let info = {
  name: 'Maxwell',
  age: 20,
  hasPet: false,
};
```
結果是他會告訴你裡面的 `name` `age` `hasPet` 各自是什麼型態。

![](https://i.imgur.com/uIR4fW2.png)


但是當遇到了 Nullable Type 時，卻會直接顯示 null 或是 undefine，而不是我們之前所學習到的 any 。

![](https://i.imgur.com/9uWGGiy.png)

## 測試幾種狀況
### 1. 錯誤型別的覆寫
```typescript=
info.name = 'Martin'
info.age = 24
info.hasPet = true

someone.knows = undefined
someone.identity = null

info.name = false
info.age = null 
info.hasPet = 'hello'

someone.knows = 'Nothing'
someone.identity = 'Joho Snow'
```
可以看到我們給予了不同型別值覆寫時，vs code 都會報錯給我們。
![](https://i.imgur.com/AWKaPP2.png)

### 2. 物件被錯誤格式整體覆寫
```typescript=
info = {
  name:'Freddy',
  age:24,
  hasPet: true,
}

info = {
  name:'Freddy',
  age:24,
}

someone = {
  knows:undefined,
  identity: null,
  Hello:'world'
}
```
我們不管是多一個 key 或是少一個 key 在 TypeScript 都是不允許的。
![](https://i.imgur.com/Vgb2Rpn.png)

### 3. 直接對物件新增值

我們不能直接對物件新增值。
![](https://i.imgur.com/i7Gk2Or.png)

## object 型別註記

可以發現當型別註記為 object 時，除了整個覆寫調物件內容以外，其他的改動是不被允許的。

![](https://i.imgur.com/NIzuGjx.png)

### JS 物件覆寫 object
在這邊原作者有定義了`狹義物件` `廣義物件`，為了更好理解他在這邊舉的範例，因此我們就利用他的定義去理解接下來的例子。

>狹義物件的定義：僅限於 JSON 格式的物件（典型的 {} 這種東西的寫法）
廣義物件的定義：包含 JSON 格式的物件、陣列、函式、類別、類別創建出之物件

![](https://i.imgur.com/rT6YkLV.png)

除了原始型別的覆寫之外，其他方式都 PASS

因此覆寫方式只要任何廣義物件都可以成功覆寫。

## Reference
[Day 03. 前線維護・物件型別 X 完整性理論 - Object Types Basics](https://ithelp.ithome.com.tw/articles/10214840)
