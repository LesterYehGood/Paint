abstract class Shape
{
    constructor(){};
    abstract draw():void;
}

class Line extends Shape
{
    constructor()
    {
        super();
    };

    public draw():void
    {
        console.log("Line");
    };
}

class Circle extends Shape
{
    constructor()
    {
        super();
    };

    public draw():void
    {
        console.log("Circle");
    };
}

function myDraw(obj:Shape)
{
    obj.draw();
}

let shapeObj: Shape = new Circle();
myDraw(shapeObj);
 