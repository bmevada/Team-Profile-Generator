// Pass through the data from employee card and following properties for intern:
const employee = require("./employee.js");

class intern extends employee {
  constructor (name, id, email, school){
      super(name, id, email)
      this.school = school
  }
  getRole(){
    return 'intern'
}
getSchool () {
    return this.school
}

}

module.exports = intern;