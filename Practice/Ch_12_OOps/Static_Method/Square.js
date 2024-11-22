class Square{
    constructor(){
        this.side=side;
    }
    findPerimeter(){
        return 4*this.side;
    }
    static comparePerimeter(squarea,squareb){
        if(squarea.side>squareb.side){
            console.log("Square a has more perimeter!");
        }
        else if(squarea.side<squareb.side){
            console.log("Square b has more perimeter");
        }
        else{
            console.log("Both A and B have equal perimeter");
        }
    }
}
let sqa=new Square(2);
let sqb=new Square(2);
square.comparePerimeter(squarea,sqaureb);