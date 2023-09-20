//Singleton Object

const myObj = new Object();

// console.log(myObj);

myObj.Id = "101abc";
myObj.Naam = "Naguuu";
myObj.isLoggedIn = false;

// console.log(myObj);

const secondUser = {
    email : "mali@google.com",
    fullName : {
        userFullName : "Nested Name",
    }
}

console.log(secondUser);
console.log(secondUser.fullName);
console.log(secondUser.fullName?.userFullName);

const comObj = {...myObj,...secondUser};
console.log(comObj);
console.log(Object.assign({},myObj,secondUser));

//Return the array
console.log(Object.keys(comObj));
console.log(Object.values(comObj));