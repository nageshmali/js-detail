

//variable argumenets

function calculateCartPrice(val1,val2,...p1){
    // ...p1 - rest operator - gives array
    console.log(val1);
    console.log(val2);
    let sum = 0;
    for(let i=0;i<p1.length;i++){
        sum = sum + p1[i];
    }
    return sum;
}

// console.log(calculateCartPrice(2,200,400,200,67));


const user = {
    userName : "nagesh",
    price : 123,
}

function handleUser(anyObj){
    console.log(anyObj);
    console.log(`Name is ${anyObj.userName} and Price is ${anyObj.price}`);
}

// handleUser(user);
// handleUser({
//     userName : "hehe",
//     price : 456,
// })


const arr = [10,20,30,40,50];

function getSum(anyArr){
    let sum = 0;
    for(let i=0;i<anyArr.length;i++){
        sum += anyArr[i];
    }

    console.log(sum);

}

// getSum(arr);
// getSum([1,2,3,4]);