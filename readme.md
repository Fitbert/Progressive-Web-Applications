# PWA-Text-Editor

Week-19 Challenge (Progressive Web Applications)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Table of Contents

- [Description](#description)

- [Live-URL](#live-url)

- [Screenshots](#screenshots)

- [Technologies-Used](#technologies-used)

- [Installation](#installation)

- [Features](#features)

- [Usage-Information](#usage-information)

- [License](#license)


## Description

This application serves as a practical demonstration and opportunity to enhance skills in developing progressive web applications (PWAs). Its primary objective was to gain a deeper comprehension of the inner workings of the React JavaScript library. The application concentrates on four key concepts:

*Configuring the webpack.config.js file with the necessary Workbox plugins for service worker and manifest files, as well as incorporating CSS and Babel loaders to enable CSS and JavaScript compilation on devices running legacy code (i.e., ES5).
*Implementing asset caching within the src-sw.js file, granting the application offline functionality.
*Configuring the database to allow for adding, updating, and retrieving data from the IndexedDB.
*Incorporating event handlers for the install button, enabling users to install the application locally and utilize it offline.

## Live URL

[https://jate-text-editor15-e077c2d0ee63.herokuapp.com/](https://jate-me.onrender.com)

## Screenshots



## Technologies Used

This application is powered by Webpack (HTML-Webpack-Plugin, Babel, and CSS Loader), Node.js (v16.19.1), Express.js (v.14.17.1), and JavaScript. Nodemon (v2.0.4) and Concurrently (v5.2.0) were utilized as a devDependencies allowing the server to refresh when edits were made to application, and allowing both the front end and back end to be ran on a single command (npm run start:dev).

## Installation

Users can view and utilize the application through the use of the browser by visiting the deployed application at [text](https://jate-me.onrender.com)

Viewing the application in the browser will also give users the ability to download the application allowing it to be used offline.

To make any further additions, start by cloning the repo in the command line git clone [text](https://github.com/Fitbert/Progressive-Web-Applications.git), or forking the repo.



## Features

Upon launching the application, any notes added to the site will be automatically persisted in the IndexedDB. There is no need for manual saving, as the application seamlessly updates the IndexedDB. The only requirement for this feature to function is for the user to click outside the active window. When revisiting the site, users will find all their previously entered notes and other information readily available and preserved on the page.

## Usage Information

This application is designed for intuitive usage. Simply visit the live URL ([text](https://jate-me.onrender.com)) and begin adding notes immediately! Users will notice an install button in the navigation bar, enabling them to download the application for offline use. Note-saving occurs automatically through the IndexedDB; the sole requirement is for the user to click outside the active window. This ensures that notes are persisted, whether the application is used online or offline.


## Test Instructions

There is currently no unit testing written yet for this application.

## License

NOTICE: This application is covered under the MIT License

