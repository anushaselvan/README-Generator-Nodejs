// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers){
  return `
  <h1>${answers.title} </h1>
  ![badge](https://img.shields.io/badge/license-${answers.license}-yellowgreen.svg)

  ## Description
   ${answers.description}

  ## Table of Contents
   - [Installation](#Installation)
   - [Usage](#Usage)
   - [License](#License)
   - [Contribution](#Contribution)
   - [Tests](#Tests)
   - [Questions](#questions)
   
  ## Installation
    ${answers.installation}
  ## Usage
    ${answers.usage}
  ## Contribution
    ${answers.contribution}
  ## Tests
    ${answers.tests}
  ## Questions
    ${answers.questions}



   `
  ;
}
module.exports = generateMarkdown;
