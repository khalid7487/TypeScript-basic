import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./shape";

let myShape=new Shape(10,15);
let myCircle=new Circle(5,10,20);
let myRectangle=new Rectangle(5,10,20,20);

// declare an array of shape ... initially empty
let theShapes: Shape[] =[];

//add the shapes to the array 
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
}
