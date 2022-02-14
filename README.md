# carShairAssesment

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


