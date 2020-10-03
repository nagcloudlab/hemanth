

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
// FP principles
//------------------------------------------

