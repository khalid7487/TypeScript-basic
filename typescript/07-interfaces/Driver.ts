import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCriketCoach=new CricketCoach();
let myGolfCoach=new GolfCoach();

//declare an array for coaches ... initially empty
 let theCoaches: Coach[]=[];

theCoaches.push(myCriketCoach);
theCoaches.push(myGolfCoach);

for (let iterator of theCoaches) {
    console.log(iterator.getDailyWorkout());
    
}