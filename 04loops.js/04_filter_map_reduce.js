
const myNums = [1,2,3,4,5,6,7,8,9,10];

//filter - it returns

const newNums = myNums.filter( (num) => (num > 4) );

const nN = myNums.filter( (i) => {
    return i > 6;
})

// console.log(newNums);
// console.log(nN);


//map
const ans1 = myNums.map( (i) => i+100 );


const ans2 = myNums.map( (i) => i+100 ).filter( (p) => p > 105 );
// console.log(ans1);
// console.log(ans2);



//reduce
// const total = array.reduce( (accumelator,currentValue) => (accumelator+currentValue),initialValue );
const total = myNums.reduce( (acc,curr) => (acc+curr),0 );
// console.log(total);

const cart = [
    {
        price : 200,
    },
    {
        price : 100,
    },
    {
        price : 300,
    },
    {
        price : 400,
    },
]

//Shopping Cart
let tot = cart.reduce( (a,item) => (a + item.price),0);
console.log(tot);



