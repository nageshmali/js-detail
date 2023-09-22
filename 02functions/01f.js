
function add(n1,n2){
    return n1+n2;
}

let ans = add(3,4);
console.log(ans);

function sub(n1,n2){
    return n1-n2;
}

let ans2 = sub(3,4);
console.log(ans2);

function loginUser(naam){
    if(!naam){
        console.log("Please enter username");
        return;
    }
    else{
        console.log("Welcome " + naam);
    }
}
loginUser("Nagesh");
loginUser();



function def(arg = 12){
    console.log(arg);
}
def(10);
def();