var reviews = [5, 5, 4.5, 1, 3];
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
}
//compute average
var num = [5, 5, 10, 25, 2, .30];
var total = 0;
for (var i = 0; i < num.length; i++) {
    total += num[i];
}
var avg = total / num.length;
console.log("Review average =" + avg.toFixed(2));
//array of string
var sportsOne = ["Football", "Cricket", "Tennis", "swimming"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
//Growable Arrays
var sportsTwo = ["\n", "Golf", "cricket", "Tennis"];
sportsTwo.push("Football");
sportsTwo.push("baseball");
sportsTwo.pop();
for (var _i = 0, sportsTwo_1 = sportsTwo; _i < sportsTwo_1.length; _i++) {
    var i = sportsTwo_1[_i];
    console.log(i);
}
