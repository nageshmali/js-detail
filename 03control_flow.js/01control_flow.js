//operators - && , ||

//if else
if(5>210){
    // console.log(true);
}
else if(1<2){
    // console.log("middle");
}
else{
    // console.log(false);
}

//switch
let c = true;
switch (c) {
    case 10:
        // console.log("value is 10");
        break;
    case true:
        // console.log("c is true");
    default:
        break;
}

// falsy values - false, 0, -0, 0n, "", null, undefined, NaN
// others are truthy

// console.log(false === 0);
// console.log(false == 0);

// NULL coalescing operator - ??

let a = null ?? 5;
// console.log(a);

let b = 10 ?? undefined;
// console.log(b);


//Ternary
(11<10)?console.log("yes"):console.log("no");
