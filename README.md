# Re-Medi
Project for CSCI-SHU 410 by Andrew Lee, Andrew Liu, Xin Xiang, Zane Fadul\
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run the app

In the project directory, you can run:

### 1. `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### 2. `node server.js`

Deploys the server, must be done after `npm start`. Run in a separate terminal.\
You should receive a message 'Listening to port: {8080}' if there are no errors
To view the webpage you can go on any browser and acess the page by URL: localhost:8080 or (ip):8080

### Directory guide

in the app folder we will find 2 folders: controllers, and models.

	The models folder is used for storing the DB handler module which extends the server, as well as the classes and db component definition files
	The controllers folder is used for general backend handling

in the src folder:
	
	contains React components and general frontend

in the public folder:

	contains React frontend

in ROOT:

	contains package.json, README, and server.js used to run webapp.
