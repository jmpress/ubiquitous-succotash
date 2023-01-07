# Fake Company Generator
#### Writes Sequelizer-cli seed files using Faker-generated data for custom objects.
#### By Jeffrey Press

## Description
+ This app is designed to generate fake data to fill a database. 
+ It does this by generating the data from the Faker library and building custom objects with it. 
    + These objects are specific to the database being used, and are summarized in the `data-modeling.md` file (included in this repo). 
+ Once the objects are generated, they are written to a `.js` file along with the boilerplate code needed to turn the list of objects into a Seeder file that can be used with the `npx sequelize-cli db:seed:all` command.

## Setup/Installation Requirements
+ Fork and clone this repository locally.
+ Install Node.
+ Navigate to folder and run `npm install` in the console.
+ run `npm start` in the console.
+ when complete, "Process Completed Successfully!" will be displayed on the console, and there should be new files in the `export` folder within the working directory.

## Known Bugs
+ It's kinda hacky and needs hard-code changes to create different objects or different numbers of objects. This could all be coded, but it suits my needs just fine for now.

## Support and contact details
Please contact j.michael.press@gmail.com with questions, comments, or concerns. You are also welcome to submit a pull request.

## Technologies Used
   + Javascript
   + Node.js
   + @faker-js
   + Sequelize and Sequelize-cli (indirectly)

### License
This software is released under the GNU general public license.

Copyright (c) 2022 Jeffrey Michael Press
