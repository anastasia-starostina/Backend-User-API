PLAN - CREATE A REST API

GET 
- install all modules with npm i ✅
- seat up a server at localhost:3000 ✅
- create a router variable and assign a router function to it ✅
- import users data from users.js ✅
- create a get route ✅
- assign success and payload to users ✅
- res.json Resonse Object ✅
- add middleware app.use in app.js ✅
- send a get request on Postman ✅

GET USER BY ID
- create a get route with the path parameter of user id :id ✅ 
- make a variable for user id within router function ✅
- make a variable for found id and turn into an empty object ✅
- iterate through an array to find the id ✅
- use Number method to compare id numbers in the loop ✅
- put found id in the response object ✅
- res.json Response Object ✅
- app.use recipe id in app.js ✅

New object for PUT REQUEST:
{"id": 51,
    "first_name": "Buddha",
    "last_name": "Gautama",
    "email": "blissfulmind@mail.com",
    "catchphrase": "A disciplined mind brings happiness."
}

Updated object for POST REQUEST

{"id": 51,
    "first_name": "James",
    "last_name": "Bond",
    "email": "007@gmail.com",
    "catchphrase": "A martini. Shaken, not stirred."
}

PLAN FOR BONUS TASKS - MODELS
        getUsers()
-create a function get to get users ✅
-import it into GET request router ✅
-test it ✅
        getUserByID()
-create a function get to get users's id ✅
-import it into GET request router with params of user is ✅
-test it ✅
        createUser()
- make a function that takes new user as a parameter ✅
- and adds it to the array using push method ✅
- import function into the router file and integrate it into the router handler ✅
- test it with Postman ✅
        updateUserByID
- make a function that loops through the users ✅
- match user id with the an updated user variable ✅
- break the loop ✅
- import and put the function in the router handler ✅
- test it with Postman ✅

        deleteUserByID
    - make a function that loops through the users ids ✅
    - match user if with the one we want to delete ✅
    - break the loop ✅
    - import and put the function in the router handler ✅
    - test it with Postman ✅
