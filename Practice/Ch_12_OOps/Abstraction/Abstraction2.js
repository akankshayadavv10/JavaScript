function vehicle(){
    this.vehicleName=vehicleName;
    throw new Error("You cannot create instance of an Abstract Class");
}
vehicle.prototype.display=function(){
    return this.vehicleName;
}
let Vehicle=new vehicle();