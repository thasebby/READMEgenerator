//include the inquirer package
const inquirer = require('inquirer');
//include the file system module 
const fs = require('fs');

const generateREADME = ({projectName, username, email, license, description, installation, usage, contributing, tests}) =>
`
#${projectName}

![License Badge](https://shields.io/badge/license-${license}-green)

## Table of Contents

1.[Description](#description)

2.[Installation](#installation)

3.[Usage](#usage)

4.[Contribution](#contribution)

5.[Tests](#tests)

6.[Licenses](#licenses)

7.[Questions](#questions)

<a name="description"></a>
## Description

${description}

<a name="installation"></a>
## Installation

${installation}

<a name="usage"></a>
## Usage

${usage}

<a name="contribution"></a>
## Contribution

${contributing}

<a name="tests"></a>
## Tests
${tests}

<a name="licenses"></a>
## Licenses

We are currently using the ${license} license.

<a name="questions"></a>
## Questions

[GitHub Repo Link](https://github.com/${username})

Email: ${email}
`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license are you using?:',
            choices: ['none' , 'MIT', 'BSD', 'GPL', 'Apache'],
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a short description on your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Are there any installation requirements?:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How can this application be used?:',
        },
        {
            type: 'input',
            name: 'contributing',
            message: "How can someone else contribute to this project?:",
        },
        {
            type: 'input',
            name: 'tests',
            message: "How can the user test the application?:",
        },
        {
            type: 'input',
            name: 'username',
            message: "What is your GitHub username?:",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your complete email?:",
        },
    ])
    .then((answers) => {
        const READMEcontent = generateREADME(answers);

        fs.writeFile('README.md', READMEcontent, (err) => 
            err ? console.log(err) : console.log('Successfully created a README.md!')
        );
    });