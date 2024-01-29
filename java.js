let num = prompt("Please enter a number");
for( let i=1;i<=10;i++){
    console.log(i*num);
}

function givenNumber(number){
    let factorial = 1;
    let i = 1;
    while (i<number) {
        factorial = factorial*i;
        i++;
        
    }
    return factorial;
}
const mynum = givenNumber(5);
console.log(mynum);