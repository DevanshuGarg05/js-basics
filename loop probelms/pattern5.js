function patter5(x){

    for(let i=1;i<=x;i++){
        let str = "";
        
        for(let col=1; col<=x-i+1;col++){
            str += "*";
        }
        console.log(str);
    }
}
patter5(5);
    

    