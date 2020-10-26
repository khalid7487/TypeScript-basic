import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./shape";

let myCircle=new Circle(5,10,20);
let myRectangle=new Rectangle(5,10,20,20);

// declare an array of shape ... initially empty
let theShapes: Shape[] =[];

//add the shapes to the array 
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea().toFixed(2));
    console.log();
}
