
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./src/models/user');
require('dotenv').config()

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/register", async (req, res) => {
    const { name, email, username, password, mobile } = req.body;
    const  user = new User({ name, email, username, password, mobile });
   const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));
   user.password = hashedPassword;
    user.save()
    .then(() => {
        res.status(200).json({ message: 'User registered successfully' });
    })
    .catch((error) => {
        res.status(400).json({ message: 'Error registering user', error });
    });
});


app.post("/api/login", async (req, res) => {
    const {username, password} = req.body;
    const user =  await User.findOne({username : username })
    if (user){
      const isMatched =  await bcrypt.compare(password, user.password)
      if(isMatched) {
        res.status(200).json({ message: 'Login Succesful'});
      }
      else {
         res.status(401).json({ message: 'Wrong Password'})
       }
    }else{ 
          res.status(401).json({ message: 'User not found'})
    }
})

mongoose.connect(process.env.MONGO_URL)
  .then(() => {

    console.log('Connected!')
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });

});

