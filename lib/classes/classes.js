// --------------------------------

class Employee{
    constructor(id, firstName, lastName, email, department){
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email=email;
      this.department = department;
      this.employeeInfo = [];
      }
      
      
     getId(){
     return this.id
     }

      getName(){
      return `${this.firstName} ${this.lastName}`
      }

      getDepartment(){
        return this.department;
      }

      getEmail(){
          return this.email;
      }

      getRole(){
      return this.department;
      }

      printInfo(){
        return Employee;
      }

} ;
      
    



//-----------------------------------    


// INTERN CLASS
class INTERN extends Employee{
    constructor(id, firstName, lastName, email, school){
     super(id, firstName, lastName, email)
     this.school = school; 
    }
    getRole(){
      return "Intern";
    }

    getSchool(){
      return this.school;
    }

    printInfo(){
      return INTERN;
    }
 };           

//-----------------------------------

// MANAGER CLASS   
class MANAGER extends Employee{
    constructor(id, firstName, lastName, email, officeNumber){
      super(firstName, lastName, email)
      this.officeNumber = officeNumber;
      this.email = email;
      this.firstName=firstName;
      this.lastName=lastName;
      this.id=id;
    } 
    getOfficeNumber(){
      return this.officeNumber;
    }
 
    getName(){
      return this.firstName + " " + this.lastName;
    }
    getEmail(){
      return this.email;
    }

    getId(){
      return this.id;
    }

    getRole(){
      return "Manager";
    }
    
    printInfo() {
      return MANAGER;
  }
}


// ----------------------------------
// ENGINEER CLASS
class Engineer extends Employee {
  constructor(id, firstName, lastName, email, gitHub) {
      super(id, firstName, lastName, email);
      this.gitHub = gitHub;
  }


  getRole() {
      return "Engineer"
  }

  getGitHub() {
      return this.gitHub
  }

  printInfo() {
      return Engineer
  }

};

module.exports = {
   Employee,
   INTERN,
   MANAGER,
   Engineer
};

