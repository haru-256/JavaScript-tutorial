"use strict";

let data = [56, 40, 26, 82, 19, 17, 73, 99];
let x0 = data[0];
let x1 = data[1];
let x2 = data[2];
let x3 = data[3];
let x4 = data[4];
let x5 = data[5];
let x6 = data[6];
let x7 = data[7];

console.log('分割代入じゃない');
console.log(x0);
console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);
console.log(x5);
console.log(x6);
console.log(x7);

console.log('分割代入');
[x0, x1, x2, x3, x4, x5, x6, x7] = data;
console.log(x0);
console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);
console.log(x5);
console.log(x6);
console.log(x7);