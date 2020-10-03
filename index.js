

let arr=[1,2,3,4,5,6,7];
let idx=arr.findIndex(item=>item===4)
arr.splice(idx,1)
console.log(arr)