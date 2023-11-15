export class User {
    userName:string
    userPassword:string
    userEmail:string

    constructor(userName:string,userPassword:string,userEmail:string) {
            this.userEmail=userEmail;
            this.userName= userName;
            this.userPassword=userPassword
        }
}