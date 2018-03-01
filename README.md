# Tracking Clients

First all, 
- npm install to install dependencies from NodeJs

Second all,
- in the web folder repeat the first step to install dependencies from Angular.

# MongoDB

In config/connection.js

Please check your mongodb connection and verify the correct port.

#MongoDB - Windows 64bits Installation

- Please download from here https://www.mongodb.com/download-center?_ga=2.14942454.110731470.1517940849-3868587.1516984221#production

- After this define the following structure:
    - Mongo
        - data
            - db
        - mongodb

- In the installation step, please choose your folder mongodb (‪C:\Mongo\mongodb\), and install it.

- Run this command as administratios over your folder ubication, to initialize the mongo server :
    ‪C:\Mongo\mongodb\bin\mongod.exe --dbpath ‪C:\Mongo\data\db
- This command is for manage the mongo server
    ‪C:\Mongo\mongodb\bin\mongo.exe