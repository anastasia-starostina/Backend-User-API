import users from "../libs/users.js";

import express from "express";
const usersRouter = express.Router();

// GET ALL USERS
export function getUsers() {
    return users;
}

// GET A USER BY ID
export function getUserByID(id) {
    let foundUser = {};
    for(let i = 0; 1 < users.length; i++) {
        if (Number(id) === users[i].id) {
            foundUser = users[i];
            return foundUser;
        }
    }
}

// CREATE A USER
export function createUser(newUser) {
    users.push(newUser);
    return newUser;
}

// UPDATE A USER BY ID
export function updateUserByID(id, updatedUser) {
    for (let i = 0; i < users.length; i++) {
        if(Number(id) === users[i].id) {
            updatedUser = users[i];
            break;
        }
    }

}

// DELETE A USER BY ID
export function deleteUserByID(id) {
    for (let i = 0; i < users.length; i++) {
        if(Number(id) === users[i].id) {
            let foundUser = users.splice(i, 1);
            return foundUser;
        }
    }
}

//    for (let i = 0; i < users.length; i++) {
//    if(Number(id) === users[i].id) {
  //      deletedUser = users.splice(users[i])
    //    break
    //}
//}