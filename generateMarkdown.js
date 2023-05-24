//Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)`;
  }
  else if (license === "Apache") {
    return `![Apache License](https://img.shields.io/badge/license-Apache-blue.svg)`;
  }
  else if (license === "GPL") {
    return `![GPL License](https://img.shields.io/badge/license-GPL-blue.svg)`;
  }
  else if (license === "BSD") {
    return `![BSD License](https://img.shields.io/badge/license-BSD-blue.svg)`;
  }
  else if (license === "None") {
    return ``;
  }
  else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
    if (license === "MIT") {
      return `https://opensource.org/licenses/MIT`;
    }
    else if (license === "Apache") {
      return `https://opensource.org/licenses/Apache-2.0`;
    }
    else if (license === "GPL") {
      return `https://opensource.org/licenses/gpl-license`;
    }
    else if (license === "BSD") {
      return `https://opensource.org/licenses/BSD-3-Clause`;
    }
    else if (license === "None") {
      return ``;
    }
    else {
      return ``;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    
    if (license === "MIT") {
      return `MIT License`;
    }
    else if (license === "Apache") {
      return `Apache License`;
    }
    else if (license === "GPL") {
      return `GPL License`;
    }
    else if (license === "BSD") {
      return `BSD License`;
    }
    else if (license === "None") {
      return ``;
    }
    else {
      return ``;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Tests](#tests)
  * [License](#license)
  * [License
  * [Questions](#questions)
  * [Contributing](#contributing)
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## Tests
  ${data.tests}
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Questions
  ${data.questions}
  ## Contributing
  ${data.contributing}

  ## Contact
  * GitHub: [${data.github}](
  

  ## Questions

  If you have any questions, please contact me at ${data.email}

  ## License

  This project is licensed under the ${data.license} license.

  



`;
}

module.exports = generateMarkdown;
