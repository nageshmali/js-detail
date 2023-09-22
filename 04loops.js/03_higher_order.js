
// for of

const arr = [1,2,3,4,5];

for (const i of arr) {
    // console.log(i);
}

let str = "Nagesh Mali";
for (const s of str) {
    // console.log(s);
}



//Maps - iterable
//Objects - non iterable

const mp = new Map();
mp.set(1,"India");
mp.set(2,"Delhi");
mp.set(3,"Mumbai");
mp.set(1,"India");

console.log(mp);
for (const [k,v] of mp) {
    // console.log(`${k} and ${v}`);
}

//object iteration
const myObj = {
    js : "JavaScript",
    cpp : "C++",
}

for (const key in myObj) {
    // console.log(`${key} and value is ${myObj[key]}`);
}

//array from for in
// for in by default take key
const a = [1,2,3,4,5];
for (let ans in a) {
    // console.log(`${ans} and value is ${a[ans]}`);
    // console.log(a[ans]);
}


//for Each
const array = [10,20,30,40,50];
// array.forEach((k)=>console.log(k+10));

//we can also provide reference
function printMe(i){
    // console.log(i);
}
array.forEach(printMe);


// array.forEach( (values,index,arr) => console.log(values,index,arr));


//Array of Objects

const objArr = [
    {
        v1 : "value1",
        v2 : "value2",
    },
    {
        v1 : "value3",
        v2 : "value4",
    },
    {
        v1 : "value5",
        v2 : "value6",
    }
]

objArr.forEach( (item) => {
    console.log(item.v1 , item.v2);
} )