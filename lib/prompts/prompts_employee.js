const inquirer = require("inquirer");


const answers = [
     
  
 {
   type: "input",
   name: "emp_id",
   message: "What is this employee's id?"
 },

 {
  type: "input",
  name: "first_name",
  message: "What is this employee's first name?"
},

{
  type: "input",
  name: "last_name",
  message: "What is this employee's last name?"
},

{
  type: "list",
  name: "department",
  message: "Is this employee a manager, intern or engineer?",
  choices: [
         "Intern",
         "Engineer",
         "Manager"
          ]
},

{
  type: "input",
  name: "email",
  message: "What is this employee's email address?"
},

{ 
  type: "input",
  name: "gitHub",
  message: "Employee's Github?",
  when: answers => answers.department === "Engineer"
},

{ 
  type: "input",
  name: "school",
  message: "Where did this employee go to school?",
  when: answers => answers.department === "Intern"
},

{ 
  type: "input",
  name: "directNumber",
  message: "Employee's direct phone number?",
  when: answers => answers.department === "Manager"
}


]






 module.exports = {answers};
