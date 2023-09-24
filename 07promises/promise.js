
//***********Promise 1**************
// const p1 = new Promise((response,reject)=>{
//     setTimeout(()=>{
//         console.log("hello i am timeout");
//     },2000);
// })

// p1.then(()=>{
//     console.log("Promise Consumed");
// })


//*********Promise 2 */
// const p2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am Timeout 2");
//         resolve();
//     },1000);
// })

// p2.then(function(){
//     console.log("Promise is Consumed");
// })

//**********Promise 3 */
// const p3 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("Timeout 3");
//         res();
//     },2000)
// })

// p3.then(()=>{
//     console.log("Promise Consumed");
// }).catch(()=>{
//     console.log("Error Occured");
// })


//************Promise 4 */
// const p4 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         console.log("Timeout 4");
//         let e = true;
//         if(e){
//             rej();
//         }
//         else{
//             res();
//         }
//     },2000)
// })

// p4.then(()=>{
//     console.log("Promise Success");
// }).catch(()=>{
//     console.log("Promise Failed");
// })


//************Promise 5 */
// const p5 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         let user = undefined;
//         if(user != undefined){
//             res(user);
//         }
//         else{
//             rej("Not found");
//         }
//     },2000)
// })


// p5.then((userInfo)=>{
//     console.log(userInfo.username);
//     console.log(userInfo.email);
// }).catch(()=>{
//     console.log("Data not found");
// })


//*************Using async await***********
// async function iAsync(){
//     try{
//         const res = await p5;
//         console.log(res);
//     }
//     catch(e){
//         console.log(e);
//     }
// } 

// iAsync();
