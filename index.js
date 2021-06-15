const inquirer = require('inquirer');
const fs = require('fs');


const generateMD = (answers) =>
  `# [${answers.title}](${answers.liveLink}) 

${answers.license}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributor](#contributor)
  - [License](#license)
  - [Questions](#questions)
  - [Tests](#tests)

  ## Description
  
  ${answers.motivation} ${answers.theWhy} ${answers.problem} ${answers.learn}

  ## Installation

  ${answers.installation}

  ## Usage
  
  ${answers.usage}
  
  ## Contributing

  ${answers.contributing}

  ## License

  ${answers.license}

  ## Questions
  
   * This is my personal GitHub acount at [${answers.gitHub}](${answers.gitLink}).

   * In case of contacting me directly please email me at [${answers.email}](${answers.email}).

  ## Tests

  ${answers.tests}
  
  `;

inquirer
  .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project?',
      },
      {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?',
      },
      {
        type: 'input',
        name: 'theWhy',
        message: 'Why did you build this project?',
      },
      {
        type: 'input',
        name: 'problem',
        message: 'What problem does it solve?',
      },
      {
        type: 'input',
        name: 'learn',
        message: 'What did you learn?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
      },
      {
        type: 'input',
        name: 'liveLink',
        message: 'What is the live link url of your project?',
      },
      {
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub user name profile?',
      },
      {
        type: 'input',
        name: 'gitLink',
        message: 'What is the GitHub link url of the project?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Pick what type of lisence you want to use.',
        choices: [
          { name: 'MIT License', value: '[![License](https://img.shields.io/badge/License-MIT-brightgreen)](https://choosealicense.com/licenses/mit/)' },
          { name: 'The Unlicense', value: '[![License](https://img.shields.io/badge/License-The%20Unlicense-red)](https://choosealicense.com/licenses/unlicense/)' },
          { name: 'GNU General Public License v3.0', value: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)' },
          { name: 'Apache License 2.0', value: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://choosealicense.com/licenses/apache-2.0/)' }
        ],        
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Fill in the what you want to add to the contibuting section.',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Test instruction for this project.',
      }
    ])
      .then((answers) => {
        const mdFileContent = generateMD(answers);

        fs.writeFile('./Generated/README.md', mdFileContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README file!')
      );
    });
    

