
const user = {
    naam : "harish",
    price : 999,

    welcomeMsg : function(){
        console.log(`${this.naam}, Welcome to website`);
    },

    greet : () => {
        console.log("Incide greet");
        console.log(`${this.naam}, Welcome to website`)
    }
}

// console.log(user);
// console.log(user.naam);
// console.log(user.price);
// console.log(user.welcomeMsg);
// console.log(user.welcomeMsg());
// console.log(user.greet());
const hehe = () => {
    console.log("This is arrow function");
}

hehe();


const ans = (n1,n2) => n1+n2


console.log(ans(3,5));




console.log(this);