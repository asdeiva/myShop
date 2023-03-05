Contest Project for F3 - 

Announcements - 

Module Test  - 4th March
DSA Coding Test in JS - 5th March
Project Submission	- 5th March - Github repo link and hosted link is required.

Module Test and Project Submission are different. And are mandatory.


Starter Template - https://github.com/jayeshsadhwani99/f3-project

Figma - https://www.figma.com/file/0LzO7mD7G9JDYXbaOK8wuI/Shopping-Cart-Contest?node-id=0%3A1&t=YOclG9pB48jKYKMl-1

API EndPoint - 
https://fakestoreapi.com/


Get Request For Products - https://fakestoreapi.com/products


JSON Structure given from the api - 

{ 
"id": 1, 
"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", 
"price": 109.95, 
"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",		
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", 
"rating": { "rate": 3.9, "count": 120 } ,
“Colours”:[“red”,”blue”,”black”],
“sizes”:[“s”,”l”,”m”,”xl”]
},

THE BOLDED KEY VALUE PAIRS YOU’LL HAVE TO ADD ON YOUR OWN - MAKE FUNCTIONS TO RANDOMLY ADD THESE COLOURS AND SIZES In every object. 

Filtering of products on the basis of colors and sizes is bonus - (10 marks)


Shopping Page - 

Feature List - 

We’ll be creating a simple shopping cart application using html,css and Advanced JS concepts. The topics we’ll cover include promises, async await , using storage APIs and basic API callswhile also dealing with complex DOM Manipulations. 

Here’s a list of features that this project includes and you’ll be graded on these points  - 

Signup and login handle using local storage - multiple users- if not logged in don’t let the person enter the shot or my cart or profile - 20 Marks
Fetching of products using api - in the shop page - you can save the products in localstorage as well (Hint) - 20 Marks
Filter of items - based on name (search bar), price and rating (sidebar) + (filtering based on colour and size is for bonus  - not mandatory but optional ) - 20 Marks (+ 10 Bonus)
Shopping cart handle using localstorage (Adding and removing items) - 10 Marks
Checkout functionality of my cart - after razorpay.open() delete myCart items and remove it. - 10 Marks
Profile page - show data taken using signup and allow user to edit it. - 10 Marks
Basic html+css animations and styling will be tested too - 10 Marks

Project Breakup - 


Create the ui as shown in the figma - 
Create 6 pages - index.html, login.html, signup.html ,shop.html,cart.html and profile.html
Make sure the ui is exact - use the font Inter ( from google fonts)
You can extract the other assets from figma itself.
The shop.html page will have one main search input field. It will have 5 toggle buttons under it. 
On the left it will have a fixed sidebar - which will have multiple checkbox’s as shown in the ui. It will also have a slider. (input type=”range”)
The signup page will have 5 inputs - first name,last name, email, password and confirm password and a signup button.
The login page will have 2 inputs only email and password and the login button.
Apart from the ui make basic events on click of buttons, and console log which button was clicked. Also store all inputs in variables and console log them on click of signup and login button and onChange event of input of search.

2)
Get request on the api call to get all products - as soon as you land on the shop page.
Map the products array and show the products in a flex in the shop page as shown in the figma. 
Also, perform basic functions like the search bar where you have to  filter by product name and sidebar component functions and make the filters work. (filter by color, price , product types - men's , women's, electronics , jewellery)
In the shop page make the toggle button’s work - on clicking of men’s just show men’s products and so on. Make sure the toggle which is created has a black background. 
If on searching no product is there, show a message saying that you couldn’t find the product the user searched for. 

3)
Handle login and signup using local storage - also generate a token (random 16 byte string) every time you log in. If the user isn't logged in make sure to remove them and take them back to the login page. 
Make another page called profile.html where you’ll show all the information given by the user while signing up and allow editing of user information.
Make sure if an email is already used you don’t allow them to signup with the same email again. If password or email is incorrect show these errors as well.

4) 
Also, add items to the cart and also save it using local storage.
Make a new page called my cart page - add the functionality of removing the items that you added.
On click of the checkout, button get rid of the cart and show an alert saying that the items were purchased. 
Razorpay Integration - 
