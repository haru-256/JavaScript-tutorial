"use strict";

let data = [56, 40, 26, 82, 19, 17, 73, 99];
let x0 = data[0];
let x1 = data[1];
let x2 = data[2];
let other = data.slice(3);

console.log(x0);
console.log(x1);
console.log(x2);
console.log(other);

[x0, x1, x2, ...other] = data
console.log(x0);
console.log(x1);
console.log(x2);
console.log(other);