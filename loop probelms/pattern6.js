function patter6(x){

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
    for(let i=1;i<=x-1;i++){
        let str = "";
        let space = i;

        for(let j=1;j<=space;j++){
            str += " ";
        }

        let stars = 2*(x-i)-1;
        for(let col=1; col<=stars;col++){
            str += "*";
        }
        console.log(str);
    } 
}
patter6(5);
    