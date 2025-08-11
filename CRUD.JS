const express = require('express');
const mongoose = require('mongoose');
const User = require('./userModel'); // Adjust the path as necessary
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the User API');
});

app.get('/create', async (req, res) => {

     let createUser = await User.create({
        name: "ROHIT SHARMA b.tech wala  ",
        username: "BHATI",
        email: "rs7673046@gmail.com" })
    res.send(createUser);
     });

   app.get('/read', async (req, res) => {
    let readUser = await User.find();
    res.send(readUser);
});

app.get('/update', async (req, res) => {
    let updateUser = await User.findOneAndUpdate({ username: "BHATI" }, { name: "ROHIT SHARMA UPDATED " });
    res.send(updateUser);
});

app.get('/delete', async (req, res) => {
    let deleteUser = await User.findOneAndDelete({ username: "BHATI" });
    res.send(deleteUser);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});