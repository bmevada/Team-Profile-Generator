// Pass through the data from employee card and following properties for engineer:
const employee = require("./employee.js");

class engineer extends employee {
   constructor (name, id , email, github) {
       super(name,id,email)
       this.github = github
   }
   getRole(){
       return 'engineer'
   }
   getGithub(){
       return this.github
   }
}

module.exports = engineer;