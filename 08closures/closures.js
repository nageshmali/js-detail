
//Even after outer function exceution is comepleted ...the returned inner function holds the data from its lexical scope

function outer(){

    let v1 = 10;

    function inner(){
        console.log("Outer variable is",v1);
    }

    return inner;
}

const ans = outer();
ans();

