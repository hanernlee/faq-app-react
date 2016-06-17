# FAQ App
***
Simple FAQ Search app built using React JS

***

## Technologies

1. Node.js
2. React JS
3. Gulp
4. JavaScript including the following libraries:
  - jQuery
7. Saas / CSS3
  - Skeleton CSS
8. HTML5

***

## Approach / Design Notes

### Usage of Plugins / Frameworks

1. React JS
  - I decided to build this app using React JS as I wanted to learn something new and explore a modern front-end framework. React makes it easier to interact with the DOM, reducing boilerplate code.The app allows for real-time search experience based on the listed Frequently Asked Questions (FAQ) library.

2. Node.js / Gulp
  - Node.js was used together with Gulp to allow Browser-Sync for faster tweaking and testing, Autoprefixer and Saas compilation.

3. Saas / CSS3 with Skeleton CSS
  - I wanted to try out Skeleton CSS due to it's light weight library. I managed to tweak a few settings and colours but Saas really helped in terms of managing my stylesheets.

### User Story
As a User I want to be able to look for answers to commonly asked questions easily in the FAQ section.

To be able to look for a particular question easily, it makes more sense to have a search bar which will allow for quick, easy and live searches.

Results from the search should display instantly, updating dynamically on the page based on the results and "No Results Found" should be displayed if there are no matching results.

A navigation bar is also necessary should User wish to go back to the main page.

### Wireframe

<img src="http://i.imgur.com/LxFrVbv.png">

### Scaleability of design/code

As more questions are being added to the FAQ collection, the page will increase height-wise and will not affect other components on the page. The search functionality will still work as these questions are being stored in an array of objects which will allow the page to be updated dynamically. In this instance, React helps reduce massive boilerplate codes and avoids costly DOM operations by making updates in a very efficient manner.

## Links


[Check out the FAQ App here!](http://hanernlee.github.io/faq-app-react/)

Alternatively clone this repo and run
```npm install``` then ```npm start```.
