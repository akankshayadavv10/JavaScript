function Vehicle(){
    this.vehicleName="vehicleName";
    throw new Error("You cannot create instance of Abstract Class");
}
Vehicle.prototype.display=function(){
    return "Vehicle is:"+this.vehicleName;
}
function Bike(vehicleName){
    this.vehicleName=vehicleName;
}
Bike.prototype=Object.create(Vehicle.prototype);
let bike=new Bike("Hero Honda");
console.log(bike.display());
