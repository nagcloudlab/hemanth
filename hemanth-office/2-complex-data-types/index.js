




/*

 what is object?


   ==> state --> data/info/attributes/properties  : variables
   ==> behav --> function,method,work             : function
   ==> indentity --> reference

   object ==> sbi

   p1 {
      state
      behav
   }

    p2 {
      state
      behav
   }


   class {
      state
      constructor
      behav
   }

   obj1=  class-constructor() 
   obj2=  class-constructor() 

*/


// //----------------------------------------------------
// // ES5, class 
// //----------------------------------------------------

// function Person(name, age) {
//    this.name = name;
//    this.age = age
//    this.doLive = function () {
//       console.log(this.name + " living..")
//    }
// }

// var p1 = new Person("Nag", 37)
// var p2 = new Person("Vivek", 27)
// var p3 = new Person("Chiru", 23)




//----------------------------------------------------
// ES6, class  , 2015
//----------------------------------------------------

class Person {
   constructor(name, age) {
      this.name = name;
      this.age = age
   }
   doLive() {
      console.log(this.name + " living..")
   }
}
var p1 = new Person("Nag", 37)
var p2 = new Person("Vivek", 27)
var p3 = new Person("Chiru", 23)


