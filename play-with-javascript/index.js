
//-----------------------------------
// Farm inventory
//-----------------------------------

const inventory = [
    { color: 'red', weight: 155 },
    { color: 'green', weight: 120 },
    { color: 'green', weight: 130 }
];

//----------------------------------

let greenApples = filterApples(inventory, function (apple) { return apple.color == "green" })
let redApples = filterApples(inventory, apple => apple.color == "red")
let heavyWeightApples = filterApples(inventory, apple => apple.weight > 150)
let heavyAndRedApples = filterApples(inventory, apple => apple.color == "red" && apple.weight > 150)



//----------------------------------
//#4
//----------------------------------

function filterApples(inventory, predicate) {
    let out = []
    for (let i = 0; i < inventory.length; i++) {
        let apple = inventory[i];
        if (predicate(apple))
            out.push(apple)
    }
    return out;
}


//----------------------------------
//#3
//----------------------------------

// function filterApples(inventory, color, weight, flag) {
//     let out = []
//     for (let i = 0; i < inventory.length; i++) {
//         let apple = inventory[i];
//         if (flag && apple.color === color)
//             out.push(apple)
//         if (!flag && apple.weight > weight)
//             out.push(apple)
//     }
//     return out;
// }


//----------------------------------
//#2
//----------------------------------

// function filterApplesByColor(inventory, color) {
//     let out = []
//     for (let i = 0; i < inventory.length; i++) {
//         let apple = inventory[i];
//         if (apple.color === color)
//             out.push(apple)
//     }
//     return out;
// }
// function filterApplesByWight(inventory, weight) {
//     let out = []
//     for (let i = 0; i < inventory.length; i++) {
//         let apple = inventory[i];
//         if (apple.weight > weight)
//             out.push(apple)
//     }
//     return out;
// }

//----------------------------------
//#1
//----------------------------------
// function filterGreenApples(inventory) {
//     let out = []
//     for (let i = 0; i < inventory.length; i++) {
//         let apple = inventory[i];
//         if (apple.color === 'green')
//             out.push(apple)
//     }
//     return out;
// }

// function filterRedApples(inventory) {
//     let out = []
//     for (let i = 0; i < inventory.length; i++) {
//         let apple = inventory[i];
//         if (apple.color === 'red')
//             out.push(apple)
//     }
//     return out;
// }


//--------------------------------------------------
