let obj1 = {name : "Elangovan", age: 52};
let key1 = Object.keys(obj1).sort()
console.log(JSON.stringify(obj1))

let obj2 = {age: 26,name : "Aravindh"};
let key2 = Object.keys(obj2).sort()
console.log(JSON.stringify(obj2))

// Using stringify method 
let result = JSON.stringify(key1) === JSON.stringify(key2);

console.log(result);