// Pass through the data from employee card and following properties for manager:
const employee = require("./employee.js");

class manager extends employee {
    constructor (name, id, email, officeNumber){
        super(name,id,email)
        this.officeNumber =officeNumber
    }
    getRole(){
        return 'manager'
    }
    getOfficeNumber () {
        return this.officeNumber
    }
  
}

module.exports = manager;