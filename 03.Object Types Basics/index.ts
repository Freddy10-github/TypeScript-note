// let myName = 'Maxwell';
// let age = 20;
// let hasPet = false;
// let nothing:undefined = undefined;
// let nothingLiterally:null = null;

let info:object = {
  name:'Maxwell',
  age:20,
  hasPet: false,
}

let someone:object = {
  knows:undefined,
  identity: null
}

let justAnObject :object = {hello:'World'}

//原始型態覆寫
justAnObject = 123

//陣列覆寫
justAnObject = [1,2,'hello',false,function test (){
  console.log(123)
}]

//函式覆寫
justAnObject = function (){
  console.log('change object')
}

//物件覆寫
justAnObject = new Object()

//利用創建物件的方式覆寫

justAnObject = new String("Hi I am Freddy.")
justAnObject = new Number(23)

//類別名稱覆寫
justAnObject = Object
justAnObject = Array