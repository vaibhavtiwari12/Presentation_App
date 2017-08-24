# Todoapp

This is TODO APP that I have presented during the Angular 4 app demonstration. please refer the code below and follow the steps in order to run the code. 

## Setup 

To Run the code do following: 

1) Download the code from the respository. 
2) Install node.js in your system (simple program download -- google).
3) Go inside the folder and run command prompt their (shift + right click) 
4) Run command `npm install -g @angular/cli `
5) Once it is installed run command `npm install`.
6) follow further document. 

## Firebase setup: 

1) Open https://firebase.google.com/ 
2) Login using your google account.
2) Click on top right link "GO TO CONSOLE".
3) Here, click on "Add New Project".
4) Give the project name and area and click create project.
5) Now in the page opened : click on : "Add Firebase to your web app".
6) Copy the `var config`.
7) open `/src/app/app.module.ts` in the project.
8) replace : 
`{
  apiKey: "Api Key",
  authDomain: "aut domain",
  databaseURL: "someURL",
  projectId: "Project ID",
  storageBucket: "some app bucket",
  messagingSenderId: "Message ID"
}`

with `var config`.
9) Follow further.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
