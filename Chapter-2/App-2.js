// ## Namaste React Course by Akshay Saini
// # Chapter 02 - Igniting our App

//!  --Package is a module(piece of code) , to have package inside your project , you need package managers ie yarn or npm-- 

//! --here we are going to use the npm--

//? 1. FOR INITIALIZING THE NPM INSIDE THE YOUR PROJECT :
//- npm init -y (will skip many options and npm will take care of it.)  or npm init (wont skip any options you need to fill things) 
//* also when you use any of these commands you will get package.json file where every data of your project will be tracked down like what devdependies or dependies you have used. 

//? 2. FOR INSTALLING THE PACKAGE 
//- npm install pakage-name (for dependies) or npm install -D package-name (for devdependies )  both will give ou pacakge-lock.json file  as well as node_modules
//* in this kind of files you will get the specific locked version of your dependies , so that you can share with your devlopers as well. 

//* and inside the node_modules , all the packages will be there which are inter dependend on each other known as transitive dependencies.

//* NEVER PUT YOUR node_modules and your dev dependencies on the git because it is only avail for the project purpose only , also it contains so much memory and can be re-install  by the servers as needed from the package-lock.json file as it contains all the records what packages installed and what not etc. 

//* so that is why we send the package.lock file to git , so that servers directly fetch this file from git.

//? 3. NOW WE NEED TO EXECUTE THE PARCEL
//- npx parcel index2.html  (this will create me the dist and parcel-catch folder)
//* in this you need to take care of the few things 
//* remove the main from package.json as entryy point we are creating from parcel only npx parcel index2.html by writing here
//* also if we need production ready files inside our dist folder then [ npx parcel build index2.html ] write the build command...it will show you production ready files which are ready to be send to production




/*
 *** Parcel Feature ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++ (Execute File when changes occur)
 * BUNDLING
 * MINIFY
 * Cleaning our Code (Example - Remove Console.log)
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization(as media takes lots of time to load)
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev [Example - npx parcel index.html --https]
 * Port Number [Example - If port number using in localhost then it will change in port number in another project running on localhost]
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies(dependencies over other then other like parcel dependencies are on other then other on other )
 * 
 * so package manager handles our transitive dependencies which is stored inside the node_module folder 
 */


 import React from "react";
 import ReactDOM from "react-dom/client";
 
 

 const heading = React.createElement('h1', 
   { 
     id: "title", 
     style: { background: "pink", color: "white" } 
   }, 
   "Hola"
 );
 
 const heading2 = React.createElement('h1', 
   { 
     id: "title", 
     style: { background: "lightgreen", color: "yellow" } 
   }, 
   "John bro"
 );
 
 const container = React.createElement('div', null, [heading, heading2]);
 
 const root = ReactDOM.createRoot(document.getElementById("root"));

//  console.log('Root element:', document.getElementById("root"));
 root.render(container);
 