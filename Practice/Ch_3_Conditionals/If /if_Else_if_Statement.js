// 1
let mark=50;
if(mark>90 && mark<=100){
    console.log("Your Grade is A+");
}
else if(mark>80 && mark<=90){
    console.log("Your Grade is A")
}
else if(mark>70 && mark<=80){
    console.log("Your Grade is B+")
}
else if(mark>60 && mark<=70){
    console.log("YOur Grade is B")
}
else if(mark>50 && mark<=60){
    console.log("YOur Grade is C+")
}
else if(mark>40 && mark<=50){
    console.log("Your Grade is C");
}
else if(mark>35 && mark<=40){
    console.log("Your Grade is D+")
}
else if(mark<35 && mark>0){
    console.log("YOu Are Failed!!!")
}
else{
    console.log("YOu've Entered Wrong Mark!")
}

// 2
let num=-6;
if(num>0){
    console.log("Number is Positive");
}
else if(num==0){
    console.log("Number is Zero")
}
else{
  console.log("Number is Negative")
}

// 3
let rating=4;
if(rating<=2){
    console.log("Bad Rating!");
}
else if(rating>=4){
    console.log("Rating is Good!");
}
 else{
    console.log("Average Rating!");
 }

 //  4
let month=13;
if(month==1){
    console.log("Jan");
}
else if(month==2){
    console.log("Feb");
}
else if(month==3){
    console.log("Mar");
}
else if(month==4){
    console.log("Apr");
}
else if(month==5){
    console.log("May");
}
else if(month==6){
    console.log("June");
}
else if(month==7){
    console.log("July");
}
else if(month==8){
    console.log("Aug");
}
else if(month==9){
    console.log("Sep");
}
else if(month==10){
    console.log("Oct");
}
else if(month==11){
    console.log("Nov");
}
else if(month==12){
    console.log("Dec");
}
else{
    console.log("Wrong Month Entered!")
}

// 5
let weight=50;
let height=2;
let bmi=weight;
if(bmi<18.5){
    console.log("UnderWeight");
}
else if(bmi>=18.5 && bmi<=24.9){
    console.log("Healthy Weight");
}
else if(bmi>=25 && bmi<=29.9){
    console.log("Overweight")
}
else{
    console.log("Obesity")
}

// 6
let day=1;
if(day==1){
    console.log("Monday","Working Day !");
}
else if(day==2){
    console.log("Tuesday","Working Day!");
}
else if(day==3){
    console.log("Wednesday","Working Day!");
}
else if(day==4){
    console.log("Thursday","Working Day!");
}
else if(day==5){
    console.log("Friday","Working Day!");
}
else if(day==6){
    console.log("Saturday","Working Day!");
}
else if(day==7){
    console.log("Sunday","Holiday!!!");
}
else{
    console.log("You've Entered Wrong Day!!!")
}