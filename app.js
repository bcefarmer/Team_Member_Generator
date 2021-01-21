
// REQUIRE
const inquirer = require("inquirer");
const fs = require("fs");
const open =require("open");
const util = require("util");
const path = require("path");
const stream = require("stream");
// ----> for question sets.
const emp_import = require("./lib/prompts/prompts_employee");
const emp_classes = require("./lib/classes/classes");




// FILEPATHS
//Filepaths to html template, and output folder for created file.
const createdPath = path.join(__dirname, 'output', 'team.html');
const createdTemplate = path.join(__dirname, 'templates', 'pageTemplate.html');




// QUESTION SET
const employee_questions = emp_import.answers;
const cardImport = require("./lib/listItems/cardGen");




// IMPORT JS VARIABLE FOR BOOTSTRAP CARD....will be used in unordered list on html doc.
const card_object = cardImport.staffCard;
let employeeSet = [];




//-----------------------------------------
/*
initialQuestion();

PURPOSE: Presents user with series of prompts.
*/
//------------------------------------------    

const initialQuestion = () =>{
 return inquirer.prompt(employee_questions);
}  




//----------------------
/*
continueEntries();

PURPOSE: continueEntries presents a prompt to find out if the user is finished entering
          employees.  If not the while loop in function processLoop() is ran again.

DETAILS: Presents user with a choice of YES or NO.

ARGUMENTS/PARAMETERS: None

*/
//--------------------

const continueEntries = () =>{
  return inquirer.prompt([
  {
   type: 'list',
   name: 'continueMessage',
   message: 'Would you like to enter more employees?',
   choices: [
            "YES",
            "NO"
            ]
  }
  ])
}


//-----------------------------------------
/*
const/function: init()

PURPOSE: Initiates user-prompts and pushes answers in JSON to array employeeSet

ARGUMENTS/PARAMETERS: None
*/
//------------------------------------------  

const init = async () => {

  const toPush = await initialQuestion();
  employeeSet.push(toPush);
  }




//----------------------
/*
processLoop();

PURPOSE: processLoop is a user-controlled loop that allows the person inputting data
         to decide when they are finished.

DETAILS: Why execute this as a loop?  Because eash JSON object representing the input for 1 employee,
         will be in a different array index.  I create the user cards (sandwiched inside a list item)
         from these.

ARGUMENTS/PARAMETERS: None

*/
//--------------------

const processLoop = async () => {
  let processComplete = false;
  let i = 0; 

  
  // Until process is designated finished by user, keep running init().  The is the 
  // workhorse function.
  while (processComplete === false){
    await init();
     i++;
    let completedTask = await continueEntries();

    // IF USER CHOOSES NOT TO GO ON, RUN THE 'IF' PORTION OF THIS CONDITIONAL.
    if(completedTask.continueMessage === "NO"){
      processComplete = true;
   
     
      // Grab path to app.js directory, and then read from the HTML template.
  const listObject =  __filename;
             
 
  const staff_listings = list_of_staff() ;                        

  fileRevision(staff_listings);
           
      
       }} }  
                                 
                                            
      
      
//-----------------------------------------------
/*
  list_of_staff() 

  PURPOSE: This variable/arrow function generates
           staff-member html to be written onto the
           team.html page.  I am using this in lieu
           of the html renderer file included for the assignment.

  DETAILS: Goes through array containing JSON objects(each index represents an employee)


 PARAMETERS: None, but uses the employeeSet data generated from user prompts.

*/
// -------------------------------------------=-

const list_of_staff = () =>{
var empSet = JSON.stringify(employeeSet);
var empSet = JSON.parse(empSet);


let arrayLength = empSet.length;
var completeList = "";

// Main loop begins
for(var i = 0; i < arrayLength; i++){  

let current_card = card_object;
/*
let revisionCard = current_card.replace("$$employeeName", empSet[i].first_name + " "  + empSet[i].last_name)
            .replace("$$department", empSet[i].department)
            .replace("$$position", empSet[i].emp_id );
*/

let temp_card = current_card.replace("$$employeeName", empSet[i].first_name + " "  + empSet[i].last_name).replace("$$department", empSet[i].department)


let details_replacement ="";
if(empSet[i].department === "Manager"){
 details_replacement =
`Direct Office Number: ${empSet[i].directNumber} <br/>
Email: ${empSet[i].email}
 `
}

else if(empSet[i].department === "Intern"){
details_replacement =  
`Graduated from ${empSet[i].school} <br/>
 Email: ${empSet[i].email}
`
}

else if(empSet[i].department === "Engineer"){
details_replacement =
`GitHub: ${empSet[i].gitHub} <br/>
Email: ${empSet[i].email}
`
}


let revision_card = temp_card.replace("$$details", details_replacement);
  
  if(completeList ==="" || completeList === null){
  completeList=revision_card;}
  else{
    completeList +=revision_card;
  }
      
} 
console.log("Complete List: " + completeList);
return completeList;

}
// List of staff end--------------




  function fileRevision(staffListings){

    this.staffListings = staffListings;
    
   fs.readFile(createdTemplate, 'utf-8', function read(err, data){
        
    if (err){
      console.log(`PROGRAM ERROR INFO FOR READFILE: ${err}`)
       return err
    }
    else{ 
      console.log("PATH-STRING = " + createdPath);
      fs.writeFile(createdPath, data.replace("$$staff_listings", staffListings).replace("$$scriptTag", this.listObject).replace("$$designTag", "./assets/styles.css"), 'utf-8', function (err) {
       if(err){
           console.log(`PROGRAM ERROR INFO FOR WRITEFILE: ${err}`);
        return err;}
      })}
       
  open("./output/team.html");
   })   
  }  
  

processLoop();




      







