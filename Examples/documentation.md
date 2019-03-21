# Documentation
When creating projects and web-pages it is a good idea to document how another developer can use your application. Documentation online, shows users how they should be using their libraries and the use-cases for their code. 

So let us explore how we should document our projects so that other people can use them. 

## Specification file (spec file)
Inside a Spec file develops will write the specifications for their application. But what does that actually mean!?!

Specifications are the functionalities of your website or application. 

EG: (Canvas example)

Our application will give users the ability to draw lines on the canvas element

Our application will give users the ability to draw circles on the canvas element

Our application will give users the ability to draw rectangles on the canvas element

Our application will give users the ability to write text on the canvas element

Our application will use buttons so that users can switch between different drawing styles

Our application will have the ability to clear all the canvas

ETC....

In the example above, we are essentially just listing out what functions our application will have, you can also decide if you have a landing page if you want but this usually goes into the wireFrame

## WireFrame
Developers use a wireframe so that they can get their page concepts straight and aligned with one another. So it essentially will document the flow of your application. This flow will detail all the elements on each of your pages, your navbar, buttons, content and where it should be even the images (placeholders).

If you've buttons and they link to new pages then you should use an arrow to show the new page that is sent when the button is pressed. 

For Canvas, you will have a basic representation of the index.html, in your wireFrame, specify which buttons will do what and how your page will be styled. 

## Powerpoint Presentations
Throughout this course you will be working in groups to create projects that you will present to the class. During these presentations you will need to address a couple of key things,

    Why you built this project - does it solve real world problems

    The project outlook and appearance - shown through the wireframe (a screen cap or two will suffice)

    When you build an application that has its own database you will need to detail how the database is structured and how it works in your application - database design. 

    How will this project make money - this is a question that you as a group should be able to answer. You could claim ad-space as your application becomes popular - or if your site is an ecommerce one then perhaps you're taking a percent from peoples purchases. 

    What technology did you use to build the application - the stack you used for your frontend and backend..
    For the canvas application, bootstrap, jquery, fontawesome hammerJS ETC. 


## Readme.md
In a Readme.md one would usually detail, how to get the application to work:

### Example Documentation commands
EG:

Clone the github repository to your local machine.

Run the command, "npm install" inside the cloned directory

Run the command "node index.js" inside the cloned directory to start the application

Goto "http://localhost:8080" to see the rendered pages.


The example above is for an NPM project, where we have node_modules inside our project just like exercism. 


### Example library
With this in mind, in the Readme, you should also list any external libraries you use, both for frontend code (like CDNS) and backend code (like npm packages), and why you have used them in your project

EG (1) - ALOT of detail

In this Personal Page, I have used Bootstrap, so that I can easily manipulate content in a structured manner (using the col system) moreover, bootstrap will automatically resize the images when they have the class 'img-fluid' this is very useful so that I do not need to use many @media queries. 

EG (2) - BareBones

In my HTML document I used:

            BootStrap - for styling

            JQuery - for easy selection

            FontAwesome - so I could use their free icons

            SmoothScroll - so that the page scrolls in a smooth manner and doesnt just snap from section to section

            Animate.Css - So that we can animate elements without custom animations.

### Example fixes
You should also include how you overcame the many bugs that you encountered when coding your application.

EG:

During the creation of this website, I wanted to use a navigation bar that was fixed to the left side of our page, however, I couldnt find the documentation to do it. So I manipulated the CSS and realised that if I changed right:0 to left:0 in my css, the element moves!!