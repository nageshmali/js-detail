// dynamic array
// any types of values can be stored
// starts with zero
// reference based

let arr1 = [1,2,3,45];

// console.log(arr1);

// let arr2 = arr1;

// arr2[3] = 100;

// console.log(arr1);

// console.log(arr1.length);
// console.log(arr2.length);


// arr1.push(101);
// console.log(arr1);

// arr1.pop();
// console.log(arr1);

// arr1.unshift(0);
// console.log(arr1);

// arr1.shift();
// console.log(arr1);

// console.log(arr1.slice(1,3));
// console.log(arr1);

//splice removes the output from the main array and also includes the last argument
// console.log(arr1.splice(1,3));
// console.log(arr1);


// console.log(arr1.join("-"));

let a1 = [1,2,3,4];
let a2 = [5,6,7,8];
// a1.push(a2)
// console.log(a1);
// console.log(a1.length);
// console.log(a1[4]);


// console.log(a1.concat(a2));

let all = [...a1,...a2];
console.log(all);


let n1 = 23
let n2 = 234
let n3 = 236

console.log(Array.of(n1,n2,n3));



