for(let i=0; i<5 ; i++){
    console.log(i);
}
//simplified For loop
let sportsOne1: String[]=["Footb","Cricket","Tennis","swimming"];
for(let temsport of sportsOne1){
    console.log(temsport);
}


//conditionals
let sports: string[]=["\n","Golf", "cricket","Tennis","Football"];
for(let temp of sports){
    if(temp=="cricket"){
        console.log(temp+ " << My Favourite!");
    }else{
        console.log(temp);
    }
}