import { Shape } from "./shape";


export class Rectangle extends Shape{
    

    constructor(theX: number, theY: number ,private _width: number,
        private _length: number ){
            super(theX,theY);
    }

    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }

    public get heigth(): number {
        return this._length;
    }
    public set heigth(value: number) {
        this._length = value;
    }

    getInfo() : string{
        return "The Rectangle is: " +super.getInfo()+ `width=${this._width}, length=${this._length}`;
    }
}