# Social Network API
  ![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)

  ## Table of Contents
  1. [Description](#Description)
  2. [Installation/Usage Instructions](#Installation/Usage)
  3. [License](#License)
  4. [Contributors](#Contributors)
  5. [Questions](#Questions)
  6. [User-Story](#User-Story)
  7. [Acceptance-Criteria](#Acceptance-Criteria)

  ## Description
  A API built for social networks, allows for the creation/updating/and deletion of users, the ability to add and delete friends, make thoughts, and add reactions to those thoughts

  ## Installation/Usage
  ensure you are in the correct directory and do a 'npm install'. then do a 'npm start' to start the server
  Link to demo walkthrough: https://drive.google.com/file/d/19VInPmtSm3HTFVolfLz597svHtDhm3bO/view?usp=sharing

  ## License
  Copyright (C) function getFullYear() { [native code] }
    MIT License.
    Read more at: https://choosealicense.com/licenses/mit/

  ## Contributors
  In collaboration with: Alexander Lu  

  ## Questions
  For further questions, you can reach out to me by:
  email: alu1868@gmail.com
  GitHub: github.com/alu1868

  ## User-Story
  AS A social media startup
  I WANT an API for my social network that uses a NoSQL database
  SO THAT my webstie can handle large amounts of unstructured data

  ## Aceptance-Criteria
  GIVEN a social network API

  WHEN I enter the command to invoke the application
  THEN my server is started and the Mongoose models are synced to the MongoDB database

  WHEN I open API GET routes in Insomnia for users and thoughts
  THEN the data for each of these routes is displayed in a formatted JSON

  WHEN I test API POST, PUT, and DELETE routes in Insomnia
  THEN I am able to successfully create, update, and delete users and thoughts in my database

  WHEN I test API POST and DELETE routes in Insomnia
  THEN I am able to succesfully create and delete reactions to thoughts and add and remove friends to a user's friend list
  