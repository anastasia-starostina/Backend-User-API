import express from "express";
import {
  getUserByID,
  getUsers,
  createUser,
  updateUserByID,
  deleteUserByID,
} from "./models/users.js";

import usersRouter from './routes/users.js';

const PORT = 3000;
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.use('/users', usersRouter);

app.use('/users/<user_id>', usersRouter);

app.use(express.json());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
