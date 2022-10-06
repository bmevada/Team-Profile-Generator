// Pass through the data from employee card and following properties for engineer:
const Employee = require("./Employee");

class Engineer extends Employee {
   constructor (name, id , email, github) {
       super(name,id,email)
       this.github = github
   }
   getRole(){
       return 'Engineer'
   }
   getGithub(){
       return this.github
   }
}

module.exports = Engineer;