

// how to create function ?

/*

 2 ways

  1.  function declaration
  2.  function expression


*/

//----------------------------------------
// 1.  function declaration
//----------------------------------------

// console.log(add(12, 13))

// function add(n1, n2) {
//    return n1 + n2;
// }

// console.log(add(12, 13))


//----------------------------------------
// 2.  function expression
//----------------------------------------

// console.log(add(12, 13))

// let add = function (n1, n2) {
//    return n1 + n2
// }

// console.log(add(12, 13))


//------------------------------------------
// Function parameters
//------------------------------------------


// function f1(a, b, c, d, e) {
//    console.log(arguments[0])
//    console.log(arguments[1])
//    console.log(arguments[2])
//    console.log(arguments[3])
//    console.log(arguments[4])
// }
// f1(10, 20, 30, 40, 50);


//------------------------------------------


// // 
// function sum() {
//    let i = 0,
//       len = arguments.length,
//       result = 0;
//    while (i <= len) {
//       result += i
//       i++
//    }
//    return result;
// }



//------------------------------------------



// function getFood() {
//    return "No Food"
// }
// function getFood(pay) {
//    if(arguments.length===0)return "get out"
//    return "Good Food"
// }

// const food = getFood();
// console.log(food)


//------------------------------------------
//  Function With default params
//------------------------------------------



// function func(a = 1, b = 2) {

//   // if (!a) {
//   //   a = 1
//   // }
//   // if (!b) {
//   //   b = 2
//   // }

//   // a = a || 1
//   // b = b || 2

//   console.log(a)
//   console.log(b)
// }

// func()



//------------------------------------------
//  Function With rest params
//------------------------------------------

// function func(a, b, ...remaining) {
//   console.log(a)
//   console.log(b)
//   console.log(remaining)
// }
// func(10, 20, 30, 40)

// --------------------------------------------

// function machine(inp1, inp2) {
//   return { z: inp1.x + inp2.y }
// }

// let result = machine({ x: 10 }, { y: 20 })
// console.log(result)

//-------------------------------------------

// function func(){
//   console.log("hello")
//   // return undefined
// }

// let result=func()
// console.log(result)



//-------------------------------------------
// FP principles
//-------------------------------------------


//# function as value

// function greet() {
//   console.log("hello")
// }

// const sayHello = greet
// sayHello()


// # parameter of function can be other function


// function greet(f) {
//   console.log("🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺")
//   f()
//   console.log("🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺🌺")
// }

// function en() {
//   console.log("hello")
// }

// function tn() {
//   console.log("vanakkam")
// }

// function te() {
//   console.log("Namaskaram")
// }

// greet(en)
// greet(tn)
// greet(te)



// # function can return other function


// function teach() {
//   console.log("💻💻💻💻💻💻💻💻💻💻💻💻💻💻")
//   console.log("teaching...")
//   const learn = function () {
//     console.log("learning..")
//   }
//   //learn()
//   console.log("💻💻💻💻💻💻💻💻💻💻💻💻💻💻")
//   return learn
// }
// const learnFunc = teach()

// learnFunc();
// learnFunc();


//------------------------------------------------------------------
// closure
//------------------------------------------------------------------


// function teach(sub) {
//   console.log(`teaching ${sub}`)
//   const notes = `${sub}-notes`
//   const fun="bla bla";
//   function learn() {
//     console.log("learning with " + notes)
//   }
//   console.log(`teaching ends`)
//   return learn;
// }

// let learnFunc=teach("javacript")

// learnFunc();

//--------------------------------------------------------------------



var arr = []


for (var i = 0; i < 200; i++) {

  var func = function () {
    console.log(i)
  }

  arr.push(func)

}


var f1 = arr[0]
var f2 = arr[1]

f1()
f2();
