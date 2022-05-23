//import express
import express from 'express';
const usersRouter = express.Router();

//import user data
import users from '../libs/users.js';


//get request

import {getUserByID, getUsers} from "../models/users.js"

usersRouter.get("/", function (req, res){
    const users = getUsers();
    const responseObject = {success: true, payload: users};
    res.json(responseObject);
})

//get user id

usersRouter.get("/:id", function(req, res){
    const id = req.params.id;
    let foundId = getUserByID(id);
    const responseObject = {success: true, payload: foundId}
    res.json(responseObject);
})

//POST request

import {createUser} from '../models/users.js'

usersRouter.post('/', function(req, res) {
    const body = req.body;
    createUser(body);
    const responseObject = {
        success: true,
        payload: users
    }
    res.json(responseObject);
})

//PUT request
import {updateUserByID} from '../models/users.js'

usersRouter.put('/:id', function (req, res) {
    const id = req.params.id;
    const body = req.body;
    let foundID = {}
    updateUserByID(id, foundID)
    foundID = body;
    const responseObject = {success: true, payload: foundID}
    res.json(responseObject)
})

//DELETE Request
import {deleteUserByID} from '../models/users.js'

usersRouter.delete('/:id', function (req, res) {
    const id = req.params.id;
    let deletedUser = deleteUserByID(id);
    const responseObject = {success: true, payload: deletedUser}
    res.json(responseObject)
})


//exporting users router
export default usersRouter; 
