class User{

    static heymail="123@gmail.com";
    static checkValidMail(email){
        console.log("Email is valid");
    }
    static loginheymail(){
        this.checkValidMail(this.heymail)
    }
}
User.loginheymail;