
let mySym = "ha";

const myObj = {
    myId : 123,
    myName : "Nagesh Mali",
    myGoal : "TIAA",
    "isLogged" : true,
    [mySym] : "key1", //Symbol
};

console.log(myObj);

console.log(myObj.myId);
console.log(myObj.myName);
console.log(myObj.myGoal);

myObj.myName = "Harish";

console.log(myObj);

console.table(myObj);

console.log(myObj);

//Object Keys are by default saved in string format in the memory
console.log(myObj['myId']);
console.log(myObj['myName']);
console.log(myObj['myGoal']);


console.log(myObj.isLogged);
console.log(typeof myObj.isLogged);

console.log(myObj["mySym"]);
// console.log(myObj["mySym"]);
console.log(typeof myObj["mySym"]);


// Object.freeze(myObj);

console.log(myObj);
console.log(typeof myObj);


myObj.greeting = function(){
    console.log(`Happpy BirthDay, ${this.myName}`);
}

console.log(myObj);
console.log(myObj.greeting());


