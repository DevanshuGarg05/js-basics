let i = 1;
while(i<=10)
{
    if(i%7==0) // if i is divisible by 7
    {
        i++;
        continue; 
    }
    console.log(i);
    i += 1;
}
console.log("End");