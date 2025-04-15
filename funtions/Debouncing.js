function anotherfunction(f1){

    f1();
    console.log("function called");

}

function myfunction(){
    console.log("my function called");
    return mysecond;
}

function mysecond(){
    console.log("THorugh my function");
}

anotherfunction(myfunction()); 


