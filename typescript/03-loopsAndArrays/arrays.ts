let reviews: number[]=[5,5,4.5,1,3];

for(let i=0; i<reviews.length; i++){
    console.log(reviews[i]);
}
//compute average
let num: number[]=[5,5,10,25,2,.30];
let total: number=0;
for(let i=0; i<num.length;i++){
    total+=num[i];
}
let avg: number=total/num.length;
console.log("Review average ="+avg.toFixed(2));

//array of string
let sportsOne: string[]=["Football","Cricket","Tennis","swimming"];
for(let i=0; i<sportsOne.length; i++){
    console.log(sportsOne[i]);
}

//Growable Arrays
let sportsTwo: string[]=["\n","Golf","cricket","Tennis"];
sportsTwo.push("Football");
sportsTwo.push("baseball");
for(let i of sportsTwo){
    console.log(i);
}


