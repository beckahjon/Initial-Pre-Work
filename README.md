# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When we click on the domain https://www.techtonic.com/, a copy of the website is downloaded to the client’s device through the browser we are using. We see the page load with images and text, so it includes both code files and assets. There are interactive menus, buttons, and images. The page remains static as we scroll down, so there aren’t flexible components that shift when we move throughout the main page. There are several web pages within the main domain, each of which includes its own code files and assets embedded within the page.


## From start to finish, how does data reach you to be rendered in the browser?

When I type a domain into a web browser, the first thing that happens is the client (my computer) asks the browser to look at the Domain Name Server (or DNS) to find the domain’s real address. The client and the server communicate using HTTP, or Hypertext Transfer Protocol. The client then finds the domain’s home server and requests the information from the server. If it is available, the server will then send the website’s files in small bits to the client, which then assembles it for me to peruse. Websites are built using the languages HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript, which my browser then interprets into the words, images, and design I see rendered. This data is only temporarily displayed; every time I go back to the website the client asks the server again for the same data.

Sources: https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works

https://marksheet.io/browser.html


## What code is rendered in the browser?

The code that is rendered in the browser is HTML, CSS, and JavaScript. This raw data in the form of bytes is then interpreted by the browser into characters for us to read.

Source: https://blog.logrocket.com/how-browser-rendering-works-behind-the-scenes-6782b0e8fb10

## What is the server-side code’s main function?

Server-side code cannot be seen by the user and is used to interact with permanent storage such as databases and files. They are run on the server that hosts the website and run the script before loading the HTML. These codes use languages like PHP or Ruby on Rails.

Source: https://www.seguetech.com/client-server-side-code/

## What is the client-side code’s main function?

The client-side code is embedded in a website and interpreted by the web browser after you load a webpage. Client-side script is used to directly change and interact with page elements without having to connect to the database. Client-side code also acts as the interface between the user and the server.

Source: https://www.codeconquest.com/website/client-side-vs-server-side/

## What is runtime?

Runtime is when a program is running, or the execution of instructions as a program is running.

Source: https://searchsoftwarequality.techtarget.com/definition/runtime

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

JavaScript is an example of an Object-oriented Programming language. OOPs are languages that center around data, or objects, rather than functions and logic. In an OOP, an instance is a realization of an object. Every time a program runs, or an object is realized, it is an instance. Depending on the code, there could be many instances of client-side assets created.

Sources: https://www.lifewire.com/database-instance-1019612

https://whatis.techtarget.com/definition/instance


## How many instances of the server-side code are available at any given time?

You create an instance when you instantiate an object. So as many objects are being created also create instances. However, the server-side code is generally not (and should not) be accessible from the user side. This is a subject that after much research I still feel a little hazy on. I’m not sure you can access those instances because they live on the server side, so I don’t know if you could call them “available.”

## How many instances of the databases connected to the server application are created?

Each time you connect to the server application, you are creating an instance to that database. This is another instance (ha ha) in which I am a little unclear about the meaning behind the question. An instance is an occurrence or case of something, and logic would suggest that each time a client requests access to a database within the server, a new instance would be created.

Source: https://www.php.net/manual/en/language.oop5.basic.php
