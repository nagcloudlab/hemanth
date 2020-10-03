

//--------------------------------------------

// var config1 = new Object();
// config1.url = "http://"
// config1.httpMethod = "GET"
// config1.onSuccess = function (resp) {
//    //..
// }

// or

var config2 = {
   url: "http://",
   httpMethod: "GET",
   onSuccess: function () {

   }
} // literal


//-----------------------------------------------


// var list = new Array();
// list.push("biryani")
// list.push("beer")

// or

var list = ["biryani", "beer"]; // literal

//-----------------------------------------------


// var add = new Function("n1", "n2", "var result=n1+n2;return result;")


// or

// literal
function add(n1, n2) {
   var result = n1 + n2;
   return result;
}

//--------------------------------------------------


let mob = "1234567890123"

// let re = new RegExp("\\d{13}")

// or

let re=/\d{13}/ // literal 

var isValid = re.test(mob)

if (!isValid) {
   alert("invalid account number")
}