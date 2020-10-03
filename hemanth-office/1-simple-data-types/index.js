"use strict"

// ---------------------------------------------------------
var v = 12;
v = "string"
v = true
// ---------------------------------------------------------

class Person {
   constructor(name, age) {
      this.name = name
      this.age = age
   }
}

var p1 = new Person("Nag", 37)
var p2 = new Person("Hemanth", 24)

// Object.preventExtensions(p1);
// p1.skill = "trainer" 

// Object.seal(p1)
// delete p1.age;

// Object.freeze(p1)
// p1.age = -10

// ---------------------------------------------------------



// -----------------------------------------------------------------
// how to read/write obj's properties ?
// -----------------------------------------------------------------


// p1['home-address'] = "pannur";
// console.log(p1['home-address'])


// let n=123456789012345678901234567834567893456781234567890n;


// -----------------------------------------------------------------



class Student{}