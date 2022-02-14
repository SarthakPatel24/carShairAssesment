# carShairAssesment

The project is structured in a way to reuse the logic as much as possible.

## How to Run

Once you have cloned our downloaded the project you would have to open the terminal and run "npm install" command , this would install all the required modules for the project. Once the dependencies are installed you should run the "npm start" command to run the server where all the apis would be hosted. 

To check the apis:
1. http://localhost:3000/api/vehicle/getallmakes
2. http://localhost:3000/api/vehicle/getMakesForManufacturerAndYear/mer/2014 ("mer" is the Manufacturer and "2014" is the Year)
3. http://localhost:3000/api/vehicle/getDetailsFromVin/1FMFU18556LA24544 ("1FMFU18556LA24544" is the VIN Number)

## Deployment
I have deployed my assesment on Heroku in the below link:

https://carshairassesment.herokuapp.com/

1. https://carshairassesment.herokuapp.com/api/vehicle/getallmakes
2. https://carshairassesment.herokuapp.com/api/vehicle/getMakesForManufacturerAndYear/mer/2014
3. https://carshairassesment.herokuapp.com/api/vehicle/getDetailsFromVin/1FMFU18556LA24544

## Folder Structure
The complete project is divided initially into three parts:
1. node modules : contains all the necessary modules from npm to run the project.
2. src: the source code of the project.
3. required files (package.json, gitignore, env): these folders provide guidance to system while executing the project.

The src folder is again divided into 4 parts:
1. api folder: All the APIs of the project are stored over here.
2. config folder: All the configurations related to Database, or any other external resource will be kept here.
3. app.js: All the APIs will be composed as a one Express.js application in this file.
4. index.js: the server for running the whole project is created in this file. 

Finally the api folder is divided into 4 parts: 
1. controllers: This folder contains all the controller files which contains all the buisness logic related to all APIs.
2. helpers: All the files which helps in retreiving any information from external resource or provides a service or does validations are stored here.
3. models: All the interactions related with DBMS are done in the files of this folder.
4. routes: All the routes to the APIs are written over here.

## Explaination
The "vehicle.routes.js" file maps all the routes to the apis that are created. The controller functions in the "vehicle.controller.js" are called from the routes file mentioned before. The controller functions also takes HTTP requests and returns HTTP responses whenever they are called. These functions inside the controller file calls the functions in the helper file named "vehicle.helper.js" which fetches the outputs from the NHSTA APIs. All of these functions can be reused whenever and wherever they are required again.

