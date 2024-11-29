function calculateArea(rectangle){
    return rectangle.width*rectangle.height;
}
let rectangle1={
    width:3,
    height:10
};
let rectangle2={
    width:10,
    height:10
};
let area1=calculateArea(rectangle1);
let area2=calculateArea(rectangle2);
console.log('Area of rectangle1:${area1}');
console.log('Area of rectangle2:${area2}');

