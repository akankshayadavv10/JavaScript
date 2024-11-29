class automobile{
    constructor(name,cc){
        this.name=name;
        this.cc=cc;
    }
    engine(){
        console.log(`${this.name}
            has ${this.cc}engine`);
        
    }
}
class car extends automobile{
    engine(){
        console.log(this.name,"has",this.cc,"cc engine");
        
    }
}
let cars=new car("Supra","1998");
cars.engine();