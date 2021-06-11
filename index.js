const inquirer = require('inquirer');
const fs = require('fs');


const generateMD = (answers) =>
  `# ${answers.tittle}

  ## Description
  
  -${answers.motivation}.
  -${answers.theWhy}.
  -${answers.problem}.
  -${answers.learn}.

  ## Table of Contents (Optional)

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${answers.installation}.

  ## Usage
  
  ${answers.usage}.
  
  ## Links & Screenshots

   * [${answers.tittle}](${answers.liveLink})
  
   * [${answers.gitHub}](${answers.gitLink})
   
  ## MIT License
  
  Copyright (c) 2021 Ariel Martienz
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
  `;

inquirer
  .prompt([
      {
        type: 'input',
        name: 'tittle',
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
        name: 'livelink',
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
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
      },
      {
        type: 'input',
        name: 'thirdParty',
        message: 'If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.',
      },
    ])
      .then((answers) => {
        const mdFileContent = generateMD(answers);

        fs.writeFile('./Generated/README.md', mdFileContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README file!')
      );
    });