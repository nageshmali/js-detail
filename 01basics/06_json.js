//de-structuring

//Object Destructuring

const myObj = {
    id : 123,
    naam : "Nagesh",
}

// console.log(myObj);

const {id,naam} = myObj;
// console.log(`${id} and ${naam}`);

const {id:sr,naam:str} = myObj;
// console.log(`${sr} and ${str}`);


//Array Destructuring

const arr = [1,2,3];
// console.log(arr);

const [val1,val2,val3] = arr;
// console.log(`${val1}, ${val2}, ${val3}`);


// JSON - JavaScript Object Notation


// in Object form
// {
//     naam: "nagesh",
//     courseName: "JS",
//     price: "free",
// }

//in array form
// [
//     {},
//     {},
// ]