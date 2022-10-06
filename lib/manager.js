// Pass through the data from employee card and following properties for manager:
const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name,id,email)
        this.officeNumber =officeNumber
    }
    getRole(){
        return 'Manager'
    }
    getOfficeNumber () {
        return this.officeNumber
    }
  
}

module.exports = Manager;