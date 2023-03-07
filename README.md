# Crafters-Community-API

  ## Description
This project is a demonstration of a social network application using a NoSQL database. I'm using the Mongoose ODM to connect our MongoDb and Node.js. An using Express.js for routing. This application allows Users to add or remove friends, create or delete thoughts and reactions. Similiar to many larger social networking apps.
 
  ## License
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions](#questions)
  
  ## Installation
  
  Clone this application to your repository and have `Node.js`, `Express.js`, `MongoDB` and `Mongoose` packages installed to run this application.
  To run tests you will need to have Insomnia or another API call testing software.
  
  ## Usage
  
  This application does not have a front end so the following video shows how this application functions:
  
  [Video Demostration](https://watch.screencastify.com/v/w9qq5oDFi7wedGgIL59A)

  ## Tests

  The walkthrough of the usage video shows Insomnia being used to test the API calls. These are the following API routes used:

  **Users**
  - Find all users `GET /api/users`
  - Find user by Id `GET /api/user/:userid`
  - Create new user `POST /api/users`
  - Update user `PUT /api/users/:userid`
  - Delete user `DELETE /api/users/:userid`

  **Friends**
  - Add friend `POST /api/users/:userid/friends/:userid`
  - Delete friend `DELETE /appi/users/:userid/friends/:userid`

  **Thoughts**
  - Find all thoughts `GET /api/thoughts`
  - Find thoughts by Id `GET /api/thoughts/:thoughtid`
  - Create new thought `POST /api/thoughts`
  - Update thought `PUT /api/thoughts/:thoughtid`
  - Delete thought `DELETE /api/thoughts/:thoughtid`

  **Reactions**
  - Create reaction `POST /api/thoughts/:thoughtid`
  - Delete reaction `DELETE /api/thoughts/:thoughtid/reactions/:reactionid`
  
  ## Contributing
  
  No contribution to this repo
   
  ## Questions
  
  Any questions please contact me at: ladudrey@gmail.com. 
  More examples of my work are available at [GitHub](https://github.com/LDudrey).