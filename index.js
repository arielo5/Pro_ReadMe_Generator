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
  
  ## Contributing to Open Source Projects

  ### About

  This document provides a set of best practices for open source contributions - bug reports, code submissions / pull requests, etc.
  
  For the most part, these guidelines apply equally to any project regardless of programming language or topic. Where applicable, we outline where individual projects/languages may have additional requirements.
  
  Naturally, this document is itself open source, and we encourage feedback & suggestions for improvement.
  
  ### Sources

  Currently this document draws from the contribution documentation for a handful of related Python open source projects: Fabric, Invoke, Paramiko, etc.
  
  It’s expected that over time we will incorporate additional material from related attempts at consolidating this type of info. We’ll update with a list here when that happens.
  
  ### Submitting bugs

  #### Due diligence

  Before submitting a bug, please do the following:
  
    * Perform basic troubleshooting steps:
  
      * Make sure you’re on the latest version. If you’re not on the most recent version, your problem may have been solved already! Upgrading is always the best first step.

      *Try older versions. If you’re already on the latest release, try rolling back a few minor versions (e.g. if on 1.7, try 1.5 or 1.6) and see if the problem goes away. This will help the devs narrow down when the problem first arose in the commit log.

      *Try switching up dependency versions. If the software in question has dependencies (other libraries, etc) try upgrading/downgrading those as well.
    
    * Search the project’s bug/issue tracker to make sure it’s not a known issue.
    
    * If you don’t find a pre-existing issue, consider checking with the mailing list and/or IRC channel in case the problem is non-bug-related.
  
  ### What to put in your bug report

  Make sure your report gets the attention it deserves: bug reports with missing information may be ignored or punted back to you, delaying a fix. The below constitutes a bare minimum; more info is almost always better:
  
    * What version of the core programming language interpreter/compiler are you using? For example, if it’s a Python project, are you using Python 2.7.3? Python 3.3.1? PyPy 2.0?
  
    * What operating system are you on? Windows? (Vista? 7? 32-bit? 64-bit?) Mac OS X? (10.7.4? 10.9.0?) Linux? (Which distro? Which version of that distro? 32 or 64 bits?) Again, more detail is better.
  
    * Which version or versions of the software are you using? Ideally, you followed the advice above and have ruled out (or verified that the problem exists in) a few different versions.
  
    * How can the developers recreate the bug on their end? If possible, include a copy of your code, the command you used to invoke it, and the full output of your run (if applicable.)
  
      * A common tactic is to pare down your code until a simple (but still bug-causing) “base case” remains. Not only can this help you identify problems which aren’t real bugs, but it means the developer can get to fixing the bug faster.

  ### Contributing changes

  #### Licensing of contributed material

  Keep in mind as you contribute, that code, docs and other material submitted to open source projects are usually considered licensed under the same terms as the rest of the work.
  
  The details vary from project to project, but from the perspective of this document’s authors:
  
    * Anything submitted to a project falls under the licensing terms in the repository’s top level LICENSE file.
  
      * For example, if a project’s LICENSE is BSD-based, contributors should be comfortable with their work potentially being distributed in binary form without the original source code.

    * er-file copyright/license headers are typically extraneous and undesirable. Please don’t add your own copyright headers to new files unless the project’s license actually requires them!
  
      * Not least because even a new file created by one individual (who often feels compelled to put their personal copyright notice at the top) will inherently end up contributed to by dozens of others over time, making a per-file header outdated/misleading.

  ### Version control branching

    * Always make a new branch for your work, no matter how small. This makes it easy for others to take just that one set of changes from your repository, in case you have multiple unrelated changes floating around.
  
      * A corollary: don’t submit unrelated changes in the same branch/pull request! The maintainer shouldn’t have to reject your awesome bugfix because the feature you put in with it needs more review.

    * Base your new branch off of the appropriate branch on the main repository:
  
      * Bug fixes should be based on the branch named after the oldest supported release line the bug affects.
  
        * E.g. if a feature was introduced in 1.1, the latest release line is 1.3, and a bug is found in that feature - make your branch based on 1.1. The maintainer will then forward-port it to 1.3 and master.

        * Bug fixes requiring large changes to the code or which have a chance of being otherwise disruptive, may need to base off of master instead. This is a judgement call – ask the devs!

    * New features should branch off of the ‘master’ branch.
  
      * Note that depending on how long it takes for the dev team to merge your patch, the copy of master you worked off of may get out of date! If you find yourself ‘bumping’ a pull request that’s been sidelined for a while, make sure you rebase or merge to latest master to ensure a speedier resolution.

  ### Code formatting

    * Follow the style you see used in the primary repository! Consistency with the rest of the project always trumps other considerations. It doesn’t matter if you have your own style or if the rest of the code breaks with the greater community - just follow along.

    * Python projects usually follow the PEP-8 guidelines (though many have minor deviations depending on the lead maintainers’ preferences.)

  ### Documentation isn’t optional

  It’s not! Patches without documentation will be returned to sender. By “documentation” we mean:
  
    * Docstrings (for Python; or API-doc-friendly comments for other languages) must be created or updated for public API functions/methods/etc. (This step is optional for some bugfixes.)
  
      * Don’t forget to include versionadded/versionchanged ReST directives at the bottom of any new or changed Python docstrings!
  
        * Use versionadded for truly new API members – new methods, functions, classes or modules.

        * Use versionchanged when adding/removing new function/method arguments, or whenever behavior changes.

    * New features should ideally include updates to prose documentation, including useful example code snippets.
  
    * All submissions should have a changelog entry crediting the contributor and/or any individuals instrumental in identifying the problem.
  
  ### Tests aren’t optional

  Any bugfix that doesn’t include a test proving the existence of the bug being fixed, may be suspect. Ditto for new features that can’t prove they actually work.
  
  We’ve found that test-first development really helps make features better architected and identifies potential edge cases earlier instead of later. Writing tests before the implementation is strongly encouraged.
  
  ### Full example

  Here’s an example workflow for a project theproject hosted on Github, which is currently in version 1.3.x. Your username is yourname and you’re submitting a basic bugfix. (This workflow only changes slightly if the project is hosted at Bitbucket, self-hosted, or etc.)
  
  ### Preparing your Fork

    * Click ‘Fork’ on Github, creating e.g. yourname/theproject.
    * Clone your project: git clone git@github.com:yourname/theproject.
    * cd theproject
    * Create and activate a virtual environment.
    * Install the development requirements: pip install -r dev-requirements.txt.
    * Create a branch: git checkout -b foo-the-bars 1.3.

  ### Making your Changes

    * Add changelog entry crediting yourself.
    * Write tests expecting the correct/fixed functionality; make sure they fail.
    * Hack, hack, hack.
    * Run tests again, making sure they pass.
    * Commit your changes: git commit -m "Foo the bars"

  ### Creating Pull Requests

    * Push your commit to get it back up to your fork: git push origin HEAD
    * Visit Github, click handy “Pull request” button that it will make upon noticing your new branch.
    * In the description field, write down issue number (if submitting code fixing an existing issue) or describe the issue + your fix (if submitting a wholly new bugfix).
    * Hit ‘submit’! And please be patient - the maintainers will get to you when they can.

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
          {name: 'Apache License 2.0', value: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://choosealicense.com/licenses/apache-2.0/)' }
        ],        
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
    

