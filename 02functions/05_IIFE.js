// IIFE - Immediately Invoked Function Expression
// chai();

//to get rid of the pollution made by the global scope
// ()()
// (function)();

//Named IIFE
(function chai(){
    console.log("DB connected");
})();



//UN-NAMED IIFE
(()=>{
    console.log("DBBBB");
})();

((naam)=>{
    console.log(`DBBBB and ${naam}`);
})("Nagesh");