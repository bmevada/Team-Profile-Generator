// node modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/team-page.js");

// lib modules
const manager = require("./lib/Manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");


// Array for answers to questions
const employeeRole = [];

// Array object questions asked in CLI to user
const questions = async () => {
    const answers = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is your employee ID number?",
                name: "id",
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email",
            },
            {
                type: "list",
                message: "What is your role?",
                name: "role",
                choices: ["Manager", "Engineer", "Intern"],
            },
        ])


    // If the role answer is Manager, the following questions will be asked:
    if (answers.role === "Manager") {
        const managerResponse = await inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your office number",
                    name: "officeNumber",
                },
            ])
        const manager = manager(
            answers.name,
            answers.id,
            answers.email,
            managerResponse.officeNumber
        );
        employeeRole.push(manager);

    // If the role answer is Engineer, the following questions will be asked:
    } else if (answers.role === "engineer") {
        const githubResponse = await inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your GitHub user name?",
                    name: "github",
                }
            ])
        const engineer = engineer(
            answers.name,
            answers.id,
            answers.email,
            githubResponse.github
        );
        employeeRole.push(engineer);

    // If the role answer is Intern, the following questions will be asked:
    } else if (answers.role === "intern") {
        const internResponse = await inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the name of your school?",
                    name: "school",
                },
            ])

        const intern = intern(
            answers.name,
            answers.id,
            answers.email,
            internResponse.school
        );
        employeeRole.push(intern);
    }

}; 

async function promptQuestions() {
    await questions()

    const addEmployeeResponse = await inquirer
        .prompt([
            {
                name: 'addEmployee',
                type: 'list',
                message: "What would you like to do next?",
                choices: ['Add employee', 'Create Team Profile']
                
            }
        ])

    if (addEmployeeResponse.addEmployee === 'Add employee') {
        return promptQuestions()
    }
    return createTeam();
}

promptQuestions();

function createTeam() {
    console.log("add employee data", employeeRole)
    fs.writeFileSync(
        "./dist/index.html",
        generateTeam(employeeRole),
        "utf-8"
    );
}