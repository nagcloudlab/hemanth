


//-----------------------------
// till ES5
//-----------------------------

// let p1 = { name: 'Nag', age: 37 }

// function Person(name, age) {
//     this.name = name
//     this.age = age
//     // this.sayName = function () {
//     //     console.log("im " + this.name)
//     // }
// }
// Person.prototype.sayName = function () {
//     console.log("im " + this.name)
// }
// Person.prototype.sayAge = function () {
//     console.log("im " + this.age + " old")
// }

// let p1 = new Person("Nag", 37)
// let p2 = new Person("Vivek", 27)


//-----------------------------
// from ES6
//-----------------------------



class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
        console.log("Person:: constructor")
    }
    sayName(){
        onsole.log("im " + this.name)
    }
    sayAge(){
        console.log("im " + this.age+" old")
    }
}

let p1 = new Person("Nag", 37)
let p2 = new Person("Vivek", 27)
