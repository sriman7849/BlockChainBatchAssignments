/*3.Write a JavaScript program to find the sum of the multiples of 3 and 5
under 1000*/

let sum=0;
for(i=0;i<1000;++i){
    if(i%3==0 || i%5==0){
        sum+=i;
    }
}
console.log(`sum of multiples of 3 and 5 under 1000 is ${sum}`);