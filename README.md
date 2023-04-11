# yeshtery Project

this project allows people to buy physical goods, services, and digital products over the internet rather than at a brick-and-mortar location and it's separate three parts :
1 - Store
show all products you are wanting to buy right now
2- Cart
which is has which Product you are wanting to buy right now with quantity.
3 - Product
show product with details

Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   └── images # helpful images for your app
           ├── logo.svg
           └── index.html # DO NOT MODIFY
└── src
    ├── components # The Resueable components of my project
        └── Cart.js # shown Cart component and structure of app
        └── Header.js # shown Title of App
        └── Navbar.js # shown Category for Each product in my project
        └── Store.js # shown data for Each products in shop or fake api fetch all result
        └── Product.js # shown data for single product in shop or fake api fetch single result and use lazy loading 
        └── SliderImg.js # shown all other thumbnail of product with slide shape
        └── NotFound.js # shown 404 page or wrong url route
    ├── pages # The structure of my project
        └── DefaultLayout.js # shown structure of app

    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── services # The structure of my project
        ├── Apis
            └──  ApiDummy.js # A JavaScript API for the provided fake api backend.Instructions for the methods are below.
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
     ├── styles
            └──  variable # Global folders styles. 
                └── _helper.scss # Global helper styles like mixen. 
                └── _variable.scss # Global variables styles like colors. 
            └──  Navbar.scss # Navbar components styles. 
            └──  Store.scss # Store components styles. 
            └──  Product.scss # Product components styles. 
            └──  Footer.scss # Footer components styles. 
