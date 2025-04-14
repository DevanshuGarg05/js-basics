function patter3(x){

    for(let i=1;i<=x;i++){
        let str = "";
        let space = x-i;

        for(let j=1;j<=space;j++){
            str += " ";
        }

        let stars = 2*i-1;
        for(let col=1; col<=stars;col++){
            str += "*";
        }
        console.log(str);
    }
}
patter3(5);
    